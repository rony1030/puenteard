"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote } from "lucide-react";

export default function ReviewsSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-bold tracking-widest text-red-700 uppercase">
            {t("reviews_badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {t("reviews_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-blue-200" />
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {lang === "es" ? item.title_es : item.title_en}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  "{lang === "es" ? item.content_es : item.content_en}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-900">{item.name}</p>
                <p className="text-[11px] text-slate-500">{item.location}</p>
                <span className="inline-block mt-2 text-[10px] font-semibold text-red-700">
                  • {item.projectPurchased}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
