"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsHighlight() {
  const { t } = useLanguage();

  const stats = [
    {
      num: t("stat_projects_num"),
      label: t("stat_projects_label"),
      sub: "Cap Cana, Punta Cana, Bayahibe, SD",
      highlight: "text-slate-900"
    },
    {
      num: t("stat_regions_num"),
      label: t("stat_regions_label"),
      sub: "0% IPI y 0% Transferencia",
      highlight: "text-red-600"
    },
    {
      num: t("stat_price_num"),
      label: t("stat_price_label"),
      sub: "Renta Vacacional Airbnb",
      highlight: "text-blue-700"
    },
    {
      num: t("stat_confotur_num"),
      label: t("stat_confotur_label"),
      sub: "Firma Digital y Notarización",
      highlight: "text-red-600"
    }
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y-0 divide-x-0 lg:divide-x divide-slate-100">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center px-4 pt-1"
          >
            <div className={"text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight " + item.highlight}>
              {item.num}
            </div>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-800">
              {item.label}
            </p>
            <p className="mt-1 text-[11px] text-slate-500 font-normal">
              {item.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
