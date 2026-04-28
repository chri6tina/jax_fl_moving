export interface Area {
  slug: string;
  name: string;
  county: string;
  description: string;
  highlights: string[];
  movingTips: string;
  image: string;
  testimonial: { quote: string; author: string; location: string };
  faqs: { q: string; a: string }[];
}

export const areas: Area[] = [
  { 
    slug: 'riverside', 
    name: 'Riverside', 
    county: 'Duval', 
    description: 'Historic bungalows, narrow streets, and staircase-heavy homes define Riverside moves. We know the parking restrictions on Oak Street and the tight driveways off Riverside Ave. We treat these century-old homes with the white-glove respect they deserve.', 
    highlights: ['Historic bungalow experience', 'Staircase-specialist crews', 'Oak Street parking coordination', 'Avondale-paired service'], 
    movingTips: 'Riverside has permit-only parking on several streets. We handle street-parking permits so your move day runs smoothly.',
    image: '/images/service_local.png',
    testimonial: { quote: "Moving out of our 1920s bungalow in Riverside was terrifying because the staircases are so narrow. The Jax Moving team didn't put a single scratch on our original hardwood floors or the plaster walls.", author: "James & Sarah M.", location: "Riverside, FL" },
    faqs: [
      { q: "Do I need to block off street parking in Riverside?", a: "Yes, especially near 5 Points or Oak Street. We will coordinate with you to secure the proper permit or reserve space the night before." },
      { q: "Can your trucks fit down the historic alleys?", a: "We operate a mixed fleet. If you live down a tight Riverside alley, we will dispatch one of our smaller 20ft box trucks instead of a massive semi." }
    ]
  },
  { 
    slug: 'mandarin', 
    name: 'Mandarin', 
    county: 'Duval', 
    description: 'Large family homes, long driveways, and active 55+ communities make Mandarin one of our busiest service areas. We have full-day crews dedicated to the Southside and Mandarin every single week, meaning we can often accommodate last-minute date changes.', 
    highlights: ['Large-home specialist crews', 'Active-adult community experience', 'Same-week availability', 'Full packing service available'], 
    movingTips: 'Mandarin HOA communities often require proof of mover insurance before move day. We provide COIs within 24 hours.',
    image: '/images/jax_truck.png',
    testimonial: { quote: "We moved from a 4-bedroom home in Julington Creek to a new build in Mandarin. The crew was on time, polite, and worked relentlessly for 9 hours straight. Incredible work ethic.", author: "The Davis Family", location: "Mandarin, FL" },
    faqs: [
      { q: "Does Jax Moving meet Mandarin HOA insurance requirements?", a: "Absolutely. We are fully licensed and insured, and we can provide your HOA with a Certificate of Insurance (COI) immediately upon booking." },
      { q: "Do you handle large items like grand pianos or gun safes?", a: "Yes. Our specialty crews are equipped with motorized stair climbers and heavy-duty dollies specifically for safes and pianos." }
    ]
  },
  { 
    slug: 'jacksonville-beach', 
    name: 'Jacksonville Beach', 
    county: 'Duval', 
    description: "Moving to or from the beach? We handle beachside condo elevator reservations, parking challenges on Beach Blvd, and the logistical quirks that come with coastal high-rises. Don't let a generic moving company ruin your move-in day because they didn't know the condo association rules.", 
    highlights: ['Condo elevator coordination', 'Beach Blvd logistics expertise', 'Coastal high-rise experience', 'Storage available nearby'], 
    movingTips: 'Most Jacksonville Beach condos require elevator reservations 48–72 hours in advance. We help coordinate that for you.',
    image: '/images/jax_skyline.png',
    testimonial: { quote: "We bought a 6th-floor condo in Jax Beach and our HOA only gave us a 3-hour elevator window. The guys from Jax Moving hustle like crazy and got everything up there with 30 minutes to spare.", author: "Mark R.", location: "Jacksonville Beach, FL" },
    faqs: [
      { q: "What happens if it rains during my beach move?", a: "Summer afternoon thunderstorms are a reality at the beaches. We come prepared with heavy-duty tarps and shrink wrap to protect your furniture from rain." },
      { q: "Can you park a moving truck on 1st Street?", a: "Parking on 1st Street can be extremely tight. We usually coordinate a staging area or use shuttle vans if a full-size truck cannot safely park." }
    ]
  },
  { 
    slug: 'san-marco', 
    name: 'San Marco', 
    county: 'Duval', 
    description: 'San Marco Square is charming to walk through and challenging to move out of. We know the neighborhood grid, the older home layouts, and the best truck staging spots to ensure we don\'t block traffic or damage historic property.', 
    highlights: ['San Marco Square area expertise', 'Older-home layout experience', 'Small truck options for tight streets', 'Riverside crossover service'], 
    movingTips: 'Truck staging near San Marco Square requires planning. We scout the location in advance so there are no move-day surprises.',
    image: '/images/service_local.png',
    testimonial: { quote: "Jax Moving handled our relocation from a small apartment in San Marco to our first home in Miramar. They were incredibly careful with our antique furniture and didn't leave a single scuff.", author: "Elena & Tom", location: "San Marco, FL" },
    faqs: [
      { q: "Do you offer packing services for historic antiques?", a: "Yes, we specialize in white-glove packing. We custom-crate large mirrors, artwork, and wrap antiques in thick, protective moving blankets." },
      { q: "Do you charge extra for stairs?", a: "No. Our flat-rate pricing includes all stairs, whether you're in a 3rd-floor walkup or a multi-story historic home." }
    ]
  },
  { 
    slug: 'southside', 
    name: 'Southside', 
    county: 'Duval', 
    description: "Southside's mix of apartment complexes, townhomes, and commercial corridors keeps our crews busy year-round. We're fast, efficient, and familiar with every major complex in the area, from the Town Center to Baymeadows.", 
    highlights: ['Apartment complex experience', 'Townhome and condo moves', 'Commercial corridor access', 'High move-out volume experience'], 
    movingTips: 'Southside apartment complexes often have strict move-out inspection windows. We time our arrivals to fit your deadline exactly.',
    image: '/images/service_storage.png',
    testimonial: { quote: "I had to move out of my Town Center apartment in exactly 4 hours to avoid a late fee from my landlord. The crew showed up 15 minutes early and had me completely out in 2.5 hours. Phenomenal.", author: "Jessica W.", location: "Southside, FL" },
    faqs: [
      { q: "Can you provide a COI for my apartment complex?", a: "Yes, almost all modern apartment complexes in Southside require a COI. We will email it directly to your leasing office." },
      { q: "Do you offer short-term storage if my lease dates don't align?", a: "Yes, we have a climate-controlled storage facility. We can pick up your items, store them for a few days or weeks, and redeliver them." }
    ]
  },
  { 
    slug: 'atlantic-beach', 
    name: 'Atlantic Beach', 
    county: 'Duval', 
    description: 'Smaller and quieter than Jax Beach, Atlantic Beach has its own personality — and its own parking challenges. Our beach-area crews are experienced with navigating the tight residential streets off Ocean Blvd and Seminole Road.', 
    highlights: ['Beachside parking expertise', 'Condo and single-family moves', 'Paired with Neptune Beach service', 'Weekend availability'], 
    movingTips: 'Atlantic Beach has narrower residential streets than Jacksonville Beach. We dispatch appropriately-sized trucks to ensure we don\'t block your neighbors.',
    image: '/images/jax_truck.png',
    testimonial: { quote: "We moved our family to Atlantic Beach and couldn't be happier with the service. They navigated our tiny driveway perfectly and were incredibly polite to our new neighbors.", author: "The Harrison Family", location: "Atlantic Beach, FL" },
    faqs: [
      { q: "Do you serve Neptune Beach as well?", a: "Yes! We serve all the beaches: Atlantic Beach, Neptune Beach, Jacksonville Beach, and Ponte Vedra." },
      { q: "How far in advance should I book a weekend move?", a: "Weekends book up fast, especially at the beaches. We recommend booking at least 2-3 weeks in advance." }
    ]
  },
  { 
    slug: 'ortega', 
    name: 'Ortega', 
    county: 'Duval', 
    description: "Ortega's waterfront estates and historic homes require true white-glove care. We bring specialty wrap materials and experienced crews who treat every single item like it's irreplaceable — because in Ortega, it often is.", 
    highlights: ['White-glove service standard', 'Waterfront estate experience', 'Fine art and antique moving', 'By-appointment scheduling'], 
    movingTips: 'Ortega has some of Jacksonville\'s oldest and most valuable homes. We use extra furniture pads, floor runners, and door-frame protection on every Ortega move.',
    image: '/images/service_packing.png',
    testimonial: { quote: "I was extremely nervous about moving my grandmother's china cabinet and several large oil paintings. The team was meticulous. Everything arrived in pristine condition.", author: "Elizabeth C.", location: "Ortega, FL" },
    faqs: [
      { q: "Do you offer full-service packing?", a: "Yes, our white-glove service includes full packing, unpacking, and custom crating for high-value artwork and antiques." },
      { q: "Are your crews background checked?", a: "Yes, every member of the Jax Moving team is a full-time, background-checked employee. We never use day-laborers." }
    ]
  },
  { 
    slug: 'northside', 
    name: 'Northside', 
    county: 'Duval', 
    description: 'The growing Northside corridor — from Oceanway to Baldwin — is one of our fastest-expanding service areas. Large lots, new construction communities, and military family moves from Mayport and NAS Jax are our specialty here.', 
    highlights: ['New construction move-in experience', 'Military relocation specialists', 'Large-lot and rural access', 'Weekend and weekday availability'], 
    movingTips: 'Northside new construction often has muddy or unfinished driveways. We bring floor protection materials for every new-home move to keep your new carpets clean.',
    image: '/images/service_long_distance.png',
    testimonial: { quote: "We got stationed in Jacksonville and bought a new build on the Northside. Jax Moving handled the final leg of our relocation flawlessly. They even put felt pads on our furniture before setting it on the new wood floors.", author: "Sgt. Miller", location: "Northside, FL" },
    faqs: [
      { q: "Do you offer military discounts?", a: "Yes, we are proud to offer flat-rate discounts for active duty military and veterans relocating to or from Jacksonville." },
      { q: "Can you navigate unpaved driveways for rural Northside homes?", a: "Yes, our drivers are highly experienced. Just let us know the conditions of your driveway during the quoting process so we can prepare." }
    ]
  },
  { 
    slug: 'orange-park', 
    name: 'Orange Park', 
    county: 'Clay', 
    description: "Orange Park is Jacksonville's neighbor across the Duval–Clay county line. We move families between Orange Park, Fleming Island, and Jacksonville all week long — and we never charge a 'county-line surcharge'.", 
    highlights: ['No county-line surcharge', 'Blanding Blvd corridor experience', 'Oakleaf and Plantation area service', 'Military family relocation'], 
    movingTips: 'Orange Park to Mandarin over the Buckman bridge is one of our most common routes — typically a fast 3–4 hour flat-rate move.',
    image: '/images/jax_truck.png',
    testimonial: { quote: "We moved from Fleming Island to Orange Park. The guys were friendly, incredibly strong, and worked non-stop. They made a stressful day actually kind of fun.", author: "Amanda T.", location: "Orange Park, FL" },
    faqs: [
      { q: "Do you serve all of Clay County?", a: "Yes, we serve Orange Park, Fleming Island, Green Cove Springs, and Middleburg." },
      { q: "Will I be charged extra for crossing the Buckman Bridge?", a: "No. Our flat-rate pricing covers all travel time and bridge tolls. There are no hidden fees." }
    ]
  },
  { 
    slug: 'nocatee', 
    name: 'Nocatee & St. Johns', 
    county: 'St. Johns', 
    description: "St. Johns County is one of Florida's fastest-growing counties, and Nocatee is at the center of it. We handle new-build move-ins, complex HOA coordination, and the long driveways of Ponte Vedra on a daily basis.", 
    highlights: ["St. Johns County's fastest-growing area", 'New-build move-in specialists', 'HOA coordination included', 'Ponte Vedra coverage'], 
    movingTips: 'Nocatee HOAs require movers to carry specific insurance levels and sometimes require move-in deposits. We handle all documentation on our end.',
    image: '/images/service_local.png',
    testimonial: { quote: "Our closing date in Nocatee got pushed back twice. Jax Moving was incredibly flexible and held our stuff in storage for a week until we finally got the keys. They are lifesavers.", author: "The Patel Family", location: "Nocatee, FL" },
    faqs: [
      { q: "Do you serve Ponte Vedra Beach as well?", a: "Yes, we serve all of Nocatee, Ponte Vedra, Ponte Vedra Beach, and St. Augustine." },
      { q: "What happens if my closing is delayed?", a: "Closing delays happen all the time. We offer overnight truck-hold services or short-term facility storage to keep your belongings safe until you get your keys." }
    ]
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
