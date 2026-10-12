// Batch 3 (2026-10-12 SEO pass): one new long-distance DCA-to-<destination>
// route page (New York City) closing a gap alongside the existing
// dca-to-philadelphia and dca-to-richmond-va long-haul pages. Same shape as
// routePages.js / routePagesBatch2.js — spread into ROUTE_PAGES there, which
// tops every page up to five FAQs.
const HERO_IMAGE = '/images/airport-curbside.webp';

export const ROUTE_PAGES_BATCH3 = [
  {
    slug: 'dca-to-new-york-city',
    destination: 'New York City, NY',
    h1: 'DCA Airport to New York City Car Service',
    metaTitle: 'DCA to New York City | Flat Rate Car Service 24/7',
    metaDesc:
      'Flat-rate chauffeured car service from DCA to New York City — door-to-door via I-95, no transfers. Flight tracking, 24/7. Call (877) 609-1919.',
    distance: '225 miles',
    driveTime: '3 hours 45 minutes – 4 hours 45 minutes',
    heroImage: HERO_IMAGE,
    intro:
      'For groups, teams carrying equipment, or travelers who would rather not change trains or planes, DCA Limos runs a direct, flat-rate chauffeured car service from Reagan National all the way to New York City — door-to-door, no transfers, with a professional chauffeur for the full drive up I-95.',
    sections: [
      {
        h2: 'A long drive, handled by someone who does it often',
        paragraphs: [
          'The route runs the GW Parkway and Capital Beltway out of DCA, then I-95 north through Baltimore, Wilmington and Philadelphia before crossing into New Jersey on the New Jersey Turnpike and entering Manhattan via the Lincoln Tunnel or the George Washington Bridge, depending on your exact destination. It is a 225-mile trip that typically runs 3 hours 45 minutes to 4 hours 45 minutes, longer during Friday afternoon or holiday-weekend traffic through the Delaware and New Jersey stretches.',
          'Your chauffeur handles every mile, including the tolls on the New Jersey Turnpike and at the tunnel or bridge crossing, which are built into your flat rate rather than metered separately.',
        ],
      },
      {
        h2: 'When a chauffeured drive beats flying or the train',
        paragraphs: [
          'Amtrak\'s Acela or Northeast Regional is usually the fastest way to cover this specific distance, and we say so plainly — for a single traveler with no luggage constraints, the train is often the better choice. A chauffeured car earns its place for groups of three or more, teams moving equipment or display materials, multi-stop itineraries that touch Baltimore or Philadelphia along the way, or travelers who simply prefer one continuous, private vehicle over a train change or a connecting flight.',
          'We also run this route for corporate and government travel that needs a documented, billable trip with a single point of contact rather than individually expensed train or rideshare legs.',
        ],
      },
    ],
    highlights: [
      'Direct, door-to-door service — no train transfer, no connecting flight',
      'Flat rate including all Turnpike and tunnel/bridge tolls — no surprises',
      'Real-time flight tracking with complimentary wait time on the DCA pickup',
      'Sedans, SUVs and Sprinter vans for groups and equipment',
      'Multi-stop itineraries available (Baltimore or Philadelphia add-on)',
    ],
    faqs: [
      {
        q: 'How much does a car service from DCA to New York City cost?',
        a: 'We quote one flat, all-inclusive rate covering the chauffeur, tolls and fuel for the full 225-mile trip. Call (877) 609-1919 or book online for an exact quote based on your vehicle and exact Manhattan address.',
      },
      {
        q: 'How long does the drive from DCA to New York City take?',
        a: 'Typically 3 hours 45 minutes to 4 hours 45 minutes depending on traffic through Baltimore, Delaware and the New Jersey Turnpike, longer on Friday afternoons and holiday weekends.',
      },
      {
        q: 'Would the train be faster?',
        a: 'For a single traveler with light luggage, Amtrak\'s Acela is often faster point to point. A chauffeured car makes more sense for groups, teams with equipment, multi-stop itineraries, or anyone who prefers one continuous private vehicle.',
      },
      {
        q: 'Are tolls included in the flat rate?',
        a: 'Yes. New Jersey Turnpike tolls and the tunnel or bridge crossing into Manhattan are included in your quoted flat rate, not added separately.',
      },
      {
        q: 'Can we add a stop in Baltimore or Philadelphia along the way?',
        a: 'Yes. Tell us when you book and we will plan the itinerary as one multi-stop reservation rather than a straight-through trip.',
      },
    ],
    nearby: ['dca-to-philadelphia', 'dca-to-baltimore', 'dca-to-richmond-va', 'dca-to-dover-de'],
  },
];
