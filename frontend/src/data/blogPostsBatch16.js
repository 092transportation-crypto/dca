// Batch 16 (2026-11-02): 5 new posts — checked against all 167 existing
// posts (162 original + batch15) first. Kennedy Center, DC United/Audi
// Field, and Wolf Trap have no dedicated transportation guide yet (Nationals
// Park/Capital One Arena and the Smithsonian/National Mall do, but these
// three distinct venues don't). Global Entry is a genuinely different topic
// from the existing TSA PreCheck/security-wait-time post — Global Entry is a
// CBP re-entry program for international arrivals, not a departure-security
// program, and DCA has very limited international service so this is framed
// around when it actually applies. The terminal post is a practical pickup-
// logistics angle no existing post covers directly. Same shape as
// blogPosts.js (and BATCH2-15); each ships with its own 5 FAQs.
export const BLOG_POSTS_BATCH16 = [
  {
    slug: 'kennedy-center-evening-transportation-guide',
    relatedRoutes: ['dca-to-washington-dc', 'dca-to-arlington', 'georgetown-limo-service'],
    title: 'The Kennedy Center: An Evening Transportation Guide',
    metaTitle: 'Kennedy Center Transportation Guide | DCA Limos',
    metaDesc:
      "Getting to the Kennedy Center without the parking garage scramble — what the venue's Potomac-side location means for your evening. Call (877) 609-1919.",
    excerpt:
      "The Kennedy Center sits right on the Potomac, cut off from the nearest Metro by a half-mile walk and served by a single access road that backs up fast before curtain. Here's how to actually plan around it.",
    image: '/images/blog/landmark-capitol-1.webp',
    author: 'Sarah Williams',
    authorBio: 'DC-area travel writer covering airports, ground transportation, and business travel for over a decade.',
    date: 'November 2, 2026',
    readTime: '7 min read',
    category: 'Local Guides',
    content: `
      <p class="lead">The John F. Kennedy Center for the Performing Arts sits directly on the Potomac waterfront in Foggy Bottom, a location that gives it some of the best river views of any DC venue and some of the trickiest access logistics. There's no Metro station at the door, the parking garage fills fast before a sold-out show, and the single main access road off Rock Creek Parkway backs up every night curtain time approaches. None of that is a reason to avoid an evening there — it's just worth planning around.</p>

      <h2>Why There's No Metro Stop at the Door</h2>
      <p>The nearest Metro station, Foggy Bottom-GWU on the Blue, Orange, and Silver lines, sits roughly half a mile from the Kennedy Center's entrance — an easy walk in good weather, a genuinely unpleasant one in a January wind off the river or a July evening in formal clothes. The Kennedy Center does run its own free shuttle between the Metro station and the venue, but it adds a wait and a transfer to what's already a timed evening, especially right before curtain when everyone needs it at once.</p>

      <h2>The Parking Garage Fills Fast on Popular Nights</h2>
      <p>The Kennedy Center's own underground garage is convenient when it has space, but a sold-out opera, a popular touring Broadway show, or a National Symphony Orchestra season opener can fill it well before curtain, pushing late arrivals into a search for street parking in Foggy Bottom that eats into the time you'd rather spend at intermission drinks or just finding your seat unhurried.</p>

      <h2>Rock Creek Parkway Is the Venue's Single Bottleneck</h2>
      <p>Nearly everyone driving to the Kennedy Center funnels onto the same stretch of Rock Creek Parkway or the connecting ramps near the Watergate complex, and that road carries regular commuter and tourist traffic on top of the venue's own curtain-time surge. A trip that looks like fifteen minutes on a map can run considerably longer in the thirty minutes before an 8 p.m. curtain, when everyone attending the same show is converging on the same short stretch of road at once.</p>

      <h2>A Drop-off Skips Both Problems at Once</h2>
      <p>A chauffeured drop-off at the Kennedy Center's own entrance avoids the garage search and the half-mile Metro walk in one move — your chauffeur handles the Rock Creek Parkway approach and lets you out right at the door, then either waits nearby or returns at a coordinated time for the trip home. For a show with a fixed curtain time, that removes the one variable most likely to make you late: finding somewhere to put the car.</p>

      <h2>Making an Evening of It, Not Just a Show</h2>
      <p>Many Kennedy Center evenings include dinner beforehand, either at the venue's own restaurant or a short ride away in Foggy Bottom or Georgetown, just across the water. Hourly, as-directed booking covers dinner, the show, and the ride home as one reservation, with the vehicle staying with you between stops rather than running on a single fixed pickup time — useful when a dinner reservation and an 8 p.m. curtain both need to happen on the same tight evening.</p>

      <h2>Groups and Date Nights Alike</h2>
      <p>A sedan comfortably covers a couple heading to the opera or ballet; a larger party celebrating a birthday or anniversary with a full Kennedy Center evening often steps up to an SUV, and a group attending together — a company outing, a family celebrating a milestone — can use a Sprinter van to arrive and leave together instead of coordinating several cars through the same bottleneck road.</p>

      <h2>Booking Your Kennedy Center Evening</h2>
      <p>Give us your curtain time and we'll plan the pickup with enough buffer for Rock Creek Parkway's pre-show traffic, and a return time for after the show. Call (877) 609-1919 or <a href="/booking">book online</a> for Kennedy Center transportation anywhere across Washington DC, Maryland, and Northern Virginia.</p>
    `,
    faqs: [
      { q: 'Is there a Metro stop at the Kennedy Center?', a: 'No — the nearest station is Foggy Bottom-GWU, about half a mile away. The Kennedy Center runs its own free shuttle from that station, but a direct drop-off at the venue skips the walk and the shuttle wait entirely.' },
      { q: 'Does the Kennedy Center parking garage fill up?', a: 'Yes, especially for sold-out shows and season openers. A chauffeured drop-off avoids the search for a space or for street parking in Foggy Bottom if the garage is full.' },
      { q: 'How much extra time should I plan for traffic before curtain?', a: "Rock Creek Parkway, the venue's main access road, gets congested as curtain time approaches since most attendees arrive in the same narrow window. We build that buffer into your pickup time automatically." },
      { q: 'Can you plan dinner and the show as one trip?', a: 'Yes — hourly, as-directed booking covers a pre-show dinner, the performance, and the ride home in one reservation, with the vehicle staying with you between stops.' },
      { q: 'What vehicle works best for a Kennedy Center evening?', a: 'A sedan suits a couple or small group comfortably; an SUV fits a larger celebration, and a Sprinter van keeps a bigger party together for the whole evening.' },
    ],
  },
  {
    slug: 'dca-global-entry-vs-tsa-precheck-explained',
    relatedRoutes: ['dca-to-washington-dc', 'dulles-airport-limo', 'dca-airport-early-morning-flights'],
    title: 'Global Entry vs. TSA PreCheck at DCA: What Actually Applies to You',
    metaTitle: 'Global Entry vs TSA PreCheck at DCA | DCA Limos',
    metaDesc:
      'Global Entry and TSA PreCheck solve two very different problems at the airport. Here is which one actually matters for a typical trip through DCA today.',
    excerpt:
      "Global Entry and TSA PreCheck get talked about almost interchangeably, but they solve two different problems at two different moments of a trip. Here's what each one actually does, and which one matters for a flight through DCA.",
    image: '/images/blog/airport-terminal-glass.webp',
    author: 'Michael Chen',
    authorBio: 'DC-area travel writer covering airports, ground transportation, and business travel for over a decade.',
    date: 'November 2, 2026',
    readTime: '6 min read',
    category: 'Airport Guides',
    content: `
      <p class="lead">Global Entry and TSA PreCheck both come up in the same conversation so often that it's easy to assume they do the same thing, or that having one automatically gives you the other. They don't, and at a perimeter-restricted, mostly-domestic airport like Reagan National, the distinction actually changes which one is worth your time and application fee.</p>

      <h2>TSA PreCheck: Faster Security, Every Domestic Flight</h2>
      <p>TSA PreCheck speeds up the security checkpoint itself — the line before you reach the gate area, where you typically keep your shoes and light jacket on and leave laptops and liquids packed. It applies to domestic departures at DCA and essentially every other U.S. airport, which is the overwhelming majority of what DCA actually flies, given the perimeter rule's limits on how far nonstop service reaches.</p>

      <h2>Global Entry: Faster Re-Entry, Only After an International Flight Lands</h2>
      <p>Global Entry is a completely different checkpoint, at a completely different point in a trip: it speeds up the customs and passport-control process when you're arriving back in the United States from an international flight, using an automated kiosk instead of a staffed passport-control line. It has nothing to do with the security checkpoint on departure, and it only matters on the arrival end of a trip that started outside the country.</p>

      <h2>Why This Split Matters More at DCA Than at a Bigger Hub</h2>
      <p>DCA's international service is genuinely limited compared to Dulles, which is the region's primary international gateway with a much larger customs and immigration facility built for that volume. For most travelers flying through DCA — a domestic business trip, a connection through a hub, a regional hop — TSA PreCheck is the one that actually gets used regularly. Global Entry sits unused in a wallet until a trip happens to involve an international return, which for a DCA-based traveler is more often routed through Dulles anyway.</p>

      <h2>Global Entry Includes TSA PreCheck — The Reverse Isn't True</h2>
      <p>One detail that causes real confusion: enrolling in Global Entry automatically includes TSA PreCheck benefits on your boarding passes, so a Global Entry member gets both. But TSA PreCheck membership on its own does not include Global Entry — the two applications, background checks, and interview requirements are separate, and PreCheck alone won't speed up a customs line on an international return.</p>

      <h2>Which One Is Actually Worth It for a DCA-Based Traveler</h2>
      <p>If your travel is mostly domestic — client visits, conferences, regional trips — TSA PreCheck alone covers what you'll actually use at DCA's security checkpoint, at a lower cost and a shorter application process than Global Entry. If you travel internationally with any regularity, even occasionally, Global Entry is worth the extra step specifically because it bundles in PreCheck too, covering both ends of a trip with one enrollment rather than two.</p>

      <h2>Neither One Changes How We Time Your Pickup</h2>
      <p>Whether you breeze through a PreCheck line on departure or a Global Entry kiosk on an international return, our flight tracking and complimentary waiting time work the same way either way — we track your actual flight status and plan your pickup around real touchdown and deplaning time, not an assumption about how fast you'll clear security or customs.</p>

      <h2>Booking Your Ride</h2>
      <p>Whichever program applies to your trip, or neither, call (877) 609-1919 or <a href="/booking">book online</a> and we'll track your flight and have your chauffeur ready when you land at DCA.</p>
    `,
    faqs: [
      { q: 'Does TSA PreCheck help with international arrivals?', a: 'No — PreCheck only speeds up the domestic security checkpoint on departure. It has no effect on customs or passport control when arriving back from an international flight.' },
      { q: 'Does Global Entry include TSA PreCheck?', a: 'Yes — Global Entry members automatically get PreCheck benefits on their boarding passes, covering both the departure security line and the international arrival customs process with one enrollment.' },
      { q: 'Is Global Entry worth it if I mostly fly domestically through DCA?', a: "Probably not on its own — if your travel is mostly domestic, TSA PreCheck alone covers what you'll actually use. Global Entry is worth it once international travel becomes a regular part of your trips." },
      { q: 'Does DCA have a lot of international flights?', a: "No — DCA's international service is limited compared to Dulles, which is the region's primary international gateway with a larger customs facility. Many DC-area international trips route through Dulles instead." },
      { q: 'Does having PreCheck or Global Entry change my pickup time?', a: "No — we track your actual flight status and plan your pickup around real touchdown and deplaning time regardless of which program applies to your trip." },
    ],
  },
  {
    slug: 'dc-united-audi-field-game-day-transportation',
    relatedRoutes: ['navy-yard-limo-service', 'nationals-park-capital-one-arena-game-day-car-service', 'dca-to-washington-dc'],
    title: 'DC United at Audi Field: A Game Day Transportation Guide',
    metaTitle: 'Audi Field DC United Transportation | DCA Limos',
    metaDesc:
      "Audi Field sits in Buzzard Point, a short drive from the Navy Yard and the Wharf but with much tighter parking and roads. Here's how to plan match day.",
    excerpt:
      "Audi Field sits in Buzzard Point, just south of the Navy Yard, with far less parking than its Nationals Park and Capital One Arena neighbors and a street grid that wasn't built for match-day crowds. Here's how to actually get there and back.",
    image: '/images/blog/scenario-group-boarding.webp',
    author: 'David Thompson',
    authorBio: 'DC-area travel writer covering airports, ground transportation, and business travel for over a decade.',
    date: 'November 2, 2026',
    readTime: '6 min read',
    category: 'Local Guides',
    content: `
      <p class="lead">DC United plays at Audi Field, a soccer-specific stadium in the Buzzard Point area just south of the Navy Yard neighborhood — close enough to feel like an extension of the Navy Yard's Nationals Park and Capital One Arena sports district, but with a noticeably tighter parking supply and a smaller surrounding street grid built long before 20,000 fans needed to move through it on match nights.</p>

      <h2>Buzzard Point Isn't Quite the Navy Yard</h2>
      <p>Audi Field sits a short walk south of the Navy Yard's main cluster of bars and restaurants around Nationals Park, close enough that fans often treat the two areas as one district for a pre-game meal. But Buzzard Point itself has far less built-out infrastructure than the blocks immediately around Nationals Park — fewer garages, narrower streets, and a layout that fills up fast once a match-night crowd arrives on top of normal neighborhood traffic.</p>

      <h2>Parking Is Genuinely Tighter Here Than at the Ballpark</h2>
      <p>Nationals Park's surrounding area has had years longer to build out parking capacity for a sports crowd; Audi Field's immediate surroundings haven't caught up in the same way, and the stadium's own lots sell out well before kickoff on popular match nights. Drivers who show up expecting ballpark-level parking availability are often the ones circling Buzzard Point's narrower streets closest to kickoff.</p>

      <h2>A Drop-off Skips the Search Entirely</h2>
      <p>A chauffeured drop-off at Audi Field removes the parking question entirely — your chauffeur handles the approach into Buzzard Point and lets you out near the gates, then returns at a coordinated time once the match ends, which is exactly when the surrounding streets are most congested with the full crowd leaving at once.</p>

      <h2>Combining a Match with the Navy Yard or the Wharf</h2>
      <p>Because Audi Field sits between the Navy Yard and the Wharf waterfront, many match nights turn into a longer outing — dinner near Nationals Park beforehand, or a walk down to the Wharf after a day match. Hourly, as-directed booking covers a day shaped like that in one reservation, with the vehicle staying with you between the Navy Yard, Audi Field, and the Wharf rather than running on a single fixed pickup.</p>

      <h2>Groups and Supporters' Sections</h2>
      <p>DC United's supporters' groups regularly travel in numbers, and a Sprinter van keeps a larger group of fans together for the trip in and, more importantly, for the trip out once the match lets out and the whole area's ride demand spikes at the same time. A sedan or SUV suits a smaller group or a couple heading to a match on their own.</p>

      <h2>Booking Your Match Day</h2>
      <p>Give us your kickoff time and we'll plan the pickup with Buzzard Point's tighter street grid in mind, plus a return time for after the final whistle. Call (877) 609-1919 or <a href="/booking">book online</a> for DC United match day transportation anywhere across Washington DC, Maryland, and Northern Virginia.</p>
    `,
    faqs: [
      { q: 'Is parking at Audi Field as easy as at Nationals Park?', a: "No — Buzzard Point has far less built-out parking capacity than the area immediately around Nationals Park, and Audi Field's own lots sell out well before kickoff on popular matches." },
      { q: 'Can you drop us right at Audi Field?', a: 'Yes — your chauffeur handles the approach into Buzzard Point and drops you near the gates, avoiding the parking search entirely.' },
      { q: 'Can we combine an Audi Field match with dinner at the Navy Yard or a visit to the Wharf?', a: "Yes — hourly, as-directed booking lets you add the Navy Yard or the Wharf to the same trip as the match, with the vehicle staying with you between stops." },
      { q: 'Do you handle DC United supporters groups traveling together?', a: 'Yes — a Mercedes Sprinter van keeps a larger group of fans together for both the arrival and the departure, which matters most right after the final whistle when ride demand across the area spikes at once.' },
      { q: 'How far is Audi Field from Reagan National Airport?', a: 'A short drive, typically 10 to 15 minutes depending on traffic — close enough that visiting fans flying in for a match can land at DCA and reach Audi Field quickly.' },
    ],
  },
  {
    slug: 'wolf-trap-filene-center-concert-transportation-guide',
    relatedRoutes: ['dulles-airport-limo', 'tysons-corporate-car-service', 'dca-to-tysons'],
    title: 'Wolf Trap and the Filene Center: A Concert Night Transportation Guide',
    metaTitle: 'Wolf Trap Filene Center Transportation Guide | DCA Limos',
    metaDesc:
      "Wolf Trap's Filene Center is an open-air venue near Tysons, with lawn seating, a single access road, and no rideshare pickup at the gate. Plan ahead now.",
    excerpt:
      "Wolf Trap's Filene Center is a beautiful outdoor venue tucked into the Virginia woods near Tysons — and also one of the harder DC-area venues to leave quickly once the show ends. Here's how to actually plan the night.",
    image: '/images/blog/landmark-capitol-2.webp',
    author: 'Sarah Williams',
    authorBio: 'DC-area travel writer covering airports, ground transportation, and business travel for over a decade.',
    date: 'November 2, 2026',
    readTime: '6 min read',
    category: 'Local Guides',
    content: `
      <p class="lead">Wolf Trap National Park for the Performing Arts, home to the open-air Filene Center, sits in a wooded stretch of Fairfax County near Tysons and Vienna — a genuinely beautiful setting for a summer concert under a covered pavilion with lawn seating behind it, and also one of the more logistically awkward DC-area venues to get in and out of quickly once a show lets out.</p>

      <h2>One Park, One Main Road In and Out</h2>
      <p>Wolf Trap's grounds are reached by a single main access road off the Dulles Toll Road corridor near Vienna, which works fine arriving well before a show but turns into the venue's single bottleneck the moment a sold-out crowd tries to leave at once after the final encore. There's no quick side exit that bypasses the crowd — everyone funnels onto the same stretch of road together.</p>

      <h2>Lawn Seating Means a Longer Walk to Any Pickup Point</h2>
      <p>A large share of Wolf Trap's capacity is lawn seating spread across a sloped hillside behind the covered pavilion, which means a meaningful walk from your blanket or chairs to any parking area or pickup point — longer than a typical indoor venue's walk from seat to curb, and one most visitors underestimate until they're doing it in the dark after a show.</p>

      <h2>Rideshare Pickup Isn't Right at the Gate</h2>
      <p>Unlike a downtown venue with a curb directly outside, Wolf Trap's pickup logistics put real distance between the performance area and any vehicle — a planned pickup location and time, agreed on before the show starts, removes the guesswork of trying to coordinate a meeting point in a dark parking field with spotty cell service and thousands of other people doing the same thing at once.</p>

      <h2>Parking Lots Empty Slowly After a Show</h2>
      <p>Wolf Trap's lots are sized well for arrival, spread across the grounds so most visitors don't fight for a single structure — but departure is a different story, with that single main access road absorbing the entire crowd's exit at once. A coordinated pickup at a set time, rather than trying to beat the crowd to your own car, often gets you off the grounds just as fast with none of the walk to a distant lot.</p>

      <h2>Combining Wolf Trap With Tysons</h2>
      <p>Because Wolf Trap sits so close to Tysons, many concert nights pair naturally with dinner at one of Tysons's restaurants beforehand — a short drive from the venue, with none of the pre-show traffic the Filene Center's own grounds see in the hour before curtain. Hourly, as-directed booking covers dinner in Tysons and the concert as one reservation.</p>

      <h2>Groups and Picnic Parties</h2>
      <p>Wolf Trap's lawn seating is popular for picnic groups bringing blankets, coolers, and folding chairs — gear that's a lot easier to load into a waiting Sprinter van than to carry across a dark parking field to find your own car. A sedan or SUV suits a couple or small group with lighter gear.</p>

      <h2>Booking Your Concert Night</h2>
      <p>Give us your show time and we'll plan both the arrival drop-off and a coordinated pickup time after the show, accounting for Wolf Trap's single-road bottleneck on the way out. Call (877) 609-1919 or <a href="/booking">book online</a> for Wolf Trap transportation anywhere across Washington DC, Maryland, and Northern Virginia.</p>
    `,
    faqs: [
      { q: 'Why does leaving Wolf Trap take longer than arriving?', a: "The grounds are reached by a single main access road, which absorbs the entire crowd's exit at once after a show — unlike arrival, which is spread out over the hour or two before curtain." },
      { q: 'Is there a long walk from lawn seating to a pickup point?', a: 'Yes — lawn seating spreads across a sloped hillside behind the pavilion, meaning a meaningful walk to any parking area or pickup point, longer than a typical indoor venue.' },
      { q: 'Can you pick us up right after the show ends?', a: 'Yes — agreeing on a pickup location and time before the show starts avoids trying to coordinate a meeting point in a dark parking field with thousands of other departing concertgoers.' },
      { q: 'Can we combine Wolf Trap with dinner in Tysons?', a: 'Yes — hourly, as-directed booking covers a Tysons dinner and the concert as one reservation, avoiding the pre-show traffic on Wolf Trap’s own grounds.' },
      { q: 'Do you handle picnic groups with coolers and chairs?', a: "Yes — a Sprinter van comfortably handles a picnic group's gear, which is easier to load into a waiting vehicle than to carry across a dark lawn and parking field." },
    ],
  },
  {
    slug: 'dca-terminal-1-vs-terminal-2-what-changes',
    relatedRoutes: ['dca-airport-early-morning-flights', 'reagan-national-airport-limo-service', 'best-car-service-from-reagan-national-dca-2026'],
    title: "DCA Terminal 1 vs. Terminal 2: What Actually Changes About Your Pickup",
    metaTitle: 'DCA Terminal 1 vs Terminal 2 Pickup Guide | DCA Limos',
    metaDesc:
      "DCA consolidated into two terminals years ago, and which one you actually land in changes exactly where your pickup happens. Here's what's really different.",
    excerpt:
      "DCA's two terminals aren't interchangeable when it comes to pickup — they sit at opposite ends of the airport, and knowing which one your airline uses changes where your chauffeur actually meets you.",
    image: '/images/blog/airport-dropoff.webp',
    author: 'Michael Chen',
    authorBio: 'DC-area travel writer covering airports, ground transportation, and business travel for over a decade.',
    date: 'November 2, 2026',
    readTime: '6 min read',
    category: 'Airport Guides',
    content: `
      <p class="lead">Reagan National consolidated its concourses into two terminals, and while the airport's overall footprint is small compared to Dulles or BWI, the two terminals sit at genuinely opposite ends of it — close enough to connect by an internal walkway, far enough that mixing them up changes where you're actually waiting for a pickup.</p>

      <h2>Terminal 1: The Smaller, Quieter Side</h2>
      <p>Terminal 1 generally handles Southwest and a handful of other carriers, and it has a noticeably smaller, more compact footprint than Terminal 2 — which can make it feel like a different, older airport entirely despite being part of the same complex. Its arrivals curb is shorter and typically less congested than Terminal 2's, a genuine advantage if your flight happens to land there.</p>

      <h2>Terminal 2: The Larger, Busier Hub Side</h2>
      <p>Terminal 2 is the much larger of the two, home to American Airlines' substantial DCA operation along with most of the airport's other major carriers. Its scale means more gates, more simultaneous arrivals, and a longer, busier arrivals curb — all of which can mean a slightly longer walk from gate to curb and more curbside activity for your chauffeur to navigate when picking you up.</p>

      <h2>Why Telling Us the Terminal (Not Just the Airline) Matters</h2>
      <p>Knowing your airline tells us which terminal to expect, but telling us the terminal directly when you book — especially if you've checked your boarding pass and know for certain — removes any ambiguity, since airline terminal assignments at DCA have shifted before and the occasional flight operates from the terminal you might not expect. A chauffeur staged at the wrong terminal because of an assumption, rather than a confirmed terminal, costs you time you don't need to lose.</p>

      <h2>The Walkway Between Them Isn't a Quick Stroll</h2>
      <p>Terminal 1 and Terminal 2 are connected by an internal walkway, which is useful if you're transferring between flights on different terminals but not something to rely on for a pickup — it's a genuine walk, not an adjacent-gate stroll, and not a route your chauffeur can simply drive around in a couple of minutes if a pickup needs to shift from one terminal's curb to the other.</p>

      <h2>Meet-and-Greet Changes Slightly by Terminal</h2>
      <p>For an additional charge, your chauffeur can meet you inside baggage claim with a personalized name sign rather than waiting curbside — worth considering at Terminal 2 in particular, where the larger baggage claim area and higher passenger volume make finding an unfamiliar curb a bit more disorienting for a first-time DCA visitor than at the smaller Terminal 1.</p>

      <h2>Both Terminals Get the Same Flight Tracking</h2>
      <p>Regardless of which terminal your flight uses, your pickup is planned around your flight's real, tracked touchdown time, not the printed schedule, with the same 45 minutes of complimentary waiting time on a domestic arrival either way. The terminal affects where your chauffeur waits, not how your pickup timing works.</p>

      <h2>Booking Your DCA Pickup</h2>
      <p>Tell us your flight number and, if you know it, your terminal, and we'll track the flight and have your chauffeur staged at the correct curb when you land. Call (877) 609-1919 or <a href="/booking">book online</a> for DCA airport car service anywhere across Washington DC, Maryland, and Northern Virginia.</p>
    `,
    faqs: [
      { q: 'How do I know which DCA terminal my flight uses?', a: 'Check your boarding pass or airline — Southwest and a few others generally use Terminal 1, while American Airlines and most other major carriers use the larger Terminal 2. Tell us the terminal when you book so your chauffeur meets you at the right curb.' },
      { q: 'Can I walk between DCA Terminal 1 and Terminal 2?', a: "Yes, there's an internal walkway connecting them, but it's a genuine walk, not an adjacent-gate stroll — not something to rely on if a pickup needs to shift between terminals." },
      { q: 'Is Terminal 2 busier than Terminal 1?', a: "Yes — Terminal 2 is the larger of the two, handling American Airlines' substantial DCA operation and most other major carriers, with more gates and a busier arrivals curb than the smaller Terminal 1." },
      { q: 'Does my terminal change how flight tracking works?', a: 'No — your pickup is planned around your flight’s real touchdown time with the same complimentary waiting time at either terminal. Only the physical pickup location changes.' },
      { q: 'Should I add meet-and-greet service at DCA?', a: "It's worth considering at either terminal, but especially Terminal 2, where the larger baggage claim area and higher passenger volume can make an unfamiliar curb harder to find on your own." },
    ],
  },
];
