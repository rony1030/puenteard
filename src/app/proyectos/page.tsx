"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS } from "@/data/projects";
import { REGIONS } from "@/data/regions";
import { Bed, Bath, Maximize2, Search, ArrowRight, CheckCircle } from "lucide-react";

export default function ProyectosPage() {
  const { lang, t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [confoturOnly, setConfoturOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesRegion = selectedRegion === "all" || p.region === selectedRegion;
    const matchesConfotur = !confoturOnly || p.confotur;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.subLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesConfotur && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-3 text-left">
        <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">
          {lang === "es" ? "Catálogo Inmobiliario" : "Real Estate Catalog"}
        </p>
        <h1 className="text-3xl sm:text-5xl font-serif font-light text-slate-900">
          {lang === "es" ? "Proyectos Exclusivos en República Dominicana" : "Exclusive Developments in Dominican Republic"}
        </h1>
        <p className="text-slate-600 text-sm max-w-2xl">
          {lang === "es"
            ? "Explora propiedades de alta plusvalía y rentabilidad con beneficios de la Ley 158-01 CONFOTUR en las mejores zonas del país."
            : "Explore high-yield prime properties with CONFOTUR 158-01 tax exemptions across the finest locations."}
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === "es" ? "Buscar por proyecto o ubicación..." : "Search by development or location..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedRegion("all")}
              className={"px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap " + (
                selectedRegion === "all"
                  ? "bg-[#002170] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              {lang === "es" ? "Todas las Regiones" : "All Regions"}
            </button>
            {REGIONS.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRegion(r.id)}
                className={"px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap " + (
                  selectedRegion === r.id
                    ? "bg-[#002170] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* CONFOTUR Toggle */}
          <button
            onClick={() => setConfoturOnly(!confoturOnly)}
            className={"px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all whitespace-nowrap " + (
              confoturOnly
                ? "bg-red-50 border-red-300 text-red-700 font-extrabold shadow-sm"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            )}
          >
            <CheckCircle className={"w-4 h-4 " + (confoturOnly ? "text-red-600" : "text-slate-400")} />
            <span>Ley CONFOTUR 158-01</span>
          </button>
        </div>
      </div>

      {/* Grid Results - Entire Card is Clickable */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl p-8 space-y-3">
          <p className="text-base font-bold text-slate-700">
            {lang === "es" ? "No se encontraron proyectos con esos criterios." : "No developments match your criteria."}
          </p>
          <button
            onClick={() => { setSelectedRegion("all"); setConfoturOnly(false); setSearchTerm(""); }}
            className="text-xs font-bold text-blue-700 underline"
          >
            {lang === "es" ? "Restablecer Filtros" : "Reset Filters"}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={"/proyectos/" + project.id}
              className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer h-full"
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
          ))}
        </div>
      )}
    </div>
  );
}
