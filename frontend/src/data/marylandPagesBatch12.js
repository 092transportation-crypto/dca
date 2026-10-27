// Batch 12 (2026-10-24, SEO expansion round 6 continued): 30 new pages
// targeting untapped keywords not covered by MARYLAND_PAGES / BATCH3-11 —
// checked against the full existing slug list first. Groups: Southern
// Maryland (new region — Leonardtown, Lexington Park, Prince Frederick,
// Patuxent River NAS); Northern Virginia cities that previously had only a
// DCA route page, not a city page (Ashburn, Manassas, Fredericksburg), plus
// Fort Belvoir; three new DC neighborhoods (Columbia Heights, Mount
// Pleasant, Friendship Heights); Fort Meade/NSA and Joint Base Andrews;
// five new real venues (Live! Casino, Maryland Zoo, Kings Dominion, Ronald
// Reagan Building, Mosaic District); three new industry verticals (tech
// startups, real estate, media/broadcast); wedding and corporate variants
// for cities that had a general page but lacked one; two new occasions
// (micro-wedding/elopement, baby naming/bris/christening); a new
// accessibility vertical (wheelchair-accessible car service); and two new
// airport routes (IAD to Tysons, BWI to Columbia). Same entry shape as
// MARYLAND_PAGES / MARYLAND_BATCH3-11.
const VEHICLES = [
  { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo travelers and couples' },
  { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'executive and VIP travel' },
  { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
  { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
  { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
  { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'weddings, prom and special occasions' },
];

export const MARYLAND_BATCH12 = [
  // ---------------------------------------------------------------------
  // SOUTHERN MARYLAND (new region — not previously covered)
  // ---------------------------------------------------------------------
  {
    slug: 'leonardtown-md-limo-service',
    type: 'city',
    name: 'Leonardtown',
    badge: 'Southern Maryland',
    h1: 'Leonardtown, MD Limo & Car Service',
    metaTitle: 'Leonardtown MD Limo & Car Service | DCA Limos',
    metaDescription:
      'Flat-rate limo & car service in Leonardtown, MD — the St. Mary\'s County seat. Reagan National transfers, weddings & more. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '62 mi · 80–95 minutes' },
      { label: 'To BWI', value: '78 mi · 95–115 minutes' },
      { label: 'To Dulles (IAD)', value: '95 mi · 115–135 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Leonardtown, the historic seat of St. Mary\'s County, sits far enough down the Southern Maryland peninsula that many rideshare drivers decline the trip outright or cancel once they see how far it runs — which is exactly the gap DCA Limos was built to fill. We commit to the drive at booking, whether that means a 5 a.m. run up Route 5 to Reagan National or a chauffeured evening in Historic Town Square.',
      'The trip to DCA is a genuine 62 miles and 80 to 95 minutes via MD-5 and the Beltway, long enough that most travelers book it the night before rather than trying to arrange a ride same-day. We quote one flat rate for the full distance, confirmed before you book, with no surge pricing for the length of the trip.',
    ],
    highlights: [
      'Flat, all-inclusive rate for the full Southern Maryland distance — confirmed before you book',
      'Chauffeurs who run Route 5, Route 235 and Route 4 regularly, not occasionally',
      'Historic Town Square and county-courthouse pickups without guesswork on parking',
      'Service to Patuxent River Naval Air Station employees and visiting contractors nearby',
      'Wedding and event transportation with Sprinter vans and stretch limousines',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Why a long-distance trip needs a committed chauffeur',
        paragraphs: [
          'St. Mary\'s County\'s distance from DC is exactly why rideshare coverage here is unreliable — apps frequently show no available drivers for an airport run, or a driver accepts and cancels once the pin shows a 60-plus-mile fare. DCA Limos quotes and confirms the trip before you book, and the chauffeur who accepts your reservation is committed to the full distance, both ways.',
          'We serve all of Leonardtown and the surrounding county, from Historic Town Square and the county courthouse complex to the rural roads branching off Route 5 and Route 245.',
        ],
      },
      {
        h2: 'Patuxent River NAS and the local defense economy',
        paragraphs: [
          'Leonardtown sits a short drive from Patuxent River Naval Air Station in nearby Lexington Park, and a steady share of our Southern Maryland bookings come from contractors, engineers and visiting personnel connected to the base. See our dedicated page on Patuxent River NAS transportation for base-access detail.',
          'Local corporate accounts with monthly invoicing are available for firms with recurring travel between Leonardtown, the base and the DC airports.',
        ],
      },
      {
        h2: 'Weddings, events and booking',
        paragraphs: [
          'Historic Town Square and the county\'s waterfront event spaces along the Potomac and Patuxent Rivers host a steady calendar of weddings and private events, and our Sprinter vans and stretch limousines handle the long-distance guest shuttles that a Southern Maryland wedding usually needs.',
          'Call (877) 609-1919 or request a quote online — we confirm the flat rate for your specific Leonardtown address before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you actually serve Leonardtown, or just the closer DC suburbs?',
        a: 'Yes, we serve all of Leonardtown and St. Mary\'s County directly. It is a longer trip than our Montgomery or Fairfax County routes, and we quote a flat rate for the full distance rather than treating it as out of range.',
      },
      {
        q: 'How much does a car service from Leonardtown to Reagan National cost?',
        a: 'We confirm one flat, all-inclusive rate based on your exact pickup address before you book — call (877) 609-1919 or request a quote online.',
      },
      {
        q: 'Can you handle transportation for Patuxent River NAS contractors or visitors?',
        a: 'Yes. We regularly run trips connected to Patuxent River NAS and can coordinate base-area pickups with advance notice.',
      },
      {
        q: 'Do you provide wedding transportation in Leonardtown?',
        a: 'Yes. Sprinter vans and stretch limousines are available for Leonardtown-area weddings, including long-distance guest shuttles from out-of-town hotels.',
      },
      {
        q: 'Is Leonardtown car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning airport departures.',
      },
    ],
    related: [
      { label: 'Lexington Park, MD Limo Service', to: '/lexington-park-md-limo-service' },
      { label: 'Patuxent River NAS Transportation', to: '/patuxent-river-nas-transportation' },
      { label: 'Prince Frederick, MD Limo Service', to: '/prince-frederick-md-limo-service' },
      { label: 'Waldorf Limo Service', to: '/waldorf-limo-service' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'DCA to La Plata, MD', to: '/dca-to-la-plata-md' },
    ],
    schema: { areaServed: ['Leonardtown, MD', "St. Mary's County, MD"], serviceType: 'Car service' },
  },
  {
    slug: 'lexington-park-md-limo-service',
    type: 'city',
    name: 'Lexington Park',
    badge: 'Southern Maryland',
    h1: 'Lexington Park, MD Limo & Car Service',
    metaTitle: 'Lexington Park MD Car Service | DCA Limos',
    metaDescription:
      'Car service in Lexington Park, MD near Patuxent River NAS — Reagan National transfers for base personnel, contractors & families. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '68 mi · 85–100 minutes' },
      { label: 'To BWI', value: '82 mi · 100–120 minutes' },
      { label: 'To Dulles (IAD)', value: '100 mi · 120–140 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Lexington Park grew up around Patuxent River Naval Air Station, and that relationship still defines most of the ground transportation demand here — engineers and contractors flying in for a program review, military families with a change-of-station move, and visiting officials who need a reliable chauffeur rather than a rideshare driver unfamiliar with the base\'s surrounding roads.',
      'The drive to Reagan National runs 68 miles and 85 to 100 minutes, long enough that we recommend booking the night before for an early flight. Every airport transfer is flight-tracked with complimentary wait time, and the flat rate is confirmed before you travel.',
    ],
    highlights: [
      'Experience with Patuxent River NAS-connected travel: contractors, engineers and visiting personnel',
      'Flat, all-inclusive rate for the full distance to DCA, BWI or Dulles — confirmed before you book',
      'Chauffeurs who know Three Notch Road (MD-235) and the surrounding St. Mary\'s County grid',
      'Corporate accounts with monthly invoicing for firms with recurring base-connected travel',
      'Family and PCS-move airport transfers coordinated around moving schedules',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A community built around Patuxent River NAS',
        paragraphs: [
          'A large share of Lexington Park\'s workforce and visiting traffic connects directly to Patuxent River Naval Air Station, whether that is a defense contractor flying in for a week-long program review or a service member\'s family relocating under orders. Our chauffeurs are used to the rhythm of that traffic and the base\'s surrounding road network along Three Notch Road.',
          'Visiting personnel and contractors without a car of their own in Southern Maryland are among our most frequent Lexington Park bookings — a standing arrangement for the length of a visit is often simpler than renting a car for a few days.',
        ],
      },
      {
        h2: 'Long-distance airport transfers',
        paragraphs: [
          'Because Lexington Park sits roughly 68 to 100 miles from the region\'s three airports depending on which one you fly, we treat these as planned, flat-rate trips rather than last-minute bookings — confirming the rate and vehicle in advance avoids any surprise once the drive is underway.',
          'Round trips are available with a return pickup scheduled around your actual flight time, tracked for delays.',
        ],
      },
      {
        h2: 'Booking Lexington Park transportation',
        paragraphs: [
          'Give us your pickup address, flight details if applicable, and vehicle preference, and we will confirm a flat rate before you travel.',
          'Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you provide transportation connected to Patuxent River NAS?',
        a: 'Yes. We regularly run trips for contractors, engineers and visiting personnel connected to the base, and coordinate base-area pickups with advance notice.',
      },
      {
        q: 'How much does it cost to get from Lexington Park to Reagan National?',
        a: 'We confirm one flat, all-inclusive rate for the roughly 68-mile trip before you book — call (877) 609-1919 or request a quote online.',
      },
      {
        q: 'Can you help with a PCS-move or relocation pickup?',
        a: 'Yes. We coordinate family and relocation airport transfers around moving schedules — let us know the timeline when you book.',
      },
      {
        q: 'Do you offer corporate accounts for base-connected firms?',
        a: 'Yes. Monthly invoicing is available for companies with recurring Patuxent River NAS-connected travel.',
      },
      {
        q: 'Is Lexington Park car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Patuxent River NAS Transportation', to: '/patuxent-river-nas-transportation' },
      { label: 'Leonardtown, MD Limo Service', to: '/leonardtown-md-limo-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Prince Frederick, MD Limo Service', to: '/prince-frederick-md-limo-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Waldorf Limo Service', to: '/waldorf-limo-service' },
    ],
    schema: { areaServed: ['Lexington Park, MD', "St. Mary's County, MD"], serviceType: 'Car service' },
  },
  {
    slug: 'prince-frederick-md-limo-service',
    type: 'city',
    name: 'Prince Frederick',
    badge: 'Southern Maryland',
    h1: 'Prince Frederick, MD Limo & Car Service',
    metaTitle: 'Prince Frederick MD Limo & Car Service | DCA Limos',
    metaDescription:
      'Limo & car service in Prince Frederick, MD — the Calvert County seat. Flat-rate Reagan National & BWI transfers, weddings. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '45 mi · 60–75 minutes' },
      { label: 'To BWI', value: '55 mi · 70–85 minutes' },
      { label: 'To Dulles (IAD)', value: '75 mi · 90–110 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Prince Frederick, the Calvert County seat along the Route 2/4 corridor, sits roughly halfway down the peninsula between DC and the mouth of the Patuxent River — close enough for a flat-rate chauffeur to make a same-day DCA or BWI connection practical, but far enough that it rarely shows up on the standard coverage maps most rideshare companies use.',
      'We run the 45-mile trip to Reagan National in about 60 to 75 minutes via Route 4 and the Beltway, flight-tracked with complimentary wait time, in a flat-rate sedan, SUV or Sprinter van confirmed before you book.',
    ],
    highlights: [
      'Flat, all-inclusive rate for Calvert County trips — confirmed before you book, no surge pricing',
      'Chauffeurs who run the Route 2/4 corridor between Prince Frederick, Dunkirk and Solomons regularly',
      'Real-time flight tracking with complimentary wait time on every airport transfer',
      'Wedding and event transportation for Chesapeake Bay-area venues',
      'Corporate accounts with monthly invoicing for Calvert County businesses',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Covering Calvert County reliably',
        paragraphs: [
          'Prince Frederick anchors a stretch of Southern Maryland that includes Dunkirk, Huntingtown and Solomons Island further south, and our chauffeurs run the Route 2/4 corridor regularly enough to know the merge points and seasonal traffic that build up around Chesapeake Bay weekend travel.',
          'A flat rate confirmed before you book means no guessing at what a 45-mile trip to the airport will actually cost once you are in the car.',
          'Calvert County\'s Route 2/4 corridor narrows to two lanes for long stretches south of Prince Frederick, and summer weekend traffic headed to or from Solomons Island and the Chesapeake beaches can add real time that a straight-line mileage estimate would not capture. Our chauffeurs build that seasonal pattern into the drive-time estimate rather than quoting the same timing year-round.',
        ],
      },
      {
        h2: 'Weddings and Chesapeake Bay events',
        paragraphs: [
          'Calvert County\'s Chesapeake Bay waterfront draws a steady calendar of weddings and private events, and a Sprinter van or stretch limousine handles both the wedding party and a guest shuttle from hotels closer to DC for out-of-town guests.',
          'Our Chesapeake Bay events transportation page covers broader regional event logistics beyond Prince Frederick itself.',
        ],
      },
      {
        h2: 'Booking your Prince Frederick transfer',
        paragraphs: [
          'Give us your pickup address and flight details, and we will confirm a flat rate and vehicle before you travel.',
          'Call (877) 609-1919 or request a free quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How much does a car service from Prince Frederick to Reagan National cost?',
        a: 'We confirm one flat, all-inclusive rate for the roughly 45-mile trip based on your exact address — call (877) 609-1919 or request a quote online.',
      },
      {
        q: 'Do you serve the rest of Calvert County, not just Prince Frederick itself?',
        a: 'Yes, including Dunkirk, Huntingtown and Solomons Island along the Route 2/4 corridor.',
      },
      {
        q: 'Can you handle wedding transportation for a Chesapeake Bay venue?',
        a: 'Yes. Sprinter vans and stretch limousines are available, including guest shuttles from hotels closer to DC for out-of-town guests.',
      },
      {
        q: 'Do you offer corporate accounts for Calvert County businesses?',
        a: 'Yes, with monthly invoicing for recurring travel.',
      },
      {
        q: 'Is Prince Frederick car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Chesapeake Bay Events Transportation', to: '/chesapeake-bay-events-transportation' },
      { label: 'Leonardtown, MD Limo Service', to: '/leonardtown-md-limo-service' },
      { label: 'Lexington Park, MD Limo Service', to: '/lexington-park-md-limo-service' },
      { label: 'Annapolis Limo Service', to: '/limo/annapolis-limo-service' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'DCA to La Plata, MD', to: '/dca-to-la-plata-md' },
    ],
    schema: { areaServed: ['Prince Frederick, MD', 'Calvert County, MD'], serviceType: 'Car service' },
  },
  {
    slug: 'patuxent-river-nas-transportation',
    type: 'service',
    name: 'Patuxent River NAS Transportation',
    badge: 'Defense & Government',
    h1: 'Patuxent River Naval Air Station Transportation',
    metaTitle: 'Patuxent River NAS Transportation | DCA Limos',
    metaDescription:
      'Chauffeured car service for Patuxent River NAS contractors, engineers & visiting personnel — airport transfers, visitor-gate coordination. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '68 mi · 85–100 minutes' },
      { label: 'To BWI', value: '82 mi · 100–120 minutes' },
      { label: 'Specialty', value: 'Base-area contractor & visitor travel' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Patuxent River Naval Air Station, home to Naval Air Systems Command and the Navy\'s flight test center, draws a steady flow of contractors, engineers and visiting program staff into Southern Maryland — most of them flying in through Reagan National or BWI and needing a chauffeur for the roughly 70-to-85-mile leg down to Lexington Park and St. Mary\'s County.',
      'We run that connection daily, confirming a flat rate for the full distance before you book and coordinating visitor-gate details with you ahead of time so a chauffeur arriving at the base is not the reason a program visit starts late.',
    ],
    highlights: [
      'Airport transfers from DCA, BWI or Dulles to the Patuxent River NAS area, flat rate confirmed in advance',
      'Visitor and vehicle information coordinated with you before dispatch, matching base check-in requirements',
      'Corporate accounts with monthly invoicing for defense contractors with recurring program travel',
      'Sedans and SUVs for individual engineers and program staff; Sprinter vans for visiting teams',
      'Experience with Southern Maryland\'s Three Notch Road corridor and surrounding St. Mary\'s County roads',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Airport connections for base-area travel',
        paragraphs: [
          'Most Patuxent River NAS-connected travel starts at Reagan National or BWI, and the drive down to Lexington Park and the surrounding St. Mary\'s County area is long enough — roughly 70 to 85 miles — that a rideshare driver will frequently decline or cancel once they see the distance. We confirm the trip and the flat rate before you book, both directions.',
          'Flight tracking and complimentary wait time apply the same way they do on any other airport transfer, so a delayed inbound flight does not turn into a missed pickup.',
        ],
      },
      {
        h2: 'Coordinating visitor and vehicle details',
        paragraphs: [
          'Program visits and contractor travel to the base-area typically involve advance coordination of visitor information for the chauffeur and vehicle — we collect what is needed at booking, the same way we handle other access-controlled locations across our coverage area, rather than leaving it until the day of the trip.',
          'Visiting technical teams flying in for a multi-day program review commonly book the same chauffeur and vehicle for the full stay, simplifying both the schedule and the invoice.',
        ],
      },
      {
        h2: 'Corporate accounts and booking',
        paragraphs: [
          'Defense contractors with recurring Patuxent River-connected travel typically move to a standing account with monthly invoicing once visit frequency justifies it, rather than booking each trip individually.',
          'Call (877) 609-1919 or request a quote online to set up a standing account or book a specific trip.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you handle visitor coordination for a Patuxent River NAS-connected trip?',
        a: 'Yes. We collect the relevant visitor and vehicle information at booking and confirm it with you before dispatching your chauffeur.',
      },
      {
        q: 'How far is the drive from DCA or BWI to the Patuxent River NAS area?',
        a: 'Roughly 68 to 82 miles depending on the airport, about 85 to 120 minutes depending on traffic — we confirm a flat rate for the full distance before you book.',
      },
      {
        q: 'Do you offer corporate accounts for defense contractors?',
        a: 'Yes. Most of our Patuxent River-connected clients use a standing account with monthly invoicing for recurring program travel.',
      },
      {
        q: 'Can you provide a vehicle for a visiting technical team?',
        a: 'Yes. Sprinter vans keep a visiting program team together for the length of a multi-day review, with sedans and SUVs for individual staff.',
      },
      {
        q: 'Is this service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning airport departures.',
      },
    ],
    related: [
      { label: 'Lexington Park, MD Limo Service', to: '/lexington-park-md-limo-service' },
      { label: 'Leonardtown, MD Limo Service', to: '/leonardtown-md-limo-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Fort Meade / NSA Contractor Transportation', to: '/fort-meade-nsa-contractor-transportation' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'DCA to La Plata, MD', to: '/dca-to-la-plata-md' },
    ],
    schema: { areaServed: ['Lexington Park, MD', "St. Mary's County, MD"], serviceType: 'Corporate car service' },
  },
  // ---------------------------------------------------------------------
  // NORTHERN VIRGINIA CITIES (previously only had a DCA route page) +
  // FORT BELVOIR
  // ---------------------------------------------------------------------
  {
    slug: 'ashburn-va-limo-service',
    type: 'city',
    name: 'Ashburn',
    badge: 'Virginia Cities',
    h1: 'Ashburn, VA Limo & Car Service',
    metaTitle: 'Ashburn VA Limo & Car Service | DCA Limos',
    metaDescription:
      'Limo & car service in Ashburn, VA — Data Center Alley, Dulles transfers & One Loudoun. Flat rates, flight tracking, 24/7. (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '9 mi · 15–20 minutes' },
      { label: 'To Reagan (DCA)', value: '30 mi · 40–55 minutes' },
      { label: 'To BWI', value: '58 mi · 70–90 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Ashburn sits at the heart of Loudoun County\'s "Data Center Alley," the densest concentration of data centers anywhere in the world, alongside a fast-growing residential base along the Silver Line\'s Ashburn and Loudoun Gateway stations. DCA Limos runs executive sedans, airport transfers and Sprinter vans here daily, for everyone from visiting data-center engineers to families booking an early Dulles departure.',
      'At 9 miles and 15 to 20 minutes, Dulles is about as close as an airport gets to Ashburn — a real advantage for residents and visiting technical staff alike, and we cover Reagan National and BWI just as reliably for travelers who connect through either.',
    ],
    highlights: [
      'Fast Dulles transfers in as little as 15–20 minutes',
      'Experience with Data Center Alley visitor and campus-access procedures',
      'Daily service to One Loudoun and the Ashburn/Loudoun Gateway Silver Line corridor',
      'Flat, all-inclusive rate confirmed before you book — no surge pricing',
      'Corporate accounts with monthly invoicing for Ashburn-based employers',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Serving Data Center Alley',
        paragraphs: [
          'Ashburn\'s data-center campuses run their own visitor-registration procedures, often requiring vehicle and driver information in advance before a gate clears anyone through. We collect that detail at booking so a chauffeur is never the reason a visit starts late.',
          'One Loudoun\'s shops, restaurants and offices sit nearby, and our chauffeurs know which buildings restrict street-level pickup during business hours.',
          'Ashburn\'s rapid growth has also meant new residential subdivisions and data-center campuses opening on a rolling basis along routes that a map app sometimes has not caught up with yet, particularly around the Loudoun County Parkway corridor. Our chauffeurs who run this area regularly tend to know a freshly opened access road before it shows up in standard mapping, which matters on a first visit to a brand-new campus.',
        ],
      },
      {
        h2: 'Fast Dulles transfers',
        paragraphs: [
          'A 15-to-20-minute run to Dulles makes same-day fly-in-fly-out visits realistic for vendors, auditors and technical specialists, and every transfer is flight-tracked with complimentary wait time.',
          'Residents flying out of Reagan National or BWI get the same flat-rate, flight-tracked service for the longer trip.',
        ],
      },
      {
        h2: 'Standing accounts and booking',
        paragraphs: [
          'Ashburn employers with recurring vendor, auditor or executive travel typically set up a standing account with monthly invoicing rather than booking trip by trip.',
          'Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you clear vehicles through a data center\'s visitor security?',
        a: 'Yes. We collect driver and vehicle details at booking and confirm whatever registration a specific campus requires before arrival.',
      },
      {
        q: 'How fast is the transfer from Ashburn to Dulles?',
        a: 'About 15 to 20 minutes, one of the fastest airport connections in our network.',
      },
      {
        q: 'Do you offer corporate accounts in Ashburn?',
        a: 'Yes, with monthly invoicing for data-center and One Loudoun-based employers.',
      },
      {
        q: 'Can you provide a Sprinter van for a visiting technical team?',
        a: 'Yes, keeping a visiting engineering or audit team together for a full day of Ashburn-area meetings.',
      },
      {
        q: 'Is Ashburn car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Sterling, VA Corporate Car Service', to: '/sterling-va-corporate-car-service' },
      { label: 'Sterling, VA Limo Service', to: '/sterling-va-limo-service' },
      { label: 'Leesburg Limo Service', to: '/leesburg-limo-service' },
      { label: 'DCA to Ashburn', to: '/dca-to-ashburn' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'IAD to Tysons', to: '/iad-to-tysons' },
    ],
    schema: { areaServed: ['Ashburn, VA', 'Loudoun County, VA'], serviceType: 'Car service' },
  },
  {
    slug: 'manassas-va-limo-service',
    type: 'city',
    name: 'Manassas',
    badge: 'Virginia Cities',
    h1: 'Manassas, VA Limo & Car Service',
    metaTitle: 'Manassas VA Limo & Car Service | DCA Limos',
    metaDescription:
      'Flat-rate limo & car service in Manassas, VA — Historic Downtown, Dulles & Reagan National transfers, weddings. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '35 mi · 45–60 minutes' },
      { label: 'To Dulles (IAD)', value: '25 mi · 35–45 minutes' },
      { label: 'To BWI', value: '62 mi · 80–100 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Manassas pairs a walkable Historic Downtown — restaurants, shops and the restored train depot along Center Street — with a growing base of Prince William County employers, and DCA Limos runs both sides of that daily: executive sedans for corporate travel, and sedans or Sprinter vans for Historic Downtown dinners, weddings and Dulles or Reagan National transfers.',
      'Dulles is the closer airport at 25 miles and 35 to 45 minutes, while Reagan National runs about 35 miles and 45 to 60 minutes — we cover both with the same flat-rate, flight-tracked service.',
    ],
    highlights: [
      'Historic Downtown Manassas pickups and drop-offs without parking guesswork',
      'Daily executive sedan service for Prince William County employers',
      'Flat-rate transfers to both Dulles and Reagan National, confirmed before you book',
      'Wedding and event transportation with Sprinter vans and stretch limousines',
      'Chauffeurs who know Route 28, I-66 and the Prince William Parkway corridor',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Historic Downtown and local events',
        paragraphs: [
          'Center Street\'s restaurants, shops and the Manassas Museum draw a steady local crowd, and our chauffeurs know which blocks allow a brief stop for pickup without blocking downtown\'s narrower streets.',
          'Manassas National Battlefield Park nearby also draws visitor traffic that our chauffeurs route around during peak-season weekends.',
          'The Harris Pavilion in the heart of downtown hosts concerts and seasonal festivals that fill Center Street with foot traffic and temporary street closures, and our chauffeurs plan pickup timing around that calendar rather than treating it as ordinary traffic. Old Town Manassas\'s historic train depot — still an active Virginia Railway Express and Amtrak stop — also means we regularly coordinate rail-to-car connections for travelers arriving by train rather than flying in.',
        ],
      },
      {
        h2: 'Corporate and airport travel',
        paragraphs: [
          'Prince William County\'s employer base generates steady executive-sedan demand, and both Dulles and Reagan National are realistic flat-rate options depending on the flight — we quote whichever route fits your itinerary.',
          'Every airport transfer is flight-tracked with complimentary wait time.',
        ],
      },
      {
        h2: 'Booking Manassas transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm a flat rate for your exact Manassas address before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Which airport is closer to Manassas, Dulles or Reagan National?',
        a: 'Dulles, at about 25 miles and 35–45 minutes versus roughly 35 miles and 45–60 minutes to Reagan National. We serve both with flat-rate, flight-tracked service.',
      },
      {
        q: 'Can you pick up in Historic Downtown Manassas?',
        a: 'Yes. Our chauffeurs know which blocks work for a curbside stop without blocking Center Street\'s narrower sections.',
      },
      {
        q: 'Do you offer corporate accounts for Prince William County businesses?',
        a: 'Yes, with monthly invoicing for recurring travel.',
      },
      {
        q: 'Can you handle wedding transportation in Manassas?',
        a: 'Yes, with Sprinter vans and stretch limousines for the wedding party and guest shuttles.',
      },
      {
        q: 'Is Manassas car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Gainesville, VA Limo Service', to: '/gainesville-va-limo-service' },
      { label: 'Haymarket, VA Limo Service', to: '/haymarket-va-limo-service' },
      { label: 'Warrenton, VA Limo Service', to: '/warrenton-va-limo-service' },
      { label: 'DCA to Manassas', to: '/dca-to-manassas' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
    ],
    schema: { areaServed: ['Manassas, VA', 'Prince William County, VA'], serviceType: 'Car service' },
  },
  {
    slug: 'fredericksburg-va-limo-service',
    type: 'city',
    name: 'Fredericksburg',
    badge: 'Virginia Cities',
    h1: 'Fredericksburg, VA Limo & Car Service',
    metaTitle: 'Fredericksburg VA Limo & Car Service | DCA Limos',
    metaDescription:
      'Flat-rate limo & car service in Fredericksburg, VA — Historic Downtown, Reagan National & Dulles transfers. Call (877) 609-1919 for a quote.',
    stats: [
      { label: 'To Reagan (DCA)', value: '55 mi · 65–85 minutes' },
      { label: 'To Dulles (IAD)', value: '62 mi · 75–95 minutes' },
      { label: 'To BWI', value: '82 mi · 95–115 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Fredericksburg\'s walkable Historic Downtown along the Rappahannock River and its growing I-95 corridor business base make it one of the farther-south communities we serve directly, and DCA Limos covers it the same way we cover every other city in our network — a flat rate confirmed before you book, with chauffeurs who run I-95 regularly enough to know its unpredictable backups.',
      'Reagan National is the most common airport choice at 55 miles and 65 to 85 minutes, though we run Dulles and BWI transfers just as reliably for travelers whose flights land elsewhere.',
    ],
    highlights: [
      'Flat, all-inclusive rate for the full I-95 corridor trip — confirmed before you book',
      'Historic Downtown Fredericksburg pickups near the Rappahannock riverfront',
      'Chauffeurs who plan around I-95\'s unpredictable rush-hour and holiday-weekend backups',
      'Corporate accounts with monthly invoicing for I-95 corridor businesses',
      'Wedding and event transportation with Sprinter vans and stretch limousines',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Covering the I-95 corridor reliably',
        paragraphs: [
          'Fredericksburg\'s position on I-95 means weekend and holiday traffic can add real time to any trip north toward DC, and our chauffeurs build a realistic buffer into every quoted drive time rather than assuming free-flowing highway conditions.',
          'Historic Downtown\'s riverfront streets and the Fredericksburg Visitor Center area are familiar pickup points for our chauffeurs.',
          'Fredericksburg\'s Civil War history draws its own steady visitor traffic — the Fredericksburg Area Battlefields Park and the Chatham Manor overlook both see tour buses and self-guided visitors on top of ordinary downtown traffic, particularly around anniversary weekends. Mary Washington University\'s academic calendar adds another predictable traffic pattern, with move-in weekends and graduation generating a short but intense spike in both downtown and I-95 congestion that our chauffeurs plan around.',
        ],
      },
      {
        h2: 'Airport and corporate travel',
        paragraphs: [
          'We quote whichever of DCA, Dulles or BWI fits your itinerary, with the same flat-rate, flight-tracked service across all three.',
          'I-95 corridor employers with recurring travel typically set up a standing corporate account with monthly invoicing.',
        ],
      },
      {
        h2: 'Booking Fredericksburg transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm a flat rate for your exact Fredericksburg address before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How much does a car service from Fredericksburg to Reagan National cost?',
        a: 'We confirm one flat, all-inclusive rate for the roughly 55-mile trip based on your exact address — call (877) 609-1919 or request a quote online.',
      },
      {
        q: 'Do you plan around I-95 traffic?',
        a: 'Yes. Our chauffeurs build a realistic time buffer into every Fredericksburg trip rather than assuming free-flowing highway conditions.',
      },
      {
        q: 'Can you pick up in Historic Downtown Fredericksburg?',
        a: 'Yes, including riverfront streets near the Visitor Center.',
      },
      {
        q: 'Do you offer corporate accounts for I-95 corridor businesses?',
        a: 'Yes, with monthly invoicing for recurring travel.',
      },
      {
        q: 'Is Fredericksburg car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Stafford, VA Limo Service', to: '/stafford-va-limo-service' },
      { label: 'Dumfries, VA Limo Service', to: '/dumfries-va-limo-service' },
      { label: 'Woodbridge, VA Limo Service', to: '/woodbridge-va-limo-service' },
      { label: 'DCA to Fredericksburg', to: '/dca-to-fredericksburg' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
    ],
    schema: { areaServed: ['Fredericksburg, VA', 'Stafford County, VA'], serviceType: 'Car service' },
  },
  {
    slug: 'fort-belvoir-transportation',
    type: 'service',
    name: 'Fort Belvoir Transportation',
    badge: 'Defense & Government',
    h1: 'Fort Belvoir Transportation & Car Service',
    metaTitle: 'Fort Belvoir Transportation | DCA Limos',
    metaDescription:
      'Chauffeured car service to and from Fort Belvoir, VA — visitor-gate coordination, airport transfers and family travel. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '18 mi · 25–35 minutes' },
      { label: 'To Dulles (IAD)', value: '32 mi · 45–60 minutes' },
      { label: 'To BWI', value: '55 mi · 70–85 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Fort Belvoir, just south of Alexandria and Springfield along the Fairfax County side of the Potomac, is one of the larger Army installations in the national capital region, and its daily visitor, family and official travel keeps a steady flow of our sedans and SUVs moving through its gate area. DCA Limos coordinates visitor information in advance so a chauffeur\'s arrival at the gate is routine rather than a delay.',
      'At 18 miles and 25 to 35 minutes from Reagan National, Fort Belvoir is one of the closer installations in our coverage area to DCA, making same-day official and family travel realistic.',
    ],
    highlights: [
      'Experience with Fort Belvoir visitor-gate registration and vehicle-information requirements',
      'Fast Reagan National transfers in as little as 25–35 minutes',
      'Family travel coordination for relocating service members and visiting relatives',
      'Corporate accounts with monthly invoicing for contractors with recurring base-connected travel',
      'Sedans and SUVs for individual and family travel; Sprinter vans for larger groups',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Visitor-gate coordination',
        paragraphs: [
          'Fort Belvoir\'s visitor center and gate procedures require advance vehicle and driver information for anyone without an existing base pass, and we collect that detail at booking the same way we do for every other access-controlled site we serve.',
          'Our chauffeurs plan arrival timing around gate-area traffic, which can back up significantly during shift-change hours.',
          'The installation\'s size means a destination inside the gate can be a genuine drive from the visitor center itself — Fort Belvoir hosts several distinct commands, a hospital and a large residential community spread across a wide footprint — so we confirm the specific building or unit address at booking rather than assuming "Fort Belvoir" alone is enough to plan an accurate arrival time.',
        ],
      },
      {
        h2: 'Family and relocation travel',
        paragraphs: [
          'Service members relocating to or from Fort Belvoir, and the relatives visiting them, make up a steady share of our bookings here — a flight-tracked airport transfer coordinated around a moving timeline removes one variable from an already busy week.',
          'Sprinter vans accommodate larger families or groups traveling together for a change-of-station move.',
        ],
      },
      {
        h2: 'Booking Fort Belvoir transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm a flat rate and coordinate gate details in advance of your trip.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you clear a vehicle through Fort Belvoir\'s visitor gate?',
        a: 'Yes. We collect driver and vehicle information at booking and confirm whatever the gate requires before your chauffeur arrives.',
      },
      {
        q: 'How fast is the transfer from Fort Belvoir to Reagan National?',
        a: 'About 25 to 35 minutes, one of the faster installation-to-DCA connections in our coverage area.',
      },
      {
        q: 'Can you help with a PCS-move or relocation pickup?',
        a: 'Yes. We coordinate family and relocation airport transfers around moving schedules.',
      },
      {
        q: 'Do you offer corporate accounts for Fort Belvoir-connected contractors?',
        a: 'Yes, with monthly invoicing for recurring travel.',
      },
      {
        q: 'Is Fort Belvoir transportation available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Lorton, VA Limo Service', to: '/lorton-va-limo-service' },
      { label: 'Springfield, VA Limo Service', to: '/springfield-va-limo-service' },
      { label: 'Alexandria, VA Limo Service', to: '/alexandria-va-limo-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Quantico Marine Base Transportation', to: '/quantico-marine-base-transportation' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Fort Belvoir, VA', 'Fairfax County, VA'], serviceType: 'Corporate car service' },
  },
  // ---------------------------------------------------------------------
  // DC NEIGHBORHOODS (new)
  // ---------------------------------------------------------------------
  {
    slug: 'columbia-heights-dc-limo-service',
    type: 'city',
    name: 'Columbia Heights',
    badge: 'DC Neighborhoods',
    h1: 'Columbia Heights, DC Limo & Car Service',
    metaTitle: 'Columbia Heights DC Limo & Car Service',
    metaDescription:
      'Limo & car service in Columbia Heights, Washington DC — DCA transfers near the Metro, flat rates, flight tracking. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '5 mi · 15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '25 mi · 35–50 minutes' },
      { label: 'To BWI', value: '35 mi · 45–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Columbia Heights, anchored by the DC USA retail center and its Green/Yellow Line Metro station at 14th and Irving, has become one of DC\'s densest residential and nightlife neighborhoods, and our chauffeurs cover its narrow residential side streets as comfortably as its commercial strip along 14th Street.',
      'Reagan National is a short 5 miles and 15 to 25 minutes away, and we run that connection constantly — residents booking an early-morning flight, visitors headed back to the airport after a weekend, and everything in between.',
    ],
    highlights: [
      'Fast Reagan National transfers in as little as 15–25 minutes',
      'Chauffeurs comfortable with Columbia Heights\' dense residential side streets',
      'Flat, all-inclusive rate confirmed before you book — no surge pricing',
      'Service to 14th Street\'s restaurant and nightlife corridor',
      'Real-time flight tracking with complimentary wait time on airport transfers',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A dense, walkable neighborhood',
        paragraphs: [
          'Columbia Heights\' rowhouse streets and apartment corridors can make curbside pickup genuinely tricky during street-cleaning or snow-emergency restrictions, and our chauffeurs confirm the exact pickup spot with you in advance rather than circling the block.',
          'The DC USA retail center and 14th Street\'s restaurant row generate steady evening and weekend demand alongside residential airport runs.',
          'The neighborhood\'s Civil War-era Fort Stevens site and the Tivoli Theatre\'s restored facade sit alongside newer high-rise apartment towers, a mix that reflects how fast Columbia Heights has grown since the Metro station opened — and that growth means loading zones and curb space near the busiest blocks of 14th Street are in genuine demand on weekend evenings. Our chauffeurs account for that when confirming a pickup spot rather than assuming street-level access will be open.',
        ],
      },
      {
        h2: 'Airport transfers',
        paragraphs: [
          'At 5 miles from Reagan National, this is one of the shortest airport connections in our DC coverage area, and we run it with the same flight tracking and complimentary wait time as every other transfer.',
          'Dulles and BWI are available for travelers connecting through either.',
        ],
      },
      {
        h2: 'Booking Columbia Heights transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm a flat rate for your exact address before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How fast is the ride from Columbia Heights to Reagan National?',
        a: 'About 15 to 25 minutes for the 5-mile trip, depending on traffic.',
      },
      {
        q: 'Can a chauffeur find parking on my street in Columbia Heights?',
        a: 'Yes, with advance confirmation. We discuss the exact pickup spot with you ahead of time, especially during street-cleaning or snow-emergency restrictions.',
      },
      {
        q: 'Do you serve the 14th Street restaurant and nightlife corridor?',
        a: 'Yes, for both dinner reservations and late-night pickups.',
      },
      {
        q: 'Is the rate flat, even during busy weekend nights?',
        a: 'Yes. Your rate is confirmed before you book and does not change with demand.',
      },
      {
        q: 'Is Columbia Heights car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Adams Morgan Limo Service', to: '/adams-morgan-limo-service' },
      { label: 'Mount Pleasant, DC Limo Service', to: '/mount-pleasant-dc-limo-service' },
      { label: 'Petworth, DC Limo Service', to: '/petworth-dc-limo-service' },
      { label: 'Dupont Circle Limo Service', to: '/dupont-circle-limo-service' },
      { label: 'Washington DC Black Car Service', to: '/washington-dc-black-car-service' },
      { label: 'DCA to Washington, DC', to: '/dca-to-washington-dc' },
    ],
    schema: { areaServed: ['Washington, DC', 'Columbia Heights'], serviceType: 'Car service' },
  },
  {
    slug: 'mount-pleasant-dc-limo-service',
    type: 'city',
    name: 'Mount Pleasant',
    badge: 'DC Neighborhoods',
    h1: 'Mount Pleasant, DC Limo & Car Service',
    metaTitle: 'Mount Pleasant DC Limo & Car Service',
    metaDescription:
      'Limo & car service in Mount Pleasant, Washington DC — flat-rate DCA transfers, flight tracking, 24/7 service. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '6 mi · 15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '26 mi · 35–50 minutes' },
      { label: 'To BWI', value: '36 mi · 45–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Mount Pleasant\'s tree-lined rowhouse streets and small, walkable commercial strip along Mount Pleasant Street sit just above Adams Morgan and Columbia Heights, one of DC\'s more residential, lower-traffic neighborhoods — and one where a chauffeur who already knows the one-way streets and limited parking makes a real difference.',
      'Reagan National is 6 miles and about 15 to 25 minutes away, and we run that route constantly for residents heading to and from the airport.',
    ],
    highlights: [
      'Fast Reagan National transfers in as little as 15–25 minutes',
      'Chauffeurs familiar with Mount Pleasant\'s one-way streets and limited parking',
      'Flat, all-inclusive rate confirmed before you book — no surge pricing',
      'Real-time flight tracking with complimentary wait time on airport transfers',
      'Service to nearby Rock Creek Park and Adams Morgan for dinner or nightlife plans',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A quieter residential neighborhood',
        paragraphs: [
          'Mount Pleasant Street\'s small business strip and the surrounding rowhouse blocks are quieter than neighboring Adams Morgan, but the one-way streets and residential parking permit zones still call for a chauffeur who confirms the pickup spot in advance rather than guessing.',
          'Rock Creek Park borders the neighborhood to the west, and our chauffeurs route around park-adjacent road closures during weekend events.',
          'The neighborhood\'s Saturday farmers market along Lamont Street and its cluster of Latin American restaurants and bakeries draw a loyal local crowd, and weekend market traffic is one more reason our chauffeurs prefer to confirm an exact pickup point with you in advance rather than waiting curbside on a street that may be partly closed for vendor setup. Mount Pleasant\'s proximity to the Carter Barron Amphitheatre and the National Zoo also makes it a convenient staging point for a summer concert night or a family zoo visit booked alongside an airport run.',
        ],
      },
      {
        h2: 'Airport transfers',
        paragraphs: [
          'At 6 miles from Reagan National, this is a short, predictable transfer, flight-tracked with complimentary wait time the same as every other pickup we run.',
          'Dulles and BWI transfers are available for travelers connecting through either airport.',
        ],
      },
      {
        h2: 'Booking Mount Pleasant transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm a flat rate for your exact address before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How fast is the ride from Mount Pleasant to Reagan National?',
        a: 'About 15 to 25 minutes for the 6-mile trip, depending on traffic.',
      },
      {
        q: 'Can you handle pickup on a one-way residential street?',
        a: 'Yes. We confirm the exact pickup spot with you in advance given Mount Pleasant\'s one-way streets and permit parking.',
      },
      {
        q: 'Do you serve nearby Adams Morgan for dinner or nightlife plans?',
        a: 'Yes, Adams Morgan is a short drive away and a common pairing with a Mount Pleasant pickup or drop-off.',
      },
      {
        q: 'Is the rate flat regardless of traffic or demand?',
        a: 'Yes. Your rate is confirmed before you book and does not change.',
      },
      {
        q: 'Is Mount Pleasant car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Adams Morgan Limo Service', to: '/adams-morgan-limo-service' },
      { label: 'Columbia Heights, DC Limo Service', to: '/columbia-heights-dc-limo-service' },
      { label: 'Dupont Circle Limo Service', to: '/dupont-circle-limo-service' },
      { label: 'Cleveland Park, DC Limo Service', to: '/cleveland-park-dc-limo-service' },
      { label: 'Washington DC Black Car Service', to: '/washington-dc-black-car-service' },
      { label: 'DCA to Washington, DC', to: '/dca-to-washington-dc' },
    ],
    schema: { areaServed: ['Washington, DC', 'Mount Pleasant'], serviceType: 'Car service' },
  },
  {
    slug: 'friendship-heights-limo-service',
    type: 'city',
    name: 'Friendship Heights',
    badge: 'DC Neighborhoods',
    h1: 'Friendship Heights Limo & Car Service',
    metaTitle: 'Friendship Heights Limo & Car Service',
    metaDescription:
      'Limo & car service in Friendship Heights, DC/MD border — shopping district & Red Line Metro transfers to Reagan National. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '9 mi · 20–30 minutes' },
      { label: 'To Dulles (IAD)', value: '24 mi · 35–50 minutes' },
      { label: 'To BWI', value: '38 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Friendship Heights straddles the DC/Maryland line along upper Wisconsin and Western Avenues, where a cluster of department stores and boutiques meets the Red Line Metro station of the same name — a shopping and residential district that draws both DC and Chevy Chase, Maryland addresses into one coverage area.',
      'Reagan National runs about 9 miles and 20 to 30 minutes from here via Rock Creek Parkway or 16th Street, and we cover the trip with the same flat-rate, flight-tracked service we run across the rest of upper Northwest DC and Montgomery County.',
    ],
    highlights: [
      'Flat, all-inclusive rate for trips to Reagan National, Dulles or BWI — confirmed before you book',
      'Service to the Friendship Heights shopping district and Red Line Metro station',
      'Chauffeurs who know Wisconsin Avenue and Western Avenue traffic patterns on both sides of the DC/MD line',
      'Real-time flight tracking with complimentary wait time on airport transfers',
      'Service to nearby Chevy Chase and Bethesda for dinner or shopping plans',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A shopping district on the DC/MD line',
        paragraphs: [
          'Friendship Heights\' department stores and boutiques along Wisconsin Avenue draw shoppers from both sides of the District line, and our chauffeurs know which entrances and loading areas work for a curbside pickup without blocking traffic on a busy retail corridor.',
          'The neighborhood sits close enough to Chevy Chase and Bethesda that many trips combine a shopping stop with dinner or an evening out nearby.',
          'Wisconsin Avenue effectively splits into a Washington, DC address on one side and a Chevy Chase, Maryland address on the other at the very same intersection, which confuses first-time visitors using a map app to find their pickup point. We treat the whole shopping district and surrounding residential blocks as one coverage area, so the exact side of the line a specific store or building sits on never changes how quickly a chauffeur gets there.',
        ],
      },
      {
        h2: 'Airport transfers',
        paragraphs: [
          'A roughly 20-to-30-minute run gets you to Reagan National via Rock Creek Parkway or 16th Street, flight-tracked with complimentary wait time.',
          'Dulles and BWI transfers are available for travelers connecting through either airport.',
        ],
      },
      {
        h2: 'Booking Friendship Heights transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm a flat rate for your exact address before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you serve both the DC and Maryland sides of Friendship Heights?',
        a: 'Yes. We cover the entire shopping district and surrounding residential blocks on both sides of the DC/MD line.',
      },
      {
        q: 'How long is the ride to Reagan National from Friendship Heights?',
        a: 'About 20 to 30 minutes for the roughly 9-mile trip via Rock Creek Parkway or 16th Street.',
      },
      {
        q: 'Can you pick up directly at a store entrance on Wisconsin Avenue?',
        a: 'Yes, at whichever entrance or loading area works best without blocking the retail corridor\'s traffic.',
      },
      {
        q: 'Do you also serve nearby Chevy Chase and Bethesda?',
        a: 'Yes, both are a short drive away and commonly paired with a Friendship Heights pickup.',
      },
      {
        q: 'Is Friendship Heights car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Chevy Chase Limo Service', to: '/chevy-chase-limo-service' },
      { label: 'Bethesda Limo Service', to: '/bethesda-limo-service' },
      { label: 'Tenleytown, DC Limo Service', to: '/tenleytown-dc-limo-service' },
      { label: 'North Bethesda Limo Service', to: '/north-bethesda-limo-service' },
      { label: 'Washington DC Black Car Service', to: '/washington-dc-black-car-service' },
      { label: 'DCA to Bethesda', to: '/dca-to-bethesda' },
    ],
    schema: { areaServed: ['Washington, DC', 'Chevy Chase, MD'], serviceType: 'Car service' },
  },
  // ---------------------------------------------------------------------
  // FORT MEADE / NSA AND JOINT BASE ANDREWS
  // ---------------------------------------------------------------------
  {
    slug: 'fort-meade-nsa-contractor-transportation',
    type: 'service',
    name: 'Fort Meade / NSA Contractor Transportation',
    badge: 'Defense & Government',
    h1: 'Fort Meade & NSA-Area Contractor Transportation',
    metaTitle: 'Fort Meade / NSA Contractor Transportation',
    metaDescription:
      'Chauffeured car service for contractors and visitors near Fort Meade & the NSA campus — airport transfers, visitor-gate coordination. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '25 mi · 35–45 minutes' },
      { label: 'To BWI', value: '10 mi · 15–20 minutes' },
      { label: 'To Dulles (IAD)', value: '50 mi · 65–85 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Fort George G. Meade, between Laurel and Odenton in Anne Arundel County, hosts one of the largest concentrations of federal agencies, defense commands and contractor campuses in the country. DCA Limos runs daily executive sedans, airport transfers and Sprinter vans for the contractors, visiting staff and official travelers who move through this corridor, coordinating visitor information in advance so a gate check-in never becomes the reason a meeting starts late.',
      'BWI is remarkably close at just 10 miles and 15 to 20 minutes, making same-day visits realistic for out-of-town contractors and auditors, while Reagan National remains the common choice for Capitol Hill-adjacent business travel.',
    ],
    highlights: [
      'Experience with Fort Meade-area visitor and vehicle-information requirements',
      'BWI transfers in as little as 15–20 minutes for same-day contractor visits',
      'Daily executive sedan service for the surrounding contractor and agency campus corridor',
      'Corporate accounts with monthly invoicing and itemized, campus-coded trip detail',
      'Sprinter vans for visiting technical teams, auditors and conference delegations',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Visitor coordination for a high-security corridor',
        paragraphs: [
          'Campuses around Fort Meade run their own visitor-registration and badge procedures, often requiring advance notice of a vehicle and driver before a gate will clear anyone through. We collect that information at booking, the same way we handle other access-controlled sites across our coverage area.',
          'Our chauffeurs plan arrival timing around the corridor\'s shift-change and rush-hour patterns along MD-32 and the Baltimore-Washington Parkway.',
          'The area around Fort Meade has grown its own dense cluster of contractor office parks along Route 175 and National Business Parkway, largely built to serve the agencies and commands based on post, and a lot of our bookings here are between one of those office parks and a hotel near BWI rather than a trip onto the installation itself. Laurel and Odenton\'s MARC train stations also bring a steady stream of commuting contractors, and we coordinate rail-to-car connections for visitors who fly in and finish the trip by train.',
        ],
      },
      {
        h2: 'Fast BWI transfers for same-day visits',
        paragraphs: [
          'A 15-to-20-minute run to BWI means a contractor, auditor or visiting technical specialist can realistically land, meet and fly out the same day, something far harder to count on with rideshare.',
          'Every airport transfer is flight-tracked with complimentary wait time.',
        ],
      },
      {
        h2: 'Standing accounts and booking',
        paragraphs: [
          'Contractors and agencies with recurring vendor, auditor or executive travel in this corridor typically set up a standing account with monthly invoicing and itemized trip detail.',
          'Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you clear a vehicle through Fort Meade-area visitor security?',
        a: 'Yes. We collect driver and vehicle details at booking and confirm whatever registration a specific campus requires before arrival.',
      },
      {
        q: 'How fast is the transfer from the Fort Meade area to BWI?',
        a: 'About 15 to 20 minutes, making a same-day fly-in-fly-out visit realistic.',
      },
      {
        q: 'Do you offer corporate accounts for contractors in this corridor?',
        a: 'Yes, with monthly invoicing and itemized, campus-coded trip detail.',
      },
      {
        q: 'Can you provide a Sprinter van for a visiting technical team?',
        a: 'Yes, keeping a visiting engineering or audit team together for a full day of meetings.',
      },
      {
        q: 'Is this service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Odenton Limo Service', to: '/odenton-limo-service' },
      { label: 'Laurel Limo Service', to: '/laurel-limo-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Patuxent River NAS Transportation', to: '/patuxent-river-nas-transportation' },
      { label: 'Joint Base Andrews Transportation', to: '/joint-base-andrews-transportation' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Fort Meade, MD', 'Anne Arundel County, MD'], serviceType: 'Corporate car service' },
  },
  {
    slug: 'joint-base-andrews-transportation',
    type: 'event',
    name: 'Joint Base Andrews',
    badge: 'Defense & Government',
    h1: 'Joint Base Andrews Transportation & Car Service',
    metaTitle: 'Joint Base Andrews Transportation | DCA Limos',
    metaDescription:
      'Chauffeured car service to Joint Base Andrews — family travel, visitor-gate coordination and open-house event transportation. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '12 mi · 20–30 minutes' },
      { label: 'To BWI', value: '35 mi · 45–60 minutes' },
      { label: 'To Dulles (IAD)', value: '38 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Joint Base Andrews, in Prince George\'s County near Camp Springs, is home to the 89th Airlift Wing and best known publicly for its periodic open-house air shows — events that draw large crowds and real gate-area traffic on top of its everyday military family and official travel. DCA Limos coordinates visitor-gate details in advance for every trip here, whether it is a routine family pickup or an open-house weekend.',
      'At 12 miles and 20 to 30 minutes from Reagan National, Joint Base Andrews is one of the closer installations in our network to downtown DC.',
    ],
    highlights: [
      'Experience with Joint Base Andrews visitor-gate registration requirements',
      'Open-house and air-show weekend transportation planned around gate-area crowds',
      'Family and relocation travel coordination for service members and visiting relatives',
      'Fast Reagan National transfers in as little as 20–30 minutes',
      'Corporate accounts with monthly invoicing for contractors with recurring base-connected travel',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Visitor-gate coordination',
        paragraphs: [
          'Joint Base Andrews requires advance vehicle and driver information for visitors without an existing base pass, and we collect that detail at booking so your chauffeur\'s arrival at the gate is routine.',
          'Open-house and air-show events bring a surge of gate-area traffic and parking restrictions that our chauffeurs plan around well ahead of the event date.',
          'As the home of the 89th Airlift Wing and Air Force One\'s home base, the installation also sees periodic VIP movements that can trigger short-notice road closures on Allentown Road and Auth Way with little public warning. Our dispatch monitors for these when a Joint Base Andrews pickup is scheduled, and builds in extra buffer time around any date with a known public event on the base calendar.',
        ],
      },
      {
        h2: 'Family and official travel',
        paragraphs: [
          'Service members and their families generate a steady base of airport-transfer and point-to-point demand, and a flight-tracked pickup removes one variable from a relocation or visit week.',
          'Sprinter vans accommodate larger families or groups traveling together.',
        ],
      },
      {
        h2: 'Booking Joint Base Andrews transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm a flat rate and coordinate gate details in advance of your trip.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you clear a vehicle through the Joint Base Andrews visitor gate?',
        a: 'Yes. We collect driver and vehicle information at booking and confirm it with you before your chauffeur arrives.',
      },
      {
        q: 'Do you provide transportation for open-house or air-show events?',
        a: 'Yes, planned around that weekend\'s specific gate-area traffic and parking restrictions.',
      },
      {
        q: 'How fast is the transfer to Reagan National?',
        a: 'About 20 to 30 minutes for the roughly 12-mile trip.',
      },
      {
        q: 'Can you help with a PCS-move or relocation pickup?',
        a: 'Yes, coordinated around your moving timeline.',
      },
      {
        q: 'Is Joint Base Andrews transportation available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Clinton, MD Limo Service', to: '/clinton-md-limo-service' },
      { label: 'Largo Limo Service', to: '/largo-limo-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Fort Meade / NSA Contractor Transportation', to: '/fort-meade-nsa-contractor-transportation' },
      { label: 'DCA to Washington, DC', to: '/dca-to-washington-dc' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ["Prince George's County, MD", 'Joint Base Andrews'], serviceType: 'Event transportation' },
  },
  // ---------------------------------------------------------------------
  // NEW VENUES
  // ---------------------------------------------------------------------
  {
    slug: 'live-casino-hotel-maryland-transportation',
    type: 'event',
    name: 'Live! Casino & Hotel Maryland',
    badge: 'DC-Area Landmark',
    h1: 'Limo & Car Service to Live! Casino & Hotel Maryland',
    metaTitle: 'Live! Casino Maryland Transportation | DCA Limos',
    metaDescription:
      'Chauffeured car service to Live! Casino & Hotel in Hanover, MD — near BWI, flat rates and late-night pickups. Call (877) 609-1919.',
    stats: [
      { label: 'To BWI', value: '5 mi · 10–15 minutes' },
      { label: 'To Reagan (DCA)', value: '28 mi · 40–55 minutes' },
      { label: 'To Dulles (IAD)', value: '52 mi · 70–85 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Live! Casino & Hotel in Hanover, right next to Arundel Mills, draws a steady flow of guests for its gaming floor, concerts and hotel stays, and DCA Limos covers the drop-off and late-night return trip in a sedan, SUV or Sprinter van — no waiting in a self-parking garage line or searching for valet after a long night.',
      'The casino sits just 5 miles from BWI, making a stay-and-fly combination genuinely practical for travelers extending a trip, and we run that connection as easily as the drive from DC or Baltimore.',
    ],
    highlights: [
      'Door-to-door service to Live!\'s main entrance, skipping self-parking and valet lines',
      'Late-night return pickups timed to your actual departure, not a fixed window',
      'Minutes from BWI for a practical stay-and-fly or fly-and-stay combination',
      'Group transportation for bachelor/bachelorette and birthday party outings',
      'Sprinter vans for groups attending concerts or events at the adjacent venues',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Avoiding the parking garage',
        paragraphs: [
          'Live!\'s self-parking garage and valet line both get long on weekend nights, and a chauffeured drop-off at the main entrance skips both — a real advantage after a night at the tables when nobody wants to walk a parking structure.',
          'Our chauffeurs stage nearby for the return pickup, coordinated to your actual departure time rather than a generic fixed window.',
          'Live!\'s location directly next to Arundel Mills mall also makes a combined shopping-and-casino outing an easy single booking, with a chauffeur who can move the group between the two without re-parking in between. Concerts and comedy shows at the venue\'s own event space add another late-night return pattern we plan around, since a show letting out at 11 p.m. generates its own curbside crowd on top of the usual casino traffic.',
        ],
      },
      {
        h2: 'Groups and special occasions',
        paragraphs: [
          'Bachelor and bachelorette parties, birthday celebrations and corporate outings are common group bookings here, and a Sprinter van keeps everyone together for the night rather than splitting into separate rideshares.',
          'A stay-and-fly combination with the adjacent hotel pairs easily with a BWI transfer the next morning.',
        ],
      },
      {
        h2: 'Booking your Live! Casino transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online for your next visit.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Where does the chauffeur drop off at Live! Casino & Hotel?',
        a: 'Directly at the main entrance, skipping the self-parking garage and valet line.',
      },
      {
        q: 'Can the return pickup be timed to when we are actually ready to leave?',
        a: 'Yes. We coordinate the return pickup around your actual departure time rather than a fixed window.',
      },
      {
        q: 'How close is Live! Casino to BWI?',
        a: 'About 5 miles, roughly 10 to 15 minutes — a practical stay-and-fly or fly-and-stay combination.',
      },
      {
        q: 'Do you handle group bookings for bachelor or birthday parties?',
        a: 'Yes, with Sprinter vans for larger groups attending together.',
      },
      {
        q: 'Is transportation to Live! Casino available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including late-night pickups.',
      },
    ],
    related: [
      { label: 'Hanover Limo Service', to: '/limo/hanover-limo-service' },
      { label: 'Glen Burnie Limo Service', to: '/glen-burnie-limo-service' },
      { label: 'Baltimore Limo Service', to: '/limo/baltimore-limo-service' },
      { label: 'BWI to Columbia, MD', to: '/bwi-to-columbia-md' },
      { label: 'Bachelor & Bachelorette Party Transportation (blog)', to: '/blog/bachelor-bachelorette-party-transportation-dc' },
      { label: 'BWI Airport Limo', to: '/limo/bwi-airport-limo' },
    ],
    schema: { areaServed: ['Hanover, MD', 'Anne Arundel County, MD'], serviceType: 'Event transportation' },
  },
  {
    slug: 'maryland-zoo-baltimore-transportation',
    type: 'event',
    name: 'The Maryland Zoo in Baltimore',
    badge: 'DC-Area Landmark',
    h1: 'Limo & Car Service to The Maryland Zoo in Baltimore',
    metaTitle: 'Maryland Zoo Baltimore Transportation',
    metaDescription:
      'Chauffeured car service to The Maryland Zoo in Baltimore\'s Druid Hill Park — family outings & school groups, flat rates. (877) 609-1919.',
    stats: [
      { label: 'To BWI', value: '12 mi · 20–25 minutes' },
      { label: 'To Reagan (DCA)', value: '38 mi · 50–65 minutes' },
      { label: 'To Dulles (IAD)', value: '62 mi · 80–95 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The Maryland Zoo, set inside Baltimore\'s historic Druid Hill Park, is a frequent family day-trip and school-group destination for DC-area visitors, and DCA Limos runs SUVs and Sprinter vans for both — a family-sized SUV for a weekend outing, or a Sprinter van for a school field trip or large family reunion.',
      'Druid Hill Park\'s internal roads and the zoo\'s own parking lot can fill quickly on warm-weather weekends, and our chauffeurs drop off directly at the main entrance rather than circling for a spot.',
    ],
    highlights: [
      'Door-to-door service to the zoo\'s main entrance inside Druid Hill Park',
      'Family-sized SUVs and Sprinter vans for school groups and reunions',
      'Pickup timed around your visit length, not a fixed hourly window',
      'Easy pairing with Baltimore\'s Inner Harbor for a full day out',
      'Chauffeurs who know Druid Hill Park\'s internal roads and seasonal traffic patterns',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A family day trip from DC',
        paragraphs: [
          'The roughly 40-mile drive from DC to Baltimore is an easy day trip, and a chauffeured SUV means nobody has to drive while managing kids, strollers and a cooler on the way home.',
          'Our chauffeurs know Druid Hill Park\'s internal road network well enough to drop off close to the main entrance even on a busy weekend.',
          'Druid Hill Park itself is one of the oldest landscaped public parks in the country, and its reservoir loop and historic conservatory draw their own visitors separate from the zoo, which adds to weekend congestion on the park\'s internal roads during the warm-weather season. Booking a specific drop-off and return time in advance, rather than planning to flag down a ride at the end of the visit, avoids the wait that can build up near the main gate as the zoo closes for the day.',
        ],
      },
      {
        h2: 'School groups and reunions',
        paragraphs: [
          'A Sprinter van is a practical choice for a school field trip or extended-family reunion outing, keeping the group together for the drive rather than coordinating several separate vehicles.',
          'Pairing a zoo visit with Baltimore\'s Inner Harbor makes for a full day out, and we can plan both stops into one chauffeured itinerary.',
        ],
      },
      {
        h2: 'Booking your Maryland Zoo visit',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you drop off directly at the zoo\'s main entrance?',
        a: 'Yes, inside Druid Hill Park, even on busy weekends when the zoo\'s own lot fills quickly.',
      },
      {
        q: 'Do you provide vehicles for school field trips?',
        a: 'Yes. A Sprinter van is a practical choice for a school group or large family reunion.',
      },
      {
        q: 'Can we pair a zoo visit with Baltimore\'s Inner Harbor the same day?',
        a: 'Yes, we can plan both stops into one chauffeured itinerary.',
      },
      {
        q: 'Is the pickup timed to how long our visit actually runs?',
        a: 'Yes. We coordinate the return pickup around your visit length rather than a fixed hourly window.',
      },
      {
        q: 'Is transportation to the Maryland Zoo available year-round?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Baltimore Limo Service', to: '/limo/baltimore-limo-service' },
      { label: 'Baltimore Inner Harbor Transportation', to: '/baltimore-inner-harbor-transportation' },
      { label: 'Oriole Park at Camden Yards Transportation', to: '/oriole-park-camden-yards-transportation' },
      { label: 'CFG Bank Arena Transportation', to: '/cfg-bank-arena-transportation' },
      { label: 'Sprinter Van Rental with Driver', to: '/sprinter-van-rental-with-driver' },
      { label: 'BWI Airport Limo', to: '/limo/bwi-airport-limo' },
    ],
    schema: { areaServed: ['Baltimore, MD', 'Druid Hill Park'], serviceType: 'Event transportation' },
  },
  {
    slug: 'kings-dominion-transportation',
    type: 'event',
    name: 'Kings Dominion',
    badge: 'DC-Area Landmark',
    h1: 'Limo & Car Service to Kings Dominion',
    metaTitle: 'Kings Dominion Transportation | DCA Limos',
    metaDescription:
      'Chauffeured Sprinter van & SUV service to Kings Dominion in Doswell, VA — group outings, flat rates, door-to-door. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '75 mi · 85–100 minutes' },
      { label: 'To Dulles (IAD)', value: '85 mi · 95–115 minutes' },
      { label: 'To BWI', value: '100 mi · 110–130 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Kings Dominion, off I-95 in Doswell, Virginia, is one of the region\'s most popular theme-park day trips for DC-area families, youth groups and company outings willing to make the roughly 75-mile drive south. DCA Limos runs Sprinter vans and SUVs for the trip, with a chauffeur who handles the I-95 drive both ways so the group arrives rested rather than road-weary.',
      'A day at the park runs long, and a scheduled return pickup means nobody has to cut the day short to beat traffic home — we coordinate the pickup around your actual departure time from the park.',
    ],
    highlights: [
      'Sprinter vans that keep a family, youth group or company outing together for the full day',
      'Chauffeur-driven I-95 trip both ways, so no one drives tired on the way home',
      'Scheduled return pickup timed to when your group is actually ready to leave',
      'Door-to-door service from your pickup address to the park entrance',
      'Corporate accounts available for company-organized group outings',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A long day trip, handled comfortably',
        paragraphs: [
          'At roughly 75 to 100 miles depending on your home airport or starting point, Kings Dominion is one of the farther day-trip destinations we cover — far enough that most families and groups prefer not to drive themselves both ways after a full day on their feet.',
          'A Sprinter van seats the whole group together for the drive down and the drive home, with room for coolers, bags and souvenirs.',
          'The I-95 corridor south of Fredericksburg can back up significantly on summer weekends when the park is at its busiest, and a chauffeur who tracks real-time conditions and adjusts the route accordingly is worth more on this trip than on a typical in-town transfer. We also coordinate the pickup location inside the park\'s main entrance area, which can otherwise mean a long walk back from the gates after a full day for a tired group.',
        ],
      },
      {
        h2: 'Group outings and scheduling',
        paragraphs: [
          'Youth groups, sports teams and company-organized outings are common bookings for this trip, and we coordinate a single pickup and a single scheduled return rather than leaving a group to arrange its own way home at closing time.',
          'Corporate accounts are available for companies that run this as a recurring team outing.',
        ],
      },
      {
        h2: 'Booking your Kings Dominion trip',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Is Kings Dominion within your normal coverage area?',
        a: 'Yes. It is one of the farther day trips we run, roughly 75 to 100 miles depending on your starting point, and we quote a flat rate for the full distance.',
      },
      {
        q: 'Can a Sprinter van fit our whole family or group?',
        a: 'Yes, our 14-passenger Sprinter vans are the standard choice for this trip.',
      },
      {
        q: 'Do you schedule the return pickup around when we actually leave the park?',
        a: 'Yes. We coordinate the return around your group\'s actual departure time rather than a fixed window.',
      },
      {
        q: 'Do you offer corporate accounts for company outings?',
        a: 'Yes, for companies that run this as a recurring team event.',
      },
      {
        q: 'Is this service available on weekends and holidays?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Fredericksburg, VA Limo Service', to: '/fredericksburg-va-limo-service' },
      { label: 'Six Flags America Transportation', to: '/six-flags-america-transportation' },
      { label: 'Sprinter Van Rental with Driver', to: '/sprinter-van-rental-with-driver' },
      { label: 'Youth Sports Travel Team Transportation', to: '/youth-sports-travel-team-transportation-dca' },
      { label: 'Family Reunion Sprinter Van Transportation', to: '/blog/family-reunion-sprinter-van-airport-transportation' },
      { label: 'DCA to Richmond, VA', to: '/dca-to-richmond-va' },
    ],
    schema: { areaServed: ['Doswell, VA', 'Hanover County, VA'], serviceType: 'Event transportation' },
  },
  {
    slug: 'ronald-reagan-building-transportation',
    type: 'event',
    name: 'Ronald Reagan Building & International Trade Center',
    badge: 'DC-Area Landmark',
    h1: 'Car Service to the Ronald Reagan Building & International Trade Center',
    metaTitle: 'Ronald Reagan Building Transportation | DC',
    metaDescription:
      'Chauffeured car service to the Ronald Reagan Building & International Trade Center on Federal Triangle — minutes from DCA. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '3 mi · 10–15 minutes' },
      { label: 'To Dulles (IAD)', value: '27 mi · 40–55 minutes' },
      { label: 'To BWI', value: '35 mi · 45–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The Ronald Reagan Building & International Trade Center on Federal Triangle, one of the largest federal buildings in the country, hosts a steady calendar of conferences, trade events and government meetings alongside its daily federal-agency traffic. DCA Limos runs executive sedans and Sprinter vans here for conference delegations, visiting officials and corporate meeting attendees alike.',
      'At just 3 miles from Reagan National, this is one of the fastest airport connections anywhere in our coverage area — a real advantage for a same-day conference attendee flying in for a single session.',
    ],
    highlights: [
      'Door-to-door service to the building\'s Woodrow Wilson Plaza and 14th Street entrances',
      'Fast Reagan National transfers in as little as 10–15 minutes',
      'Sprinter vans for conference delegations and trade-event exhibitor teams',
      'Experience with Federal Triangle\'s security screening and street-closure patterns',
      'Corporate accounts with monthly invoicing for firms with recurring conference travel here',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A fast connection from Reagan National',
        paragraphs: [
          'A 10-to-15-minute transfer from DCA makes a same-day fly-in-fly-out conference visit genuinely realistic, and every airport pickup is flight-tracked with complimentary wait time so a delayed flight does not turn into a missed session.',
          'Our chauffeurs know the building\'s Woodrow Wilson Plaza and 14th Street entrances and plan around Federal Triangle\'s periodic security screening and street closures tied to nearby government buildings.',
          'The building sits directly between the White House and the Capitol along Pennsylvania Avenue, which means a presidential motorcade, an inaugural rehearsal or a major demonstration anywhere on the National Mall can close streets in the immediate area with almost no advance notice. Our dispatch tracks announced street closures for the days surrounding any booking here and builds a wider buffer into pickup timing whenever one is scheduled nearby.',
        ],
      },
      {
        h2: 'Conferences and trade events',
        paragraphs: [
          'The building\'s large event spaces host a regular calendar of trade shows, government conferences and association meetings, and a Sprinter van keeps an exhibitor team or delegation together between the venue, nearby hotels and the airport.',
          'Visiting officials and corporate attendees with recurring travel here typically set up a standing account with monthly invoicing.',
        ],
      },
      {
        h2: 'Booking your Ronald Reagan Building transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online for your next conference or meeting here.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Where does the chauffeur pick up at the Ronald Reagan Building?',
        a: 'At the Woodrow Wilson Plaza or 14th Street entrance, depending on which is accessible given that day\'s security screening.',
      },
      {
        q: 'How fast is the transfer from Reagan National?',
        a: 'About 10 to 15 minutes — one of the fastest airport connections in our entire coverage area.',
      },
      {
        q: 'Can you handle transportation for a conference or trade-show delegation?',
        a: 'Yes, with Sprinter vans for exhibitor teams and delegations attending events here.',
      },
      {
        q: 'Do you plan around Federal Triangle street closures?',
        a: 'Yes, our chauffeurs account for the area\'s periodic security screening and closures when planning pickup routes.',
      },
      {
        q: 'Is this service available for early-morning sessions?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Washington Convention Center Transportation', to: '/washington-convention-center-transportation' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'Penn Quarter Limo Service', to: '/penn-quarter-limo-service' },
      { label: 'Nonprofit & Association Car Service', to: '/nonprofit-association-corporate-car-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'DCA to Washington, DC', to: '/dca-to-washington-dc' },
    ],
    schema: { areaServed: ['Washington, DC', 'Federal Triangle'], serviceType: 'Event transportation' },
  },
  {
    slug: 'mosaic-district-merrifield-transportation',
    type: 'event',
    name: 'Mosaic District, Merrifield',
    badge: 'DC-Area Landmark',
    h1: 'Car Service to the Mosaic District, Merrifield VA',
    metaTitle: 'Mosaic District Merrifield Transportation | VA',
    metaDescription:
      'Chauffeured car service to the Mosaic District in Merrifield, VA — shopping, dining & date-night transportation. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '12 mi · 20–30 minutes' },
      { label: 'To Dulles (IAD)', value: '18 mi · 25–35 minutes' },
      { label: 'To BWI', value: '48 mi · 60–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The Mosaic District in Merrifield, Fairfax County, has grown into one of Northern Virginia\'s most walkable shopping and dining destinations — an open-air mix of boutiques, restaurants and an arthouse cinema that draws a steady evening and weekend crowd from across Tysons, Fairfax and Vienna. DCA Limos runs date-night, group dinner and shopping-trip transportation here, with chauffeurs who know which Mosaic District streets allow a curbside stop during peak hours.',
      'Sitting between Tysons and Fairfax, the Mosaic District is well positioned for both Reagan National and Dulles transfers, and we run either with the same flat-rate, flight-tracked service.',
    ],
    highlights: [
      'Door-to-door service to the Mosaic District\'s shopping and restaurant row',
      'Chauffeurs who know which streets allow a curbside stop during busy evening hours',
      'Date-night and group dinner transportation with flexible return pickup timing',
      'Well positioned for both Reagan National and Dulles airport transfers',
      'Sprinter vans for larger dinner groups and corporate outings',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Dinner, shopping and date-night logistics',
        paragraphs: [
          'The Mosaic District\'s open-air layout means parking fills up fast on weekend evenings, and a chauffeured drop-off at your specific restaurant or shop entrance avoids the search for a spot entirely.',
          'A flexible return pickup, timed to when your dinner or shopping trip actually wraps up, works better here than a fixed reservation window.',
          'The district\'s arthouse cinema and seasonal outdoor events, including a winter ice rink and a regular farmers market, add their own traffic pattern on top of ordinary restaurant-row business, and our chauffeurs check the event calendar before confirming a pickup spot during those periods. The open, pedestrian-oriented street grid also means some entrances are closer to a drop-off lane than others, which our chauffeurs account for when a reservation includes a specific restaurant.',
        ],
      },
      {
        h2: 'Between Tysons and Fairfax',
        paragraphs: [
          'The Mosaic District\'s location between two of Northern Virginia\'s busiest corporate hubs makes it a convenient stop for a client dinner between meetings, and our chauffeurs plan routes that account for both corridors\' rush-hour patterns.',
          'A Sprinter van is a practical choice for a larger group dinner or team outing here.',
        ],
      },
      {
        h2: 'Booking your Mosaic District trip',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can the chauffeur drop off directly at a specific restaurant or shop?',
        a: 'Yes, at whichever Mosaic District entrance works best given that evening\'s street access.',
      },
      {
        q: 'Is the return pickup flexible if dinner runs long?',
        a: 'Yes. We coordinate the return around when your group is actually ready rather than a fixed window.',
      },
      {
        q: 'Which airport is closer to the Mosaic District?',
        a: 'Dulles and Reagan National are both realistic options at roughly 18 and 12 miles respectively — we quote whichever fits your flight.',
      },
      {
        q: 'Can you handle a larger group dinner or corporate outing here?',
        a: 'Yes, with Sprinter vans for larger groups.',
      },
      {
        q: 'Is Mosaic District transportation available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Tysons Limo Service', to: '/tysons-limo-service' },
      { label: 'Fairfax Limo Service', to: '/fairfax-limo-service' },
      { label: 'Vienna, VA Limo Service', to: '/vienna-va-limo-service' },
      { label: 'Tysons Corporate Car Service', to: '/tysons-corporate-car-service' },
      { label: 'Old Town Alexandria Date Night Transportation', to: '/blog/old-town-alexandria-date-night-transportation' },
      { label: 'IAD to Tysons', to: '/iad-to-tysons' },
    ],
    schema: { areaServed: ['Merrifield, VA', 'Fairfax County, VA'], serviceType: 'Event transportation' },
  },
  // ---------------------------------------------------------------------
  // NEW INDUSTRY VERTICALS
  // ---------------------------------------------------------------------
  {
    slug: 'tech-startup-corporate-car-service',
    type: 'service',
    name: 'Tech & Startup Car Service',
    badge: 'Industry Car Service',
    h1: 'Tech & Startup Corporate Car Service in DC, MD & VA',
    metaTitle: 'Tech & Startup Car Service | DC, MD & VA',
    metaDescription:
      'Chauffeured car service for DC-area tech companies & startups: investor meetings, Dulles transfers and team offsites. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'Dulles corridor, DC & NoVA' },
      { label: 'Specialty', value: 'Investor meetings & team travel' },
      { label: 'Pricing', value: 'Flat rate or monthly account' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'The DC area\'s tech sector runs from Dulles corridor data-center and cloud companies to downtown DC and Arlington startups chasing federal and defense contracts, and the ground-transportation needs across that spread are different from a traditional law-firm or healthcare account: investor visits that need to look polished on short notice, engineering teams flying in from other offices, and founders who need a reliable ride to a pitch meeting without the risk of a cancelled rideshare.',
      'DCA Limos runs executive sedans for that kind of meeting-critical travel and Sprinter vans for visiting engineering or sales teams, with the flexibility to book on short notice that an early-stage company often needs.',
    ],
    highlights: [
      'Executive sedans for investor meetings, demo days and pitch travel',
      'Sprinter vans for visiting engineering, sales or customer-success teams',
      'Short-notice booking for fast-moving startup schedules',
      'Airport transfers to Dulles, Reagan National and BWI with flight tracking',
      'Corporate accounts with monthly invoicing once travel volume justifies it',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Investor meetings and pitch travel',
        paragraphs: [
          'A founder arriving late or disheveled to an investor meeting is a bad first impression that is entirely avoidable — a flat-rate, flight-tracked chauffeur removes the uncertainty a rideshare introduces on a day that already has enough variables.',
          'We cover both sides of this: a visiting investor flying in for due diligence, and a founder traveling to meet one, with the same reliable, on-time service.',
        ],
      },
      {
        h2: 'Visiting teams and short-notice booking',
        paragraphs: [
          'Engineering or sales teams flying in from another office for a sprint, a customer visit or an all-hands typically need a Sprinter van that keeps the group together rather than splitting into separate rideshares arriving at different times.',
          'Startups\' schedules change quickly, and we can usually accommodate a same-day or next-day booking rather than requiring the long lead time a larger corporate account might plan around.',
        ],
      },
      {
        h2: 'Standing accounts as you grow',
        paragraphs: [
          'As travel volume increases, most of our tech and startup clients move to a standing account with monthly invoicing, simplifying expense reporting without changing the booking process.',
          'Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you book on short notice for a fast-moving startup schedule?',
        a: 'Yes, usually same-day or next-day, though booking further ahead when possible helps guarantee vehicle availability.',
      },
      {
        q: 'Do you provide transportation for investor meetings or pitch travel?',
        a: 'Yes, for both visiting investors and founders traveling to meet them, with flat-rate, flight-tracked service.',
      },
      {
        q: 'Can you handle a visiting engineering or sales team?',
        a: 'Yes, a Sprinter van keeps a visiting team together rather than splitting into separate rideshares.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing?',
        a: 'Yes, once your travel volume justifies moving off trip-by-trip booking.',
      },
      {
        q: 'Is this service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Tysons Corporate Car Service', to: '/tysons-corporate-car-service' },
      { label: 'Herndon Corporate Car Service', to: '/herndon-corporate-car-service' },
      { label: 'Reston Corporate Car Service', to: '/reston-corporate-car-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'IAD to Tysons', to: '/iad-to-tysons' },
    ],
    schema: { areaServed: ['Washington, DC', 'Northern Virginia'], serviceType: 'Corporate car service' },
  },
  {
    slug: 'real-estate-luxury-home-tour-chauffeur-dc',
    type: 'service',
    name: 'Real Estate Agent & Luxury Home Tour Car Service',
    badge: 'Industry Car Service',
    h1: 'Real Estate Agent & Luxury Home Tour Car Service in DC, MD & VA',
    metaTitle: 'Real Estate Agent Car Service | DC, MD & VA',
    metaDescription:
      'Chauffeured car service for real estate agents touring luxury buyers around DC, Maryland & Virginia neighborhoods. Call (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, Maryland & Northern Virginia' },
      { label: 'Specialty', value: 'Multi-stop luxury home tours' },
      { label: 'Pricing', value: 'Hourly, as-directed' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'Touring a serious buyer through several luxury listings in a single afternoon works better from the back seat of a chauffeured SUV than from behind the wheel of a car the agent also has to drive — it keeps the agent\'s attention on the client and the listings rather than on navigation and parking at each stop.',
      'DCA Limos runs hourly, as-directed service for real estate agents and their clients across DC, Maryland and Northern Virginia, with an SUV that comfortably fits an agent, a couple and their questions between neighborhoods.',
    ],
    highlights: [
      'Hourly, as-directed booking that adapts to a changing multi-stop itinerary',
      'Executive SUVs with room for an agent, a couple and conversation between stops',
      'Chauffeurs who wait curbside at each listing rather than circling the block',
      'Coverage across DC, Montgomery and Fairfax County neighborhoods and beyond',
      'Airport transfers for out-of-area or relocating buyers flying in to view homes',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A better way to tour multiple listings',
        paragraphs: [
          'An as-directed hourly booking means the itinerary can change mid-afternoon — an extra stop, a longer walk-through than planned, a detour to a neighborhood the client wants to see — without needing to rebook or renegotiate the rate.',
          'Our chauffeurs wait curbside at each listing, so neither the agent nor the client has to think about parking at every stop.',
          'A polished arrival also matters more in this line of work than it might elsewhere — a buyer stepping out of a well-presented sedan or SUV in front of a multi-million-dollar listing sets a different tone than one circling the block looking for parking. Agents frequently use the drive time between showings productively as well, reviewing comparables or a listing packet with the client rather than navigating.',
        ],
      },
      {
        h2: 'Relocating and out-of-town buyers',
        paragraphs: [
          'Buyers relocating to the DC area, or flying in for a focused weekend of showings, often combine an airport transfer with the same chauffeur and vehicle for the whole visit, simplifying the logistics for both agent and client.',
          'Executive SUVs and sedans both work well here, depending on group size and listing type.',
        ],
      },
      {
        h2: 'Booking for your next showing day',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online for an hourly booking tailored to your showing schedule.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can the itinerary change during the booking?',
        a: 'Yes. Hourly, as-directed service adapts to a changing multi-stop schedule without needing to rebook.',
      },
      {
        q: 'What vehicle works best for touring a couple through several listings?',
        a: 'An executive SUV like an Escalade or Suburban is the most common choice, with comfortable room for conversation between stops.',
      },
      {
        q: 'Do you serve both DC and the Maryland/Virginia suburbs?',
        a: 'Yes, across DC, Montgomery and Fairfax County neighborhoods and beyond.',
      },
      {
        q: 'Can you handle an airport pickup for an out-of-town buyer?',
        a: 'Yes, and the same chauffeur and vehicle can continue for the day\'s showings.',
      },
      {
        q: 'Is this service available on short notice?',
        a: 'Yes, and it is available 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'Potomac, MD Limo Service', to: '/potomac-md-limo-service' },
      { label: 'Great Falls, VA Limo Service', to: '/great-falls-va-limo-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Washington DC Airport Car Service', to: '/washington-dc-airport-car-service' },
      { label: 'McLean Limo Service', to: '/mclean-limo-service' },
    ],
    schema: { areaServed: ['Washington, DC', 'Maryland', 'Northern Virginia'], serviceType: 'Corporate car service' },
  },
  {
    slug: 'media-broadcast-crew-transportation-dc',
    type: 'service',
    name: 'Media & Broadcast Crew Transportation',
    badge: 'Industry Car Service',
    h1: 'Media & Broadcast Crew Transportation in Washington DC',
    metaTitle: 'Media & Broadcast Crew Transportation | DC',
    metaDescription:
      'Chauffeured car service for DC news crews, correspondents and production teams — live-shot logistics, Capitol Hill access. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'Capitol Hill, K Street, DC-wide' },
      { label: 'Specialty', value: 'Live shots & correspondent travel' },
      { label: 'Pricing', value: 'Flat rate, hourly or monthly account' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'Washington carries one of the largest concentrations of broadcast news bureaus and correspondents in the country, and a surprising amount of that workflow depends on ground transportation: a correspondent needing to be at a live-shot location well before air, a visiting network crew moving between Capitol Hill, the White House area and a bureau on a tight production schedule, or affiliate reporters flying in to cover a specific story.',
      'DCA Limos runs executive sedans for correspondent travel and Sprinter vans for crews moving gear between locations, with chauffeurs who plan around Capitol Hill and downtown security perimeters that change by the day.',
    ],
    highlights: [
      'Correspondent and on-air talent transportation timed precisely to live-shot windows',
      'Sprinter vans for crews moving camera and production gear between locations',
      'Experience with Capitol Hill and downtown DC security-perimeter changes',
      'Airport transfers for visiting network and affiliate crews covering a specific story',
      'Corporate accounts with monthly invoicing for bureaus with recurring travel',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Precision timing for live-shot windows',
        paragraphs: [
          'A correspondent running late to a live-shot location is not a minor inconvenience — it is a missed segment. We treat on-air timing the same way we treat a flight departure: as a fixed point the whole trip is planned around, with buffer built in rather than cut to the minute.',
          'Our chauffeurs track breaking security-perimeter changes near the Capitol and downtown the same way they track flight delays, adjusting routes in real time rather than discovering a closure on arrival.',
        ],
      },
      {
        h2: 'Crews, gear and visiting teams',
        paragraphs: [
          'A Sprinter van moves a production crew and its camera and audio gear between a bureau, a shoot location and a hotel without the awkward logistics of fitting equipment into a sedan trunk.',
          'Affiliate crews flying in to cover a specific Washington story often need the same chauffeur and vehicle for the length of their visit, which we arrange as a standing booking rather than a series of separate trips.',
        ],
      },
      {
        h2: 'Standing accounts for bureaus',
        paragraphs: [
          'Bureaus and production companies with recurring Washington travel typically move to a standing account with monthly invoicing.',
          'Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you time a pickup precisely to a live-shot window?',
        a: 'Yes. We treat on-air timing as a fixed point the trip is planned around, with buffer built in for traffic and security delays.',
      },
      {
        q: 'Do you provide vehicles that fit camera and production gear?',
        a: 'Yes, our Sprinter vans comfortably carry a crew along with camera and audio equipment.',
      },
      {
        q: 'Can you handle transportation near the Capitol during a breaking news event?',
        a: 'Yes, our chauffeurs track security-perimeter changes near the Capitol and downtown DC and adjust routes accordingly.',
      },
      {
        q: 'Do you work with visiting affiliate or network crews?',
        a: 'Yes, including standing bookings for the length of a multi-day assignment.',
      },
      {
        q: 'Is this service available 24/7, including overnight breaking news?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'Nonprofit & Association Car Service', to: '/nonprofit-association-corporate-car-service' },
      { label: 'Law Firm & Lobbying Firm Car Service', to: '/law-firm-corporate-car-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'Ronald Reagan Building Transportation', to: '/ronald-reagan-building-transportation' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Washington, DC', 'Capitol Hill'], serviceType: 'Corporate car service' },
  },
  // ---------------------------------------------------------------------
  // WEDDING / CORPORATE VARIANTS (cities with a general page but missing one)
  // ---------------------------------------------------------------------
  {
    slug: 'columbia-md-wedding-limo-service',
    type: 'service',
    name: 'Columbia Wedding Limo',
    badge: 'Wedding Transportation',
    h1: 'Columbia, MD Wedding Limo Service',
    metaTitle: 'Columbia MD Wedding Limo Service | DCA Limos',
    metaDescription:
      'Wedding limo service in Columbia, MD — Lake Kittamaqundi photo stops, downtown event spaces & stretch limos. Call (877) 609-1919.',
    stats: [
      { label: 'To BWI', value: '14 mi · 20–30 minutes' },
      { label: 'To Reagan (DCA)', value: '28 mi · 40–55 minutes' },
      { label: 'To Dulles (IAD)', value: '45 mi · 60–80 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Columbia\'s planned-community design, built around Lake Kittamaqundi and Symphony Woods in the town center, gives wedding parties a genuinely scenic photo backdrop without leaving Howard County, and a growing cluster of downtown event spaces near the lake hosts receptions year-round. DCA Limos drives Columbia weddings in a stretch limousine or Sprinter van, with chauffeurs who know the town center\'s circular road layout well enough to stage efficiently between stops.',
      'Columbia\'s road network was designed around village centers rather than a traditional grid, which can confuse a driver unfamiliar with the area — our chauffeurs plan the day\'s route in advance rather than relying on GPS alone for last-minute turns.',
    ],
    highlights: [
      'Lake Kittamaqundi and Symphony Woods photo-stop planning built into the day\'s route',
      'Experience with downtown Columbia\'s village-center road layout',
      'Stretch limousine for the couple and wedding party; Sprinter van for guest shuttles',
      'Guest shuttle service from Baltimore- and DC-area hotel blocks',
      'Rate confirmed before you book; wedding bookings cancel free up to 12 hours before',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Lake Kittamaqundi and downtown event spaces',
        paragraphs: [
          'Columbia\'s town center has grown a real cluster of event spaces near the lake, and a limousine timetable here usually includes a dedicated photo stop at Lake Kittamaqundi or Symphony Woods between ceremony and reception.',
          'Our chauffeurs plan that stop into the day\'s schedule in advance so it does not eat into reception time.',
        ],
      },
      {
        h2: 'Navigating Columbia\'s village-center layout',
        paragraphs: [
          'Columbia was built around a system of village centers connected by curving parkways rather than a conventional street grid, which can genuinely confuse GPS-only navigation on a tight wedding-day schedule. Our chauffeurs plan the route between getting-ready location, ceremony and reception in advance.',
          'Howard County\'s broader Columbia-area venues, including Turf Valley Resort toward Ellicott City, are within easy reach of the same booking.',
        ],
      },
      {
        h2: 'Guest shuttles and booking',
        paragraphs: [
          'A Sprinter van on a fixed schedule is the most cost-effective way to move out-of-town wedding guests from a Baltimore- or DC-area hotel block to a Columbia venue.',
          'Call (877) 609-1919 or request a quote online — Columbia wedding bookings cancel free up to 12 hours before pickup.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you stop at Lake Kittamaqundi for wedding photos?',
        a: 'Yes. We plan a dedicated photo stop at Lake Kittamaqundi or Symphony Woods into the day\'s timetable in advance.',
      },
      {
        q: 'Will the chauffeur know how to navigate Columbia\'s village-center road layout?',
        a: 'Yes. We plan the full route in advance rather than relying only on GPS, since Columbia\'s curving parkways can confuse turn-by-turn navigation.',
      },
      {
        q: 'Do you provide guest shuttles from Baltimore or DC hotels?',
        a: 'Yes, on a fixed Sprinter van schedule.',
      },
      {
        q: 'What is the cancellation policy for a Columbia wedding booking?',
        a: 'Wedding and special-event bookings cancel free of charge up to 12 hours before pickup.',
      },
      {
        q: 'Is Columbia wedding transportation available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Columbia Limo Service', to: '/limo/columbia-limo-service' },
      { label: 'Columbia, MD Prom Limo Service', to: '/columbia-md-prom-limo-service' },
      { label: 'Ellicott City Wedding Limo Service', to: '/ellicott-city-wedding-limo-service' },
      { label: 'BWI to Columbia, MD', to: '/bwi-to-columbia-md' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Top 10 Wedding Venues Near DC (guide)', to: '/top-10-wedding-venues-near-dc' },
    ],
    schema: { areaServed: ['Columbia, MD', 'Howard County, MD'], serviceType: 'Wedding limo service' },
  },
  {
    slug: 'frederick-wedding-limo-service',
    type: 'service',
    name: 'Frederick Wedding Limo',
    badge: 'Wedding Transportation',
    h1: 'Frederick, MD Wedding Limo Service',
    metaTitle: 'Frederick MD Wedding Limo Service | DCA Limos',
    metaDescription:
      'Wedding limo service in Frederick, MD — historic downtown, Carroll Creek photo stops & stretch limos. Flat rates, 24/7. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '50 mi · 65–80 minutes' },
      { label: 'To BWI', value: '48 mi · 60–75 minutes' },
      { label: 'To Dulles (IAD)', value: '42 mi · 55–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Frederick\'s historic downtown — the clustered church spires, Carroll Creek Linear Park and the restored 1800s storefronts along Market Street — gives wedding parties one of the most photogenic small-city backdrops in Maryland, and a steady base of downtown event spaces and hotel ballrooms host receptions throughout the year. DCA Limos drives Frederick weddings in a stretch limousine or Sprinter van, with chauffeurs who know the historic district\'s one-way streets and limited parking.',
      'Carroll Creek Linear Park, which runs through the center of downtown, is a popular photo-stop location, and our chauffeurs build a brief stop there into the day\'s schedule without disrupting the rest of the timeline.',
    ],
    highlights: [
      'Historic downtown Frederick and Carroll Creek Linear Park photo-stop planning',
      'Experience with Market Street\'s one-way grid and limited historic-district parking',
      'Stretch limousine for the couple and wedding party; Sprinter van for guest shuttles',
      'Guest shuttle service from Frederick-area hotel blocks for out-of-town guests',
      'Rate confirmed before you book; wedding bookings cancel free up to 12 hours before',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Historic downtown and Carroll Creek',
        paragraphs: [
          'Frederick\'s historic district is one of the best-preserved downtowns in the state, and a wedding-day limousine route built around it usually includes a brief photo stop along Carroll Creek Linear Park or near the church spires on Church Street.',
          'Our chauffeurs plan staging around Market Street\'s one-way grid and limited street parking, which tightens further on weekends when downtown restaurants are busy.',
          'Frederick\'s downtown also hosts a busy weekend festival and farmers-market calendar that periodically closes sections of Market and Patrick Streets, and a wedding date that happens to land on a festival weekend needs a staging plan worked out well in advance rather than discovered the morning of. We confirm the downtown events calendar against your wedding date as part of planning the day\'s route.',
        ],
      },
      {
        h2: 'Reception venues and guest shuttles',
        paragraphs: [
          'Downtown event spaces and area hotel ballrooms host most Frederick wedding receptions, and a Sprinter van on a fixed schedule is the simplest way to move out-of-town guests between a hotel block and the venue.',
          'Frederick also sits within reach of Maryland wine country for couples planning a rehearsal dinner or welcome event tied to a local vineyard.',
        ],
      },
      {
        h2: 'Booking your Frederick wedding transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — Frederick wedding bookings cancel free up to 12 hours before pickup.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you stop at Carroll Creek Linear Park for photos?',
        a: 'Yes. We build a brief photo stop there into the day\'s schedule in advance.',
      },
      {
        q: 'Can a limousine navigate Frederick\'s historic Market Street district?',
        a: 'Yes, with planning. Our chauffeurs know the one-way grid and where parking is realistically available on a wedding day.',
      },
      {
        q: 'Do you provide guest shuttles from Frederick-area hotels?',
        a: 'Yes, on a fixed Sprinter van schedule.',
      },
      {
        q: 'What is the cancellation policy for a Frederick wedding booking?',
        a: 'Wedding and special-event bookings cancel free of charge up to 12 hours before pickup.',
      },
      {
        q: 'Is Frederick wedding transportation available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Frederick Limo Service', to: '/frederick-limo-service' },
      { label: 'Frederick Prom Limo Service', to: '/frederick-prom-limo-service' },
      { label: 'Maryland Craft Brewery Day Trip (blog)', to: '/blog/maryland-craft-brewery-frederick-county-day-trip-chauffeur' },
      { label: 'Maryland Wine Tour Transportation', to: '/maryland-wine-tour-transportation' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Top 10 Wedding Venues Near DC (guide)', to: '/top-10-wedding-venues-near-dc' },
    ],
    schema: { areaServed: ['Frederick, MD', 'Frederick County, MD'], serviceType: 'Wedding limo service' },
  },
  {
    slug: 'alexandria-corporate-car-service',
    type: 'service',
    name: 'Alexandria Corporate Car Service',
    badge: 'Corporate Car Service',
    h1: 'Alexandria, VA Corporate Car Service',
    metaTitle: 'Alexandria VA Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service in Alexandria, VA: executive sedans for Carlyle District offices and Old Town client dinners. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '7 mi · 15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '30 mi · 40–55 minutes' },
      { label: 'To BWI', value: '42 mi · 55–70 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Alexandria\'s Carlyle District near the King Street Metro has grown into a genuine corporate hub — federal agency offices, consulting firms and a steady stream of professional-services tenants — alongside Old Town\'s long-standing base of law firms, associations and small-business headquarters along King Street. DCA Limos runs executive sedans, airport transfers and Sprinter vans for both.',
      'At 7 miles and 15 to 25 minutes, Alexandria has one of the shortest airport connections to Reagan National in our entire network, letting visiting executives schedule a same-day arrival with real confidence.',
    ],
    highlights: [
      'Daily executive sedan service for the Carlyle District and Old Town\'s King Street corridor',
      'Fast Reagan National transfers in as little as 15–25 minutes',
      'Client-dinner and entertainment transportation along Old Town\'s restaurant row',
      'Corporate accounts with monthly invoicing and a dedicated dispatch contact',
      'Sprinter vans for visiting teams, offsites and conference delegations',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Carlyle District and Old Town corporate travel',
        paragraphs: [
          'The Carlyle District\'s office towers near the King Street Metro station house a dense mix of federal-adjacent and professional-services employers, generating steady executive sedan demand alongside Old Town\'s older base of law firms and associations.',
          'Our chauffeurs know which Old Town streets restrict curbside access during King Street\'s busiest retail and dining hours.',
          'Old Town\'s cobblestone side streets near the waterfront look charming but are genuinely hard on a vehicle\'s suspension and a passenger\'s footing in dress shoes, so our chauffeurs default to the smoother main thoroughfares for pickup and drop-off whenever a building has more than one accessible entrance. The King Street trolley and seasonal street closures for Old Town festivals are two more details our dispatch checks before confirming a specific pickup time in this corridor.',
        ],
      },
      {
        h2: 'Fast airport connections',
        paragraphs: [
          'A 15-to-25-minute run to Reagan National is about as fast as any corporate airport connection gets in our network, supporting same-day visiting-executive schedules with real margin for error.',
          'Every transfer is flight-tracked with complimentary wait time.',
        ],
      },
      {
        h2: 'Client entertainment and standing accounts',
        paragraphs: [
          'Old Town\'s restaurant row along King Street and the waterfront makes for easy client-dinner logistics, and a chauffeured evening removes the parking search that comes with Old Town\'s limited street spaces.',
          'Call (877) 609-1919 or request a quote online to set up an Alexandria corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you serve the Carlyle District as well as Old Town?',
        a: 'Yes, both — the Carlyle District\'s office towers and Old Town\'s King Street corridor are both part of our regular Alexandria coverage.',
      },
      {
        q: 'How fast is the transfer from Alexandria to Reagan National?',
        a: 'About 15 to 25 minutes — one of the fastest corporate airport connections in our network.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing in Alexandria?',
        a: 'Yes, with a dedicated dispatch contact for recurring travel.',
      },
      {
        q: 'Can you handle client-dinner transportation in Old Town?',
        a: 'Yes, including parking-free pickup and drop-off along King Street\'s restaurant row.',
      },
      {
        q: 'Is Alexandria corporate car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Alexandria, VA Limo Service', to: '/alexandria-va-limo-service' },
      { label: 'Alexandria Wedding Limo Service', to: '/alexandria-wedding-limo-service' },
      { label: 'Old Town Alexandria Transportation Guide', to: '/old-town-alexandria-transportation-guide' },
      { label: 'Fort Belvoir Transportation', to: '/fort-belvoir-transportation' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'National Landing Arlington Transportation Guide', to: '/national-landing-arlington-transportation-guide' },
    ],
    schema: { areaServed: ['Alexandria, VA'], serviceType: 'Corporate car service' },
  },
  {
    slug: 'silver-spring-wedding-limo-service',
    type: 'service',
    name: 'Silver Spring Wedding Limo',
    badge: 'Wedding Transportation',
    h1: 'Silver Spring, MD Wedding Limo Service',
    metaTitle: 'Silver Spring MD Wedding Limo Service | DCA Limos',
    metaDescription:
      'Wedding limo service in Silver Spring, MD — downtown hotel ballrooms, arts-district venues & stretch limos. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '13 mi · 25–35 minutes' },
      { label: 'To Dulles (IAD)', value: '32 mi · 45–60 minutes' },
      { label: 'To BWI', value: '32 mi · 40–55 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Downtown Silver Spring\'s hotel ballrooms and event spaces, clustered near the AFI Silver Theatre and Fillmore Silver Spring arts district, host a steady calendar of wedding receptions for couples who want a walkable, Metro-accessible setting without leaving Montgomery County. DCA Limos drives Silver Spring weddings in a stretch limousine or Sprinter van, with chauffeurs who know downtown\'s one-way streets and the parking-garage access most venues rely on.',
      'Because downtown Silver Spring is dense and walkable, a wedding party often moves between a getting-ready hotel, a nearby ceremony location and a reception venue all within a few blocks — a schedule our chauffeurs plan efficiently rather than treating each stop as a separate drive across town.',
    ],
    highlights: [
      'Downtown Silver Spring hotel ballroom and event-space wedding logistics',
      'Experience with the arts-district area\'s one-way streets and parking-garage access',
      'Stretch limousine for the couple and wedding party; Sprinter van for guest shuttles',
      'Guest shuttle service from nearby hotel blocks for out-of-town guests',
      'Rate confirmed before you book; wedding bookings cancel free up to 12 hours before',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Downtown hotel and event-space weddings',
        paragraphs: [
          'A handful of downtown Silver Spring hotels and event spaces near the AFI Silver Theatre and Fillmore arts district host wedding receptions with straightforward parking-garage access once the venue\'s guest-vehicle procedure is confirmed in advance.',
          'Our chauffeurs plan a circular-drive pickup at whichever entrance a specific venue uses, rather than guessing at street-level access on a day the bridal party is already dressed and waiting.',
        ],
      },
      {
        h2: 'A compact, walkable wedding-day route',
        paragraphs: [
          'Downtown Silver Spring\'s density means a getting-ready hotel, ceremony location and reception venue are often within a few blocks of each other, and our chauffeurs plan the day\'s short hops efficiently rather than treating each stop as a separate reservation.',
          'The Silver Spring Metro station makes a convenient pickup point for out-of-town wedding guests arriving by rail.',
        ],
      },
      {
        h2: 'Guest shuttles and booking',
        paragraphs: [
          'A Sprinter van on a fixed schedule moves out-of-town guests from a nearby hotel block to the venue without a line of individual cars searching for garage parking.',
          'Call (877) 609-1919 or request a quote online — Silver Spring wedding bookings cancel free up to 12 hours before pickup.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you handle weddings at downtown Silver Spring hotels and event spaces?',
        a: 'Yes, including confirming each venue\'s circular-drive or parking-garage guest-vehicle procedure in advance.',
      },
      {
        q: 'Can you handle a wedding day with several stops close together downtown?',
        a: 'Yes. Downtown Silver Spring\'s density means stops are often a few blocks apart, and we plan the day\'s short hops efficiently.',
      },
      {
        q: 'Do you provide guest shuttles from nearby hotels?',
        a: 'Yes, on a fixed Sprinter van schedule.',
      },
      {
        q: 'What is the cancellation policy for a Silver Spring wedding booking?',
        a: 'Wedding and special-event bookings cancel free of charge up to 12 hours before pickup.',
      },
      {
        q: 'Is Silver Spring wedding transportation available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Silver Spring Limo Service', to: '/silver-spring-limo-service' },
      { label: 'Silver Spring Corporate Car Service', to: '/silver-spring-corporate-car-service' },
      { label: 'Takoma Park, MD Limo Service', to: '/takoma-park-md-limo-service' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'DCA to Silver Spring', to: '/dca-to-silver-spring' },
      { label: 'Top 10 Wedding Venues Near DC (guide)', to: '/top-10-wedding-venues-near-dc' },
    ],
    schema: { areaServed: ['Silver Spring, MD', 'Montgomery County, MD'], serviceType: 'Wedding limo service' },
  },
  // ---------------------------------------------------------------------
  // NEW OCCASIONS AND ACCESSIBILITY VERTICAL
  // ---------------------------------------------------------------------
  {
    slug: 'micro-wedding-elopement-transportation-dc',
    type: 'service',
    name: 'Micro-Wedding & Elopement Transportation',
    badge: 'Wedding Transportation',
    h1: 'Micro-Wedding & Elopement Transportation in DC, MD & VA',
    metaTitle: 'Micro-Wedding & Elopement Car Service | DC',
    metaDescription:
      'Chauffeured car service for small DC-area micro-weddings and elopements — sedans, SUVs and flexible hourly bookings. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, Maryland & Northern Virginia' },
      { label: 'Specialty', value: 'Small ceremonies & elopements' },
      { label: 'Pricing', value: 'Hourly, scaled to a small party' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'A micro-wedding or elopement does not need the same scale of transportation as a 150-guest wedding, but it still deserves the same reliability and polish — a sedan or SUV for the couple, rather than a full stretch-limo booking sized for a wedding party that is not there. DCA Limos runs right-sized transportation for small ceremonies across DC, Maryland and Northern Virginia, from a courthouse elopement to a 20-guest backyard or park ceremony.',
      'Many micro-weddings happen with little advance notice compared to a traditional wedding, and we can usually accommodate a booking on shorter lead time than a full wedding package typically requires.',
    ],
    highlights: [
      'Right-sized sedans and SUVs for a couple or small wedding party, not an oversized stretch limo',
      'Shorter lead-time booking than a traditional full-scale wedding reservation',
      'Courthouse, park and small-venue ceremony transportation across our coverage area',
      'An executive sedan or SUV with photo-ready presentation for the couple\'s arrival',
      'Flexible hourly booking that covers ceremony, a photo stop and a dinner afterward',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs available',
    ],
    sections: [
      {
        h2: 'Transportation scaled to a small ceremony',
        paragraphs: [
          'A micro-wedding or elopement usually means a couple, maybe a witness or two, and sometimes a handful of close family — a scale that a well-presented sedan or SUV serves better than a stretch limousine built for a full wedding party.',
          'Courthouse ceremonies, small park weddings and intimate venue elopements are all common bookings, and the same hourly, as-directed structure applies regardless of the ceremony\'s size.',
        ],
      },
      {
        h2: 'Booking on shorter notice',
        paragraphs: [
          'Elopements and micro-weddings are often planned with less lead time than a traditional wedding, and we can typically accommodate a booking faster than a full-scale wedding package requires — though booking as early as possible still helps guarantee the vehicle you want.',
          'A photo stop at a local landmark or park is easy to build into the hourly booking before or after the ceremony itself.',
        ],
      },
      {
        h2: 'Booking your micro-wedding transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online with your ceremony location, guest count and timing.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do we need to book a full stretch limousine for a small ceremony?',
        a: 'No. A sedan or SUV is the more common and more cost-effective choice for a micro-wedding or elopement, scaled to a couple or a small party.',
      },
      {
        q: 'How far ahead do we need to book for an elopement?',
        a: 'We can usually accommodate shorter notice than a full wedding booking requires, though booking as early as possible helps guarantee vehicle availability.',
      },
      {
        q: 'Can you handle a courthouse wedding?',
        a: 'Yes, including courthouse pickups and a short wait if needed.',
      },
      {
        q: 'Can you include a photo stop before or after the ceremony?',
        a: 'Yes, a photo stop at a local landmark or park is easy to build into the hourly booking.',
      },
      {
        q: 'Is micro-wedding transportation available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Proposal & Anniversary Chauffeur Experiences (blog)', to: '/blog/proposal-anniversary-chauffeur-experiences-dc' },
      { label: 'Washington DC Wedding Limo', to: '/washington-dc-wedding-limo' },
      { label: 'How Many Limos for a Wedding Party? (blog)', to: '/blog/how-many-limos-for-wedding-party' },
      { label: 'Rehearsal Dinner & Brunch Transportation (blog)', to: '/blog/rehearsal-dinner-brunch-transportation-dmv-weddings' },
      { label: 'DC Wedding Transportation Guide (blog)', to: '/blog/dc-wedding-transportation-guide' },
    ],
    schema: { areaServed: ['Washington, DC', 'Maryland', 'Northern Virginia'], serviceType: 'Wedding limo service' },
  },
  {
    slug: 'baby-naming-bris-christening-transportation-dc',
    type: 'service',
    name: 'Baby Naming, Bris & Christening Transportation',
    badge: 'Occasion Transportation',
    h1: 'Baby Naming, Bris & Christening Transportation in DC, MD & VA',
    metaTitle: 'Baby Naming & Christening Car Service | DC',
    metaDescription:
      'Chauffeured car service for a baby naming, bris or christening — family and out-of-town relative transportation. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, Maryland & Northern Virginia' },
      { label: 'Specialty', value: 'Family & relative coordination' },
      { label: 'Pricing', value: 'Flat rate or hourly' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'A baby naming ceremony, bris or christening usually brings together new parents still adjusting to life with an infant, out-of-town grandparents and godparents flying in for the occasion, and a house or synagogue full of family on a tight morning schedule — exactly the kind of day where one less thing to coordinate makes a real difference.',
      'DCA Limos handles both pieces: flight-tracked airport transfers for visiting grandparents and godparents, and a comfortable SUV or sedan for the new parents and baby on the day itself, with car seats available on request.',
    ],
    highlights: [
      'Flight-tracked airport transfers for visiting grandparents and godparents',
      'Car seats available on request for the new parents and baby',
      'Executive SUVs with easy entry for family members who may have mobility needs',
      'Coordination around religious observance timing when requested',
      'Flat-rate or hourly booking depending on whether the day involves multiple stops',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Visiting grandparents and godparents',
        paragraphs: [
          'Grandparents and godparents flying in for a baby naming, bris or christening often need their own airport transfer separate from the day\'s ceremony logistics — a flight-tracked pickup the day before or the morning of removes that piece from the new parents\' plate entirely.',
          'A Sprinter van can bring a larger extended-family group together from the airport if several relatives are arriving on the same or similar flights.',
          'A bris in particular is usually scheduled on the eighth day after birth with little flexibility in the date, which means travel arrangements for out-of-town family often come together on short notice. We prioritize fast confirmation on these bookings precisely because the ceremony date itself cannot move the way a wedding or a birthday party date can.',
        ],
      },
      {
        h2: 'The day of the ceremony',
        paragraphs: [
          'New parents managing a newborn benefit from a car seat already installed and a chauffeur comfortable with an infant\'s unpredictable schedule — mention the baby\'s age when you book and we bring the right seat.',
          'Families observing specific religious timing requirements for a bris or naming ceremony can let us know when booking, and we plan pickup and wait times accordingly rather than defaulting to a generic schedule.',
        ],
      },
      {
        h2: 'Booking your family\'s transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online with your ceremony location, guest count and timing.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you provide a car seat for the baby?',
        a: 'Yes. Let us know the baby\'s age when you book and we will bring the appropriate infant or convertible seat, installed before the vehicle arrives.',
      },
      {
        q: 'Can you handle airport transfers for visiting grandparents or godparents?',
        a: 'Yes, flight-tracked with complimentary wait time, the same as any other airport pickup.',
      },
      {
        q: 'Can you plan around specific religious observance timing for a bris?',
        a: 'Yes. Let us know your family\'s observance when booking and we will plan pickup and wait times accordingly.',
      },
      {
        q: 'Can a Sprinter van bring a larger extended family from the airport together?',
        a: 'Yes, if several relatives are arriving on the same or similar flights.',
      },
      {
        q: 'Is this service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year.',
      },
    ],
    related: [
      { label: 'Bar & Bat Mitzvah Limo Service (blog)', to: '/blog/bar-bat-mitzvah-limo-service-dmv' },
      { label: 'Baby Shower & Bridal Shower Transportation (blog)', to: '/blog/baby-shower-bridal-shower-day-of-transportation' },
      { label: 'Hospital to Home Newborn Homecoming Transportation (blog)', to: '/blog/hospital-to-home-newborn-homecoming-transportation' },
      { label: 'Flying with an Infant: DCA Airport Transfer Guide (blog)', to: '/blog/flying-with-infant-dca-airport-transfer-guide' },
      { label: 'Wheelchair Accessible Car Service', to: '/wheelchair-accessible-car-service-dc' },
      { label: 'DCA to Washington, DC', to: '/dca-to-washington-dc' },
    ],
    schema: { areaServed: ['Washington, DC', 'Maryland', 'Northern Virginia'], serviceType: 'Car service' },
  },
  {
    slug: 'wheelchair-accessible-car-service-dc',
    type: 'service',
    name: 'Wheelchair Accessible Car Service',
    badge: 'Accessibility',
    h1: 'Wheelchair Accessible Car Service in DC, MD & VA',
    metaTitle: 'Wheelchair Accessible Car Service | DC, MD, VA',
    metaDescription:
      'Accessible chauffeured car service across DC, Maryland & Virginia — advance-notice accessible vehicles, curbside assistance. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, Maryland & Northern Virginia' },
      { label: 'Specialty', value: 'Mobility assistance & accessible vehicles' },
      { label: 'Pricing', value: 'Flat rate or hourly' },
      { label: 'Booking', value: '24 / 7, advance notice helps' },
    ],
    intro: [
      'Traveling with a wheelchair, a walker or a significant mobility limitation deserves a chauffeur who plans for it in advance rather than discovering it curbside, which is why we ask about mobility needs at booking and confirm the right vehicle and assistance before the car ever shows up — whether that is a higher-clearance SUV that is easier to transfer into than a low sedan seat, help folding and stowing a manual wheelchair, or coordinating a specific wheelchair-accessible vehicle through our network with advance notice.',
      'This matters most at the airport, where Metro\'s elevator-dependent stations and a long walk from an economy parking lot create real uncertainty for a traveler with limited mobility — a chauffeur who meets you at the gate or curb removes that uncertainty entirely.',
    ],
    highlights: [
      'Mobility needs discussed and confirmed at booking, not discovered curbside',
      'Higher-clearance SUVs available for easier seat transfers than a low sedan',
      'Chauffeur assistance folding, stowing and retrieving a manual wheelchair or walker',
      'Wheelchair-accessible vehicle coordination through our network with advance notice',
      'Patient, unhurried service for travelers who need extra time boarding or exiting',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Planning ahead instead of discovering a problem curbside',
        paragraphs: [
          'The single biggest difference between a frustrating pickup and a smooth one for a traveler with mobility needs is whether the driver already knows what to expect. We ask about mobility needs when you book — a cane, a walker, a manual or power wheelchair — and confirm the right vehicle and the right assistance in advance.',
          'An SUV with a higher seat height, such as the vehicles in our fleet, is often easier to transfer into than a low sedan seat for a traveler with knee or hip limitations, and we will recommend that option when it fits your needs.',
        ],
      },
      {
        h2: 'Airport pickups and curbside assistance',
        paragraphs: [
          'Airport terminals involve long walks, elevators that are not always working, and curbside chaos that is hard to navigate with limited mobility — a chauffeur who meets you inside or at a pre-arranged curbside point, tracked against your actual flight arrival, removes most of that friction.',
          'For a traveler who needs a specific wheelchair-accessible vehicle with a ramp or lift, let us know as far in advance as possible so we can coordinate the right vehicle through our network for your trip.',
        ],
      },
      {
        h2: 'Booking accessible transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online and tell us about any mobility needs when you book, so we can plan the right vehicle and assistance before the day of your trip.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can your chauffeurs assist with a wheelchair or walker transfer?',
        a: 'Yes, when arranged in advance. Let us know your specific needs when booking so we can confirm the right vehicle and assistance ahead of time.',
      },
      {
        q: 'Do you have a wheelchair-accessible vehicle with a ramp or lift?',
        a: 'We coordinate a specific wheelchair-accessible vehicle through our network with advance notice — let us know as early as possible so we can arrange it for your trip.',
      },
      {
        q: 'What vehicle works best for someone with limited mobility who does not need a ramp?',
        a: 'A higher-clearance SUV, such as an Escalade or Suburban, is often easier to transfer into than a low sedan seat.',
      },
      {
        q: 'Can you help at the airport with a long terminal walk?',
        a: 'Yes. We can meet you at a pre-arranged curbside point or coordinate inside assistance, tracked against your actual flight arrival time.',
      },
      {
        q: 'Is accessible car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, though advance notice helps us arrange the best possible vehicle and assistance.',
      },
    ],
    related: [
      { label: 'Non-Emergency Senior Medical Appointment Chauffeur (blog)', to: '/blog/non-emergency-senior-medical-appointment-chauffeur-dmv' },
      { label: 'DC Metro vs. Private Car Service for Tourists (blog)', to: '/blog/dc-metro-vs-private-car-service-tourists-luggage' },
      { label: 'DCA Airport Meet & Greet Service (blog)', to: '/blog/dca-airport-meet-and-greet-service' },
      { label: 'Baby Naming, Bris & Christening Transportation', to: '/baby-naming-bris-christening-transportation-dc' },
      { label: 'Washington DC Airport Car Service', to: '/washington-dc-airport-car-service' },
      { label: 'Fleet', to: '/fleet' },
    ],
    schema: { areaServed: ['Washington, DC', 'Maryland', 'Northern Virginia'], serviceType: 'Car service' },
  },
  // ---------------------------------------------------------------------
  // NEW AIRPORT ROUTES (IAD / BWI)
  // ---------------------------------------------------------------------
  {
    slug: 'iad-to-tysons',
    type: 'route',
    name: 'Dulles to Tysons',
    badge: 'Airport Transfer Route',
    h1: 'Dulles Airport (IAD) to Tysons, VA Car Service',
    metaTitle: 'Dulles (IAD) to Tysons Car Service | DCA Limos',
    metaDescription:
      'Chauffeured car service from Dulles Airport to Tysons, VA — 17 miles, 25–35 minutes. Flat rates, flight tracking, 24/7. (877) 609-1919.',
    stats: [
      { label: 'Distance', value: '17 miles' },
      { label: 'Drive time', value: '25–35 minutes' },
      { label: 'Flat rate', value: 'Confirmed before booking' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'A chauffeur meets your flight at Dulles, tracks it in case of delay, and is waiting at baggage claim with a name sign for the drive to Tysons — Virginia\'s largest business district, 17 miles east via the Dulles Access Road and the Capital Beltway. We run this trip constantly for executives flying into Dulles for same-day Tysons meetings, in a flat-rate sedan, SUV or Sprinter van with no surge pricing.',
      'At 25 to 35 minutes, this is one of the more reliable corporate airport connections in our network — close enough for a tight meeting schedule, far enough that a flat, confirmed rate matters more than guessing at a metered fare.',
    ],
    highlights: [
      'Flat, all-inclusive rate confirmed before you book — no surge pricing',
      'Real-time flight tracking with 45 minutes of free wait time on domestic arrivals',
      'Chauffeur waiting at Dulles baggage claim with a name sign',
      'Daily service to Tysons Corner, Tysons Galleria and the office towers along Route 7',
      'Sprinter vans for visiting teams and conference delegations',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'From Dulles baggage claim to Tysons',
        paragraphs: [
          'Your chauffeur tracks the inbound flight and adjusts the pickup time for any delay, holding a name sign at baggage claim rather than leaving you to find a rideshare pickup lot.',
          'The drive to Tysons runs via the Dulles Access Road and the Capital Beltway, a route our chauffeurs run daily and plan around the Beltway\'s predictable rush-hour slowdowns near the Route 7 interchange.',
        ],
      },
      {
        h2: 'Arriving in Tysons',
        paragraphs: [
          'Tysons\' office towers, Tysons Corner Center and Tysons Galleria, and the Silver Line stations threading through the district all see steady visiting-executive and leisure traffic, and our chauffeurs know which buildings restrict street-level pickup during business hours.',
          'See our Tysons Corporate Car Service page for more on standing accounts for Tysons-based employers.',
        ],
      },
      {
        h2: 'Booking your Dulles to Tysons transfer',
        paragraphs: [
          'Give us your flight number and drop-off address, and we will confirm a flat rate and vehicle before you travel.',
          'Call (877) 609-1919 or request a free quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How much does a car service from Dulles to Tysons cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and drop-off address. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Dulles to Tysons?',
        a: 'About 25 to 35 minutes for the 17-mile trip via the Dulles Access Road and the Capital Beltway, depending on traffic.',
      },
      {
        q: 'Do you track my flight for delays?',
        a: 'Yes. Every Dulles pickup is flight-tracked, and your chauffeur adjusts to your actual arrival time.',
      },
      {
        q: 'Can you provide a Sprinter van for a visiting team?',
        a: 'Yes, keeping a visiting team together for the ride to Tysons and any meetings that follow.',
      },
      {
        q: 'Is this route available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning arrivals.',
      },
    ],
    related: [
      { label: 'Tysons Limo Service', to: '/tysons-limo-service' },
      { label: 'Tysons Corporate Car Service', to: '/tysons-corporate-car-service' },
      { label: 'Capital One Hall Tysons Transportation', to: '/capital-one-hall-tysons-transportation' },
      { label: 'Mosaic District, Merrifield Transportation', to: '/mosaic-district-merrifield-transportation' },
      { label: 'Dulles Airport Limo', to: '/limo/dulles-airport-limo' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Tysons, VA', 'Fairfax County, VA'], serviceType: 'Airport transfer' },
  },
  {
    slug: 'bwi-to-columbia-md',
    type: 'route',
    name: 'BWI to Columbia',
    badge: 'Airport Transfer Route',
    h1: 'BWI Airport to Columbia, MD Car Service',
    metaTitle: 'BWI to Columbia MD Car Service | DCA Limos',
    metaDescription:
      'Chauffeured car service from BWI Airport to Columbia, MD — 14 miles, 20–30 minutes. Flat rates, flight tracking, 24/7. (877) 609-1919.',
    stats: [
      { label: 'Distance', value: '14 miles' },
      { label: 'Drive time', value: '20–30 minutes' },
      { label: 'Flat rate', value: 'Confirmed before booking' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'A chauffeur meets your flight at BWI, tracks it in case of delay, and is waiting at baggage claim with a name sign for the short drive to Columbia, Howard County\'s planned-community town center. The 14-mile trip runs 20 to 30 minutes via I-95 and MD-32, in a flat-rate sedan, SUV or Sprinter van with no surge pricing.',
      'BWI is the closest major airport to Columbia by a wide margin, and this is one of the more frequent routes our Howard County chauffeurs run, whether for a business traveler, a visiting family or a wedding guest flying in for a Columbia-area event.',
    ],
    highlights: [
      'Flat, all-inclusive rate confirmed before you book — no surge pricing',
      'Real-time flight tracking with 45 minutes of free wait time on domestic arrivals',
      'Chauffeur waiting at BWI baggage claim with a name sign',
      'Service to downtown Columbia, Lake Kittamaqundi and surrounding village centers',
      'Wedding guest shuttle coordination for Columbia-area events',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'From BWI baggage claim to Columbia',
        paragraphs: [
          'Your chauffeur tracks the inbound flight and adjusts pickup timing for any delay, holding a name sign at baggage claim.',
          'The drive to Columbia runs via I-95 and MD-32, a short, familiar route for our chauffeurs who cover Howard County regularly.',
          'BWI\'s short distance from Columbia also makes this one of the easier routes in our network to run as a round trip, with the same chauffeur handling both the arrival pickup and a scheduled return days later — useful for a business traveler based in Columbia who prefers one point of contact for the whole visit rather than booking two separate one-way trips.',
        ],
      },
      {
        h2: 'Arriving in Columbia',
        paragraphs: [
          'Columbia\'s village-center road layout, built around curving parkways rather than a conventional grid, is one our chauffeurs plan for in advance rather than relying only on GPS for last-minute turns.',
          'See our Columbia Wedding Limo Service page for guest-shuttle coordination tied to a specific Columbia-area wedding.',
          'Downtown Columbia\'s Merriweather Post Pavilion also draws a significant evening crowd for concerts in season, and a BWI arrival timed close to a show night means our chauffeurs build extra time into the drop-off for venue-area traffic rather than quoting the same drive time year-round.',
        ],
      },
      {
        h2: 'Booking your BWI to Columbia transfer',
        paragraphs: [
          'Give us your flight number and drop-off address, and we will confirm a flat rate and vehicle before you travel.',
          'Call (877) 609-1919 or request a free quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How much does a car service from BWI to Columbia cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and drop-off address. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from BWI to Columbia?',
        a: 'About 20 to 30 minutes for the 14-mile trip via I-95 and MD-32, depending on traffic.',
      },
      {
        q: 'Do you track my flight for delays?',
        a: 'Yes. Every BWI pickup is flight-tracked, and your chauffeur adjusts to your actual arrival time.',
      },
      {
        q: 'Can you coordinate a guest shuttle for a Columbia wedding?',
        a: 'Yes, a Sprinter van on a fixed schedule works well for wedding guests arriving through BWI.',
      },
      {
        q: 'Is this route available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning arrivals.',
      },
    ],
    related: [
      { label: 'Columbia Limo Service', to: '/limo/columbia-limo-service' },
      { label: 'Columbia, MD Wedding Limo Service', to: '/columbia-md-wedding-limo-service' },
      { label: 'Columbia, MD Prom Limo Service', to: '/columbia-md-prom-limo-service' },
      { label: 'Ellicott City Limo Service', to: '/ellicott-city-limo-service' },
      { label: 'BWI Airport Limo', to: '/limo/bwi-airport-limo' },
      { label: 'Live! Casino & Hotel Maryland Transportation', to: '/live-casino-hotel-maryland-transportation' },
    ],
    schema: { areaServed: ['Columbia, MD', 'Howard County, MD'], serviceType: 'Airport transfer' },
  },
];
