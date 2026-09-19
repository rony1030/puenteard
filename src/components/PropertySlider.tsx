"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS } from "@/data/projects";
import { Bed, Bath, Maximize2, ArrowRight } from "lucide-react";

export default function PropertySlider() {
  const { t, lang } = useLanguage();
  const featured = PROJECTS.slice(0, 6);

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {t("gallery_subtitle")}
            </p>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-slate-900">
              {t("gallery_title")}
            </h2>
          </div>

          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors group"
          >
            <span>{t("gallery_btn_all")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid Cards - Entire Card is Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={"/proyectos/" + project.id}
                className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full cursor-pointer"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.confotur && (
                      <span className="text-[10px] font-bold uppercase bg-red-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                        CONFOTUR 0%
                      </span>
                    )}
                    {project.airbnbFriendly && (
                      <span className="text-[10px] font-bold uppercase bg-blue-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                        Airbnb ROI
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 text-[11px] font-semibold text-slate-800 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-slate-200">
                    {project.subLocation}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase text-blue-700">
                      {project.type}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mt-0.5">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                      {lang === "es" ? project.description_es : project.description_en}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5" />
                      <span>{project.bedrooms} {lang === "es" ? "Hab" : "Beds"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5" />
                      <span>{project.bathrooms} {lang === "es" ? "Baños" : "Baths"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{project.areaSqm} m²</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">
                        {t("gallery_from")}
                      </span>
                      <span className="text-lg font-bold text-slate-900">
                        {"USD $" + project.priceFrom.toLocaleString("en-US")}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-[#002170] text-slate-700 group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
