// Five page-specific FAQs for pages that have no FAQ data of their own.
// Rendered by <FaqSection> (visible block + FAQPage JSON-LD). Policy numbers
// mirror lib/faqExtras.js — change them together.
const PHONE = '(877) 609-1919';
const RATE = 'Every trip is quoted as a flat rate before you book, and the rate is confirmed with you before your card is charged.';
const CANCEL = 'Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter vans and special-event bookings cancel free of charge up to 12 hours before pickup.';
const WAIT = 'Airport pickups include 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international arrivals, timed from actual touchdown. All other pickups include 15 minutes.';

export const PAGE_FAQS = {
  '/services': [
    { q: 'What services does DCA Limos offer?', a: 'Airport transportation to and from Reagan National (DCA), Dulles (IAD) and BWI, corporate car service, hourly as-directed chauffeur service, wedding and prom transportation, and event and concert transportation across Washington DC, Northern Virginia and Maryland. Every one of them is booked at a flat rate confirmed before you ride.' },
    { q: 'Which service should I book for a day of meetings?', a: 'Hourly chauffeur service. One chauffeur and vehicle stay with you for the whole itinerary, waiting included. For a single pickup and drop-off, a point-to-point transfer is usually the better value — we will quote both on request.' },
    { q: 'Are you available overnight and on holidays?', a: 'Yes. Dispatch and reservations run 24 hours a day, every day of the year, so early departures from DCA and late arrivals are routine.' },
    { q: 'How is pricing handled?', a: RATE + ` There is no surge pricing and no running meter. Call ${PHONE} or use the booking form to get your quote.` },
    { q: 'Can one reservation cover several vehicles?', a: `Yes. Weddings, corporate events and group airport moves are coordinated as a single booking — Sprinter vans for groups and sedans or SUVs for VIPs. Call ${PHONE} or describe the group in the booking form.` },
  ],
  '/fleet': [
    { q: 'Which vehicles are in the DCA Limos fleet?', a: 'Mercedes-Benz E-Class and S-Class and BMW 7 Series sedans, Lincoln Navigator and Chevrolet Suburban SUVs, and Mercedes Sprinter vans. Sedans seat up to three passengers, the Suburban five, the Navigator six and a Sprinter van up to 13.' },
    { q: 'What should I book for an airport run with bags?', a: 'Up to three travelers with ordinary suitcases fit comfortably in a sedan. Families and anyone with heavy luggage do better in a full-size SUV, and a Sprinter van carries a larger group and all its bags in one trip.' },
    { q: 'Will I get the exact model in the photo?', a: 'You book a vehicle class rather than a specific car, so the make and model can differ within that class. If the assigned vehicle is unavailable, we send a comparable or upgraded one instead.' },
    { q: 'How are the vehicles prepared?', a: 'Each vehicle is cleaned and detailed before your pickup and inspected on a regular schedule. All of them carry commercial insurance, and every chauffeur is licensed and background-checked.' },
    { q: 'Can I request a child car seat?', a: 'Yes. Child seats in infant, convertible and booster sizes can go in any vehicle class. Mention your child\'s age on the booking so the correct seat is ready at pickup.' },
  ],
  '/about': [
    { q: 'Who is DCA Limos?', a: 'DCA Limos is a chauffeured car service focused on Reagan National Airport and the Washington region. Our office is at 9836 Lyon Ave, Laurel, MD 20723, and dispatch runs 24/7.' },
    { q: 'Are your chauffeurs licensed and vetted?', a: 'Yes. Chauffeurs are licensed and background-checked, and every vehicle carries commercial insurance.' },
    { q: 'What areas do you serve?', a: 'We cover Washington DC, Northern Virginia and Maryland. Airport service runs to and from Reagan National (DCA), Dulles (IAD) and BWI, with flight tracking on every pickup.' },
    { q: 'Do you offer corporate accounts?', a: `Yes — with priority dispatch and monthly invoicing. Call ${PHONE} or use the contact form to set one up.` },
    { q: 'How do I book?', a: `Use the online booking form or call ${PHONE}. ` + RATE },
  ],
  '/contact': [
    { q: 'What are your hours?', a: `Dispatch and reservations are open 24 hours a day, 7 days a week, including holidays. You can call ${PHONE} at any hour to book a ride or change one.` },
    { q: 'What is the fastest way to reach you?', a: `Call ${PHONE}. Use the phone for anything time-sensitive — a ride in the next few hours, a change to today's reservation, or finding your chauffeur at the terminal.` },
    { q: 'Where is your office?', a: '9836 Lyon Ave, Laurel, MD 20723. Rides are by reservation and chauffeurs come to you, so there is no need to visit the office to book or pay.' },
    { q: 'Can I get a quote through the contact form?', a: 'Yes, though the booking form is quicker because it asks for the pickup and drop-off addresses, date, time and vehicle we need to price the trip. ' + RATE },
    { q: 'I left something in the vehicle — what should I do?', a: `Call ${PHONE} as soon as you notice. Vehicles are checked after every ride, so the sooner we hear from you the easier it is to return the item.` },
  ],
  '/booking': [
    { q: 'Is my ride confirmed as soon as I submit the form?', a: 'Submitting the form sends your request to dispatch. Your ride is confirmed once we reply with your flat rate and you approve it — you then receive a written confirmation.' },
    { q: 'Do I need a credit card to request a quote?', a: 'No. A card is needed only to confirm the reservation. It is charged once the reservation and the rate have been confirmed with you, not when you submit the form.' },
    { q: 'How far in advance should I book?', a: 'A day ahead is ideal, and earlier for pre-dawn flights, holidays and event weekends. Same-day requests are welcome when a vehicle is available — for anything in the next few hours, calling is fastest.' },
    { q: 'What if my flight is delayed?', a: 'Airport pickups are flight-tracked, so the pickup moves with your actual arrival. ' + WAIT },
    { q: 'Can I change or cancel a reservation?', a: CANCEL + ` Call ${PHONE} or reply to your confirmation email.` },
  ],
  '/blog': [
    { q: 'What does the DCA Limos blog cover?', a: 'Guides to Reagan National, Dulles and BWI, comparisons of car service with rideshare, local transportation guides for DC, Arlington and Alexandria, and planning advice for corporate travel and weddings. Most articles link to the matching route or service page so you can go straight to a quote.' },
    { q: 'Which airport is best for my trip — DCA, IAD or BWI?', a: 'It depends on your starting point, airline and destination. Our airport transportation guide compares the three and explains how to reach each one.' },
    { q: 'How do I get a quote for a trip mentioned in an article?', a: `Use the booking form or call ${PHONE}. ` + RATE },
    { q: 'Are the guides kept up to date?', a: 'We revise guides when airport procedures, transit options or our own policies change. Transit schedules and parking rules change often, so confirm time-sensitive details with the operator before you travel.' },
    { q: 'Can I suggest a topic?', a: 'Yes — send it through the contact form. Rider questions are where most of these guides begin.' },
  ],
  '/service-areas': [
    { q: 'What areas does DCA Limos cover?', a: 'Washington DC, Northern Virginia — Arlington, Alexandria, Tysons, McLean, Reston, Fairfax and Loudoun County — and Maryland from Montgomery and Prince George\'s counties to Baltimore, Annapolis and the Eastern Shore. Every town in that area gets the same 24/7 dispatch and flat-rate pricing.' },
    { q: 'Which airports do you serve?', a: 'We serve Reagan National (DCA), Washington Dulles (IAD) and BWI Marshall. Every pickup is flight-tracked in real time, with 45 minutes of complimentary waiting on domestic arrivals and 60 minutes on international arrivals.' },
    { q: 'My town is not listed — can I still book?', a: `Almost certainly. The listed pages are the places we are asked about most, not the limit of where we drive. Send your addresses through the booking form or call ${PHONE}.` },
    { q: 'Is the rate the same from every town?', a: 'No — rates depend on distance and vehicle. ' + RATE },
    { q: 'Do you offer early-morning pickups in the suburbs?', a: 'Yes. Dispatch runs 24/7 and pre-dawn airport runs are booked in advance, so your chauffeur is committed the night before.' },
  ],
};

// /limo/<slug> landing pages share templates by category, unless the page
// carries its own hand-written `faqs` array (used for the flagship pages
// strengthened in the 2026-10-24 SEO pass), in which case that takes
// priority over the generic template.
export const landingFaqs = (page) => {
  if (page.faqs && page.faqs.length) return page.faqs;
  const name = page.h1;
  if (page.category === 'Airport Transportation') {
    return [
      { q: `How do I book ${name.toLowerCase()}?`, a: `Use the booking form or call ${PHONE} with your flight number, pickup address and passenger count. ` + RATE },
      { q: 'What happens if my flight is delayed or early?', a: 'Every airport pickup is flight-tracked, so your chauffeur is dispatched against the actual arrival time. ' + WAIT },
      { q: 'Where does my chauffeur meet me?', a: 'Curbside at arrivals by default. Meet & greet inside the terminal with a name sign and luggage help is available on request.' },
      { q: 'Can you provide child car seats?', a: 'Yes. Infant, convertible and booster seats are available on request — tell us the child\'s age when you book.' },
      { q: 'What is the cancellation policy?', a: CANCEL },
    ];
  }
  if (page.category === 'Maryland Cities') {
    const city = name.replace(/ Limo Service$/i, '');
    return [
      { q: `Which airports do you serve from ${city}?`, a: `All three: Reagan National (DCA), Dulles (IAD) and BWI. We quote a flat rate to each so you can choose the airport that suits your flight.` },
      { q: `Do you offer early-morning pickups in ${city}?`, a: 'Yes. Dispatch runs 24/7 and pre-dawn departures are booked in advance, so your chauffeur is committed the night before.' },
      { q: `What can I book in ${city} besides airport transfers?`, a: 'Corporate car service, hourly as-directed service, weddings, proms, and event and concert transportation.' },
      { q: 'How is the price set?', a: RATE },
      { q: 'What is the cancellation policy?', a: CANCEL },
    ];
  }
  return [
    { q: `How far ahead should I book ${name.toLowerCase()}?`, a: 'As early as you can once the date is set — Sprinter vans for peak weekends are the first vehicles to sell out. Same-day requests are taken when a vehicle is available.' },
    { q: 'Can you coordinate several vehicles?', a: 'Yes. Multi-vehicle bookings are planned as one itinerary, with dispatch coordinating arrivals.' },
    { q: 'Is pricing hourly or flat?', a: 'Vehicles that stay with you are booked hourly; simple transfers are quoted as a flat rate. ' + RATE },
    { q: 'Can we add stops?', a: 'Yes. Tell us the stops when you book, or ask your chauffeur on the day — hourly bookings cover stops and waiting.' },
    { q: 'What is the cancellation policy?', a: CANCEL },
  ];
};
