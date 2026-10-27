// Batch 13 (2026-10-27, SEO expansion round 7): 10 new pages — checked
// against the full existing slug list and against every existing page's
// metaTitle/content first to avoid re-anchoring a landmark another page
// already owns (e.g. Bethesda already owns NIH/Walter Reed in its own
// metaTitle, Silver Spring already owns The Fillmore, Cleveland Park already
// owns Woodley Park — all three were dropped from this batch for that
// reason). Groups: 3 Northern Virginia towns with only incidental mentions
// elsewhere, not a page of their own (Middleburg, Purcellville, Oakton); one
// Prince George's County city (Lanham) that previously had no page of its
// own, only a passing mention inside the College Park venue page; one DC
// neighborhood (H Street Corridor) that was only ever a single bullet point
// inside the Capitol Hill page, the same way Kennedy Center and Union Station
// used to be before they got dedicated pages; three real venues with zero
// prior mentions anywhere in the data files (DAR Constitution Hall, the
// Entertainment & Sports Arena in Congress Heights, The Hamilton Live); and
// two new industry/occasion verticals (pharma & biotech corporate car
// service, distinct from the existing Healthcare & Medical and Tech &
// Startup verticals; milestone birthday car service, a new life-cycle
// occasion distinct from wedding/prom/quinceañera/bar-mitzvah/baby-naming).
// Same entry shape as MARYLAND_PAGES / MARYLAND_BATCH3-12.
const VEHICLES = [
  { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo travelers and couples' },
  { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'executive and VIP travel' },
  { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
  { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
  { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
  { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'weddings, prom and special occasions' },
];

export const MARYLAND_BATCH13 = [
  // ---------------------------------------------------------------------
  // NORTHERN VIRGINIA TOWNS (previously incidental mentions only)
  // ---------------------------------------------------------------------
  {
    slug: 'middleburg-va-limo-service',
    type: 'city',
    name: 'Middleburg',
    badge: 'Virginia Cities',
    h1: 'Middleburg, VA Limo & Car Service',
    metaTitle: 'Middleburg VA Limo & Car Service | DCA Limos',
    metaDescription:
      'Chauffeured limo & car service in Middleburg, VA — horse-country weddings, Salamander Resort and Loudoun wineries. Call (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '30 mi · 35–50 minutes' },
      { label: 'To Reagan (DCA)', value: '50 mi · 65–95 minutes' },
      { label: 'To BWI', value: '85 mi · 100–125 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Middleburg sits at the heart of Virginia\'s hunt country, a few blocks of brick storefronts and stone walls surrounded by the horse farms, vineyards and estate properties that make it one of the most photographed small towns in the state. DCA Limos drives Middleburg the way its venues expect — discreet chauffeurs, late-model sedans and SUVs, and Sprinter vans and stretch limousines for the weddings and wine-country days that bring most visitors here.',
      'The drive from Dulles is the easy part, 30 miles and 35 to 50 minutes down Route 50 through rolling farmland. Reagan National and BWI are a genuine haul — 50 and 85 miles — which is exactly why we quote and confirm a flat rate for the full distance before you book rather than treating Middleburg as a last-minute add-on.',
    ],
    highlights: [
      'Flat, all-inclusive rate for the full Dulles, Reagan National or BWI distance',
      'Chauffeurs experienced with Salamander Resort, National Sporting Library and private-estate weddings',
      'Loudoun and Fauquier wine-country day trips in a sedan, SUV or Sprinter van',
      'Discreet service for horse-country residents and estate properties off unmarked gravel lanes',
      'Sprinter vans and stretch limousines for weddings and multi-stop tasting-room days',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Salamander Resort and Middleburg weddings',
        paragraphs: [
          'Salamander Resort & Spa anchors a steady wedding calendar in and around Middleburg, alongside a handful of private estates and barns tucked off Route 50 and the back roads toward Upperville. Our chauffeurs confirm gate codes, driveway turning room and guest parking with the couple or planner ahead of time, the same way we do for any private-estate wedding, since a stretch limousine does not belong on a narrow gravel lane it has not been cleared for in advance.',
          'Sprinter vans handle the out-of-town guest shuttle most Middleburg weddings need, typically running a loop from a Leesburg or Dulles-corridor hotel block to the venue and back.',
        ],
      },
      {
        h2: 'Horse country and wine country, in one trip',
        paragraphs: [
          'Middleburg\'s identity is built on horses — steeplechase racing, the National Sporting Library & Museum, and the farms that line every road leading out of town — and on the wineries of Loudoun and Fauquier counties that have grown up alongside them. A single chauffeured booking covers a morning at the library or a farm visit and an afternoon of two or three tasting rooms, with one flat rate for the whole day rather than separate car-service calls.',
          'Sedans and SUVs suit a couple or small group; a Sprinter van is the standard choice once a wine-country day grows past four or five people.',
        ],
      },
      {
        h2: 'Booking a Middleburg trip',
        paragraphs: [
          'Because Middleburg is a genuine distance from the DC airports, we recommend booking the night before rather than same-day, especially for an early wedding call time or a full-day wine tour. Call (877) 609-1919 or request a quote online — we confirm the flat rate for your specific Middleburg address or venue before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you actually serve Middleburg, or just closer Loudoun towns like Leesburg?',
        a: 'Yes, we serve Middleburg and the surrounding horse-country area directly. It is a longer trip than our closer Loudoun routes, and we quote a flat rate for the full distance rather than treating it as out of range.',
      },
      {
        q: 'Can you handle a wedding at a private estate or farm near Middleburg?',
        a: 'Yes. We confirm gate codes, driveway turning room and parking arrangements with the couple or planner before the day, since many Middleburg-area wedding venues are private properties rather than commercial event spaces.',
      },
      {
        q: 'Do you drive wine-country day trips in Loudoun and Fauquier counties?',
        a: 'Yes. A sedan or SUV suits a couple or small group, and a Sprinter van is the standard choice for a group of five or more visiting several tasting rooms in one day.',
      },
      {
        q: 'How far ahead should I book a Middleburg trip?',
        a: 'As far ahead as you can, especially for a wedding or an early-morning airport run — Middleburg is a genuine distance from the DC airports and we recommend booking the day before rather than same-day.',
      },
      {
        q: 'Is Middleburg car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning Dulles departures and late-evening wedding pickups.',
      },
    ],
    related: [
      { label: 'Purcellville, VA Limo Service', to: '/purcellville-va-limo-service' },
      { label: 'Leesburg Limo Service', to: '/leesburg-limo-service' },
      { label: 'Leesburg Wedding Limo Service', to: '/leesburg-wedding-limo-service' },
      { label: 'Maryland & Virginia Wine Tour Transportation', to: '/maryland-wine-tour-transportation' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Dulles Airport Limo Service', to: '/limo/dulles-airport-limo' },
    ],
    schema: { areaServed: ['Middleburg, VA', 'Loudoun County, VA', 'Fauquier County, VA'], serviceType: 'Car service' },
  },
  {
    slug: 'purcellville-va-limo-service',
    type: 'city',
    name: 'Purcellville',
    badge: 'Virginia Cities',
    h1: 'Purcellville, VA Limo & Car Service',
    metaTitle: 'Purcellville VA Limo & Car Service | DCA Limos',
    metaDescription:
      'Flat-rate limo & car service in Purcellville, VA — western Loudoun wine country, minutes from Dulles. Call (877) 609-1919 to book.',
    stats: [
      { label: 'To Dulles (IAD)', value: '22 mi · 30–45 minutes' },
      { label: 'To Reagan (DCA)', value: '42 mi · 55–80 minutes' },
      { label: 'To BWI', value: '78 mi · 95–120 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Purcellville anchors western Loudoun County, where the Dulles corridor\'s office parks give way to orchards, breweries and a growing cluster of wineries along Routes 7 and 9. DCA Limos drives the town\'s residents, wedding parties and wine-country visitors in sedans, SUVs, Sprinter vans and stretch limousines, with chauffeurs who run the W&OD Trail-adjacent streets and the surrounding farm roads regularly.',
      'Dulles is a comfortable 22 miles and 30 to 45 minutes away, the closer and far more common airport run for Purcellville. Reagan National runs longer, 42 miles and 55 to 80 minutes depending on Route 7 and Beltway traffic — we confirm a flat rate for either before you book.',
    ],
    highlights: [
      'Dulles International usually 30–45 minutes from any Purcellville address',
      'Western Loudoun wine-country day trips along Routes 7, 9 and the Snickersville Turnpike',
      'Wedding transportation for Loudoun barn and vineyard venues, Sprinter vans and stretch limousines',
      'Chauffeurs who know Purcellville\'s Main Street, the W&OD Trail and the surrounding farm roads',
      'Early-morning and late-night Dulles departures without a long trip downtown first',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Dulles\'s closest wine-country town',
        paragraphs: [
          'Purcellville sits close enough to Dulles that a flight arriving mid-morning can land a visitor at a tasting room by lunch, which makes it a common stop for travelers extending a DC business trip into a day or two of western Loudoun wine country. We quote the Dulles run the same way every time: one flat rate, confirmed before you book, flight-tracked on arrival.',
          'The town itself has grown past its orchard-country roots into a real draw of its own — breweries and tasting rooms along Main Street, the W&OD Trail running straight through downtown, and a steady calendar of farm-to-table dinners and small festivals.',
        ],
      },
      {
        h2: 'Barn and vineyard weddings in western Loudoun',
        paragraphs: [
          'Purcellville and the farm roads around it host a growing number of barn and vineyard weddings, and our Sprinter vans and stretch limousines handle both the wedding party and the out-of-town guest shuttles those venues typically need. We confirm venue access, parking and any gravel-road turning-room questions with the couple or planner ahead of the day.',
          'A sedan or SUV covers a rehearsal dinner or welcome party the night before; the full fleet comes out for the wedding day itself.',
        ],
      },
      {
        h2: 'Booking Purcellville car service',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm the flat rate for your specific Purcellville address, winery or venue before you book, with no surge pricing regardless of how far out the trip runs.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How far is Purcellville from Dulles Airport?',
        a: 'About 22 miles, typically 30 to 45 minutes depending on traffic along Route 7 and the Dulles Greenway.',
      },
      {
        q: 'Do you drive wine-country tours out of Purcellville?',
        a: 'Yes. Purcellville sits at the edge of western Loudoun\'s wineries and breweries, and we run sedan, SUV and Sprinter van day trips along Routes 7, 9 and the Snickersville Turnpike.',
      },
      {
        q: 'Can you handle a barn or vineyard wedding near Purcellville?',
        a: 'Yes. Sprinter vans and stretch limousines are available, and we confirm venue access and parking with the couple or planner before the wedding day.',
      },
      {
        q: 'Is Reagan National or BWI realistic from Purcellville?',
        a: 'Yes, though it is a longer trip — about 55 to 80 minutes to Reagan National and 95 to 120 minutes to BWI. We quote one flat rate for the full distance regardless of which airport you choose.',
      },
      {
        q: 'Is Purcellville car service available late at night or early morning?',
        a: 'Yes — 24 hours a day, 365 days a year, including early Dulles departures and late wedding or winery pickups.',
      },
    ],
    related: [
      { label: 'Middleburg, VA Limo Service', to: '/middleburg-va-limo-service' },
      { label: 'Leesburg Limo Service', to: '/leesburg-limo-service' },
      { label: 'Leesburg Wedding Limo Service', to: '/leesburg-wedding-limo-service' },
      { label: 'Maryland & Virginia Wine Tour Transportation', to: '/maryland-wine-tour-transportation' },
      { label: 'Barn & Vineyard Wedding Transportation (blog)', to: '/blog/barn-vineyard-wedding-transportation-northern-virginia' },
      { label: 'Dulles Airport Limo Service', to: '/limo/dulles-airport-limo' },
    ],
    schema: { areaServed: ['Purcellville, VA', 'Loudoun County, VA'], serviceType: 'Car service' },
  },
  {
    slug: 'oakton-va-limo-service',
    type: 'city',
    name: 'Oakton',
    badge: 'Virginia Cities',
    h1: 'Oakton, VA Limo & Car Service',
    metaTitle: 'Oakton VA Limo & Car Service | DCA Limos',
    metaDescription:
      'Chauffeured limo & car service in Oakton, VA — minutes from Vienna, Tysons and Dulles. Flat rates, 24/7. Call (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '15–25 minutes' },
      { label: 'To Reagan (DCA)', value: '30–50 minutes' },
      { label: 'To BWI', value: '70–100 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Oakton is the quiet, wooded neighbor between Vienna and Fairfax — mostly residential, with no real downtown of its own, which means most Oakton trips start or end at a house rather than an office tower. DCA Limos covers it daily: airport runs, school and private-school pickups, and the hourly bookings that come with living a short drive from Tysons without actually living inside it.',
      'Dulles is the closer, easier airport from Oakton, usually 15 to 25 minutes depending on which part of town you are starting from. Reagan National runs 30 to 50 minutes via I-66 or the Beltway, and we confirm a flat rate for either before you book.',
    ],
    highlights: [
      'Dulles usually 15–25 minutes from any Oakton address',
      'Residential pickups with early-morning luggage help at the door',
      'A short hop to Tysons, Vienna and Fairfax for dinners, offices and events',
      'Private-school and activity drop-off service for families without a second driver that morning',
      'Family-friendly SUVs with car seats available on request',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'A residential neighborhood, driven like one',
        paragraphs: [
          'Oakton has no real commercial center of its own — it borrows Vienna\'s Church Street, Tysons\' offices and Fairfax\'s shopping when residents need them — which means our chauffeurs spend most of an Oakton booking on quiet residential streets rather than office-tower loops. We know the cul-de-sacs off Hunter Mill Road and Jermantown Road well enough to find a specific driveway without circling.',
          'Early-morning airport pickups are common here, and we build in a few extra minutes for the residential-street approach rather than quoting the trip as if it started from a commercial address.',
        ],
      },
      {
        h2: 'Dulles, Tysons and the daily commute',
        paragraphs: [
          'Most Oakton airport trips run to Dulles, close enough that a late-evening international arrival is still a short ride home. For residents who commute into Tysons or need an evening out in Vienna or Fairfax, an hourly chauffeur removes the question of parking or a late drive home entirely.',
          'Oakton families also use us for private-school and activity transportation on mornings when two kids need to be in two different places at once — a sedan or SUV with a car seat on request, confirmed the night before.',
        ],
      },
      {
        h2: 'Booking Oakton car service',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm the flat rate for your specific Oakton address before you book, with the same flat-rate, no-surge policy on every trip.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Is Dulles or Reagan National closer to Oakton?',
        a: 'Dulles is closer and the more common choice, usually 15 to 25 minutes. Reagan National runs 30 to 50 minutes depending on I-66 and Beltway traffic.',
      },
      {
        q: 'Do you provide car seats for family or school pickups?',
        a: 'Yes. Infant, convertible and booster seats are available on request — tell us your child\'s age when you book.',
      },
      {
        q: 'Can a chauffeur find a specific house on a residential Oakton street?',
        a: 'Yes. Our chauffeurs know the neighborhood\'s cul-de-sacs and residential streets well, and we confirm the exact address before dispatch so there is no circling once the car arrives.',
      },
      {
        q: 'Do you serve Tysons, Vienna and Fairfax from Oakton for the same trip?',
        a: 'Yes. A night that starts with a Tysons dinner and ends with a Vienna or Fairfax stop is common, and we treat it as one continuous booking rather than separate trips.',
      },
      {
        q: 'Is Oakton car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning Dulles departures.',
      },
    ],
    related: [
      { label: 'Vienna, VA Limo Service', to: '/vienna-va-limo-service' },
      { label: 'Fairfax Limo Service', to: '/fairfax-limo-service' },
      { label: 'Tysons Limo Service & Corporate Car Service', to: '/tysons-limo-service' },
      { label: 'Reston Limo Service', to: '/reston-limo-service' },
      { label: 'Dulles Airport Limo Service', to: '/limo/dulles-airport-limo' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Oakton, VA', 'Fairfax County, VA'], serviceType: 'Car service' },
  },
  // ---------------------------------------------------------------------
  // PRINCE GEORGE'S COUNTY CITY (previously incidental mention only)
  // ---------------------------------------------------------------------
  {
    slug: 'lanham-md-limo-service',
    type: 'city',
    name: 'Lanham',
    badge: 'Maryland Cities',
    h1: 'Lanham, MD Limo & Car Service',
    metaTitle: 'Lanham MD Limo & Car Service | DCA Limos',
    metaDescription:
      'Flat-rate limo & car service in Lanham, MD — close to New Carrollton, Glenn Dale and all three DC-area airports. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '14 mi · 25–40 minutes' },
      { label: 'To BWI', value: '20 mi · 30–45 minutes' },
      { label: 'To Dulles (IAD)', value: '36 mi · 50–70 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Lanham sits in the middle of Prince George\'s County\'s commuter belt, close enough to New Carrollton\'s Metro and MARC station and Glenn Dale\'s quieter neighborhoods that residents here reach all three DC-area airports without a long haul either way. DCA Limos runs Lanham daily — early-morning Reagan National departures, BWI runs for the county\'s federal and contractor workforce, and the occasional Dulles trip for international flights.',
      'We quote one flat rate for any of the three airports before you book, timed and flight-tracked the same way whether your flight is a short domestic hop from DCA or a long-haul international departure from Dulles.',
    ],
    highlights: [
      'All three DC-area airports within a reasonable drive — DCA, BWI and Dulles',
      'New Carrollton Metro and MARC station pickups as the last-mile leg of a longer trip',
      'Early-morning residential pickups with luggage help at the door',
      'Federal and contractor corporate accounts with monthly invoicing',
      'Family-friendly SUVs with car seats available on request',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'A commuter town between three airports',
        paragraphs: [
          'Lanham\'s position just off the Beltway and US-50 puts BWI, Reagan National and, with a somewhat longer drive, Dulles all genuinely within reach, which is unusual this far into Prince George\'s County. Most of our Lanham bookings split fairly evenly between Reagan National for domestic and business travel and BWI for discount carriers and international connections through its larger terminal.',
          'Our chauffeurs run the Beltway, US-50, Annapolis Road and Good Luck Road corridors daily and route around New Carrollton\'s rush-hour merge and the Beltway\'s Maryland side the same way they would for any of our established Prince George\'s County routes.',
        ],
      },
      {
        h2: 'New Carrollton and the last-mile connection',
        paragraphs: [
          'New Carrollton station — Metro\'s Orange Line terminus and an Amtrak and MARC stop — sits a short drive from Lanham, and we regularly handle the final leg for travelers connecting from a train rather than driving the whole way themselves. A chauffeur waiting at the station beats a long platform wait for a rideshare that may or may not show up promptly.',
          'Glenn Dale\'s quieter, more rural stretches get the same service as Lanham\'s denser blocks near the Beltway — we treat the whole area as one coverage zone rather than pricing by neighborhood.',
        ],
      },
      {
        h2: 'Booking Lanham car service',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm the flat rate for your specific Lanham address and airport before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Which airport is closest to Lanham, MD?',
        a: 'BWI and Reagan National are both reasonable drives, typically 25 to 45 minutes depending on traffic. Dulles is the longer trip at 50 to 70 minutes.',
      },
      {
        q: 'Do you pick up at the New Carrollton Metro and MARC station?',
        a: 'Yes. We regularly handle the last-mile leg for travelers connecting from a train rather than driving the whole way themselves.',
      },
      {
        q: 'Do you offer corporate accounts for federal or contractor employees in Lanham?',
        a: 'Yes. Monthly invoicing is available for federal and contractor corporate accounts with recurring travel.',
      },
      {
        q: 'Can you provide child car seats for a family pickup?',
        a: 'Yes. Infant, convertible and booster seats are available on request — tell us your child\'s age when you book.',
      },
      {
        q: 'Is Lanham car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning airport departures.',
      },
    ],
    related: [
      { label: 'Bowie Limo Service', to: '/bowie-limo-service' },
      { label: 'Greenbelt Limo Service', to: '/greenbelt-limo-service' },
      { label: 'Hyattsville Limo Service', to: '/hyattsville-limo-service' },
      { label: 'BWI Airport Limo Service', to: '/limo/bwi-airport-limo' },
      { label: 'DCA Airport Limo Service', to: '/limo/dca-airport-limo' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Lanham, MD', "Prince George's County, MD"], serviceType: 'Car service' },
  },
  // ---------------------------------------------------------------------
  // DC NEIGHBORHOOD (previously a single bullet inside Capitol Hill)
  // ---------------------------------------------------------------------
  {
    slug: 'h-street-corridor-dc-limo-service',
    type: 'city',
    name: 'H Street Corridor',
    badge: 'Washington DC Neighborhoods',
    h1: 'H Street Corridor Limo Service & Car Service',
    metaTitle: 'H Street Corridor Limo Service | Washington, DC',
    metaDescription:
      'Chauffeured car service on the H Street Corridor (Atlas District), DC — nightlife, the Atlas Performing Arts Center and airport transfers. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '45–65 minutes' },
      { label: 'To BWI', value: '40–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The H Street Corridor, still known to longtime residents as the Atlas District, has grown from a quiet commercial strip into one of DC\'s densest nightlife rows — bars, restaurants and music venues packed along a few blocks served by the H Street/Benning Road streetcar. DCA Limos drives it the way the neighborhood actually works: one chauffeured booking covering several stops along the strip, rather than a separate car for each bar.',
      'The corridor sits a short ride from Capitol Hill and Union Station, and most of our H Street bookings either start or end at one of the two. Airport runs lean toward Reagan National and BWI, both a reasonably direct drive via New York Avenue or the Anacostia Freeway.',
    ],
    highlights: [
      'One chauffeured booking for a night covering several H Street bars and restaurants',
      'Atlas Performing Arts Center drop-offs timed to the curtain and pickups timed to the end of the show',
      'A short hop to and from Capitol Hill and Union Station for the same night out',
      'Group transportation in a Sprinter van for a bar crawl or private event along the strip',
      'Residential service for the H Street-adjacent blocks of Capitol Hill, Trinidad and Near Northeast',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Nightlife on H Street, without the parking search',
        paragraphs: [
          'Street parking along H Street disappears early on a Friday or Saturday night, and the streetcar, while useful, does not run late enough or far enough for every trip home. A chauffeured car solves both problems at once — drop-off right at the block you want, and a pickup at an agreed corner when the night ends, rather than a long walk to find a spot or a late scramble for a ride.',
          'Groups treating H Street as a progressive night out — one bar for drinks, another for dinner, a third for music — get a single booking that follows the group block to block instead of several separate short rides.',
        ],
      },
      {
        h2: 'The Atlas Performing Arts Center and the corridor\'s cultural side',
        paragraphs: [
          'The Atlas Performing Arts Center anchors the corridor\'s quieter, earlier side — dance, theater and music performances that draw a different crowd than the late-night bars a few doors down. We time drop-offs to the performance start and pickups to the actual end of the show, the same way we do for any theater venue.',
          'The corridor also connects easily to Capitol Hill\'s rowhouse blocks and Union Station, and a single evening often moves between all three without more than one booking.',
        ],
      },
      {
        h2: 'Booking H Street car service',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — we confirm the flat rate for your specific H Street pickup and drop-off before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can one booking cover several stops along H Street in one night?',
        a: 'Yes. A single chauffeured booking commonly covers a progressive night out — drinks at one spot, dinner at another, music at a third — rather than separate rides for each stop.',
      },
      {
        q: 'Do you drive to the Atlas Performing Arts Center?',
        a: 'Yes. We time the drop-off to the performance start and the pickup to the actual end of the show, the same as any theater venue.',
      },
      {
        q: 'Is H Street a quick trip from Capitol Hill or Union Station?',
        a: 'Yes, it is a short ride between all three, and a single evening often moves between them on one booking.',
      },
      {
        q: 'Do you provide group transportation for a bar crawl or private event on H Street?',
        a: 'Yes. A Sprinter van is the common choice for a group moving along the corridor together for a bar crawl or private event.',
      },
      {
        q: 'Is H Street Corridor car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including late-night pickups after the bars close.',
      },
    ],
    related: [
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'Union Station DC Transportation', to: '/union-station-dc-transportation' },
      { label: 'NoMa Limo Service', to: '/noma-dc-limo-service' },
      { label: 'Adams Morgan Limo Service', to: '/adams-morgan-limo-service' },
      { label: 'Dupont Circle & Adams Morgan Nightlife Transportation (blog)', to: '/blog/dupont-circle-adams-morgan-nightlife-transportation' },
      { label: 'Sports & Game Day Limo', to: '/limo/sports-game-day-limo' },
    ],
    schema: { areaServed: ['Washington, DC', 'H Street NE', 'Atlas District'], serviceType: 'Limousine and car service' },
  },
  // ---------------------------------------------------------------------
  // VENUE PAGES (zero prior mentions anywhere in the existing data files)
  // ---------------------------------------------------------------------
  {
    slug: 'dar-constitution-hall-transportation',
    type: 'event',
    name: 'DAR Constitution Hall',
    badge: 'DC-Area Landmark',
    h1: 'Limo & Car Service to DAR Constitution Hall, Washington DC',
    metaTitle: 'DAR Constitution Hall Transportation | DC Limo',
    metaDescription:
      'Chauffeured car service to DAR Constitution Hall near the White House and State Department — concerts, graduations and galas. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '4 mi · 10–20 minutes' },
      { label: 'To Dulles (IAD)', value: '28 mi · 40–55 minutes' },
      { label: 'To BWI', value: '36 mi · 50–70 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'DAR Constitution Hall, a few blocks from the White House and the State Department in the West End, has hosted concerts, high-school and university graduations, and galas for nearly a century, in one of DC\'s oldest and most consistently booked auditoriums. DCA Limos runs chauffeured sedans, SUVs and Sprinter vans to its 18th Street entrance, through a part of downtown where street parking is scarce even on a quiet day.',
      'Graduation season brings the hall\'s highest volume and its tightest curb — families picking up a graduate and flowers at the same time, during the same half-hour window as several hundred other cars. A chauffeur staged at an agreed corner beats circling the block waiting for a text.',
    ],
    highlights: [
      'Door-to-door service to Constitution Hall\'s 18th Street entrance',
      'Pickup timed to a concert\'s encore or a graduation ceremony\'s actual end, not the printed schedule',
      'Sprinter vans for graduation families bringing flowers, gifts and multiple generations',
      'Easy pairing with a dinner stop in Foggy Bottom or the West End before or after the event',
      'Stretch limousines for galas and formal evening events',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'A tight downtown curb, handled by someone who knows it',
        paragraphs: [
          'Constitution Hall sits inside a dense government and institutional block, a short walk from the State Department and the Octagon Museum, where street parking disappears entirely during a sold-out event and the nearest garages fill early. Our chauffeurs stage at a confirmed corner rather than the hall\'s own curb when conditions call for it, and walk the short distance to meet you if needed.',
          'Graduation ceremonies in particular bring a volume of cars that the surrounding blocks were never built for, and a pre-arranged pickup point agreed before the event avoids the worst of the post-ceremony gridlock entirely.',
        ],
      },
      {
        h2: 'Concerts, galas and graduation season',
        paragraphs: [
          'The hall\'s concert calendar runs year-round, and we track each performance\'s actual schedule rather than assuming a fixed curtain and encore time. Galas and formal fundraising events get the same stretch-limousine treatment we bring to any black-tie DC evening.',
          'Graduation season — typically late spring — is the hall\'s busiest stretch, and families booking a Sprinter van for the full extended family, flowers and all, should reserve as early as possible once a ceremony date is confirmed.',
        ],
      },
      {
        h2: 'Booking Constitution Hall transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online for your next concert, graduation or gala at DAR Constitution Hall.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Where does the chauffeur pick up and drop off at Constitution Hall?',
        a: 'At the hall\'s 18th Street entrance by default, or at a confirmed nearby corner when a sold-out event or graduation ceremony fills the immediate curb.',
      },
      {
        q: 'Can the pickup be timed to the end of a graduation ceremony?',
        a: 'Yes. We time pickups to the ceremony\'s actual end rather than the printed schedule, which tends to run long.',
      },
      {
        q: 'Do you provide Sprinter vans for a graduation family with flowers and gifts?',
        a: 'Yes. A Sprinter van is the common choice for an extended family attending a graduation together, with room for flowers and gifts alongside passengers.',
      },
      {
        q: 'Can you include a dinner stop in Foggy Bottom or the West End?',
        a: 'Yes. A single booking commonly covers a dinner drop-off nearby, a short wait or return, and the final pickup after the event.',
      },
      {
        q: 'Is Constitution Hall transportation available for every event, including weekday matinees?',
        a: 'Yes — 24 hours a day, 365 days a year, for concerts, graduations, galas and matinees alike.',
      },
    ],
    related: [
      { label: 'Foggy Bottom Limo Service', to: '/foggy-bottom-limo-service' },
      { label: 'Kennedy Center Transportation', to: '/kennedy-center-transportation' },
      { label: 'Washington DC Graduation Limo Service', to: '/washington-dc-graduation-limo' },
      { label: 'The Hamilton Live Transportation', to: '/hamilton-live-dc-transportation' },
      { label: 'DC Gala & Fundraising Dinner Transportation (blog)', to: '/blog/dc-gala-fundraising-dinner-transportation' },
      { label: 'Sports & Game Day Limo', to: '/limo/sports-game-day-limo' },
    ],
    schema: { areaServed: ['Washington, DC', 'Foggy Bottom / West End'], serviceType: 'Event transportation' },
  },
  {
    slug: 'entertainment-sports-arena-transportation',
    type: 'event',
    name: 'Entertainment & Sports Arena',
    badge: 'DC-Area Landmark',
    h1: 'Limo & Car Service to the Entertainment & Sports Arena, Washington DC',
    metaTitle: 'Entertainment & Sports Arena Car Service | DC',
    metaDescription:
      'Chauffeured car service to the Entertainment & Sports Arena at St. Elizabeths East — Mystics, Go-Go and concerts. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '6 mi · 15–25 minutes' },
      { label: 'To Dulles (IAD)', value: '32 mi · 50–70 minutes' },
      { label: 'To BWI', value: '38 mi · 55–80 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The Entertainment & Sports Arena sits on the St. Elizabeths East campus in Congress Heights, home to the WNBA\'s Washington Mystics and the Capital City Go-Go of the NBA G League, and a growing calendar of concerts and community events in Far Southeast DC. DCA Limos drives fans, visiting teams and corporate groups there in sedans, SUVs and Sprinter vans, with chauffeurs comfortable navigating a campus that is still newer and less familiar to many rideshare drivers than the District\'s downtown venues.',
      'The arena is genuinely close to Reagan National, a straightforward run via South Capitol Street and the Suitland Parkway, which makes it one of the more convenient venues in our DC coverage area for fans flying in for a game.',
    ],
    highlights: [
      'Door-to-door service to St. Elizabeths East and the arena\'s main entrance',
      'Pickup timed to the final buzzer, with flexibility for overtime or a longer-than-scheduled event',
      'Sprinter vans for groups, corporate suites and visiting-team logistics',
      'A short, direct run from Reagan National via South Capitol Street and the Suitland Parkway',
      'Chauffeurs familiar with the St. Elizabeths East campus layout and parking',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'A newer campus, driven with the same reliability',
        paragraphs: [
          'St. Elizabeths East is a newer, still-developing campus compared to the District\'s long-established downtown venues, and that newness is exactly where rideshare coverage tends to thin out — fewer drivers know the campus roads, and app-based pickup zones can be inconsistently marked on a given night. Our chauffeurs work the campus directly rather than relying on an app\'s default pin.',
          'We confirm your gate or entrance ahead of time and stage accordingly, the same discipline we bring to any venue with a layout still settling into its final form.',
        ],
      },
      {
        h2: 'Mystics, Go-Go and the arena\'s growing concert calendar',
        paragraphs: [
          'Washington Mystics games bring one of the WNBA\'s most consistently strong attendance bases to the arena, and Capital City Go-Go games add a full G League schedule alongside it. The venue\'s concert and community-event calendar has grown steadily, and we track it the same way we track every other major DC venue\'s schedule.',
          'Corporate groups entertaining clients in suites get the same sedan-to-suite, suite-to-sedan coordination we provide at Capital One Arena and Nationals Park, with a chauffeur staged and reachable through the final buzzer.',
        ],
      },
      {
        h2: 'Booking arena transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online for your next Mystics, Go-Go or concert date at the Entertainment & Sports Arena.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Where does the chauffeur pick up at the Entertainment & Sports Arena?',
        a: 'At the main entrance on the St. Elizabeths East campus by default, with the exact gate or entrance confirmed in advance.',
      },
      {
        q: 'Is the arena a quick trip from Reagan National?',
        a: 'Yes, it is one of the more convenient venues from DCA, a straightforward run via South Capitol Street and the Suitland Parkway.',
      },
      {
        q: 'Do you provide transportation for visiting teams or corporate suites?',
        a: 'Yes. Sprinter vans handle visiting-team and group logistics, and we coordinate sedan pickups for corporate suite guests the same way we do at Capital One Arena and Nationals Park.',
      },
      {
        q: 'Can the pickup be timed to the end of a Mystics or Go-Go game, including overtime?',
        a: 'Yes. We build in flexibility for a game that runs past its scheduled length and time the pickup to the actual final buzzer.',
      },
      {
        q: 'Is arena transportation available for every event, including weeknight games?',
        a: 'Yes — 24 hours a day, 365 days a year, for Mystics games, Go-Go games, concerts and community events alike.',
      },
    ],
    related: [
      { label: 'Navy Yard Limo Service', to: '/navy-yard-limo-service' },
      { label: 'Nationals Park Transportation', to: '/nationals-park-transportation' },
      { label: 'Capital One Arena Transportation', to: '/capital-one-arena-transportation' },
      { label: 'Audi Field Transportation', to: '/audi-field-transportation' },
      { label: 'Sports & Game Day Limo', to: '/limo/sports-game-day-limo' },
      { label: 'DCA Airport Limo Service', to: '/limo/dca-airport-limo' },
    ],
    schema: { areaServed: ['Washington, DC', 'Congress Heights', 'St. Elizabeths East'], serviceType: 'Event transportation' },
  },
  {
    slug: 'hamilton-live-dc-transportation',
    type: 'event',
    name: 'The Hamilton Live',
    badge: 'DC-Area Landmark',
    h1: 'Limo & Car Service to The Hamilton Live, Washington DC',
    metaTitle: 'The Hamilton Live Transportation | DC Limo',
    metaDescription:
      'Chauffeured car service to The Hamilton Live downtown — dinner and a show near Metro Center and Federal Triangle. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '5 mi · 10–20 minutes' },
      { label: 'To Dulles (IAD)', value: '28 mi · 40–60 minutes' },
      { label: 'To BWI', value: '35 mi · 45–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The Hamilton Live sits in the basement music room below the Hamilton restaurant on 14th Street, a few blocks from Metro Center and Federal Triangle, pairing a full dinner-and-a-show evening in one downtown building. DCA Limos runs chauffeured sedans, limousines and SUVs to its entrance, through a stretch of downtown where curbside parking during an evening show is close to nonexistent.',
      'Most Hamilton Live evenings combine dinner upstairs with a show downstairs, and a single chauffeured booking covers the whole arc — a drop-off before dinner, a return pickup timed to the set\'s actual end rather than its scheduled one.',
    ],
    highlights: [
      'Door-to-door service to the Hamilton\'s 14th Street entrance',
      'Pickup timed to a set\'s actual end, with flexibility for an encore or a longer-than-scheduled show',
      'A single booking covering dinner upstairs and the show downstairs',
      'Easy pairing with a walk to Penn Quarter or the National Mall before or after',
      'Stretch limousines for date nights, anniversaries and small-group celebrations',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Dinner and a show, one reservation',
        paragraphs: [
          'The building\'s dual identity — restaurant above, music room below — is exactly what makes a single chauffeured booking useful here. We drop you at the entrance for dinner, hold the reservation open for a return pickup, and are waiting when the last song ends downstairs, rather than requiring two separate car bookings for one continuous evening out.',
          'Couples and small groups treating the night as a full evening often choose a stretch limousine for the arc of the whole booking, from the dinner drop-off through the final pickup.',
        ],
      },
      {
        h2: 'A downtown curb with no real parking',
        paragraphs: [
          'Fourteenth Street between Metro Center and Federal Triangle has essentially no street parking available during a weeknight dinner rush, let alone an evening show, and the nearby commercial garages fill or charge premium event-night rates. A chauffeured drop-off at the entrance avoids both the search and the rate entirely.',
          'Our chauffeurs stage nearby rather than attempting to hold a spot directly in front, and confirm the exact pickup corner with you before the end of the show.',
        ],
      },
      {
        h2: 'Booking Hamilton Live transportation',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online for your next dinner and show at The Hamilton Live.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can one booking cover both dinner and the show at The Hamilton Live?',
        a: 'Yes. A single chauffeured booking commonly covers a dinner drop-off upstairs, a held reservation, and a final pickup timed to the end of the show downstairs.',
      },
      {
        q: 'Where does the chauffeur pick up and drop off?',
        a: 'At the Hamilton\'s 14th Street entrance, with the exact return corner confirmed with you before the show ends given limited curb space on the block.',
      },
      {
        q: 'Is street parking realistic near The Hamilton Live on a show night?',
        a: 'Not really — the block has very little street parking during a dinner rush or evening show, which is exactly why a chauffeured drop-off is popular here.',
      },
      {
        q: 'Can the pickup be timed to an encore or a longer-than-scheduled set?',
        a: 'Yes. We build flexibility into every pickup and time it to the music room\'s actual end rather than the printed schedule.',
      },
      {
        q: 'Is Hamilton Live transportation available for every show, including weeknights?',
        a: 'Yes — 24 hours a day, 365 days a year, for weeknight and weekend shows alike.',
      },
    ],
    related: [
      { label: 'Penn Quarter Limo Service', to: '/penn-quarter-limo-service' },
      { label: 'DAR Constitution Hall Transportation', to: '/dar-constitution-hall-transportation' },
      { label: 'Capital One Arena Transportation', to: '/capital-one-arena-transportation' },
      { label: 'DC Restaurant Week & Fine-Dining Date Night (blog)', to: '/blog/dc-restaurant-week-fine-dining-date-night-chauffeur' },
      { label: 'Washington DC Anniversary Limo', to: '/washington-dc-anniversary-limo' },
      { label: 'Sports & Game Day Limo', to: '/limo/sports-game-day-limo' },
    ],
    schema: { areaServed: ['Washington, DC', 'Penn Quarter', 'Federal Triangle'], serviceType: 'Event transportation' },
  },
  // ---------------------------------------------------------------------
  // NEW INDUSTRY VERTICAL
  // ---------------------------------------------------------------------
  {
    slug: 'pharma-biotech-corporate-car-service',
    type: 'service',
    name: 'Pharma & Biotech Car Service',
    badge: 'Industry Car Service',
    h1: 'Pharmaceutical & Biotech Corporate Car Service in DC, MD & VA',
    metaTitle: 'Pharma & Biotech Corporate Car Service | DC',
    metaDescription:
      'Corporate car service for pharmaceutical and biotech companies along the I-270 corridor, Rockville and Frederick. Call (877) 609-1919.',
    stats: [
      { label: 'Core corridor', value: 'I-270, Rockville to Frederick' },
      { label: 'To Reagan (DCA)', value: '30–55 minutes' },
      { label: 'To Dulles (IAD)', value: '40–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Montgomery County\'s I-270 corridor, from Rockville and Gaithersburg up through Germantown and Frederick, is one of the country\'s densest concentrations of pharmaceutical and biotech employers — a mix of federal research campuses, global drug makers and a steady churn of venture-backed startups. DCA Limos runs corporate accounts for that specific mix of travel: visiting scientists and executives flying in for a single meeting, FDA submission teams working against a filing deadline, and board members moving between a Rockville headquarters and a downtown DC investor meeting in the same day.',
      'This is a distinct kind of corporate account from a typical downtown law firm or consultancy — site visits to secure lab and manufacturing facilities, international visiting researchers unfamiliar with the area, and schedules built around regulatory deadlines rather than a fixed nine-to-five. We quote a flat, all-inclusive rate for every trip, with monthly invoicing available for companies with recurring travel.',
    ],
    highlights: [
      'Corporate accounts with monthly invoicing for I-270 corridor pharma and biotech employers',
      'Airport transfers to Reagan National, Dulles and BWI for visiting executives and researchers',
      'Chauffeurs comfortable with secure-campus visitor-vehicle check-in at research and manufacturing sites',
      'Hourly as-directed service for board visits, site tours and multi-stop investor days',
      'Discreet protocol for confidential due-diligence, licensing and acquisition-related travel',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Why the I-270 corridor is a distinct corporate account',
        paragraphs: [
          'The corridor\'s employers range from federal research institutions to multinational drug makers to small, venture-funded startups, often sharing the same office parks in Rockville, Gaithersburg and Germantown. A visiting researcher or executive flying in for a single-day site visit usually has a tight, specific schedule — a lab tour, a regulatory meeting, a flight home the same evening — that leaves little room for a late or unreliable pickup.',
          'Our chauffeurs are comfortable with the visitor-vehicle registration and campus check-in procedures common at secure research and manufacturing facilities, and confirm those details with your office ahead of the visit rather than discovering them at the gate.',
        ],
      },
      {
        h2: 'Investor days, board visits and multi-stop schedules',
        paragraphs: [
          'A biotech board visit or investor day often moves between a Rockville or Gaithersburg headquarters, a downtown DC meeting, and an airport departure in the same day, and hourly as-directed service keeps one chauffeur and one vehicle with the group through every stop rather than booking separate point-to-point rides.',
          'Confidential due-diligence, licensing and acquisition-related travel is common enough in this industry that we treat every corporate pickup with the same discretion, regardless of whether the trip is announced on a public calendar or not.',
        ],
      },
      {
        h2: 'Setting up a corporate account',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online to set up a monthly-invoiced corporate account for your pharma or biotech company\'s recurring airport, site-visit and investor-day travel along the I-270 corridor.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you serve the whole I-270 pharma and biotech corridor, or just one city?',
        a: 'The whole corridor — Rockville, Gaithersburg, Germantown and Frederick — along with downtown DC for investor meetings and all three regional airports.',
      },
      {
        q: 'Can chauffeurs handle secure-campus check-in at a research or manufacturing facility?',
        a: 'Yes. Our chauffeurs are experienced with visitor-vehicle registration procedures at secure campuses, and we confirm the specific requirements with your office ahead of the visit.',
      },
      {
        q: 'Do you offer monthly invoicing for a corporate account?',
        a: 'Yes. Monthly invoicing is available for pharma and biotech companies with recurring travel needs.',
      },
      {
        q: 'Can one chauffeur handle a multi-stop investor day across the DC area?',
        a: 'Yes. Hourly as-directed service keeps one chauffeur and one vehicle with your group through every stop on the schedule.',
      },
      {
        q: 'How discreet is this service for confidential business travel?',
        a: 'Every corporate pickup is handled with the same discretion, whether the trip involves a public announcement or a confidential due-diligence or licensing matter.',
      },
    ],
    related: [
      { label: 'Rockville Limo Service', to: '/rockville-limo-service' },
      { label: 'Gaithersburg Limo Service', to: '/gaithersburg-limo-service' },
      { label: 'Germantown Limo Service', to: '/germantown-limo-service' },
      { label: 'Frederick Limo Service', to: '/frederick-limo-service' },
      { label: 'Healthcare & Medical Corporate Car Service', to: '/healthcare-corporate-car-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: {
      areaServed: ['Rockville, MD', 'Gaithersburg, MD', 'Germantown, MD', 'Frederick, MD', 'Washington, DC'],
      serviceType: 'Corporate car service',
    },
  },
  // ---------------------------------------------------------------------
  // NEW OCCASION
  // ---------------------------------------------------------------------
  {
    slug: 'milestone-birthday-car-service-dc-md-va',
    type: 'service',
    name: 'Milestone Birthday Car Service',
    badge: 'Occasion Transportation',
    h1: 'Milestone Birthday Car Service in DC, Maryland & Virginia',
    metaTitle: 'Milestone Birthday Car Service | DC, MD & VA',
    metaDescription:
      'Chauffeured car service for milestone birthday celebrations — 40th, 50th, 60th and beyond — across DC, Maryland & Virginia. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'Washington DC, Maryland & Virginia' },
      { label: 'To Reagan (DCA)', value: 'Direct pickup anywhere in the DMV' },
      { label: 'Group size', value: 'Sedan to Sprinter van' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'A milestone birthday — 40th, 50th, 60th and beyond — tends to involve more planning than a typical night out: a surprise arrival to coordinate, an out-of-town venue, or a group of friends and family who all need to get home safely after a long celebration. DCA Limos handles the transportation side of that evening, from a single stretch limousine for the guest of honor to a Sprinter van shuttling the whole party between a dinner, a bar and home.',
      'We also coordinate surprise-party logistics specifically — timing a pickup so the guest of honor arrives at exactly the right moment, without tipping off the surprise on the way there.',
    ],
    highlights: [
      'Stretch limousines and sedans for the guest of honor\'s arrival',
      'Sprinter vans for the full party, including a safe ride home for everyone after a long celebration',
      'Surprise-party pickup timing coordinated in advance without tipping off the guest of honor',
      'Multi-stop evenings covering dinner, a bar or venue and the ride home on one booking',
      'Service across Washington DC, Maryland and Virginia with no distance surcharge within our coverage area',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
    ],
    sections: [
      {
        h2: 'Coordinating a surprise birthday pickup',
        paragraphs: [
          'A surprise milestone birthday usually depends on precise timing — the guest of honor needs to arrive at the exact moment guests are ready, with no early tip-off from a car idling outside too long or a driver mentioning the destination by accident. We confirm the plan with the organizer ahead of time, including any cover story for where the trip is "actually" headed, and brief the chauffeur accordingly.',
          'The same coordination applies to a milestone birthday built around an out-of-town or out-of-state guest flying in: we track the flight and time the airport pickup to land the guest of honor at the party with the right amount of buffer, not too early and not stuck in traffic.',
        ],
      },
      {
        h2: 'A full party, one safe ride home',
        paragraphs: [
          'Milestone birthdays tend to run long, with a full evening of dinner, drinks and dancing, and a Sprinter van is the practical way to get the whole group home safely afterward rather than splitting into several rideshares at 1 a.m. We stage the van nearby and bring it back around at the agreed time, or whenever the group is actually ready to leave.',
          'For a smaller celebration, a sedan or SUV covers the guest of honor and a close circle of family or friends for the full evening, moving between a dinner reservation and a bar or lounge afterward.',
        ],
      },
      {
        h2: 'Booking a milestone birthday celebration',
        paragraphs: [
          'Call (877) 609-1919 or request a quote online — tell us the shape of the evening (surprise or not, group size, number of stops) and we will confirm the right vehicle and a flat rate before you book.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you coordinate a surprise birthday pickup without tipping off the guest of honor?',
        a: 'Yes. We confirm the plan, including any cover story for the destination, with the organizer ahead of time and brief the chauffeur accordingly.',
      },
      {
        q: 'What vehicle works best for a milestone birthday party with a full guest list?',
        a: 'A Sprinter van is the common choice for getting a full party home safely after a long celebration, while a sedan or SUV suits the guest of honor and a smaller close circle.',
      },
      {
        q: 'Can you time an airport pickup for an out-of-town guest arriving for the party?',
        a: 'Yes. We track the flight and time the pickup so the guest arrives at the celebration with the right buffer, not too early and not stuck in traffic.',
      },
      {
        q: 'Can one booking cover dinner, a bar and the ride home?',
        a: 'Yes. A single booking commonly covers a multi-stop evening — dinner, a bar or venue, and a final ride home for everyone.',
      },
      {
        q: 'Is milestone birthday car service available anywhere in DC, Maryland or Virginia?',
        a: 'Yes, with no distance surcharge within our standard coverage area — call or request a quote with your specific pickup and drop-off details.',
      },
    ],
    related: [
      { label: 'Washington DC Anniversary Limo', to: '/washington-dc-anniversary-limo' },
      { label: 'Retirement Party & Career Milestone Transportation (blog)', to: '/blog/retirement-party-career-milestone-transportation-dc' },
      { label: 'Quinceañera Limo Service', to: '/quinceanera-limo-service' },
      { label: 'Bar & Bat Mitzvah Limo Service (blog)', to: '/blog/bar-bat-mitzvah-limo-service-dmv' },
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Washington, DC', 'Maryland', 'Virginia'], serviceType: 'Occasion transportation' },
  },
];
