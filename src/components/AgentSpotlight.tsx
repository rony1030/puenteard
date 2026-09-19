"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Mail, ShieldCheck, Award } from "lucide-react";

export default function AgentSpotlight() {
  const { t } = useLanguage();

  return (
    <section id="asesora" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Agent Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
          >
            <Image
              src="/assets/images/team/paola-caram.jpg"
              alt="Paola Caram"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Agent Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-5"
          >
            <div className="space-y-1.5">
              <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                {t("agent_badge")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                {t("agent_name")}
              </h2>
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider">
                {t("agent_role")}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t("agent_bio")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-center gap-3 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-red-600 shrink-0" />
                <span>Especialista Certificada en Ley CONFOTUR 158-01</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                <Award className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Acompañamiento Personalizado a la Diáspora</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/18092995233?text=Hola%20Paola,%20vi%20la%20p%C3%A1gina%20de%20Puentea%20RD%20y%20deseo%20asesor%C3%ADa."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("agent_btn_wa")}</span>
              </a>

              <a
                href="mailto:paola.caram@ciasard.org.do"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs px-6 py-3.5 rounded-xl transition-all"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{t("agent_btn_email")}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
