// Batch 4 (2026-09-22): 6 DCA / Reagan National service pages, 5 Washington DC
// service pages, 8 DC neighborhood pages and 5 Northern Virginia city pages.
// Same entry shape as MARYLAND_PAGES / MARYLAND_BATCH3 (the name is historical).
// Import-free. Validate from the frontend dir with:
//   node -e "const fs=require('fs');const s=fs.readFileSync('src/data/marylandPagesBatch4.js','utf8').replace('export const MARYLAND_BATCH4','module.exports.X');fs.writeFileSync('/tmp/_b4.js',s);const B=require('/tmp/_b4.js').X;for(const p of B){const ok=p.vehicles.length===6&&p.faqs.length===5&&p.metaDescription.length<=160&&/limo service|car service|transportation/i.test(p.h1)&&JSON.stringify(p).includes('(877) 609-1919')&&p.related.length>=3;console.log(ok?'ok ':'BAD',p.slug)}"

const VEHICLES = [
  {
    name: 'Mercedes-Benz E-Class',
    cls: 'Business sedan',
    seats: 3,
    best: 'solo executives and couples',
  },
  {
    name: 'BMW 7 Series',
    cls: 'First-class sedan',
    seats: 3,
    best: 'VIP and executive travel',
  },
  {
    name: 'Cadillac Escalade',
    cls: 'Premium SUV',
    seats: 6,
    best: 'families and small groups with luggage',
  },
  {
    name: 'Chevrolet Suburban',
    cls: 'Luxury SUV',
    seats: 6,
    best: 'airport runs with beach or golf luggage',
  },
  {
    name: 'Mercedes Sprinter van',
    cls: 'Executive van',
    seats: 14,
    best: 'wedding parties, corporate teams and groups',
  },
  {
    name: 'Stretch limousine',
    cls: 'Limousine',
    seats: 8,
    best: 'proms, weddings and celebrations',
  },
];

const AIRPORT_STATS = [
  { label: 'Airport', value: 'Reagan National (DCA), Arlington, VA' },
  { label: 'Fleet', value: 'Sedans · SUVs · Sprinters · Limos' },
  { label: 'Pricing', value: 'Flat rate, confirmed before you ride' },
  { label: 'Dispatch', value: '24 / 7' },
];

const SERVICE_STATS = [
  { label: 'Coverage', value: 'Washington DC, Northern VA & Maryland' },
  { label: 'Fleet', value: 'Sedans · SUVs · Sprinters · Limos' },
  { label: 'Pricing', value: 'Flat rate or hourly, confirmed before you book' },
  { label: 'Booking', value: '24 / 7' },
];

export const MARYLAND_BATCH4 = [
  // ---------------------------------------------------------------------------
  // DCA / Reagan National service intents
  // ---------------------------------------------------------------------------
  {
    slug: 'dca-airport-meet-and-greet',
    type: 'service',
    name: 'DCA Airport Meet and Greet',
    badge: 'Airport Service',
    h1: 'DCA Airport Meet & Greet Car Service',
    metaTitle: 'DCA Airport Meet and Greet | Chauffeur Inside the Terminal',
    metaDescription:
      'Meet and greet car service at Reagan National: your chauffeur waits inside with a name sign, helps with bags and walks you to the car. Call (877) 609-1919.',
    stats: AIRPORT_STATS,
    intro: [
      'Meet and greet is the difference between finding your ride and being found. With this option a DCA Limos chauffeur comes inside Reagan National, waits at the arrivals level with a name sign, helps with luggage and walks you to a vehicle parked as close to the door as the airport allows. It is the way our clients arrange first-time visitors, older relatives, children traveling alone, executives on a tight schedule and anyone landing after a long day who would rather not read signs.',
      'The service is an add-on to any airport transfer, priced as part of a flat rate confirmed before you ride. Dispatch tracks the flight, so a delay moves the chauffeur, not you. Complimentary wait time is included, and there is nothing to coordinate by text beyond a simple hello.',
    ],
    highlights: [
      'Chauffeur inside the terminal with a personalized name sign, not a curbside guess',
      'Flight tracked from departure, with the pickup adjusted automatically for delays',
      '45 minutes of complimentary wait on domestic arrivals and 60 minutes on international',
      'Luggage assistance from baggage claim to the vehicle',
      'Ideal for VIP guests, seniors, unaccompanied minors and first-time visitors to Washington',
      'Flat rate that includes the meet and greet, confirmed before you ride',
    ],
    sections: [
      {
        h2: 'How our meet and greet chauffeur service works at Reagan National',
        paragraphs: [
          'When you book, tell us the airline, flight number and the name to print on the sign. On the day, dispatch watches the flight from the moment it pushes back. As the aircraft lands, the chauffeur moves from the staging area into the terminal and takes a position on the arrivals level, close to the baggage carousels for your flight, where a passenger coming off the concourse will see the sign without searching.',
          'From there the chauffeur takes the bags, confirms the destination and leads the way out to the vehicle. Reagan National keeps chauffeured pickups in designated areas rather than at the door, so the walk is short but it is a walk; the chauffeur handles the trolley and the direction so you do not have to think about either.',
        ],
      },
      {
        h2: 'When a black car service with meet and greet is worth it',
        paragraphs: [
          'Some arrivals simply need the extra hand. A visiting client or board member should be met, not messaged. A parent flying in for the holidays should not have to cross a busy roadway with a suitcase. A teenager returning from school benefits from a known adult with a sign rather than a stranger in a car.',
          'Corporate travel managers use the option to standardize how guests are received: the same greeting, the same vehicle class and the same invoice line every time.',
        ],
      },
      {
        h2: 'Meet and greet versus a standard curbside car service',
        paragraphs: [
          'A standard DCA Limos pickup is already reliable: the chauffeur tracks your flight and waits at the pickup area, and you walk out to the car. Meet and greet moves the meeting point inside and adds the sign, the escort and the luggage help. Frequent flyers often prefer curbside; guests and families usually prefer to be met. Both include the same complimentary wait time and the same licensed, background-checked chauffeur.',
          'If you are not sure which suits a particular traveler, call dispatch at (877) 609-1919 and describe the arrival.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Where exactly will the chauffeur be waiting?',
        a: 'On the arrivals level near the baggage claim area for your flight, holding a sign with the name you gave us. The confirmation includes the chauffeur’s direct number in case you would like to call as you walk off the plane.',
      },
      {
        q: 'Is meet and greet available for every flight?',
        a: 'Yes. It can be added to any Reagan National arrival at any hour, including late-night and early-morning flights, as well as arrivals at Dulles and BWI.',
      },
      {
        q: 'How much wait time is included?',
        a: 'Forty-five minutes of complimentary wait on domestic arrivals and sixty minutes on international arrivals, counted from the actual landing time rather than the scheduled one, so a delay never eats into it.',
      },
      {
        q: 'Can you meet an unaccompanied minor or a passenger who needs assistance?',
        a: 'Yes. Tell us when you book so we can note the airline’s handoff requirements, send an appropriate chauffeur and allow extra time. Car seats are available on request.',
      },
      {
        q: 'How is a meet and greet transfer priced and cancelled?',
        a: 'It is quoted as one flat rate with the transfer, confirmed before you ride. Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans and limousines up to 12 hours. Call (877) 609-1919 for a quote.',
      },
    ],
    related: [
      { label: 'DCA Arrival Pickup Guide', to: '/dca-airport-arrival-pickup' },
      { label: 'DCA Airport Black Car Service', to: '/dca-airport-black-car-service' },
      { label: 'Reagan National Airport Limo Service', to: '/reagan-national-airport-limo-service' },
      { label: 'DCA Airport Limo', to: '/limo/dca-airport-limo' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Meet and Greet Explained (blog)', to: '/blog/dca-airport-meet-and-greet-service' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Arlington, VA', 'Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Airport meet and greet chauffeur service',
    },
  },
  {
    slug: 'dca-airport-corporate-car-service',
    type: 'service',
    name: 'DCA Airport Corporate Car Service',
    badge: 'Airport Service',
    h1: 'DCA Airport Corporate Car Service',
    metaTitle: 'DCA Airport Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service at Reagan National for executives, teams and visiting clients: flight tracking, corporate accounts and monthly invoicing. (877) 609-1919.',
    stats: AIRPORT_STATS,
    intro: [
      'Reagan National is the business traveler’s airport. It is minutes from the Pentagon, Crystal City, Capitol Hill and K Street, and the people who fly through it tend to have somewhere to be. DCA Limos provides corporate car service built around that reality: sedans and SUVs that are confirmed the day before, chauffeurs who track the flight and know the office entrances, and a corporate account that turns a month of travel into a single invoice.',
      'Whether you are a travel manager arranging fifty trips a quarter or an executive assistant booking one visiting client, the process is the same. Send the flight and the destination, receive a flat rate confirmed before anyone rides, and let dispatch handle the rest from a 24/7 desk.',
    ],
    highlights: [
      'Corporate accounts with monthly invoicing, cost-center codes and a single point of contact',
      'Flight tracking on every arrival, with pickups adjusted for delays and early landings',
      'Executive sedans and SUVs for individuals; Sprinter vans for teams and delegations',
      'Chauffeurs familiar with office towers in Crystal City, Rosslyn, Tysons and downtown DC',
      'Optional meet and greet for visiting clients, board members and candidates',
      'Free cancellation up to 3 hours before pickup on sedans and SUVs',
    ],
    sections: [
      {
        h2: 'A corporate car service that fits how business travel is booked',
        paragraphs: [
          'Most of our corporate work arrives by email from an assistant or through a travel desk, often with several trips at once. We accept bookings that way, confirm each one individually and hold the details for changes, because flights and meetings move. When a departure slips, the traveler or the assistant calls or emails once and dispatch reschedules the chauffeur; there is no cancellation and no re-quote unless the vehicle or the route changes.',
          'On the road, the chauffeur’s job is to make the ride uneventful. Vehicles are clean and quiet, calls can be taken in private and a laptop can be opened on the way to a meeting in Rosslyn or a hearing on the Hill.',
        ],
      },
      {
        h2: 'Executive black car service to and from Reagan National',
        paragraphs: [
          'For departures we back-time the pickup from the flight, the airline’s check-in guidance and live traffic on the George Washington Parkway, I-395 and Route 1. For arrivals the chauffeur is positioned before the aircraft lands and meets the traveler curbside or inside with a name sign. Visiting clients are greeted the same way each time so that the company’s hospitality is consistent regardless of who is traveling.',
          'Teams flying in for a conference at the Washington Convention Center or a program at National Landing move as a group in a Sprinter van, with one chauffeur and one confirmation for the whole party. Roadshows and site visits across Northern Virginia and Maryland run on hourly as-directed service with the same chauffeur throughout.',
        ],
      },
      {
        h2: 'Accounts, invoicing and duty of care',
        paragraphs: [
          'A corporate account keeps everything in one place: approved travelers, preferred vehicle classes, billing references and a monthly statement that reconciles without chasing receipts. Every chauffeur is licensed and background-checked, every vehicle is commercially insured, and dispatch is reachable around the clock.',
          'To set up an account or request a quote for a single trip, call (877) 609-1919 or use the booking page. Flat rates are confirmed before you ride.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you offer corporate accounts with monthly invoicing?',
        a: 'Yes. Corporate accounts consolidate every trip into a monthly invoice with the references your accounting team needs, and give assistants and travel managers a direct line to dispatch for changes.',
      },
      {
        q: 'How far in advance should corporate airport transfers be booked?',
        a: 'Booking the day before is comfortable for a sedan or SUV; Sprinter vans and multi-vehicle programs benefit from more notice. Same-day requests are accepted subject to availability at (877) 609-1919.',
      },
      {
        q: 'What happens if the flight is delayed or arrives early?',
        a: 'Dispatch tracks every inbound flight and moves the chauffeur to match the actual landing time. Complimentary wait time is counted from touchdown, so the traveler is not charged for the airline’s schedule.',
      },
      {
        q: 'Can you handle groups and delegations at DCA?',
        a: 'Yes. Sprinter vans seat up to fourteen with luggage, and larger parties are split across coordinated vehicles that leave together. A single confirmation covers the whole group.',
      },
      {
        q: 'Is the price confirmed before the ride?',
        a: 'Always. Airport transfers are flat rate and multi-stop days are hourly; either way the price is confirmed in writing before the chauffeur is dispatched, with no surge and no guesswork at the end.',
      },
    ],
    related: [
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'DCA Airport Black Car Service', to: '/dca-airport-black-car-service' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'DCA to Tysons', to: '/dca-to-tysons' },
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
      { label: 'Corporate Car Service at DCA (blog)', to: '/blog/corporate-car-service-dca-airport' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Arlington, VA', 'Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Corporate airport car service',
    },
  },
  {
    slug: 'dca-airport-black-car-service',
    type: 'service',
    name: 'DCA Airport Black Car Service',
    badge: 'Airport Service',
    h1: 'DCA Airport Black Car Service',
    metaTitle: 'DCA Airport Black Car Service | Flat-Rate Sedans',
    metaDescription:
      'Black car service at Reagan National: licensed chauffeurs, flat rates confirmed before you ride, flight tracking, 24/7 dispatch. Call (877) 609-1919.',
    stats: AIRPORT_STATS,
    intro: [
      'A black car at Reagan National means a professional chauffeur, a late-model sedan or SUV, and a rate that was agreed before the plane landed. DCA Limos runs exactly that, every day and every hour, between DCA and Washington DC, Northern Virginia and Maryland. No app, no surge and no wondering which of six similar vehicles at the curb is yours.',
      'The fleet ranges from the Mercedes-Benz E-Class and BMW 7 Series to the Cadillac Escalade and Chevrolet Suburban, with Sprinter vans for groups. Every chauffeur is licensed and background-checked, every vehicle is commercially insured and dispatch answers around the clock.',
    ],
    highlights: [
      'Flat rates to and from DCA confirmed before you ride, with no surge pricing',
      'Real-time flight tracking so the chauffeur is waiting when you land, not when you were scheduled to',
      'Complimentary wait time: 45 minutes domestic, 60 minutes international, 15 minutes at other pickups',
      'Chauffeurs who know the Reagan National pickup areas and the fastest approaches from every direction',
      'Sedans, SUVs and Sprinter vans; car seats on request',
      'Cancel free up to 3 hours before pickup on sedans and SUVs',
    ],
    sections: [
      {
        h2: 'What makes a black car service different at DCA',
        paragraphs: [
          'Reagan National is compact, which makes the curb crowded. Taxis, rideshare pickups and family cars compete for the same short stretch of roadway, and a driver who does not know the terminal can circle while you stand with your bags. Our chauffeurs work this airport constantly; they know where chauffeured vehicles stage, when to move to the pickup area and how to reach it from the parkway without missing the turn.',
          'The vehicle itself is part of the service. Black cars are detailed between trips, kept quiet and comfortable, and driven with a passenger in mind rather than a rating. The chauffeur loads and unloads the luggage, holds the door and takes the route that live traffic favors, whether that is the George Washington Parkway toward Georgetown or I-395 toward downtown.',
        ],
      },
      {
        h2: 'Flat-rate car service to DC, Virginia and Maryland',
        paragraphs: [
          'Point-to-point transfers are quoted as a flat rate based on the vehicle and the addresses. Downtown Washington, Capitol Hill, Georgetown, Arlington and Alexandria are the shortest runs; Bethesda, Tysons, Reston and Silver Spring take a little longer; Annapolis, Baltimore and Frederick are comfortable drives with the fare fixed in advance. The rate you are given is the rate you pay, whatever the traffic does.',
          'For onward connections we also drive between airports, so a traveler landing at DCA and departing from Dulles or BWI can be moved directly, with the second flight tracked as well.',
        ],
      },
      {
        h2: 'Booking a DCA black car in a few minutes',
        paragraphs: [
          'Send the flight number, the pickup time or arrival time, the destination and the number of passengers and bags. Dispatch replies with a confirmed flat rate and a vehicle. On the day, you receive the chauffeur’s details, and after landing you walk out to a car that is already positioned. If you would rather be met inside, add meet and greet and the chauffeur will be at baggage claim with a name sign.',
          'Reservations are taken online or by phone at (877) 609-1919, 24 hours a day.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'What is included in a DCA black car flat rate?',
        a: 'The vehicle, the chauffeur, flight tracking and the complimentary wait time. The rate is confirmed before you ride and does not change with traffic or demand. Tolls and gratuity are handled as explained on your confirmation.',
      },
      {
        q: 'Where does the chauffeur pick up at Reagan National?',
        a: 'In the airport’s designated area for pre-arranged chauffeured vehicles, a short walk from baggage claim. Your confirmation explains the walk, and the chauffeur will call or text as you land. Meet and greet inside the terminal is available as an option.',
      },
      {
        q: 'Do you serve DCA at night and very early in the morning?',
        a: 'Yes. Dispatch runs 24/7 and chauffeurs cover the first departures and the last arrivals of the day. Early pickups are back-timed from the flight and the airline’s check-in guidance.',
      },
      {
        q: 'Can I book an SUV or a van instead of a sedan?',
        a: 'Yes. The Cadillac Escalade and Chevrolet Suburban suit families and travelers with extra luggage, and the Mercedes Sprinter van seats groups of up to fourteen. Car seats are available on request.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free of charge up to 3 hours before pickup; Sprinter vans, limousines and special-event bookings up to 12 hours before. Call (877) 609-1919 to change or cancel.',
      },
    ],
    related: [
      { label: 'DCA Airport Limo', to: '/limo/dca-airport-limo' },
      { label: 'Reagan National Airport Limo Service', to: '/reagan-national-airport-limo-service' },
      { label: 'DCA Airport Meet and Greet', to: '/dca-airport-meet-and-greet' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'DCA to Bethesda', to: '/dca-to-bethesda' },
      { label: 'DCA to Alexandria', to: '/dca-to-alexandria' },
      { label: 'Best Black Car Service at DCA (blog)', to: '/blog/best-black-car-service-dca-airport' },
      { label: 'Our Fleet', to: '/fleet' },
    ],
    schema: {
      areaServed: ['Arlington, VA', 'Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Airport black car service',
    },
  },
  {
    slug: 'reagan-national-airport-limo-service',
    type: 'service',
    name: 'Reagan National Airport Limo Service',
    badge: 'Airport Service',
    h1: 'Reagan National Airport Limo Service',
    metaTitle: 'Reagan National Airport Limo Service | DCA Limos',
    metaDescription:
      'Limo and chauffeured car service at Reagan National Airport: sedans, SUVs, Sprinters and stretch limos, flat rates and flight tracking. Call (877) 609-1919.',
    stats: AIRPORT_STATS,
    intro: [
      'Ronald Reagan Washington National Airport sits on the Virginia bank of the Potomac, a few minutes from the monuments, and it is the airport most visitors to Washington would choose if they could. DCA Limos is based on serving it. Our chauffeurs drive to and from Reagan National every day, from the first departures to the last arrivals, in sedans, SUVs, Sprinter vans and stretch limousines.',
      'Reagan National limo service means more than the vehicle. It means a flight that is tracked, a chauffeur who knows the terminal, a flat rate confirmed before you ride and a dispatch desk that answers at any hour. Whether you are landing for a meeting on the Hill, a wedding in Georgetown or a week with family in Bethesda, the ride is arranged before you board.',
    ],
    highlights: [
      'Every Reagan National arrival tracked in real time; chauffeur positioned for the actual landing',
      'Flat rates to Washington DC, Northern Virginia and Maryland, confirmed before you ride',
      'Sedans and SUVs for individuals and families; Sprinter vans and stretch limousines for groups and occasions',
      'Complimentary wait time on every airport pickup, with optional meet and greet inside',
      'Licensed, background-checked chauffeurs and commercially insured vehicles',
      '24/7 dispatch for the earliest departures and the latest arrivals',
    ],
    sections: [
      {
        h2: 'Reagan National limo service for arrivals',
        paragraphs: [
          'Give us the flight number and dispatch does the rest. The chauffeur watches the flight, moves into position as it lands and either waits in the designated pickup area or, with meet and greet, comes to baggage claim with a name sign. Complimentary wait time of 45 minutes on domestic and 60 minutes on international arrivals is counted from touchdown, which covers a slow carousel or a long walk from the gate.',
          'From Reagan National the routes fan out in every direction: across the 14th Street Bridge into downtown, up the George Washington Parkway to Georgetown and Maryland, south to Old Town Alexandria, west along I-395 and I-66 to Arlington, Tysons and beyond.',
        ],
      },
      {
        h2: 'Reagan National car service for departures',
        paragraphs: [
          'For a departure we back-time the pickup from your flight, the airline’s recommended check-in window and the traffic we expect on the approaches. Early flights out of Reagan National are popular, and a chauffeur who is at your door before dawn removes the most stressful part of the morning. The chauffeur drops at the terminal door for your airline rather than a general curb.',
          'Travelers who split their trips between airports can book a direct transfer between Reagan National and Dulles or BWI, with both flights tracked.',
        ],
      },
      {
        h2: 'Stretch limousines, Sprinters and special occasions',
        paragraphs: [
          'Not every airport ride is a business trip. Wedding parties collect out-of-town guests, families welcome relatives home, and companies bring in a guest of honor. For those moments the stretch limousine and the Mercedes Sprinter van keep everyone together from the terminal to the destination, with the same chauffeur standards as our sedans and a rate confirmed before you book.',
          'Reservations can be made online or with dispatch at (877) 609-1919. Sedans and SUVs cancel free up to 3 hours before pickup, and Sprinters, limousines and special-event bookings up to 12 hours.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Is Reagan National the same airport as DCA?',
        a: 'Yes. DCA is the airport code for Ronald Reagan Washington National Airport in Arlington, Virginia. Locals use both names, and our service is the same whichever you search for.',
      },
      {
        q: 'How does a Reagan National limo service pickup work?',
        a: 'The chauffeur tracks your flight, waits in the airport’s designated chauffeured-vehicle area and contacts you as you land. With meet and greet, the chauffeur waits inside near baggage claim with a name sign and helps with luggage.',
      },
      {
        q: 'Can I hire a stretch limousine from Reagan National?',
        a: 'Yes. Stretch limousines and Sprinter vans are available for weddings, celebrations and group arrivals. Give us a little more notice than for a sedan, and note that these vehicles cancel free up to 12 hours before pickup.',
      },
      {
        q: 'Do you serve Maryland and Virginia from Reagan National, or just DC?',
        a: 'All three. We drive to Washington DC, Northern Virginia and Maryland, including Bethesda, Silver Spring, Annapolis, Baltimore, Arlington, Alexandria, Tysons and Reston, on flat rates confirmed in advance.',
      },
      {
        q: 'What is the best way to book?',
        a: 'Use the online booking page for an immediate quote or call (877) 609-1919. Dispatch is staffed 24/7 and confirms the vehicle and the flat rate in writing before you ride.',
      },
    ],
    related: [
      { label: 'DCA Airport Limo', to: '/limo/dca-airport-limo' },
      { label: 'DCA Airport Black Car Service', to: '/dca-airport-black-car-service' },
      { label: 'DCA Airport Hotel Transfers', to: '/dca-airport-hotel-transfers' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'DCA to Annapolis', to: '/dca-to-annapolis' },
      { label: 'DCA to Baltimore', to: '/dca-to-baltimore' },
      { label: 'Reagan National Transportation Guide (blog)', to: '/blog/reagan-national-airport-transportation-guide' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Arlington, VA', 'Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Airport limousine service',
    },
  },
  {
    slug: 'dca-airport-hotel-transfers',
    type: 'service',
    name: 'DCA Airport Hotel Transfers',
    badge: 'Airport Service',
    h1: 'DCA Airport Hotel Transfer Car Service',
    metaTitle: 'DCA Airport Hotel Transfers | DCA Limos',
    metaDescription:
      'Chauffeured transfers between Reagan National and hotels in Crystal City, National Landing and downtown DC. Flat rates, flight tracking. Call (877) 609-1919.',
    stats: AIRPORT_STATS,
    intro: [
      'Most Reagan National travelers are heading to a hotel, and the hotels are close: a cluster along Crystal Drive and Richmond Highway in Crystal City and National Landing, another in Pentagon City, and the large downtown properties across the river around the Convention Center, Penn Quarter, the West End and Capitol Hill. DCA Limos runs hotel transfers to all of them, in both directions, with flat rates confirmed before you ride.',
      'The value of a chauffeur on a short hotel run is certainty. The car is booked to your flight, the chauffeur knows which entrance the hotel uses for arrivals and the fare does not move with the evening rush. When you check out, the same standard applies in reverse, timed to your departure.',
    ],
    highlights: [
      'Transfers to Crystal City, National Landing and Pentagon City hotels, minutes from the terminal',
      'Downtown Washington hotels around the Convention Center, Penn Quarter, West End, Georgetown and Capitol Hill',
      'Flight tracked on arrival; departure pickups back-timed from your flight',
      'Chauffeurs who use the correct hotel entrance and porte-cochere, not the loading dock',
      'Optional meet and greet inside the terminal for guests and groups',
      'Group transfers for conferences and weddings in Sprinter vans',
    ],
    sections: [
      {
        h2: 'Car service to Crystal City and National Landing hotels',
        paragraphs: [
          'Crystal City is Reagan National’s neighbor. The hotel row along Crystal Drive and the properties near Pentagon City serve conference delegates, government contractors and families, and the drive is only a few minutes. It is still worth booking: the exit onto Route 1 is busy, hotel entrances are set back from the road and a late arrival with luggage is easier with a chauffeur who knows where to stop.',
          'National Landing, the name now used for Crystal City, Pentagon City and Potomac Yard together, is a grid of towers and garages where the right door matters. Our chauffeurs drop at the lobby entrance and, on the return, collect at the porte-cochere at the agreed time.',
        ],
      },
      {
        h2: 'Chauffeur service to downtown Washington hotels',
        paragraphs: [
          'Downtown hotels are a short ride across the 14th Street Bridge or up the George Washington Parkway. Conference guests bound for the hotels around the Walter E. Washington Convention Center, business travelers staying in Penn Quarter or the West End and visitors in Georgetown or on Capitol Hill are all common trips. The chauffeur chooses the bridge according to live traffic and drops at the main entrance.',
          'For hotels with limited curb space, we coordinate the pickup for the return leg by phone so that the car is at the door when you walk out, not idling around the block.',
        ],
      },
      {
        h2: 'Group and conference hotel transfers',
        paragraphs: [
          'Meeting planners use us to shuttle speakers, sponsors and staff between Reagan National and the conference hotel across arrival days. Sprinter vans carry up to fourteen with luggage, and multiple sedans and SUVs can be scheduled against a manifest of flights, with each arrival tracked. A corporate account puts every transfer on one monthly invoice.',
          'Wedding blocks work the same way: guests arriving over a weekend are collected and delivered to the hotel, and a Sprinter takes the party to the venue on the day. Call (877) 609-1919 with the hotel and the flights, and dispatch will build the schedule.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Which hotels do you serve from Reagan National?',
        a: 'Any hotel in Washington DC, Northern Virginia or Maryland. The most frequent runs are to Crystal City, National Landing and Pentagon City, and to downtown Washington around the Convention Center, Penn Quarter, the West End, Georgetown and Capitol Hill.',
      },
      {
        q: 'Is it worth booking a car for such a short trip to Crystal City?',
        a: 'Many guests think so, particularly on arrival with luggage, late at night or with a family. The car is confirmed in advance, the chauffeur tracks the flight and the flat rate is known before you land.',
      },
      {
        q: 'Can the chauffeur meet me inside the terminal and take me to the hotel?',
        a: 'Yes. Add meet and greet and the chauffeur waits at baggage claim with a name sign, helps with bags and walks you to the vehicle.',
      },
      {
        q: 'How do hotel-to-airport pickups work at checkout?',
        a: 'Give us your flight and we back-time the pickup from the airline’s check-in guidance and traffic. The chauffeur waits at the hotel entrance, with 15 minutes of complimentary wait time at non-airport pickups.',
      },
      {
        q: 'Do you handle conference and wedding group transfers?',
        a: 'Yes. Send the manifest of flights and the hotel, and dispatch schedules Sprinter vans, SUVs and sedans as needed. Corporate accounts receive a single monthly invoice. Call (877) 609-1919 to plan a group.',
      },
    ],
    related: [
      { label: 'Crystal City Limo Service', to: '/crystal-city-limo-service' },
      { label: 'National Landing Transportation Guide', to: '/national-landing-arlington-transportation-guide' },
      { label: 'Washington Convention Center Transportation', to: '/washington-convention-center-transportation' },
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Penn Quarter Limo Service', to: '/penn-quarter-limo-service' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Arlington, VA', 'Washington, DC'],
      serviceType: 'Airport hotel transfer service',
    },
  },
  {
    slug: 'dca-airport-arrival-pickup',
    type: 'service',
    name: 'DCA Airport Arrival Pickup',
    badge: 'Airport Service',
    h1: 'DCA Airport Arrival Pickup Car Service',
    metaTitle: 'DCA Airport Arrival Pickup | Where Your Chauffeur Meets You',
    metaDescription:
      'How arrival pickups work at Reagan National: terminals, baggage claim, where the chauffeur waits, flight tracking and wait time. Call (877) 609-1919.',
    stats: AIRPORT_STATS,
    intro: [
      'Landing at Reagan National is simple, and an arrival pickup with DCA Limos is designed to keep it that way. The airport has two terminals, Terminal 1 and Terminal 2, connected by walkways and served by a single roadway system. Your airline determines which terminal you use; your chauffeur already knows and is positioned accordingly before the aircraft reaches the gate.',
      'This page explains what happens between the jet bridge and the car so that you can walk off the plane knowing where to go. The short version: collect your bags, check your phone for the chauffeur’s message and walk to the designated pickup area, or, with meet and greet, look for the name sign at baggage claim.',
    ],
    highlights: [
      'Flight tracked from departure; the chauffeur is staged for the actual landing time',
      'Complimentary wait: 45 minutes on domestic arrivals, 60 minutes on international',
      'Pickup in the airport’s designated area for pre-arranged chauffeured vehicles',
      'Optional meet and greet at baggage claim with a name sign and luggage help',
      'Chauffeur’s direct contact sent before you land',
      'Flat rate to your destination confirmed before you ride',
    ],
    sections: [
      {
        h2: 'Terminals, baggage claim and the walk to your car service',
        paragraphs: [
          'Terminal 1 is the smaller of the two and handles a limited number of airlines; Terminal 2 is the main building where most flights arrive. Baggage claim in each terminal is on the arrivals level. Once you have your bags, the pickup area for chauffeured vehicles is a short, signed walk from the doors, and your confirmation describes it. Reagan National assigns pre-arranged cars to specific spots rather than the general curb, which is why our chauffeurs do not simply pull up outside the door.',
          'Because DCA operates under a federal perimeter rule that limits most nonstop flights to a set distance, with a limited number of exempted longer routes, the majority of arrivals are domestic and receive 45 minutes of complimentary wait time.',
        ],
      },
      {
        h2: 'What the chauffeur is doing while you land',
        paragraphs: [
          'From the moment your flight departs, dispatch watches it. If it lands early, the chauffeur is already staged nearby and moves up; if it is delayed, the chauffeur is held back and the wait-time clock does not start until the wheels are down. As you taxi, you will receive a text or call with the vehicle description, plate and the chauffeur’s number. There is nothing you need to do until you have your bags.',
          'If you add meet and greet, the chauffeur enters the terminal instead and waits near the baggage carousels with a sign, then handles the bags and the walk.',
        ],
      },
      {
        h2: 'Making the black car pickup smoother',
        paragraphs: [
          'Give us the flight number rather than just a time, because the flight number is what we track. Tell us the number of passengers and bags so the vehicle fits; a Cadillac Escalade or Chevrolet Suburban is the better choice for a family with checked luggage. Ask for a car seat when you book if you need one. And keep your phone on as you land; the chauffeur’s message is the only step that requires you.',
          'Questions about a specific arrival can be answered by dispatch at (877) 609-1919 at any hour.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Which terminal will I arrive at, and does it matter for the pickup?',
        a: 'Your airline determines the terminal. It does not matter for you: dispatch knows the terminal from the flight number, and the chauffeur is staged for the correct one. Your confirmation explains where to walk after baggage claim.',
      },
      {
        q: 'Where does the chauffeur wait if I do not book meet and greet?',
        a: 'In the airport’s designated pickup area for pre-arranged chauffeured vehicles, a short walk from baggage claim. The chauffeur texts the vehicle details as you land and you walk out to the car.',
      },
      {
        q: 'When does the complimentary wait time start?',
        a: 'At the actual landing time, not the scheduled one. Domestic arrivals include 45 minutes and international arrivals 60 minutes, which covers baggage delays and a long walk from the gate.',
      },
      {
        q: 'What if my flight is diverted or cancelled?',
        a: 'Call dispatch at (877) 609-1919 as soon as you know. We reschedule the pickup to the new flight without a re-quote, and sedans and SUVs can be cancelled free up to 3 hours before the original pickup.',
      },
      {
        q: 'Can I be picked up at DCA and driven straight to Dulles or BWI?',
        a: 'Yes. Airport-to-airport transfers are flat rate, and we track both flights so the timing works even if one of them moves.',
      },
    ],
    related: [
      { label: 'DCA Airport Meet and Greet', to: '/dca-airport-meet-and-greet' },
      { label: 'DCA Airport Black Car Service', to: '/dca-airport-black-car-service' },
      { label: 'DCA Airport Hotel Transfers', to: '/dca-airport-hotel-transfers' },
      { label: 'Reagan National Transportation Guide (blog)', to: '/blog/reagan-national-airport-transportation-guide' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'DCA to Dulles', to: '/dca-to-dulles' },
      { label: 'DCA to BWI', to: '/dca-to-bwi' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Arlington, VA', 'Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Airport arrival pickup service',
    },
  },
  // ---------------------------------------------------------------------------
  // Washington DC + service type
  // ---------------------------------------------------------------------------
  {
    slug: 'washington-dc-wedding-limo',
    type: 'service',
    name: 'Washington DC Wedding Limo',
    badge: 'Signature Service',
    h1: 'Washington DC Wedding Limo Service',
    metaTitle: 'Washington DC Wedding Limo Service | DCA Limos',
    metaDescription:
      'Wedding limo service in Washington DC: stretch limousines, Sprinter vans and black cars for the couple, the party and guests. Flat rates. Call (877) 609-1919.',
    stats: SERVICE_STATS,
    intro: [
      'A Washington wedding moves between places: a ceremony at a church in Georgetown or a chapel on a university campus, photographs on the Mall or at the Tidal Basin, a reception in a hotel ballroom, a museum or a rooftop, and a hotel for the night. DCA Limos keeps the couple, the wedding party and the guests on schedule between all of them with a stretch limousine, Sprinter vans and black cars driven by licensed, background-checked chauffeurs.',
      'Wedding transportation is planned once and then forgotten about, which is the point. We build a timeline with you, confirm a rate before you book, and assign chauffeurs who know how to reach the venue door on a Saturday when the city is busy with everyone else’s plans.',
    ],
    highlights: [
      'Stretch limousine for the couple and the wedding party, with a chauffeur who waits through the ceremony',
      'Sprinter vans for guest shuttles between hotels, ceremony and reception',
      'Black car service for parents, grandparents and VIP guests',
      'Chauffeurs who know Georgetown, Capitol Hill, the Mall and the hotel entrances downtown',
      'Airport transfers for arriving guests, tracked to their flights',
      'Rate confirmed before you book; wedding bookings cancel free up to 12 hours before',
    ],
    sections: [
      {
        h2: 'Wedding limo service for the couple and the party',
        paragraphs: [
          'The stretch limousine seats eight and is the traditional choice for the ride from getting-ready suite to ceremony and on to the reception, with room for a gown and the people who need to be close. The chauffeur waits during the ceremony and photographs and is at the door when the couple is ready, which removes the one part of the day nobody wants to manage from the church steps.',
          'For larger parties we pair the limousine with a Sprinter van so that the bridesmaids, groomsmen and photographer travel together and arrive at the same time. The order of pickups and the addresses go into the timeline in advance and the chauffeurs follow it.',
        ],
      },
      {
        h2: 'Guest shuttles and black car service',
        paragraphs: [
          'Guests staying in a hotel block appreciate not having to find a Saturday-night ride in Washington. A Sprinter van looping between the hotel and the venue on an agreed schedule keeps everyone together and gets them home safely after the last dance. For parents and grandparents, a sedan or SUV with its own chauffeur allows them to arrive and leave on their own terms.',
          'Out-of-town guests flying into Reagan National, Dulles or BWI can be met at the airport, and the wedding coordinator receives one confirmation covering every vehicle.',
        ],
      },
      {
        h2: 'Planning a DC wedding car service around the city',
        paragraphs: [
          'Washington adds its own logistics. Streets close for events and motorcades, the Mall fills on weekends, and many venues on Capitol Hill, in Georgetown and along the waterfront have narrow or shared entrances. Our chauffeurs plan the approach for each stop and keep a margin in the timeline so that a slow bridge does not become a late ceremony.',
          'Tell us the date, the venues and the approximate headcount, and dispatch will propose vehicles and a timeline and confirm the rate. Call (877) 609-1919 or request a quote online; popular Saturdays book well ahead.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How far in advance should we book a wedding limo in Washington DC?',
        a: 'As soon as the date and venues are set. Stretch limousines and Sprinter vans are limited, and spring and autumn Saturdays are the busiest. Once booked, the timeline can be adjusted as the plans firm up.',
      },
      {
        q: 'Can you provide a guest shuttle between the hotel and the venue?',
        a: 'Yes. A Sprinter van on an hourly booking runs a loop between the hotel block and the ceremony or reception, with a schedule agreed in advance so guests know when to be in the lobby.',
      },
      {
        q: 'Does the chauffeur wait during the ceremony and photographs?',
        a: 'Yes. Wedding bookings are typically hourly, so the vehicle and chauffeur stay with you from the first pickup to the final drop-off and every stop in between.',
      },
      {
        q: 'Can you pick up guests at DCA, Dulles or BWI?',
        a: 'Yes. Guest airport transfers are flat rate, tracked to each flight, and can be added to the wedding booking so that the coordinator has one point of contact.',
      },
      {
        q: 'What is the cancellation policy for wedding transportation?',
        a: 'Limousines, Sprinter vans and special-event bookings cancel free up to 12 hours before pickup; sedans and SUVs up to 3 hours. Call (877) 609-1919 to change dates or vehicles.',
      },
    ],
    related: [
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Maryland Wedding Limo', to: '/maryland-wedding-limo' },
      { label: 'Georgetown Limo Service', to: '/georgetown-limo-service' },
      { label: 'Washington DC Anniversary Limo', to: '/washington-dc-anniversary-limo' },
      { label: 'DC Wedding Transportation Guide (blog)', to: '/blog/dc-wedding-transportation-guide' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Our Fleet', to: '/fleet' },
    ],
    schema: {
      areaServed: ['Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Wedding limousine service',
    },
  },
  {
    slug: 'washington-dc-corporate-car-service',
    type: 'service',
    name: 'Washington DC Corporate Car Service',
    badge: 'Signature Service',
    h1: 'Washington DC Corporate Car Service',
    metaTitle: 'Washington DC Corporate Car Service | Executive Chauffeurs',
    metaDescription:
      'Corporate car service in Washington DC for executives, law firms, associations and government affairs teams. Accounts, monthly invoicing. Call (877) 609-1919.',
    stats: SERVICE_STATS,
    intro: [
      'Washington runs on meetings, and the meetings are rarely in one place. A morning at a client’s office on K Street, a hearing on Capitol Hill, lunch in Penn Quarter, an afternoon at a federal agency and a flight out of Reagan National is an ordinary day for the people we drive. DCA Limos provides corporate car service that keeps that day on schedule with executive sedans and SUVs, professional chauffeurs and a dispatch desk that answers at any hour.',
      'We work with law firms, trade associations, consultancies, government affairs teams and corporate travel departments across the District, Northern Virginia and Maryland. Point-to-point trips are flat rate and multi-stop days are hourly, and a corporate account puts everything on one monthly invoice.',
    ],
    highlights: [
      'Executive sedans and SUVs with licensed, background-checked chauffeurs',
      'Hourly as-directed service for Hill days, roadshows and multi-meeting itineraries',
      'Airport transfers to and from DCA, Dulles and BWI with flight tracking',
      'Corporate accounts with monthly invoicing and billing references for every trip',
      'Chauffeurs who understand downtown entrances, security perimeters and street closures',
      'Confirmed rates, 24/7 dispatch and free cancellation up to 3 hours before pickup on sedans and SUVs',
    ],
    sections: [
      {
        h2: 'Executive car service across the District',
        paragraphs: [
          'Downtown Washington is compact but slow. One-way streets, motorcades, demonstrations and construction can turn a short hop into a long one, and parking is rarely an option. A chauffeur solves this by dropping you at the door, repositioning while you are inside and returning when you text. For a day with several stops, an hourly booking keeps the same vehicle and chauffeur with you throughout so that coats, files and equipment stay in the car.',
          'Our chauffeurs drive the city daily. They know which entrance a law firm uses on a Saturday, how the security perimeter around the Capitol and the White House affects a drop-off, and which bridge to take to Arlington at five in the afternoon.',
        ],
      },
      {
        h2: 'Black car service for clients, boards and events',
        paragraphs: [
          'When a visiting client or board member is in town, the car is part of the welcome. We meet arrivals at Reagan National with a name sign, deliver them to the hotel and are on call for the days that follow. Conferences at the Washington Convention Center, receptions at hotels and dinners in Georgetown are handled the same way, with one confirmation for the whole program.',
          'Teams travel together in Sprinter vans, and larger groups are split across coordinated vehicles that leave and arrive as a set.',
        ],
      },
      {
        h2: 'Accounts, invoicing and duty of care',
        paragraphs: [
          'A corporate account is the simplest way to use a chauffeur service regularly. Approved bookers reserve by phone or email, each trip carries the client or matter reference you specify, and a single monthly invoice replaces a stack of receipts. Every vehicle is commercially insured and every chauffeur is licensed and background-checked, which satisfies most travel policies.',
          'To open an account or quote a single trip, call (877) 609-1919 or use the booking page. Rates are confirmed in writing before the chauffeur is dispatched.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How does a corporate account work?',
        a: 'Approved staff book by phone or email, each trip is tagged with your reference, and all trips appear on one monthly invoice. Dispatch keeps traveler preferences and vehicle classes on file so bookings take a minute.',
      },
      {
        q: 'Is hourly service better than point-to-point for a day of meetings?',
        a: 'Usually. Once a day has three or more stops, an hourly booking keeps one chauffeur and vehicle with you, waits at each stop and adapts as the schedule changes. Single transfers are flat rate.',
      },
      {
        q: 'Can chauffeurs get close to Capitol Hill and federal buildings?',
        a: 'Yes, within the security rules of each site. Chauffeurs drop at the closest permitted point, reposition nearby and return when you are ready. They plan around closures and motorcades in real time.',
      },
      {
        q: 'Do you cover Northern Virginia and Maryland offices as well as DC?',
        a: 'Yes. Tysons, Rosslyn, Crystal City, Reston, Bethesda and Silver Spring are all daily destinations, along with the three airports. Rates are confirmed before you ride wherever the trip goes.',
      },
      {
        q: 'How quickly can a corporate booking be made?',
        a: 'Same-day sedans and SUVs are often available; call (877) 609-1919 for immediate needs. For Sprinter vans and multi-vehicle programs, a day or more of notice is recommended.',
      },
    ],
    related: [
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'DC Corporate Transportation Guide (blog)', to: '/blog/dc-corporate-transportation-guide' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Corporate Car Service vs Rideshare', to: '/corporate-car-service-vs-rideshare' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Corporate car service',
    },
  },
  {
    slug: 'washington-dc-black-car-service',
    type: 'service',
    name: 'Washington DC Black Car Service',
    badge: 'Signature Service',
    h1: 'Washington DC Black Car Service',
    metaTitle: 'Washington DC Black Car Service | Chauffeured Sedans & SUVs',
    metaDescription:
      'Black car service in Washington DC: licensed chauffeurs, late-model sedans and SUVs, flat rates confirmed before you ride, 24/7 dispatch. Call (877) 609-1919.',
    stats: SERVICE_STATS,
    intro: [
      'Black car service is the quiet, dependable version of getting around Washington. A professional chauffeur, a late-model Mercedes-Benz, BMW, Cadillac or Chevrolet, and a price agreed before the car arrives. DCA Limos runs black cars throughout the District and across the river into Northern Virginia and Maryland, for airport transfers, business travel, dinners, theater and any trip where the ride should not be the interesting part of the evening.',
      'Every chauffeur is licensed and background-checked, every vehicle is commercially insured and dispatch is staffed 24/7. Flat rates cover point-to-point trips; hourly rates cover evenings and days with several stops.',
    ],
    highlights: [
      'Mercedes-Benz E-Class and BMW 7 Series sedans; Cadillac Escalade and Chevrolet Suburban SUVs',
      'Flat rates confirmed before you ride, with no surge pricing at rush hour or in the rain',
      'Airport service to Reagan National, Dulles and BWI with flight tracking and complimentary wait time',
      'Hourly service for evenings out, sightseeing and meeting days',
      'Chauffeurs familiar with hotel, restaurant and venue entrances across the city',
      'Car seats on request; free cancellation up to 3 hours before pickup on sedans and SUVs',
    ],
    sections: [
      {
        h2: 'What a Washington black car service should deliver',
        paragraphs: [
          'The vehicle should be clean and quiet, the chauffeur should be early, and the price should be the one you were told. Those three things are the whole promise, and they are harder to keep in Washington than in most cities because traffic, closures and motorcades can change a route in a moment. Our chauffeurs plan each trip against live conditions and leave a margin so that you arrive when you intended to.',
          'The experience inside the car matters as well. Calls can be taken in private, the temperature is set to your preference and the chauffeur handles the doors and the luggage without being asked.',
        ],
      },
      {
        h2: 'Airport transfers and car service to the suburbs',
        paragraphs: [
          'Reagan National is minutes from downtown across the 14th Street Bridge, and it is our most frequent trip. Dulles and BWI are longer drives that reward a fixed rate and a chauffeur who knows the fastest approach at that hour. On arrivals the flight is tracked and the chauffeur waits in the designated area or inside with a name sign if you add meet and greet.',
          'From the District we also drive to Bethesda, Chevy Chase, Silver Spring, Arlington, Alexandria, Tysons and further afield to Annapolis, Baltimore and Richmond, all on flat rates confirmed in advance.',
        ],
      },
      {
        h2: 'Evenings, occasions and hourly chauffeur service',
        paragraphs: [
          'A black car for a dinner in Georgetown, a performance at the Kennedy Center or a game at Capital One Arena means no garage, no surge and no waiting on a corner afterwards. Book hourly and the chauffeur stays nearby between stops; book point-to-point and we schedule the return for the time you expect to leave.',
          'Reservations are taken online or at (877) 609-1919. Tell us the addresses, the time and the number of passengers, and dispatch confirms the vehicle and the rate.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'What is the difference between a black car service and a taxi or rideshare?',
        a: 'A black car is reserved in advance with a professional chauffeur, a specific vehicle class and a rate confirmed before you ride. There is no meter, no surge and no waiting to see who accepts the trip.',
      },
      {
        q: 'Which vehicles are available?',
        a: 'Mercedes-Benz E-Class and BMW 7 Series sedans for up to three passengers, Cadillac Escalade and Chevrolet Suburban SUVs for up to six, and Mercedes Sprinter vans for groups. Car seats are available on request.',
      },
      {
        q: 'Do you serve all of Washington DC?',
        a: 'Yes, every neighborhood from Georgetown and Capitol Hill to Navy Yard, Adams Morgan and upper Northwest, plus Northern Virginia and Maryland. Dispatch runs 24/7.',
      },
      {
        q: 'How is the price set?',
        a: 'Point-to-point trips are flat rate based on the vehicle and the addresses; multi-stop trips are hourly. Either way the price is confirmed in writing before the chauffeur is dispatched.',
      },
      {
        q: 'How do I cancel or change a booking?',
        a: 'Call (877) 609-1919 or reply to your confirmation. Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans and limousines up to 12 hours.',
      },
    ],
    related: [
      { label: 'DCA Airport Black Car Service', to: '/dca-airport-black-car-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Kennedy Center Transportation', to: '/kennedy-center-transportation' },
      { label: 'Why Hire a Chauffeur', to: '/why-hire-a-chauffeur' },
      { label: 'Our Fleet', to: '/fleet' },
    ],
    schema: {
      areaServed: ['Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Black car service',
    },
  },
  {
    slug: 'washington-dc-prom-limo',
    type: 'service',
    name: 'Washington DC Prom Limo',
    badge: 'Signature Service',
    h1: 'Washington DC Prom Limo Service',
    metaTitle: 'Washington DC Prom Limo Service | DCA Limos',
    metaDescription:
      'Prom limo service in Washington DC: stretch limos and Sprinter vans, licensed chauffeurs, fixed itineraries and parent-approved rules. Call (877) 609-1919.',
    stats: SERVICE_STATS,
    intro: [
      'Prom night in Washington is a small production: photographs at someone’s house, dinner in Penn Quarter or Georgetown, the dance at a hotel ballroom or a venue on the waterfront, and a safe ride home for everyone. DCA Limos provides prom limo service for students across the District, Northern Virginia and Maryland, with a stretch limousine or a Sprinter van, a licensed chauffeur and an itinerary agreed with parents before the night begins.',
      'The rate is confirmed when you book, the chauffeur stays with the group from first pickup to last drop-off, and the rules are simple and non-negotiable.',
    ],
    highlights: [
      'Stretch limousine for up to eight; Mercedes Sprinter van for larger groups',
      'Licensed, background-checked chauffeurs and commercially insured vehicles',
      'Itinerary with pickup addresses, dinner, venue and drop-offs fixed in advance',
      'Parents receive the confirmation and the chauffeur’s contact details',
      'No alcohol, no smoking and no unscheduled stops, without exception',
      'Rate confirmed before you book; prom bookings cancel free up to 12 hours before',
    ],
    sections: [
      {
        h2: 'How our prom limo service works',
        paragraphs: [
          'One parent or organizer books on behalf of the group and gives us the pickup addresses, the dinner reservation, the venue and the time the dance ends. Dispatch builds the itinerary, confirms the vehicle and the rate, and sends the confirmation to the booking parent. On the night, the chauffeur follows the itinerary exactly, waits during dinner and the dance, and drops each student at the agreed address.',
          'Because the booking is hourly, the vehicle and chauffeur are with the group throughout. There is no second car to find after the dance and no question of who is driving home.',
        ],
      },
      {
        h2: 'Choosing between a stretch limousine and a Sprinter',
        paragraphs: [
          'The stretch limousine is the classic choice and seats eight comfortably in formal wear. Groups larger than that are better served by the Sprinter van, which seats up to fourteen, has more headroom for hair and dresses and makes it easier for everyone to travel together rather than splitting into two cars. Both are driven by chauffeurs who handle prom season every year.',
          'Photographs at the pickup are part of the tradition, so we ask the chauffeur to allow time for them before the first departure.',
        ],
      },
      {
        h2: 'A chauffeur service parents can trust',
        paragraphs: [
          'Every chauffeur is licensed and background-checked. Every vehicle is commercially insured and inspected. Alcohol, smoking and vaping are not permitted in any vehicle, unscheduled stops are refused, and the chauffeur will call the booking parent if anything about the night departs from the plan. These rules are explained at booking and again at pickup.',
          'Prom Saturdays fill early. Call (877) 609-1919 or book online with the date and the approximate group size, and dispatch will hold a vehicle and confirm the details.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How many students fit in a prom limo?',
        a: 'The stretch limousine seats eight. For larger groups the Mercedes Sprinter van seats up to fourteen with room for formal wear. Larger parties can be split across coordinated vehicles.',
      },
      {
        q: 'Does the chauffeur stay during dinner and the dance?',
        a: 'Yes. Prom bookings are hourly, so the same chauffeur and vehicle remain with the group from the first pickup to the last drop-off and wait at each stop.',
      },
      {
        q: 'What are the rules in the vehicle?',
        a: 'No alcohol, no smoking or vaping and no unscheduled stops. The chauffeur follows the itinerary agreed with the booking parent and will contact them if plans change.',
      },
      {
        q: 'When should we book for prom?',
        a: 'As soon as the date is known. Stretch limousines and Sprinters are limited during prom season in late spring, and popular Saturdays are reserved well in advance.',
      },
      {
        q: 'Can the booking be changed or cancelled?',
        a: 'Limousines and Sprinter vans cancel free up to 12 hours before pickup. Itinerary changes such as an added pickup address can be made by calling (877) 609-1919 before the night.',
      },
    ],
    related: [
      { label: 'Prom Limo Service', to: '/limo/prom-limo-service' },
      { label: 'Maryland Prom Limo', to: '/maryland-prom-limo' },
      { label: 'Washington DC Graduation Limo', to: '/washington-dc-graduation-limo' },
      { label: 'Washington DC Wedding Limo', to: '/washington-dc-wedding-limo' },
      { label: 'Penn Quarter Limo Service', to: '/penn-quarter-limo-service' },
      { label: 'Our Fleet', to: '/fleet' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Washington, DC', 'Northern Virginia', 'Maryland'],
      serviceType: 'Prom limousine service',
    },
  },
  {
    slug: 'washington-dc-airport-car-service',
    type: 'service',
    name: 'Washington DC Airport Car Service',
    badge: 'Signature Service',
    h1: 'Washington DC Airport Car Service to DCA, Dulles & BWI',
    metaTitle: 'Washington DC Airport Car Service | DCA Limos',
    metaDescription:
      'Airport car service from Washington DC to Reagan National, Dulles and BWI: flat rates, flight tracking and 24/7 dispatch. Call (877) 609-1919.',
    stats: SERVICE_STATS,
    intro: [
      'Washington is served by three airports, and from the District each one is a different kind of trip. Reagan National is just across the river and takes minutes; Dulles is a long drive west along I-66 and the Dulles Access Road; BWI is northeast up the Baltimore-Washington Parkway. DCA Limos drives all three from every neighborhood in the city, with a flat rate confirmed before you ride and a chauffeur at your door at the agreed time.',
      'Departures are back-timed from your flight and the traffic we expect; arrivals are tracked so the chauffeur is waiting when you land. Dispatch is available 24/7 for the earliest and latest flights.',
    ],
    highlights: [
      'Flat rates from any DC address to DCA, IAD and BWI, confirmed before you ride',
      'Departure pickups timed to your flight, your airline’s check-in guidance and live traffic',
      'Arrivals tracked in real time with complimentary wait time and optional meet and greet',
      'Sedans for individuals, SUVs for families with luggage, Sprinter vans for groups',
      'Airport-to-airport transfers for split itineraries',
      'Car seats on request; free cancellation up to 3 hours before pickup on sedans and SUVs',
    ],
    sections: [
      {
        h2: 'Car service from DC to Reagan National',
        paragraphs: [
          'Reagan National is the short one. From downtown, Capitol Hill or Georgetown the chauffeur crosses the 14th Street Bridge or follows the George Washington Parkway and drops at the terminal door for your airline. The trip is short enough that the value lies in the timing: an early-morning flight is far easier when the car is confirmed the night before and arrives before you have finished your coffee.',
          'On the return, the chauffeur tracks your flight and waits in the designated pickup area, or meets you inside with a name sign if you add meet and greet.',
        ],
      },
      {
        h2: 'Chauffeur service to Dulles and BWI',
        paragraphs: [
          'Dulles is a longer drive, and its length depends heavily on the hour. The chauffeur chooses between I-66, the Dulles Access Road and Route 267 based on live conditions and builds in a margin for the airline’s check-in window. International departures usually mean more luggage, so an SUV is often the right vehicle.',
          'BWI is reached by way of New York Avenue and the Baltimore-Washington Parkway or Route 50 and I-95. Travelers who choose BWI for the fare often find the fixed ground rate makes the whole trip predictable. Both airports are served around the clock.',
        ],
      },
      {
        h2: 'Which airport, and which vehicle',
        paragraphs: [
          'If you have a choice of airports, count the ground time as part of the trip. Reagan National wins for most domestic flights when you are staying in the District; Dulles is the gateway for long-haul international routes; BWI can be the practical choice for certain airlines and destinations. Whichever you fly, the sedan suits up to three passengers with normal luggage, the Cadillac Escalade or Chevrolet Suburban suits families and heavy bags, and the Sprinter van carries groups of up to fourteen.',
          'Book online or call (877) 609-1919 with your flight number, address and passenger count, and dispatch will confirm the vehicle and the flat rate.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How early should the chauffeur pick me up for a flight?',
        a: 'We back-time each pickup from your flight, your airline’s recommended check-in time and the traffic we expect on that route at that hour. Dulles and BWI need more margin than Reagan National; dispatch recommends a time when you book.',
      },
      {
        q: 'Do you track arriving flights at all three airports?',
        a: 'Yes. Give us the flight number and the chauffeur is positioned for the actual landing time. Complimentary wait time is 45 minutes on domestic and 60 minutes on international arrivals.',
      },
      {
        q: 'Can I be picked up at one airport and taken to another?',
        a: 'Yes. Transfers between DCA, Dulles and BWI are flat rate and both flights are tracked, which suits split itineraries and missed connections.',
      },
      {
        q: 'Is the fare fixed even if traffic is bad?',
        a: 'Yes. Airport transfers are flat rate based on the vehicle and the addresses, confirmed in writing before you ride, and the rate does not change with traffic, weather or demand.',
      },
      {
        q: 'What if my flight is cancelled or rebooked?',
        a: 'Call (877) 609-1919 as soon as you know and we move the pickup to the new flight. Sedans and SUVs can be cancelled free up to 3 hours before the original pickup time.',
      },
    ],
    related: [
      { label: 'DCA Airport Limo', to: '/limo/dca-airport-limo' },
      { label: 'Dulles Airport Limo', to: '/limo/dulles-airport-limo' },
      { label: 'BWI Airport Limo', to: '/limo/bwi-airport-limo' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'BWI to Washington DC', to: '/bwi-to-washington-dc' },
      { label: 'DCA vs Dulles: Which Airport (blog)', to: '/blog/dca-vs-dulles-which-airport' },
      { label: 'Airport Transportation Guide', to: '/airport-transportation-guide' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Washington, DC'],
      serviceType: 'Airport car service',
    },
  },
  // ---------------------------------------------------------------------------
  // Washington DC neighborhoods
  // ---------------------------------------------------------------------------
  {
    slug: 'georgetown-limo-service',
    type: 'city',
    name: 'Georgetown',
    badge: 'Washington DC Neighborhoods',
    h1: 'Georgetown Limo Service & Car Service',
    metaTitle: 'Georgetown Limo Service | Car Service in Georgetown, DC',
    metaDescription:
      'Chauffeured limo and car service in Georgetown, DC: airport transfers to DCA, Dulles and BWI, weddings and hotel pickups. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '40–60 minutes' },
      { label: 'To BWI', value: '55–80 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Georgetown is the oldest part of Washington and the hardest part to drive. Federal rowhouses line narrow one-way streets, M Street and Wisconsin Avenue carry the shopping crowds, and there is no Metro station, which is one reason a chauffeur makes so much sense here. DCA Limos serves Georgetown daily: airport transfers, hotel pickups, university visits, dinners along the waterfront and weddings at the neighborhood’s churches and historic houses.',
      'Every trip is driven by a licensed, background-checked chauffeur in a sedan, SUV, Sprinter van or stretch limousine, with a flat rate or hourly price confirmed before you book.',
    ],
    highlights: [
      'Airport car service to Reagan National by way of the Key Bridge and the George Washington Parkway',
      'Hotel pickups at the Georgetown waterfront, M Street and Wisconsin Avenue properties',
      'Georgetown University visits, move-in weekends and commencement transportation',
      'Wedding limo service for ceremonies and receptions in historic venues',
      'Evenings along the waterfront and M Street without searching for parking',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'A car service that knows Georgetown’s streets',
        paragraphs: [
          'Georgetown rewards local knowledge. Many residential streets are one-way and narrow enough that a stopped vehicle blocks them, so the chauffeur plans where to wait rather than idling in front of the house. M Street is slow at almost any hour, the Whitehurst Freeway is the quiet way past it, and the Key Bridge into Rosslyn backs up well before the light. Canal Road and Foxhall Road serve the residential north and west.',
          'Our chauffeurs also know the hotels: the entrances on the waterfront, the properties along M Street and the inns tucked into the side streets, each with its own drop-off arrangement.',
        ],
      },
      {
        h2: 'Airport limo service from Georgetown',
        paragraphs: [
          'Reagan National is a short run down the George Washington Parkway once you are over the Key Bridge, or across the Roosevelt Bridge from the Foggy Bottom side. Dulles is reached by the Key Bridge and I-66, and BWI by way of Rock Creek Parkway, New York Avenue and the Baltimore-Washington Parkway. On departures we back-time the pickup from your flight; on arrivals the chauffeur tracks the flight and waits in the designated area or inside with a name sign.',
        ],
      },
      {
        h2: 'University, weddings and chauffeur service for evenings out',
        paragraphs: [
          'Georgetown University brings families to the neighborhood for tours, move-in, family weekend and commencement, and the campus gates on 37th Street and Canal Road are easier with a chauffeur who knows which one is open. Wedding parties use the stretch limousine and Sprinter van between ceremonies at the neighborhood’s churches and receptions at historic houses, hotels and the waterfront.',
          'For dinner on M Street, a walk along the C&O Canal or a night out along the harbor, an hourly black car service keeps the vehicle nearby and the evening unhurried. Call (877) 609-1919 or book online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How long is the drive from Georgetown to Reagan National?',
        a: 'Usually 15–25 minutes depending on traffic, using the Key Bridge and the George Washington Parkway or the Roosevelt Bridge. We schedule pickups against live conditions and your flight time.',
      },
      {
        q: 'Where will the chauffeur wait on a narrow Georgetown street?',
        a: 'The chauffeur coordinates the exact spot with you by phone or text and positions the car at the nearest place it can stop safely, then pulls up to the door when you are ready.',
      },
      {
        q: 'Do you serve Georgetown University events?',
        a: 'Yes. Tours, move-in, family weekend and commencement are all regular trips, including airport transfers for visiting families and Sprinter vans for larger groups.',
      },
      {
        q: 'Can I book a wedding limo in Georgetown?',
        a: 'Yes. Stretch limousines, Sprinter vans and black cars are available for ceremonies and receptions in Georgetown, with a timeline built in advance and the rate confirmed before you book.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans, limousines and special-event bookings up to 12 hours. Call (877) 609-1919 to change a booking.',
      },
    ],
    related: [
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Washington DC Wedding Limo', to: '/washington-dc-wedding-limo' },
      { label: 'Foggy Bottom Limo Service', to: '/foggy-bottom-limo-service' },
      { label: 'Rosslyn-Ballston Limo Service', to: '/rosslyn-ballston-limo-service' },
      { label: 'Kennedy Center Transportation', to: '/kennedy-center-transportation' },
      { label: 'DC Neighborhoods Transportation Guide', to: '/washington-dc-neighborhoods-transportation-guide' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Georgetown, Washington, DC', 'Washington, DC'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'capitol-hill-limo-service',
    type: 'city',
    name: 'Capitol Hill',
    badge: 'Washington DC Neighborhoods',
    h1: 'Capitol Hill Limo Service & Car Service',
    metaTitle: 'Capitol Hill Limo Service | Car Service on Capitol Hill, DC',
    metaDescription:
      'Chauffeured car service on Capitol Hill: Hill days, House and Senate buildings, Union Station and airport transfers. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '45–65 minutes' },
      { label: 'To BWI', value: '50–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Capitol Hill is two neighborhoods in one. There is the Hill of the Capitol itself, the House and Senate office buildings, the Library of Congress and the Supreme Court, where security perimeters decide where a car can stop. And there is the residential Hill of rowhouses, Eastern Market, Barracks Row and Lincoln Park, where families live and visitors stay. DCA Limos serves both with sedans, SUVs and Sprinter vans and chauffeurs who know the difference.',
      'We drive advocacy groups and lobbyists on Hill days, staff and visitors to and from Union Station and Reagan National, and residents to dinners, events and weddings across the city, always at a rate confirmed before you book.',
    ],
    highlights: [
      'Hourly chauffeur service for Hill days with drop-offs at the nearest permitted entrance',
      'Airport car service to Reagan National in minutes across the South Capitol Street bridge or I-395',
      'Union Station pickups timed to Amtrak and commuter arrivals',
      'Sprinter vans for delegations, fly-ins and association groups',
      'Residential service for Eastern Market, Barracks Row, Lincoln Park and the H Street corridor',
      'Corporate accounts with monthly invoicing for firms and associations',
    ],
    sections: [
      {
        h2: 'Car service for Hill days and meetings',
        paragraphs: [
          'A Hill day is a string of short meetings split between the House office buildings on the south side and the Senate office buildings on the north, with a security line at every door and no parking anywhere near. A chauffeur on an hourly booking drops you as close as the perimeter allows, repositions while you are inside and is waiting when you come out. That is often the only way a schedule of six meetings holds together.',
          'Security arrangements around the Capitol change with events and threat levels, and streets close without much notice. Our chauffeurs follow the closures in real time and adjust the approach rather than guess.',
        ],
      },
      {
        h2: 'Airport and Union Station limo service',
        paragraphs: [
          'Reagan National is one of the shortest airport runs in the city from the Hill, down South Capitol Street or I-395 and across the river. Dulles and BWI are longer drives with the fare fixed in advance. Union Station is a few blocks north, and we meet Amtrak and MARC arrivals at the station’s pickup area with the train tracked as closely as a flight.',
          'On arrivals at DCA the chauffeur tracks your flight and waits in the designated area, or inside with a name sign if you add meet and greet.',
        ],
      },
      {
        h2: 'Black car service for residents and visitors',
        paragraphs: [
          'Residents of the Hill use us for the same reasons as anyone in the city: dinners downtown, performances at the Kennedy Center, games at Nationals Park and Audi Field a short drive south, weddings and anniversaries. Visitors staying in the hotels near Union Station and the Capitol use the hourly service to see the monuments without walking the full length of the Mall.',
          'Whatever the trip, the chauffeur is licensed and background-checked, the vehicle is commercially insured and dispatch is available at (877) 609-1919 around the clock.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How close can a car get to the Capitol and the office buildings?',
        a: 'To the nearest point the security perimeter allows on that day, which the chauffeur confirms as you approach. The car then repositions nearby and returns when you text or call.',
      },
      {
        q: 'Is hourly service or point-to-point better for a Hill day?',
        a: 'Hourly. One chauffeur and one vehicle stay with you for every meeting, wait between stops and adapt when meetings run long. A single transfer to or from the Hill is flat rate.',
      },
      {
        q: 'How long does it take from Capitol Hill to Reagan National?',
        a: 'Typically 15–25 minutes depending on traffic. Pickups are scheduled against live conditions and your flight, and arrivals are tracked so the chauffeur waits at the right time.',
      },
      {
        q: 'Can you handle a fly-in group with dozens of participants?',
        a: 'Yes. Sprinter vans seat up to fourteen, and larger groups are split across coordinated vehicles with one confirmation and one invoice for the organizer.',
      },
      {
        q: 'Do you offer accounts for firms and associations?',
        a: 'Yes. Corporate accounts provide monthly invoicing with the references you need and a direct line to dispatch. Call (877) 609-1919 to set one up.',
      },
    ],
    related: [
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'Navy Yard Limo Service', to: '/navy-yard-limo-service' },
      { label: 'Nationals Park Transportation', to: '/nationals-park-transportation' },
      { label: 'Penn Quarter Limo Service', to: '/penn-quarter-limo-service' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Capitol Hill, Washington, DC', 'Washington, DC'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'dupont-circle-limo-service',
    type: 'city',
    name: 'Dupont Circle',
    badge: 'Washington DC Neighborhoods',
    h1: 'Dupont Circle Limo Service & Car Service',
    metaTitle: 'Dupont Circle Limo Service | DC Car Service',
    metaDescription:
      'Chauffeured car service in Dupont Circle and Embassy Row: airport transfers, embassy and think-tank visits, hotels and evenings out. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '40–60 minutes' },
      { label: 'To BWI', value: '50–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Dupont Circle is where Washington’s diplomatic, intellectual and social lives overlap. Massachusetts Avenue carries Embassy Row northwest past mansions that house missions and institutes; Connecticut Avenue is lined with hotels, restaurants and bookshops; the side streets hold rowhouses, galleries and the think tanks whose staff fly in and out of Reagan National all week. DCA Limos provides limo and car service for all of it.',
      'Sedans, SUVs and Sprinter vans are driven by licensed, background-checked chauffeurs, with flat rates for airport and point-to-point trips and hourly rates for days that move between several addresses.',
    ],
    highlights: [
      'Airport car service to Reagan National, Dulles and BWI with flight tracking',
      'Embassy, institute and conference transportation along Massachusetts Avenue and Connecticut Avenue',
      'Hotel pickups on Connecticut Avenue, New Hampshire Avenue and around the circle itself',
      'Hourly chauffeur service for delegations and visiting scholars with several meetings',
      'Evenings in Dupont, Kalorama and the 14th Street corridor without parking',
      'Corporate and institutional accounts with monthly invoicing',
    ],
    sections: [
      {
        h2: 'Car service around the circle',
        paragraphs: [
          'The circle itself is the difficulty. Connecticut Avenue passes beneath it, Massachusetts and New Hampshire Avenues cross it, and P Street and 19th Street feed it, so the right lane for a hotel entrance is decided a block early. Our chauffeurs approach from the side that suits the destination and know which hotels use the avenue entrance and which use a side street.',
          'North of the circle, Kalorama’s quiet streets hold residences and embassies where a discreet, punctual car is expected. South and east, the office buildings toward Farragut and the restaurants along 17th Street are a few minutes away.',
        ],
      },
      {
        h2: 'Airport limo service from Dupont Circle',
        paragraphs: [
          'Reagan National is reached by way of Rock Creek Parkway and the Roosevelt or Memorial Bridge, or down through the West End and across the 14th Street Bridge, depending on the hour. Dulles is a run west on I-66; BWI is northeast along New York Avenue and the Baltimore-Washington Parkway. Departures are back-timed from your flight and arrivals are tracked, with 45 minutes of complimentary wait on domestic arrivals and 60 on international.',
        ],
      },
      {
        h2: 'Diplomatic, academic and black car service for evenings',
        paragraphs: [
          'Embassies, institutes and universities in the neighborhood bring delegations, speakers and scholars who need to be collected at the airport, delivered to a hotel and moved between meetings over several days. An hourly booking with the same chauffeur keeps a visiting group together and on time, and a Sprinter van carries a full delegation.',
          'For residents and guests, the black car works just as well for dinner on 14th Street, a gallery opening or a night at the Kennedy Center. Call (877) 609-1919 or book online; the rate is confirmed before you ride.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How far is Dupont Circle from Reagan National?',
        a: 'About 15–25 minutes depending on traffic and the bridge the chauffeur chooses. Pickups are timed to your flight and live conditions.',
      },
      {
        q: 'Can you handle transportation for an embassy or institute event?',
        a: 'Yes. We provide sedans, SUVs and Sprinter vans for delegations, speakers and guests, with hourly service across several days and one point of contact at dispatch.',
      },
      {
        q: 'Where will the chauffeur pick up at a Dupont Circle hotel?',
        a: 'At the hotel’s designated entrance, which the chauffeur confirms in advance. For hotels facing the circle, we coordinate the approach so the car is on the correct side.',
      },
      {
        q: 'Do you offer hourly service for a day of meetings around Dupont and downtown?',
        a: 'Yes. Hourly as-directed service keeps one chauffeur and vehicle with you for the day, waiting at each stop. The hourly rate is confirmed before you book.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans and limousines up to 12 hours. Changes can be made by calling (877) 609-1919.',
      },
    ],
    related: [
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Logan Circle Limo Service', to: '/logan-circle-limo-service' },
      { label: 'Adams Morgan Limo Service', to: '/adams-morgan-limo-service' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'Washington DC Black Car Service', to: '/washington-dc-black-car-service' },
      { label: 'DC Neighborhoods Transportation Guide', to: '/washington-dc-neighborhoods-transportation-guide' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Dupont Circle, Washington, DC', 'Washington, DC'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'foggy-bottom-limo-service',
    type: 'city',
    name: 'Foggy Bottom',
    badge: 'Washington DC Neighborhoods',
    h1: 'Foggy Bottom Limo Service & Car Service',
    metaTitle: 'Foggy Bottom Limo Service | Car Service in Foggy Bottom, DC',
    metaDescription:
      'Chauffeured car service in Foggy Bottom and the West End: GW University, the Kennedy Center, hotels and airport transfers. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '10–20 minutes' },
      { label: 'To Dulles (IAD)', value: '40–60 minutes' },
      { label: 'To BWI', value: '55–80 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Foggy Bottom sits between the White House and the Potomac, and it packs a great deal into a few blocks: George Washington University and its hospital, the State Department, the Kennedy Center, the Watergate, international financial institutions and the hotels of the West End. It is also the closest District neighborhood to Reagan National, a few minutes away over the Roosevelt or Memorial Bridge. DCA Limos serves all of it with sedans, SUVs and Sprinter vans.',
      'Our chauffeurs handle the neighborhood’s particular geography, where parkway ramps, bridge approaches and one-way streets meet, so that a visitor to the university, the State Department or the concert hall arrives at the right door.',
    ],
    highlights: [
      'The shortest airport car service in the city: Reagan National in minutes across the river',
      'George Washington University tours, move-in, family weekend and commencement',
      'Kennedy Center performances with drop-off at the plaza and no garage queue afterwards',
      'State Department and international institution visitors dropped at the correct public entrance',
      'Hotel pickups in the West End and along Pennsylvania Avenue and Virginia Avenue',
      'Flat rates confirmed before you book, 24/7 dispatch and optional meet and greet at the airport',
    ],
    sections: [
      {
        h2: 'A neighborhood of ramps, bridges and entrances',
        paragraphs: [
          'Foggy Bottom is where Rock Creek Parkway, the Whitehurst Freeway, the E Street Expressway and the ramps for the Roosevelt Bridge all converge. Missing a turn can mean an unplanned trip to Virginia. Our chauffeurs drive these approaches daily and know that the parkway changes direction at commuter hours, that Virginia Avenue is the reliable way to the Kennedy Center plaza and that the university’s blocks are threaded with one-way streets.',
          'Government and institutional buildings in the neighborhood have public entrances and restricted ones, and visitors are dropped at the public side with time allowed for screening.',
        ],
      },
      {
        h2: 'Airport limo service from Foggy Bottom',
        paragraphs: [
          'Reagan National is closer to Foggy Bottom than to almost anywhere else in the city. The chauffeur crosses the Roosevelt or Memorial Bridge to the George Washington Parkway and is at the terminal in minutes outside rush hour. Dulles is reached by I-66 from the Roosevelt Bridge and BWI by way of New York Avenue and the parkway. Arrivals are tracked and departures back-timed, with the flat rate confirmed before you ride.',
        ],
      },
      {
        h2: 'University, performances and chauffeur service for the West End',
        paragraphs: [
          'George Washington University brings families and guests through the neighborhood all year, and a Sprinter van or SUV that meets them at the airport and delivers them to campus takes one task off the list. Kennedy Center patrons appreciate a drop at the plaza and a chauffeur positioned for the end of the performance, which avoids the garage exit line entirely.',
          'West End hotels, restaurants and residences use our black car service for dinners, business travel and evenings out. Call (877) 609-1919 or book online for a confirmed rate.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How long is the drive from Foggy Bottom to Reagan National?',
        a: 'Usually 10–20 minutes depending on traffic, across the Roosevelt or Memorial Bridge and down the George Washington Parkway. Pickups are timed to your flight and live conditions.',
      },
      {
        q: 'Do you drop off at the Kennedy Center entrance?',
        a: 'Yes. The chauffeur drops at the entrance plaza and, for the return, positions the car at an agreed point as the performance ends, so there is no garage line to wait in.',
      },
      {
        q: 'Can you serve visitors to the State Department or other federal buildings?',
        a: 'Yes, at the public entrance the building designates, with time built in for security screening. The chauffeur repositions nearby and returns when you are finished.',
      },
      {
        q: 'Do you handle GW University move-in and commencement transportation?',
        a: 'Yes. Airport transfers for arriving families, SUVs for luggage-heavy move-in days and Sprinter vans for groups are all regular bookings.',
      },
      {
        q: 'How do I book and what is the cancellation policy?',
        a: 'Book online or call (877) 609-1919. Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans and limousines up to 12 hours.',
      },
    ],
    related: [
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Kennedy Center Transportation', to: '/kennedy-center-transportation' },
      { label: 'Georgetown Limo Service', to: '/georgetown-limo-service' },
      { label: 'Rosslyn-Ballston Limo Service', to: '/rosslyn-ballston-limo-service' },
      { label: 'DCA Airport Hotel Transfers', to: '/dca-airport-hotel-transfers' },
      { label: 'Washington DC Graduation Limo', to: '/washington-dc-graduation-limo' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Foggy Bottom, Washington, DC', 'Washington, DC'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'navy-yard-limo-service',
    type: 'city',
    name: 'Navy Yard',
    badge: 'Washington DC Neighborhoods',
    h1: 'Navy Yard Limo Service & Car Service',
    metaTitle: 'Navy Yard Limo Service | Car Service in Navy Yard, DC',
    metaDescription:
      'Chauffeured car service in Navy Yard and Capitol Riverfront: Nationals Park, Audi Field, offices and airport transfers. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '10–20 minutes' },
      { label: 'To Dulles (IAD)', value: '45–65 minutes' },
      { label: 'To BWI', value: '50–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Navy Yard, or the Capitol Riverfront, has grown from a working waterfront into one of Washington’s densest residential and entertainment districts. Nationals Park anchors it, Audi Field is a short walk away at Buzzard Point, and the blocks between are apartment towers, offices, restaurants and the Yards Park promenade along the Anacostia. Reagan National is minutes away across the river. DCA Limos serves the neighborhood with sedans, SUVs and Sprinter vans and chauffeurs who know how game nights change the streets.',
      'Airport transfers, game-day car service, corporate travel for the offices along M Street SE and evenings along the waterfront are all priced as a flat rate or hourly and confirmed before you book.',
    ],
    highlights: [
      'Reagan National in minutes by way of South Capitol Street and I-395',
      'Game-day car service to Nationals Park and Audi Field with pickups planned around closures',
      'Residential pickups at waterfront apartment towers with coordinated lobby meeting points',
      'Corporate car service for the federal and private offices along M Street SE and New Jersey Avenue',
      'Sprinter vans for group outings, suite guests and corporate hospitality',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'Car service on game nights and every other night',
        paragraphs: [
          'When the Nationals or DC United are at home, the grid around the stadiums changes: streets close, garages fill and rideshare zones move. Our chauffeurs plan a drop-off as close to the gate as the closures allow and an agreed pickup point a short walk away, positioned before the final out so that the ride home does not begin with a long wait. Suite guests and corporate hosts often book a Sprinter van so the group moves together.',
          'On ordinary nights the neighborhood is easy to reach and pleasant to leave from: the waterfront restaurants, the Yards and the breweries along the river are all a few minutes from the bridges.',
        ],
      },
      {
        h2: 'Airport limo service from Navy Yard',
        paragraphs: [
          'Reagan National is one of the quickest airport runs in the city from here, down South Capitol Street and across the river or along I-395. Dulles and BWI are longer trips with the fare fixed in advance. Departures are back-timed from your flight, and arrivals are tracked so the chauffeur is waiting in the designated area or inside with a name sign.',
        ],
      },
      {
        h2: 'Residential and corporate chauffeur service',
        paragraphs: [
          'Navy Yard’s apartment towers each have their own lobby and loading arrangements, and the chauffeur coordinates the meeting point with you so the car is at the right door. Residents use us for airport runs, dinners in Penn Quarter and Georgetown, weddings and nights at the Kennedy Center.',
          'Offices along M Street SE and near the Navy Yard gates book sedans and SUVs for visiting colleagues and hourly service for days that move between here, Capitol Hill and Northern Virginia. Corporate accounts consolidate everything on one invoice. Call (877) 609-1919 or book online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How long is the drive from Navy Yard to Reagan National?',
        a: 'Usually 10–20 minutes depending on traffic, by way of South Capitol Street and the bridge or I-395. Pickups are scheduled against your flight and live conditions.',
      },
      {
        q: 'Where will the chauffeur pick up after a Nationals or DC United game?',
        a: 'At an agreed point a short walk from the gate, outside the immediate closure zone, with the chauffeur positioned before the end of the game. The exact spot is confirmed by text.',
      },
      {
        q: 'Can you bring a group to a game?',
        a: 'Yes. Sprinter vans seat up to fourteen and are popular for suite guests, birthday outings and corporate hospitality. The rate is confirmed before you book.',
      },
      {
        q: 'Do you serve the apartment buildings along the waterfront?',
        a: 'Yes. The chauffeur coordinates the lobby or entrance with you in advance so the vehicle is at the correct door, and 15 minutes of complimentary wait is included at residential pickups.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans, limousines and event bookings up to 12 hours. Call (877) 609-1919 to change a reservation.',
      },
    ],
    related: [
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Nationals Park Transportation', to: '/nationals-park-transportation' },
      { label: 'Audi Field Transportation', to: '/audi-field-transportation' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'The Anthem & Wharf Transportation', to: '/the-anthem-wharf-transportation' },
      { label: 'Sports Game Day Limo', to: '/limo/sports-game-day-limo' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Navy Yard, Washington, DC', 'Washington, DC'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'penn-quarter-limo-service',
    type: 'city',
    name: 'Penn Quarter',
    badge: 'Washington DC Neighborhoods',
    h1: 'Penn Quarter Limo Service & Car Service',
    metaTitle: 'Penn Quarter Limo Service | Car Service in Penn Quarter, DC',
    metaDescription:
      'Chauffeured car service in Penn Quarter and Chinatown: Capital One Arena, theaters, museums, hotels, law firms and airport transfers. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '45–65 minutes' },
      { label: 'To BWI', value: '50–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Penn Quarter is downtown Washington at its busiest: Capital One Arena and its game and concert crowds, the theaters along 7th Street and E Street, the museums around the Portrait Gallery, the restaurants of Chinatown and the hotels and law firms that fill the blocks between Pennsylvania Avenue and the convention center. DCA Limos runs limo and car service through all of it with chauffeurs who know which streets close for an event and which hotel uses which door.',
      'Sedans and SUVs for business travelers and couples, Sprinter vans for groups and stretch limousines for occasions, each with a licensed, background-checked chauffeur and a rate confirmed before you book.',
    ],
    highlights: [
      'Airport car service to Reagan National, Dulles and BWI with flight tracking',
      'Arena and theater nights with drop-off near the doors and a pickup planned around the crowd',
      'Hotel and convention transportation for Penn Quarter, Chinatown and Mount Vernon Square',
      'Corporate car service for the law firms and offices along Pennsylvania Avenue and F Street',
      'Museum and sightseeing days on hourly as-directed service',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'Car service around the arena and the theaters',
        paragraphs: [
          'On an event night the blocks around Capital One Arena fill with foot traffic, and F Street and 7th Street can be closed or one-way in practice. Our chauffeurs drop as close to the entrance as the closures allow and agree a pickup point a block or two away, positioned before the final buzzer so that the car is waiting rather than circling. The same approach works for the theaters and concert halls in the neighborhood.',
          'Dinner before and drinks after fold into an hourly booking, with the chauffeur nearby throughout.',
        ],
      },
      {
        h2: 'Hotels, conventions and black car service for business',
        paragraphs: [
          'Penn Quarter hotels host conference delegates and business travelers year-round, and the convention center is a short walk or a shorter drive north. We collect arrivals at Reagan National, deliver them to the hotel and are on call for the meetings that follow, with a corporate account putting every trip on one monthly invoice. Law firms and offices in the neighborhood book sedans for clients and hourly service for days that move between here, the Hill and Northern Virginia.',
        ],
      },
      {
        h2: 'Airport limo service from Penn Quarter',
        paragraphs: [
          'Reagan National is a short drive south across the 14th Street Bridge; Dulles is reached by I-66 and BWI by New York Avenue and the Baltimore-Washington Parkway. Departures are back-timed from your flight and arrivals are tracked, with 45 minutes of complimentary wait on domestic arrivals and 60 on international. Meet and greet inside the terminal is available for guests who prefer to be met.',
          'Reservations are taken online or by phone at (877) 609-1919 at any hour.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you pick up after a game or concert at Capital One Arena?',
        a: 'Yes. The chauffeur drops near the entrance and agrees a pickup point a short walk away, outside the closures, and is positioned before the event ends. The spot is confirmed by text.',
      },
      {
        q: 'How long is the drive from Penn Quarter to Reagan National?',
        a: 'Typically 15–25 minutes depending on traffic, across the 14th Street Bridge. Pickups are scheduled against live conditions and your flight.',
      },
      {
        q: 'Do you serve the convention center and nearby hotels?',
        a: 'Yes. Conference transfers, group shuttles in Sprinter vans and executive sedans for speakers and sponsors are all regular bookings, with a single confirmation for the organizer.',
      },
      {
        q: 'Is hourly service available for a day of museums and sightseeing?',
        a: 'Yes. An hourly chauffeur stays with you across the museums, the Mall and the monuments, waiting at each stop. The hourly rate is confirmed before you book.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans and limousines up to 12 hours. Call (877) 609-1919 to change a reservation.',
      },
    ],
    related: [
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Capital One Arena Transportation', to: '/capital-one-arena-transportation' },
      { label: 'Washington Convention Center Transportation', to: '/washington-convention-center-transportation' },
      { label: 'DCA Airport Hotel Transfers', to: '/dca-airport-hotel-transfers' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'Concert Transportation', to: '/concert-transportation' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Penn Quarter, Washington, DC', 'Washington, DC'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'adams-morgan-limo-service',
    type: 'city',
    name: 'Adams Morgan',
    badge: 'Washington DC Neighborhoods',
    h1: 'Adams Morgan Limo Service & Car Service',
    metaTitle: 'Adams Morgan Limo Service | Car Service in Adams Morgan, DC',
    metaDescription:
      'Chauffeured car service in Adams Morgan: airport transfers to DCA, Dulles and BWI, nights on 18th Street, hotel pickups and group outings. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '20–30 minutes' },
      { label: 'To Dulles (IAD)', value: '40–60 minutes' },
      { label: 'To BWI', value: '50–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Adams Morgan is the neighborhood Washington goes to when it wants a night out. The stretch of 18th Street between Columbia Road and Florida Avenue is bars, restaurants and music, and the rowhouse streets around it are home to residents who value the energy but not the parking. There is no Metro station in the neighborhood itself, which makes a chauffeur especially welcome. DCA Limos provides limo and car service for residents, hotel guests and groups celebrating in Adams Morgan.',
      'Sedans, SUVs, Sprinter vans and stretch limousines, each with a licensed, background-checked chauffeur, at a flat rate or hourly price confirmed before you book.',
    ],
    highlights: [
      'Airport car service to Reagan National, Dulles and BWI with flight tracking',
      'Nights out on 18th Street and Columbia Road with an agreed pickup point away from the crowd',
      'Hotel pickups for the neighborhood’s boutique properties',
      'Sprinter vans and limousines for birthdays, bachelor and bachelorette parties',
      'Residential service for Lanier Heights, Kalorama Triangle and the streets off Columbia Road',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'Car service on 18th Street',
        paragraphs: [
          'On weekend nights 18th Street is crowded, slow and occasionally closed to through traffic. Our chauffeurs do not fight it. They drop at the closest sensible corner and agree a pickup point a block off the strip, on Columbia Road, Florida Avenue or one of the side streets, where the car can stop safely and you can find it easily. For groups on an hourly booking, the chauffeur stays nearby and returns when you text.',
          'The neighborhood’s rowhouse streets are narrow and often permit-parked, so for residential pickups the chauffeur coordinates the spot with you rather than blocking the street.',
        ],
      },
      {
        h2: 'Airport limo service from Adams Morgan',
        paragraphs: [
          'Reagan National is reached by way of Rock Creek Parkway or Connecticut Avenue and the Memorial or Roosevelt Bridge, a drive that varies with the hour. Dulles is west on I-66 after crossing the river; BWI is northeast along New York Avenue and the Baltimore-Washington Parkway. Departures are back-timed from your flight and arrivals are tracked, with complimentary wait time and optional meet and greet.',
        ],
      },
      {
        h2: 'Celebrations, hotels and black car service for residents',
        paragraphs: [
          'Birthdays, bachelor and bachelorette parties and reunions often start or end in Adams Morgan, and a Sprinter van or stretch limousine keeps the group together between dinner, the bars and home. Guests at the neighborhood’s boutique hotels use us for airport transfers and for evenings elsewhere in the city.',
          'Residents book the black car for the ordinary reasons: an early flight, a wedding in Maryland, a night at the Kennedy Center or a dinner in Georgetown. Call (877) 609-1919 or book online for a confirmed rate.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How long is the drive from Adams Morgan to Reagan National?',
        a: 'Usually 20–30 minutes depending on traffic, by way of Rock Creek Parkway or Connecticut Avenue and the bridges. Pickups are timed to your flight and live conditions.',
      },
      {
        q: 'Where will the chauffeur pick up after a night on 18th Street?',
        a: 'At an agreed corner just off the strip, typically on Columbia Road, Florida Avenue or a side street, confirmed by text so the car is easy to find and can stop safely.',
      },
      {
        q: 'Can you provide a limousine or van for a bachelorette or birthday party?',
        a: 'Yes. The stretch limousine seats eight and the Sprinter van up to fourteen. Party bookings are hourly, with the chauffeur staying with the group, and cancel free up to 12 hours before pickup.',
      },
      {
        q: 'Is there a minimum for a short trip from Adams Morgan?',
        a: 'Point-to-point trips are flat rate with no minimum distance. Hourly bookings have a minimum number of hours that varies by vehicle; dispatch confirms it before you book.',
      },
      {
        q: 'What is the cancellation policy for sedans and SUVs?',
        a: 'Free cancellation up to 3 hours before pickup. Call (877) 609-1919 or reply to your confirmation to change or cancel.',
      },
    ],
    related: [
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Dupont Circle Limo Service', to: '/dupont-circle-limo-service' },
      { label: 'Logan Circle Limo Service', to: '/logan-circle-limo-service' },
      { label: 'Washington DC Black Car Service', to: '/washington-dc-black-car-service' },
      { label: 'Washington DC Anniversary Limo', to: '/washington-dc-anniversary-limo' },
      { label: 'DC Neighborhoods Transportation Guide', to: '/washington-dc-neighborhoods-transportation-guide' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Adams Morgan, Washington, DC', 'Washington, DC'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'logan-circle-limo-service',
    type: 'city',
    name: 'Logan Circle',
    badge: 'Washington DC Neighborhoods',
    h1: 'Logan Circle Limo Service & Car Service',
    metaTitle: 'Logan Circle Limo Service | Car Service in Logan Circle, DC',
    metaDescription:
      'Chauffeured car service in Logan Circle and the 14th Street corridor: airport transfers, dinners, theater nights and hotel pickups. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '40–60 minutes' },
      { label: 'To BWI', value: '50–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Logan Circle is Victorian rowhouses around a park, with the 14th Street corridor running along its western edge: restaurants, shops, theaters and the bars that make it one of the city’s busiest evening streets. Shaw and U Street are next door, downtown is a few blocks south, and Reagan National is a short drive across the river. DCA Limos provides limo and car service for the neighborhood’s residents and for the visitors who stay in its hotels and guesthouses.',
      'Sedans, SUVs, Sprinter vans and stretch limousines, each with a licensed, background-checked chauffeur and a flat rate or hourly price confirmed before you book.',
    ],
    highlights: [
      'Airport car service to Reagan National, Dulles and BWI with flight tracking',
      'Dinner and theater evenings on 14th Street and P Street with pickups off the busy blocks',
      'Wedding limo service for ceremonies at the neighborhood’s churches and receptions across the city',
      'Residential pickups at rowhouses and condominiums with coordinated meeting points',
      'Hourly chauffeur service for days that move between Logan, downtown and the Hill',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'Car service on the 14th Street corridor',
        paragraphs: [
          '14th Street in the evening is lively and slow, with double-parked deliveries and rideshare pickups narrowing it further. Our chauffeurs drop close to the restaurant or theater and agree a pickup point on a quieter cross street, then position the car before you are ready. On an hourly booking the chauffeur waits nearby, so a dinner that runs late is not a problem.',
          'Around the circle itself the rowhouse streets are narrow and permit-parked, and the chauffeur coordinates the exact spot with you rather than blocking a neighbor’s drive.',
        ],
      },
      {
        h2: 'Airport limo service from Logan Circle',
        paragraphs: [
          'Reagan National is reached down 14th or 15th Street and across the 14th Street Bridge, a short drive outside rush hour. Dulles is west along I-66 and BWI is northeast by New York Avenue and the Baltimore-Washington Parkway. Departures are back-timed from your flight and the airline’s check-in guidance, and arrivals are tracked so the chauffeur waits in the designated area or inside with a name sign.',
        ],
      },
      {
        h2: 'Weddings, occasions and black car service for residents',
        paragraphs: [
          'The neighborhood’s historic churches host weddings throughout the year, and a stretch limousine or Sprinter van moves the party from a getting-ready suite to the ceremony and on to a reception downtown or in Georgetown. Anniversaries, birthdays and theater nights use the same vehicles on an hourly booking.',
          'Residents rely on the black car for early flights, evenings at the Kennedy Center and trips to Bethesda, Arlington and beyond. Call (877) 609-1919 or book online; the rate is confirmed before you ride.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How long is the drive from Logan Circle to Reagan National?',
        a: 'Typically 15–25 minutes depending on traffic, down 14th Street and across the 14th Street Bridge. Pickups are timed to your flight and live conditions.',
      },
      {
        q: 'Where will the chauffeur pick up after dinner on 14th Street?',
        a: 'At an agreed point on a quieter cross street a short walk from the restaurant, confirmed by text, with the car positioned before you are ready to leave.',
      },
      {
        q: 'Can you provide wedding transportation from a Logan Circle church?',
        a: 'Yes. Stretch limousines, Sprinter vans and black cars are available with a timeline built in advance. Wedding bookings cancel free up to 12 hours before pickup.',
      },
      {
        q: 'Do you offer hourly service for a day in the city?',
        a: 'Yes. Hourly as-directed service keeps one chauffeur and vehicle with you for meetings, sightseeing or errands, with the rate confirmed before you book.',
      },
      {
        q: 'How do I book, and what is the cancellation policy for sedans?',
        a: 'Book online or call (877) 609-1919. Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans and limousines up to 12 hours.',
      },
    ],
    related: [
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Dupont Circle Limo Service', to: '/dupont-circle-limo-service' },
      { label: 'Adams Morgan Limo Service', to: '/adams-morgan-limo-service' },
      { label: 'Washington DC Wedding Limo', to: '/washington-dc-wedding-limo' },
      { label: 'Washington Convention Center Transportation', to: '/washington-convention-center-transportation' },
      { label: 'Washington DC Black Car Service', to: '/washington-dc-black-car-service' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Logan Circle, Washington, DC', 'Washington, DC'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'crystal-city-limo-service',
    type: 'city',
    name: 'Crystal City',
    badge: 'Northern Virginia Near DCA',
    h1: 'Crystal City Limo Service & Car Service',
    metaTitle: 'Crystal City Limo Service | Car Service Near DCA',
    metaDescription:
      'Chauffeured limo and car service in Crystal City and National Landing, VA — minutes from Reagan National, corporate travel and hotels. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '5–15 minutes' },
      { label: 'To Dulles (IAD)', value: '35–50 minutes' },
      { label: 'To BWI', value: '55–80 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Crystal City, now branded with the surrounding blocks as National Landing, sits closer to Reagan National than almost anywhere else DCA Limos serves — a short run down the George Washington Parkway or through the airport tunnel under the runways. The neighborhood is a dense mix of high-rise offices, apartment towers and hotels, home to Amazon’s HQ2 buildout and steady corporate and government travel.',
      'DCA Limos runs Crystal City daily: airport transfers, corporate accounts for the office towers, and hotel pickups for the properties along Crystal Drive and Jefferson Davis Highway. Every trip is quoted as a flat rate or hourly, confirmed before you book, in a licensed, background-checked chauffeur’s vehicle.',
    ],
    highlights: [
      'One of the shortest airport runs to Reagan National in our service area',
      'Corporate accounts for Crystal City and National Landing office towers',
      'Hotel pickups along Crystal Drive and Jefferson Davis Highway',
      'Pentagon and Pentagon City transfers on the same reservation',
      'Flat rates confirmed before you book and 24/7 dispatch',
      'Sedans through Sprinter vans for groups and conference travel',
    ],
    sections: [
      {
        h2: 'Airport car service from Crystal City',
        paragraphs: [
          'Reagan National is close enough from Crystal City that the drive is measured in minutes, not exits — the George Washington Parkway and Route 1 both reach the terminals directly. That proximity is exactly why a reserved car matters here: with the airport so near, travelers often try to time it close, and a flight-tracked pickup with a professional chauffeur removes the risk of the last mile going wrong.',
          'Dulles is reached by the Parkway to I-395 and the Dulles Toll Road, or via the Beltway depending on traffic. BWI runs north on I-395 and the Baltimore-Washington Parkway. We back-time every departure pickup from your flight and track every arrival in real time.',
        ],
      },
      {
        h2: 'Corporate and government travel in National Landing',
        paragraphs: [
          'The office towers along Crystal Drive, 12th Street and the Amazon HQ2 campus generate steady weekday travel — airport runs for visiting teams, standing pickups for executives, and hourly service for days with several meetings across the DMV. Corporate accounts get consolidated invoicing and priority dispatch.',
        ],
      },
      {
        h2: 'Hotels, the Pentagon and evenings out',
        paragraphs: [
          'Crystal City and Pentagon City hold a dense cluster of hotels serving both business and Pentagon-related travel; our chauffeurs know the entrances and loading areas at each. For a night out, dinner across the river in Georgetown or Old Town Alexandria, or a show downtown, hourly black car service keeps the vehicle waiting rather than circling for parking. Call (877) 609-1919 or book online.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with beach or golf luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'proms, weddings and celebrations' },
    ],
    faqs: [
      {
        q: 'How close is Crystal City to Reagan National?',
        a: 'Usually a 5 to 15 minute drive depending on traffic and time of day, using the George Washington Parkway or Route 1. It is one of the shortest airport runs we offer.',
      },
      {
        q: 'Do you handle corporate accounts for Crystal City or National Landing offices?',
        a: 'Yes. Corporate accounts include consolidated monthly invoicing, priority dispatch and standing pickups for teams and executives.',
      },
      {
        q: 'Can you pick up at a Crystal City or Pentagon City hotel?',
        a: 'Yes. We serve the hotel cluster along Crystal Drive and Jefferson Davis Highway daily, including group pickups for conferences and events.',
      },
      {
        q: 'Do you serve the Pentagon from Crystal City?',
        a: 'Yes, Pentagon and Pentagon City transfers are routine and can be combined with an airport or downtown trip on the same reservation.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans, limousines and special-event bookings up to 12 hours. Call (877) 609-1919 to change a booking.',
      },
    ],
    related: [
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
      { label: 'Rosslyn-Ballston Limo Service', to: '/rosslyn-ballston-limo-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
      { label: 'Old Town Alexandria Transportation Guide', to: '/old-town-alexandria-transportation-guide' },
      { label: 'National Landing Arlington Transportation Guide', to: '/national-landing-arlington-transportation-guide' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Crystal City, Arlington, VA', 'National Landing, Arlington, VA'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'rosslyn-ballston-limo-service',
    type: 'city',
    name: 'Rosslyn-Ballston Corridor',
    badge: 'Arlington, VA',
    h1: 'Rosslyn-Ballston Limo Service & Car Service',
    metaTitle: 'Rosslyn-Ballston Limo Service | Arlington, VA Car Service',
    metaDescription:
      'Chauffeured limo and car service along the Rosslyn-Ballston corridor, Arlington, VA — DCA and Dulles transfers, corporate travel. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '10–20 minutes' },
      { label: 'To Dulles (IAD)', value: '30–45 minutes' },
      { label: 'To BWI', value: '55–80 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The Rosslyn-Ballston corridor runs along Wilson Boulevard and Clarendon Boulevard through Rosslyn, Courthouse, Clarendon, Virginia Square and Ballston — a string of dense, walkable neighborhoods built around the Metro’s Orange and Silver lines. Rosslyn itself sits at the Virginia end of the Key Bridge, directly across the Potomac from Georgetown, which makes it a natural staging point for trips into DC as well as to the airports.',
      'DCA Limos serves the corridor for corporate travel, airport transfers and evenings out, with a licensed chauffeur and a flat rate or hourly price confirmed before you book.',
    ],
    highlights: [
      'Rosslyn sits at the Virginia foot of the Key Bridge, minutes from Georgetown',
      'Corporate car service for offices along Wilson and Clarendon Boulevards',
      'Airport transfers to Reagan National via the GW Parkway or Route 110',
      'Dulles transfers via I-66',
      'Hourly chauffeur service for multi-stop corridor visits',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'A corridor built around Metro, not highways',
        paragraphs: [
          'Wilson Boulevard and Clarendon Boulevard carry most of the corridor’s traffic, with Route 110 the fast way in and out toward Rosslyn and the Pentagon. Because the neighborhoods were built up around Metro stations rather than parking, curbside pickup spots in Clarendon and Ballston can be tight in the evening — our chauffeurs know where to stage.',
        ],
      },
      {
        h2: 'Airport and Georgetown access from Rosslyn',
        paragraphs: [
          'Reagan National is a short drive down the GW Parkway or Route 110 from Rosslyn. Dulles is reached via I-66, which runs directly through the corridor. Because Rosslyn sits right at the Key Bridge, it is also one of the easiest Virginia neighborhoods to reach Georgetown from, without crossing the river on foot or waiting on rideshare pickup rules on either side of the bridge.',
        ],
      },
      {
        h2: 'Corporate travel and nights out in Clarendon and Ballston',
        paragraphs: [
          'The office buildings along the corridor generate regular corporate travel — airport runs, client visits and standing pickups, all available on a monthly-invoiced account. For dinner and nightlife in Clarendon, or a show at one of the corridor’s venues, hourly black car service keeps the car close by instead of leaving you to find late-night parking. Call (877) 609-1919 or book online.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with beach or golf luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'proms, weddings and celebrations' },
    ],
    faqs: [
      {
        q: 'What neighborhoods make up the Rosslyn-Ballston corridor?',
        a: 'Rosslyn, Courthouse, Clarendon, Virginia Square and Ballston, running along Wilson and Clarendon Boulevards in Arlington. We serve all of them from one reservation.',
      },
      {
        q: 'Is Rosslyn a good pickup point for Georgetown?',
        a: 'Yes. Rosslyn sits directly across the Key Bridge from Georgetown, making it one of the closest Virginia neighborhoods for trips into that part of DC.',
      },
      {
        q: 'How long is the drive to Reagan National from the corridor?',
        a: 'Usually 10 to 20 minutes depending on traffic and starting point along the corridor, using the GW Parkway or Route 110.',
      },
      {
        q: 'Do you offer corporate accounts for offices in the corridor?',
        a: 'Yes, with consolidated monthly invoicing and priority dispatch for standing pickups and airport transfers.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans, limousines and special-event bookings up to 12 hours. Call (877) 609-1919 to change a booking.',
      },
    ],
    related: [
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
      { label: 'Crystal City Limo Service', to: '/crystal-city-limo-service' },
      { label: 'Georgetown Limo Service', to: '/georgetown-limo-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'National Landing Arlington Transportation Guide', to: '/national-landing-arlington-transportation-guide' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Rosslyn, Arlington, VA', 'Clarendon, Arlington, VA', 'Ballston, Arlington, VA'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'springfield-va-limo-service',
    type: 'city',
    name: 'Springfield',
    badge: 'Fairfax County, VA',
    h1: 'Springfield, VA Limo Service & Car Service',
    metaTitle: 'Springfield VA Limo Service | Car Service Springfield',
    metaDescription:
      'Chauffeured limo and car service in Springfield, VA — DCA, Dulles and BWI airport transfers, corporate travel and weddings. Flat rates. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '20–35 minutes' },
      { label: 'To Dulles (IAD)', value: '30–45 minutes' },
      { label: 'To BWI', value: '60–90 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Springfield sits at the interchange of I-95, I-395 and I-495 in Fairfax County, a junction long known locally as the Mixing Bowl for its traffic. That position makes Springfield a genuine crossroads for the DC region, with the Franconia-Springfield Metro station anchoring the Blue Line and the Springfield Town Center serving as a retail hub for the surrounding suburbs.',
      'DCA Limos runs Springfield daily for airport transfers, corporate travel and weddings, with a flat rate or hourly price confirmed before you book and a licensed, background-checked chauffeur behind the wheel.',
    ],
    highlights: [
      'Airport car service to Reagan National, Dulles and BWI',
      'Direct access to I-95, I-395 and I-495 for any direction of travel',
      'Franconia-Springfield Metro and Springfield Town Center pickups',
      'Corporate car service for offices along the I-95 corridor',
      'Wedding and event limo service across Fairfax County',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'A crossroads location, not a bottleneck, with a chauffeur',
        paragraphs: [
          'Springfield’s interchange has a reputation for backups, which is exactly the argument for a reserved car service: a chauffeur who drives the Mixing Bowl regularly knows the current pattern of ramps and lane shifts and plans the route and pickup time around it, rather than discovering the delay after you are already in the car.',
        ],
      },
      {
        h2: 'Airport transfers from Springfield',
        paragraphs: [
          'All three regional airports are within reach from Springfield’s interchange. Reagan National is reached via I-395 and the GW Parkway, Dulles via I-495 and the Dulles Toll Road, and BWI via I-95 and the Baltimore-Washington Parkway. We back-time every departure pickup from your flight and track arrivals in real time, with complimentary waiting time built into every airport fare.',
        ],
      },
      {
        h2: 'Corporate travel, weddings and hourly service',
        paragraphs: [
          'Springfield and the surrounding I-95 corridor host a mix of government contractors and corporate offices, and we run standing pickups and airport transfers for both under monthly-invoiced accounts. For weddings and events across Fairfax County, hourly and as-directed service keeps a Sprinter van or stretch limousine with the wedding party from getting-ready photos through the reception. Call (877) 609-1919 or book online.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with beach or golf luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'proms, weddings and celebrations' },
    ],
    faqs: [
      {
        q: 'How does a chauffeur handle the Springfield Mixing Bowl interchange?',
        a: 'Our chauffeurs drive the I-95/I-395/I-495 interchange regularly and build the current ramp pattern and typical delays into your pickup time, rather than treating it as an afterthought.',
      },
      {
        q: 'Which airports do you serve from Springfield?',
        a: 'All three: Reagan National, Dulles and BWI. We quote a flat rate to each so you can choose based on your flight.',
      },
      {
        q: 'Can you pick up at Franconia-Springfield Metro or Springfield Town Center?',
        a: 'Yes, both are regular pickup and drop-off points, including for travelers connecting from the Blue Line.',
      },
      {
        q: 'Do you offer corporate accounts in Springfield?',
        a: 'Yes, with consolidated monthly invoicing, priority dispatch and standing pickups for offices along the I-95 corridor.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans, limousines and special-event bookings up to 12 hours. Call (877) 609-1919 to change a booking.',
      },
    ],
    related: [
      { label: 'DCA to Northern Virginia', to: '/dca-to-northern-virginia' },
      { label: 'DCA to Fairfax', to: '/dca-to-fairfax' },
      { label: 'Annandale Limo Service', to: '/annandale-limo-service' },
      { label: 'Woodbridge, VA Limo Service', to: '/woodbridge-va-limo-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Springfield, VA', 'Fairfax County, VA'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'annandale-limo-service',
    type: 'city',
    name: 'Annandale',
    badge: 'Fairfax County, VA',
    h1: 'Annandale, VA Limo Service & Car Service',
    metaTitle: 'Annandale VA Limo Service | Car Service Annandale',
    metaDescription:
      'Chauffeured limo and car service in Annandale, VA — DCA, Dulles and BWI airport transfers, corporate travel and weddings. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '20–35 minutes' },
      { label: 'To Dulles (IAD)', value: '25–40 minutes' },
      { label: 'To BWI', value: '60–90 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Annandale is an unincorporated community in Fairfax County built along Little River Turnpike, one of the more diverse pockets of Northern Virginia and home to the NOVA Community College Annandale campus. It has no Metro station of its own — the nearest connections are bus routes to Dunn Loring-Merrifield or the Van Dorn Street Metro station — which is part of why residents rely on a chauffeured car service for airport trips and evenings that end late.',
      'DCA Limos serves Annandale for airport transfers, weddings and corporate travel, with a flat rate or hourly price confirmed before you book.',
    ],
    highlights: [
      'Airport car service to Reagan National, Dulles and BWI',
      'No Metro station nearby, so a reserved pickup replaces transfers and rideshare waits',
      'NOVA Community College Annandale campus transportation',
      'Wedding and event limo service across Fairfax County',
      'Hourly chauffeur service for multi-stop days',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'A neighborhood without a Metro station',
        paragraphs: [
          'Annandale sits between the Beltway and I-395 along Little River Turnpike, with Gallows Road and Columbia Pike as the other main routes through the community. Because there is no Metro stop in Annandale itself, an early flight or a late return usually means driving to a station or relying on a car, and a reserved chauffeur removes both problems: the pickup is committed the night before and waits if a flight runs late.',
        ],
      },
      {
        h2: 'Airport transfers from Annandale',
        paragraphs: [
          'Dulles is often the closest major airport by drive time from Annandale, reached via the Beltway and the Dulles Toll Road or Route 50. Reagan National is reached via I-395, and BWI via the Beltway and the Baltimore-Washington Parkway. Every airport fare includes real-time flight tracking and complimentary waiting time on arrivals.',
        ],
      },
      {
        h2: 'College, weddings and corporate travel',
        paragraphs: [
          'The NOVA Community College Annandale campus draws regular family and visitor trips, and the community’s event halls and places of worship host weddings across the year that we serve with Sprinter vans and stretch limousines. Corporate accounts cover standing pickups and airport runs for Annandale-based businesses. Call (877) 609-1919 or book online.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with beach or golf luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'proms, weddings and celebrations' },
    ],
    faqs: [
      {
        q: 'Is there a Metro station in Annandale?',
        a: 'No. The nearest stations are Dunn Loring-Merrifield and Van Dorn Street, reached by bus or car. A reserved car service is often the more direct option, especially for early or late trips.',
      },
      {
        q: 'Which airport is closest to Annandale?',
        a: 'Dulles is frequently the shortest drive, though the best choice depends on your flight. We quote a flat rate to Reagan National, Dulles and BWI so you can compare.',
      },
      {
        q: 'Do you serve NOVA Community College in Annandale?',
        a: 'Yes, including family visits, move-in and event transportation to and from the Annandale campus.',
      },
      {
        q: 'Can you provide a stretch limousine for an Annandale wedding?',
        a: 'Yes. Stretch limousines and Sprinter vans are available for ceremonies and receptions, with the rate confirmed before you book.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans, limousines and special-event bookings up to 12 hours. Call (877) 609-1919 to change a booking.',
      },
    ],
    related: [
      { label: 'DCA to Fairfax', to: '/dca-to-fairfax' },
      { label: 'DCA to Northern Virginia', to: '/dca-to-northern-virginia' },
      { label: 'Springfield, VA Limo Service', to: '/springfield-va-limo-service' },
      { label: 'Woodbridge, VA Limo Service', to: '/woodbridge-va-limo-service' },
      { label: 'Washington DC Wedding Limo', to: '/washington-dc-wedding-limo' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Annandale, VA', 'Fairfax County, VA'],
      serviceType: 'Limousine and car service',
    },
  },
  {
    slug: 'woodbridge-va-limo-service',
    type: 'city',
    name: 'Woodbridge',
    badge: 'Prince William County, VA',
    h1: 'Woodbridge, VA Limo Service & Car Service',
    metaTitle: 'Woodbridge VA Limo Service | Car Service Woodbridge',
    metaDescription:
      'Chauffeured limo and car service in Woodbridge, VA — DCA, Dulles and BWI airport transfers, corporate travel and weddings. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '30–50 minutes' },
      { label: 'To Dulles (IAD)', value: '40–60 minutes' },
      { label: 'To BWI', value: '70–100 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Woodbridge is a Prince William County community on I-95 south of Fairfax, built around the Occoquan and Potomac waterfronts and home to the Potomac Mills outlet mall, one of the region’s largest retail destinations. The Woodbridge VRE station gives commuters a rail link into DC on weekdays, but for airport trips, weddings and evenings out, most residents are further from Reagan National than closer-in Virginia suburbs — which is exactly where a reserved car service earns its keep.',
      'DCA Limos serves Woodbridge for airport transfers, corporate travel and special events, with a flat rate or hourly price confirmed before you book.',
    ],
    highlights: [
      'Airport car service to Reagan National, Dulles and BWI',
      'I-95 corridor pickups timed around Woodbridge and Prince William County traffic',
      'Potomac Mills and Stonebridge shopping trip transportation',
      'Woodbridge VRE station connections',
      'Wedding and event limo service along the Occoquan waterfront',
      'Flat rates confirmed before you book and 24/7 dispatch',
    ],
    sections: [
      {
        h2: 'A longer airport run, planned in advance',
        paragraphs: [
          'Woodbridge sits far enough south on I-95 that airport drive times run longer than from the inner suburbs, and I-95 through Prince William County is one of the more congested stretches in the region at peak hours. Rather than leaving that to chance, we back-time every departure pickup from your flight and build in the corridor’s typical rush-hour pattern, and every airport arrival includes real-time flight tracking and complimentary waiting time.',
        ],
      },
      {
        h2: 'Airport transfers from Woodbridge',
        paragraphs: [
          'Reagan National and Dulles are both reachable via I-95 and the Beltway, or via Route 1 and local roads outside of peak hours; BWI adds the Baltimore-Washington Parkway on top of that distance. We quote each airport separately so you can weigh the drive time against your flight schedule.',
        ],
      },
      {
        h2: 'Potomac Mills, weddings and corporate travel',
        paragraphs: [
          'Potomac Mills and the nearby Stonebridge shopping center draw visitors from across the region, and we run shuttle-style trips for shopping groups and out-of-town guests. Along the Occoquan waterfront, event venues host weddings we serve with Sprinter vans and stretch limousines, and Prince William County businesses use corporate accounts for standing pickups and airport runs. Call (877) 609-1919 or book online.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with beach or golf luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'proms, weddings and celebrations' },
    ],
    faqs: [
      {
        q: 'How long is the drive from Woodbridge to Reagan National?',
        a: 'Usually 30 to 50 minutes depending on I-95 traffic, which can run heavy through Prince William County at peak hours. We build current conditions into your pickup time.',
      },
      {
        q: 'Do you serve Potomac Mills and Stonebridge?',
        a: 'Yes, including group and shopping-trip transportation for visitors and out-of-town guests.',
      },
      {
        q: 'Can I be picked up near the Woodbridge VRE station?',
        a: 'Yes, the VRE station and surrounding area are a regular pickup point, including for onward airport or downtown trips.',
      },
      {
        q: 'Do you provide wedding transportation along the Occoquan waterfront?',
        a: 'Yes. Sprinter vans and stretch limousines are available for ceremonies and receptions at Woodbridge-area venues.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Sedans and SUVs cancel free up to 3 hours before pickup; Sprinter vans, limousines and special-event bookings up to 12 hours. Call (877) 609-1919 to change a booking.',
      },
    ],
    related: [
      { label: 'DCA to Northern Virginia', to: '/dca-to-northern-virginia' },
      { label: 'DCA to Fredericksburg', to: '/dca-to-fredericksburg' },
      { label: 'Springfield, VA Limo Service', to: '/springfield-va-limo-service' },
      { label: 'Annandale Limo Service', to: '/annandale-limo-service' },
      { label: 'Washington DC Wedding Limo', to: '/washington-dc-wedding-limo' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
      { label: 'Book a Ride', to: '/booking' },
    ],
    schema: {
      areaServed: ['Woodbridge, VA', 'Prince William County, VA'],
      serviceType: 'Limousine and car service',
    },
  },
];
