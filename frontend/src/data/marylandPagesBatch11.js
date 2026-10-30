// Batch 11 (2026-10-23, SEO expansion round 6): 10 new pages — 3 Dulles-
// corridor corporate pages for cities that already have a general city page
// but no corporate variant (Sterling, Chantilly, Herndon); an Annapolis
// corporate page (the city already has wedding/general pages but no
// corporate one); 2 city+wedding pages for cities that had a general page
// but no wedding variant (Ellicott City, Great Falls); a new industry-
// vertical corporate page (nonprofits, associations & NGOs — distinct from
// the healthcare/law-firm/government-contractor/financial-services verticals
// already covered in Batch 10); and 3 real DC-area venue pages not covered
// by any prior batch (Arena Stage, Signature Theatre, Topgolf). Same entry
// shape as MARYLAND_PAGES / MARYLAND_BATCH3-10.
const VEHICLES = [
  { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo travelers and couples' },
  { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'executive and VIP travel' },
  { name: 'Lincoln Navigator', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
  { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
  { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
  { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'weddings, prom and special occasions' },
];

export const MARYLAND_BATCH11 = [
  // ---------------------------------------------------------------------
  // DULLES CORRIDOR CORPORATE PAGES (cities with a general page but no
  // corporate variant)
  // ---------------------------------------------------------------------
  {
    slug: 'sterling-va-corporate-car-service',
    type: 'service',
    name: 'Sterling Corporate Car Service',
    badge: 'Corporate Car Service',
    h1: 'Sterling, VA Corporate Car Service',
    metaTitle: 'Sterling VA Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service in Sterling, VA: executive sedans and Dulles transfers for Data Center Alley and One Loudoun employers. Call (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '7 mi · 12–18 minutes' },
      { label: 'To Reagan (DCA)', value: '30 mi · 40–55 minutes' },
      { label: 'To BWI', value: '58 mi · 70–90 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Sterling anchors one of the densest concentrations of data centers on the planet — Loudoun County\'s "Data Center Alley" runs along Route 28 and the Dulles Greenway corridor, feeding a daily flow of visiting engineers, auditors, vendors and executives into campuses most visitors have never heard of by name. DCA Limos runs executive sedans, airport transfers and Sprinter vans for that workforce, with chauffeurs who already know the access procedures most data-center campuses require.',
      'One Loudoun\'s office towers add a second, more conventional corporate base nearby, and both clusters sit a genuinely fast 7 miles from Dulles International — a 12-to-18-minute transfer that makes a same-day in-and-out visit realistic for a vendor or auditor flying in for a single meeting.',
    ],
    highlights: [
      'Experience with Data Center Alley campus access and visitor check-in procedures',
      'Daily executive sedan service for One Loudoun offices and Route 28 corporate campuses',
      'Dulles transfers in as little as 12–18 minutes for same-day vendor and auditor visits',
      'Sprinter vans for visiting technical teams, auditors and conference delegations',
      'Corporate accounts with monthly invoicing and a dedicated dispatch contact',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Built for Data Center Alley\'s visitor traffic',
        paragraphs: [
          'Data-center campuses along Route 28 run their own visitor registration and badge procedures, often requiring advance notice of a vehicle and driver before a gate will clear anyone through. We collect that information at booking, the same way we handle other access-controlled sites across our coverage area, so a chauffeur isn\'t the reason a vendor visit starts late.',
          'One Loudoun\'s mixed-use office and retail development sits a short drive away, and our chauffeurs know which buildings restrict street-level pickup during business hours versus which have dedicated loading zones.',
        ],
      },
      {
        h2: 'Fast Dulles transfers for same-day visits',
        paragraphs: [
          'A 12-to-18-minute run to Dulles means a vendor, auditor or technical specialist flying in for a single meeting can realistically land, meet and fly out the same day — something that is much harder to pull off reliably with rideshare, which does not guarantee a vehicle is waiting when the meeting ends early or runs long.',
          'Every airport transfer is flight-tracked with complimentary wait time, so a delayed inbound flight never turns into a missed pickup at the gate.',
        ],
      },
      {
        h2: 'Standing accounts for Sterling\'s tech and corporate base',
        paragraphs: [
          'Data-center operators and Route 28 corporate tenants are among our most consistent corporate-account clients, generally because the volume of recurring vendor, auditor and executive travel makes trip-by-trip booking impractical. Monthly invoicing with itemized, campus-coded trip detail is standard.',
          'Call (877) 609-1919 or request a quote online to set up a Sterling corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you clear vehicles through a data center\'s visitor security?',
        a: 'Yes. We collect driver and vehicle details at booking and confirm whatever registration information a specific Data Center Alley campus requires before your chauffeur arrives at the gate.',
      },
      {
        q: 'How fast is the transfer from Sterling to Dulles?',
        a: 'About 12 to 18 minutes via Route 28 or the Dulles Greenway, which makes a same-day fly-in-fly-out vendor or auditor visit realistic.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing in Sterling?',
        a: 'Yes. Most of our Sterling clients — including data-center operators and One Loudoun-based companies — use a standing account with monthly invoicing and one dispatch contact.',
      },
      {
        q: 'Can you provide a Sprinter van for a visiting technical team?',
        a: 'Yes. Our Sprinter vans keep a visiting engineering, audit or conference team together for a full day of Sterling-area meetings on one coordinated schedule.',
      },
      {
        q: 'Is Sterling corporate car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning Dulles departures and late vendor-visit pickups.',
      },
    ],
    related: [
      { label: 'Sterling, VA Limo Service', to: '/sterling-va-limo-service' },
      { label: 'Chantilly Corporate Car Service', to: '/chantilly-corporate-car-service' },
      { label: 'Herndon Corporate Car Service', to: '/herndon-corporate-car-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Topgolf Corporate Outing Transportation', to: '/topgolf-dc-transportation' },
    ],
    schema: { areaServed: ['Sterling, VA', 'Loudoun County, VA'], serviceType: 'Corporate car service' },
  },
  {
    slug: 'chantilly-corporate-car-service',
    type: 'service',
    name: 'Chantilly Corporate Car Service',
    badge: 'Corporate Car Service',
    h1: 'Chantilly, VA Corporate Car Service',
    metaTitle: 'Chantilly VA Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service in Chantilly, VA: executive sedans, Dulles Expo Center and conference transfers minutes from Dulles. Call (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '6 mi · 12–18 minutes' },
      { label: 'To Reagan (DCA)', value: '28 mi · 40–55 minutes' },
      { label: 'To BWI', value: '55 mi · 70–85 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Chantilly sits right outside Dulles International\'s back gate, and that proximity has built a corporate base around it: hotel-adjacent businesses, the Dulles Expo Center\'s steady calendar of trade shows and conferences, and a cluster of government-contracting and technology offices along Route 28. DCA Limos runs executive sedans, airport transfers and Sprinter vans for all of it, with chauffeurs who time pickups around Expo Center load-in and move-out schedules rather than treating every event the same.',
      'At 6 miles and 12 to 18 minutes from Dulles, Chantilly offers one of the fastest airport connections in our entire network — a real advantage for conference exhibitors and visiting executives whose whole trip is built around a tight flight window.',
    ],
    highlights: [
      'Dulles Expo Center trade-show and conference transportation, timed to load-in and move-out',
      'Daily executive sedan service for Route 28 government-contracting and technology offices',
      'Dulles transfers in as little as 12–18 minutes — right outside the airport\'s back gate',
      'Sprinter vans for exhibitor teams, conference delegations and corporate groups',
      'Corporate accounts with monthly invoicing and a dedicated dispatch contact',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Dulles Expo Center conference and trade-show travel',
        paragraphs: [
          'The Dulles Expo Center runs a steady year-round calendar of trade shows, conferences and corporate events, each with its own load-in, exhibitor and attendee traffic pattern. Our chauffeurs plan Chantilly pickups around those schedules rather than treating an Expo Center transfer like an ordinary hotel run, which matters most on the heaviest move-in and move-out days.',
          'Exhibitor teams flying in for a multi-day show typically book the same chauffeur and vehicle for the full stretch, simplifying both the schedule and the invoice to one line item.',
        ],
      },
      {
        h2: 'Government contractors and technology offices along Route 28',
        paragraphs: [
          'Chantilly\'s Route 28 corridor carries a steady base of government-contracting and technology-company offices that overlap closely with Dulles\'s own gravity — many employees and visiting staff fly in and out on same-day or overnight trips. A fast Dulles transfer keeps that pattern realistic rather than theoretical.',
          'Corporate accounts with monthly invoicing are standard among these clients, particularly for recurring visitor and executive travel.',
        ],
      },
      {
        h2: 'Standing accounts and group transportation',
        paragraphs: [
          'A Sprinter van keeps a conference delegation or exhibitor team together for a full day between the Expo Center, nearby hotels and the airport, without splitting the group into separate rideshares arriving at different times.',
          'Call (877) 609-1919 or request a quote online to set up a Chantilly corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you handle transportation for a Dulles Expo Center trade show?',
        a: 'Yes. We regularly run exhibitor and attendee transportation for Dulles Expo Center events, timing pickups around load-in and move-out schedules rather than a generic fixed time.',
      },
      {
        q: 'How fast is the transfer from Chantilly to Dulles?',
        a: 'About 12 to 18 minutes — Chantilly sits right outside the airport\'s back gate, making it one of the fastest Dulles connections in our coverage area.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing in Chantilly?',
        a: 'Yes. Most of our Chantilly clients — including Route 28 government contractors and Expo Center-adjacent businesses — use a standing account with monthly invoicing.',
      },
      {
        q: 'Can you provide a Sprinter van for an exhibitor or conference team?',
        a: 'Yes. Our Sprinter vans keep exhibitor and conference teams together for the full length of a multi-day show.',
      },
      {
        q: 'Is Chantilly corporate car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early move-in days and late show-floor teardowns.',
      },
    ],
    related: [
      { label: 'Chantilly Limo Service', to: '/chantilly-limo-service' },
      { label: 'Sterling, VA Corporate Car Service', to: '/sterling-va-corporate-car-service' },
      { label: 'Herndon Corporate Car Service', to: '/herndon-corporate-car-service' },
      { label: 'Udvar-Hazy Center Transportation', to: '/udvar-hazy-center-transportation' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
    ],
    schema: { areaServed: ['Chantilly, VA', 'Fairfax County, VA'], serviceType: 'Corporate car service' },
  },
  {
    slug: 'herndon-corporate-car-service',
    type: 'service',
    name: 'Herndon Corporate Car Service',
    badge: 'Corporate Car Service',
    h1: 'Herndon, VA Corporate Car Service',
    metaTitle: 'Herndon VA Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service in Herndon, VA: executive sedans and Dulles transfers for Worldgate and Silver Line tech-corridor offices. (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '7 mi · 12–20 minutes' },
      { label: 'To Reagan (DCA)', value: '22 mi · 35–45 minutes' },
      { label: 'To BWI', value: '48 mi · 60–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Herndon sits inside the Dulles Toll Road technology corridor, where Worldgate Centre\'s office towers and the Herndon Silver Line Metro station anchor a steady base of tech, consulting and government-contracting employers. DCA Limos runs executive sedans, airport transfers and Sprinter vans for that base, with chauffeurs who route around Toll Road rush-hour backups and know which Worldgate buildings restrict street-level access after hours.',
      'Dulles is just 7 miles out — a 12-to-20-minute transfer — making Herndon one of the fastest airport connections in our network for visiting executives and consultants on tight meeting schedules.',
    ],
    highlights: [
      'Daily executive sedan service for Worldgate Centre and Dulles Toll Road corridor offices',
      'Dulles transfers in as little as 12–20 minutes for same-day visiting executives',
      'Chauffeurs who know the Herndon Silver Line Metro station and Toll Road traffic patterns',
      'Sprinter vans for visiting consulting teams, contractor delegations and conference groups',
      'Corporate accounts with monthly invoicing and a dedicated dispatch contact',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Serving Worldgate and the tech corridor',
        paragraphs: [
          'Worldgate Centre\'s office towers house a mix of technology, consulting and government-contracting tenants, many with visiting staff and executives flying through Dulles on tight schedules. Our chauffeurs know which towers restrict lobby or curb access outside business hours and plan around the Dulles Toll Road\'s predictable rush-hour slowdowns rather than discovering them mid-trip.',
          'The Herndon Silver Line Metro station adds a secondary pickup point for visitors arriving by rail from elsewhere in the corridor, which our dispatch coordinates alongside direct office and hotel pickups.',
        ],
      },
      {
        h2: 'Fast Dulles transfers for tight meeting schedules',
        paragraphs: [
          'A 12-to-20-minute run to Dulles supports same-day visiting executives and consultants whose entire trip is built around a narrow window between flights and meetings. Every transfer is flight-tracked with complimentary wait time, so an early landing or a late one does not change the plan.',
          'Standing weekly pickup schedules are common among Herndon-based consulting and technology clients, set up once rather than reconfirmed before every trip.',
        ],
      },
      {
        h2: 'Group travel and standing accounts',
        paragraphs: [
          'A Sprinter van keeps a visiting consulting or contractor team together for a full day of Worldgate-area meetings, rather than splitting the group across separate rideshares. Corporate accounts come with monthly invoicing and priority scheduling.',
          'Call (877) 609-1919 or request a quote online to set up a Herndon corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you serve Worldgate Centre and the Herndon tech corridor?',
        a: 'Yes. We run daily executive sedan service for Worldgate Centre and the broader Dulles Toll Road corridor, and know which buildings restrict after-hours street access.',
      },
      {
        q: 'How fast is the transfer from Herndon to Dulles?',
        a: 'About 12 to 20 minutes, making Herndon one of the fastest Dulles connections in our coverage area for same-day visiting executives.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing in Herndon?',
        a: 'Yes. Most of our Herndon clients — including Worldgate-based consulting and technology firms — use a standing account with monthly invoicing and one dispatch contact.',
      },
      {
        q: 'Can you provide a Sprinter van for a visiting consulting team?',
        a: 'Yes. Our Sprinter vans keep visiting consulting or contractor teams together for a full day of Herndon-area meetings.',
      },
      {
        q: 'Is Herndon corporate car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning Dulles departures.',
      },
    ],
    related: [
      { label: 'Herndon Limo Service', to: '/herndon-limo-service' },
      { label: 'Sterling, VA Corporate Car Service', to: '/sterling-va-corporate-car-service' },
      { label: 'Chantilly Corporate Car Service', to: '/chantilly-corporate-car-service' },
      { label: 'Reston Corporate Car Service', to: '/reston-corporate-car-service' },
      { label: 'Tysons Corporate Car Service', to: '/tysons-corporate-car-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Herndon, VA', 'Fairfax County, VA'], serviceType: 'Corporate car service' },
  },
  // ---------------------------------------------------------------------
  // ANNAPOLIS CORPORATE (existing wedding + general pages, no corporate one)
  // ---------------------------------------------------------------------
  {
    slug: 'annapolis-corporate-car-service',
    type: 'service',
    name: 'Annapolis Corporate Car Service',
    badge: 'Corporate Car Service',
    h1: 'Annapolis, MD Corporate Car Service',
    metaTitle: 'Annapolis MD Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service in Annapolis, MD: executive sedans for state government, insurance firms and Naval Academy visitors. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '32 mi · 50–65 minutes' },
      { label: 'To BWI', value: '25 mi · 30–40 minutes' },
      { label: 'To Dulles (IAD)', value: '55 mi · 70–90 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'As Maryland\'s state capital, Annapolis carries a daily flow of legislators, state agency staff, lobbyists and visiting officials around State Circle and the State House — business that peaks sharply during the General Assembly\'s January-to-April session. The city is also home to a cluster of insurance and financial-services companies headquartered downtown, and to the United States Naval Academy, which draws steady institutional and visiting-family travel of its own. DCA Limos runs executive sedans, airport transfers and Sprinter vans for all of it.',
      'BWI is the fastest airport option from Annapolis at 25 miles and 30 to 40 minutes, with Reagan National a common second choice for Capitol Hill-adjacent business travel. Every transfer is flight-tracked with complimentary wait time, and our chauffeurs plan around the Spa Creek and Eastport drawbridges, which can briefly hold up traffic for boat passage at unpredictable times.',
    ],
    highlights: [
      'Experience with State Circle and State House-area pickups during the General Assembly session',
      'Daily executive sedan service for downtown Annapolis insurance and financial-services firms',
      'Naval Academy visitor and base-access coordination for official and family travel',
      'Drawbridge timing built into every Annapolis pickup and drop-off schedule',
      'Corporate accounts with monthly invoicing and a dedicated dispatch contact',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'State government and General Assembly session travel',
        paragraphs: [
          'The Maryland General Assembly\'s session runs roughly January through April, and that window sharply increases demand for reliable State Circle-area pickups among legislators, agency staff, lobbyists and visiting officials. We plan around the historic district\'s parking restrictions and one-way streets, which get tighter the closer a pickup is to the State House.',
          'Outside session, state agency staff and visiting officials still generate a steady base of airport transfer and point-to-point demand that a standing corporate account simplifies considerably.',
        ],
      },
      {
        h2: 'Insurance and financial-services firms downtown',
        paragraphs: [
          'Annapolis is home to a notable cluster of insurance and financial-services company headquarters and regional offices downtown, generating recurring executive travel and visiting-client transportation that our sedans and SUVs cover daily.',
          'A flat-rate, flight-tracked BWI transfer is the most common single trip we run for this base, typically 30 to 40 minutes door to gate.',
        ],
      },
      {
        h2: 'Naval Academy and institutional travel',
        paragraphs: [
          'Beyond commencement and Commissioning Week, the Naval Academy generates year-round institutional travel — visiting officials, conference attendees and family travel tied to Academy events — and our chauffeurs are experienced with the base\'s visitor-gate registration requirements.',
          'Call (877) 609-1919 or request a quote online to set up an Annapolis corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you handle pickups near the State House during the legislative session?',
        a: 'Yes. We plan around State Circle\'s parking restrictions and one-way streets, which tighten considerably during the General Assembly\'s January-to-April session.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing in Annapolis?',
        a: 'Yes. Most of our Annapolis corporate clients — including insurance firms, financial-services companies and state agency travelers — use a standing account with monthly invoicing.',
      },
      {
        q: 'How long is the ride from Annapolis to BWI, DCA or Dulles?',
        a: 'BWI runs about 30–40 minutes, Reagan National about 50–65 minutes and Dulles about 70–90 minutes, depending on traffic and drawbridge timing.',
      },
      {
        q: 'Can you coordinate Naval Academy visitor or official travel?',
        a: 'Yes. Our chauffeurs are experienced with the Academy\'s visitor-gate registration requirements for both official and family travel.',
      },
      {
        q: 'Is Annapolis corporate car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early BWI departures during session.',
      },
    ],
    related: [
      { label: 'Annapolis Wedding Limo Service', to: '/annapolis-wedding-limo-service' },
      { label: 'Annapolis Limo Service', to: '/limo/annapolis-limo-service' },
      { label: 'US Naval Academy Transportation', to: '/us-naval-academy-transportation' },
      { label: 'DCA to Annapolis', to: '/dca-to-annapolis' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Financial Services Corporate Car Service', to: '/financial-services-corporate-car-service' },
    ],
    schema: { areaServed: ['Annapolis, MD', 'Anne Arundel County, MD'], serviceType: 'Corporate car service' },
  },
  // ---------------------------------------------------------------------
  // CITY + WEDDING (cities with a general page but no wedding variant)
  // ---------------------------------------------------------------------
  {
    slug: 'ellicott-city-wedding-limo-service',
    type: 'service',
    name: 'Ellicott City Wedding Limo',
    badge: 'Wedding Transportation',
    h1: 'Ellicott City, MD Wedding Limo Service',
    metaTitle: 'Ellicott City MD Wedding Limo Service | DCA Limos',
    metaDescription:
      'Wedding limo service in Ellicott City, MD: Turf Valley Resort, historic Main Street venues and stretch limos. Flat rates, 24/7. (877) 609-1919.',
    stats: [
      { label: 'To BWI', value: '15 mi · 20–30 minutes' },
      { label: 'To Reagan (DCA)', value: '32 mi · 45–60 minutes' },
      { label: 'To Dulles (IAD)', value: '48 mi · 65–85 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Ellicott City\'s granite Main Street and the Patapsco River valley around it have become one of Howard County\'s most requested wedding backdrops, whether the day centers on Turf Valley Resort\'s ballrooms and golf-course lawns or a smaller historic-district venue tucked among the 1800s storefronts. DCA Limos drives Ellicott City weddings in a stretch limousine or Sprinter van, with chauffeurs who know Main Street\'s steep, narrow one-way grid and exactly where a limousine can and cannot stage for photos.',
      'Main Street\'s historic district has real parking and width limits that a wedding-day timeline needs to account for — we build staging and photo-stop locations into the plan in advance rather than discovering the street\'s constraints with a bridal party already dressed and waiting.',
    ],
    highlights: [
      'Experience with Turf Valley Resort ballroom and golf-course wedding logistics',
      'Historic Main Street staging and photo-stop planning around the district\'s narrow streets',
      'Stretch limousine for the couple and wedding party; Sprinter van for guest shuttles',
      'Guest shuttle service from Baltimore- and Columbia-area hotel blocks',
      'Rate confirmed before you book; wedding bookings cancel free up to 12 hours before',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Turf Valley Resort weddings',
        paragraphs: [
          'Turf Valley\'s ballrooms and golf-course grounds host weddings large enough to need guest shuttle coordination on top of the couple\'s own limousine, and our chauffeurs plan staging around the resort\'s separate ceremony and reception spaces so the timeline does not slip between the two.',
          'A Sprinter van is the common choice for shuttling out-of-town guests from nearby hotels to the resort and back, run on a fixed schedule so no one is left arranging their own ride at the end of the night.',
        ],
      },
      {
        h2: 'Historic Main Street venue weddings',
        paragraphs: [
          'A handful of Ellicott City\'s historic-district venues host smaller weddings directly on or just off Main Street, where width and parking are genuinely limited and a wedding-day limousine needs a pre-planned staging spot rather than a curbside guess. Our chauffeurs know which blocks allow a brief stop for photos and which require staging a block away.',
          'The B&O Railroad Museum at the bottom of the hill is a popular photo backdrop that fits easily into a limousine\'s route between ceremony and reception stops.',
        ],
      },
      {
        h2: 'Guest shuttles and booking',
        paragraphs: [
          'Baltimore and Columbia both sit close enough to Ellicott City that out-of-town wedding guests frequently stay at hotels in either direction, and a single consolidated Sprinter van shuttle schedule is simpler and cheaper per person than guests arranging individual rides.',
          'Call (877) 609-1919 or request a quote online — Ellicott City wedding bookings cancel free up to 12 hours before pickup.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you handle weddings at Turf Valley Resort?',
        a: 'Yes. We regularly coordinate Turf Valley ballroom and golf-course weddings, including guest shuttle service from nearby hotels.',
      },
      {
        q: 'Can a limousine navigate Main Street\'s historic district for photos?',
        a: 'Yes, with planning. Main Street is narrow with limited parking, so we identify a brief photo-stop location and a staging spot in advance rather than guessing curbside on the day.',
      },
      {
        q: 'Do you provide guest shuttles from Baltimore or Columbia hotels?',
        a: 'Yes. A Sprinter van on a fixed schedule is the most common and most cost-effective way to move out-of-town wedding guests between hotels and the venue.',
      },
      {
        q: 'What is the cancellation policy for an Ellicott City wedding booking?',
        a: 'Wedding and special-event bookings, including Sprinter vans and limousines, cancel free of charge up to 12 hours before pickup.',
      },
      {
        q: 'Is Ellicott City wedding transportation available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including late-night reception pickups.',
      },
    ],
    related: [
      { label: 'Ellicott City Limo Service', to: '/ellicott-city-limo-service' },
      { label: 'Columbia, MD Prom Limo Service', to: '/columbia-md-prom-limo-service' },
      { label: 'Rockville Wedding Limo Service', to: '/rockville-wedding-limo-service' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Baltimore Limo Service', to: '/limo/baltimore-limo-service' },
      { label: 'How Many Limos for a Wedding Party? (blog)', to: '/blog/how-many-limos-for-wedding-party' },
    ],
    schema: { areaServed: ['Ellicott City, MD', 'Howard County, MD'], serviceType: 'Wedding limo service' },
  },
  {
    slug: 'great-falls-va-wedding-limo-service',
    type: 'service',
    name: 'Great Falls Wedding Limo',
    badge: 'Wedding Transportation',
    h1: 'Great Falls, VA Wedding Limo Service',
    metaTitle: 'Great Falls VA Wedding Limo Service | DCA Limos',
    metaDescription:
      'Wedding limo service in Great Falls, VA: private estate ceremonies, Georgetown Pike venues and discreet chauffeurs. (877) 609-1919 for a quote.',
    stats: [
      { label: 'To Dulles (IAD)', value: '13 mi · 20–30 minutes' },
      { label: 'To Reagan (DCA)', value: '20 mi · 30–40 minutes' },
      { label: 'To BWI', value: '50 mi · 65–80 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Great Falls\' large private estates and horse-country properties along Georgetown Pike have made it a favorite setting for weddings that want privacy without leaving Northern Virginia — a backyard ceremony on a wooded estate, a tented reception on an unmarked gravel lane, or a smaller gathering near Great Falls Park itself. DCA Limos drives these weddings with the same discretion our everyday Great Falls clients expect, in a stretch limousine or Sprinter van, with chauffeurs comfortable navigating winding private lanes that do not show up cleanly on GPS.',
      'Because many Great Falls wedding venues are private residences rather than commercial event spaces, we confirm exact gate codes, driveway turning room and guest parking arrangements with the couple or planner well before the day, rather than discovering a tight gravel driveway with a limousine full of groomsmen.',
    ],
    highlights: [
      'Discreet chauffeurs experienced with private-estate and gated-property wedding logistics',
      'Advance confirmation of gate codes, driveway access and guest parking for private venues',
      'Stretch limousine for the couple and wedding party; Sprinter van for guest shuttles',
      'Guest shuttle coordination from Tysons- and McLean-area hotel blocks',
      'Rate confirmed before you book; wedding bookings cancel free up to 12 hours before',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Private estate and backyard weddings',
        paragraphs: [
          'A Great Falls estate wedding usually means a private driveway rather than a venue\'s own parking lot, and getting the logistics right means confirming turning room for a Sprinter van or stretch limousine, gate codes, and exactly where guest vehicles and the wedding party vehicle should each park, well before the ceremony.',
          'Our chauffeurs bring the same discretion to a wedding booking that our daily private-estate clients expect, which matters on a day with family, caterers and photographers all moving through the same property.',
        ],
      },
      {
        h2: 'Georgetown Pike and Great Falls Park-area venues',
        paragraphs: [
          'A handful of venues along or near Georgetown Pike host wedding receptions with easier commercial access than a private estate, and our chauffeurs know the Pike\'s winding, often unmarked turns well enough to arrive on schedule without relying solely on GPS.',
          'Great Falls Park itself draws couples for engagement and bridal-party photos along the river gorge, which we build into the day\'s route as a dedicated stop when requested.',
        ],
      },
      {
        h2: 'Guest shuttles and booking',
        paragraphs: [
          'Out-of-town wedding guests commonly stay in nearby Tysons or McLean, and a Sprinter van shuttle on a fixed schedule is the simplest way to move that group to and from a Great Falls estate or venue without a line of individual cars searching for parking on a private lane.',
          'Call (877) 609-1919 or request a quote online — Great Falls wedding bookings cancel free up to 12 hours before pickup.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can a limousine or Sprinter van reach a private estate wedding venue?',
        a: 'Yes, with advance planning. We confirm gate codes, driveway turning room and parking arrangements with the couple or planner before the day, since many Great Falls venues are private residences.',
      },
      {
        q: 'Do you provide guest shuttles from Tysons or McLean hotels?',
        a: 'Yes. A Sprinter van on a fixed schedule is the most common way to shuttle out-of-town guests to a Great Falls wedding venue.',
      },
      {
        q: 'Are your chauffeurs discreet for a private-estate wedding?',
        a: 'Yes. We bring the same discretion our daily private-estate clients expect to every Great Falls wedding booking.',
      },
      {
        q: 'Can you stop at Great Falls Park for photos?',
        a: 'Yes. Great Falls Park is a popular photo stop for engagement and bridal-party pictures, and we build it into the day\'s route when requested.',
      },
      {
        q: 'What is the cancellation policy for a Great Falls wedding booking?',
        a: 'Wedding and special-event bookings, including Sprinter vans and limousines, cancel free of charge up to 12 hours before pickup.',
      },
    ],
    related: [
      { label: 'Great Falls, VA Limo Service', to: '/great-falls-va-limo-service' },
      { label: 'McLean Corporate Car Service', to: '/mclean-corporate-car-service' },
      { label: 'Vienna, VA Corporate Car Service', to: '/vienna-va-corporate-car-service' },
      { label: 'Leesburg Wedding Limo Service', to: '/leesburg-wedding-limo-service' },
      { label: 'Arlington Wedding Limo Service', to: '/arlington-wedding-limo-service' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
    ],
    schema: { areaServed: ['Great Falls, VA', 'Fairfax County, VA'], serviceType: 'Wedding limo service' },
  },
  // ---------------------------------------------------------------------
  // NEW INDUSTRY VERTICAL
  // ---------------------------------------------------------------------
  {
    slug: 'nonprofit-association-corporate-car-service',
    type: 'service',
    name: 'Nonprofit & Association Car Service',
    badge: 'Industry Car Service',
    h1: 'Nonprofit & Association Corporate Car Service in Washington DC',
    metaTitle: 'Nonprofit & Association Car Service | DC',
    metaDescription:
      'Chauffeured transportation for DC nonprofits, trade associations and NGOs: Hill-visit shuttles, fly-ins and gala transportation. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'K Street, Dupont Circle, DC-wide' },
      { label: 'Specialty', value: 'Fly-ins, Hill visits & galas' },
      { label: 'Pricing', value: 'Flat rate or monthly account' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'Washington is home to one of the largest concentrations of trade associations, nonprofits and NGOs anywhere in the country, clustered around K Street, Dupont Circle and the blocks near Capitol Hill, and a large share of that sector\'s busiest days revolve around getting member delegations, board members and staff from a hotel to a string of Hill visits on a tight schedule. DCA Limos runs executive sedans and Sprinter vans built around that specific logistics problem, alongside standard airport transfers and gala or fundraiser transportation.',
      'Member fly-in weeks — when an association brings dozens or hundreds of members to DC for a few days of coordinated Hill visits — are the single hardest logistics day our nonprofit and association clients face, and the one where a pre-planned fleet of Sprinter vans makes the single biggest difference between a smooth day and a chaotic one.',
    ],
    highlights: [
      'Sprinter van fleets for member fly-in weeks and coordinated Capitol Hill visit days',
      'Executive sedans for board members, executive directors and visiting delegation leaders',
      'Gala, fundraiser and annual-dinner transportation with timed arrivals',
      'Corporate accounts with monthly invoicing and itemized, event-coded trip detail',
      'Airport transfers to DCA, Dulles and BWI with flight tracking and complimentary wait time',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Member fly-ins and Capitol Hill visit days',
        paragraphs: [
          'A member fly-in week asks a lot of ground transportation: dozens of members arriving from out of town, grouped into teams, each team needing to hit several Hill office visits on a schedule that leaves little room for a late vehicle. We build a Sprinter van fleet and sedan pool around the association\'s own visit schedule, briefed in advance on which offices each group is visiting and in what order.',
          'Staging near the Capitol complex requires working around the same street closures and security perimeters that affect every other visitor to the Hill, and our chauffeurs plan routes and staging locations around that reality rather than discovering it mid-morning.',
        ],
      },
      {
        h2: 'Galas, fundraisers and annual dinners',
        paragraphs: [
          'Nonprofit and association galas and annual dinners typically need arrivals timed within a tight window — honorees, board chairs and keynote speakers arriving in sequence rather than all at once — and our dispatch coordinates that sequencing directly with the event planner.',
          'A stretch limousine or executive sedan for honored guests pairs easily with Sprinter van shuttles for staff and general attendees arriving from the same hotel block.',
        ],
      },
      {
        h2: 'Standing accounts for associations and NGOs',
        paragraphs: [
          'Associations and NGOs with a DC office or a recurring conference calendar typically move to a standing corporate account once annual travel volume justifies it, replacing per-trip booking with monthly invoicing and a single point of contact for scheduling fly-in weeks, board meetings and galas.',
          'Call (877) 609-1919 or request a quote online to set up a standing account or book a specific fly-in week.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you handle transportation for a multi-day member fly-in?',
        a: 'Yes. We build a Sprinter van and sedan fleet around your association\'s own Hill-visit schedule, briefed in advance on which offices each group is visiting.',
      },
      {
        q: 'Do you coordinate timed arrivals for a gala or annual dinner?',
        a: 'Yes. We work directly with your event planner to sequence arrivals for honorees, board chairs and keynote speakers rather than having everyone arrive at once.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing for nonprofits and associations?',
        a: 'Yes. Most of our nonprofit and association clients use a standing account with monthly invoicing and event-coded trip detail.',
      },
      {
        q: 'Can you stage vehicles near Capitol Hill during a visit day?',
        a: 'Yes. Our chauffeurs plan routes and staging locations around the Hill\'s street closures and security perimeters in advance of your visit day.',
      },
      {
        q: 'Is nonprofit and association car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early fly-in arrivals and late gala pickups.',
      },
    ],
    related: [
      { label: 'Law Firm & Lobbying Firm Car Service', to: '/law-firm-corporate-car-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'Dupont Circle Limo Service', to: '/dupont-circle-limo-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Washington, DC', 'K Street', 'Capitol Hill'], serviceType: 'Corporate car service' },
  },
  // ---------------------------------------------------------------------
  // VENUE PAGES
  // ---------------------------------------------------------------------
  {
    slug: 'arena-stage-transportation',
    type: 'event',
    name: 'Arena Stage',
    badge: 'DC-Area Landmark',
    h1: 'Limo & Car Service to Arena Stage, Washington DC',
    metaTitle: 'Arena Stage Transportation | Washington DC',
    metaDescription:
      'Chauffeured car service to Arena Stage on the Southwest Waterfront — date nights, opening nights and group theater outings. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '3 mi · 10–15 minutes' },
      { label: 'To Dulles (IAD)', value: '28 mi · 40–55 minutes' },
      { label: 'To BWI', value: '36 mi · 45–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Arena Stage\'s Mead Center, on the Southwest Waterfront just steps from the Wharf, is one of Washington\'s most respected regional theaters and a frequent stop for date nights, opening-night subscribers and group outings tied to a play or musical\'s run. DCA Limos runs chauffeured sedans, SUVs and limousines to the Mead Center\'s entrance, pairing easily with dinner at the Wharf beforehand or a nightcap along the waterfront after curtain.',
      'The Southwest Waterfront has filled in considerably over the past decade, and street parking near Arena Stage is limited on performance nights, especially when the Wharf itself has its own event drawing crowds the same evening — a curbside drop-off and a pickup timed to the curtain call avoids both problems entirely.',
    ],
    highlights: [
      'Door-to-door service to the Mead Center\'s Southwest Waterfront entrance',
      'Pickup timed to the performance\'s curtain call, with flexibility for a longer-than-scheduled show',
      'Easy pairing with dinner or drinks at the adjacent Wharf before or after the show',
      'Stretch limousines and sedans for date nights, anniversaries and subscriber outings',
      'Sprinter vans for theater groups, student outings and corporate subscription nights',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A chauffeur who knows the Southwest Waterfront',
        paragraphs: [
          'Arena Stage sits in the same stretch of Southwest DC as the Wharf, Nationals Park and the Navy Yard, an area that has grown dense enough that evening traffic and parking now vary considerably depending on what else is happening nearby the same night. Our chauffeurs check the broader Waterfront calendar, not just the Mead Center\'s own schedule, before planning a pickup route.',
          'The Mead Center has a dedicated drop-off area near its main entrance, and we stage there rather than relying on street parking that fills quickly on sold-out or opening nights.',
        ],
      },
      {
        h2: 'Pairing a show with dinner at the Wharf',
        paragraphs: [
          'Many Arena Stage patrons build an evening around dinner at one of the Wharf\'s restaurants before curtain, and a single chauffeured booking covers both stops — a dinner drop-off, a short wait or return trip to the restaurant area, and a final pickup timed to the show\'s end.',
          'For couples or small groups treating the night as a full evening out, a stretch limousine keeps the whole arc of the night, from dinner reservation to final pickup, on one reservation rather than several separate ones.',
        ],
      },
      {
        h2: 'Group and subscriber-night transportation',
        paragraphs: [
          'Theater groups, student outings and corporate subscription nights are common at Arena Stage, and a Sprinter van keeps a group of ten to fourteen together for the full evening rather than arriving in a scattered handful of separate cars.',
          'Call (877) 609-1919 or request a quote online for your next Arena Stage performance.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Where does the chauffeur pick up and drop off at Arena Stage?',
        a: 'At the Mead Center\'s dedicated drop-off area near the main Southwest Waterfront entrance, rather than relying on limited street parking.',
      },
      {
        q: 'Can the pickup be timed to the end of the performance?',
        a: 'Yes. We time pickups to the curtain call and build in flexibility if a performance runs longer than its scheduled length.',
      },
      {
        q: 'Can you include a dinner stop at the Wharf before the show?',
        a: 'Yes. A single booking commonly covers a dinner drop-off at the Wharf, a short wait or return, and the final pickup after the show.',
      },
      {
        q: 'Do you provide group transportation for theater outings?',
        a: 'Yes. A Sprinter van is the common choice for theater groups, student outings and corporate subscription nights of ten to fourteen people.',
      },
      {
        q: 'Is Arena Stage transportation available for every performance, including matinees?',
        a: 'Yes — 24 hours a day, 365 days a year, for matinees, evening performances and opening nights alike.',
      },
    ],
    related: [
      { label: 'The Anthem / Wharf Transportation', to: '/the-anthem-wharf-transportation' },
      { label: 'Navy Yard Limo Service', to: '/navy-yard-limo-service' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'Nationals Park / Capital One Arena Game Day (blog)', to: '/blog/nationals-park-capital-one-arena-game-day-car-service' },
      { label: 'Union Station DC Transportation', to: '/union-station-dc-transportation' },
      { label: 'Sports & Game Day Limo', to: '/limo/sports-game-day-limo' },
    ],
    schema: { areaServed: ['Washington, DC', 'Southwest Waterfront'], serviceType: 'Event transportation' },
  },
  {
    slug: 'signature-theatre-transportation',
    type: 'event',
    name: 'Signature Theatre',
    badge: 'DC-Area Landmark',
    h1: 'Limo & Car Service to Signature Theatre, Arlington VA',
    metaTitle: 'Signature Theatre Transportation | Arlington, VA',
    metaDescription:
      'Chauffeured car service to Signature Theatre in Shirlington, Arlington — opening nights, date nights and group theater outings. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '6 mi · 15–20 minutes' },
      { label: 'To Dulles (IAD)', value: '24 mi · 35–50 minutes' },
      { label: 'To BWI', value: '40 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Signature Theatre, tucked into the Shirlington Village shopping and dining district in Arlington, has built a national reputation for musicals and new works in a setting far more intimate than the big downtown DC houses. DCA Limos runs chauffeured sedans, SUVs and limousines to Signature\'s Shirlington entrance, pairing naturally with dinner at one of the village\'s restaurants before the show.',
      'Shirlington Village\'s parking garage fills up on popular show nights, particularly during a hit musical\'s run or a gala opening, and a curbside drop-off at Signature\'s own entrance skips the garage entirely — a real advantage for an evening already timed tightly around dinner reservations and a curtain time.',
    ],
    highlights: [
      'Door-to-door service to Signature Theatre\'s Shirlington Village entrance',
      'Pickup timed to curtain call, with flexibility for a longer-than-scheduled performance',
      'Easy pairing with dinner at Shirlington Village restaurants before the show',
      'Stretch limousines and sedans for date nights, anniversaries and gala opening nights',
      'Sprinter vans for theater groups, subscriber outings and corporate nights at the theater',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A chauffeur who knows Shirlington Village',
        paragraphs: [
          'Shirlington\'s walkable restaurant-and-theater district is a popular full-evening destination, which means its parking garage and street spaces fill well before curtain on a busy night. Our chauffeurs drop off directly at Signature\'s entrance and stage nearby for the return pickup, skipping the garage search entirely.',
          'Signature\'s two performance spaces and adjacent black-box stage occasionally run overlapping shows on the same night, so we confirm the specific entrance and expected end time for your performance before dispatching the pickup.',
        ],
      },
      {
        h2: 'Pairing a show with dinner in Shirlington',
        paragraphs: [
          'Shirlington Village\'s restaurant row makes a dinner-and-show evening especially easy to plan, and a single chauffeured booking covers the full arc: a dinner drop-off, time to eat, and the final pickup after curtain, without needing a car at all in between.',
          'For an anniversary, birthday or gala opening night, a stretch limousine or executive sedan adds a touch the rest of the evening matches.',
        ],
      },
      {
        h2: 'Group and subscriber-night transportation',
        paragraphs: [
          'Signature\'s subscriber base and group sales programs regularly fill a Sprinter van for ten to fourteen people attending the same performance together, arriving and leaving on one schedule rather than in separate cars searching Shirlington\'s garage individually.',
          'Call (877) 609-1919 or request a quote online for your next Signature Theatre performance.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Where does the chauffeur drop off at Signature Theatre?',
        a: 'Directly at Signature\'s Shirlington Village entrance, skipping the village parking garage, which fills quickly on busy show nights.',
      },
      {
        q: 'Can the pickup be timed to the end of the performance?',
        a: 'Yes. We confirm your specific performance\'s expected end time and build in flexibility for a show that runs long.',
      },
      {
        q: 'Can you include a dinner stop at a Shirlington restaurant before the show?',
        a: 'Yes. A single booking commonly covers a dinner drop-off, time to eat, and the final pickup after curtain.',
      },
      {
        q: 'Do you provide group transportation for theater subscriber nights?',
        a: 'Yes. A Sprinter van is the common choice for subscriber and group-sales outings of ten to fourteen people.',
      },
      {
        q: 'Is Signature Theatre transportation available for matinees and gala nights?',
        a: 'Yes — 24 hours a day, 365 days a year, for matinees, evening performances and gala opening nights alike.',
      },
    ],
    related: [
      { label: 'Crystal City Limo Service', to: '/crystal-city-limo-service' },
      { label: 'Pentagon City Limo Service', to: '/pentagon-city-limo-service' },
      { label: 'Clarendon Arlington Limo Service', to: '/clarendon-arlington-limo-service' },
      { label: 'Arlington Corporate Car Service', to: '/arlington-corporate-car-service' },
      { label: 'Arena Stage Transportation', to: '/arena-stage-transportation' },
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
    ],
    schema: { areaServed: ['Arlington, VA', 'Shirlington'], serviceType: 'Event transportation' },
  },
  {
    slug: 'topgolf-dc-transportation',
    type: 'event',
    name: 'Topgolf',
    badge: 'DC-Area Landmark',
    h1: 'Topgolf Corporate Outing Transportation in DC, MD & VA',
    metaTitle: 'Topgolf Transportation | DC, MD & VA',
    metaDescription:
      'Sprinter van and sedan transportation to Topgolf for corporate outings, team events and birthday parties across the DC area. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, MD & Northern VA' },
      { label: 'Specialty', value: 'Corporate outings & team events' },
      { label: 'Pricing', value: 'Flat rate or hourly' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'Topgolf\'s Loudoun County venue, minutes from Dulles, has become a go-to spot for corporate team outings, client entertainment and birthday parties that want something more active than a restaurant private room. DCA Limos runs Sprinter vans and executive sedans to Topgolf for groups coming from offices across Northern Virginia, Maryland and DC, keeping a team together for the drive out and, just as importantly, for the drive home after a few hours of drinks and driving range games.',
      'A corporate outing almost always means a group larger than any single car comfortably holds, plus the simple fact that company events involving alcohol are better handled with a chauffeur than with employees driving themselves — a Sprinter van solves both problems in one reservation, with a return trip already scheduled rather than left for everyone to sort out individually at the end of the night.',
    ],
    highlights: [
      'Sprinter vans that keep a corporate team or birthday group together for the full outing',
      'Scheduled return pickup, so no one needs to arrange a ride home after drinks',
      'Executive sedans for client-entertainment outings and smaller groups',
      'Corporate accounts with monthly invoicing for HR-organized team events',
      'Pickup and drop-off coordinated with your reserved bay time, not a generic fixed window',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Corporate team outings and client entertainment',
        paragraphs: [
          'A Topgolf outing is a common choice for a team-building event or client-entertainment afternoon precisely because it is more interactive than dinner alone, but that also means a larger group than fits in one or two cars, usually drawn from a single office or department. A Sprinter van keeps that group together for the drive out and avoids the awkward logistics of a scattered carpool.',
          'For a smaller client-entertainment outing — a handful of clients and a couple of account executives — an executive sedan or two covers the group just as comfortably, often paired with a dinner stop afterward at a restaurant near the bay.',
        ],
      },
      {
        h2: 'Scheduling around alcohol and the return trip',
        paragraphs: [
          'Topgolf bays serve drinks, and a corporate event that involves alcohol is a real liability consideration for whoever organized it — a scheduled chauffeured return removes that risk for the company rather than leaving it to individual judgment at the end of the night.',
          'We coordinate pickup around your reserved bay time rather than a generic fixed window, since bay sessions commonly run long when a group is having a good time.',
        ],
      },
      {
        h2: 'Birthday parties and standing corporate accounts',
        paragraphs: [
          'Beyond corporate use, Topgolf is a popular milestone-birthday outing for both adults and teens, and the same Sprinter van logistics apply — one reservation, one group, one scheduled return.',
          'Companies that run Topgolf outings as a recurring team event typically set up a standing account with monthly invoicing rather than booking each event individually. Call (877) 609-1919 or request a quote online.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can a Sprinter van fit our whole team for a Topgolf outing?',
        a: 'Yes. Our 14-passenger Sprinter vans are the most common choice for corporate Topgolf outings, keeping the group together for both the drive out and the return.',
      },
      {
        q: 'Do you schedule the return pickup around our bay time?',
        a: 'Yes. We coordinate pickup around your reserved bay session rather than a fixed window, since sessions often run longer than planned.',
      },
      {
        q: 'Is this a good option if our event includes drinks?',
        a: 'Yes — that is one of the main reasons companies book it. A scheduled chauffeured return removes the liability of employees driving themselves after a bay session that includes alcohol.',
      },
      {
        q: 'Do you offer corporate accounts for recurring Topgolf team events?',
        a: 'Yes. Companies that run Topgolf outings as a recurring event typically set up a standing account with monthly invoicing.',
      },
      {
        q: 'Can you also handle a birthday party group at Topgolf?',
        a: 'Yes. The same Sprinter van and scheduled-return approach works well for adult and teen birthday outings.',
      },
    ],
    related: [
      { label: 'Sterling, VA Corporate Car Service', to: '/sterling-va-corporate-car-service' },
      { label: 'Herndon Corporate Car Service', to: '/herndon-corporate-car-service' },
      { label: 'Sprinter Van Rental with Driver', to: '/sprinter-van-rental-with-driver' },
      { label: 'Corporate Holiday Party Transportation (blog)', to: '/blog/corporate-holiday-party-transportation-guide' },
      { label: 'Topgolf & Corporate Outings (blog)', to: '/blog/topgolf-corporate-outing-transportation-dc' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Loudoun County, VA', 'DC, MD & Northern VA'], serviceType: 'Event transportation' },
  },
];
