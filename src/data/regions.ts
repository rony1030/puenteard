export interface Region {
  id: string;
  name: string;
  description_es: string;
  description_en: string;
  confotur: boolean;
  airportDistance: string;
  tag: string;
}

export const REGIONS: Region[] = [
  {
    id: "punta-cana",
    name: "Punta Cana & Cap Cana",
    description_es: "El destino turístico #1 del Caribe con más de 8 millones de visitantes al año, playas de arena blanca y los desarrollos más codiciados.",
    description_en: "The Caribbean's top tourism destination welcoming 8M+ international travelers annually, famous for pristine white beaches and luxury master developments.",
    confotur: true,
    airportDistance: "10 - 20 mins PUJ",
    tag: "Máxima Rentabilidad"
  },
  {
    id: "bayahibe",
    name: "Bayahibe & Dominicus",
    description_es: "El encanto del mar Caribe cristalino y atardeceres dorados frente al Parque Nacional del Este. Alta demanda de turismo europeo.",
    description_en: "Crystal clear Caribbean waters, golden sunsets, and eco-tourism next to Cotubanama National Park. High European demand.",
    confotur: true,
    airportDistance: "25 mins LRM / 50 mins PUJ",
    tag: "Paraíso & Plusvalía"
  },
  {
    id: "juan-dolio",
    name: "Juan Dolio & Nueva Romana",
    description_es: "Estratégicamente ubicado entre Santo Domingo y La Romana. Playas tranquilas, campos de golf PGA y escapada de fin de semana.",
    description_en: "Strategically located between Santo Domingo and La Romana. Serene beaches, PGA golf courses, and prime weekend retreat demand.",
    confotur: true,
    airportDistance: "30 mins SDQ",
    tag: "Conexión Estratégica"
  },
  {
    id: "distrito-nacional",
    name: "Santo Domingo (Distrito Nacional)",
    description_es: "El epicentro financiero y cultural del Caribe. Renta ejecutiva corporativa y alta plusvalía en Piantini, Naco y Bella Vista.",
    description_en: "The financial and cultural capital of the Caribbean. Strong corporate executive rental demand in Piantini, Naco, and Bella Vista.",
    confotur: true,
    airportDistance: "25 mins SDQ",
    tag: "Renta Corporativa"
  }
];
