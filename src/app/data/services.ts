export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  faqs: { q: string; a: string }[];
  localHook: string;
  testimonial: { quote: string; author: string; location: string };
  valueProps: { title: string; desc: string; icon: string }[];
}

export const services: Service[] = [
  {
    slug: 'local',
    title: 'Local Moves in Jacksonville',
    shortTitle: 'Local Moves',
    tagline: 'Same-day & next-day moves, anywhere in Duval County.',
    description: "Moving doesn't have to be a nightmare. Whether you're moving across the street or across the county, our flat-rate pricing means no hidden hourly overtime. We show up exactly when we say we will, protect your belongings like they are our own, and have you completely settled into your new home by dinner.",
    icon: '🏠',
    image: '/images/service_local.png',
    localHook: "We know Jacksonville. Whether it's navigating the tight, historic streets and ancient oak trees in Riverside, moving heavy furniture into a 3rd-floor walk-up at the Beaches, or adhering to strict gated-community HOA rules in Ponte Vedra, our local crews have seen it all. We don't get lost, and we don't waste time.",
    testimonial: {
      quote: "Jax Moving saved us. We were dreading moving out of our townhome, but the crew showed up early, wrapped every piece of our furniture perfectly, and had us unloaded at our new house in Mandarin before 2 PM. Best money we've ever spent.",
      author: "Sarah & Mark T.",
      location: "Mandarin, FL"
    },
    valueProps: [
      { title: "Flat-Rate Guarantee", desc: "No hourly milking. You pay exactly what we quote.", icon: "💵" },
      { title: "Locally Owned", desc: "Not a franchise. We live and work in the 904.", icon: "🌴" },
      { title: "Full Protection", desc: "Blanket-wrapping and floor runners included free.", icon: "🛡️" }
    ],
    features: ['Flat-rate pricing — no hourly surprises', 'Same-day and next-day availability', 'Full-service pack + load + unload', 'Furniture disassembly & reassembly', 'Floor and door frame protection', 'Free binding quote in 60 seconds'],
    faqs: [{ q: 'How far in advance should I book?', a: 'We recommend 1–2 weeks for weekdays, 2–3 weeks for weekends. We often have same-day and next-day slots too.' }, { q: 'Is pricing truly flat-rate?', a: 'Yes. The price we quote is the price you pay — no overtime charges.' }],
  },
  {
    slug: 'long-distance',
    title: 'Long-Distance Relocation',
    shortTitle: 'Long Distance',
    tagline: 'Dedicated trucks. Guaranteed delivery windows.',
    description: 'Moving out of state or across Florida is stressful enough without wondering where your belongings are. With Jax Moving, your items ride in a dedicated truck — never shared with other families. We quote a guaranteed delivery window before you even sign the contract, so you can plan your arrival with complete confidence.',
    icon: '🚛',
    image: '/images/service_long_distance.png',
    localHook: "Leaving Northeast Florida? We've successfully relocated hundreds of Jacksonville families to Atlanta, Charlotte, Nashville, and across the state of Texas. Because we use dedicated trucks, you aren't waiting weeks for a massive 18-wheeler to make 5 stops before getting to your new home. We load in Jax, and drive straight to you.",
    testimonial: {
      quote: "We moved from Jacksonville Beach to Atlanta for work. The big van lines quoted us a 14-day delivery window. Jax Moving had our stuff in Atlanta the very next morning. Zero damage, zero stress.",
      author: "David R.",
      location: "Atlanta, GA"
    },
    valueProps: [
      { title: "Dedicated Trucks", desc: "Your belongings are the only items on our truck.", icon: "🚚" },
      { title: "Guaranteed Window", desc: "Exact delivery dates, not vague 2-week windows.", icon: "📅" },
      { title: "GPS Tracked", desc: "Know exactly where your belongings are at all times.", icon: "📍" }
    ],
    features: ['Dedicated truck — your stuff only', 'Guaranteed delivery window in writing', 'GPS-tracked fleet', 'Full-value liability coverage available', 'Packing + crating included or à la carte', 'Coverage across the entire Southeast'],
    faqs: [{ q: 'How long does a move to Atlanta take?', a: 'Jacksonville to Atlanta is typically next-day delivery.' }, { q: 'Do you do interstate moves outside Florida?', a: 'Yes — FL, GA, SC, NC, AL, TN, and TX.' }],
  },
  {
    slug: 'packing',
    title: 'Professional Packing Services',
    shortTitle: 'Packing',
    tagline: 'Zero-damage guarantee. Every item packed by trained hands.',
    description: 'The hardest part of moving isn\'t the lifting; it\'s the packing. Let our professional crews handle it. We pad-wrap furniture, double-box fragile items, and meticulously inventory everything before it leaves your home. Best of all? If we packed it and it breaks in transit, we replace it. Guaranteed.',
    icon: '📦',
    image: '/images/service_packing.png',
    localHook: "Packing up a 4-bedroom house in San Marco takes the average family three weeks of living in a maze of cardboard boxes. Our trained packing crews can do it in a single day. You go to work in your old house, and come home to everything perfectly boxed, labeled, and ready to load.",
    testimonial: {
      quote: "I have a lot of fine china and crystal. I was terrified of moving it. The Jax Moving packing crew treated my things with such incredible respect. They built custom boxes for my mirrors and double-wrapped every glass. Not a single chip.",
      author: "Eleanor W.",
      location: "San Marco, FL"
    },
    valueProps: [
      { title: "Zero Damage Guarantee", desc: "If we pack it and it breaks, we pay for it.", icon: "✨" },
      { title: "All Materials Included", desc: "We bring the boxes, tape, and bubble wrap.", icon: "📋" },
      { title: "Custom Crating", desc: "Specialty boxes for TVs, mirrors, and art.", icon: "🖼️" }
    ],
    features: ['Zero-damage guarantee on packed items', 'Custom crating for art, mirrors, TVs', 'Wardrobe boxes for hanging clothes', 'Dishpack cell boxes for kitchen', 'Full-service or partial packing', 'Unpacking & debris removal at destination'],
    faqs: [{ q: 'Do I need to provide packing materials?', a: 'No. We bring all boxes, tape, bubble wrap, and specialty materials.' }, { q: 'What does the zero-damage guarantee cover?', a: 'Any item we pack that is damaged in transit is replaced or repaired at our expense.' }],
  },
  {
    slug: 'storage',
    title: 'Climate-Controlled Storage',
    shortTitle: 'Storage',
    tagline: "Short or long-term. We pick up and redeliver whenever you're ready.",
    description: "Sometimes the timeline of buying and selling a home doesn't line up perfectly. Our Jacksonville storage facility is fully climate-controlled, monitored 24/7, and accessible any time. We will pick up your belongings, hold them safely, and redeliver the moment your new home is ready.",
    icon: '🏪',
    image: '/images/service_storage.png',
    localHook: "Florida humidity destroys wood furniture and electronics. Storing your life in a hot, unventilated metal garage unit in the middle of a Jacksonville summer is a disaster waiting to happen. Our facility maintains a constant 72 degrees, ensuring your antiques, electronics, and documents are preserved perfectly.",
    testimonial: {
      quote: "Our new build in Nocatee was delayed by 3 months. Jax Moving held all of our furniture in their climate-controlled warehouse and delivered it seamlessly the day we finally got our keys. Lifesavers.",
      author: "The Miller Family",
      location: "Nocatee, FL"
    },
    valueProps: [
      { title: "Climate Controlled", desc: "Constant temperature to beat Florida humidity.", icon: "❄️" },
      { title: "24/7 Security", desc: "Video monitoring and strict access controls.", icon: "🔒" },
      { title: "Vaulted Storage", desc: "Dust-free wooden vaults for long-term safety.", icon: "🗃️" }
    ],
    features: ['Climate-controlled units (68–78°F)', '24/7 video monitoring', 'Month-to-month — no long-term contracts', 'We pick up from your home', 'Redelivery on your schedule', 'Inventory list provided for every job'],
    faqs: [{ q: 'Where is the storage facility?', a: 'Westside of Jacksonville. We serve Duval, Clay, and St. Johns counties.' }, { q: 'Is there a minimum storage period?', a: 'No minimum. Bill monthly, no long-term commitment.' }],
  },
  {
    slug: 'commercial',
    title: 'Office & Commercial Moves',
    shortTitle: 'Commercial',
    tagline: 'After-hours and weekend office relocations. Zero business downtime.',
    description: 'Time is money. We schedule commercial and office relocations completely outside of your business hours so that you experience zero operational downtime. Your team leaves the old office on Friday afternoon, and shows up to the new space on Monday morning fully set up and ready to work.',
    icon: '🏢',
    image: '/images/service_commercial.png',
    localHook: "From medical suites near Baptist South to corporate offices downtown in the Bank of America Tower, we understand the logistical requirements of Jacksonville commercial buildings. We handle the Certificate of Insurance (COI) requirements, coordinate with property managers, and pad the elevators.",
    testimonial: {
      quote: "We moved our 40-person tech firm from Southside to the St. Johns Town Center. The crew dismantled all the cubicles, moved the server racks, and set everything back up over the weekend. Our employees didn't miss a single hour of work.",
      author: "Michael C., Tech CEO",
      location: "Jacksonville, FL"
    },
    valueProps: [
      { title: "Zero Downtime", desc: "We work weekends and nights to keep you running.", icon: "⏱️" },
      { title: "IT & Server Handling", desc: "Specialized moving for sensitive electronics.", icon: "💻" },
      { title: "Fast COIs", desc: "Insurance certificates provided to your landlord in 24 hours.", icon: "📄" }
    ],
    features: ['After-hours and weekend scheduling', 'Cubicle and workstation disassembly', 'IT equipment and server room moves', 'Numbered & labeled inventory system', 'File cabinet and records moves', 'COIs available within 24 hours'],
    faqs: [{ q: 'Can you move a small office?', a: 'Absolutely. Most of our commercial jobs are small offices, medical suites, and retail spaces.' }, { q: 'Do you provide COIs?', a: 'Yes — certificates of insurance within 24 hours of request.' }],
  },
  {
    slug: 'piano-moving',
    title: 'Jacksonville Piano Movers',
    shortTitle: 'Piano Moving',
    tagline: 'Grand, baby grand, and upright pianos moved with perfect pitch.',
    description: 'Pianos aren\'t just heavy; they are incredibly delicate instruments carrying thousands of pounds of string tension. You cannot trust a standard moving crew to move a Steinway. Our dedicated piano moving teams use specialized equipment, grand piano skids, and decades of experience to move your instrument without knocking it out of tune or scratching the finish.',
    icon: '🎹',
    image: '/images/jax_truck.png',
    localHook: "Whether we're moving a baby grand out of a historic Riverside home with tight staircases, or hoisting an upright into a 3rd-floor condo in Jax Beach, we have the exact equipment required. We know the physics of these instruments intimately.",
    testimonial: {
      quote: "I inherited a Steinway Grand Piano and was terrified to move it. The Jax Moving specialty team came in, fully wrapped the piano, removed the legs, and secured it to a specialized piano board. Absolute professionals.",
      author: "Rebecca S.",
      location: "Avondale, FL"
    },
    valueProps: [
      { title: "Specialty Equipment", desc: "Piano skids, locking straps, and heavy-duty dollies.", icon: "🏗️" },
      { title: "Piano Experts", desc: "Trained in grand and upright piano disassembly.", icon: "🎵" },
      { title: "White Glove", desc: "Precise placement and reassembly in your new home.", icon: "🧤" }
    ],
    features: ['Grand and baby grand piano disassembly', 'Upright piano moves (all sizes)', 'Specialty piano skids and boards used', 'Floor-protection guaranteed', 'Climate-controlled truck transit', 'Reassembly at destination'],
    faqs: [{ q: 'Do you tune the piano after moving?', a: 'No, we recommend waiting 2-3 weeks after the move for the piano to acclimate to the new humidity before having a professional tuner out.' }, { q: 'How much does it cost to move an upright piano?', a: 'Upright piano moves typically start at $250 for single-floor local moves.' }],
  },
  {
    slug: 'gun-safe-moving',
    title: 'Gun Safe & Vault Moving',
    shortTitle: 'Gun Safes',
    tagline: 'Secure, discreet moving for 500lb to 2,000lb gun safes.',
    description: 'Moving a 1,000lb gun safe up a flight of stairs or across a hardwood floor is not a DIY project. Our specialized heavy-lift crews use motorized stair climbers, reinforced heavy-duty dollies, and thick neoprene floor runners to safely transport massive gun safes and home vaults without destroying your property or risking injury.',
    icon: '🔒',
    image: '/images/jax_truck.png',
    localHook: "We move hundreds of large Liberty and Cannon safes across Northeast Florida every year. From the rural properties in Middleburg to the gated communities of Nocatee, our teams operate discreetly and professionally.",
    testimonial: {
      quote: "These guys are machines. I have a 1,200lb Liberty safe that I thought was going to have to stay with the house when I sold it. They brought in a motorized stair climber and had it out the door in 20 minutes without a single scratch on the floor.",
      author: "Mike T.",
      location: "Middleburg, FL"
    },
    valueProps: [
      { title: "Motorized Lifts", desc: "We use electric stair climbers for extreme weights.", icon: "⚙️" },
      { title: "Floor Protection", desc: "Neoprene runners ensure no cracked tiles or scratched wood.", icon: "🛡️" },
      { title: "Discreet Service", desc: "Your privacy and security is our top priority.", icon: "🤫" }
    ],
    features: ['500lb to 2,000lb safe moving capability', 'Motorized electric stair climbers', 'Neoprene floor runners and protection', 'Bolt-down and unbolting services available', 'Discreet, professional crews', 'Full liability coverage'],
    faqs: [{ q: 'Do I need to empty my gun safe before moving?', a: 'Yes — for safety and legal reasons, all firearms and ammunition must be completely removed before our crews arrive.' }, { q: 'Can you get a heavy safe up stairs?', a: 'Usually yes, provided the staircase is structurally rated for the combined weight of the safe, the equipment, and the crew.' }],
  },
  {
    slug: 'heavy-equipment',
    title: 'Heavy Items & Trailer Moving',
    shortTitle: 'Heavy Items',
    tagline: 'Home gyms, oversized appliances, and utility trailers.',
    description: 'Bought a massive commercial treadmill you can\'t get up the stairs? Need a large utility trailer relocated across town? We provide dedicated labor and transport for oversized, awkward, and extremely heavy items that standard movers and delivery companies refuse to touch.',
    icon: '🏋️',
    image: '/images/jax_truck.png',
    localHook: "Jacksonville is a big city with big toys. Whether you need a heavy boat trailer relocated from a marina in Mayport to a storage lot on the Westside, or a massive commercial squat rack moved into a 3rd-floor apartment, our heavy-lift teams are ready.",
    testimonial: {
      quote: "I bought a massive commercial treadmill on Facebook Marketplace and quickly realized it weighed 400lbs and wouldn't fit in my truck. Jax Moving picked it up and got it into my upstairs bonus room safely.",
      author: "Chris D.",
      location: "Jacksonville, FL"
    },
    valueProps: [
      { title: "Oversized Items", desc: "If it's heavy and awkward, we can move it.", icon: "📦" },
      { title: "Trailer Relocation", desc: "We can hitch and relocate utility trailers across Jax.", icon: "🚛" },
      { title: "Same-Day Booking", desc: "Fast availability for single-item moves.", icon: "⚡" }
    ],
    features: ['Commercial home gym equipment (treadmills, racks)', 'Oversized appliances (sub-zero fridges, massive ranges)', 'Utility trailer hitching and relocation', 'Pool tables and heavy arcade cabinets', 'Hot tub relocation (drained only)', 'Heavy landscaping or outdoor kitchen equipment'],
    faqs: [{ q: 'Do you move mobile homes or massive boats?', a: 'No, we do not move mobile homes. We can relocate standard hitch-based utility trailers, but not large yachts.' }, { q: 'Can I hire you just to move one heavy item inside my house?', a: 'Yes! We offer labor-only services to move heavy items from one room to another (like moving a safe upstairs).' }],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
