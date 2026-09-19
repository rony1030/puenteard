"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Landmark, Handshake } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="asesoria" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-3"
          >
            <p className="text-xs font-bold tracking-widest text-red-700 uppercase">
              {t("about_subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              {t("about_title")}
            </h2>
            <Link
              href="#booking"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-800 pt-2"
            >
              {t("about_cta")} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-slate-600 text-sm sm:text-base font-normal leading-relaxed"
          >
            <p>{t("about_text1")}</p>
            <p>{t("about_text2")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-3.5">
                <Landmark className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Ley CONFOTUR 158-01</h4>
                  <p className="text-xs text-slate-500 mt-1">15 años sin impuesto a la propiedad (IPI) y 0% en impuesto de transferencia.</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-3.5">
                <Handshake className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Acompañamiento VIP</h4>
                  <p className="text-xs text-slate-500 mt-1">Trámite bancario remoto, notarización consular y entrega garantizada.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
