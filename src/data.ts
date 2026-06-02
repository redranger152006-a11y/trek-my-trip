import { TravelPackage, Testimonial, FAQ } from "./types";
import kodaiImage from "./assets/images/kodai_landscape_1780382054483.png";
import munnarImage from "./assets/images/munnar_tea_garden_1780382069300.png";
import kolukkumalaiImage from "./assets/images/kolukkumalai_sunrise_1780382086685.png";
import vattavadaImage from "./assets/images/vattavada_village_1780382101328.png";

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: "kodaikanal",
    name: "Kodaikanal Package",
    destination: "Kodaikanal",
    price: 2000,
    description: "Explore the princess of hill stations, enjoying scenic lake activities, deep pine woodlands, and pleasant mountain breeze.",
    longDescription: "Escape to Kodaikanal, a serene misty paradise nestled in the Palani Hills of Tamil Nadu. Known as the 'Princess of Hill Stations', Kodaikanal is loved for its cool star-shaped lake, vast pine forests, and breathtaking valley vistas. This package is specifically designed to let you experience the ultimate nature retreat, walking through silent woods, floating in gorgeous rowboats, and relaxing under the canopy of green hills.",
    duration: "2 Days / 1 Night",
    image: kodaiImage,
    rating: 4.8,
    reviewsCount: 128,
    highlights: [
      "Guided tour to Coaker's Walk with stunning valley overlooks",
      "Leisurely boat cruise in the starry Kodaikanal Lake",
      "Mystical hiking adventure in the Silent Pine Forest",
      "Visits to Pillar Rocks, Bryant Park, and Guna Caves",
      "Cozy accommodation with mountain views",
    ],
    inclusions: [
      "Comfy Accommodation (Double/Triple Sharing)",
      "Standard Pick & Drop from Kodai Road or Town",
      "Full Private Sightseeing Cab",
      "Expert Native Tour Driver/Guide",
      "All Parking & Entry Permits",
    ],
  },
  {
    id: "munnar",
    name: "Munnar Package",
    destination: "Munnar",
    price: 2000,
    description: "Immerse yourself in infinite emerald green tea estates, refreshing cascading waterfalls, and colonial hill station culture.",
    longDescription: "Venture into the endless green carpet of Munnar, Kerala's most beloved hill sanctuary. Situated at the confluence of three mountain streams, Munnar is famous for its sprawling, beautifully manicured tea gardens, colonial charm, and rare wildlife like the Nilgiri Tahr. This itinerary combines majestic sights with absolute peacefulness. Awaken to fragrant cardamom plantations, tour traditional tea museums, and listen to the distinct echoes at the iconic Echo Point.",
    duration: "2 Days / 1 Night",
    image: munnarImage,
    rating: 4.9,
    reviewsCount: 145,
    highlights: [
      "Breathtaking walks through rolling emerald green Tea Gardens",
      "Spot the rare Nilgiri Tahr at Eravikulam National Park",
      "Boating at Mattupetty Dam and scenic Kundala Lake",
      "Classic Echo Point fun and Photo Point stops",
      "Fascinating Insight into orthodox processing at the Tea Museum",
    ],
    inclusions: [
      "Premium Tea Estate Cottage Stay",
      "Daily Traditional Buffet Breakfast",
      "Dedicated Private Travel Sedan for sightseeing",
      "Fuel, toll charges, and driver allowances",
      "Complimentary Tea Garden entry passes",
    ],
  },
  {
    id: "kolukkumalai",
    name: "Kolukkumalai Package",
    destination: "Kolukkumalai",
    price: 1800,
    description: "Witness a spectacular sunrise above cloud levels and ride a 4x4 rugged Jeep through the highest organic tea gardens.",
    longDescription: "Buckle up for an unforgettable adventure to Kolukkumalai, home to the highest organic tea plantations in the world (standing at 7,900 feet). Famous for its rugged dirt-road terrain traversed by specialized 4x4 Jeeps, this destination offers an incomparable sunrise spectacle. Be prepared to stand above a dramatic sea of clouds, feeling the chilling crisp wind of the Western Ghats before hiking across old single-track paths with a panoramic backdrop of Tamil Nadu's plains.",
    duration: "1 Day / Sunrise Expedition",
    image: kolukkumalaiImage,
    rating: 4.95,
    reviewsCount: 196,
    highlights: [
      "Stunning 4x4 off-road mountain Jeep safari in the early morning",
      "Witnessing the breathtaking Golden Sunrise above the Clouds",
      "Scenic organic walking tour through the high altitude tea estate",
      "Historic World's Highest Tea Factory visit (established 1935)",
      "Unforgettable photo-ops with iconic mountain ridges",
    ],
    inclusions: [
      "Exciting Roundtrip 4x4 Mountain Jeep Safari",
      "Professional local trekking guide & safety coordinator",
      "Hot fresh Cardamom tea & traditional local breakfast",
      "Safety briefing & required hill entries",
      "Fresh spring water bottles",
    ],
  },
  {
    id: "vattavada",
    name: "Vattavada Package",
    destination: "Vattavada",
    price: 1390,
    description: "Discover the strawberry-picking capital and experience authentic organic village agricultural tourism in a pine forest valley.",
    longDescription: "Escape the standard tourist trails and enter Vattavada, a secluded agricultural valley situated near Munnar. Often called the 'Market of Kerala', this scenic village features terraced agricultural fields growing custom organic produce like strawberries, garlic, plums, and oranges. Our Vattavada trip combines warm village tourism with raw forest campsites. Participate in farm harvesting, experience off-grid luxury camping under tall pine clusters, and enjoy local tribal delicacies.",
    duration: "2 Days / 1 Night Stay",
    image: vattavadaImage,
    rating: 4.75,
    reviewsCount: 88,
    highlights: [
      "Strolling through organic terraced farms of Vattavada",
      "Fresh Strawberry harvesting and tasting (seasonal occurrence)",
      "Premium Forest Campsite Stay inside safe canvas dome tents",
      "Evening bonfire, musical acoustic night, and stargazing",
      "Scenic nature trekking to the remote valley viewpoint",
    ],
    inclusions: [
      "Cozy campsite tent accommodation with sleeping bags & mattresses",
      "Deluxe Traditional Dinner with BBQ & Village Breakfast",
      "Evening campfire setup and sound system access",
      "Expert native naturalist trek coordinator",
      "Farm entry permissions and local tax coverage",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev1",
    name: "Aravind Swamy",
    role: "Adventure Enthusiast",
    rating: 5,
    comment: "The Kolukkumalai sunrise trek organized by Trek My Trip was pure magic! Standing above the massive clouds at 7,900ft while drinking hot cardamom tea is an experience I will cherish forever. Extremely well-managed Jeep safari and guide.",
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: "rev2",
    name: "Nandini Krishnan",
    role: "Family Traveler",
    rating: 5,
    comment: "We booked the Munnar package for my family. The cottage was clean, surrounded by tea plantations, and our guide drove us safely to all spots. The price of ₹2,000 for this level of service is unbelievably affordable!",
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: "rev3",
    name: "Sanjay Kumar",
    role: "Solo Backpacker",
    rating: 5,
    comment: "Vattavada was a revelation! Trek My Trip offers great pricing. The forest camping experience, stargazing, and walking through vegetable farms were incredible. Highly recommend if you want to see standard villages in full peace.",
    date: "March 2026",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "How do we book the packages with Trek My Trip?",
    answer: "It is extremely easy! Simply browse our packages, select the one you love, click 'Book on WhatsApp', enter details like dates and traveler headcount, and send the automated message. Our team will instantly share itinerary details and handle your booking directly via WhatsApp.",
  },
  {
    question: "Do the starting prices feature hidden fees?",
    answer: "Absolutely not. Our starting prices are transparent list guides covering core elements like native transportation, permits, and guiding fees. If you require custom hotel upgrades, private vehicles, or BBQ adds, we customize the package and share the precise split with no hidden costs.",
  },
  {
    question: "Is transport provided from standard pickup spots?",
    answer: "Yes, we arrange highly convenient pickups from prominent local transit points (like Kodaikanal Road station, Madurai Airport, Munnar bus stand, or Coimbatore station) based on your custom requirements.",
  },
  {
    question: "Can we customize the duration and itinerary details?",
    answer: "Yes! All packages are fully tailorable. Our travel experts are available 24/7 on WhatsApp to adjust stay durations, mix destinations, add activities (like campfire, BBQ, high-altitude trekking), or fit specific groups.",
  },
];
