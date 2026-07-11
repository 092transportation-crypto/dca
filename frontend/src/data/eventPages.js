// Concert & event transportation landing pages — top-level /<slug> SEO pages.
// Each targets a high-intent "<venue> transportation / limo" search.
// Add a new object and it is picked up by App.js routes and the footer;
// remember to add the URL to public/sitemap.xml as well.

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1772410466566-3b652ecbf07c?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85';

export const EVENT_PAGES = [
  {
    slug: 'concert-transportation',
    name: 'Concert & Event',
    h1: 'Concert & Event Transportation in DC, Maryland & Virginia',
    metaTitle: 'Concert Transportation DC, MD & VA | Limo & Car Service | DCA Limos',
    metaDesc:
      'Flat-rate limo and car service to Capital One Arena, Nationals Park, FedEx Field, Jiffy Lube Live, Wolf Trap & MGM National Harbor. Book online or call (877) 609-1919.',
    distance: '3–30 miles',
    driveTime: '10–60 minutes',
    heroImage: HERO_IMAGE,
    intro:
      'A great show deserves a great arrival. DCA Limos provides flat-rate chauffeured transportation to every major concert and event venue in the DC, Maryland, and Virginia region — from downtown arenas to Virginia amphitheaters to the casino stages at National Harbor. Whether you are flying into Reagan National for a show, gathering a group of friends for a stadium concert, or planning a client night out, your chauffeur handles the traffic, the parking, and the post-show crush while you enjoy the evening.',
    sections: [
      {
        h2: 'Downtown arenas and stadiums: Capital One Arena, Nationals Park & FedEx Field',
        paragraphs: [
          'The region’s biggest indoor shows land at Capital One Arena in Penn Quarter, where parking is scarce, garages sell out, and the streets around 7th and F close or crawl on event nights. Our chauffeurs know the arena’s drop-off corners and staging areas, so you step out a short walk from the gates and find your car waiting when the encore ends. Nationals Park in Navy Yard hosts stadium concerts all summer alongside Nationals baseball, and FedEx Field in Landover — home of the Washington Commanders and a regular stop for the biggest touring acts — draws crowds of 60,000 or more onto the Beltway at once.',
          'For all three venues, the calculus is the same: event-night parking is expensive and slow to exit, rideshare surges the moment the show ends, and a pre-arranged chauffeur at a flat rate simply waits for you. We monitor the event schedule, stage the vehicle before the final song, and route around the worst of the outbound crush.',
        ],
      },
      {
        h2: 'Amphitheaters and casino shows: Jiffy Lube Live, Wolf Trap & MGM National Harbor',
        paragraphs: [
          'Summer in the DMV means outdoor music. Jiffy Lube Live in Bristow, Virginia is the region’s big-name amphitheater — and its single-artery exit onto I-66 is legendary for post-show gridlock that can trap self-parked fans for an hour or more. A chauffeured drop-off and a staged pickup turn that into a non-event. Wolf Trap National Park for the Performing Arts in Vienna offers a gentler evening of lawn seats and picnics, and our chauffeurs know the Filene Center approach and the best timing for its wooded two-lane exits.',
          'MGM National Harbor brings headline residencies, boxing, and casino entertainment to the Potomac waterfront just south of DC. We run frequent evening transfers there from DC, Northern Virginia, Maryland, and all three airports — and because the return trip is prearranged, nobody in your party has to cut the night short to drive.',
        ],
      },
      {
        h2: 'Flat rates, group vehicles, and door-to-door service',
        paragraphs: [
          'Every event transfer is quoted as one flat, all-inclusive rate — fuel, tolls, and chauffeur included, with no surge pricing when the show lets out and demand spikes. Luxury sedans suit couples and solo travelers, SUVs carry groups of five with room to spare, and Mercedes Sprinter vans keep parties of up to thirteen together in a single vehicle, which is almost always cheaper and far more fun than splitting three rideshares.',
          'Round trips are the smart play for events: your chauffeur drops you at the venue entrance, stays reachable through the show, and is staged at an agreed pickup point when you walk out. No parking fees, no designated driver, no surge, no hour-long garage exit.',
        ],
      },
      {
        h2: 'Flying in for a show? We cover the airports too',
        paragraphs: [
          'Plenty of our event clients start the night at an airport. We meet arrivals at Reagan National, Dulles, and BWI with flight tracking and a baggage-claim meet-and-greet, then run directly to the venue, your hotel, or dinner beforehand. Landing at DCA at 5 p.m. for an 8 p.m. show at Capital One Arena is entirely doable when a chauffeur is staged and the route is planned — it is a gamble with a rideshare queue.',
          'Book as early as you can for major tours, playoff games, and holiday shows — event dates fill our calendar first, and a reserved vehicle at a locked rate is the one part of a big night that should never be left to chance. Reserve online through our booking page or call (877) 609-1919 to lock in your date.',
        ],
      },
    ],
    highlights: [
      'Flat-rate pricing — no surge when the show ends',
      'Staged post-show pickups that skip the parking crush',
      'Capital One Arena, Nationals Park & FedEx Field expertise',
      'Jiffy Lube Live, Wolf Trap & MGM National Harbor coverage',
      'Sedans, SUVs & Sprinter vans for groups up to 13',
    ],
    faqs: [
      {
        q: 'How much does concert transportation cost in the DC area?',
        a: 'Pricing is a flat, all-inclusive rate based on your pickup location, venue, and vehicle — never a surge multiplier. A sedan to a downtown DC venue starts around the same as our airport transfers, and Sprinter vans make group trips very economical per person. Call (877) 609-1919 for an exact quote.',
      },
      {
        q: 'Which concert venues do you serve?',
        a: 'All of them — Capital One Arena, Nationals Park, FedEx Field, Jiffy Lube Live, Wolf Trap, MGM National Harbor, The Anthem, EagleBank Arena, Merriweather Post Pavilion, and every other venue in DC, Maryland, and Virginia.',
      },
      {
        q: 'Will my chauffeur wait during the show?',
        a: 'For round trips, your chauffeur drops you at the entrance, stays reachable during the event, and is staged at an agreed pickup point when you walk out — no post-show rideshare scramble or surge pricing.',
      },
      {
        q: 'Can you pick us up from the airport and take us straight to a concert?',
        a: 'Yes. We track your flight into DCA, Dulles, or BWI, meet you at baggage claim, and drive directly to the venue or your hotel first. It is the most reliable way to make a same-day show after a flight.',
      },
      {
        q: 'How big a group can you transport?',
        a: 'Our Mercedes Sprinter vans carry up to 13 passengers together, and for larger parties we can stage multiple vehicles that travel as a convoy. Book early for major tour dates.',
      },
    ],
    related: ['capital-one-arena-transportation', 'nationals-park-transportation', 'fedex-field-transportation'],
  },
  {
    slug: 'capital-one-arena-transportation',
    name: 'Capital One Arena',
    h1: 'Capital One Arena Transportation & Limo Service',
    metaTitle: 'Capital One Arena Limo & Car Service | Flat Rate | DCA Limos',
    metaDesc:
      'Flat-rate limo and car service to Capital One Arena for Capitals, Wizards, and concerts. Staged post-event pickup, no surge. Book online or call (877) 609-1919.',
    distance: '4 miles from DCA',
    driveTime: '10–20 minutes',
    heroImage: HERO_IMAGE,
    intro:
      'Capital One Arena sits in the heart of Penn Quarter at 7th and F Streets NW — home ice for the Washington Capitals, home court for the Wizards and Georgetown Hoyas, and the region’s marquee stop for arena concerts. It is also one of the hardest venues in the city to drive yourself to: garages fill early, event-night street closures shift block by block, and rideshare pickup after the final buzzer is a surge-priced scrum. DCA Limos solves all of it with flat-rate chauffeured transportation, door-to-door, with a staged pickup waiting when you walk out.',
    sections: [
      {
        h2: 'Game nights, concerts, and everything in between',
        paragraphs: [
          'The arena hosts more than 200 events a year — Capitals and Wizards games, top touring artists, college basketball, and family shows — and each one floods Penn Quarter and Chinatown with traffic. Our chauffeurs work these events week in and week out. They know which garages and curbs the arena’s event staff open for drop-offs, how the closures around Gallery Place shift for different event sizes, and where to stage for a clean pickup on G Street or Massachusetts Avenue when 20,000 people pour out at once.',
          'For premium nights — playoff games, a big anniversary concert, client entertainment in a suite — arriving by chauffeured Mercedes sets the tone, and skipping the post-game garage queue ends the night as well as it started.',
        ],
      },
      {
        h2: 'From DCA, your hotel, or your front door',
        paragraphs: [
          'Reagan National is barely four miles from the arena, and we regularly run fans and touring guests straight from baggage claim to will-call with flight tracking and a meet-and-greet included. From Maryland and Virginia suburbs, a flat-rate round trip beats event parking on both price and sanity — no Metro transfers with kids after a 10 p.m. finish, no designated driver, no surge.',
          'Dinner first? Penn Quarter and Chinatown surround the arena with restaurants, and your chauffeur can drop you for a pre-show reservation and reposition for the short hop to the gates — or simply drop you once and let you stroll.',
        ],
      },
      {
        h2: 'Flat-rate pricing with a staged return',
        paragraphs: [
          'Every Capital One Arena transfer is one locked, all-inclusive price — no meter, no surge when the horn sounds and 20,000 phones open a rideshare app at once. Round trips include a staged pickup: your chauffeur tracks the event, positions the vehicle before the end, and confirms the exact corner by text so you walk straight from the concourse to a warm car.',
          'Sedans suit couples, SUVs handle families and small groups, and Sprinter vans carry up to 13 for birthday outings, corporate nights, and bachelor and bachelorette parties.',
        ],
      },
    ],
    highlights: [
      'Flat-rate pricing — no post-game surge, ever',
      'Staged pickups at the best corners around Gallery Place',
      'Direct runs from DCA baggage claim to will-call',
      'Suite and client-entertainment service for corporate nights',
      'Sedans, SUVs & Sprinter vans for groups up to 13',
    ],
    faqs: [
      {
        q: 'How much is a car service to Capital One Arena?',
        a: 'Transfers are a flat, all-inclusive rate based on your pickup point and vehicle — a sedan from DCA or Arlington is comparable to our shortest airport routes, and round trips with staged pickup are quoted as one price. Call (877) 609-1919 for an exact quote.',
      },
      {
        q: 'Where do you pick up after an event at Capital One Arena?',
        a: 'Your chauffeur stages nearby before the event ends and texts you an exact corner — typically along G Street, 6th Street, or Massachusetts Avenue depending on the night’s closures — so you avoid the main rideshare scrum at 7th and F.',
      },
      {
        q: 'Can you take us from DCA Airport straight to a game or concert?',
        a: 'Yes. The arena is about 4 miles and 10–20 minutes from Reagan National. We track your flight, meet you at baggage claim, and can hold luggage in the vehicle or drop it at your hotel on the way.',
      },
      {
        q: 'Do you do round trips for Capitals and Wizards games?',
        a: 'Round trips are our most popular arena booking: drop-off at the gates, a reachable chauffeur throughout, and a staged pickup at the final horn — one flat rate, no parking fees, no surge.',
      },
    ],
    related: ['concert-transportation', 'nationals-park-transportation', 'fedex-field-transportation'],
  },
  {
    slug: 'nationals-park-transportation',
    name: 'Nationals Park',
    h1: 'Nationals Park Transportation & Limo Service',
    metaTitle: 'Nationals Park Limo & Car Service | Flat Rate | DCA Limos',
    metaDesc:
      'Flat-rate limo and car service to Nationals Park for Nats games and stadium concerts. Staged post-game pickup, no surge. Book online or call (877) 609-1919.',
    distance: '3 miles from DCA',
    driveTime: '10–15 minutes',
    heroImage: HERO_IMAGE,
    intro:
      'Nationals Park anchors the Navy Yard waterfront on the Anacostia — 81 home games of Nationals baseball a season, plus the summer stadium concerts that bring the biggest touring acts to South Capitol Street. It is one of the closest major venues to Reagan National, barely three miles from the terminal, and DCA Limos makes the trip effortless: flat-rate chauffeured service to the gates, a reachable chauffeur through the last out, and a staged pickup that gets you moving while the parking garages are still gridlocked.',
    sections: [
      {
        h2: 'Game day at Navy Yard, without the hassle',
        paragraphs: [
          'Navy Yard on game day is lively and dense — great for the pre-game scene along Half Street and the Yards, less great for anyone trying to park. Garages near the park run steep on marquee dates, the neighborhood’s one-way grid backs up fast, and the Green Line is standing-room after a big win. Our chauffeurs know the drop-off flow around the Home Plate and Center Field gates, the best staging points across the neighborhood, and how South Capitol Street and the Douglass Bridge behave when 35,000 fans leave at once.',
          'For families, a door-to-door round trip means no late-night Metro with tired kids. For a client outing or a birthday in the seats down the line, it means everyone travels together and nobody draws the short straw as driver.',
        ],
      },
      {
        h2: 'Stadium concerts and big summer nights',
        paragraphs: [
          'Beyond baseball, Nationals Park hosts stadium concerts that dwarf a normal game night — full-capacity crowds, earlier road closures, and rideshare surges that can triple the fare home. A pre-booked chauffeur at a flat rate is immune to all of it. We track the event timing, stage before the encore, and confirm your exact pickup corner by text so the walk from the gates is short and certain.',
          'Flying in for a series or a show? Reagan National is ten minutes away. We meet you at baggage claim with flight tracking included and run straight to the park, your hotel, or a pre-game dinner in Navy Yard or Capitol Hill.',
        ],
      },
      {
        h2: 'Flat rates for every group size',
        paragraphs: [
          'Every Nationals Park transfer is one locked, all-inclusive price — fuel, tolls, and chauffeur included, the same rate on Opening Day as on a quiet Tuesday in August. Sedans suit a couple heading to the ballpark, SUVs take a family of five with room for jerseys and gloves, and Sprinter vans carry up to 13 for season-ticket groups, corporate outings, and bachelor parties making a night of Navy Yard.',
          'Book round trips early for Opening Day, playoff baseball, and concert dates — those calendars fill first, and a locked flat rate is the cheapest insurance a big night out can buy.',
        ],
      },
    ],
    highlights: [
      'Flat-rate pricing — same price on Opening Day as any day',
      'Staged post-game pickups that beat the garage exit',
      '10 minutes from DCA — perfect for fly-in game days',
      'Family-friendly door-to-door service, no late-night Metro',
      'Sprinter vans for season-ticket groups & corporate outings',
    ],
    faqs: [
      {
        q: 'How much is a car service to Nationals Park?',
        a: 'Transfers are a flat, all-inclusive rate based on your pickup point and vehicle. From DCA or downtown DC it is one of our shortest, most economical trips, and round trips with staged pickup are quoted as one price. Call (877) 609-1919 for an exact quote.',
      },
      {
        q: 'How far is Nationals Park from DCA Airport?',
        a: 'About 3 miles — typically 10 to 15 minutes. It is one of the closest major venues to Reagan National, and we can take you from baggage claim to the gates with flight tracking and meet-and-greet included.',
      },
      {
        q: 'Where do you pick up after a Nats game?',
        a: 'Your chauffeur stages in Navy Yard before the final out and texts you an exact corner a short walk from your gate, away from the worst of the South Capitol Street crush — then routes around the post-game gridlock.',
      },
      {
        q: 'Do you serve Nationals Park concerts as well as baseball?',
        a: 'Yes — stadium concerts are among our busiest nights. Book early for major tour dates; full-capacity shows fill our calendar well in advance.',
      },
    ],
    related: ['concert-transportation', 'capital-one-arena-transportation', 'fedex-field-transportation'],
  },
  {
    slug: 'fedex-field-transportation',
    name: 'FedEx Field',
    h1: 'FedEx Field Transportation & Limo Service',
    metaTitle: 'FedEx Field Limo & Car Service | Commanders Games | DCA Limos',
    metaDesc:
      'Flat-rate limo and car service to FedEx Field (Northwest Stadium) for Commanders games and stadium concerts. No surge, staged pickup. Call (877) 609-1919.',
    distance: '13 miles from DCA',
    driveTime: '25–40 minutes',
    heroImage: HERO_IMAGE,
    intro:
      'FedEx Field in Landover, Maryland — now officially Northwest Stadium — is home to the Washington Commanders and a regular stop for the biggest stadium tours in music. It is also a venue built for cars, which means game day traffic on the Beltway and Arena Drive is a grind, cash parking passes are pricey, and the post-game exit can idle for an hour. DCA Limos turns the whole trip into the easy part: flat-rate chauffeured service from anywhere in the DMV, drop-off near the gates, and a staged pickup that has you rolling while the lots are still locked in place.',
    sections: [
      {
        h2: 'Commanders game days, done right',
        paragraphs: [
          'Eight-plus Sundays a fall, 60,000 fans converge on Landover from every direction, and the Beltway’s Exit 16 and Arena Drive corridors bear the brunt. Our chauffeurs run these game days every season. They know the parking-pass drop zones, the rhythm of the stadium’s traffic pattern before kickoff and after the final whistle, and the back-road approaches through Landover and Largo that the navigation apps send nobody down.',
          'A chauffeured round trip means your group tailgates and celebrates without a designated driver, skips the parking-pass expense entirely, and leaves on your schedule — not the parking lot’s. For season-ticket holders, we can set up a standing game-day booking with the same chauffeur and pickup routine every home Sunday.',
        ],
      },
      {
        h2: 'Stadium concerts and major events',
        paragraphs: [
          'When the biggest tours in music play the DMV, they play here — full-stadium shows that draw fans from three states and turn the Beltway into a parking lot of its own. Concert nights at FedEx Field are exactly when rideshare fails: surge pricing triples the fare, pickup zones descend into chaos, and the signal drops with 60,000 phones on one tower. A pre-booked chauffeur at a locked flat rate, staged at an agreed landmark, is the difference between a great night and a two-hour escape.',
          'We run concert transfers from DC, Northern Virginia, Annapolis, Baltimore, and all three airports — and Sprinter vans keep a whole crew together for the ride out and the ride home.',
        ],
      },
      {
        h2: 'Flat rates from anywhere in the DMV',
        paragraphs: [
          'Every FedEx Field transfer is one flat, all-inclusive rate — fuel, tolls, and chauffeur included, locked at booking regardless of game-day demand. From DCA the run is about 13 miles and 25 to 40 minutes; from downtown DC, Arlington, or Bethesda it is comparably quick outside of peak arrival windows, and we advise on timing so you are in your seats for kickoff, not stuck on Arena Drive.',
          'Sedans and SUVs suit couples and families; Sprinter vans carry up to 13 for tailgate crews, corporate suite groups, and bachelor parties. Flying in for the game? We meet you at DCA, Dulles, or BWI with flight tracking and run straight to the stadium.',
        ],
      },
    ],
    highlights: [
      'Flat-rate pricing — locked before kickoff, no surge after',
      'Game-day traffic expertise on the Beltway & Arena Drive',
      'Staged post-game pickups that beat the lot exit',
      'Standing game-day bookings for season-ticket holders',
      'Sprinter vans for tailgate crews & suite groups up to 13',
    ],
    faqs: [
      {
        q: 'How much is a car service to FedEx Field?',
        a: 'Transfers are a flat, all-inclusive rate based on your pickup point and vehicle — often less than the combined cost of parking passes and surge-priced rideshare for a group. Call (877) 609-1919 for an exact quote.',
      },
      {
        q: 'How long does it take to get to FedEx Field from DCA?',
        a: 'About 13 miles and 25 to 40 minutes in normal traffic, longer in the peak game-day arrival window. We recommend a pickup time based on kickoff and the day’s traffic so you arrive with time to spare.',
      },
      {
        q: 'Where do you pick up after a Commanders game?',
        a: 'Your chauffeur stages near the stadium before the final whistle and confirms an exact landmark by text — then uses local approaches through Landover and Largo to get ahead of the parking-lot exit.',
      },
      {
        q: 'Is FedEx Field the same as Northwest Stadium?',
        a: 'Yes — the Commanders’ stadium in Landover was renamed Northwest Stadium, though most fans still know it as FedEx Field. Either name, we cover every event there.',
      },
      {
        q: 'Can a large group ride together?',
        a: 'Yes. Our Mercedes Sprinter vans seat up to 13, and we can stage multiple vehicles for bigger tailgate or corporate groups traveling as one party.',
      },
    ],
    related: ['concert-transportation', 'capital-one-arena-transportation', 'nationals-park-transportation'],
  },
];

export function findEventPage(slug) {
  return EVENT_PAGES.find((p) => p.slug === slug) || null;
}
