// Batch 10 (2026-10-21, SEO expansion round 5): 10 new pages — 3 city+
// corporate pages for cities that already have other page types but no
// dedicated corporate page (Bethesda, Arlington, Rockville), 4 corporate
// car service pages organized by industry vertical (healthcare, law/
// lobbying firms, government & federal contractors, financial services —
// these follow the non-city "service" template used by sprinter-van-
// rental-with-driver and funeral-limousine-service, not the city template),
// and 3 real DC-area venue pages not covered by any prior batch (Strathmore
// Music Center, Warner Theatre, Baltimore's Inner Harbor & National
// Aquarium). Same entry shape as MARYLAND_PAGES / MARYLAND_BATCH3-9.
const VEHICLES = [
  { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo travelers and couples' },
  { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'executive and VIP travel' },
  { name: 'Lincoln Navigator', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
  { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
  { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
  { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'weddings, prom and special occasions' },
];

export const MARYLAND_BATCH10 = [
  // ---------------------------------------------------------------------
  // CITY + CORPORATE (cities with other page types but no corporate page)
  // ---------------------------------------------------------------------
  {
    slug: 'bethesda-corporate-car-service',
    type: 'service',
    name: 'Bethesda Corporate Car Service',
    badge: 'Corporate Car Service',
    h1: 'Bethesda Corporate Car Service',
    metaTitle: 'Bethesda MD Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service in Bethesda, MD: executive sedans and airport transfers for NIH, Marriott HQ and downtown Bethesda offices. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '14 mi · 30–40 minutes' },
      { label: 'To Dulles (IAD)', value: '22 mi · 35–50 minutes' },
      { label: 'To BWI', value: '40 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Bethesda is one of the densest corporate and institutional employment centers in Montgomery County — anchored by the National Institutes of Health campus, Marriott International\'s global headquarters, and a downtown office core along Wisconsin Avenue and Woodmont Avenue that houses law firms, biotech companies and federal contractors. DCA Limos runs daily executive sedans, airport transfers and visiting-delegation Sprinter vans for that base, with chauffeurs who know the NIH campus\'s own security and registration procedures as well as downtown Bethesda\'s loading zones.',
      'Corporate accounts with monthly invoicing are standard among our Bethesda clients, particularly NIH-affiliated visitors and Marriott-related travel, where the volume of recurring airport transfers and conference travel makes trip-by-trip booking unnecessary.',
    ],
    highlights: [
      'Experience with NIH campus visitor registration and security procedures',
      'Daily executive sedan service for downtown Bethesda offices and Marriott headquarters',
      'Airport transfers to DCA, Dulles and BWI with real-time flight tracking',
      'Sprinter vans for visiting scientists, conference groups and corporate delegations',
      'Corporate accounts with monthly invoicing and a dedicated dispatch contact',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Serving NIH, Marriott and downtown Bethesda',
        paragraphs: [
          'The National Institutes of Health campus draws a constant flow of visiting researchers, study participants and conference attendees, and every vehicle entering requires advance registration and valid identification at the gate. We collect that information at booking so your chauffeur clears NIH security without delay, the same way we handle gate-controlled installations elsewhere in our coverage area.',
          'Marriott International\'s headquarters and the office towers along Wisconsin and Woodmont Avenues generate steady daily sedan demand for executives and recurring airport transfers, and our chauffeurs know which buildings restrict street-level access outside business hours.',
        ],
      },
      {
        h2: 'Airport transfers for Bethesda-based companies',
        paragraphs: [
          'Reagan National is the most frequently booked airport from Bethesda, 30 to 40 minutes via the Capital Beltway or Wisconsin Avenue, with Dulles close behind for international and long-haul travel. Every transfer is flight-tracked with complimentary wait time, so a delayed arrival never turns into a missed pickup.',
          'Standing weekly schedules are common among NIH-affiliated and Marriott-related travelers, and we set those up once rather than reconfirming pickup details before every trip.',
        ],
      },
      {
        h2: 'Visiting delegations and corporate accounts',
        paragraphs: [
          'A Sprinter van keeps a visiting research team or conference delegation together for a full day of meetings between NIH, downtown Bethesda hotels and restaurants, without splitting the group into separate rideshares. Corporate accounts come with monthly invoicing and priority scheduling during NIH\'s busiest conference and grant-review seasons.',
          'Call (877) 609-1919 or request a quote online to set up a Bethesda corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you clear vehicles through NIH campus security?',
        a: 'Yes. We collect driver and passenger identification at booking and confirm the registration details your chauffeur needs to clear the NIH gate without delay.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing in Bethesda?',
        a: 'Yes. Most of our Bethesda clients — including NIH-affiliated travelers and Marriott-related business travel — use a standing account with monthly invoicing and one dispatch contact.',
      },
      {
        q: 'How long is the ride from Bethesda to DCA, Dulles or BWI?',
        a: 'Reagan National runs about 30–40 minutes, Dulles about 35–50 minutes and BWI about 50–65 minutes, depending on traffic.',
      },
      {
        q: 'Can you provide a Sprinter van for a visiting research or conference group?',
        a: 'Yes. Our Sprinter vans keep visiting delegations together for a full day of NIH or downtown Bethesda meetings on one coordinated schedule.',
      },
      {
        q: 'Is Bethesda corporate car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning airport departures and late conference-day pickups.',
      },
    ],
    related: [
      { label: 'Bethesda Limo Service', to: '/bethesda-limo-service' },
      { label: 'Bethesda Wedding Limo Service', to: '/bethesda-wedding-limo-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'North Bethesda Limo Service', to: '/north-bethesda-limo-service' },
      { label: 'Rockville Corporate Car Service', to: '/rockville-corporate-car-service' },
      { label: 'DCA to Bethesda', to: '/dca-to-bethesda' },
    ],
    schema: { areaServed: ['Bethesda, MD', 'Montgomery County, MD'], serviceType: 'Corporate car service' },
  },
  {
    slug: 'arlington-corporate-car-service',
    type: 'service',
    name: 'Arlington Corporate Car Service',
    badge: 'Corporate Car Service',
    h1: 'Arlington, VA Corporate Car Service',
    metaTitle: 'Arlington VA Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service in Arlington, VA: executive sedans and airport transfers for Crystal City, Rosslyn, Pentagon City and Ballston offices. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '4 mi · 10–20 minutes' },
      { label: 'To Dulles (IAD)', value: '22 mi · 30–45 minutes' },
      { label: 'To BWI', value: '40 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Arlington is one of the largest corporate employment bases in the DC region, split across several distinct office corridors: Crystal City and Pentagon City\'s government-contractor and Amazon HQ2 cluster, Rosslyn and Ballston\'s law-firm and association offices, and the Pentagon itself. DCA Limos runs daily executive sedans, standing airport transfers and roadshow Sprinter vans across all of it, with the advantage of DCA\'s short, direct runs into every Arlington corridor.',
      'Because Arlington sits closer to Reagan National than almost any other corporate market we serve, same-day round-trip airport transfers are especially common here — a client flies in for a morning meeting and departs the same afternoon — and our flight-tracked dispatch is built around exactly that kind of tight schedule.',
    ],
    highlights: [
      'Executive sedans for Crystal City, Pentagon City, Rosslyn and Ballston offices',
      'The shortest airport transfer in our coverage area — DCA is 10 to 20 minutes from most Arlington addresses',
      'Chauffeurs who know which office towers restrict after-hours street access',
      'Sprinter van roadshows for teams and visiting delegations across Arlington\'s office corridors',
      'Corporate accounts with monthly invoicing and dedicated dispatch',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A car service built for Arlington\'s office corridors',
        paragraphs: [
          'Crystal City and Pentagon City\'s office towers, home to a dense cluster of government contractors and Amazon\'s HQ2 campus, sit minutes from DCA\'s terminal — which makes same-day, round-trip airport transfers routine rather than exceptional for companies based there. Rosslyn and Ballston, a few miles north along Route 110 and Wilson Boulevard, house a different mix of law firms, trade associations and nonprofit headquarters, and our chauffeurs know both corridors\' loading zones and after-hours access points.',
          'Visiting clients and delegations headed to the Pentagon itself require advance coordination for building access, and we handle that registration the same way we do for other secured federal sites in our coverage area.',
        ],
      },
      {
        h2: 'Airport transfers: Arlington\'s biggest advantage',
        paragraphs: [
          'Reagan National is 4 miles and 10 to 20 minutes from most Arlington addresses — the shortest, most predictable airport transfer we offer anywhere in the region. For companies with frequent same-day client visits or staff travel, that short, reliable drive time is often the deciding factor in keeping a standing car-service account rather than relying on rideshare, where even a short trip can be delayed by a driver reassignment or a surge spike during Crystal City\'s rush-hour crunch.',
          'Dulles, 30 to 45 minutes away, covers international and long-haul travel for Arlington-based staff; we quote both airports and let your travel coordinator choose based on the actual flight.',
        ],
      },
      {
        h2: 'Roadshows and corporate accounts',
        paragraphs: [
          'A Sprinter van keeps a visiting team or delegation together across Arlington\'s spread-out office corridors — useful for a group with stops at both a Crystal City and a Rosslyn meeting in the same day. Corporate accounts come with monthly invoicing, a dedicated dispatch contact and priority scheduling during Arlington\'s busiest conference and government fiscal-year-end weeks.',
          'Call (877) 609-1919 or request a quote online to set up an Arlington corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you offer corporate accounts with monthly invoicing in Arlington?',
        a: 'Yes. Most of our Arlington clients use a standing corporate account with monthly invoicing and a dedicated dispatch contact rather than booking trip by trip.',
      },
      {
        q: 'How long is the ride from Arlington to DCA?',
        a: 'Typically 10 to 20 minutes depending on your exact Arlington address — the shortest airport transfer we offer anywhere in our coverage area.',
      },
      {
        q: 'Can you serve the Pentagon and coordinate building access?',
        a: 'Yes. We collect the identification and registration details your chauffeur needs in advance for secured federal buildings, including the Pentagon.',
      },
      {
        q: 'Do you cover both Crystal City and Rosslyn/Ballston in one booking?',
        a: 'Yes. A single Sprinter van or sedan reservation can cover multiple stops across Arlington\'s office corridors in the same day.',
      },
      {
        q: 'Is Arlington corporate car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning and same-day round-trip airport transfers.',
      },
    ],
    related: [
      { label: 'Crystal City Limo Service', to: '/crystal-city-limo-service' },
      { label: 'Rosslyn & Ballston Limo Service', to: '/rosslyn-ballston-limo-service' },
      { label: 'Pentagon City Limo Service', to: '/pentagon-city-limo-service' },
      { label: 'Clarendon & Arlington Limo Service', to: '/clarendon-arlington-limo-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'DCA to Arlington', to: '/dca-to-arlington' },
    ],
    schema: { areaServed: ['Arlington, VA', 'Northern Virginia'], serviceType: 'Corporate car service' },
  },
  {
    slug: 'rockville-corporate-car-service',
    type: 'service',
    name: 'Rockville Corporate Car Service',
    badge: 'Corporate Car Service',
    h1: 'Rockville Corporate Car Service',
    metaTitle: 'Rockville MD Corporate Car Service | DCA Limos',
    metaDescription:
      'Corporate car service in Rockville, MD: executive sedans and airport transfers for the Nuclear Regulatory Commission and I-270 biotech firms. (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '20 mi · 35–50 minutes' },
      { label: 'To Dulles (IAD)', value: '27 mi · 40–55 minutes' },
      { label: 'To BWI', value: '42 mi · 55–70 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'Rockville anchors Montgomery County\'s I-270 biotech and life-sciences corridor and hosts the Nuclear Regulatory Commission\'s headquarters, the Montgomery County government complex, and a growing cluster of health-science firms along Shady Grove Road. DCA Limos runs daily executive sedans, airport transfers and roadshow Sprinter vans for that base, separate from our general Rockville city coverage — this page is specifically for recurring corporate accounts.',
      'Companies based in Rockville generate enough recurring airport-transfer and client-visit volume that a standing corporate account with monthly invoicing is the norm among our regular clients here, rather than booking and paying trip by trip.',
    ],
    highlights: [
      'Executive sedans for Nuclear Regulatory Commission visitors and I-270 biotech firms',
      'Airport transfers to DCA, Dulles and BWI with real-time flight tracking',
      'Chauffeurs who know the I-270 spur merge, Rockville Pike and Shady Grove Road corridor',
      'Sprinter van roadshows for teams and visiting delegations',
      'Corporate accounts with monthly invoicing and a dedicated dispatch contact',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Serving Rockville\'s federal and biotech employers',
        paragraphs: [
          'The Nuclear Regulatory Commission\'s headquarters draws a steady flow of visiting staff, contractors and conference attendees, and the Montgomery County government complex downtown adds its own daily travel demand. Along the I-270 corridor and Shady Grove Road, a cluster of biotech and health-science firms generates recurring airport transfers for executives and visiting scientific staff — business we handle separately from our general Rockville city service, which covers weddings, events and leisure travel.',
          'Our chauffeurs work I-270, Rockville Pike (MD-355) and the Capital Beltway daily and know the difference between a Twinbrook pickup and a Fallsgrove one, including which route avoids the I-270 spur merge at its worst.',
        ],
      },
      {
        h2: 'Airport transfers for Rockville companies',
        paragraphs: [
          'Reagan National runs 35 to 50 minutes via I-270, I-495 and the GW Parkway; Dulles is a comparable 40 to 55 minutes via the American Legion Bridge and the Dulles Toll Road, a genuine consideration for firms with international travel. Every transfer is flight-tracked with complimentary wait time, so a delay on either end does not disrupt the schedule.',
          'Standing weekly or monthly transfer schedules are common among NRC-affiliated and biotech-sector clients, set up once rather than reconfirmed before every trip.',
        ],
      },
      {
        h2: 'Roadshows, visiting delegations and corporate accounts',
        paragraphs: [
          'A Sprinter van keeps a visiting regulatory team, research delegation or roadshow group together for a full day of stops across Rockville and the broader I-270 corridor. Corporate accounts come with monthly invoicing and priority scheduling during the NRC\'s and county government\'s busiest seasons.',
          'Call (877) 609-1919 or request a quote online to set up a Rockville corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Do you offer corporate accounts with monthly invoicing in Rockville?',
        a: 'Yes. Most of our Rockville corporate clients — including NRC-affiliated and I-270 biotech-sector travel — use a standing account with monthly invoicing and one dispatch contact.',
      },
      {
        q: 'How is this different from your general Rockville limo service page?',
        a: 'This page covers recurring corporate accounts for Rockville employers specifically; our general Rockville page covers weddings, events and one-off leisure or airport bookings.',
      },
      {
        q: 'How long is the ride from Rockville to DCA or Dulles?',
        a: 'Reagan National runs about 35–50 minutes and Dulles about 40–55 minutes, depending on I-270 and Beltway traffic.',
      },
      {
        q: 'Can you provide a Sprinter van for a visiting regulatory or research team?',
        a: 'Yes. Our Sprinter vans keep visiting delegations together for a full day of meetings across Rockville and the I-270 corridor.',
      },
      {
        q: 'Is Rockville corporate car service available 24/7?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning airport departures.',
      },
    ],
    related: [
      { label: 'Rockville Limo Service', to: '/rockville-limo-service' },
      { label: 'Rockville Wedding Limo Service', to: '/rockville-wedding-limo-service' },
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Gaithersburg Corporate Car Service', to: '/gaithersburg-corporate-car-service' },
      { label: 'Bethesda Corporate Car Service', to: '/bethesda-corporate-car-service' },
      { label: 'DCA to Rockville', to: '/dca-to-rockville' },
    ],
    schema: { areaServed: ['Rockville, MD', 'Montgomery County, MD'], serviceType: 'Corporate car service' },
  },
  // ---------------------------------------------------------------------
  // CORPORATE CAR SERVICE BY INDUSTRY VERTICAL
  // ---------------------------------------------------------------------
  {
    slug: 'healthcare-corporate-car-service',
    type: 'service',
    name: 'Healthcare & Medical Corporate Car Service',
    badge: 'Industry Car Service',
    h1: 'Healthcare & Medical Corporate Car Service in DC, MD & VA',
    metaTitle: 'Healthcare Corporate Car Service | DC, MD & VA',
    metaDescription:
      'Chauffeured car service for hospital executives, medical conferences and healthcare companies across DC, Maryland & Virginia. Call (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, MD & Northern VA' },
      { label: 'Specialty', value: 'Hospitals, NIH, conferences' },
      { label: 'Pricing', value: 'Flat rate or monthly account' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'The DC region\'s healthcare sector runs on a schedule that does not pause for rush hour: hospital executives moving between campuses, visiting physicians arriving for a single day of meetings, and the thousands of researchers and conference attendees who pass through the NIH campus and the region\'s medical conference circuit every year. DCA Limos runs corporate car service built around that schedule — flight-tracked airport transfers, Sprinter vans for conference delegations, and standing accounts for hospital systems and healthcare companies with recurring travel needs.',
      'Our <a href="/blog/medical-healthcare-conference-transportation-dc">medical and healthcare conference transportation guide</a> covers event-specific logistics in more depth; this page covers the standing corporate-account side of healthcare transportation.',
    ],
    highlights: [
      'Experience with NIH campus visitor registration and hospital-campus security procedures',
      'Flight-tracked airport transfers for visiting physicians, executives and conference speakers',
      'Sprinter vans for medical conference delegations and group travel',
      'Discreet, HIPAA-aware chauffeur conduct for travel involving patients or sensitive health information',
      'Corporate accounts with monthly invoicing for hospital systems and healthcare companies',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Hospital systems and healthcare executives',
        paragraphs: [
          'Hospital executives and administrators frequently move between campuses, satellite clinics and downtown meetings in a single day, and a standing sedan account removes the friction of booking each leg separately. Our chauffeurs are trained to keep conversations and any visible materials private, and to understand that a pickup involving a patient or a patient\'s family calls for a different pace and tone than a standard business trip.',
          'Several of our standing healthcare accounts cover recurring airport transfers for visiting specialists and board members, scheduled weeks or months in advance and billed on one monthly statement.',
        ],
      },
      {
        h2: 'Conferences, NIH travel and visiting researchers',
        paragraphs: [
          'The DC area hosts a steady calendar of medical and healthcare conferences, and the NIH campus alone generates year-round visiting-researcher and study-participant travel that requires advance gate registration. We coordinate that registration at booking and run Sprinter vans for conference delegations moving between hotels, the convention center and evening events.',
          'Pharmaceutical and health-sciences companies along the I-270 biotech corridor keep similar standing accounts for executive and visiting-scientist travel — see our <a href="/rockville-corporate-car-service">Rockville corporate car service page</a> for that specific corridor.',
        ],
      },
      {
        h2: 'Setting up a healthcare corporate account',
        paragraphs: [
          'Tell us your organization\'s typical travel pattern — recurring airport transfers, conference season spikes, hospital-to-hospital executive travel — and we will set up a monthly-invoiced account with a dedicated dispatch contact rather than individual trip approvals.',
          'Call (877) 609-1919 or request a quote online to set up a healthcare corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you handle visitor registration for NIH or hospital campus security?',
        a: 'Yes. We collect the identification and registration details your chauffeur needs in advance for gate-controlled medical campuses, including NIH.',
      },
      {
        q: 'Are your chauffeurs trained for discreet, patient-related travel?',
        a: 'Yes. Our chauffeurs are trained to maintain a private, professional conduct standard appropriate for travel involving patients, families or sensitive health-related business.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing for hospital systems?',
        a: 'Yes. We set up standing accounts with monthly invoicing and a dedicated dispatch contact for hospital systems, healthcare companies and medical practices.',
      },
      {
        q: 'Can you provide transportation for a medical conference delegation?',
        a: 'Yes. Our Sprinter vans regularly handle conference delegations moving between hotels, convention venues and evening events on one coordinated schedule.',
      },
      {
        q: 'Is healthcare corporate car service available 24/7, including overnight physician travel?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning and overnight transfers tied to on-call or emergency travel schedules.',
      },
    ],
    related: [
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Rockville Corporate Car Service', to: '/rockville-corporate-car-service' },
      { label: 'Bethesda Corporate Car Service', to: '/bethesda-corporate-car-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'Washington Convention Center Transportation', to: '/washington-convention-center-transportation' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
    ],
    schema: { areaServed: ['Washington DC', 'Maryland', 'Northern Virginia'], serviceType: 'Healthcare corporate car service' },
  },
  {
    slug: 'law-firm-corporate-car-service',
    type: 'service',
    name: 'Law Firm & Lobbying Firm Car Service',
    badge: 'Industry Car Service',
    h1: 'Law Firm & Lobbying Firm Car Service in Washington DC',
    metaTitle: 'Law Firm & Lobbying Firm Car Service | DC',
    metaDescription:
      'Chauffeured client transportation for DC law firms and lobbying firms: discreet sedans, confidential travel and standing corporate accounts. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'K Street, Capitol Hill, DC-wide' },
      { label: 'Specialty', value: 'Client & confidential travel' },
      { label: 'Pricing', value: 'Flat rate or monthly account' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'Washington\'s law firms and lobbying firms run on client perception as much as on legal or policy work, and the car that picks up a client, a witness or a visiting partner is part of that perception. DCA Limos runs discreet, flat-rate sedan and SUV service for K Street and Capitol Hill-area firms, with background-checked chauffeurs who understand that what gets discussed in the back seat stays there.',
      'Our <a href="/blog/law-firm-lobbying-firm-client-transportation-dc">law firm and lobbying firm client transportation guide</a> covers the planning side of this in more depth; this page is for firms setting up standing service.',
    ],
    highlights: [
      'Discreet, professional chauffeurs for client, witness and visiting-partner travel',
      'Confidential conduct standard — no unsolicited conversation, no visible attention to passengers or materials',
      'Capitol Hill meeting-day experience, including Senate and House office building drop-off logistics',
      'Sprinter vans for delegations, depositions requiring multiple travelers, and firm retreats',
      'Corporate accounts with monthly invoicing and a dedicated dispatch contact',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Client and confidential travel',
        paragraphs: [
          'A client arriving for a sensitive matter, a witness being moved for a deposition, or a visiting partner from another office all call for the same standard: a chauffeur who maintains strict professional distance, keeps the vehicle and any overheard conversation confidential, and arrives in a late-model sedan or SUV that reflects the firm\'s own standing. Our chauffeurs are background-checked and trained to this standard as a matter of course, not a special request.',
          'For matters that require it, we can also accommodate non-disclosure terms as part of a standing corporate relationship rather than a one-off verbal agreement.',
        ],
      },
      {
        h2: 'Capitol Hill and K Street logistics',
        paragraphs: [
          'Lobbying firms and government-affairs practices moving between K Street offices and Capitol Hill meetings deal with specific logistics most car services do not know well: which House and Senate office building entrances are open to visitors, where a vehicle can legally idle near the Capitol complex, and how security perimeters shift during floor votes or high-profile hearings. Our <a href="/blog/capitol-hill-meeting-day-car-service-guide">Capitol Hill meeting day guide</a> covers this specifically, and our chauffeurs stay current on the Hill\'s access rules.',
          'Firms coordinating a full day of Hill meetings for a client or partner delegation often use an hourly, as-directed booking so the same vehicle and chauffeur handle every stop rather than separate point-to-point trips.',
        ],
      },
      {
        h2: 'Setting up a firm account',
        paragraphs: [
          'Firms with recurring client transportation, visiting-partner travel or Hill-day logistics typically set up a standing account with monthly invoicing, so transportation does not require a separate approval for every client matter.',
          'Call (877) 609-1919 or request a quote online to set up a law firm or lobbying firm account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Are your chauffeurs trained for confidential client transportation?',
        a: 'Yes. Our chauffeurs maintain a strict professional-distance standard — no unsolicited conversation and no attention to passengers\' materials or discussions — as a default, not a special request.',
      },
      {
        q: 'Can you handle Capitol Hill meeting-day logistics?',
        a: 'Yes. Our chauffeurs stay current on House and Senate office building access rules and Capitol-complex idling restrictions, and we offer hourly as-directed booking for multi-stop Hill days.',
      },
      {
        q: 'Do you sign non-disclosure agreements for firm accounts?',
        a: 'We can accommodate confidentiality terms as part of a standing corporate account — raise this when setting up service and we will work through it with your firm.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing for law and lobbying firms?',
        a: 'Yes. We set up standing accounts with monthly invoicing and a dedicated dispatch contact so transportation does not need separate approval for every client matter.',
      },
      {
        q: 'Can you provide a Sprinter van for a delegation or firm retreat?',
        a: 'Yes. Our Sprinter vans handle delegations, multi-person depositions and firm retreat travel on one coordinated schedule.',
      },
    ],
    related: [
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Capitol Hill Limo Service', to: '/capitol-hill-limo-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Financial Services Corporate Car Service', to: '/financial-services-corporate-car-service' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
    ],
    schema: { areaServed: ['Washington DC', 'Capitol Hill, DC'], serviceType: 'Law firm and lobbying firm car service' },
  },
  {
    slug: 'government-federal-contractor-car-service',
    type: 'service',
    name: 'Government & Federal Contractor Car Service',
    badge: 'Industry Car Service',
    h1: 'Government & Federal Contractor Car Service in DC, MD & VA',
    metaTitle: 'Government & Federal Contractor Car Service | DC',
    metaDescription:
      'Chauffeured car service for federal agencies, contractors and visiting officials across DC, Maryland & Virginia. Secure, discreet, flat-rate. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, MD & Northern VA' },
      { label: 'Specialty', value: 'Federal agencies & contractors' },
      { label: 'Pricing', value: 'Flat rate or monthly account' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'The federal government and the contractor base that supports it drive a large share of ground-transportation demand in the DC region — visiting officials, agency staff traveling between headquarters and field offices, and contractors moving between secured facilities in the Pentagon, Tysons and Quantico corridors. DCA Limos runs flat-rate, flight-tracked sedan and Sprinter van service for that base, with chauffeurs experienced in the identification and gate-registration procedures secured federal sites require.',
      'Standing corporate accounts with monthly invoicing are common among our federal-contractor clients, since government travel policies generally favor a documented, auditable vendor relationship over variable personal-app receipts.',
    ],
    highlights: [
      'Experience with visitor-gate registration at secured federal and military installations',
      'Chauffeurs comfortable with government travel documentation and billing requirements',
      'Service across the Pentagon, Tysons, Crystal City and Quantico federal-contractor corridors',
      'Sprinter vans for agency delegations and contractor team travel',
      'Corporate accounts with monthly invoicing suited to government procurement and auditing needs',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Secured facilities and gate registration',
        paragraphs: [
          'Government and defense-contractor travel often involves a secured facility — the Pentagon, Marine Corps Base Quantico, or an agency headquarters with its own visitor-control process. We collect the identification and registration information your chauffeur needs at booking, the same process we use for other gate-controlled sites in our coverage area, so a visit does not stall at the checkpoint.',
          'Contractors based in the Tysons and Crystal City corridors, where a large share of the region\'s federal contracting workforce is concentrated, make up a steady share of this business alongside direct agency travel.',
        ],
      },
      {
        h2: 'Billing built for government and contractor procurement',
        paragraphs: [
          'Government travel policy and contractor expense procedures generally require documented, auditable vendor relationships rather than ad hoc personal-app bookings. A monthly-invoiced corporate account with itemized trips gives travel coordinators and finance teams exactly that paper trail, without reconciling individual rideshare receipts against a travel policy after the fact.',
          'We work with agencies and contractors to structure billing in whatever format their procurement or accounting process requires.',
        ],
      },
      {
        h2: 'Setting up a government or contractor account',
        paragraphs: [
          'Tell us which facilities you need access to, your typical travel volume, and your billing requirements, and we will set up an account that fits your agency\'s or firm\'s procurement process.',
          'Call (877) 609-1919 or request a quote online to set up a government or federal contractor account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you clear vehicles through secured federal or military facility gates?',
        a: 'Yes. We collect driver and passenger identification and registration details at booking so your chauffeur can clear a secured facility\'s gate without delay.',
      },
      {
        q: 'Do you work with federal contractors in the Pentagon, Tysons and Crystal City corridors?',
        a: 'Yes. A significant share of our corporate business comes from federal contractors based in exactly those corridors.',
      },
      {
        q: 'Can billing be structured to fit government procurement requirements?',
        a: 'Yes. We work with agencies and contractors to set up monthly-invoiced accounts with itemized trips that fit standard procurement and audit requirements.',
      },
      {
        q: 'Can you provide a Sprinter van for an agency delegation?',
        a: 'Yes. Our Sprinter vans handle agency and contractor team travel on one coordinated schedule.',
      },
      {
        q: 'Is this service available for early-morning or after-hours government travel?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning briefings and after-hours facility access.',
      },
    ],
    related: [
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Tysons Corporate Car Service', to: '/tysons-corporate-car-service' },
      { label: 'Marine Corps Base Quantico Transportation', to: '/quantico-marine-base-transportation' },
      { label: 'Arlington Corporate Car Service', to: '/arlington-corporate-car-service' },
      { label: 'Law Firm & Lobbying Firm Car Service', to: '/law-firm-corporate-car-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
    ],
    schema: { areaServed: ['Washington DC', 'Maryland', 'Northern Virginia'], serviceType: 'Government and federal contractor car service' },
  },
  {
    slug: 'financial-services-corporate-car-service',
    type: 'service',
    name: 'Financial Services Corporate Car Service',
    badge: 'Industry Car Service',
    h1: 'Financial Services Corporate Car Service in DC, MD & VA',
    metaTitle: 'Financial Services Corporate Car Service | DC',
    metaDescription:
      'Chauffeured car service for banks, investment firms and financial regulators across DC, Maryland & Virginia. Discreet, flat-rate, 24/7. (877) 609-1919.',
    stats: [
      { label: 'Coverage', value: 'DC, MD & Northern VA' },
      { label: 'Specialty', value: 'Banks, investors & regulators' },
      { label: 'Pricing', value: 'Flat rate or monthly account' },
      { label: 'Booking', value: '24 / 7' },
    ],
    intro: [
      'Washington is a financial-services hub in its own right — home to the Federal Reserve, the Treasury Department, the FDIC and a cluster of bank and investment-firm offices downtown, alongside the steady flow of visiting investors, auditors and regulators that comes with it. DCA Limos runs discreet, flat-rate sedan and SUV service for that base, with the same confidential conduct standard our law-firm and lobbying-firm clients rely on.',
      'Standing corporate accounts with monthly invoicing suit the compliance and expense-tracking standards most financial firms already operate under, with itemized, auditable trip records in place of variable personal-app receipts.',
    ],
    highlights: [
      'Discreet chauffeurs for investor, auditor and regulator travel',
      'Experience with downtown DC financial-district offices and federal financial-regulatory buildings',
      'Sprinter vans for investor roadshows, board delegations and shareholder events',
      'Corporate accounts with monthly invoicing and itemized, auditable trip records',
      'Flight-tracked airport transfers for visiting executives and board members',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Investor, auditor and regulator travel',
        paragraphs: [
          'Financial firms moving investors, auditors or regulatory examiners between a hotel, the office and a client site need the same confidentiality standard our legal clients expect — no unsolicited conversation, no attention to documents or calls made in the back seat, and a chauffeur who understands that the trip itself can be part of a sensitive process. We hold our financial-services clients to that same standard as a default.',
          'Visiting board members and executives for quarterly meetings or shareholder events are one of the more recurring patterns we see from this sector, and a standing sedan account removes the need to re-book transportation for each visit individually.',
        ],
      },
      {
        h2: 'Roadshows and investor meetings',
        paragraphs: [
          'Investor roadshows — a management team moving between a series of same-day investor meetings — are won or lost on timing, and a dedicated chauffeur who stays with the team for the full day, adjusting the schedule as meetings run long or short, is a different proposition than booking separate rideshares between each stop. Our hourly, as-directed service is built around exactly this kind of day.',
          'For larger delegations, a Sprinter van keeps a full team together between a downtown DC hotel, investor offices and an evening event on one schedule.',
        ],
      },
      {
        h2: 'Setting up a financial-services account',
        paragraphs: [
          'Tell us your firm\'s typical travel pattern — recurring board travel, roadshow season spikes, standing airport transfers for executives — and we will set up a monthly-invoiced account with itemized trip records that fit your compliance and expense-tracking needs.',
          'Call (877) 609-1919 or request a quote online to set up a financial services corporate account.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Are your chauffeurs trained for confidential investor or auditor travel?',
        a: 'Yes. We hold financial-services bookings to the same confidential conduct standard as our law-firm and lobbying-firm clients — no unsolicited conversation and no attention to passengers\' calls or documents.',
      },
      {
        q: 'Can you support an investor roadshow with multiple same-day stops?',
        a: 'Yes. Our hourly as-directed service keeps one chauffeur and vehicle with a management team for a full day of investor meetings, adjusting the schedule as needed.',
      },
      {
        q: 'Do you offer corporate accounts with monthly invoicing for financial firms?',
        a: 'Yes. We set up standing accounts with monthly invoicing and itemized, auditable trip records suited to most compliance and expense-tracking requirements.',
      },
      {
        q: 'Can you provide a Sprinter van for a board delegation or shareholder event?',
        a: 'Yes. Our Sprinter vans keep larger delegations together for board meetings, shareholder events and related travel.',
      },
      {
        q: 'Is this service available for early-morning market-open travel?',
        a: 'Yes — 24 hours a day, 365 days a year, including early-morning pickups timed to market hours.',
      },
    ],
    related: [
      { label: 'Corporate Car Service', to: '/limo/corporate-car-service' },
      { label: 'Law Firm & Lobbying Firm Car Service', to: '/law-firm-corporate-car-service' },
      { label: 'Government & Federal Contractor Car Service', to: '/government-federal-contractor-car-service' },
      { label: 'Washington DC Corporate Car Service', to: '/washington-dc-corporate-car-service' },
      { label: 'Arlington Corporate Car Service', to: '/arlington-corporate-car-service' },
      { label: 'DCA Airport Corporate Car Service', to: '/dca-airport-corporate-car-service' },
    ],
    schema: { areaServed: ['Washington DC', 'Maryland', 'Northern Virginia'], serviceType: 'Financial services corporate car service' },
  },
  // ---------------------------------------------------------------------
  // EVENT VENUES
  // ---------------------------------------------------------------------
  {
    slug: 'strathmore-music-center-transportation',
    type: 'event',
    name: 'The Music Center at Strathmore',
    badge: 'DC-Area Landmark',
    h1: 'Limo Service to The Music Center at Strathmore',
    metaTitle: 'Strathmore Music Center Transportation | MD',
    metaDescription:
      'Chauffeured car service to The Music Center at Strathmore in North Bethesda, MD — concerts, galas and BSO performances. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '18 mi · 35–50 minutes' },
      { label: 'To Dulles (IAD)', value: '25 mi · 40–55 minutes' },
      { label: 'To BWI', value: '36 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The Music Center at Strathmore, in North Bethesda, is one of the region\'s premier performing-arts venues — home to regular Baltimore Symphony Orchestra performances, the National Philharmonic, and a year-round calendar of concerts, galas and arts-education events, all a short walk from the Grosvenor-Strathmore Metro station. DCA Limos runs chauffeured sedans, SUVs and stretch limousines to Strathmore for concertgoers, gala guests and corporate groups hosting clients for an evening performance.',
      'Strathmore\'s parking garage fills quickly for popular performances and galas, and a chauffeur drop-off at the venue\'s main entrance, with pickup timed to the performance\'s known end time, avoids both the search for parking and the post-show exit crawl.',
    ],
    highlights: [
      'Door-to-door service to Strathmore\'s main entrance, avoiding the venue\'s garage crowding on busy nights',
      'Pickup timed to the performance\'s scheduled end, with flexibility if a show runs long',
      'Stretch limousines and premium sedans for gala nights and anniversary or date-night performances',
      'Sprinter vans for corporate groups hosting clients at a concert or gala',
      'Dinner-and-show routing with nearby North Bethesda and Pike & Rose restaurants',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Concerts, galas and BSO performances',
        paragraphs: [
          'Strathmore\'s regular Baltimore Symphony Orchestra performances and National Philharmonic concerts draw reliable weekend crowds, and the venue\'s annual gala and other benefit events add a calendar of black-tie evenings on top of the regular performance schedule. For a gala or a milestone-occasion concert night, a stretch limousine or luxury sedan adds to the evening in a way a self-parked car cannot.',
          'Our chauffeurs track each performance\'s scheduled run time and stage the return pickup accordingly, adjusting for an intermission that runs long or an encore that pushes the end time back.',
        ],
      },
      {
        h2: 'Corporate and client entertainment at Strathmore',
        paragraphs: [
          'Strathmore is a regular venue for client-entertainment evenings among Bethesda and North Bethesda-based companies, and a Sprinter van or multiple sedans let a corporate host move a group from dinner to the concert hall without each guest driving and parking separately. Pairing the evening with dinner at one of the Pike & Rose restaurants nearby is a common routing we help coordinate.',
          'Call (877) 609-1919 or request a quote online to arrange transportation for your Strathmore performance, gala or client event.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you time pickup to when the Strathmore performance actually ends?',
        a: 'Yes. We track each performance\'s scheduled run time and adjust the return pickup if an intermission or encore runs the show longer than planned.',
      },
      {
        q: 'Is parking difficult at Strathmore?',
        a: 'The venue\'s garage fills quickly for popular concerts and gala nights. A chauffeur drop-off at the main entrance avoids both the search for parking and the post-show exit traffic.',
      },
      {
        q: 'Can you provide a stretch limousine for a gala or anniversary night at Strathmore?',
        a: 'Yes. Stretch limousines and premium sedans are both regularly booked for Strathmore gala nights and milestone-occasion concerts.',
      },
      {
        q: 'Do you handle corporate client-entertainment groups at Strathmore?',
        a: 'Yes. Sprinter vans and multiple coordinated sedans are common for corporate groups hosting clients at a Strathmore concert or gala.',
      },
      {
        q: 'How far is Strathmore from Reagan National Airport?',
        a: 'About 18 miles, typically 35 to 50 minutes depending on traffic.',
      },
    ],
    related: [
      { label: 'Bethesda Limo Service', to: '/bethesda-limo-service' },
      { label: 'North Bethesda Limo Service', to: '/north-bethesda-limo-service' },
      { label: 'Rockville Limo Service', to: '/rockville-limo-service' },
      { label: 'Glenstone Museum Transportation', to: '/glenstone-museum-transportation' },
      { label: 'Maryland Concert Transportation', to: '/maryland-concert-transportation' },
      { label: 'Stretch Limousine Rental', to: '/stretch-limousine-rental' },
    ],
    schema: { areaServed: ['North Bethesda, MD', 'Montgomery County, MD'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'warner-theatre-transportation',
    type: 'event',
    name: 'Warner Theatre',
    badge: 'DC-Area Landmark',
    h1: 'Limo Service to the Warner Theatre, Washington DC',
    metaTitle: 'Warner Theatre Transportation | Washington DC',
    metaDescription:
      'Chauffeured car service to the historic Warner Theatre in downtown DC — concerts, comedy and Broadway touring shows. Call (877) 609-1919.',
    stats: [
      { label: 'To Reagan (DCA)', value: '4 mi · 12–20 minutes' },
      { label: 'To Dulles (IAD)', value: '27 mi · 40–55 minutes' },
      { label: 'To BWI', value: '38 mi · 50–65 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      'The historic Warner Theatre on 13th Street NW, blocks from the White House and Metro Center, has hosted touring Broadway productions, comedy specials and concerts in one of downtown DC\'s most ornate surviving movie-palace interiors since the 1920s. DCA Limos runs chauffeured sedans, SUVs and limousines to the Warner for show nights, pairing easily with dinner at one of Penn Quarter\'s nearby restaurants.',
      'Street parking near the Warner is limited and metered even in the evening on some blocks, and the downtown garages nearest the theater fill fast on sold-out nights — a drop-off at the marquee and a pickup timed to the curtain call sidesteps both problems.',
    ],
    highlights: [
      'Door-to-door service to the Warner Theatre\'s 13th Street marquee entrance',
      'Pickup timed to the show\'s curtain call, with flexibility for a longer-than-scheduled performance',
      'Easy pairing with dinner at Penn Quarter and Metro Center-area restaurants before the show',
      'Stretch limousines for date nights, anniversaries and milestone celebrations',
      'Sprinter vans for larger groups attending a touring show or concert together',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'Touring shows, comedy and concerts',
        paragraphs: [
          'The Warner\'s calendar mixes touring Broadway productions, stand-up comedy specials and concerts, each drawing a different crowd and a different sense of how the evening should go — a comedy show calls for a quick, casual drop-off, while a touring musical or a milestone-occasion concert is often paired with dinner and a more deliberate arrival. We adjust the vehicle and the evening\'s pacing to match.',
          'Our chauffeurs track the specific show\'s typical run time and stage pickup accordingly, since an encore or a longer-than-advertised set can push the actual end time later than the printed schedule.',
        ],
      },
      {
        h2: 'Why downtown parking makes this an easy call',
        paragraphs: [
          'Downtown DC\'s evening parking near Metro Center and Penn Quarter is tighter than visitors often expect, particularly on a sold-out Warner night when several nearby venues and restaurants are drawing the same crowd for the same few parking structures. A chauffeur handles that entirely — dropping you at the marquee and either waiting nearby or returning at a confirmed time, so the evening is not bookended by two separate parking searches.',
          'Call (877) 609-1919 or request a quote online to arrange transportation for your next Warner Theatre show.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'Can you drop us off right at the Warner Theatre entrance?',
        a: 'Yes. We drop off and pick up at the theater\'s 13th Street marquee entrance, avoiding the search for downtown parking.',
      },
      {
        q: 'Do you time pickup to when the show actually ends?',
        a: 'Yes. We track each show\'s typical run time and adjust pickup if an encore or longer set pushes the end time past the printed schedule.',
      },
      {
        q: 'Can you arrange dinner and a show in one evening?',
        a: 'Yes. We regularly route an evening through a Penn Quarter or Metro Center-area dinner reservation before a Warner Theatre show.',
      },
      {
        q: 'Is a limousine appropriate for a date night or anniversary at the Warner?',
        a: 'Yes. Stretch limousines and premium sedans are both popular choices for a Warner Theatre date night or milestone celebration.',
      },
      {
        q: 'How far is the Warner Theatre from Reagan National Airport?',
        a: 'About 4 miles, typically 12 to 20 minutes depending on downtown traffic.',
      },
    ],
    related: [
      { label: 'Penn Quarter Limo Service', to: '/penn-quarter-limo-service' },
      { label: 'Washington DC Anniversary Limo', to: '/washington-dc-anniversary-limo' },
      { label: 'Washington DC Hourly Chauffeur Service', to: '/washington-dc-hourly-chauffeur-service' },
      { label: 'Maryland Concert Transportation', to: '/maryland-concert-transportation' },
      { label: 'Stretch Limousine Rental', to: '/stretch-limousine-rental' },
      { label: 'DCA to Washington DC', to: '/dca-to-washington-dc' },
    ],
    schema: { areaServed: ['Washington, DC'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'baltimore-inner-harbor-transportation',
    type: 'event',
    name: "Baltimore's Inner Harbor & National Aquarium",
    badge: 'DC-Area Landmark',
    h1: "Limo Service to Baltimore's Inner Harbor & National Aquarium",
    metaTitle: 'Baltimore Inner Harbor Transportation | DCA Limos',
    metaDescription:
      "Chauffeured car service to Baltimore's Inner Harbor and the National Aquarium from DC, Maryland & Virginia. Flat rate, 24/7. Call (877) 609-1919.",
    stats: [
      { label: 'To Reagan (DCA)', value: '40 mi · 55–75 minutes' },
      { label: 'To BWI', value: '10 mi · 15–25 minutes' },
      { label: 'To Washington DC', value: '38 mi · 50–70 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      "Baltimore's Inner Harbor — the National Aquarium, the Maryland Science Center, the harbor-front restaurants and shops, and the water-taxi network connecting them — is one of the most popular day-trip destinations from DC and a natural stop for travelers routing through BWI. DCA Limos runs chauffeured sedans, SUVs and Sprinter vans to the Inner Harbor from DC, Maryland and Northern Virginia, and we also handle the short BWI-to-Inner-Harbor transfer for travelers combining a flight with a Baltimore day.",
      "Downtown Baltimore's harbor-front garages are plentiful but can run $20–$30 for a full day, on top of whatever time is spent circling for the closest one on a busy weekend — costs and hassle a chauffeured drop-off and pickup removes entirely.",
    ],
    highlights: [
      'Direct service to the National Aquarium, Maryland Science Center and Inner Harbor waterfront',
      'The closest major airport is BWI, just 10 miles and 15–25 minutes away — a natural add-on for a BWI arrival or departure',
      'Sprinter vans for family groups, school trips and corporate outings visiting the Aquarium',
      'Flat-rate pricing with no day-long parking garage fees to budget around',
      'Easy pairing with an Orioles game at Camden Yards or a Ravens game at M&T Bank Stadium, both a short walk from the harbor',
      'Mercedes E-Class and BMW 7 Series sedans, Navigator and Suburban SUVs, 14-passenger Sprinters',
    ],
    sections: [
      {
        h2: 'A natural pairing with BWI',
        paragraphs: [
          "Because BWI sits just 10 miles from the Inner Harbor, travelers flying in or out of BWI commonly add a Baltimore day to the trip — a morning at the National Aquarium before an afternoon flight, or a harbor dinner after a late-afternoon landing. We run that short transfer regularly and can hold luggage in the vehicle for a same-day round trip back to the airport.",
          "For visitors based in DC, Maryland or Northern Virginia making the full trip up, the drive runs 50 minutes to just over an hour depending on starting point and I-95 traffic, which we build into the pickup schedule.",
        ],
      },
      {
        h2: 'Families, school groups and corporate outings',
        paragraphs: [
          "The National Aquarium draws large family groups and school field trips, and a Sprinter van keeps everyone together for the drive up and the return trip, which matters more than usual with young kids and the gear that comes with them. Corporate teams also use the Inner Harbor for an offsite day trip or team outing, often pairing the Aquarium or Science Center with lunch at one of the harbor-front restaurants.",
          "Call (877) 609-1919 or request a quote online to arrange your Inner Harbor transportation, whether it's a family day trip, a school group or a corporate outing.",
        ],
      },
      {
        h2: 'Pairing with a Camden Yards or M&T Bank Stadium game',
        paragraphs: [
          "Both Oriole Park at Camden Yards and M&T Bank Stadium sit within walking distance of the Inner Harbor, making a harbor afternoon followed by an Orioles or Ravens game a common full-day itinerary. See our <a href=\"/oriole-park-camden-yards-transportation\">Camden Yards transportation page</a> and <a href=\"/mt-bank-stadium-transportation\">M&T Bank Stadium transportation page</a> for game-day specifics.",
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      {
        q: 'How far is the Inner Harbor from BWI Airport?',
        a: 'About 10 miles, typically 15 to 25 minutes — a short, easy add-on for a BWI arrival or departure.',
      },
      {
        q: 'Can you hold our luggage for a same-day round trip between BWI and the Inner Harbor?',
        a: 'Yes. We regularly run same-day BWI-to-Inner-Harbor round trips and can accommodate luggage in the vehicle for the Aquarium visit.',
      },
      {
        q: 'Do you provide Sprinter vans for school groups or family trips to the National Aquarium?',
        a: 'Yes. Our Sprinter vans keep larger family and school groups together for the drive to and from the Inner Harbor.',
      },
      {
        q: 'How long is the drive from Washington DC to the Inner Harbor?',
        a: 'About 50 to 70 minutes depending on your starting point in the DC area and I-95 traffic.',
      },
      {
        q: 'Can you pair an Inner Harbor visit with an Orioles or Ravens game?',
        a: 'Yes. Camden Yards and M&T Bank Stadium are both a short walk from the harbor, and we regularly route a harbor afternoon into a game-day evening.',
      },
    ],
    related: [
      { label: 'Oriole Park at Camden Yards Transportation', to: '/oriole-park-camden-yards-transportation' },
      { label: 'M&T Bank Stadium Transportation', to: '/mt-bank-stadium-transportation' },
      { label: 'CFG Bank Arena Transportation', to: '/cfg-bank-arena-transportation' },
      { label: 'BWI to Washington DC', to: '/bwi-to-washington-dc' },
      { label: 'Maryland State Fair Transportation', to: '/maryland-state-fair-transportation' },
      { label: 'Pimlico Race Course Transportation', to: '/pimlico-race-course-transportation' },
    ],
    schema: { areaServed: ['Baltimore, MD'], serviceType: 'Limousine and car service' },
  },
];
