// Batch 6 (2026-10-12 SEO pass): 9 new pages closing keyword gaps identified
// during a full-site SEO audit — 2 new Maryland city pages (Ellicott City,
// Upper Marlboro), 3 new real venue pages (Six Flags America, Glenstone
// Museum, George Washington's Mount Vernon) and 4 new vehicle/service-occasion
// pages (Sprinter van rental, stretch limo rental, quinceañera, funeral &
// memorial car service) that had zero dedicated landing page before this.
// Same shape as marylandPages.js / marylandPagesBatch3/4/5.js — spread into
// MARYLAND_PAGES.
export const MARYLAND_BATCH6 = [
  {
    slug: 'ellicott-city-limo-service',
    type: 'city',
    name: 'Ellicott City',
    badge: 'Maryland Cities',
    h1: 'Ellicott City Limo Service & Car Service',
    metaTitle: 'Ellicott City MD Limo Service | Historic District',
    metaDescription:
      'Limo and car service in Ellicott City, MD — historic Main Street, Turf Valley Resort and BWI transfers. DCA 45–60 min, BWI 20–30 min. Call (877) 609-1919.',
    stats: [
      { label: 'To BWI', value: '15 mi · 20–30 minutes' },
      { label: 'To Reagan (DCA)', value: '32 mi · 45–60 minutes' },
      { label: 'To Dulles (IAD)', value: '48 mi · 65–85 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Ellicott City\'s granite storefronts and steep Main Street, built into the Patapsco River valley in the 1800s, make it one of the most distinctive — and most carefully preserved — downtowns in Maryland. DCA Limos runs sedans, SUVs and Sprinter vans through the historic district daily, with chauffeurs who know the narrow one-way streets, the limited parking and the B&O Railroad Museum at the bottom of the hill.',
      'Howard County\'s seat is also a wedding and event destination in its own right, anchored by Turf Valley Resort just north of downtown, and a steady stop for Baltimore and Columbia commuters heading to BWI, 15 miles and 20 to 30 minutes away. Reagan National is 32 miles out and Dulles 48, both covered with the same flat-rate, flight-tracked service.',
    ],
    highlights: [
      'BWI transfers in as little as 20–30 minutes — the closest major airport to Ellicott City',
      'Flat, all-inclusive quotes with no surge pricing, confirmed before you book',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know historic Main Street\'s narrow streets, the B&O Railroad Museum and Turf Valley Resort',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Wedding and event coordination for Turf Valley Resort and historic district venues',
    ],
    sections: [
      {
        h2: 'A chauffeur who knows the historic district',
        paragraphs: [
          'Main Street in Ellicott City is steep, narrow and one-way in places, with street parking that disappears fast on a weekend. Our chauffeurs know which lots to stage in and which entrances work for a restaurant or shop pickup without blocking the street, and they watch the Patapsco River forecast the way locals do, since the lower end of Main Street is the first to close in heavy rain.',
          'Beyond downtown, Turf Valley Resort anchors the area\'s wedding and golf-outing business, and the B&O Railroad Museum — housed in the oldest surviving railroad station in America — draws visitors who often pair a museum stop with lunch on Main Street. Both are regular pickups for us.',
        ],
      },
      {
        h2: 'Airport car service from Ellicott City',
        paragraphs: [
          'BWI Marshall: 15 miles, 20–30 minutes, mostly via I-70 and the Baltimore-Washington Parkway — the fastest and most frequently booked airport run from Ellicott City. Reagan National: 32 miles, 45–60 minutes, via I-95 and the Beltway. Dulles: 48 miles, 65–85 minutes, via I-70 and I-270. Every pickup includes real-time flight tracking with complimentary wait time, and your chauffeur meets you curbside or inside baggage claim, your choice.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'weddings and celebrations' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Ellicott City to BWI cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address — typically our most economical airport run given how close Ellicott City sits to BWI. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Ellicott City to BWI, DCA or Dulles?',
        a: 'BWI is about 20–30 minutes (15 miles), Reagan National about 45–60 minutes (32 miles) and Dulles about 65–85 minutes (48 miles) from Ellicott City, depending on traffic.',
      },
      {
        q: 'Can you handle a wedding at Turf Valley Resort?',
        a: 'Yes. We regularly stage Sprinter vans and stretch limousines at Turf Valley for bridal parties and guest shuttles, with a chauffeur who knows the property\'s loading areas.',
      },
      {
        q: 'Do you navigate the historic district\'s narrow streets and parking?',
        a: 'Yes. Our chauffeurs know where to stage near Main Street without blocking traffic, and we monitor flood advisories on the lower end of Main Street during heavy rain.',
      },
      {
        q: 'Is DCA Limos available in Ellicott City overnight and on holidays?',
        a: 'Yes — 24 hours a day, 365 days a year, including pre-dawn airport departures and late-night arrivals.',
      },
    ],
    related: [
      { label: 'Columbia Limo Service', to: '/limo/columbia-limo-service' },
      { label: 'Baltimore Limo Service', to: '/limo/baltimore-limo-service' },
      { label: 'Clarksville Limo Service', to: '/clarksville-limo-service' },
      { label: 'Towson Limo Service', to: '/towson-limo-service' },
      { label: 'DCA to Columbia, MD', to: '/dca-to-columbia-md' },
    ],
    schema: { areaServed: ['Ellicott City, MD', 'Howard County'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'upper-marlboro-limo-service',
    type: 'city',
    name: 'Upper Marlboro',
    badge: 'Maryland Cities',
    h1: 'Upper Marlboro Limo Service & Car Service',
    metaTitle: 'Upper Marlboro MD Limo Service | PG County Seat',
    metaDescription:
      'Limo and car service in Upper Marlboro, MD — Prince George\'s County seat, Six Flags America & Joint Base Andrews. DCA 30–40 min. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '20 mi · 30–40 minutes' },
      { label: 'To BWI', value: '25 mi · 35–45 minutes' },
      { label: 'To Dulles (IAD)', value: '45 mi · 60–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Upper Marlboro is Prince George\'s County\'s seat of government — the county courthouse, the county executive\'s offices and a steady flow of legal and government travel all run through this small historic town. DCA Limos runs chauffeured sedans, SUVs and Sprinter vans through Upper Marlboro daily, from courthouse appointments to family outings at nearby Six Flags America.',
      'The town sits close to Joint Base Andrews, home to Air Force One, which brings a particular kind of discreet, background-checked corporate and contractor travel to our Upper Marlboro bookings. Reagan National is 20 miles away — about 30 to 40 minutes — and we cover BWI and Dulles with the same flat-rate, flight-tracked service.',
    ],
    highlights: [
      'Prince George\'s County courthouse and government travel, booked with discretion',
      'Flat, all-inclusive quotes with no surge pricing, confirmed before you book',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know Six Flags America, Watkins Regional Park and the roads around Joint Base Andrews',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Background-checked chauffeurs for contractor and government-adjacent travel near Joint Base Andrews',
    ],
    sections: [
      {
        h2: 'Courthouse, county government and Joint Base Andrews travel',
        paragraphs: [
          'As the Prince George\'s County seat, Upper Marlboro sees a steady stream of attorneys, litigants and county employees moving between the courthouse, the county administration building and Washington or Baltimore for related business. We run that traffic with sedans and SUVs, keeping appointments on schedule with a chauffeur who already knows where the courthouse permits standing and where it does not.',
          'Joint Base Andrews sits just northwest of town, and visitor and contractor transportation tied to the base follows its own ID and access procedures; we brief chauffeurs on current gate requirements before any pickup tied to the installation.',
        ],
      },
      {
        h2: 'Family outings and airport transfers',
        paragraphs: [
          'Six Flags America and the neighboring Hurricane Harbor water park, along with Watkins Regional Park\'s miniature train and carousel, make Upper Marlboro a regular family-outing pickup — a Sprinter van keeps a larger group together for the ride home rather than splitting across cars in a crowded parking lot. Reagan National is 20 miles (30–40 minutes), BWI 25 miles (35–45 minutes) and Dulles 45 miles (60–75 minutes), each with flight tracking and complimentary wait time included.',
        ],
      },
      {
        h2: 'Rosaryville State Park and the town\'s historic core',
        paragraphs: [
          'South of downtown, Rosaryville State Park\'s wooded trails and the adjacent Patuxent River make for a quieter counterpoint to the theme-park crowds at Six Flags America, and we run as many riding-club and trailhead drop-offs there as we do courthouse appointments. The park has limited parking of its own, which makes a scheduled pickup useful on busy weekends when the lot fills.',
          'Upper Marlboro\'s own historic core — a small cluster of 18th- and 19th-century buildings around the courthouse, including the old jail and the Darnall\'s Chance House Museum — is easy to underestimate on a map but genuinely walkable once you are dropped at the right corner. Chauffeurs who run this route regularly know which side streets still carry two-way traffic and which have been narrowed for pedestrians during court sessions, so a pickup outside the courthouse during a trial recess does not turn into a scramble.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and attorneys' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and government travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'family outings and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'celebrations and special occasions' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Upper Marlboro to DCA cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Upper Marlboro to DCA, BWI or Dulles?',
        a: 'Reagan National is about 30–40 minutes (20 miles), BWI about 35–45 minutes (25 miles) and Dulles about 60–75 minutes (45 miles) from Upper Marlboro, depending on traffic.',
      },
      {
        q: 'Can you handle courthouse or county government appointments?',
        a: 'Yes. We run attorneys, litigants and county staff between the Upper Marlboro courthouse, county offices and destinations across the region, timed to appointments.',
      },
      {
        q: 'Do you provide transportation near Joint Base Andrews?',
        a: 'Yes, for visitor and contractor travel. Chauffeurs are briefed on current base access and ID procedures before any pickup tied to the installation, since requirements can change.',
      },
      {
        q: 'Can you take a family to Six Flags America?',
        a: 'Yes. A Sprinter van keeps a larger family or group together for the ride to and from Six Flags America and Hurricane Harbor, including drop-off and a scheduled pickup.',
      },
    ],
    related: [
      { label: 'Bowie Limo Service', to: '/bowie-limo-service' },
      { label: 'Six Flags America Transportation', to: '/six-flags-america-transportation' },
      { label: 'College Park Limo Service', to: '/college-park-md-limo-service' },
      { label: 'Laurel Limo Service', to: '/laurel-limo-service' },
      { label: 'DCA to Waldorf, MD', to: '/dca-to-waldorf-md' },
    ],
    schema: { areaServed: ['Upper Marlboro, MD', "Prince George's County"], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'six-flags-america-transportation',
    type: 'event',
    name: 'Six Flags America',
    badge: 'Events & Venues',
    h1: 'Six Flags America Transportation',
    metaTitle: 'Six Flags America Transportation | Bowie, MD',
    metaDescription:
      'Chauffeured car service to Six Flags America in Bowie, MD — group Sprinter vans, flat rates, 24/7. Call (877) 609-1919 for a free quote.',
    stats: [
      { label: 'Location', value: 'Bowie, MD' },
      { label: 'To Reagan (DCA)', value: '20 mi · 30–40 minutes' },
      { label: 'To BWI', value: '25 mi · 35–45 minutes' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'Six Flags America, Maryland\'s largest theme and water park, draws families and groups from across the DMV all season — and its parking lot is one of the worst places to end a long day with tired kids. DCA Limos drops your group at the gate and is waiting again when the park closes, so the day ends the same way it started: without a parking-lot walk or a lost-car search.',
      'The park sits in Bowie, in Prince George\'s County, roughly 20 miles and 30 to 40 minutes from Reagan National — a convenient stop for visiting families flying in for a theme-park day before or after other DC-area plans.',
    ],
    highlights: [
      'Drop-off and pickup steps from the Six Flags America gate — no parking-lot walk',
      'Sprinter vans for groups and multi-family outings (up to 14 passengers)',
      'Flat, all-inclusive quotes with no surge pricing for after-dark closing-time pickups',
      'Coordinated pickup timing for fireworks nights and extended summer hours',
      'Combine with airport transfers for visiting families flying into DCA or BWI',
    ],
    sections: [
      {
        h2: 'Why a reserved pickup beats the parking lot',
        paragraphs: [
          'Six Flags America\'s lot fills early on summer weekends and empties slowly at closing, when thousands of tired families try to leave within the same twenty minutes. A pre-arranged chauffeur waits at a designated pickup point rather than competing for a lane out of the lot, which is usually the single biggest time-saver of the whole visit.',
          'We also track closing-time changes on fireworks nights and extended summer hours, so your pickup is staged for the park\'s actual schedule that day rather than its standard posted hours.',
        ],
      },
      {
        h2: 'Coasters, Hurricane Harbor and planning a group day',
        paragraphs: [
          'Six Flags America packs a full-size coaster lineup — Superman: Ride of Steel, Wild One and the Joker among them — into the same gate as Hurricane Harbor\'s water slides and wave pool, so a typical visit splits between dry clothes in the morning and swimwear by early afternoon. Groups often arrive with coolers, towels and changing bags on top of the usual theme-park gear, which is exactly the kind of load a Sprinter van handles better than a sedan trunk.',
          'For birthday parties, church youth groups, company outings and multi-family trips, we book the van for the full day rather than a single drop-off and pickup, so the chauffeur is available if the group wants to leave early for a storm delay or simply decides to call it a day ahead of schedule. Confirm your group size and whether you need gear space for Hurricane Harbor when you book, and we will size the vehicle accordingly. Season pass holders who visit Six Flags America repeatedly through the summer often set up a standing arrangement with dispatch rather than booking fresh each time, which simplifies the back-and-forth on a trip you already know by heart.',
        ],
      },
    ],
    vehicles: [
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families with gear' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'larger families' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'multi-family groups and parties' },
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'couples and small groups' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'a comfortable solo or two-person visit' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'a group birthday or celebration day' },
    ],
    faqs: [
      {
        q: 'Can you drop us off right at the Six Flags America entrance?',
        a: 'Yes. Your chauffeur drops off and picks up at a designated point near the main gate, avoiding the general parking lot entirely.',
      },
      {
        q: 'Do you adjust pickup time for fireworks nights or extended hours?',
        a: 'Yes. We track the park\'s posted schedule for that specific day and stage the pickup against actual closing time, not the standard hours.',
      },
      {
        q: 'What vehicle works best for two or three families together?',
        a: 'A Mercedes Sprinter van seats up to 14 and keeps everyone — and the gear — in one vehicle rather than splitting across cars.',
      },
      {
        q: 'Can we combine a Six Flags trip with an airport transfer?',
        a: 'Yes. Many visiting families book an airport pickup and a Six Flags transfer together as one reservation. Call (877) 609-1919 to arrange both.',
      },
      {
        q: 'Is pricing flat rate for a Six Flags trip?',
        a: 'Yes. Every trip is quoted as a flat, all-inclusive rate confirmed before you book — no surge pricing at closing time.',
      },
    ],
    related: [
      { label: 'Upper Marlboro Limo Service', to: '/upper-marlboro-limo-service' },
      { label: 'Bowie Limo Service', to: '/bowie-limo-service' },
      { label: 'College Park Limo Service', to: '/college-park-md-limo-service' },
      { label: 'BWI Airport Limo Service', to: '/limo/bwi-airport-limo' },
    ],
    schema: { areaServed: ['Bowie, MD', "Prince George's County"], serviceType: 'Event transportation' },
  },
  {
    slug: 'glenstone-museum-transportation',
    type: 'event',
    name: 'Glenstone Museum',
    badge: 'Events & Venues',
    h1: 'Glenstone Museum Transportation',
    metaTitle: 'Glenstone Museum Transportation | Potomac, MD',
    metaDescription:
      'Chauffeured car service to Glenstone Museum in Potomac, MD — timed-entry visits, flat rates, discreet luxury sedans. Call (877) 609-1919.',
    stats: [
      { label: 'Location', value: 'Potomac, MD' },
      { label: 'To Reagan (DCA)', value: '18 mi · 30–40 minutes' },
      { label: 'To Dulles (IAD)', value: '20 mi · 30–40 minutes' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'Glenstone, the contemporary art museum and sculpture park set across 300 acres in Potomac, Maryland, is free to visit but requires a timed-entry reservation — and its long, winding entrance drive is built for a quiet arrival, not a rideshare drop-off scramble. DCA Limos brings exactly that: a chauffeur who arrives on time for your reservation window and waits discreetly while you tour the Pavilions and grounds.',
      'Potomac sits close to both downtown DC and the Dulles corridor, roughly 18 miles from Reagan National and 20 from Dulles, which makes Glenstone an easy add-on to an airport layover or a day already built around Bethesda or Rockville.',
    ],
    highlights: [
      'Timed arrival built around your Glenstone reservation window',
      'Discreet luxury sedans suited to the museum\'s quiet, art-focused atmosphere',
      'Hourly chauffeur service to pair a Glenstone visit with Bethesda or Potomac dining',
      'Flat, all-inclusive quotes with no surge pricing',
      'Easy add-on to a Dulles or Reagan National layover itinerary',
    ],
    sections: [
      {
        h2: 'Visiting Glenstone by chauffeured car',
        paragraphs: [
          'Because entry is by timed reservation only, arriving a few minutes early with margin for traffic matters more here than at most venues — a missed window can mean waiting for the next available slot. We build your pickup time backward from your confirmed entry time and the day\'s traffic on River Road and Glen Road.',
          'Many visitors pair the museum with lunch or dinner in Bethesda, Potomac Village or Rockville; an hourly chauffeur keeps the whole afternoon on one reservation rather than booking separate rides for each stop.',
        ],
      },
      {
        h2: 'A fit for the occasion',
        paragraphs: [
          'Glenstone draws a particular kind of visitor — art collectors, corporate clients entertaining out-of-town guests, and families marking a special occasion with a quieter day than the National Mall\'s crowds. We send a sedan or SUV rather than anything flashy, matching the museum\'s own understated design, and chauffeurs are briefed to keep a respectful distance once you are inside the grounds.',
          'Because the property is spread across rolling meadows and wooded paths between the Pavilions, the Gallery and the Water Court, some visitors prefer the chauffeur to reposition the vehicle between distant parking areas rather than walking the full loop — just mention it when you book and we will plan accordingly.',
        ],
      },
      {
        h2: 'Pairing Glenstone with the rest of Potomac and River Road',
        paragraphs: [
          'Glenstone sits along a stretch of River Road that also passes close to the C&O Canal towpath and several of Potomac\'s private equestrian properties, so a chauffeur who works this corridor regularly knows the difference between the museum\'s own gated entrance and the easy-to-miss turns for the handful of other estates nearby. Signage at the entrance is deliberately understated, by design, which first-time visitors sometimes drive past before realizing it.',
          'Corporate clients occasionally use Glenstone for a quiet client outing before or after a Bethesda meeting, and we treat that booking the same as any executive transfer — a sedan staged early, a chauffeur who stays out of the way, and an exact pickup time coordinated with the museum\'s posted closing hours rather than a guess.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'couples and small groups' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'a quiet, discreet arrival' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'small groups' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'families and friend groups' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'larger museum groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'a special-occasion visit' },
    ],
    faqs: [
      {
        q: 'Do I need a reservation to visit Glenstone?',
        a: 'Yes, Glenstone requires a free timed-entry reservation. Confirm your window on the museum\'s site, then book your car service around that exact time.',
      },
      {
        q: 'How far is Glenstone from Reagan National or Dulles?',
        a: 'About 18 miles and 30–40 minutes from Reagan National, and about 20 miles and 30–40 minutes from Dulles, depending on traffic on River Road.',
      },
      {
        q: 'Can the chauffeur wait while we tour the grounds?',
        a: 'Yes. Hourly as-directed service keeps the same chauffeur and vehicle with you for the visit and any stops afterward.',
      },
      {
        q: 'Can we add a stop in Bethesda or Potomac Village afterward?',
        a: 'Yes. Tell us when you book and we will plan the itinerary as one hourly reservation.',
      },
      {
        q: 'Is pricing flat rate for a Glenstone visit?',
        a: 'Yes, point-to-point trips are flat rate; a visit combined with other stops is typically booked hourly. Call (877) 609-1919 for a quote.',
      },
    ],
    related: [
      { label: 'Potomac, MD Limo Service', to: '/potomac-md-limo-service' },
      { label: 'Bethesda Limo Service', to: '/bethesda-limo-service' },
      { label: 'North Bethesda Limo Service', to: '/north-bethesda-limo-service' },
      { label: 'Rockville Limo Service', to: '/rockville-limo-service' },
    ],
    schema: { areaServed: ['Potomac, MD', 'Montgomery County'], serviceType: 'Event transportation' },
  },
  {
    slug: 'mount-vernon-estate-transportation',
    type: 'event',
    name: "George Washington's Mount Vernon",
    badge: 'Events & Venues',
    h1: "George Washington's Mount Vernon Transportation",
    metaTitle: "Mount Vernon Estate Transportation | DCA Limos",
    metaDescription:
      "Chauffeured car service to George Washington's Mount Vernon in Fairfax County, VA — flat rates, flexible hourly tours. Call (877) 609-1919.",
    stats: [
      { label: 'Location', value: 'Mount Vernon, VA' },
      { label: 'To Reagan (DCA)', value: '18 mi · 30–40 minutes' },
      { label: 'To Old Town Alexandria', value: '8 mi · 15–20 minutes' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'George Washington\'s Mount Vernon sits at the southern end of the George Washington Memorial Parkway, a scenic stretch of road that is itself part of the visit — river views, the National Park Service\'s wooded buffer, and no commercial development to break the drive. DCA Limos runs that route daily, for history-minded visitors flying through Reagan National and for families and school groups touring the estate as part of a longer DC itinerary.',
      'Mount Vernon is about 18 miles and 30 to 40 minutes from Reagan National, and just 8 miles from Old Town Alexandria, making it an easy half-day add-on to an Alexandria stay or a DC sightseeing day booked by the hour.',
    ],
    highlights: [
      'The full Parkway drive handled for you — no self-navigating the scenic route',
      'Hourly chauffeur service that waits while you tour the mansion and grounds',
      'Easy pairing with Old Town Alexandria dining or shopping, 8 miles north',
      'Flat, all-inclusive quotes with no surge pricing',
      'Group-friendly Sprinter vans for school, church or tour groups',
    ],
    sections: [
      {
        h2: 'Touring Mount Vernon by the hour',
        paragraphs: [
          'Most visitors spend two to three hours at Mount Vernon between the mansion tour, the outbuildings, the distillery and gristmill a short drive away, and the riverside grounds — an hourly reservation means your chauffeur simply waits rather than you arranging a return trip or a second rideshare from a spot with notoriously thin cell coverage.',
          'Families with older relatives or young children in particular benefit from a single chauffeur who stays with the group all day, since the estate\'s grounds involve a fair amount of walking between the mansion, the tomb and the river overlook.',
        ],
      },
      {
        h2: 'The gardens, distillery and gristmill beyond the mansion',
        paragraphs: [
          'Most first-time visitors budget time for the mansion tour and underestimate how much else is on the property — the restored pioneer farm, the upper and lower gardens, the wharf on the Potomac, and Washington\'s reconstructed whiskey distillery and gristmill, which sit a few miles from the main estate and require a separate short drive most self-guided visitors skip entirely for lack of a car. We build that second stop into the itinerary on request, so a group that wants the fuller picture of the working 18th-century estate is not limited to whatever is walkable from the main gate.',
          'The estate also runs seasonal programming — wreath-making workshops in December, Revolutionary War encampment weekends, and an active archaeology program — that can extend a visit well past the two-to-three-hour baseline, so tell us if you are coming for a specific event and we will plan the pickup around its actual end time rather than the estate\'s standard closing hour. Evening programs in warmer months, including candlelight tours, run later than the standard daytime closing, and we adjust the pickup window to match whichever schedule applies on your visit date.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'couples and small groups' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families with older relatives' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'school and tour groups' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive visitors' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'larger families with gear' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'a special-occasion estate visit' },
    ],
    faqs: [
      {
        q: 'How far is Mount Vernon from Reagan National Airport?',
        a: 'About 18 miles and 30–40 minutes via the George Washington Memorial Parkway, depending on traffic.',
      },
      {
        q: 'Can the chauffeur wait while we tour the estate?',
        a: 'Yes. Hourly as-directed service keeps the same chauffeur and vehicle with your group for the full visit, typically two to three hours.',
      },
      {
        q: 'Can we combine a Mount Vernon visit with Old Town Alexandria?',
        a: 'Yes. Old Town is just 8 miles north, and many visitors pair the two as one half-day hourly booking.',
      },
      {
        q: 'Do you handle school or tour group visits?',
        a: 'Yes. Sprinter vans seat up to 14, and we coordinate multiple vehicles for larger school, church or tour groups.',
      },
      {
        q: 'Is pricing flat rate or hourly for a Mount Vernon trip?',
        a: 'A simple drop-off and return is flat rate; a visit where the chauffeur waits is booked hourly. Call (877) 609-1919 for a quote.',
      },
    ],
    related: [
      { label: 'Alexandria, VA Limo Service', to: '/alexandria-va-limo-service' },
      { label: 'Old Town Alexandria Transportation Guide', to: '/old-town-alexandria-transportation-guide' },
      { label: 'Arlington, VA Limo Service', to: '/arlington-va-limo-service' },
      { label: 'Lorton, VA Limo Service', to: '/lorton-va-limo-service' },
      { label: 'DCA to Alexandria, VA', to: '/dca-to-alexandria' },
    ],
    schema: { areaServed: ['Mount Vernon, VA', 'Fairfax County'], serviceType: 'Event transportation' },
  },
  {
    slug: 'sprinter-van-rental-with-driver',
    type: 'service',
    name: 'Sprinter Van Rental with Driver',
    badge: 'Signature Service',
    h1: 'Sprinter Van Rental with Driver — Car Service in DC, MD & VA',
    metaTitle: 'Sprinter Van Rental with Driver | DC, MD & VA',
    metaDescription:
      'Chauffeured Sprinter van rental for groups up to 14 across DC, Maryland & Virginia — weddings, airport runs, corporate. Call (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, MD & Northern VA' },
      { label: 'Capacity', value: 'Up to 14 passengers' },
      { label: 'Pricing', value: 'Flat rate or hourly' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'A 14-passenger Mercedes Sprinter van with a professional chauffeur is the simplest fix for the problem every group trip eventually hits: too many people for one car, too much coordination for three. DCA Limos runs Sprinter vans across Washington DC, Maryland and Northern Virginia for wedding parties, corporate roadshows, airport group transfers, sports outings and family reunions — one reservation, one chauffeur, everyone arriving together.',
      'Unlike a self-drive rental, a chauffeured Sprinter needs no one in the group to navigate, find parking, or stay sober enough to drive — the chauffeur handles the route, the loading zone and the wait while the group handles the actual occasion.',
    ],
    highlights: [
      'Seats up to 14 passengers with luggage or gear space',
      'One flat rate or hourly rate for the whole group — no splitting a bill across rideshares',
      'Common for weddings, airport groups, corporate roadshows, sports outings and reunions',
      'Licensed, background-checked chauffeur included — not a self-drive rental',
      'Multiple Sprinter vans coordinated for larger groups under one booking',
    ],
    sections: [
      {
        h2: 'When a Sprinter van beats splitting into separate cars',
        paragraphs: [
          'Airport pickups for a family or travel group of six or more are the clearest case: rather than two or three separate cars arriving at different times, one Sprinter van and one chauffeur handle everyone and all the luggage in a single, flight-tracked trip. The same logic applies to a wedding party moving between getting-ready locations, the ceremony and the reception, or a corporate team moving as a unit between a hotel and an all-day offsite.',
          'Because it is a chauffeured reservation rather than a self-drive rental, there is no second driver to designate, no unfamiliar vehicle to park, and no one left out of the toast because they are behind the wheel.',
        ],
      },
      {
        h2: 'Why a chauffeured Sprinter beats a self-drive 15-passenger van',
        paragraphs: [
          'A self-drive 15-passenger rental van is a different proposition than it looks on a reservation screen: many personal auto policies and even some rental-company policies restrict who can drive one, the vehicle handles nothing like a car in a highway merge or a tight parking structure, and whoever is behind the wheel is on the hook for every toll, parking ticket and fender-bender for the rest of the group. A chauffeured Mercedes Sprinter removes all of that — commercial insurance covers the vehicle, a professional driver who knows the local roads handles the merge onto the Beltway or the turn into a hotel loading zone, and nobody in the wedding party or the office has to volunteer to stay sober or skip the toast.',
          'It also solves the DC-specific headaches that make a rented van worse than useless downtown: there is no Georgetown or Capitol Hill street the chauffeur has not already staged on before, no hunting for a legal place to park a 23-foot van near a rowhouse wedding, and no guessing which loading dock a hotel actually wants a large vehicle to use. Wine-tour groups in Northern Virginia and Maryland get the same benefit at wineries with gravel lots and single-lane driveways that a rental-van driver would rather not attempt after a tasting.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'groups, weddings and corporate teams' },
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'a smaller advance or support vehicle' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP travel alongside the group van' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'a mid-size group with extra luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'a mid-size group with extra luggage' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'pairing with the Sprinter for a milestone event' },
    ],
    faqs: [
      {
        q: 'How many passengers fit in a Sprinter van?',
        a: 'Up to 14 passengers, with room for luggage or event gear depending on the configuration. Call (877) 609-1919 to confirm capacity for your group.',
      },
      {
        q: 'Is this a self-drive rental or does it come with a chauffeur?',
        a: 'Every Sprinter van booking includes a licensed, background-checked chauffeur — this is not a self-drive rental.',
      },
      {
        q: 'Can we book multiple Sprinter vans for a larger group?',
        a: 'Yes. Multi-vehicle bookings are coordinated as a single reservation so all vehicles arrive and depart together.',
      },
      {
        q: 'Is pricing flat rate or hourly?',
        a: 'Point-to-point trips (like an airport transfer) are flat rate; multi-stop days are booked hourly. Every quote is confirmed before you book.',
      },
      {
        q: 'What is the cancellation policy for a Sprinter van?',
        a: 'Sprinter van and special-event bookings cancel free of charge up to 12 hours before the scheduled pickup time.',
      },
    ],
    related: [
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Sports Game Day Limo Service', to: '/limo/sports-game-day-limo' },
      { label: 'Maryland Wedding Limo', to: '/maryland-wedding-limo' },
    ],
    schema: { areaServed: ['Washington DC', 'Maryland', 'Northern Virginia'], serviceType: 'Sprinter van rental with driver' },
  },
  {
    slug: 'stretch-limousine-rental',
    type: 'service',
    name: 'Stretch Limousine Rental',
    badge: 'Signature Service',
    h1: 'Stretch Limousine Rental — Car Service in DC, MD & VA',
    metaTitle: 'Stretch Limousine Rental | DC, MD & VA',
    metaDescription:
      'Stretch limousine rental with a professional chauffeur for weddings, proms and nights out across DC, MD & VA. Call (877) 609-1919 for a free quote.',
    stats: [
      { label: 'Coverage', value: 'DC, MD & Northern VA' },
      { label: 'Capacity', value: 'Up to 8 passengers' },
      { label: 'Pricing', value: 'Flat rate or hourly' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'A stretch limousine is still the classic way to mark a wedding, prom, anniversary or milestone birthday, and DCA Limos keeps a stretch limousine seating up to eight in the fleet alongside the sedans and SUVs — driven by the same licensed, background-checked chauffeurs and quoted the same flat, transparent way.',
      'We rent the limousine with a professional chauffeur included, not as a self-drive vehicle, and every booking covers Washington DC, Maryland and Northern Virginia with the option to add stops, a decorated arrival for a wedding, or hourly service for a full evening out.',
    ],
    highlights: [
      'Seats up to 8 passengers in a classic stretch limousine',
      'Chauffeur included — not a self-drive rental',
      'Complimentary red carpet and decoration available for weddings on request',
      'Flat-rate point-to-point or hourly as-directed pricing',
      'Common for weddings, proms, quinceañeras, anniversaries and nights out',
    ],
    sections: [
      {
        h2: 'Booking a stretch limousine',
        paragraphs: [
          'Most limousine bookings are hourly, since the occasions that call for a stretch limo — a wedding, a prom night, a milestone birthday — usually involve more than one stop: a pickup, a venue, photos, and a return home at the end of the night. We confirm the hourly block in advance and the chauffeur stays with the group for the whole booking.',
          'Peak weekends in spring and fall sell out limousines first among our fleet, so we recommend reserving as early as the date is set, particularly for a wedding or prom Saturday.',
        ],
      },
      {
        h2: 'What comes with the rental',
        paragraphs: [
          'Every stretch limousine rental includes the chauffeur, fuel, standard amenities inside the vehicle and a confirmed written rate before you book — there is no separate "driver fee" or fuel surcharge added afterward. Bottled water is included as standard, and a tuxedo upgrade for the chauffeur is available on request for weddings and formal occasions.',
          'We also coordinate the limousine alongside other vehicles when an event needs more than one — a Sprinter van for a larger guest list paired with the limousine for the couple or honoree is one of our most common multi-vehicle bookings.',
        ],
      },
      {
        h2: 'Stretch limousine vs. Sprinter van vs. SUV',
        paragraphs: [
          'The stretch limousine remains the traditional choice when the vehicle itself is part of the occasion — a wedding exit, a prom arrival, a sweet sixteen or quinceañera entrance — because the long body, the interior lighting and the sense of occasion are the point, not just the seating. For eight passengers or fewer who want that specific experience, nothing else in the fleet does the same job.',
          'A Sprinter van makes more sense once the group grows past eight or the priority shifts from spectacle to simply keeping everyone together — a wedding party of fourteen, a bachelorette group heading between venues, or a family reunion airport run. A Cadillac Escalade or Chevrolet Suburban splits the difference for a smaller group that wants more presence than a sedan without the full limousine experience. We will talk through group size and the feel you are going for and recommend the vehicle that actually fits, rather than defaulting to whichever is easiest to book.',
        ],
      },
    ],
    vehicles: [
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'weddings, proms and celebrations' },
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'a smaller companion vehicle' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'the honoree\'s quiet arrival' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'a group that prefers an SUV' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'a group that prefers an SUV' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'pairing with the limousine for a larger party' },
    ],
    faqs: [
      {
        q: 'How many people fit in your stretch limousine?',
        a: 'Up to 8 passengers. Call (877) 609-1919 to confirm the configuration for your event.',
      },
      {
        q: 'Does the rental come with a chauffeur?',
        a: 'Yes. Every stretch limousine booking includes a licensed, background-checked professional chauffeur — it is not a self-drive rental.',
      },
      {
        q: 'How far in advance should we book for a wedding or prom?',
        a: 'As early as the date is set. Stretch limousines are the first vehicles to sell out on peak spring and fall weekends.',
      },
      {
        q: 'Can we add decorations for a wedding?',
        a: 'Yes, complimentary red carpet and "Just Married" decorations are available on request for wedding bookings.',
      },
      {
        q: 'Is pricing hourly or flat rate?',
        a: 'A single pickup and drop-off is flat rate; most limousine bookings with multiple stops are priced hourly. Every quote is confirmed before you book.',
      },
    ],
    related: [
      { label: 'Wedding Limo Service', to: '/limo/wedding-limo-service' },
      { label: 'Prom & Graduation Limo Service', to: '/limo/prom-limo-service' },
      { label: 'Quinceañera Limo Service', to: '/quinceanera-limo-service' },
      { label: 'Washington DC Prom Limo', to: '/washington-dc-prom-limo' },
    ],
    schema: { areaServed: ['Washington DC', 'Maryland', 'Northern Virginia'], serviceType: 'Stretch limousine rental' },
  },
  {
    slug: 'quinceanera-limo-service',
    type: 'service',
    name: 'Quinceañera Limo Service',
    badge: 'Signature Service',
    h1: 'Quinceañera Limo Service in DC, MD & VA',
    metaTitle: 'Quinceañera Limo Service | DC, MD & VA',
    metaDescription:
      'Quinceañera limo service across DC, Maryland & Virginia — Sprinter vans and stretch limos for the court of honor. Call (877) 609-1919 to book.',
    stats: [
      { label: 'Coverage', value: 'DC, MD & Northern VA' },
      { label: 'Fleet', value: 'Sprinters · Limos · SUVs' },
      { label: 'Pricing', value: 'Flat rate or hourly' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'A quinceañera is built around an entrance — the honoree and her court of honor arriving together, usually to a venue timed around a church Mass beforehand. DCA Limos coordinates that sequence the same way we do a wedding: Sprinter vans for the court of honor, a stretch limousine or SUV for the honoree, and a chauffeur who keeps the whole party on schedule from church to reception.',
      'We serve families across Washington DC, Maryland and Northern Virginia, with an itinerary built around the specific venues — church, photo location, reception hall — rather than a one-size-fits-all package.',
    ],
    highlights: [
      'Sprinter vans for the court of honor (damas and chambelanes) and family',
      'Stretch limousine or luxury SUV for the honoree\'s arrival',
      'Itinerary built around church Mass, photos and the reception entrance',
      'Flat-rate or hourly pricing confirmed in writing before you book',
      'Chauffeurs experienced coordinating multi-vehicle quinceañera bookings',
    ],
    sections: [
      {
        h2: 'Planning a quinceañera\'s transportation',
        paragraphs: [
          'Most quinceañera transportation plans start with the church ceremony, move to a photo location, and end with a choreographed entrance at the reception hall — often timed to a specific song or announcement. We plan that sequence with the family in advance so the chauffeur knows exactly when to stage the arrival rather than guessing at the reception coordinator\'s cue.',
          'Families with a larger court of honor typically add a Sprinter van alongside the honoree\'s limousine or SUV, so the whole group arrives together rather than splitting across personal cars and arriving at different times.',
        ],
      },
      {
        h2: 'Church, hall and home-address pickups across the region',
        paragraphs: [
          'We regularly run quinceañera parties between churches and reception halls across Prince George\'s, Montgomery and Fairfax counties, and into the District itself, so the plan is built around your specific church and venue rather than a generic template. If photos are planned at a separate location — a park, a garden or a landmark — we fold that stop into the same hourly booking.',
          'Tell dispatch about any specific language or cultural preferences when you book, and we will do our best to accommodate them along with the rest of the day\'s logistics.',
        ],
      },
      {
        h2: 'Photos, timing and the court of honor\'s wardrobe',
        paragraphs: [
          'A quinceañera photo session often runs longer than families expect, especially at a popular outdoor location during peak spring and fall weekends when several other parties are shooting at the same spot. We build real buffer into the schedule between the photo stop and the reception\'s start time, rather than a tight transfer that turns a late photographer into a late grand entrance.',
          'The court of honor\'s formal wear — ball gowns for the damas, tuxedos for the chambelanes — also factors into vehicle choice more than most families expect; a Sprinter van with a wide side door and a flat floor makes it far easier for a line of teenagers in formal wear to board without crushing fabric than climbing into a lower sedan or SUV one at a time.',
        ],
      },
    ],
    vehicles: [
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'the honoree\'s arrival' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'an alternative honoree vehicle' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'the court of honor and family' },
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'parents or a smaller party' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'a quiet arrival for the honoree' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'an alternative to the Escalade for a larger family' },
    ],
    faqs: [
      {
        q: 'Can you coordinate both the church and the reception entrance?',
        a: 'Yes. We plan the full sequence — church, photos, reception entrance — in advance so the chauffeur is staged for the timing you confirm.',
      },
      {
        q: 'What vehicle is best for the court of honor?',
        a: 'A Sprinter van seating up to 14 is the most common choice for a larger court of honor, keeping the group together for the ride.',
      },
      {
        q: 'Can the honoree arrive in a different vehicle than the court?',
        a: 'Yes. A stretch limousine or luxury SUV for the honoree alongside a Sprinter van for the court is a common combination.',
      },
      {
        q: 'How far in advance should we book?',
        a: 'As soon as the date and venues are set — peak spring and fall weekends sell out limousines and Sprinter vans first.',
      },
      {
        q: 'Is pricing flat rate or hourly?',
        a: 'Most quinceañera bookings are hourly given the multiple stops involved. Every rate is confirmed in writing before you book.',
      },
    ],
    related: [
      { label: 'Prom & Graduation Limo Service', to: '/limo/prom-limo-service' },
      { label: 'Stretch Limousine Rental', to: '/stretch-limousine-rental' },
      { label: 'Washington DC Prom Limo', to: '/washington-dc-prom-limo' },
      { label: 'Maryland Prom Limo', to: '/maryland-prom-limo' },
    ],
    schema: { areaServed: ['Washington DC', 'Maryland', 'Northern Virginia'], serviceType: 'Quinceañera limousine service' },
  },
  {
    slug: 'funeral-limousine-service',
    type: 'service',
    name: 'Funeral & Memorial Car Service',
    badge: 'Signature Service',
    h1: 'Funeral & Memorial Car Service in DC, MD & VA',
    metaTitle: 'Funeral & Memorial Car Service | DC, MD & VA',
    metaDescription:
      'Dignified funeral and memorial car service across DC, Maryland & Virginia — family limousines and discreet sedans. Call (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, MD & Northern VA' },
      { label: 'Fleet', value: 'Sedans · SUVs · Limos' },
      { label: 'Pricing', value: 'Flat rate' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'DCA Limos provides dignified family transportation for funerals and memorial services across Washington DC, Maryland and Northern Virginia — working directly with funeral homes to arrive at the confirmed time, dressed and briefed appropriately, with a chauffeur who understands the day calls for quiet, unhurried presence rather than anything else.',
      'We coordinate with services at Arlington National Cemetery, Washington National Cathedral and funeral homes and cemeteries throughout the region, and we can invoice the funeral home directly or bill the family, whichever fits how the rest of the arrangements are being handled.',
    ],
    highlights: [
      'Dignified, background-checked chauffeurs briefed specifically for funeral services',
      'Direct coordination with funeral homes on timing and sequencing',
      'Experience with Arlington National Cemetery and Washington National Cathedral services',
      'Flat-rate pricing confirmed in advance — no surprises added to a difficult day',
      'Billing routed through the funeral home or the family, whichever is preferred',
    ],
    sections: [
      {
        h2: 'A quiet, coordinated service',
        paragraphs: [
          'Funeral transportation runs on someone else\'s schedule — the funeral home\'s, the cemetery\'s or the officiant\'s — and our role is to fit into that schedule precisely, arriving with enough buffer to never be the reason anything is delayed. Chauffeurs on these bookings are briefed differently than any other trip: appropriate dress, a measured pace, and conversation that follows the family\'s lead entirely, including not at all.',
          'We coordinate directly with the funeral home\'s confirmed timeline whenever a family prefers that, so no one has to manage transportation logistics on top of everything else a day like this requires.',
        ],
      },
      {
        h2: 'Covering the region\'s cemeteries and houses of worship',
        paragraphs: [
          'Beyond Arlington National Cemetery and Washington National Cathedral, we regularly serve families at cemeteries and houses of worship throughout Maryland, DC and Northern Virginia — each with its own procession procedures, gate timing and parking realities that a chauffeur familiar with the area can navigate without adding stress to the day.',
          'Multi-vehicle processions are coordinated as a single booking, with vehicles staged in the correct order and a lead chauffeur keeping the group together between the service and the cemetery.',
        ],
      },
      {
        h2: 'Booking with as little notice as the day requires',
        paragraphs: [
          'Funeral arrangements often come together on short notice, and we treat a request for family transportation the same way — same-day and next-day bookings are routine for us, not an exception that requires extra lead time. Call dispatch directly rather than using the online form when a service is being finalized in the next day or two; a live person can confirm vehicle availability and timing far faster than a submitted request waiting for a reply.',
          'For services at Arlington National Cemetery specifically, families should know that the cemetery itself sets its own procession rules, vehicle passes and timing windows separate from anything we control; we coordinate our chauffeurs around whatever the cemetery and the funeral home confirm, and our own Arlington National Cemetery transportation page covers those cemetery-specific procedures in more depth if you want to review them ahead of the day.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'immediate family' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'extended family groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'larger family parties' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'immediate family' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'extended family groups' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'a large family or procession group' },
    ],
    faqs: [
      {
        q: 'Can you coordinate directly with our funeral home?',
        a: 'Yes. We can work from the funeral home\'s confirmed schedule and coordinate timing directly with them if the family prefers.',
      },
      {
        q: 'Do you provide service for Arlington National Cemetery or Washington National Cathedral?',
        a: 'Yes, we regularly provide family transportation for services at both, along with funeral homes and cemeteries throughout DC, Maryland and Virginia.',
      },
      {
        q: 'Can billing go through the funeral home instead of the family?',
        a: 'Yes. We can invoice the funeral home directly or bill a designated family member separately, whichever fits the arrangements.',
      },
      {
        q: 'How are chauffeurs prepared for a funeral booking?',
        a: 'Chauffeurs are briefed specifically for funeral and memorial services — appropriate dress, a measured pace, and following the family\'s lead on conversation.',
      },
      {
        q: 'Is pricing flat rate?',
        a: 'Yes, funeral and memorial transportation is quoted as a flat rate confirmed before the service, with no surprises added afterward.',
      },
    ],
    related: [
      { label: 'Arlington National Cemetery Transportation', to: '/arlington-national-cemetery-transportation' },
      { label: 'Washington National Cathedral Transportation', to: '/national-cathedral-dc-transportation' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
    ],
    schema: { areaServed: ['Washington DC', 'Maryland', 'Northern Virginia'], serviceType: 'Funeral and memorial car service' },
  },
];
