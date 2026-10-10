// Batch 5: 8 new DC-metro / Northern Virginia city pages not previously
// covered (Herndon, Clarendon, Pentagon City, Chantilly, Sterling, Olney,
// Takoma Park, College Park) plus 6 new real venue/event pages (Capital One
// Hall, EagleBank Arena at GMU, Arlington National Cemetery, 9:30 Club,
// Washington National Cathedral, Union Station). Same shape as
// marylandPages.js / marylandPagesBatch3/4.js — spread into MARYLAND_PAGES.
export const MARYLAND_BATCH5 = [
  {
    slug: 'herndon-limo-service',
    type: 'city',
    name: 'Herndon',
    badge: 'Virginia Cities',
    h1: 'Herndon Limo Service & Car Service',
    metaTitle: 'Herndon VA Limo Service | Minutes from Dulles',
    metaDescription:
      'Limo and car service in Herndon, VA — Downtown Herndon, the W&OD Trail and the Dulles tech corridor. Dulles 12–20 min, Reagan National 35–45 min. (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '7 mi · 12–20 minutes' },
      { label: 'To Reagan (DCA)', value: '22 mi · 35–45 minutes' },
      { label: 'To BWI', value: '48 mi · 60–75 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Herndon sits closer to Dulles International than almost anywhere else in the region, which makes it the natural home base for travelers and tech-corridor commuters along the Dulles Toll Road. DCA Limos runs chauffeured sedans, SUVs and Sprinter vans through Herndon every day, from early flights out of IAD to evening pickups downtown at Historic Downtown Herndon.',
      'Reagan National is 22 miles away — about 35 to 45 minutes via the Dulles Access Road, I-495 and the GW Parkway — while Dulles itself is a 7-mile, 12-to-20-minute hop. We also cover BWI at 48 miles for travelers connecting through Baltimore, and every airport run includes real-time flight tracking with complimentary wait time.',
    ],
    highlights: [
      'Dulles transfers in as little as 12–20 minutes — the fastest airport connection in the area',
      'Flat, all-inclusive quotes with no surge pricing, confirmed before you book',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know Historic Downtown Herndon, the W&OD Trail, Worldgate Centre and the Herndon Silver Line Metro station',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Corporate accounts with monthly invoicing for Dulles-corridor technology and government-contracting employers',
      'Early-morning and late-night availability built around IAD\'s flight schedule',
    ],
    sections: [
      {
        h2: 'A chauffeur who actually knows Herndon',
        paragraphs: [
          'Herndon is small-town Virginia wedged against one of the busiest tech corridors on the East Coast, and our chauffeurs work both sides of it daily. We know the difference between a pickup at Worldgate Centre and one near the W&OD Trail in Historic Downtown Herndon, and we route around the Dulles Toll Road\'s rush-hour backups and the Fairfax County Parkway interchange without being told.',
          'Hotels along Elden Street and the Spring Street corridor, along with the Herndon-Monroe Park & Ride, are regular stops — visiting executives and conference attendees get a chauffeur waiting curbside, not a scramble for a rideshare in a town with limited taxi coverage.',
        ],
      },
      {
        h2: 'Airport car service from Herndon',
        paragraphs: [
          'Dulles International: 7 miles, 12–20 minutes, via the Dulles Access Road. Reagan National: 22 miles, 35–45 minutes, via the Dulles Access Road, I-495 and the GW Parkway. BWI Marshall: 48 miles, 60–75 minutes. Because Herndon sits so close to IAD, we are often able to offer tighter pickup windows than carriers based elsewhere in Northern Virginia — your chauffeur meets you at baggage claim with a name sign or curbside, your choice.',
          'Herndon\'s Silver Line Metro station also makes us a convenient last-mile option for rail travelers heading into DC or back out to the tech corridor.',
        ],
      },
      {
        h2: 'Corporate travel and tech-corridor commuting',
        paragraphs: [
          'Herndon anchors the Dulles technology and government-contracting corridor, and our corporate calendar fills with roadshows, client visits and standing commutes for firms along the Toll Road and Route 28. Sprinter vans handle team travel to and from IAD for conferences, while sedans and SUVs cover single-executive transfers with monthly invoicing available for recurring accounts. We also run families and groups to and from Worldgate Centre hotels and local events, with the same flat-rate, no-surge promise on every trip.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'tech-corridor teams and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'celebrations and special occasions' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Herndon to Dulles Airport cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. Because Herndon is so close to IAD, it is typically one of our most economical airport transfers. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Herndon to Dulles, DCA or BWI?',
        a: 'Dulles is about 12–20 minutes (7 miles), Reagan National about 35–45 minutes (22 miles) and BWI about 60–75 minutes (48 miles) from Herndon, depending on traffic.',
      },
      {
        q: 'Do you offer meet and greet for arrivals coming back to Herndon?',
        a: 'Yes. Your chauffeur can wait inside baggage claim with a personalized sign and help with luggage, or meet you curbside. Every arrival is flight-tracked with complimentary wait time.',
      },
      {
        q: 'Can you handle corporate travel for Dulles-corridor companies?',
        a: 'Yes. We run daily transfers for technology and government-contracting firms along the Dulles Toll Road and Route 28, with corporate accounts and monthly invoicing available.',
      },
      {
        q: 'Is DCA Limos available in Herndon overnight and on holidays?',
        a: 'Yes — 24 hours a day, 365 days a year, including pre-dawn IAD departures and late-night international arrivals.',
      },
    ],
    related: [
      { label: 'DCA to Herndon', to: '/dca-to-herndon' },
      { label: 'Reston Limo Service', to: '/reston-limo-service' },
      { label: 'Sterling VA Limo Service', to: '/sterling-va-limo-service' },
      { label: 'Chantilly Limo Service', to: '/chantilly-limo-service' },
      { label: 'Tysons Limo Service', to: '/tysons-limo-service' },
      { label: 'Dulles Airport Limo Service', to: '/limo/dulles-airport-limo' },
    ],
    schema: { areaServed: ['Herndon, VA', 'Fairfax County'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'clarendon-arlington-limo-service',
    type: 'city',
    name: 'Clarendon',
    badge: 'Northern Virginia Near DCA',
    h1: 'Clarendon Limo Service & Car Service',
    metaTitle: 'Clarendon Arlington Limo | Car Service Near DCA',
    metaDescription:
      'Limo and car service in Clarendon, Arlington VA — Market Common, Wilson Blvd nightlife and the Clarendon Metro. Reagan National just 12–20 minutes. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '5 mi · 12–20 minutes' },
      { label: 'To Dulles (IAD)', value: '22 mi · 35–45 minutes' },
      { label: 'To BWI', value: '40 mi · 55–70 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Clarendon is Arlington\'s nightlife and shopping heart — Wilson Boulevard\'s restaurant row, Market Common, and a Metro stop that makes it one of the busiest corners of the Rosslyn-Ballston corridor. DCA Limos runs chauffeured sedans, SUVs and stretch limousines through Clarendon every night of the week, for date nights, group outings and the airport run the next morning.',
      'Reagan National is just 5 miles from Clarendon — about 12 to 20 minutes via Wilson Boulevard and the GW Parkway — making it one of the fastest airport connections anywhere in Northern Virginia. We cover Dulles (22 miles) and BWI (40 miles) just as often, with every airport trip flight-tracked and complimentary wait time included.',
    ],
    highlights: [
      'Reagan National 12–20 minutes away — one of the fastest DCA connections in Arlington',
      'Flat, all-inclusive quotes with no surge pricing, even on the busiest Wilson Blvd nights',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know Market Common Clarendon, the Clarendon Metro station and Wilson Blvd\'s restaurant and bar row',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Group transportation for bar crawls, birthdays and bachelor/bachelorette nights without a designated driver',
      'Corporate accounts with monthly invoicing for Clarendon and Courthouse-area employers',
    ],
    sections: [
      {
        h2: 'A chauffeur who actually knows Clarendon',
        paragraphs: [
          'Clarendon packs restaurants, rooftop bars and boutique retail into a few dense blocks around the Clarendon Metro, and our chauffeurs know exactly where to stage for a quick pickup on a Friday night without getting boxed in on Wilson or Clarendon Boulevard. Market Common Clarendon, the Clarendon-Courthouse corridor and the neighborhood\'s dense residential towers are regular stops.',
          'Because parking is scarce and valet lines run long on weekend nights, groups increasingly skip driving altogether — an SUV or Sprinter van means nobody has to find a spot or stay sober to drive home.',
        ],
      },
      {
        h2: 'Airport car service from Clarendon',
        paragraphs: [
          'Reagan National: 5 miles, 12–20 minutes, via Wilson Boulevard and the GW Parkway — one of the quickest airport rides in the region. Dulles: 22 miles, 35–45 minutes. BWI Marshall: 40 miles, 55–70 minutes. On arrivals your chauffeur meets you at baggage claim with a name sign or curbside, and on departures we back-time the pickup from your flight and your airline\'s check-in guidance.',
          'Rail travelers also use us for the last mile to and from the Clarendon Metro station on the Orange and Silver lines, especially with luggage.',
        ],
      },
      {
        h2: 'Nights out, group travel and corporate trips',
        paragraphs: [
          'Clarendon\'s nightlife scene keeps our evening calendar full — bachelor and bachelorette parties, birthday crawls along Wilson Boulevard, and client dinners that end with a 10 p.m. pickup instead of a surge-priced rideshare. Sprinter vans keep groups of up to 14 together for a bar crawl, and corporate clients headquartered along the Rosslyn-Ballston corridor keep standing accounts for roadshows and visiting staff.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'date nights and solo travel' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'small groups heading out for the night' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'bar crawls and group nights out' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'birthdays and celebrations' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Clarendon to Reagan National cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. There is no surge pricing, even on busy Wilson Blvd nights. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Clarendon to DCA, Dulles or BWI?',
        a: 'Reagan National is about 12–20 minutes (5 miles), Dulles about 35–45 minutes (22 miles) and BWI about 55–70 minutes (40 miles) from Clarendon, depending on traffic.',
      },
      {
        q: 'Can you handle a group night out in Clarendon?',
        a: 'Yes. Sprinter vans seat up to 14 and stretch limousines up to 8, which is ideal for bar crawls, bachelor/bachelorette parties and birthday celebrations along Wilson Boulevard.',
      },
      {
        q: 'Do you offer meet and greet for arrivals coming back to Clarendon?',
        a: 'Yes. Your chauffeur can wait inside baggage claim with a personalized sign and help with luggage, or meet you curbside. Every arrival is flight-tracked with complimentary wait time.',
      },
      {
        q: 'Is DCA Limos available in Clarendon late at night?',
        a: 'Yes — 24 hours a day, 365 days a year, including late-night pickups after dinner, drinks or a night out along Wilson Boulevard.',
      },
    ],
    related: [
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
      { label: 'Arlington VA Limo Service', to: '/arlington-va-limo-service' },
      { label: 'Pentagon City Limo Service', to: '/pentagon-city-limo-service' },
      { label: 'Crystal City Limo Service', to: '/crystal-city-limo-service' },
      { label: 'Rosslyn-Ballston Limo Service', to: '/rosslyn-ballston-limo-service' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
    ],
    schema: { areaServed: ['Clarendon, Arlington VA', 'Arlington County'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'pentagon-city-limo-service',
    type: 'city',
    name: 'Pentagon City',
    badge: 'Northern Virginia Near DCA',
    h1: 'Pentagon City Limo Service & Car Service',
    metaTitle: 'Pentagon City Limo Service | Steps from Reagan National',
    metaDescription:
      'Limo and car service in Pentagon City, Arlington VA — Fashion Centre, The Pentagon and hotels, minutes from Reagan National. Flat rates 24/7. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '2 mi · 5–10 minutes' },
      { label: 'To Dulles (IAD)', value: '24 mi · 35–50 minutes' },
      { label: 'To BWI', value: '38 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Pentagon City sits closer to Reagan National than almost any other neighborhood we serve — the Fashion Centre at Pentagon City, The Pentagon itself and a dense cluster of hotels and residential towers are all practically next door to the airport. DCA Limos runs chauffeured sedans, SUVs and Sprinter vans through Pentagon City around the clock, from early executive transfers to shopping-trip pickups.',
      'Reagan National is roughly 2 miles from Pentagon City — about 5 to 10 minutes via South Hayes Street and the GW Parkway — the shortest airport connection in our entire Northern Virginia service area. We cover Dulles (24 miles) and BWI (38 miles) just as frequently, and every airport trip includes real-time flight tracking with complimentary wait time.',
    ],
    highlights: [
      'Reagan National just 5–10 minutes away — the shortest airport transfer we offer in Northern Virginia',
      'Flat, all-inclusive quotes with no surge pricing — the price you approve is the price you pay',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know the Fashion Centre at Pentagon City, Pentagon security protocols and National Landing\'s hotel corridor',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Corporate and government accounts with monthly invoicing for Pentagon-adjacent contractors and agencies',
      'Hotel transfers for the Ritz-Carlton, Residence Inn and other Pentagon City properties',
    ],
    sections: [
      {
        h2: 'A chauffeur who actually knows Pentagon City',
        paragraphs: [
          'Pentagon City is dense, security-conscious and tightly packed between the Pentagon, the Fashion Centre mall and a wall of hotel and residential towers — and our chauffeurs navigate all of it daily. We know which hotel motor lobbies move fastest, how to time a pickup around Pentagon shift changes and security sweeps, and the quickest way onto the GW Parkway toward the airport without getting caught in mall traffic.',
          'Visiting defense contractors, government travelers and shoppers alike get a chauffeur waiting at the right entrance, not a parking-garage scavenger hunt.',
        ],
      },
      {
        h2: 'Airport car service from Pentagon City',
        paragraphs: [
          'Reagan National: 2 miles, 5–10 minutes, via South Hayes Street and the GW Parkway — the fastest airport transfer in our Northern Virginia coverage area. Dulles: 24 miles, 35–50 minutes. BWI Marshall: 38 miles, 50–65 minutes. On arrivals your chauffeur meets you at baggage claim with a name sign or curbside, and on departures the short distance means we can offer especially tight pickup windows for last-minute flights.',
          'The Pentagon City Metro station on the Blue and Yellow lines also makes us a convenient last-mile option for rail travelers with luggage.',
        ],
      },
      {
        h2: 'Government travel, shopping trips and hotel transfers',
        paragraphs: [
          'Pentagon City\'s mix of federal workers, defense contractors and hotel guests keeps our calendar full with discreet government-affiliated travel, airport-to-hotel transfers for the Ritz-Carlton and other properties, and shopping-trip pickups at the Fashion Centre. Sedans handle most Pentagon-area business travel, while SUVs and Sprinter vans cover families and groups moving between hotels, the mall and the airport.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'government and business travel' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and shopping trips with bags' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'hotel groups and corporate teams' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'celebrations and special occasions' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Pentagon City to Reagan National cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. Because the airport is so close, it is typically one of our most economical transfers. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Pentagon City to DCA, Dulles or BWI?',
        a: 'Reagan National is about 5–10 minutes (2 miles), Dulles about 35–50 minutes (24 miles) and BWI about 50–65 minutes (38 miles) from Pentagon City, depending on traffic.',
      },
      {
        q: 'Do you serve the hotels in Pentagon City?',
        a: 'Yes. We run frequent transfers to and from the Ritz-Carlton Pentagon City, Residence Inn and other area hotels, including Reagan National pickups and drop-offs.',
      },
      {
        q: 'Can you accommodate government or defense-contractor travel?',
        a: 'Yes. We regularly serve Pentagon-adjacent agencies and contractors with discreet, professional chauffeurs and documentation support where required.',
      },
      {
        q: 'Is DCA Limos available in Pentagon City overnight and on holidays?',
        a: 'Yes — 24 hours a day, 365 days a year, including pre-dawn departures and late-night arrivals.',
      },
    ],
    related: [
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
      { label: 'Crystal City Limo Service', to: '/crystal-city-limo-service' },
      { label: 'Clarendon Limo Service', to: '/clarendon-arlington-limo-service' },
      { label: 'Arlington VA Limo Service', to: '/arlington-va-limo-service' },
      { label: 'DCA Airport Hotel Transfers', to: '/dca-airport-hotel-transfers' },
      { label: 'Arlington National Cemetery Transportation', to: '/arlington-national-cemetery-transportation' },
    ],
    schema: { areaServed: ['Pentagon City, Arlington VA', 'Arlington County'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'chantilly-limo-service',
    type: 'city',
    name: 'Chantilly',
    badge: 'Virginia Cities',
    h1: 'Chantilly Limo Service & Car Service',
    metaTitle: 'Chantilly VA Limo Service | Near Dulles Airport',
    metaDescription:
      'Limo and car service in Chantilly, VA — Udvar-Hazy Center and the Dulles Expo Center, minutes from Dulles International. Reagan National 40–55 min. (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '6 mi · 12–18 minutes' },
      { label: 'To Reagan (DCA)', value: '28 mi · 40–55 minutes' },
      { label: 'To BWI', value: '55 mi · 70–85 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Chantilly sits just outside Dulles International\'s back gate, home to the Smithsonian\'s Udvar-Hazy Center and the Dulles Expo Center, and anchored by a dense cluster of hotels that serve the airport. DCA Limos provides chauffeured sedans, SUVs and Sprinter vans throughout Chantilly for airport transfers, expo and conference travel, and museum visits.',
      'Dulles is just 6 miles from Chantilly — about 12 to 18 minutes — making it one of the fastest airport connections we offer anywhere in the region. Reagan National is 28 miles away (40–55 minutes) and BWI is 55 miles (70–85 minutes); every airport run is flight-tracked with complimentary wait time included.',
    ],
    highlights: [
      'Dulles transfers in as little as 12–18 minutes — right outside the airport\'s back gate',
      'Flat, all-inclusive quotes with no surge pricing, confirmed before you book',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know the Smithsonian Udvar-Hazy Center, the Dulles Expo Center and Chantilly\'s hotel corridor',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Expo and conference group transportation for Dulles Expo Center events',
      'Corporate accounts with monthly invoicing for Dulles-adjacent businesses and government contractors',
    ],
    sections: [
      {
        h2: 'A chauffeur who actually knows Chantilly',
        paragraphs: [
          'Chantilly exists largely in service of Dulles International — hotels, expo space and the Smithsonian\'s aviation annex all cluster along Route 28 and the airport\'s southern boundary. Our chauffeurs know the fastest routes between the hotel corridor and the terminal, how to time a pickup around Dulles Expo Center event schedules, and the quickest way to the Udvar-Hazy Center for a family visiting the Air and Space Museum\'s overflow collection.',
          'Hotels along Lee Jackson Memorial Highway and the roads ringing the Expo Center are regular stops for us, especially during major trade shows and conventions.',
        ],
      },
      {
        h2: 'Airport car service from Chantilly',
        paragraphs: [
          'Dulles International: 6 miles, 12–18 minutes — about as close as it gets. Reagan National: 28 miles, 40–55 minutes, via the Dulles Access Road, I-495 and the GW Parkway. BWI Marshall: 55 miles, 70–85 minutes. Because Chantilly sits so close to IAD, we routinely offer some of the tightest, most reliable pickup windows in the region for early-morning and red-eye flights.',
        ],
      },
      {
        h2: 'Expo events, museum visits and corporate travel',
        paragraphs: [
          'The Dulles Expo Center draws conventions, trade shows and gun and home shows throughout the year, and our Sprinter vans and SUVs regularly shuttle attendees between hotels and the Expo Center floor. Families and school groups visiting the Smithsonian Udvar-Hazy Center get the same flat-rate, no-surge service, and corporate clients near Dulles keep standing accounts for roadshows and visiting staff.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families visiting Udvar-Hazy with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'expo groups and conference attendees' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'celebrations and special occasions' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Chantilly to Dulles Airport cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. Because Chantilly is right next to IAD, it is typically one of our most economical transfers. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Chantilly to Dulles, DCA or BWI?',
        a: 'Dulles is about 12–18 minutes (6 miles), Reagan National about 40–55 minutes (28 miles) and BWI about 70–85 minutes (55 miles) from Chantilly, depending on traffic.',
      },
      {
        q: 'Do you provide group transportation for Dulles Expo Center events?',
        a: 'Yes. Our Sprinter vans and SUVs regularly shuttle convention and trade-show attendees between area hotels and the Dulles Expo Center floor.',
      },
      {
        q: 'Can you take my family to the Udvar-Hazy Center?',
        a: 'Absolutely. We regularly drive families and school groups to the Smithsonian Udvar-Hazy Center and can combine the visit with an airport pickup or drop-off.',
      },
      {
        q: 'Is DCA Limos available in Chantilly overnight and on holidays?',
        a: 'Yes — 24 hours a day, 365 days a year, including pre-dawn IAD departures and late-night international arrivals.',
      },
    ],
    related: [
      { label: 'Dulles Airport Limo Service', to: '/limo/dulles-airport-limo' },
      { label: 'Sterling VA Limo Service', to: '/sterling-va-limo-service' },
      { label: 'Herndon Limo Service', to: '/herndon-limo-service' },
      { label: 'Fairfax Limo Service', to: '/fairfax-limo-service' },
      { label: 'EagleBank Arena (GMU) Transportation', to: '/eaglebank-arena-gmu-transportation' },
      { label: 'Reston Limo Service', to: '/reston-limo-service' },
    ],
    schema: { areaServed: ['Chantilly, VA', 'Fairfax County'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'sterling-va-limo-service',
    type: 'city',
    name: 'Sterling',
    badge: 'Virginia Cities',
    h1: 'Sterling VA Limo Service & Car Service',
    metaTitle: 'Sterling VA Limo Service | Dulles Airport Car Service',
    metaDescription:
      'Limo and car service in Sterling, VA — One Loudoun, Dulles Town Center and Data Center Alley, minutes from Dulles International. Call (877) 609-1919.',
    stats: [
      { label: 'To Dulles (IAD)', value: '7 mi · 12–18 minutes' },
      { label: 'To Reagan (DCA)', value: '30 mi · 40–55 minutes' },
      { label: 'To BWI', value: '58 mi · 70–90 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Sterling straddles the Fairfax-Loudoun County line just north of Dulles International, anchored by Dulles Town Center, the mixed-use One Loudoun development and one of the densest concentrations of data centers in the world along "Data Center Alley." DCA Limos runs chauffeured sedans, SUVs and Sprinter vans through Sterling daily, for airport transfers, corporate travel and nights out at One Loudoun.',
      'Dulles is just 7 miles from Sterling — about 12 to 18 minutes via Route 28 or the Dulles Greenway — one of the fastest airport connections in our network. Reagan National is 30 miles away (40–55 minutes) and BWI is 58 miles (70–90 minutes); every airport trip includes flight tracking and complimentary wait time.',
    ],
    highlights: [
      'Dulles transfers in as little as 12–18 minutes from Sterling\'s data-center corridor',
      'Flat, all-inclusive quotes with no surge pricing, confirmed before you book',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know One Loudoun, Dulles Town Center and the Route 28 / Route 7 technology corridor',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Corporate accounts with monthly invoicing for data-center and technology employers along Route 28',
      'Evening group transportation for One Loudoun dining and entertainment',
    ],
    sections: [
      {
        h2: 'A chauffeur who actually knows Sterling',
        paragraphs: [
          'Sterling runs on two things: Dulles Airport traffic and the data-center industry that has grown up around it. Our chauffeurs know Route 28\'s rush-hour patterns, the fastest paths between One Loudoun\'s restaurants and the surrounding office parks, and how to time an airport run around the Dulles Greenway\'s toll traffic.',
          'Dulles Town Center and the hotel corridor along Waxpool Road are regular stops, as are the sprawling corporate campuses that make Sterling one of the busiest commercial corridors in Loudoun County.',
        ],
      },
      {
        h2: 'Airport car service from Sterling',
        paragraphs: [
          'Dulles International: 7 miles, 12–18 minutes, via Route 28 or the Dulles Greenway. Reagan National: 30 miles, 40–55 minutes. BWI Marshall: 58 miles, 70–90 minutes. Because Sterling sits minutes from IAD, we are routinely able to offer some of the tightest, most dependable pickup windows for early-morning technology-sector travel.',
        ],
      },
      {
        h2: 'Technology-corridor corporate travel and nights out',
        paragraphs: [
          'Sterling\'s data-center and technology employers keep our corporate calendar full with roadshows, client visits and recurring executive transfers to Dulles. Sprinter vans handle team travel for conferences, while sedans cover single-executive airport runs with monthly invoicing available. On weekends, our SUVs and limousines run groups to and from One Loudoun\'s restaurants, movie theater and entertainment district.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'technology-corridor teams and groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'One Loudoun nights out and celebrations' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Sterling to Dulles Airport cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. Because Sterling is minutes from IAD, it is typically one of our most economical transfers. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Sterling to Dulles, DCA or BWI?',
        a: 'Dulles is about 12–18 minutes (7 miles), Reagan National about 40–55 minutes (30 miles) and BWI about 70–90 minutes (58 miles) from Sterling, depending on traffic.',
      },
      {
        q: 'Do you serve the One Loudoun area?',
        a: 'Yes. We regularly run groups to and from One Loudoun\'s restaurants, entertainment district and surrounding hotels, as well as to Dulles Town Center.',
      },
      {
        q: 'Can you handle corporate travel for data-center and technology companies?',
        a: 'Yes. We run daily transfers for technology and data-center employers along Route 28 and Route 7, with corporate accounts and monthly invoicing available.',
      },
      {
        q: 'Is DCA Limos available in Sterling overnight and on holidays?',
        a: 'Yes — 24 hours a day, 365 days a year, including pre-dawn IAD departures and late-night international arrivals.',
      },
    ],
    related: [
      { label: 'Dulles Airport Limo Service', to: '/limo/dulles-airport-limo' },
      { label: 'Chantilly Limo Service', to: '/chantilly-limo-service' },
      { label: 'Herndon Limo Service', to: '/herndon-limo-service' },
      { label: 'Leesburg Limo Service', to: '/leesburg-limo-service' },
      { label: 'DCA to Ashburn', to: '/dca-to-ashburn' },
      { label: 'Reston Limo Service', to: '/reston-limo-service' },
    ],
    schema: { areaServed: ['Sterling, VA', 'Loudoun County'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'olney-md-limo-service',
    type: 'city',
    name: 'Olney',
    badge: 'Maryland Cities',
    h1: 'Olney Limo Service & Car Service',
    metaTitle: 'Olney MD Limo Service | Car Service Near Olney Theatre',
    metaDescription:
      'Limo and car service in Olney, MD — Olney Theatre Center and downtown Olney, with flat-rate transfers to DCA, BWI and Dulles. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '25 mi · 40–55 minutes' },
      { label: 'To BWI', value: '35 mi · 50–65 minutes' },
      { label: 'To Dulles', value: '38 mi · 55–70 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Olney is one of upper Montgomery County\'s quieter, more residential towns, known for the Olney Theatre Center and a walkable downtown along Georgia Avenue — and until now, it has gone without a dedicated chauffeured car service. DCA Limos covers all of Olney with late-model Mercedes sedans, SUVs, Sprinter vans and stretch limousines, from theater nights to airport transfers.',
      'Reagan National is about 25 miles from Olney — 40 to 55 minutes via Georgia Avenue and the ICC (MD-200) or the Beltway — while BWI is 35 miles (50–65 minutes) and Dulles is 38 miles (55–70 minutes). Every airport trip is flight-tracked with complimentary wait time built in.',
    ],
    highlights: [
      'Flat-rate transfers to Reagan National, BWI and Dulles from every Olney address',
      'Flat, all-inclusive quotes with no surge pricing — the price you approve is the price you pay',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know the Olney Theatre Center, downtown Olney and the ICC (MD-200) corridor',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Theater-night service with pre-show drop-off and post-curtain pickup',
      'Corporate accounts with monthly invoicing available for upper Montgomery County employers',
    ],
    sections: [
      {
        h2: 'A chauffeur who actually knows Olney',
        paragraphs: [
          'Olney is quieter than its Rockville and Bethesda neighbors to the south, but no less particular about getting pickups and timing right. Our chauffeurs work Georgia Avenue, the ICC (MD-200) and Olney-Laytonsville Road regularly and know downtown Olney\'s small commercial strip as well as its surrounding residential neighborhoods.',
          'The Olney Theatre Center — a historic regional stage with a season of major productions — is one of our most frequent stops, and we coordinate drop-off timing against curtain and intermission schedules.',
        ],
      },
      {
        h2: 'Airport car service from Olney',
        paragraphs: [
          'Reagan National: 25 miles, 40–55 minutes, via Georgia Avenue, the ICC and the Beltway. BWI Marshall: 35 miles, 50–65 minutes, via the ICC and the BW Parkway. Dulles: 38 miles, 55–70 minutes. On arrivals your chauffeur meets you at baggage claim with a name sign or curbside, and on departures we back-time pickups from your flight and your airline\'s check-in guidance.',
        ],
      },
      {
        h2: 'Theater nights and family travel',
        paragraphs: [
          'Our Olney calendar leans heavily on Olney Theatre Center performances — a sedan or SUV for a couple\'s date night, a Sprinter van for a larger theater group — plus family airport trips, school events and the occasional corporate roadshow for businesses along Georgia Avenue. Every booking gets the same flat-rate, no-surge pricing regardless of occasion.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'theater nights and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'theater groups and family gatherings' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'celebrations and special occasions' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Olney to Reagan National cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. There is no surge pricing. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Olney to DCA, BWI or Dulles?',
        a: 'Reagan National is about 40–55 minutes (25 miles), BWI about 50–65 minutes (35 miles) and Dulles about 55–70 minutes (38 miles) from Olney, depending on traffic.',
      },
      {
        q: 'Do you provide transportation to Olney Theatre Center?',
        a: 'Yes. We regularly handle drop-off and pickup for Olney Theatre Center performances, timed to curtain and intermission schedules.',
      },
      {
        q: 'Can you handle a family or group event in Olney?',
        a: 'Yes. Sprinter vans seat up to 14 and stretch limousines up to 8, and we coordinate multiple vehicles for larger events.',
      },
      {
        q: 'Is DCA Limos available in Olney overnight and on holidays?',
        a: 'Yes — 24 hours a day, 365 days a year, including pre-dawn departures and late-night international arrivals.',
      },
    ],
    related: [
      { label: 'Rockville Limo Service', to: '/rockville-limo-service' },
      { label: 'Silver Spring Limo Service', to: '/silver-spring-limo-service' },
      { label: 'Gaithersburg Limo Service', to: '/gaithersburg-limo-service' },
      { label: 'Bethesda Limo Service', to: '/bethesda-limo-service' },
      { label: 'North Potomac Limo Service', to: '/north-potomac-limo-service' },
      { label: 'DCA to Rockville', to: '/dca-to-rockville' },
    ],
    schema: { areaServed: ['Olney, MD', 'Montgomery County'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'takoma-park-md-limo-service',
    type: 'city',
    name: 'Takoma Park',
    badge: 'Maryland Cities',
    h1: 'Takoma Park Limo Service & Car Service',
    metaTitle: 'Takoma Park MD Limo Service | Car Service Near DC',
    metaDescription:
      'Limo and car service in Takoma Park, MD — Old Town Takoma and the Takoma Metro, minutes from Washington DC and Reagan National. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '9 mi · 20–30 minutes' },
      { label: 'To BWI', value: '30 mi · 40–55 minutes' },
      { label: 'To Dulles', value: '30 mi · 40–55 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Takoma Park sits right on the Washington DC line, a walkable, artsy community built around Old Town Takoma and the Takoma Metro station on the Red Line. DCA Limos covers all of Takoma Park with chauffeured sedans, SUVs, Sprinter vans and stretch limousines, from airport runs to the short hop into downtown DC.',
      'Reagan National is about 9 miles from Takoma Park — 20 to 30 minutes via 16th Street or New Hampshire Avenue and the GW Parkway — while BWI and Dulles are each roughly 30 miles (40–55 minutes). Every airport trip is flight-tracked with complimentary wait time included.',
    ],
    highlights: [
      'Reagan National 20–30 minutes away, with easy access into downtown DC',
      'Flat, all-inclusive quotes with no surge pricing — the price you approve is the price you pay',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know Old Town Takoma, the Takoma Metro station and the Sligo Creek and New Hampshire Avenue corridors',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Farmers market and community-event drop-off coordinated around Old Town Takoma\'s weekend schedule',
      'Corporate accounts with monthly invoicing available for nearby employers',
    ],
    sections: [
      {
        h2: 'A chauffeur who actually knows Takoma Park',
        paragraphs: [
          'Takoma Park\'s tree-lined streets and historic Victorian homes make it one of the more charming — and more navigationally particular — towns we serve. Our chauffeurs know Old Town Takoma\'s narrow commercial strip, the Takoma Metro station\'s pickup areas, and how to move between Takoma Park and downtown DC without getting stuck on 16th Street during rush hour.',
          'The town\'s popular Sunday farmers market and frequent community festivals are regular stops, and we coordinate drop-off timing around street closures when needed.',
        ],
      },
      {
        h2: 'Airport car service from Takoma Park',
        paragraphs: [
          'Reagan National: 9 miles, 20–30 minutes, via 16th Street or New Hampshire Avenue and the GW Parkway. BWI Marshall: 30 miles, 40–55 minutes. Dulles: 30 miles, 40–55 minutes. On arrivals your chauffeur meets you at baggage claim with a name sign or curbside, and on departures we back-time the pickup from your flight.',
          'Rail travelers also use us as the last mile to and from the Takoma Metro station on the Red Line.',
        ],
      },
      {
        h2: 'Nights in DC and neighborhood events',
        paragraphs: [
          'Because Takoma Park sits right at the DC line, many of our trips are a short hop into Shaw, U Street or downtown for dinner, a show or a Nationals game, with a pre-arranged pickup afterward instead of a surge-priced rideshare. We also handle family events, graduations and the occasional corporate pickup for residents commuting into the District.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo travelers and couples' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'family gatherings and community events' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'celebrations and special occasions' },
    ],
    faqs: [
      {
        q: 'How much does a car service from Takoma Park to Reagan National cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. There is no surge pricing. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from Takoma Park to DCA, BWI or Dulles?',
        a: 'Reagan National is about 20–30 minutes (9 miles), while BWI and Dulles are each about 40–55 minutes (roughly 30 miles) from Takoma Park, depending on traffic.',
      },
      {
        q: 'Do you offer meet and greet for arrivals coming back to Takoma Park?',
        a: 'Yes. Your chauffeur can wait inside baggage claim with a personalized sign and help with luggage, or meet you curbside. Every arrival is flight-tracked with complimentary wait time.',
      },
      {
        q: 'Can you take us from Takoma Park into downtown DC for a show or dinner?',
        a: 'Yes. Many of our Takoma Park trips are short hops into Shaw, U Street or downtown DC, with a pre-arranged return pickup so nobody has to drive or hunt for parking.',
      },
      {
        q: 'Is DCA Limos available in Takoma Park overnight and on holidays?',
        a: 'Yes — 24 hours a day, 365 days a year, including pre-dawn departures and late-night international arrivals.',
      },
    ],
    related: [
      { label: 'Silver Spring Limo Service', to: '/silver-spring-limo-service' },
      { label: 'College Park MD Limo Service', to: '/college-park-md-limo-service' },
      { label: 'Adams Morgan Limo Service', to: '/adams-morgan-limo-service' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Nine Thirty Club Transportation', to: '/nine-thirty-club-dc-transportation' },
    ],
    schema: { areaServed: ['Takoma Park, MD', 'Montgomery County'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'college-park-md-limo-service',
    type: 'city',
    name: 'College Park',
    badge: 'Maryland Cities',
    h1: 'College Park Limo Service & Car Service',
    metaTitle: 'College Park MD Limo Service | Near UMD & BWI',
    metaDescription:
      'Limo and car service in College Park, MD — University of Maryland, Route 1 and the College Park Aviation Museum. BWI 30 min, DCA 25–35 min. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '12 mi · 25–35 minutes' },
      { label: 'To BWI', value: '22 mi · 30–40 minutes' },
      { label: 'To Dulles', value: '35 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'College Park is best known as home to the University of Maryland, but the city itself — the Route 1 corridor, the College Park Aviation Museum at the oldest continuously operated airport in the world, and the NASA Goddard Space Flight Center next door — keeps demand for reliable car service high year-round, not just on game days and graduation weekends.',
      'Reagan National is about 12 miles from College Park — 25 to 35 minutes via the Baltimore-Washington Parkway and the Beltway — while BWI is closer still at 22 miles (30–40 minutes) and Dulles is 35 miles (50–65 minutes). Every airport trip includes real-time flight tracking and complimentary wait time.',
    ],
    highlights: [
      'BWI just 30–40 minutes away — often the fastest airport option from College Park',
      'Flat, all-inclusive quotes with no surge pricing — the price you approve is the price you pay',
      'Flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international',
      'Chauffeurs who know the University of Maryland campus, the Route 1 corridor and NASA Goddard',
      'Mercedes E-Class and BMW 7 Series sedans, Escalade and Suburban SUVs, 14-passenger Sprinters and stretch limos',
      'Parent-move-in, graduation and campus-visit service built around the UMD academic calendar',
      'Corporate accounts with monthly invoicing for NASA Goddard contractors and Route 1 employers',
    ],
    sections: [
      {
        h2: 'A chauffeur who actually knows College Park',
        paragraphs: [
          'College Park runs on two calendars: the University of Maryland\'s academic year and the Route 1 corridor\'s ongoing redevelopment. Our chauffeurs know campus entrances, parking restrictions during move-in and graduation weekends, and the fastest paths between the Beltway and the College Park Aviation Museum or NASA Goddard\'s sprawling campus.',
          'We also serve the growing hotel and apartment corridor along Route 1, which has filled in quickly with new development around the Metro\'s Green Line station.',
        ],
      },
      {
        h2: 'Airport car service from College Park',
        paragraphs: [
          'BWI Marshall: 22 miles, 30–40 minutes, via the Baltimore-Washington Parkway — often our fastest airport option from College Park. Reagan National: 12 miles, 25–35 minutes, via the BW Parkway and the Beltway. Dulles: 35 miles, 50–65 minutes. On arrivals your chauffeur meets you at baggage claim with a name sign or curbside, and on departures we back-time the pickup from your flight.',
        ],
      },
      {
        h2: 'Campus travel, family visits and corporate transfers',
        paragraphs: [
          'Families flying in for parent weekend, move-in day or graduation keep our College Park calendar busy, with SUVs and Sprinter vans built for luggage and group travel. NASA Goddard contractors and Route 1 businesses keep standing corporate accounts for roadshows and visiting staff, and our sedans run daily executive transfers to both BWI and Reagan National.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo executives and faculty travel' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'move-in day and family visits with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'graduation groups and campus tours' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'formals and celebrations' },
    ],
    faqs: [
      {
        q: 'How much does a car service from College Park to BWI or Reagan National cost?',
        a: 'We quote one flat, all-inclusive rate based on your vehicle and pickup address. There is no surge pricing, even on graduation weekend. Call (877) 609-1919 or request a free quote online.',
      },
      {
        q: 'How long is the ride from College Park to BWI, DCA or Dulles?',
        a: 'BWI is about 30–40 minutes (22 miles), Reagan National about 25–35 minutes (12 miles) and Dulles about 50–65 minutes (35 miles) from College Park, depending on traffic.',
      },
      {
        q: 'Can you handle University of Maryland move-in day or graduation?',
        a: 'Yes. We regularly run families, students and luggage during UMD move-in weekends and commencement, with SUVs and Sprinter vans sized for the extra bags.',
      },
      {
        q: 'Do you serve NASA Goddard and Route 1 businesses?',
        a: 'Yes. We provide corporate car service with monthly invoicing for NASA Goddard contractors and companies along the Route 1 corridor.',
      },
      {
        q: 'Is DCA Limos available in College Park overnight and on holidays?',
        a: 'Yes — 24 hours a day, 365 days a year, including pre-dawn departures and late-night international arrivals.',
      },
    ],
    related: [
      { label: 'University of Maryland Transportation', to: '/university-of-maryland-transportation' },
      { label: 'Hyattsville Limo Service', to: '/hyattsville-limo-service' },
      { label: 'Greenbelt Limo Service', to: '/greenbelt-limo-service' },
      { label: 'Takoma Park Limo Service', to: '/takoma-park-md-limo-service' },
      { label: 'BWI to Washington DC', to: '/bwi-to-washington-dc' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
    ],
    schema: { areaServed: ['College Park, MD', "Prince George's County"], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'capital-one-hall-tysons-transportation',
    type: 'event',
    name: 'Capital One Hall',
    badge: 'Events & Venues',
    h1: 'Capital One Hall Transportation in Tysons, VA',
    metaTitle: 'Capital One Hall Transportation | Tysons, VA | DCA Limos',
    metaDescription:
      'Chauffeured car service to Capital One Hall in Tysons, VA — concerts, comedy and Broadway touring shows. Flat rates, 24/7. Call (877) 609-1919.',
    stats: [
      { label: 'Location', value: 'Tysons, VA' },
      { label: 'To Reagan (DCA)', value: '14 mi · 25–40 minutes' },
      { label: 'To Dulles (IAD)', value: '10 mi · 18–25 minutes' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'Capital One Hall is Tysons\' purpose-built performing arts venue — a 1,600-seat main stage plus the more intimate Encore Hall and Bowl, hosting touring Broadway shows, comedy, concerts and corporate events on the Capital One headquarters campus. DCA Limos provides flat-rate chauffeured transportation to every performance, with a staged pickup when the show lets out.',
      'Getting to Capital One Hall usually means navigating Tysons\' dense office towers and parking garages, which fill up fast on show nights. A pre-arranged chauffeur skips all of it: your driver drops you at the venue entrance and is staged at an agreed point when the curtain falls.',
    ],
    highlights: [
      'Flat-rate pricing — no surge when the show lets out',
      'Staged post-show pickups that skip Tysons\' garage exit crush',
      'Direct service from Reagan National, Dulles and BWI with flight tracking',
      'Chauffeurs who know Capital One Hall\'s drop-off loop and the Tysons corporate campus',
      'Sedans, SUVs and Sprinter vans for couples, families and groups',
    ],
    sections: [
      {
        h2: 'A venue built for touring shows, right in the middle of Tysons',
        paragraphs: [
          'Capital One Hall opened as part of the Capital One headquarters campus and quickly became one of the region\'s go-to stops for touring Broadway productions, stand-up comedy and concerts, alongside the more intimate Encore space for smaller acts and corporate events. The building sits inside Tysons\' dense cluster of office towers, hotels and the Tysons Corner Center mall, which means show-night parking and rideshare pickup can be genuinely frustrating.',
          'Our chauffeurs know exactly where Capital One Hall\'s drop-off loop sits relative to the garages, and we stage the return vehicle before the final bow so you walk out directly into a waiting car.',
        ],
      },
      {
        h2: 'Flying in for a show at Capital One Hall',
        paragraphs: [
          'Dulles is just 10 miles away — about 18 to 25 minutes — making a same-evening flight-to-show connection genuinely realistic, and Reagan National is 14 miles (25–40 minutes). We track your flight, meet you at baggage claim, and drive straight to the venue, dinner beforehand, or your Tysons hotel first.',
        ],
      },
      {
        h2: 'Flat rates and group vehicles for any show',
        paragraphs: [
          'Every Capital One Hall transfer is quoted as one flat, all-inclusive rate — fuel, tolls and chauffeur included, with no surge pricing when demand spikes at curtain call. Sedans suit couples and solo theatergoers, SUVs carry groups of five, and Sprinter vans keep larger parties of up to 13 together for corporate outings or group ticket packages.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'couples and solo theatergoers' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'small groups heading to a show' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'families and date nights with dinner stops' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'corporate outings and group ticket packages' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'anniversaries and celebrations' },
    ],
    faqs: [
      {
        q: 'How much does transportation to Capital One Hall cost?',
        a: 'Pricing is a flat, all-inclusive rate based on your pickup location and vehicle — never a surge multiplier. Call (877) 609-1919 for an exact quote.',
      },
      {
        q: 'Will my chauffeur wait during the show at Capital One Hall?',
        a: 'For round trips, your chauffeur drops you at the entrance, stays reachable during the performance, and is staged at an agreed pickup point when the show ends — no post-show rideshare scramble.',
      },
      {
        q: 'Can you pick us up from the airport and take us straight to a show?',
        a: 'Yes. We track your flight into DCA, Dulles or BWI, meet you at baggage claim, and drive directly to Capital One Hall or your hotel first. Dulles is only about 18–25 minutes away.',
      },
      {
        q: 'How big a group can you transport to Capital One Hall?',
        a: 'Our Mercedes Sprinter vans carry up to 13 passengers together, ideal for corporate outings and group ticket packages. For larger parties we can stage multiple vehicles.',
      },
      {
        q: 'Do you know where to drop off and pick up at Capital One Hall?',
        a: 'Yes. Our chauffeurs know the venue\'s drop-off loop and stage the return vehicle before the show ends so you are not navigating Tysons\' garages on foot.',
      },
    ],
    related: [
      { label: 'Tysons Limo Service', to: '/tysons-limo-service' },
      { label: 'McLean Limo Service', to: '/mclean-limo-service' },
      { label: 'EagleBank Arena (GMU) Transportation', to: '/eaglebank-arena-gmu-transportation' },
      { label: 'Wolf Trap Transportation', to: '/wolf-trap-transportation' },
      { label: 'DCA to Tysons', to: '/dca-to-tysons' },
      { label: 'Concert & Event Transportation', to: '/concert-transportation' },
    ],
    schema: { areaServed: ['Tysons, VA', 'Fairfax County'], serviceType: 'Event transportation service' },
  },
  {
    slug: 'eaglebank-arena-gmu-transportation',
    type: 'event',
    name: 'EagleBank Arena',
    badge: 'Events & Venues',
    h1: 'EagleBank Arena (George Mason University) Transportation',
    metaTitle: 'EagleBank Arena Transportation | GMU Fairfax | DCA Limos',
    metaDescription:
      'Chauffeured car service to EagleBank Arena at George Mason University — concerts, commencement and GMU Patriots games. Call (877) 609-1919.',
    stats: [
      { label: 'Location', value: 'Fairfax, VA (GMU campus)' },
      { label: 'To Reagan (DCA)', value: '22 mi · 35–50 minutes' },
      { label: 'To Dulles (IAD)', value: '15 mi · 25–35 minutes' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'EagleBank Arena is George Mason University\'s 10,000-seat venue in Fairfax — home to GMU Patriots basketball, commencement ceremonies, concerts and touring family shows. DCA Limos provides flat-rate chauffeured transportation to every event, with a staged pickup when the game, show or ceremony ends and campus parking turns into gridlock.',
      'Game nights, graduation weekends and major concerts routinely overwhelm the arena\'s surrounding lots, and rideshare pickup on the Fairfax campus can be slow and confusing for visitors. A pre-arranged chauffeur removes the guesswork — your driver knows exactly where to stage.',
    ],
    highlights: [
      'Flat-rate pricing — no surge on game nights or graduation weekends',
      'Staged post-event pickups that skip the campus parking crush',
      'Direct service from Reagan National, Dulles and BWI with flight tracking',
      'Chauffeurs who know the GMU Fairfax campus and EagleBank Arena\'s loading and pickup areas',
      'Sedans, SUVs and Sprinter vans for families, alumni groups and graduation parties',
    ],
    sections: [
      {
        h2: 'Game nights, concerts and commencement at EagleBank Arena',
        paragraphs: [
          'EagleBank Arena anchors George Mason University\'s Fairfax campus and does double duty as a sports venue, concert hall and the site of GMU\'s commencement ceremonies each spring — one of the single busiest traffic days on campus. Parking lots fill early and exit slowly, and campus roads are not built for the surge of cars that a sold-out game or graduation ceremony brings.',
          'A pre-arranged chauffeur sidesteps the entire problem: we know which loading areas and side streets move fastest, and we stage your return vehicle before the final buzzer or the last diploma is handed out.',
        ],
      },
      {
        h2: 'Flying in for a game, concert or graduation',
        paragraphs: [
          'Dulles is just 15 miles away — about 25 to 35 minutes — making it the natural airport for out-of-town family flying in for commencement, and Reagan National is 22 miles (35–50 minutes). We track your flight, meet you at baggage claim, and drive straight to the arena, your hotel, or dinner beforehand.',
        ],
      },
      {
        h2: 'Flat rates and family-sized vehicles',
        paragraphs: [
          'Every EagleBank Arena transfer is quoted as one flat, all-inclusive rate — fuel, tolls and chauffeur included, with no surge pricing when demand spikes at the final whistle. SUVs and Sprinter vans are especially popular for graduation weekend, when extended families travel together and need room for luggage, caps and gowns, and flowers.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo alumni and faculty travel' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families attending graduation with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'extended families and game-night groups' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'graduation parties and alumni groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'graduation celebrations' },
    ],
    faqs: [
      {
        q: 'How much does transportation to EagleBank Arena cost?',
        a: 'Pricing is a flat, all-inclusive rate based on your pickup location and vehicle — never a surge multiplier. Call (877) 609-1919 for an exact quote.',
      },
      {
        q: 'Can you handle GMU commencement weekend?',
        a: 'Yes. Commencement is one of our busiest EagleBank Arena dates — we recommend booking early, and SUVs and Sprinter vans are popular for extended families traveling together.',
      },
      {
        q: 'Will my chauffeur wait during a game or concert?',
        a: 'For round trips, your chauffeur drops you at the arena and is staged at an agreed pickup point when the event ends — no post-event parking-lot gridlock.',
      },
      {
        q: 'Can you pick us up from the airport and take us straight to GMU?',
        a: 'Yes. We track your flight into DCA, Dulles or BWI, meet you at baggage claim, and drive directly to EagleBank Arena or your hotel first.',
      },
      {
        q: 'How big a group can you transport to EagleBank Arena?',
        a: 'Our Mercedes Sprinter vans carry up to 13 passengers together, ideal for graduation parties and alumni groups. For larger parties we can stage multiple vehicles.',
      },
    ],
    related: [
      { label: 'Fairfax Limo Service', to: '/fairfax-limo-service' },
      { label: 'Chantilly Limo Service', to: '/chantilly-limo-service' },
      { label: 'Capital One Hall (Tysons) Transportation', to: '/capital-one-hall-tysons-transportation' },
      { label: 'Reston Limo Service', to: '/reston-limo-service' },
      { label: 'DCA to Fairfax', to: '/dca-to-fairfax' },
      { label: 'Washington DC Graduation Limo', to: '/washington-dc-graduation-limo' },
    ],
    schema: { areaServed: ['Fairfax, VA', 'George Mason University'], serviceType: 'Event transportation service' },
  },
  {
    slug: 'arlington-national-cemetery-transportation',
    type: 'event',
    name: 'Arlington National Cemetery',
    badge: 'Events & Venues',
    h1: 'Arlington National Cemetery Transportation',
    metaTitle: 'Arlington National Cemetery Transportation | DCA Limos',
    metaDescription:
      'Respectful chauffeured transportation to Arlington National Cemetery — funerals, memorial services and visits. Discreet, punctual, 24/7. (877) 609-1919.',
    stats: [
      { label: 'Location', value: 'Arlington, VA' },
      { label: 'To Reagan (DCA)', value: '3 mi · 8–15 minutes' },
      { label: 'Parking', value: 'Limited on-site' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'Arlington National Cemetery is one of the most solemn sites in the country, and getting a family, delegation or group of visitors there calls for a level of punctuality and discretion that parking shuttles and rideshare simply cannot guarantee. DCA Limos provides respectful, on-time chauffeured transportation for funerals with military honors, memorial services, wreath-laying ceremonies and visits to the Tomb of the Unknown Soldier and the Kennedy gravesite.',
      'The cemetery sits just 3 miles from Reagan National — 8 to 15 minutes via the GW Parkway — making it easy to combine an airport arrival with a same-day visit, and our chauffeurs are experienced in timing funeral processions and family transportation to the minute, which matters enormously when a military honor guard schedule cannot be moved.',
    ],
    highlights: [
      'Precisely timed arrivals for funerals with military honors and memorial services',
      'Discreet, professionally dressed chauffeurs in black sedans and SUVs',
      'Direct service from Reagan National, just 3 miles and 8–15 minutes away',
      'Multi-vehicle coordination for extended family and visiting delegations',
      'Flat, all-inclusive pricing with no surge, confirmed before you book',
    ],
    sections: [
      {
        h2: 'Funerals, memorial services and military honors',
        paragraphs: [
          'A funeral with military honors at Arlington National Cemetery runs on a schedule set by the cemetery and the honor guard, not by traffic. Our chauffeurs plan routes and timing in advance so that family and guests arrive exactly when needed — not rushed, not waiting in a parking area away from the service. We coordinate multiple vehicles when extended family or visiting delegations travel together, and our chauffeurs maintain a quiet, respectful presence throughout.',
          'On-site parking at Arlington is limited and reserved largely for official use, which makes a chauffeur-driven arrival — with drop-off directly at the appropriate gate and a return vehicle waiting afterward — far more practical than self-driving and searching for parking before a service.',
        ],
      },
      {
        h2: 'Visiting the Tomb of the Unknown Soldier and historic gravesites',
        paragraphs: [
          'Many visitors combine a trip to Arlington National Cemetery with other DC landmarks in a single day — the Tomb of the Unknown Soldier\'s Changing of the Guard ceremony, the Kennedy gravesite and eternal flame, and the Memorial Amphitheater are common stops. An hourly chauffeur lets a family or tour group move between these sites and on to the Lincoln Memorial or Arlington House without worrying about parking at each stop.',
        ],
      },
      {
        h2: 'Flying in for a service at Arlington',
        paragraphs: [
          'Because the cemetery is so close to Reagan National, out-of-town family flying in for a funeral or memorial service can often go straight from baggage claim to the cemetery with time to spare. We track your flight, meet you at arrivals, and plan the drive against the service schedule rather than the flight schedule alone.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'immediate family and small groups' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'dignitaries and VIP guests' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'extended family with luggage' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'larger family groups' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'visiting delegations and large families' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'formal memorial transportation' },
    ],
    faqs: [
      {
        q: 'Can you coordinate transportation timed to a funeral with military honors?',
        a: 'Yes. We plan routes and arrival timing in advance around the cemetery\'s and honor guard\'s schedule, so family and guests arrive precisely when needed without rushing.',
      },
      {
        q: 'Do you provide multiple vehicles for extended family or delegations?',
        a: 'Yes. We regularly coordinate several vehicles traveling together for larger families, visiting delegations and memorial parties.',
      },
      {
        q: 'How far is Arlington National Cemetery from Reagan National Airport?',
        a: 'About 3 miles, typically 8 to 15 minutes via the GW Parkway, which makes it easy to go straight from an airport arrival to a service.',
      },
      {
        q: 'Is parking available at the cemetery?',
        a: 'On-site parking is limited. A chauffeured drop-off at the appropriate gate, with a vehicle waiting afterward, is generally more practical than self-parking, especially during a service.',
      },
      {
        q: 'Can you take us to other DC landmarks the same day?',
        a: 'Yes. Many visitors combine Arlington National Cemetery with the Lincoln Memorial, the National Mall and other sites in one hourly chauffeur booking.',
      },
    ],
    related: [
      { label: 'Arlington VA Limo Service', to: '/arlington-va-limo-service' },
      { label: 'Pentagon City Limo Service', to: '/pentagon-city-limo-service' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'Crystal City Limo Service', to: '/crystal-city-limo-service' },
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
      { label: 'Washington Convention Center Transportation', to: '/washington-convention-center-transportation' },
    ],
    schema: { areaServed: ['Arlington, VA', 'Washington DC'], serviceType: 'Event transportation service' },
  },
  {
    slug: 'nine-thirty-club-dc-transportation',
    type: 'event',
    name: '9:30 Club',
    badge: 'Events & Venues',
    h1: '9:30 Club Transportation in Washington, DC',
    metaTitle: '9:30 Club Transportation | U Street, DC | DCA Limos',
    metaDescription:
      'Chauffeured car service to the 9:30 Club on U Street — flat-rate rides with staged post-show pickup. No parking, no surge. Call (877) 609-1919.',
    stats: [
      { label: 'Location', value: 'U Street / Shaw, DC' },
      { label: 'To Reagan (DCA)', value: '6 mi · 15–25 minutes' },
      { label: 'Parking', value: 'Street only — very limited' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'The 9:30 Club is Washington\'s legendary 1,200-capacity music venue on V Street in the U Street/Shaw corridor — a tight, standing-room club with almost no dedicated parking and a sidewalk that fills up fast before doors and empties in a crush when the encore ends. DCA Limos provides flat-rate chauffeured transportation to every 9:30 Club show, with a staged pickup so you are not fighting the post-show crowd for a rideshare.',
      'The neighborhood\'s street parking is scarce and heavily enforced, and rideshare surge pricing spikes hard the moment a sold-out show lets out. A pre-arranged chauffeur sidesteps both problems with one flat rate, confirmed before the show starts.',
    ],
    highlights: [
      'Flat-rate pricing — no surge when the encore ends',
      'Staged post-show pickups that skip the V Street sidewalk crush',
      'Direct service from Reagan National, Dulles and BWI with flight tracking',
      'Chauffeurs who know U Street, Shaw and the 9:30 Club\'s loading-zone etiquette',
      'Sedans, SUVs and Sprinter vans for couples, groups and corporate outings',
    ],
    sections: [
      {
        h2: 'A legendary club with almost no parking',
        paragraphs: [
          'The 9:30 Club has hosted touring acts of every size for decades, and its U Street/Shaw location is as beloved as the sound system — but the neighborhood was never built for cars. Street parking disappears well before doors open, nearby garages fill early, and the sidewalk outside becomes a dense, slow-moving crowd the moment the show ends.',
          'A chauffeured drop-off avoids the parking hunt entirely, and a pre-arranged return pickup means you are not standing in a crowd trying to flag a rideshare that just went 2x.',
        ],
      },
      {
        h2: 'Making an early flight work with a late show',
        paragraphs: [
          'We track your flight into DCA, Dulles or BWI and can route straight from baggage claim to U Street in time for doors, or handle the reverse — a late show followed by an early-morning flight the next day. Reagan National is only 6 miles away, about 15 to 25 minutes depending on the hour.',
        ],
      },
      {
        h2: 'Flat rates for solo fans and group outings',
        paragraphs: [
          'Every 9:30 Club transfer is one flat, all-inclusive rate — fuel, tolls and chauffeur included, with no surge pricing at encore time. A sedan covers a couple or solo fan, while SUVs and Sprinter vans keep larger friend groups, birthday parties or corporate outings together for one predictable price instead of splitting several surging rideshares.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'couples and solo concertgoers' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'friend groups heading to a show' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'birthday parties and group nights out' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'corporate outings and larger groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'special-occasion nights out' },
    ],
    faqs: [
      {
        q: 'How much does transportation to the 9:30 Club cost?',
        a: 'Pricing is a flat, all-inclusive rate based on your pickup location and vehicle — never a surge multiplier. Call (877) 609-1919 for an exact quote.',
      },
      {
        q: 'Is there parking at the 9:30 Club?',
        a: 'Not much — street parking is scarce and heavily enforced in U Street/Shaw, and nearby garages fill early on show nights. A chauffeured drop-off avoids the search entirely.',
      },
      {
        q: 'Will my chauffeur wait during the show?',
        a: 'For round trips, your chauffeur drops you near the venue and is staged at an agreed pickup point when the show ends — no fighting the V Street sidewalk crowd for a ride.',
      },
      {
        q: 'Can you pick us up from the airport and take us straight to a show?',
        a: 'Yes. We track your flight into DCA, Dulles or BWI, meet you at baggage claim, and drive directly to U Street in time for doors.',
      },
      {
        q: 'How big a group can you transport to the 9:30 Club?',
        a: 'Our Mercedes Sprinter vans carry up to 13 passengers together, ideal for birthday parties and corporate outings. For larger groups we can stage multiple vehicles.',
      },
    ],
    related: [
      { label: 'Dupont Circle Limo Service', to: '/dupont-circle-limo-service' },
      { label: 'Adams Morgan Limo Service', to: '/adams-morgan-limo-service' },
      { label: 'Logan Circle Limo Service', to: '/logan-circle-limo-service' },
      { label: 'Capital One Arena Transportation', to: '/capital-one-arena-transportation' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Concert & Event Transportation', to: '/concert-transportation' },
    ],
    schema: { areaServed: ['U Street, Washington DC', 'Shaw'], serviceType: 'Event transportation service' },
  },
  {
    slug: 'national-cathedral-dc-transportation',
    type: 'event',
    name: 'Washington National Cathedral',
    badge: 'Events & Venues',
    h1: 'Washington National Cathedral Transportation',
    metaTitle: 'Washington National Cathedral Transportation | DCA Limos',
    metaDescription:
      'Chauffeured car service to the Washington National Cathedral — weddings, services, tours and state events. Flat rates, discreet, 24/7. (877) 609-1919.',
    stats: [
      { label: 'Location', value: 'Cleveland Park / Wesley Heights, DC' },
      { label: 'To Reagan (DCA)', value: '7 mi · 18–28 minutes' },
      { label: 'Parking', value: 'On-site, fills early for major events' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'The Washington National Cathedral is one of the most recognizable landmarks in the city — a Gothic cathedral that has hosted presidential funerals, state events and countless weddings, alongside a steady calendar of tours, concerts and services. DCA Limos provides chauffeured transportation for every occasion, from wedding parties to tour groups to families attending a service.',
      'Perched above Wisconsin Avenue in Cleveland Park, the Cathedral\'s on-site parking fills quickly for major events and state occasions, and the surrounding residential streets have limited capacity. A pre-arranged chauffeur means your wedding party, tour group or visiting family is dropped at the correct entrance without circling for parking.',
    ],
    highlights: [
      'Wedding-day coordination for ceremonies and the Cathedral\'s grounds',
      'Flat-rate pricing confirmed before you book — no surge for major events',
      'Direct service from Reagan National, just 7 miles and 18–28 minutes away',
      'Chauffeurs who know Cleveland Park, Wisconsin Avenue traffic and Cathedral event logistics',
      'Sedans, SUVs, Sprinter vans and stretch limousines for wedding parties and tour groups',
    ],
    sections: [
      {
        h2: 'Weddings and services at the Cathedral',
        paragraphs: [
          'A wedding at the Washington National Cathedral is a once-in-a-lifetime event, and the transportation should match the occasion. Our chauffeurs coordinate with wedding parties on timing for the ceremony, photos on the Cathedral grounds and the Bishop\'s Garden, and the drive to the reception afterward — in a stretch limousine, a Sprinter van for the full bridal party, or a fleet of sedans for family.',
          'Regular Sunday services, choral concerts and special observances also draw visitors from across the region, and a chauffeured drop-off avoids the parking crunch that major state events and holiday services routinely create.',
        ],
      },
      {
        h2: 'Tours, state events and visiting family',
        paragraphs: [
          'The Cathedral\'s towers, stained glass and grounds draw tour groups and families year-round, and state funerals and national observances occasionally bring heightened security and street closures around the grounds. We monitor those schedules and plan routes accordingly, so a planned visit is never derailed by a closure nobody warned you about.',
        ],
      },
      {
        h2: 'Flying in for a Cathedral event',
        paragraphs: [
          'Reagan National is just 7 miles away — about 18 to 28 minutes depending on Wisconsin Avenue and Beltway traffic — making it easy for out-of-town wedding guests or family to go straight from baggage claim to the Cathedral. We track your flight and meet you at arrivals.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'family and solo guests' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and dignitary travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'wedding party and family groups' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'extended family with luggage' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'full bridal parties and tour groups' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'wedding-day transportation' },
    ],
    faqs: [
      {
        q: 'Can you coordinate wedding-day transportation at the Cathedral?',
        a: 'Yes. We coordinate timing with wedding parties for the ceremony, photos on the Cathedral grounds, and the drive to the reception, in anything from a stretch limousine to a Sprinter van.',
      },
      {
        q: 'Is there parking at the Washington National Cathedral?',
        a: 'On-site parking exists but fills quickly for major events, weddings and state occasions. A chauffeured drop-off at the correct entrance avoids the search.',
      },
      {
        q: 'How far is the Cathedral from Reagan National Airport?',
        a: 'About 7 miles, typically 18 to 28 minutes depending on traffic, making it easy for out-of-town guests to go straight from the airport to the Cathedral.',
      },
      {
        q: 'Can you handle a tour group visiting the Cathedral?',
        a: 'Yes. Sprinter vans and SUVs are popular for tour groups and families visiting the towers, stained glass and Bishop\'s Garden.',
      },
      {
        q: 'Do you monitor for state events or closures near the Cathedral?',
        a: 'Yes. State funerals and national observances occasionally bring heightened security and street closures, and we plan routes around published schedules.',
      },
    ],
    related: [
      { label: 'Washington DC Wedding Limo', to: '/washington-dc-wedding-limo' },
      { label: 'Georgetown Limo Service', to: '/georgetown-limo-service' },
      { label: 'Foggy Bottom Limo Service', to: '/foggy-bottom-limo-service' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Maryland Wedding Limo', to: '/maryland-wedding-limo' },
    ],
    schema: { areaServed: ['Cleveland Park, Washington DC'], serviceType: 'Event transportation service' },
  },
  {
    slug: 'union-station-dc-transportation',
    type: 'event',
    name: 'Union Station',
    badge: 'Events & Venues',
    h1: 'Union Station Transportation in Washington, DC',
    metaTitle: 'Union Station Transportation | DC Amtrak | DCA Limos',
    metaDescription:
      'Chauffeured car service to and from Union Station — Amtrak, Acela, MARC and VRE connections near Capitol Hill. Flat rates, 24/7. (877) 609-1919.',
    stats: [
      { label: 'Location', value: 'Capitol Hill, DC' },
      { label: 'To Reagan (DCA)', value: '4 mi · 10–20 minutes' },
      { label: 'Trains served', value: 'Amtrak, Acela, MARC, VRE' },
      { label: 'Availability', value: '24 / 7' },
    ],
    intro: [
      'Union Station is Washington\'s grand rail gateway — Amtrak, the high-speed Acela, and the MARC and VRE commuter lines all converge beneath its vaulted main hall, a few blocks from the Capitol. DCA Limos provides flat-rate chauffeured transportation to and from Union Station, whether you are connecting from a flight at Reagan National, combining air and rail travel, or simply need a reliable ride to catch a train.',
      'Reagan National is just 4 miles from Union Station — 10 to 20 minutes via the GW Parkway and I-395 — which makes an air-to-rail or rail-to-air connection genuinely easy with a chauffeur who tracks both your flight and your train.',
    ],
    highlights: [
      'Seamless air-to-rail connections between DCA and Union Station',
      'Flat-rate pricing with no surge, confirmed before you book',
      'Chauffeurs who know Union Station\'s drop-off loop, First Street and Capitol Hill traffic patterns',
      'Flight and train-schedule awareness for tight connections',
      'Sedans, SUVs and Sprinter vans for solo travelers, families and groups with luggage',
    ],
    sections: [
      {
        h2: 'Combining air travel with Amtrak and the Acela',
        paragraphs: [
          'Travelers heading onward to New York, Philadelphia, Baltimore or points north increasingly fly into Reagan National and connect to the Acela at Union Station rather than battling connecting flights. Our chauffeurs track your inbound flight, meet you at baggage claim, and time the drive to Union Station against your train\'s departure — not just the flight schedule — so a tight connection does not turn into a missed train.',
          'The reverse works just as well: arriving by Amtrak or the Acela and heading straight to a DCA departure, with your chauffeur tracking the train and waiting as it comes in.',
        ],
      },
      {
        h2: 'MARC, VRE and Capitol Hill connections',
        paragraphs: [
          'Union Station is also the hub for MARC trains to Baltimore and Maryland\'s suburbs and VRE service into Northern Virginia, and we run frequent transfers for commuters and visitors making that last-mile connection with luggage. The station\'s location steps from the Capitol and Senate and House office buildings also makes it a natural staging point for government and lobbying-firm travel.',
        ],
      },
      {
        h2: 'Flat rates for any group size',
        paragraphs: [
          'Every Union Station transfer is quoted as one flat, all-inclusive rate — fuel, tolls and chauffeur included, with no surge pricing even when trains and flights bunch up during peak travel periods. Sedans suit solo business travelers, SUVs handle families with luggage, and Sprinter vans keep larger groups together for one predictable fare.',
        ],
      },
    ],
    vehicles: [
      { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo business and Acela travelers' },
      { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'VIP and executive travel' },
      { name: 'Cadillac Escalade', cls: 'Premium SUV', seats: 6, best: 'families with luggage making a connection' },
      { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport-to-rail transfers with extra bags' },
      { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'groups traveling together by rail' },
      { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'special-occasion rail connections' },
    ],
    faqs: [
      {
        q: 'Can you time a pickup for a tight Reagan National to Union Station connection?',
        a: 'Yes. Our chauffeurs track your inbound flight and plan the drive against your train\'s departure time, not just the flight schedule, to protect tight air-to-rail connections.',
      },
      {
        q: 'Do you serve MARC and VRE travelers, not just Amtrak?',
        a: 'Yes. We regularly run commuters and visitors connecting to and from MARC and VRE trains at Union Station, with room for luggage.',
      },
      {
        q: 'How far is Union Station from Reagan National Airport?',
        a: 'About 4 miles, typically 10 to 20 minutes via the GW Parkway and I-395, depending on traffic.',
      },
      {
        q: 'Can you pick me up at Union Station if my train is delayed?',
        a: 'Yes. We monitor train status where possible and can adjust pickup timing; call dispatch at (877) 609-1919 if your arrival time changes.',
      },
      {
        q: 'Do you serve Capitol Hill offices near Union Station?',
        a: 'Yes. Union Station sits steps from the Capitol and House and Senate office buildings, and we regularly handle government and lobbying-firm travel in the area.',
      },
    ],
    related: [
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
      { label: 'Washington Convention Center Transportation', to: '/washington-convention-center-transportation' },
      { label: 'DCA Airport Hotel Transfers', to: '/dca-airport-hotel-transfers' },
      { label: 'Penn Quarter Limo Service', to: '/penn-quarter-limo-service' },
    ],
    schema: { areaServed: ['Capitol Hill, Washington DC'], serviceType: 'Event transportation service' },
  },
];
