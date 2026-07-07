from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage
import aiosmtplib
from email.message import EmailMessage


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# DCA Limos Company Knowledge Base
DCA_LIMOS_SYSTEM_PROMPT = """You are a friendly and professional AI assistant for DCA Limos, a premium luxury transportation company. You can ONLY answer questions about DCA Limos and their services. If asked about anything unrelated, politely redirect the conversation back to DCA Limos services.

**COMPANY INFORMATION:**
- Company Name: DCA Limos
- Phone: (877) 609-1919 (Available 24/7)
- Email: info@dcalimos.com
- Website: dcalimos.com
- Established: 2008 (15+ years of experience)
- Satisfied Clients: 50,000+
- On-Time Rate: 99%

**SERVICES OFFERED:**
1. Airport Transportation - Transfers to/from DCA (Reagan National), BWI, and Dulles airports
2. Corporate Car Service - Executive transportation for business professionals
3. Wedding Limousine Service - Elegant limos for weddings and special occasions
4. Prom Limo Rental - Safe and stylish transportation for proms
5. Special Event Transportation - Anniversaries, birthdays, parties
6. Hourly Charter Service - Flexible hourly bookings for multiple stops

**LUXURY FLEET:**
1. Economy Class - Affordable comfort (3 passengers, 2 bags)
2. Business Class - Mercedes E-Class (3 passengers, 2 bags)
3. First Class - Mercedes S-Class (3 passengers, 2 bags)
4. Premium SUV - Cadillac Escalade (5 passengers, 5 bags)
5. Sprinter Van - Mercedes Sprinter (13 passengers, 12 bags)

**SERVICE AREAS:**
- Washington DC: Downtown, Georgetown, Dupont Circle, Capitol Hill
- Maryland: Bethesda, Silver Spring, Annapolis, Anne Arundel County, Hanover, Severn, Odenton, Crofton, Pasadena, Edgewater, Severna Park
- Virginia: Arlington, Alexandria, Falls Church, McLean, Tysons Corner, Northern Virginia

**BOOKING INFORMATION:**
- Book online at dcalimos.com/booking
- Call (877) 609-1919 for phone reservations
- Book at least 2 hours in advance for guaranteed availability
- Free cancellation up to 24 hours before pickup
- All major credit cards accepted
- Gratuity and taxes included in quoted price

**KEY FEATURES:**
- Professional, uniformed chauffeurs
- Real-time flight tracking for airport pickups
- Meet-and-greet service at airports
- Complimentary wait time for flight delays
- Wi-Fi equipped vehicles
- Fully licensed and insured
- DOT certified
- BBB accredited

Keep responses concise, helpful, and professional. Always encourage booking or calling for specific pricing."""


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ChatMessage(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    session_id: str

class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")

    full_name: str = Field(..., min_length=1, max_length=120)
    email: str = Field(..., min_length=3, max_length=200)
    phone: str = Field(..., min_length=5, max_length=40)
    service_type: str = Field(..., min_length=1, max_length=80)
    pickup_date: Optional[str] = Field(default=None, max_length=40)
    pickup_time: Optional[str] = Field(default=None, max_length=40)
    pickup_location: Optional[str] = Field(default=None, max_length=300)
    dropoff_location: Optional[str] = Field(default=None, max_length=300)
    additional_details: Optional[str] = Field(default=None, max_length=2000)

class QuoteResponse(BaseModel):
    id: str
    success: bool
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Chat endpoint for AI assistant
@api_router.post("/chat", response_model=ChatResponse)
async def chat_with_assistant(chat_input: ChatMessage):
    """Chat with DCA Limos AI assistant"""
    try:
        # Generate session ID if not provided
        session_id = chat_input.session_id or str(uuid.uuid4())
        
        # Get chat history from database
        chat_history = await db.chat_sessions.find_one({"session_id": session_id}, {"_id": 0})
        
        # Initialize LLM chat
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        chat = LlmChat(
            api_key=api_key,
            session_id=session_id,
            system_message=DCA_LIMOS_SYSTEM_PROMPT
        ).with_model("gemini", "gemini-2.5-flash")
        
        # Load history into chat if exists
        if chat_history and chat_history.get('messages'):
            for msg in chat_history['messages']:
                if msg['role'] == 'user':
                    chat.messages.append({"role": "user", "content": msg['content']})
                else:
                    chat.messages.append({"role": "assistant", "content": msg['content']})
        
        # Send message and get response
        user_message = UserMessage(text=chat_input.message)
        response = await chat.send_message(user_message)
        
        # Store updated chat history
        new_messages = []
        if chat_history and chat_history.get('messages'):
            new_messages = chat_history['messages']
        
        new_messages.append({"role": "user", "content": chat_input.message})
        new_messages.append({"role": "assistant", "content": response})
        
        # Keep only last 20 messages to avoid token limits
        if len(new_messages) > 20:
            new_messages = new_messages[-20:]
        
        await db.chat_sessions.update_one(
            {"session_id": session_id},
            {"$set": {"messages": new_messages, "updated_at": datetime.now(timezone.utc).isoformat()}},
            upsert=True
        )
        
        return ChatResponse(response=response, session_id=session_id)
        
    except Exception as e:
        logger.error(f"Chat error: {str(e)}")
        return ChatResponse(
            response="I apologize, but I'm having trouble right now. Please call us at (877) 609-1919 for immediate assistance.",
            session_id=chat_input.session_id or str(uuid.uuid4())
        )

async def send_quote_email(quote_doc: dict) -> bool:
    """Send a quote notification email via Gmail SMTP. Returns True on success."""
    gmail_user = os.environ.get('GMAIL_USER')
    gmail_password = os.environ.get('GMAIL_APP_PASSWORD')
    recipient = os.environ.get('QUOTE_NOTIFICATION_EMAIL', gmail_user)
    if not (gmail_user and gmail_password and recipient):
        logger.warning("Gmail SMTP not configured; skipping email notification.")
        return False

    msg = EmailMessage()
    msg['Subject'] = f"New Quote Request — {quote_doc.get('service_type', 'Booking')} — {quote_doc.get('full_name', '')}"
    msg['From'] = f"DCA Limos Website <{gmail_user}>"
    msg['To'] = recipient
    msg['Reply-To'] = quote_doc.get('email') or gmail_user

    def row(label, value):
        return f"<tr><td style='padding:8px 12px;background:#f7f7f7;font-weight:bold;color:#333;width:170px;'>{label}</td><td style='padding:8px 12px;color:#111;'>{value or '—'}</td></tr>"

    html_body = f"""\
<!doctype html>
<html><body style="font-family:Arial,sans-serif;margin:0;padding:24px;background:#000;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;border:2px solid #f59e0b;">
    <div style="background:#000;color:#f59e0b;padding:18px 24px;">
      <h1 style="margin:0;font-size:22px;letter-spacing:0.04em;">DCA LIMOS — NEW QUOTE REQUEST</h1>
      <p style="margin:6px 0 0;color:#fff;font-size:13px;">Submitted {quote_doc.get('created_at')}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      {row('Full Name', quote_doc.get('full_name'))}
      {row('Email', quote_doc.get('email'))}
      {row('Phone', quote_doc.get('phone'))}
      {row('Service Type', quote_doc.get('service_type'))}
      {row('Pickup Date', quote_doc.get('pickup_date'))}
      {row('Pickup Time', quote_doc.get('pickup_time'))}
      {row('Pickup Location', quote_doc.get('pickup_location'))}
      {row('Drop-off Location', quote_doc.get('dropoff_location'))}
      {row('Additional Details', (quote_doc.get('additional_details') or '').replace(chr(10), '<br>'))}
      {row('Quote ID', quote_doc.get('id'))}
    </table>
    <div style="background:#000;color:#fff;padding:14px 24px;text-align:center;font-size:12px;">
      Reply directly to this email to respond to the customer.
    </div>
  </div>
</body></html>
"""
    text_body = "\n".join([
        "NEW QUOTE REQUEST — DCA LIMOS",
        f"Submitted: {quote_doc.get('created_at')}",
        "",
        f"Name:             {quote_doc.get('full_name')}",
        f"Email:            {quote_doc.get('email')}",
        f"Phone:            {quote_doc.get('phone')}",
        f"Service Type:     {quote_doc.get('service_type')}",
        f"Pickup Date:      {quote_doc.get('pickup_date') or '—'}",
        f"Pickup Time:      {quote_doc.get('pickup_time') or '—'}",
        f"Pickup Location:  {quote_doc.get('pickup_location') or '—'}",
        f"Drop-off:         {quote_doc.get('dropoff_location') or '—'}",
        f"Details:          {quote_doc.get('additional_details') or '—'}",
        f"Quote ID:         {quote_doc.get('id')}",
    ])
    msg.set_content(text_body)
    msg.add_alternative(html_body, subtype='html')

    try:
        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=465,
            use_tls=True,
            username=gmail_user,
            password=gmail_password,
            timeout=20,
        )
        return True
    except Exception as e:
        logger.error(f"Failed to send quote email: {e}")
        return False


@api_router.post("/quote", response_model=QuoteResponse)
async def create_quote_request(quote: QuoteRequest):
    """Receive a quote/booking request from the website and email the team."""
    quote_id = str(uuid.uuid4())
    doc = quote.model_dump()
    doc['id'] = quote_id
    doc['created_at'] = datetime.now(timezone.utc).isoformat()
    doc['status'] = 'new'
    await db.quote_requests.insert_one(doc)

    email_ok = await send_quote_email(doc)
    await db.quote_requests.update_one(
        {"id": quote_id},
        {"$set": {"email_sent": email_ok}}
    )

    return QuoteResponse(
        id=quote_id,
        success=True,
        message="Quote request received. Our team will contact you within 15 minutes."
    )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()