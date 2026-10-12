// 11 SEO Landing Pages — each targets a specific city/service/airport keyword cluster.
// Adding a new landing page: drop a new object in this array; routes & sitemap pick it up automatically.
// NOTE (2026-10-07): rockville/bethesda/silver-spring/frederick were removed from this array —
// they duplicated the richer /<slug> MarylandPage city pages. 301 redirects for /limo/<slug> ->
// /<slug> live in vercel.json.

export const LANDING_PAGES = [
  // ===== AIRPORTS =====
  {
    slug: 'dca-airport-limo',
    category: 'Airport Transportation',
    h1: 'DCA Airport Limo Service',
    metaTitle: 'DCA Airport Limo Service | #1 Rated Reagan National Car',
    metaDesc: 'Premium DCA airport limo service to/from Reagan National. 24/7 flight tracking, meet-and-greet & Mercedes fleet. Free quote — call (877) 609-1919 now.',
    hero: 'Luxury Reagan Airport Limo Service at Reagan National (DCA). On-time guaranteed, real-time flight tracking, professional chauffeurs.',
    image: '/images/airport-curbside.webp',
    intro: 'DCA Limos provides the most reliable DCA Airport Transportation to and from Ronald Reagan Washington National Airport (DCA). Whether you\'re a frequent business traveler or visiting the DC area, our professional DCA Chauffeur Service and luxury Mercedes fleet ensure you arrive on time, every time.',
    seoText: 'Looking for dependable DCA Airport Car Service? DCA Limos specializes in Reagan National Airport Transportation for business and leisure travelers across the region. Our Reagan National Airport limo service pairs licensed, background-checked chauffeurs with a late-model Mercedes fleet, real-time flight monitoring, and guaranteed on-time pickups. Whether you need a one-way DCA transfer, an hourly booking between meetings, or a late-night arrival pickup, every ride is quoted as one flat, all-inclusive rate — no surge pricing, no meters. We serve all of Washington DC, Maryland, and Northern Virginia, with meet-and-greet service at baggage claim and 45 minutes of complimentary wait time on every airport pickup.',
    highlights: [
      'Real-time flight tracking — we adjust pickup if your flight is delayed',
      'Meet & greet service at baggage claim',
      '45-minute complimentary wait time (60 minutes on international arrivals)',
      'Direct service to Maryland, DC & Northern Virginia',
      'Mercedes E-Class, S-Class, Escalade SUVs & Sprinter vans',
    ],
    sections: [
      {
        h2: 'Finding your chauffeur at DCA',
        paragraphs: [
          'Reagan National has two connected terminal buildings — Terminal 1, the older, smaller building, and Terminal 2, the larger hub formed when the former Terminals B and C merged, joined by a covered walkway called National Hall. Your chauffeur stages at the curb or inside baggage claim for whichever terminal your flight uses, confirmed against your boarding pass before you land.',
          'Departures run the same way in reverse: we back-time your pickup from your flight and DCA\'s recommended arrival window, accounting for traffic on the George Washington Parkway and the short hop across the Memorial or Roosevelt Bridge into the District — usually the most forgiving of the three area airports for timing, since it sits just across the river from downtown.',
        ],
      },
    ],
    relatedCities: ['Annapolis', 'Baltimore', 'Bethesda', 'Silver Spring', 'Rockville'],
  },
  {
    slug: 'bwi-airport-limo',
    category: 'Airport Transportation',
    h1: 'BWI Airport Limo Service',
    metaTitle: 'BWI Airport Limo Service | Baltimore Car Service 24/7',
    metaDesc: 'Top-rated BWI airport car service based minutes from the terminal. Flight tracking, flat rates, Mercedes fleet. Call (877) 609-1919 for a free quote.',
    hero: 'Premium BWI Thurgood Marshall airport limo service. Licensed & insured Maryland carrier.',
    image: '/images/airport-curbside.webp',
    intro: 'As specialists in Baltimore-Washington International Thurgood Marshall Airport (BWI) transportation, DCA Limos delivers punctual, luxury transfers throughout Maryland and beyond. Our Hanover, MD base puts us minutes from BWI — guaranteeing the fastest pickups in the region.',
    seoText: 'Our BWI airport car service is built around one promise: you will never miss a flight or wait at the curb. Based minutes from the terminal, DCA Limos tracks every arrival in real time and adjusts pickups automatically, so delayed flights never mean stranded travelers. Choose a Mercedes sedan for solo business trips, an Escalade for families, or a Sprinter van for groups of up to 13 with luggage. Every BWI transfer is one flat rate covering tolls, taxes, and gratuity, with door-to-door service throughout Maryland, Washington DC, and Virginia — corporate accounts enjoy monthly invoicing and priority dispatch.',
    highlights: [
      'Headquartered minutes from BWI — fastest pickups in MD',
      'Real-time flight monitoring & dynamic pickup adjustment',
      'Door-to-door service throughout Maryland, DC & VA',
      'Curbside or inside meet-and-greet options',
      'Corporate accounts with monthly invoicing available',
    ],
    sections: [
      {
        h2: 'Getting around BWI Marshall',
        paragraphs: [
          'BWI uses a single horseshoe-shaped terminal split into Concourses A through E, with Southwest Airlines anchoring the largest share of gates. The airport also connects directly to the BWI Rail Station, served by Amtrak and MARC commuter trains, via a short shuttle — useful context if your itinerary mixes a flight with a rail leg.',
          'Because our base in Hanover sits just off the BWI access road, we are typically one of the fastest chauffeur companies to respond to a same-day request near the airport, and we route around the I-195/Aviation Boulevard interchange at peak times when it backs up during the morning and evening rush.',
        ],
      },
    ],
    relatedCities: ['Hanover', 'Linthicum', 'Glen Burnie', 'Severn', 'Annapolis'],
  },
  {
    slug: 'dulles-airport-limo',
    category: 'Airport Transportation',
    h1: 'Dulles (IAD) Airport Limo Service',
    metaTitle: 'Dulles (IAD) Airport Limo Service | Flat Rate 24/7',
    metaDesc: 'Dulles (IAD) airport limo service with flight tracking & flat-rate pricing to DC, Maryland & Virginia. Mercedes fleet, 24/7. Call (877) 609-1919 to book.',
    hero: 'Luxury Dulles International Airport (IAD) car service. Punctual transfers from DC, Maryland & Northern Virginia.',
    image: '/images/airport-curbside.webp',
    intro: 'DCA Limos provides premium Dulles International Airport (IAD) transportation for travelers across the DC, Maryland and Northern Virginia tri-state area. Our chauffeurs know every shortcut, and our fleet of luxury Mercedes vehicles ensures a stress-free start (or end) to your journey.',
    seoText: 'For reliable Dulles airport transportation, travelers throughout the DMV choose DCA Limos. We monitor every IAD arrival in real time, greet you inside the terminal or curbside, and load your luggage into a spotless Mercedes sedan, SUV, or Sprinter van. Our Dulles airport transportation service runs 24/7 with flat, all-inclusive pricing — the quote you approve is the price you pay, whether it\'s an early-morning international departure or a midnight landing. We connect Dulles to Washington DC, Bethesda, Rockville, Annapolis, Baltimore, and every point between, and corporate travelers can add monthly invoicing with a dedicated account manager.',
    highlights: [
      'Direct service from MD, DC & Northern VA to IAD',
      'Real-time flight tracking — 45 minutes of complimentary wait time on domestic arrivals',
      'International arrivals: 60 minutes of complimentary wait time for customs',
      'Corporate-grade chauffeurs in business attire',
      'Group transfers — Sprinter vans available',
    ],
    sections: [
      {
        h2: 'Navigating Dulles International',
        paragraphs: [
          'Dulles is spread across a large footprint, and many gates are reached by AeroTrain or the airport\'s distinctive mobile lounges rather than a short walk, which adds time between touchdown and curbside that first-time visitors often underestimate. We build that extra window into the pickup plan so your chauffeur is not waiting — or you are not waiting on your chauffeur.',
          'The Silver Line Metro extension now reaches Dulles directly, giving travelers a rail alternative for parts of their trip, but for door-to-door service with luggage, especially with a Sprinter van or multiple bags, a reserved car still beats transferring between rail and a second vehicle. We route via the Dulles Toll Road and the Dulles Access Road to avoid the toll-road traffic that backs up during peak commute hours.',
        ],
      },
    ],
    relatedCities: ['Bethesda', 'Rockville', 'Silver Spring', 'Gaithersburg', 'Frederick'],
  },

  // ===== SERVICES =====
  {
    slug: 'wedding-limo-service',
    category: 'Special Events',
    h1: 'Wedding Limo Service in Maryland',
    metaTitle: 'Wedding Limo Service Maryland & DC | DCA Limos Bridal Car',
    metaDesc: 'Make your wedding unforgettable with DCA Limos. Luxury Mercedes limos, white Escalade, & Sprinter vans for the bridal party in Maryland, DC & Virginia.',
    hero: 'Your wedding day deserves perfection. Luxury bridal transportation across Maryland, DC & Virginia.',
    image: '/images/wedding-service.webp',
    intro: 'Your wedding is one of the most important days of your life — and DCA Limos makes sure transportation is one less thing to worry about. From bridal-party Sprinter vans to elegant Mercedes S-Class for the bride and groom, we handle every detail with the care your day deserves.',
    seoText: 'Your Wedding Limo Service should be the easiest decision of the whole celebration. DCA Limos coordinates timing with your planner or venue, decorates on request, and keeps the bridal party moving on schedule from preparations to ceremony to reception. Choose a classic stretch experience, a white Escalade for the couple, or Mercedes Sprinter vans that keep the entire wedding party together. Every wedding package includes a professionally attired chauffeur, bottled water, and a dry run of the route beforehand. We serve weddings across Maryland, Washington DC, and Northern Virginia with transparent flat-rate packages — one quote, everything included, no surprises on your big day.',
    highlights: [
      'Complimentary red carpet & "Just Married" decorations',
      'Champagne service for the couple (where legally permitted)',
      'Chauffeurs in formal attire (tuxedo upgrade available)',
      'Coordinated bridal party transfers — multiple vehicles',
      'Service to MD, DC & VA wedding venues (Annapolis, Baltimore, DC)',
    ],
    sections: [
      {
        h2: 'Planning your wedding-day timeline',
        paragraphs: [
          'We regularly stage at venues like the Historic Inns of Annapolis, Baltimore\'s Belvedere, and DC\'s Meridian House, so your chauffeur usually already knows the loading entrance, the best spot for a "getaway car" shot, and how long the drive to the reception actually takes once photos run long.',
          'A typical wedding day runs getting-ready pickup, a transfer to the ceremony, optional photo stops, a transfer to the reception, and a dedicated getaway vehicle — share that sequence with dispatch in advance and the vehicle count and hourly block are confirmed well before the big day, with a cancellation window of 12 hours if plans shift.',
        ],
      },
    ],
    relatedCities: ['Annapolis', 'Baltimore', 'Bethesda', 'Frederick', 'Columbia'],
  },
  {
    slug: 'prom-limo-service',
    category: 'Special Events',
    h1: 'Prom & Graduation Limo Service',
    metaTitle: 'Prom Limo Service Maryland | Graduation Limo Rentals',
    metaDesc: 'Safe, professional, fully chauffeured prom & graduation limo service for Maryland high schools & universities. Luxury Sprinter vans & limousines.',
    hero: 'Make prom night safe AND unforgettable. Trusted chauffeured limos for Maryland & DC high schools.',
    image: '/images/stretch-limo.webp',
    intro: 'Parents trust DCA Limos for prom night because we deliver something cheap rentals can\'t: real professional chauffeurs, fully insured luxury vehicles, and 24/7 dispatch in case plans change. Your teen rides in style — and you sleep easy.',
    highlights: [
      'Background-checked, fully licensed chauffeurs (no surprises)',
      'Sprinter vans for groups of 10–14',
      'Parents-pay-direct option — no awkward teen handoffs',
      'Photo stops included in the itinerary',
      'Service to Naval Academy, UMD, Johns Hopkins, Towson, USNA',
    ],
    sections: [
      {
        h2: 'A safer prom night for parents and teens',
        paragraphs: [
          'We regularly run prom and graduation groups to venues like Martin\'s Crosswinds, the Hyatt Regency Baltimore Inner Harbor, and the beach resorts in Ocean City, with a chauffeur who stays on the confirmed itinerary — including agreed photo stops — rather than improvising a route.',
          'Parents can pay directly and receive the chauffeur\'s contact information, and because dispatch runs 24/7, a changed pickup time or an extra stop after the dance is a phone call, not a crisis. Every chauffeur on a prom booking is background-checked and briefed on the group\'s schedule before the vehicle leaves the lot.',
          'Most groups book a Sprinter van so the whole friend group travels together rather than splitting across several personal cars, and many Maryland high schools now ask students to list their transportation plan in advance — a confirmed reservation with a named, licensed chauffeur is the kind of answer administrators and parents are both comfortable signing off on.',
        ],
      },
    ],
    relatedCities: ['Annapolis', 'Baltimore', 'Bethesda', 'Towson', 'College Park'],
  },
  {
    slug: 'corporate-car-service',
    category: 'Business Travel',
    h1: 'Corporate Car Service in Maryland & DC',
    metaTitle: 'Corporate Car Service Maryland DC | Executive Transportation',
    metaDesc: 'DCA Limos offers premium corporate car service for executives in DC, Maryland & Virginia. Monthly invoicing, dedicated account manager, 24/7 dispatch. Book now.',
    hero: 'Executive transportation for Maryland businesses. Monthly invoicing, dedicated account managers, zero downtime.',
    image: '/images/executive-sedan.webp',
    intro: 'Companies headquartered in Bethesda, Baltimore, Annapolis, DC and the broader DMV region rely on DCA Limos for their corporate transportation needs. We offer monthly invoicing, a dedicated account manager, and the kind of consistent excellence executives expect.',
    highlights: [
      'Dedicated account manager for every corporate account',
      'Monthly invoicing — net 30 terms available',
      'Chauffeurs in business attire, trained in executive protocol',
      'Roadshow & multi-stop itineraries handled seamlessly',
      'Volume discounts for 10+ rides/month',
    ],
    sections: [
      {
        h2: 'Serving Maryland and DC\'s business corridors',
        paragraphs: [
          'Our corporate accounts cluster around Bethesda Row and the National Institutes of Health campus, the I-270 biotech corridor running through Rockville and Gaithersburg, and the financial and legal firms near Baltimore\'s Inner Harbor and Charles Street — each with its own parking and loading-zone quirks our chauffeurs already know.',
          'A roadshow or multi-stop itinerary is booked as one hourly reservation rather than a string of separate rides, so the same chauffeur and vehicle carry your team from a 9 a.m. meeting in Bethesda to an afternoon stop in Baltimore without a handoff or a gap in service.',
          'Companies that fly executives or clients through DCA, BWI or Dulles frequently pair a corporate account with standing airport transfers, so a visiting board member or client lands to a chauffeur already briefed on the day\'s itinerary rather than a generic airport pickup. A dedicated account manager handles the billing and scheduling details so your travel coordinator is not chasing receipts.',
        ],
      },
    ],
    relatedCities: ['Bethesda', 'Baltimore', 'Annapolis', 'Silver Spring', 'Rockville'],
  },
  {
    slug: 'sports-game-day-limo',
    category: 'Special Events',
    h1: 'Sports Game Day Limo Service',
    metaTitle: 'Game Day Limo | Ravens, Orioles, Capitals & Wizards',
    metaDesc: 'Skip the parking nightmare. Luxury limo service to Camden Yards, M&T Bank Stadium, Capital One Arena & more. Group transfers available.',
    hero: 'Skip the parking & traffic. Luxury door-to-door transportation to every major DC/Baltimore stadium.',
    image: '/images/executive-sedan.webp',
    intro: 'Game day should be about cheering your team — not finding parking. DCA Limos drops you steps from the entrance at Camden Yards (Orioles), M&T Bank Stadium (Ravens), Capital One Arena (Capitals/Wizards), and FedExField (Commanders). Tailgate, enjoy a drink — we\'ll get everyone home safely.',
    highlights: [
      'Drop-off & pickup at all major DC/Baltimore stadiums',
      'Sprinter vans for groups of 10–14 (tailgate-ready)',
      'Designated driver service — drink without worry',
      'Pre/post-game stops at restaurants & bars',
      'Season-pass packages for diehard fans',
    ],
    sections: [
      {
        h2: 'Beating stadium traffic on game day',
        paragraphs: [
          'Camden Yards and M&T Bank Stadium share Russell Street as the main approach, which turns into a crawl in the hour before kickoff and again as 40,000-plus fans try to leave at once; the same is true around Capital One Arena\'s Gallery Place/Chinatown block and the Beltway ramps feeding FedExField in Landover.',
          'A pre-arranged drop-off steps from the gate — and a chauffeur who already knows which loading zone to use for each venue — removes the single biggest frustration of game day: finding, and then leaving, a parking space. Designated-driver bookings are common for tailgates where the group plans to drink.',
          'We also run season-pass packages for diehard fans who attend most home games, locking in a standing rate rather than rebooking for every matchup, and we coordinate pre- and post-game stops at restaurants and bars near each stadium so the evening does not end the moment the final whistle blows.',
        ],
      },
    ],
    relatedCities: ['Baltimore', 'Washington DC', 'Bethesda', 'Annapolis', 'Silver Spring'],
  },

  // ===== CITIES =====
  {
    slug: 'annapolis-limo-service',
    category: 'Maryland Cities',
    h1: 'Annapolis Limo Service',
    metaTitle: 'Annapolis Limo Service | Luxury Car Service in Annapolis MD',
    metaDesc: 'Premium Annapolis MD limo service. Airport transfers (BWI/DCA/IAD), USNA events, weddings, sailing yacht clubs. Mercedes fleet, 24/7.',
    hero: 'Maryland\'s capital deserves capital-class transportation. Luxury Annapolis limo service for every occasion.',
    image: '/images/executive-sedan.webp',
    intro: 'From the historic United States Naval Academy to the Annapolis City Dock and the world-class waterfront yacht clubs, DCA Limos provides Maryland\'s capital with the luxury chauffeur service it deserves. We handle USNA Commissioning Week, Naval Academy weddings, government events, and BWI/DCA/IAD airport transfers with white-glove care.',
    highlights: [
      'USNA Commissioning Week & parents weekend specialists',
      'Annapolis Boat Show transportation',
      'Yacht club & marina transfers',
      'BWI, DCA & IAD airport service from Annapolis',
      'Government & MD State House protocol service',
    ],
    sections: [
      {
        h2: 'Navigating Annapolis by water and by road',
        paragraphs: [
          'Annapolis sits on a peninsula laced with drawbridges, and the Spa Creek and Eastport bridges can both slow or briefly close for boat traffic, which matters for anyone timing a pickup near City Dock or the Eastport waterfront restaurants. Our chauffeurs build that swing-bridge buffer into the schedule rather than discovering it curbside.',
          'The Annapolis Boat Shows each spring and fall, USNA Commissioning Week, and State House session days all bring parking restrictions to the historic district around State Circle — a reserved car with a pre-cleared drop-off point is usually faster than circling for street parking during any of them.',
          'Naval Academy families flying in for Commissioning Week or parents weekend typically land at BWI, DCA or IAD and need a chauffeur who already knows the Academy\'s visitor gates and ceremony-day road closures, and Annapolis weddings at the yacht clubs along Spa Creek often call for a Sprinter van to move the full bridal party between the marina and the reception without a parking search of their own.',
          'Downtown Annapolis streets around State Circle and Main Street were laid out centuries before modern traffic, which means curb space is genuinely scarce on a busy weekend — a pre-confirmed drop-off point, agreed with your chauffeur before you leave, routinely beats arriving and hoping a spot opens up near City Dock.',
        ],
      },
    ],
    relatedCities: ['Severna Park', 'Arnold', 'Crofton', 'Edgewater', 'Cape St Claire'],
  },
  {
    slug: 'baltimore-limo-service',
    category: 'Maryland Cities',
    h1: 'Baltimore Limo Service',
    metaTitle: 'Baltimore Limo Service | Car & Chauffeur in Baltimore MD',
    metaDesc: 'Baltimore\'s premier limo service. Inner Harbor, Camden Yards, M&T Bank Stadium, BWI airport. Luxury Mercedes fleet. Book your Charm City ride.',
    hero: 'Charm City\'s premier limousine and chauffeur service. From Inner Harbor to Camden Yards — in style.',
    image: '/images/executive-sedan.webp',
    intro: 'Whether it\'s an Orioles game at Camden Yards, a Ravens game at M&T Bank Stadium, a night out in Fells Point, or business at Johns Hopkins Hospital, DCA Limos is Baltimore\'s trusted luxury transportation partner. We cover Inner Harbor, Federal Hill, Canton, Mount Vernon, and every Baltimore neighborhood.',
    highlights: [
      'Game-day transportation to Camden Yards & M&T Bank Stadium',
      'Concert transportation to Merriweather Post Pavilion',
      'Inner Harbor, Fells Point, Federal Hill, Canton coverage',
      'Johns Hopkins Hospital medical transportation',
      'BWI Airport — fastest transfers in the city',
    ],
    sections: [
      {
        h2: 'Crossing the harbor without the tunnel backup',
        paragraphs: [
          'Baltimore\'s two harbor crossings — the Fort McHenry Tunnel (I-95) and the Baltimore Harbor Tunnel (I-895) — both carry tolls and both back up at rush hour, so a chauffeur who knows when to take Russell Street surface roads instead can save real time getting between Inner Harbor, Federal Hill and points south of the water.',
          'Beyond downtown, we cover neighborhoods visitors rarely think to ask about by name — Hampden\'s shops on 36th Street, Locust Point near the cruise terminal, and the Horseshoe Casino south of Interstate 95 — along with the Johns Hopkins medical campus, where early-morning patient and family transportation is a regular booking.',
          'Concert transportation to Merriweather Post Pavilion in nearby Columbia is one of our most-requested Baltimore-adjacent bookings in summer, and Ravens and Orioles game days bring the same Russell Street congestion whether the two stadiums are hosting on the same night or separately, which is why we treat that stretch of road as its own planning problem rather than an afterthought.',
        ],
      },
    ],
    relatedCities: ['Towson', 'Ellicott City', 'Glen Burnie', 'Annapolis', 'Columbia'],
  },
  {
    slug: 'columbia-limo-service',
    category: 'Maryland Cities',
    h1: 'Columbia Limo Service',
    metaTitle: 'Columbia Limo Service | Luxury Car Service Columbia MD',
    metaDesc: 'Columbia MD\'s top limo service. Merriweather Post Pavilion concerts, BWI airport, weddings & corporate. Mercedes Sprinter & SUVs available.',
    hero: 'Columbia, Maryland\'s premier limo service. From Merriweather Post Pavilion to BWI Airport — in luxury.',
    image: '/images/executive-sedan.webp',
    intro: 'Howard County\'s planned community hub, Columbia, is one of Maryland\'s liveliest entertainment destinations. DCA Limos provides Merriweather Post Pavilion concert transportation, BWI airport transfers, and corporate travel for the booming Columbia Gateway business district.',
    highlights: [
      'Merriweather Post Pavilion concert packages',
      'Columbia Gateway business district accounts',
      'BWI airport transfers (15 minutes away)',
      'Wedding & event venue transportation',
      'Coverage: Columbia, Ellicott City, Clarksville, Highland',
    ],
    sections: [
      {
        h2: 'A planned community built around its village centers',
        paragraphs: [
          'Columbia is laid out as ten self-contained villages around Lake Kittamaqundi and Downtown Columbia, so a pickup address often depends more on which village center you\'re near — Town Center, Wilde Lake, Oakland Mills — than on a single Columbia-wide landmark, and our chauffeurs route accordingly rather than treating the city as one block.',
          'Merriweather Post Pavilion\'s concert season brings heavy traffic to the Merriweather District\'s restaurant row before and after shows, and Columbia Gateway\'s office parks keep us busy with weekday corporate accounts, including hospital-system travel tied to Howard County General Hospital.',
          'Because Columbia sits almost exactly between Baltimore and Washington along the Route 29 and I-95 corridor, we also see a steady mix of BWI airport transfers, weekend trips into Baltimore for Orioles or Ravens games, and the occasional run into DC for a wedding or a conference — all from the same Columbia pickup address.',
          'Lake Kittamaqundi and the paths around Symphony Woods sit right behind the amphitheater, so a Merriweather concert booking often pairs naturally with dinner reservations in Downtown Columbia beforehand; tell dispatch both stops when you book and the same chauffeur handles the whole evening on one reservation.',
        ],
      },
    ],
    relatedCities: ['Ellicott City', 'Laurel', 'Clarksville', 'Howard County', 'Baltimore'],
  },
  {
    slug: 'hanover-limo-service',
    category: 'Maryland Cities',
    h1: 'Hanover Limo Service',
    metaTitle: 'Hanover Limo Service | Limo Service Hanover MD 21076',
    metaDesc: 'Hanover MD 21076 limo service. Steps from BWI airport, Live! Casino Maryland, Arundel Mills. Local rates, 24/7 luxury Mercedes fleet.',
    hero: 'Headquartered in Hanover — your local luxury limo service. Minutes from BWI, Live! Casino & Arundel Mills.',
    image: '/images/executive-sedan.webp',
    intro: 'DCA Limos is headquartered in Hanover, MD — minutes from BWI Airport, Live! Casino Maryland, and Arundel Mills. As your local luxury transportation provider, we offer the fastest service rates in Anne Arundel County, no matter where you\'re headed.',
    highlights: [
      'Local Hanover rates — no out-of-area surcharges',
      'Live! Casino Maryland & Arundel Mills transfers',
      'BWI airport — 5-minute response time',
      'NSA Fort Meade corporate accounts',
      'Coverage: Hanover, Linthicum Heights, Glen Burnie, Severn, Odenton',
    ],
    sections: [
      {
        h2: 'Home turf: Hanover, Arundel Mills and Fort Meade',
        paragraphs: [
          'Being based in Hanover means we drive Arundel Mills Boulevard and the Live! Casino Maryland loop daily — one of the largest retail and entertainment complexes in the state — and we know which entrance gets you closest to the casino floor versus the outlet stores without circling the lot.',
          'Nearby Fort Meade and the National Security Agency campus bring visitor and contractor transportation with their own ID and access protocols; chauffeurs working these accounts are briefed on current gate procedures before the pickup, since requirements can change with little notice.',
          'Because BWI sits practically next door, Hanover is also where we stage most of our overnight and pre-dawn airport fleet, which is part of why local pickups here tend to see the fastest response time anywhere in Anne Arundel County — a five-minute car is realistic, not a sales line, when the vehicle is already parked a few minutes away.',
          'Odenton and the MARC Camden Line station round out the neighborhood, and we regularly handle the last-mile leg for rail commuters and visitors arriving by train who still need a chauffeured ride on to a Hanover hotel, an NSA contractor meeting, or an evening at Live! Casino.',
        ],
      },
    ],
    relatedCities: ['Linthicum Heights', 'Glen Burnie', 'Severn', 'Odenton', 'Annapolis'],
  },
];

export const findLandingPage = (slug) => LANDING_PAGES.find((p) => p.slug === slug);
