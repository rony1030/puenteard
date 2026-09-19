export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  title_es: string;
  title_en: string;
  content_es: string;
  content_en: string;
  projectPurchased: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Carlos & Elena Rodríguez",
    location: "Queens, New York (Diáspora)",
    rating: 5,
    title_es: "Compramos nuestro apartamento en Punta Cana desde NY sin complicaciones",
    title_en: "We purchased our Punta Cana condo from NY completely hassle-free",
    content_es: "Teníamos años soñando con tener nuestra propiedad en RD. El equipo de Puentea nos explicó el beneficio CONFOTUR y nos ahorramos miles de dólares en impuestos. El acompañamiento de Paola Caram fue impecable de principio a fin.",
    content_en: "We had been dreaming of owning property back home in DR for years. The Puentea team clearly explained the CONFOTUR tax exemption, saving us thousands in taxes. Paola Caram's guidance was truly world-class.",
    projectPurchased: "Marina Garden II"
  },
  {
    id: "t2",
    name: "Michael Sterling",
    location: "Miami, Florida (Inversionista)",
    rating: 5,
    title_es: "Excelente retorno en Airbnb y transparencia total",
    title_en: "Outstanding Airbnb rental yields and complete transparency",
    content_es: "Buscaba diversificar mi portafolio con bienes raíces en el Caribe. Puentea me presentó un análisis financiero detallado de ocupación en Punta Cana y la entrega se cumplió con los más altos estándares.",
    content_en: "I wanted to diversify my portfolio with Caribbean real estate. Puentea provided a crystal-clear financial breakdown of occupancy in Punta Cana, and delivery was executed to perfection.",
    projectPurchased: "Wave Garden"
  },
  {
    id: "t3",
    name: "Dra. Juana Morales",
    location: "Madrid, España (Diáspora)",
    rating: 5,
    title_es: "La mejor decisión para asegurar el retiro de mi familia",
    title_en: "The best decision to secure my family's future retirement",
    content_es: "Estando en Europa temía los trámites a distancia. Puentea se encargó de toda la verificación legal y firma remota. Me siento profundamente orgullosa de invertir de nuevo en mi patria.",
    content_en: "Living in Europe, I was hesitant about doing remote paperwork. Puentea handled all legal verifications and remote signing. I feel deeply proud to invest in my homeland.",
    projectPurchased: "Bayahibe Village"
  },
  {
    id: "t4",
    name: "Roberto Castillo",
    location: "Lawrence, Massachusetts (Diáspora)",
    rating: 5,
    title_es: "Asesoría seria, honesta y 100% enfocada en la diáspora",
    title_en: "Honest, reliable advice tailored specifically for the diaspora",
    content_es: "Lo que más valoro es que no te presionan; te guían con paciencia y te muestran las opciones reales que convienen según tus ingresos en EE.UU. Ya estoy recibiendo ingresos por renta vacacional.",
    content_en: "What I appreciated most was zero pressure; they patiently guided me through real options matching my US income. I am already collecting rental cash flow.",
    projectPurchased: "Solari Bávaro"
  }
];
