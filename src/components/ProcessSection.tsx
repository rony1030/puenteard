"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t("step1_title"),
      desc: t("step1_desc"),
    },
    {
      num: "02",
      title: t("step2_title"),
      desc: t("step2_desc"),
    },
    {
      num: "03",
      title: t("step3_title"),
      desc: t("step3_desc"),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-bold tracking-widest text-red-700 uppercase">
            {t("process_badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {t("process_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7 shadow-sm flex flex-col justify-between"
            >
              <div className="text-4xl font-serif font-extrabold text-blue-900/30">
                {step.num}
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
