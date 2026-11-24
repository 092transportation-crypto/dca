// Alt text describing what is actually in each site photo. Several photos are
// reused across many cards and posts, so describe the picture itself here
// instead of repeating the card or post title. Checked by eye against the
// files in public/images — update this map whenever a photo is replaced.
const IMAGE_ALT = {
  '/images/airport-curbside.webp': 'Travelers with rolling luggage on an airport terminal curb',
  '/images/executive-sedan.webp': 'Black Mercedes-Benz S-Class sedan parked at dusk',
  '/images/wedding-service.webp': 'Bride holding a bouquet stepping into a white SUV',
  '/images/bmw-7-series.webp': 'Black BMW 7 Series sedan in a parking lot',
  '/images/cadillac-escalade.webp': 'Black Cadillac Escalade parked on a brick driveway',
  '/images/chevrolet-suburban.webp': 'Black GMC Yukon parked beside a private jet on an airport apron',
  '/images/suburban.webp': 'Black Chevrolet Suburban SUV',
  '/images/lincoln-navigator.webp': 'Black Lincoln Navigator SUV',
  '/images/executive-van.webp': 'Black Mercedes-Benz Sprinter van parked by the water at sunset',
  '/images/lincoln-nautilus.webp': 'Black Lincoln Nautilus SUV',
  '/images/mercedes-e-class.webp': 'Black Mercedes-Benz E-Class sedan',
  '/images/mercedes-sclass.webp': 'Black Mercedes-Benz S-Class sedan in a parking lot',
  '/images/mercedes-sprinter.webp': 'Front view of a black Mercedes-Benz Sprinter van',
  '/images/blog/airport-dropoff.webp': 'White passenger van at an airport terminal drop-off lane',
  '/images/blog/airport-tarmac-sunset.webp': 'Airport apron at sunset',
  '/images/blog/airport-terminal-glass.webp': 'Glass-fronted airport terminal under a cloudy sky',
  '/images/blog/fleet-7series-1.webp': 'Black BMW 7 Series sedan in a parking lot',
  '/images/blog/fleet-escalade-1.webp': 'Black Cadillac Escalade parked under oak trees',
  '/images/blog/fleet-sclass-1.webp': 'Dark blue Mercedes-Benz S-Class sedan seen from the rear',
  '/images/blog/fleet-sclass-2.webp': 'Black Mercedes-Benz S-Class sedan on a white background',
  '/images/blog/fleet-sprinter-1.webp': 'Black Mercedes-Benz Sprinter van outside a building entrance',
  '/images/blog/fleet-sprinter-2.webp': 'Black Mercedes-Benz Sprinter van outside a glass building with palm trees',
  '/images/blog/landmark-annapolis-1.webp': 'Harbor Queen tour boat on the water',
  '/images/blog/landmark-capitol-1.webp': 'U.S. Capitol dome behind trees',
  '/images/blog/landmark-capitol-2.webp': 'U.S. Capitol building under a blue sky',
  '/images/blog/scenario-airport-pickup-1.webp': 'Chauffeur with a suitcase at the open trunk of a sedan',
  '/images/blog/scenario-airport-pickup-2.webp': 'Chauffeur standing beside a black Chevrolet SUV',
  '/images/blog/scenario-corporate-1.webp': 'Man in a suit on the phone stepping out of a black car',
  '/images/blog/scenario-corporate-2.webp': 'Man in a suit opening the rear door of a black sedan',
  '/images/blog/scenario-corporate-rain.webp': 'Chauffeur holding an umbrella for a passenger at a black sedan',
  '/images/blog/scenario-doorman.webp': 'Chauffeur holding the door for a passenger seated in a black sedan',
  '/images/blog/scenario-group-boarding.webp': 'Group of travelers boarding a white minibus',
  '/images/blog/scenario-group-shuttle.webp': 'Shuttle bus at an airport curb with a traveler pushing a luggage cart',
  '/images/blog/scenario-wedding-2.webp': 'Bride and groom embracing beside a white car',
};

// Falls back to the given text for any photo not in the map.
export const imageAlt = (src, fallback = '') => IMAGE_ALT[src] || fallback;

export default IMAGE_ALT;
