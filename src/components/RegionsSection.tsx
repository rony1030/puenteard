"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { REGIONS } from "@/data/regions";
import { PROJECTS } from "@/data/projects";
import { Plane } from "lucide-react";

export default function RegionsSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="regiones" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">
            POLOS ESTRATÉGICOS
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {lang === "es" ? "Explora las Principales Regiones" : "Explore Key Investment Regions"}
          </h2>
          <p className="text-slate-600 text-sm">
            {lang === "es" 
              ? "Desde las codiciadas playas de Cap Cana hasta el centro financiero de Santo Domingo." 
              : "From the world-renowned beaches of Cap Cana to the financial center of Santo Domingo."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONS.map((region, index) => {
            const count = PROJECTS.filter((p) => p.region === region.id).length;
            return (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-red-700">
                      {region.tag}
                    </span>
                    <span className="text-xs font-bold text-blue-700">
                      {count} {lang === "es" ? "Proyectos" : "Projects"}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {region.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === "es" ? region.description_es : region.description_en}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Plane className="w-3.5 h-3.5 text-blue-600" />
                    <span>{region.airportDistance}</span>
                  </div>

                  <Link
                    href={"/proyectos?region=" + region.id}
                    className="w-full text-center block bg-white hover:bg-slate-100 text-slate-800 font-bold py-2.5 rounded-xl text-xs transition-colors border border-slate-200"
                  >
                    {lang === "es" ? "Ver Inmuebles en Zona" : "View Properties"}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
