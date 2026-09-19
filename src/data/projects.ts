export interface Project {
  id: string;
  code: string;
  name: string;
  slug: string;
  image: string;
  gallery: string[];
  region: string;
  subLocation: string;
  type: string;
  description_es: string;
  description_en: string;
  priceFrom: number;
  currency: string;
  confotur: boolean;
  airbnbFriendly: boolean;
  delivery: string;
  bedrooms: string;
  bathrooms: string;
  areaSqm: number;
  roiEstimated: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "puentea-001-pc",
    code: "PUENTEA 001 - PC",
    name: "Marina Garden II",
    slug: "marina-garden-2",
    image: "/assets/images/projects/marina-garden-2.jpg",
    gallery: [
      "/assets/images/projects/marina-garden-2.jpg",
      "/assets/images/projects/wave-garden.jpg",
      "/assets/images/projects/crystal-garden.jpg"
    ],
    region: "punta-cana",
    subLocation: "La Marina, Cap Cana",
    type: "Apartamento de Lujo",
    description_es: "Exclusivo proyecto residencial en el corazón de La Marina, Cap Cana. Condominios de lujo con acabados de alta gama, muelle privado y acceso a la marina deportiva más prestigiosa del Caribe.",
    description_en: "Exclusive luxury residential development located in the heart of Cap Cana Marina. Premium condos with top-tier finishes, private slips, and access to the Caribbean's premier yachting destination.",
    priceFrom: 630000,
    currency: "USD",
    confotur: true,
    airbnbFriendly: true,
    delivery: "Diciembre 2025",
    bedrooms: "2 - 3",
    bathrooms: "2.5 - 3.5",
    areaSqm: 145,
    roiEstimated: "11.5% Anual",
    featured: true
  },
  {
    id: "puentea-002-pc",
    code: "PUENTEA 002 - PC",
    name: "Wave Garden",
    slug: "wave-garden",
    image: "/assets/images/projects/wave-garden.jpg",
    gallery: [
      "/assets/images/projects/wave-garden.jpg",
      "/assets/images/projects/marina-garden-2.jpg",
      "/assets/images/projects/level-business-center.jpg"
    ],
    region: "punta-cana",
    subLocation: "Zona Hotelera, Bávaro",
    type: "Condo-Hotel Turístico",
    description_es: "Ubicado en el epicentro turístico de Punta Cana. Diseñado para maximizar el retorno de inversión por alquiler vacacional en Airbnb con amenidades tipo resort y piscinas infinitas.",
    description_en: "Situated in the vibrant core of Punta Cana's hotel strip. Engineered to maximize vacation rental yields on Airbnb with resort-style amenities and infinite pools.",
    priceFrom: 350000,
    currency: "USD",
    confotur: true,
    airbnbFriendly: true,
    delivery: "Junio 2026",
    bedrooms: "1 - 2",
    bathrooms: "1 - 2",
    areaSqm: 88,
    roiEstimated: "13.2% Anual",
    featured: true
  },
  {
    id: "puentea-003-pc",
    code: "PUENTEA 003 - PC",
    name: "Solari Bávaro",
    slug: "solari-bavaro",
    image: "/assets/images/projects/crystal-garden.jpg",
    gallery: [
      "/assets/images/projects/crystal-garden.jpg",
      "/assets/images/projects/wave-garden.jpg",
      "/assets/images/projects/marina-garden-2.jpg"
    ],
    region: "punta-cana",
    subLocation: "Bávaro, Punta Cana",
    type: "Apartamentos Modernos",
    description_es: "Desarrollo residencial a escasos minutos de la playa de Bávaro. Excelente precio de entrada, amenidades familiares completas y alta plusvalía garantizada.",
    description_en: "Modern residential community located just minutes from Bavaro Beach. Ideal entry price point, full family amenities, and solid long-term equity growth.",
    priceFrom: 189000,
    currency: "USD",
    confotur: true,
    airbnbFriendly: true,
    delivery: "Marzo 2026",
    bedrooms: "1 - 2",
    bathrooms: "1 - 2",
    areaSqm: 72,
    roiEstimated: "12.0% Anual",
    featured: true
  },
  {
    id: "puentea-004-by",
    code: "PUENTEA 004 - BY",
    name: "Bayahibe Village Eco-Residences",
    slug: "bayahibe-village",
    image: "/assets/images/projects/marina-garden-2.jpg",
    gallery: [
      "/assets/images/projects/marina-garden-2.jpg",
      "/assets/images/projects/crystal-garden.jpg"
    ],
    region: "bayahibe",
    subLocation: "Dominicus, Bayahibe",
    type: "Villas & Condos Ecológicos",
    description_es: "Enclave exclusivo en Bayahibe rodeado de aguas turquesas y el Parque Nacional Cotubanamá. Destino preferido por el turismo europeo por su tranquilidad y belleza natural.",
    description_en: "Exclusive eco-residence enclave in Bayahibe surrounded by turquoise waters and Cotubanama National Park. Prime European tourist destination known for tranquility.",
    priceFrom: 165000,
    currency: "USD",
    confotur: true,
    airbnbFriendly: true,
    delivery: "Noviembre 2025",
    bedrooms: "1 - 3",
    bathrooms: "1 - 2.5",
    areaSqm: 68,
    roiEstimated: "10.8% Anual",
    featured: true
  },
  {
    id: "puentea-005-jd",
    code: "PUENTEA 005 - JD",
    name: "Playa Nueva Romana Golf & Beach",
    slug: "playa-nueva-romana",
    image: "/assets/images/projects/wave-garden.jpg",
    gallery: [
      "/assets/images/projects/wave-garden.jpg",
      "/assets/images/projects/marina-garden-2.jpg"
    ],
    region: "juan-dolio",
    subLocation: "Juan Dolio / San Pedro",
    type: "Torre de Playa & Golf",
    description_es: "A tan solo 45 minutos del Aeropuerto Internacional de Las Américas y de Santo Domingo. Complejo integral con campo de golf PGA, marina y club de playa privado.",
    description_en: "Only 45 minutes from Santo Domingo and Las Americas International Airport. Master-planned beachfront resort featuring a PGA golf course, private marina, and beach club.",
    priceFrom: 179000,
    currency: "USD",
    confotur: true,
    airbnbFriendly: true,
    delivery: "Agosto 2026",
    bedrooms: "2 - 3",
    bathrooms: "2",
    areaSqm: 110,
    roiEstimated: "9.5% Anual",
    featured: false
  },
  {
    id: "puentea-006-dn",
    code: "PUENTEA 006 - DN",
    name: "Torre Piantini Luxury Residences",
    slug: "torre-piantini",
    image: "/assets/images/projects/level-business-center.jpg",
    gallery: [
      "/assets/images/projects/level-business-center.jpg",
      "/assets/images/projects/crystal-garden.jpg"
    ],
    region: "distrito-nacional",
    subLocation: "Piantini, Santo Domingo",
    type: "Torre Residencial Ejecutiva",
    description_es: "Ubicación insuperable en el corazón financiero y gastronómico de Santo Domingo. Acabados en mármol, doble altura, helipuerto y lounge ejecutivo para renta corporativa.",
    description_en: "Premier location in the heart of Santo Domingo's financial and culinary district. Marble finishes, double-height ceilings, rooftop lounge, and high corporate rental appeal.",
    priceFrom: 342000,
    currency: "USD",
    confotur: true,
    airbnbFriendly: true,
    delivery: "Enero 2026",
    bedrooms: "1 - 3",
    bathrooms: "1.5 - 3.5",
    areaSqm: 95,
    roiEstimated: "10.0% Anual",
    featured: false
  }
];
