import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmartAssistant from "@/components/SmartAssistant";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puentea RD | Asesoría Inmobiliaria & Inversión en República Dominicana",
  description: "Tu ruta a la prosperidad en República Dominicana. Asesoría integral para la diáspora con beneficios de la Ley CONFOTUR.",
  icons: {
    icon: "/assets/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={"scroll-smooth " + cormorant.variable + " " + outfit.variable}>
      <body className="bg-[#F8FAFC] text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <SmartAssistant />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
