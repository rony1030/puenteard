"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";

export default function HeroLonepine() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Branding, Headline, Description & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Typographic Subtitle */}
          <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">
            {t("hero_badge")}
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif font-light tracking-tight text-slate-900 leading-[1.15]">
            {t("hero_title_prefix")}{" "}
            <span className="font-bold text-blue-900">
              {t("hero_title_accent")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
            {t("hero_description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-[#002170] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all"
            >
              <span>{t("hero_btn_explore")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/18092995233?text=Hola%20Paola,%20deseo%20asesor%C3%ADa%20para%20invertir%20en%20Rep%C3%BAblica%20Dominicana."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t("nav_contact") || (lang === "es" ? "Contáctanos" : "Contact Us")}</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5 text-red-700">
              <CheckCircle className="w-4 h-4 text-red-600" />
              <span>Ley 158-01 CONFOTUR (0% Impuestos)</span>
            </div>
            <div className="hidden sm:block text-slate-300">•</div>
            <div className="flex items-center gap-1.5 text-blue-700">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Asesoría Remota Diáspora</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Embedded Autoplay Muted Video */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 ring-1 ring-slate-200/80">
            <iframe
              src="https://www.youtube-nocookie.com/embed/IdX8tokE_dE?autoplay=1&mute=1&loop=1&playlist=IdX8tokE_dE&controls=1&modestbranding=1&playsinline=1&rel=0"
              title="Puentea RD Video Oficial"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-[11px] text-slate-500 text-center mt-2 font-medium">
            Video oficial de proyectos e inversión en República Dominicana
          </p>
        </motion.div>
      </div>
    </section>
  );
}
