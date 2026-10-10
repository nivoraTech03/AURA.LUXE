export interface Room {
  id: string;
  name: string;
  tagline: string;
  type: "Single Sharing" | "Double Sharing" | "Triple Sharing";
  price: string;
  originalPrice?: string;
  billingPeriod: string;
  occupancy: string;
  bathroom: "Private Ensuite Bath" | "Attached Luxury Bath" | "Dedicated Premium Bath";
  cooling: "Inverter Dual AC" | "Climate Controlled AC";
  furnishing: "Fully Furnished with Workstation";
  availability: "Available Now" | "Only 1 Left" | "Filling Fast";
  badge?: string;
  description: string;
  image: string;
  secondaryImages: string[];
  features: string[];
  deposit: string;
  foodPolicy: string;
  lockIn: string;
}

export interface Amenity {
  id: string;
  title: string;
  category: "Comfort" | "Security" | "Convenience" | "Lifestyle";
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Rooms" | "Exterior" | "Lounge" | "Dining" | "Study" | "Amenities";
  image: string;
  aspect?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrCollege: string;
  avatar: string;
  rating: number;
  roomType: string;
  review: string;
  stayDuration: string;
}

export interface LocationHighlight {
  name: string;
  category: "Metro" | "Corporate Hub" | "University" | "Hospital" | "Mall & Dining";
  distance: string;
  timeMin: string;
}

export const PROPERTY_INFO = {
  brandName: "AURA LUXE SUITES",
  subTitle: "Exclusive Executive & Student Living",
  tagline: "Premium Living. Better Everyday.",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappDefaultMsg: "Hello Aura Luxe Suites! I am interested in scheduling a visit and checking room availability.",
  email: "concierge@auraluxesuites.com",
  address: "Plot 42, Signature Boulevard, Sector 43, Golf Course Road, Gurugram, Delhi NCR 122002",
  city: "Gurugram / Delhi NCR",
  startingPrice: "₹18,500/month",
  rating: "4.9",
  reviewsCount: "148+ verified reviews",
  hours: "Front Desk & Concierge: 8:00 AM – 10:00 PM (24/7 Security)",
};

export const ROOMS_DATA: Room[] = [
  {
    id: "suite-private-single",
    name: "Presidential Private Studio",
    tagline: "Exclusive solitude with dedicated ergonomic work suite",
    type: "Single Sharing",
    price: "₹28,000",
    originalPrice: "₹32,000",
    billingPeriod: "month",
    occupancy: "Single Occupancy (1 Resident)",
    bathroom: "Private Ensuite Bath",
    cooling: "Inverter Dual AC",
    furnishing: "Fully Furnished with Workstation",
    availability: "Only 1 Left",
    badge: "Most Premium",
    description: "Designed for discerning executives and senior scholars needing total quietude, high aesthetic finesse, and uncompromised privacy. Features an ergonomic Herman Miller style chair, king-single posture-pedic mattress, smart LED lighting, and acoustic insulation.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Dedicated High-Speed 300 Mbps Wi-Fi AP",
      "Smart 43\" 4K Google TV in room",
      "Spacious 3-door wardrobe with digital safe locker",
      "Ergonomic oak workstation & magnetic pin board",
      "Custom orthopaedic spring mattress + Egyptian cotton linen",
      "Daily room housekeeping & weekly deep linen sanitation",
      "Private balcony with skyline view"
    ],
    deposit: "1 Month Rent (100% Refundable)",
    foodPolicy: "Chef Curated 4-Meals Daily Plan included",
    lockIn: "3 Months minimum agreement"
  },
  {
    id: "executive-twin-sharing",
    name: "Executive Twin Suite",
    tagline: "Spacious luxury with individual study zones & separate wardrobes",
    type: "Double Sharing",
    price: "₹18,500",
    originalPrice: "₹21,000",
    billingPeriod: "per person / month",
    occupancy: "Double Sharing (2 Residents)",
    bathroom: "Attached Luxury Bath",
    cooling: "Climate Controlled AC",
    furnishing: "Fully Furnished with Workstation",
    availability: "Available Now",
    badge: "Most Popular",
    description: "Our signature double sharing layout offers expansive floor space so you never feel cramped. Each resident gets an independent study alcove, full-length double wardrobe, bedside charging docks, and extra luggage storage under-bed.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b49?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Two individual ergonomic desks with task lighting",
      "Individual wardrobe bays with separate lock & keys",
      "Attached designer bathroom with Jaguar brass fittings & glass partition",
      "Daily housekeeping & doorstep dry-clean / laundry",
      "High speed 300 Mbps Wi-Fi + Ethernet ports",
      "Mini refrigerator inside room"
    ],
    deposit: "1 Month Rent (100% Refundable)",
    foodPolicy: "Breakfast & Gourmet Dinner included (Weekend Lunch extra)",
    lockIn: "3 Months minimum agreement"
  },
  {
    id: "prestige-triple-sharing",
    name: "Prestige Trio Residence",
    tagline: "Cost-effective luxury without compromising standard and comfort",
    type: "Triple Sharing",
    price: "₹13,500",
    originalPrice: "₹15,000",
    billingPeriod: "per person / month",
    occupancy: "Triple Sharing (3 Residents)",
    bathroom: "Attached Luxury Bath",
    cooling: "Climate Controlled AC",
    furnishing: "Fully Furnished with Workstation",
    availability: "Filling Fast",
    badge: "Best Value",
    description: "Designed for ambitious college students and early-career tech professionals looking for a peer network in a high-grade environment. Features expansive carpet area, quiet acoustic zone, separate lockers, and full access to community lounges.",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Triple ergonomic study pods in silent zone",
      "Large attached bath with instant 24/7 solar geyser heating",
      "3 individual full height wardrobes with digital biometric locks",
      "Housekeeping twice daily for absolute spotless hygiene",
      "High-speed multi-AP Wi-Fi setup",
      "Shared lounge and café terrace access included"
    ],
    deposit: "1 Month Rent (100% Refundable)",
    foodPolicy: "Unlimited 3-Time Chef Meals + High Tea included",
    lockIn: "2 Months minimum agreement"
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "amenity-1",
    title: "Fully Furnished Designer Rooms",
    category: "Comfort",
    description: "Custom wooden beds with 8-inch orthopaedic mattresses, modular workstations, and ample fitted storage.",
    iconName: "BedDouble",
    highlight: true
  },
  {
    id: "amenity-2",
    title: "Dual Band 300 Mbps Wi-Fi",
    category: "Convenience",
    description: "Enterprise Cisco mesh routers on every floor ensuring latency-free zoom calls and 4K streaming.",
    iconName: "Wifi",
    highlight: true
  },
  {
    id: "amenity-3",
    title: "Inverter Climate Control AC",
    category: "Comfort",
    description: "Whisper-quiet Daikin air conditioners in every single suite with custom temperature settings.",
    iconName: "Wind",
    highlight: false
  },
  {
    id: "amenity-4",
    title: "Daily Professional Housekeeping",
    category: "Comfort",
    description: "Five-star hotel grade cleaning, linen replenishment, trash removal, and sanitized bathrooms.",
    iconName: "Sparkles",
    highlight: true
  },
  {
    id: "amenity-5",
    title: "Chef-Curated Gourmet Dining",
    category: "Lifestyle",
    description: "Nutritious multi-cuisine home-style meals prepared daily in an ISO-certified commercial hygienic kitchen.",
    iconName: "Utensils",
    highlight: true
  },
  {
    id: "amenity-6",
    title: "Express In-House Laundry",
    category: "Convenience",
    description: "Commercial high-capacity washing machines, automated tumble dryers, and optional steam pressing.",
    iconName: "Shirt",
    highlight: false
  },
  {
    id: "amenity-7",
    title: "24/7 Guarded Security & CCTV",
    category: "Security",
    description: "Strict biometric access, 64 HD CCTV surveillance cameras, security guards, and smart visitor check-in.",
    iconName: "ShieldCheck",
    highlight: true
  },
  {
    id: "amenity-8",
    title: "100% Power Backup (DG Set)",
    category: "Convenience",
    description: "Automatic changeover diesel generators ensuring your laptops, Wi-Fi, and AC never shut down.",
    iconName: "Zap",
    highlight: false
  },
  {
    id: "amenity-9",
    title: "Reserved Vehicle Parking",
    category: "Convenience",
    description: "Covered car and two-wheeler basement parking with EV fast-charging stations.",
    iconName: "Car",
    highlight: false
  },
  {
    id: "amenity-10",
    title: "Multi-Stage RO Alkaline Water",
    category: "Comfort",
    description: "TDS-balanced commercial RO dispensers with hot, ambient, and chilled water on each floor.",
    iconName: "Droplets",
    highlight: false
  },
  {
    id: "amenity-11",
    title: "Co-Working & Silent Study Hall",
    category: "Lifestyle",
    description: "Acoustically treated library tables with individual power docks, coffee bar, and whiteboard booths.",
    iconName: "BookOpen",
    highlight: true
  },
  {
    id: "amenity-12",
    title: "Rooftop Sky Lounge & Gaming Zone",
    category: "Lifestyle",
    description: "PlayStation 5, pool table, table tennis, open-air turf lounge, and sunset cafe seating.",
    iconName: "Gamepad2",
    highlight: true
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Presidential Master Suite",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
    description: "Panoramic view of our single private sanctuary with warm mood lighting and ergonomic lounge seating."
  },
  {
    id: "gal-2",
    title: "Signature Architecture & Facade",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    description: "Modern architectural facade with landscaped gardens and automated biometric security gates."
  },
  {
    id: "gal-3",
    title: "Executive Twin Suite Bedroom",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
    description: "Double occupancy suite crafted with equal spaciousness, storage, and natural sunlight."
  },
  {
    id: "gal-4",
    title: "Sky Lounge & Common Living Room",
    category: "Lounge",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description: "Social sanctuary designed with Italian leather sofas, 75-inch cinema screen, and board game bar."
  },
  {
    id: "gal-5",
    title: "Artisan Dining Hall & Cafeteria",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
    description: "Hygienic buffet dining area serving hot, wholesome breakfasts, lunch, and dinner."
  },
  {
    id: "gal-6",
    title: "Silent Co-Working & Study Hub",
    category: "Study",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description: "Distraction-free focus space equipped with ultra-fast Wi-Fi, ergonomic chairs, and coffee station."
  },
  {
    id: "gal-7",
    title: "Attached Italian Marble Bathroom",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    description: "Premium sanitary ware, rain shower, instantaneous hot geyser, and LED touch mirror."
  },
  {
    id: "gal-8",
    title: "High-Tech Fitness Studio",
    category: "Amenities",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    description: "Cardio machines, free dumbbells, and yoga studio space exclusively for in-house residents."
  },
  {
    id: "gal-9",
    title: "Sunlit Trio Suite",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop",
    description: "Clean aesthetic with three independent wardrobes and study desks."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Aakash Verma",
    role: "Senior Software Engineer",
    companyOrCollege: "Google Gurgaon",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    roomType: "Presidential Private Studio",
    review: "I moved from Bangalore and searched for 2 weeks across CyberHub. Nothing came close to Aura Luxe. The Wi-Fi never drops during my US shift calls, the food tastes truly home-cooked, and the cleaning staff is polite and on time. Truly luxury hospitality at PG pricing.",
    stayDuration: "Resident since 1.5 Years"
  },
  {
    id: "test-2",
    name: "Dr. Tanya Sen",
    role: "Medical Resident",
    companyOrCollege: "Medanta Super Speciality",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    roomType: "Executive Twin Suite",
    review: "Safety and peace were my non-negotiables as a female healthcare professional working night duties. The biometric door locks, 24/7 guards, and respectful community gave my parents complete peace of mind. It feels like a boutique hotel every evening.",
    stayDuration: "Resident since 9 Months"
  },
  {
    id: "test-3",
    name: "Rohan Singhal",
    role: "MBA Scholar",
    companyOrCollege: "MDI Gurgaon",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    roomType: "Prestige Trio Residence",
    review: "The study floor is unbelievable. During placement season, we studied until 4 AM without disturbance, grabbed fresh coffee from the machine, and celebrated afterwards in the gaming lounge. Easily the best decision I made for my academic year.",
    stayDuration: "Resident since 1 Year"
  }
];

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  { name: "Sector 42-43 Rapid Metro Station", category: "Metro", distance: "450 meters", timeMin: "3 min walk" },
  { name: "DLF Cyber City / CyberHub", category: "Corporate Hub", distance: "4.2 km", timeMin: "10 min drive" },
  { name: "One Horizon Center & Two Horizon", category: "Corporate Hub", distance: "1.2 km", timeMin: "4 min drive" },
  { name: "MDI Gurgaon / Amity University campus bus", category: "University", distance: "3.5 km", timeMin: "8 min drive" },
  { name: "Galleria Market & Supermart 1", category: "Mall & Dining", distance: "1.8 km", timeMin: "5 min drive" },
  { name: "Fortis Memorial & Medanta Hospital", category: "Hospital", distance: "3.8 km", timeMin: "9 min drive" }
];

export const WHY_CHOOSE_US = [
  {
    title: "Zero Hidden Charges",
    desc: "All-inclusive monthly billing. Electricity, high-speed Wi-Fi, housekeeping, and maintenance bundled with clear transparency.",
    icon: "Receipt"
  },
  {
    title: "100% Move-In Ready",
    desc: "Just arrive with your luggage. Fresh crisp linens, toiletries, smart keys, and fully functioning utilities await your arrival.",
    icon: "Sparkles"
  },
  {
    title: "Boutique Hospitality Standard",
    desc: "Managed by certified hospitality professionals with dedicated on-site concierge, maintenance technicians, and estate managers.",
    icon: "Crown"
  },
  {
    title: "Elite Peer Community",
    desc: "Strict KYC verification ensures our residences house driven tech employees, management consultants, and premier university scholars.",
    icon: "Users"
  },
  {
    title: "Safe & Secure Ecosystem",
    desc: "Multi-tier biometric security checkpoints, background-verified staff, 24/7 CCTV surveillance, and SOS emergency response.",
    icon: "ShieldCheck"
  },
  {
    title: "Flexible Terms & Fast Refunds",
    desc: "Standard 30-day notice period and automated instant security deposit refund upon lease completion.",
    icon: "BadgePercent"
  }
];
