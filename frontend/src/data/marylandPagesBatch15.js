// Batch 15 (2026-11-02): 3 new pages — checked against all 274 existing
// slugs across landingPages.js, marylandPages.js + batches 3-14,
// routePages.js + batches 2-3, eventPages.js, and guides.js. Children's
// National Hospital, The Wharf, and NIH Bethesda had zero prior dedicated
// pages (the existing medical/institution pages cover Howard University
// Hospital, Fort Belvoir, Fort Meade, Fort Washington, Pentagon City, and
// Joint Base Andrews, but not these three). Same shape as the
// marylandPagesBatch9-14.js entries (type: 'event', rendered by
// EventPage.jsx — confirmed via its LocalBusiness + Service + FAQPage
// schema, same template Howard University and Joint Base Andrews use).
const VEHICLES = [
  { name: 'Mercedes-Benz E-Class', cls: 'Business sedan', seats: 3, best: 'solo travelers and couples' },
  { name: 'BMW 7 Series', cls: 'First-class sedan', seats: 3, best: 'executive and VIP travel' },
  { name: 'Lincoln Navigator', cls: 'Premium SUV', seats: 6, best: 'families and small groups with luggage' },
  { name: 'Chevrolet Suburban', cls: 'Luxury SUV', seats: 6, best: 'airport runs with extra luggage' },
  { name: 'Mercedes Sprinter van', cls: 'Executive van', seats: 14, best: 'wedding parties, corporate teams and groups' },
  { name: 'Stretch limousine', cls: 'Limousine', seats: 8, best: 'weddings, prom and special occasions' },
];

export const MARYLAND_BATCH15 = [
  {
    slug: 'childrens-national-hospital-transportation',
    type: 'event',
    name: "Children's National Hospital",
    badge: 'DC-Area Landmark',
    h1: "Car Service for Children's National Hospital",
    metaTitle: "Children's National Hospital Transportation | DC",
    metaDescription:
      "Chauffeured car service to and from Children's National Hospital in Washington DC — patient families, visiting specialists and airport transfers daily.",
    stats: [
      { label: 'To Reagan (DCA)', value: '6 mi · 20–30 minutes' },
      { label: 'To Dulles (IAD)', value: '28 mi · 40–55 minutes' },
      { label: 'To BWI', value: '35 mi · 45–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      "Children's National Hospital sits in the Michigan Park / Brookland area of Northwest DC, near Catholic University, and draws families from across the region — and often from out of state — for pediatric specialty care that isn't available everywhere. DCA Limos drives patient families, visiting specialists, and hospital staff to and from the main campus daily, with chauffeurs who understand that a hospital trip is rarely a routine ride: schedules shift with appointment times, families are often stressed or exhausted, and a calm, on-time pickup matters more here than almost anywhere else we go.",
      'For families flying in from out of town for specialist appointments or an extended inpatient stay, we coordinate airport transfers alongside hospital pickups so the same driver and vehicle cover the whole visit, not just one leg of it.',
    ],
    highlights: [
      'Patient family transportation for appointments, admissions and discharge',
      'Airport transfers for out-of-town families flying in for specialist care',
      'Pickups for visiting physicians, specialists and hospital staff',
      'Flexible scheduling around appointment times that can shift same-day',
      'Quiet, unhurried service for families traveling during a stressful time',
      'Sedans, Navigator and Suburban SUVs, and Sprinter vans for larger family groups',
    ],
    sections: [
      {
        h2: 'Appointments, admissions and discharge',
        paragraphs: [
          "Specialist appointments at Children's National often run on a schedule that shifts same-day — a visit that runs long, a test that gets added — and we build flexibility into pickup windows rather than treating a hospital trip like a fixed-time airport run. Discharge day transportation gets the same flexibility, since discharge timing is set by the care team, not the clock.",
          'Families managing an inpatient stay often need repeat trips over days or weeks rather than a single round trip, and booking with the same car service for each leg means less to coordinate during an already demanding stretch.',
        ],
      },
      {
        h2: 'Out-of-town families flying in for specialist care',
        paragraphs: [
          "Because Children's National draws patients from well beyond the DC area for certain specialties, a meaningful share of our bookings here start with an airport pickup — tracked against the family's actual flight, not a printed schedule — followed by a direct transfer to the hospital or a nearby hotel. Reagan National, about 20 to 30 minutes away, is typically the closest of the three regional airports for this kind of trip.",
          'Call (877) 609-1919 or request a free quote online to coordinate an airport-to-hospital transfer, especially for a family unfamiliar with DC traffic and unsure how much time to allow.',
        ],
      },
      {
        h2: 'Visiting physicians, specialists and staff',
        paragraphs: [
          "Children's National also draws visiting specialists and consulting physicians from outside the immediate area for conferences, case consultations and training, and we handle that professional travel with the same reliability as our standard corporate transportation — flat-rate quotes, flight tracking, and a chauffeur who gets you to the campus on time for a fixed meeting or surgical schedule.",
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      { q: "Can you handle flexible pickup times for appointments that run long?", a: "Yes. We build flexibility into hospital pickup windows rather than treating them like a fixed-time trip, since appointment and discharge timing is set by the care team, not the clock." },
      { q: 'Do you coordinate airport transfers for out-of-town families?', a: "Yes. We track your actual flight and drive you directly from the airport to the hospital or a nearby hotel — Reagan National is typically the closest of the three regional airports, about 20 to 30 minutes from campus." },
      { q: 'Can you book multiple trips over an extended hospital stay?', a: 'Yes. Families managing an inpatient stay can book repeat trips with the same car service rather than re-arranging transportation for each individual visit.' },
      { q: "Do you serve visiting physicians and hospital staff, not just patient families?", a: 'Yes. We regularly drive visiting specialists and consulting physicians to and from the campus for conferences, case consultations and training.' },
      { q: "What vehicle works best for a family traveling with young children?", a: "A sedan or SUV suits most families comfortably; a Sprinter van is available for larger extended families traveling together for an appointment or an inpatient stay." },
    ],
    related: [
      { label: 'Howard University Transportation', to: '/howard-university-transportation' },
      { label: 'Washington, DC Airport Car Service', to: '/washington-dc-airport-car-service' },
      { label: 'DCA Airport Limo', to: '/limo/dca-airport-limo' },
      { label: 'Corporate Car Service, Washington DC', to: '/corporate-car-service-washington-dc' },
      { label: 'Hospital-to-Home Newborn Transportation', to: '/blog/hospital-to-home-newborn-homecoming-transportation' },
      { label: 'Book your ride', to: '/booking' },
    ],
    schema: { areaServed: ['Washington, DC', 'Brookland, Washington DC'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'the-wharf-dc-transportation',
    type: 'event',
    name: 'The Wharf DC',
    badge: 'DC-Area Landmark',
    h1: 'Car Service to The Wharf, DC',
    metaTitle: 'The Wharf DC Transportation | DCA Limos',
    metaDescription:
      'Chauffeured car service to The Wharf in Southwest DC — waterfront dining, Union Stage, The Anthem and Pier 4, without the parking garage search. Call us.',
    stats: [
      { label: 'To Reagan (DCA)', value: '3 mi · 10–15 minutes' },
      { label: 'To Dulles (IAD)', value: '28 mi · 40–55 minutes' },
      { label: 'To BWI', value: '35 mi · 45–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      "The Wharf is Southwest DC's newest waterfront district, a roughly mile-long stretch along the Washington Channel built up over the last several years into one of the city's busiest dining, nightlife and live-music destinations — anchored by The Anthem and Union Stage for concerts, Pier 4 and the marina for the waterfront itself, and a dense run of restaurants that fills up fast on weekend evenings. It's also one of the closest DC destinations to Reagan National, a short hop across the river from the airport.",
      "Because The Wharf grew up fast on former industrial land, its parking infrastructure hasn't fully caught up with demand on the busiest nights — a concert at The Anthem, a warm-weather Saturday, or a holiday season evening can fill the district's garages well before most visitors arrive.",
    ],
    highlights: [
      'Direct drop-off near the Wharf’s restaurant row, marina and waterfront promenade',
      'Concert night transportation for The Anthem and Union Stage',
      'One of the shortest DCA-to-DC rides in the region — about 10 to 15 minutes',
      'Flat-rate evening and group bookings for dinner, drinks and a show in one trip',
      'Hourly as-directed service for a multi-stop Wharf evening',
      'Sedans, SUVs and Sprinter vans for groups and company outings',
    ],
    sections: [
      {
        h2: "The district's parking hasn't caught up with its popularity",
        paragraphs: [
          "The Wharf's garages are sized for an ordinary evening of dinner and waterfront strolling, not necessarily for that same crowd plus a sold-out show at The Anthem or Union Stage happening at the same time. On the busiest nights, visitors who assumed parking would be as easy as it looks on a map end up circling the district's access roads instead of enjoying the evening.",
          "A chauffeured drop-off right at the restaurant, pier or venue entrance removes that search entirely, which matters most exactly on the nights it would otherwise cost you the most time.",
        ],
      },
      {
        h2: 'One of the closest DC destinations to DCA',
        paragraphs: [
          "The Wharf's Southwest DC location puts it among the shortest rides from Reagan National of any major DC destination — typically 10 to 15 minutes depending on traffic, which makes it a natural first or last stop for visitors flying in or out of DCA who want a waterfront dinner without a long cross-town drive.",
        ],
      },
      {
        h2: 'A concert, dinner and a walk on the pier, in one trip',
        paragraphs: [
          "Most Wharf evenings aren't just one stop — dinner at one of the district's restaurants, a show at The Anthem or Union Stage, and a walk along Pier 4 or the marina often happen in the same visit. Hourly, as-directed booking covers all of it as one reservation, with the vehicle staying with you between stops rather than running on a single fixed pickup time.",
          'Call (877) 609-1919 or request a free quote online for a Wharf evening, a concert night, or a company outing along the waterfront.',
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      { q: 'Is parking difficult at The Wharf?', a: "It can be on busy nights — a concert at The Anthem or Union Stage, a warm-weather weekend, or a holiday evening can fill the district's garages before most visitors arrive. A chauffeured drop-off avoids the search entirely." },
      { q: 'How far is The Wharf from Reagan National Airport?', a: "About 3 miles, typically 10 to 15 minutes — one of the shortest DCA-to-DC rides of any major destination in the city." },
      { q: 'Can you drop us right at a restaurant or at Pier 4?', a: "Yes — tell us your specific destination when you book, whether that's a restaurant along the Wharf's main strip, the marina, or one of the piers." },
      { q: 'Do you serve concerts at The Anthem and Union Stage?', a: 'Yes. We plan drop-off and pickup around show times, including the post-show rush when the whole venue empties onto the same streets at once.' },
      { q: 'Can we combine dinner, a show and a walk on the waterfront in one booking?', a: 'Yes — hourly, as-directed service covers a multi-stop Wharf evening as one reservation, with the vehicle staying with you between stops.' },
    ],
    related: [
      { label: 'Navy Yard Limo Service', to: '/navy-yard-limo-service' },
      { label: 'DC United at Audi Field Transportation Guide', to: '/blog/dc-united-audi-field-game-day-transportation' },
      { label: 'Washington, DC Airport Car Service', to: '/washington-dc-airport-car-service' },
      { label: 'DCA Airport Limo', to: '/limo/dca-airport-limo' },
      { label: 'Corporate Car Service, Washington DC', to: '/corporate-car-service-washington-dc' },
      { label: 'Book your ride', to: '/booking' },
    ],
    schema: { areaServed: ['Washington, DC', 'Southwest Waterfront, Washington DC'], serviceType: 'Limousine and car service' },
  },
  {
    slug: 'nih-bethesda-transportation',
    type: 'event',
    name: 'NIH Bethesda',
    badge: 'DC-Area Landmark',
    h1: 'Car Service for the NIH Bethesda Campus',
    metaTitle: 'NIH Bethesda Transportation | DCA Limos',
    metaDescription:
      'Chauffeured car service to the National Institutes of Health research campus in Bethesda, MD — researchers, conference visitors, patients and families.',
    stats: [
      { label: 'To Reagan (DCA)', value: '12 mi · 25–35 minutes' },
      { label: 'To Dulles (IAD)', value: '22 mi · 35–50 minutes' },
      { label: 'To BWI', value: '35 mi · 45–60 minutes' },
      { label: 'Service', value: '24 / 7 · 365' },
    ],
    intro: [
      "The National Institutes of Health's main campus in Bethesda is one of the largest biomedical research centers in the world, drawing visiting researchers, conference attendees, and patients and families enrolled in NIH Clinical Center studies from across the country and internationally. DCA Limos drives all three groups to and from the campus, with chauffeurs familiar with the Rockville Pike corridor's security checkpoints and the campus's own internal road layout.",
      "For international visitors flying in for a conference or a research fellowship, Dulles — about 22 miles and 35 to 50 minutes away — is often the more convenient airport of the three, given its larger international gate capacity, though we track and serve DCA and BWI arrivals just as readily.",
    ],
    highlights: [
      'Airport transfers for visiting researchers and international conference attendees',
      'Transportation for patients and families enrolled in NIH Clinical Center studies',
      'Familiarity with campus security checkpoints and internal road access',
      'Flexible scheduling for multi-day conferences and extended research visits',
      'Corporate-style flat-rate booking for grant site visits and institutional travel',
      'Sedans, SUVs and Sprinter vans for research teams and larger delegations',
    ],
    sections: [
      {
        h2: 'Visiting researchers and conference attendees',
        paragraphs: [
          "NIH's Bethesda campus hosts a steady calendar of scientific conferences, study sections and training programs that bring visiting researchers from across the country and overseas, and we handle that travel the same way we handle corporate business travel — flat-rate quotes, flight tracking, and a chauffeur who knows to allow extra time for the campus's security checkpoint on Rockville Pike before a fixed meeting time.",
          "Multi-day conferences often mean repeat trips between a nearby hotel and the campus over several days, which we book as a coordinated series rather than treating each day as a separate, unrelated reservation.",
        ],
      },
      {
        h2: 'Patients and families at the NIH Clinical Center',
        paragraphs: [
          "The NIH Clinical Center enrolls patients in research studies from well beyond the local area, and families traveling for an extended study period benefit from the same flexible, unhurried approach we bring to any medical transportation — appointment and procedure schedules that shift, and a driver who builds that uncertainty into the plan rather than treating it like a fixed-time trip.",
          'Call (877) 609-1919 or request a free quote online to coordinate an airport-to-campus transfer for a study visit, especially for a family unfamiliar with the DC area.',
        ],
      },
      {
        h2: 'Getting through campus security without losing time',
        paragraphs: [
          "The NIH campus maintains its own security checkpoint, and a chauffeur familiar with the process — what to expect, and how much time it typically adds — keeps that step from becoming a surprise that threatens a tight meeting or appointment schedule. We factor the checkpoint into your pickup and travel-time planning automatically.",
        ],
      },
    ],
    vehicles: [...VEHICLES],
    faqs: [
      { q: 'Do you serve international researchers flying in for an NIH conference?', a: 'Yes. We track international arrivals at Dulles, DCA or BWI and drive directly to the NIH campus, with Dulles typically the more convenient of the three given its larger international gate capacity.' },
      { q: 'Can you handle transportation for NIH Clinical Center patients and families?', a: 'Yes. We build flexibility into pickup windows for study-related appointments and procedures that can shift, the same approach we use for any hospital or medical-campus transportation.' },
      { q: 'Does the NIH campus security checkpoint add travel time?', a: "Yes, and we factor it into your pickup and arrival planning automatically so it doesn't put a fixed meeting or appointment time at risk." },
      { q: 'Can you book a coordinated series of trips for a multi-day conference?', a: 'Yes. We book repeat trips between a nearby hotel and the campus as one coordinated plan rather than separate, unrelated reservations.' },
      { q: 'What vehicle works best for a visiting research delegation?', a: 'A sedan or SUV suits an individual researcher or small group; a Sprinter van comfortably covers a larger delegation or research team traveling together.' },
    ],
    related: [
      { label: 'Bethesda Corporate Car Service', to: '/bethesda-corporate-car-service' },
      { label: 'Bethesda & Chevy Chase Corporate Transportation', to: '/bethesda-chevy-chase-corporate-transportation' },
      { label: 'Corporate Car Service, Washington DC', to: '/corporate-car-service-washington-dc' },
      { label: 'Dulles Airport Limo', to: '/dulles-airport-limo' },
      { label: "Children's National Hospital Transportation", to: '/childrens-national-hospital-transportation' },
      { label: 'Book your ride', to: '/booking' },
    ],
    schema: { areaServed: ['Bethesda, MD', 'Montgomery County, MD'], serviceType: 'Limousine and car service' },
  },
];
