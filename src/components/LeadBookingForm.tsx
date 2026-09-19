"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function LeadBookingForm() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "punta-cana",
    budget: "USD $150k - $250k",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <p className="text-xs font-bold tracking-widest text-red-700 uppercase">
            {t("booking_badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {t("booking_title")}
          </h2>
          <p className="text-slate-600 text-sm">
            {t("booking_subtitle")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-14 h-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto border border-red-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {lang === "es" ? "¡Solicitud Registrada con Éxito!" : "Request Successfully Received!"}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                {t("booking_success")}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs font-bold text-blue-700 hover:underline"
              >
                {lang === "es" ? "Enviar otra consulta" : "Submit another request"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {t("booking_name_label")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("booking_name_placeholder")}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {t("booking_email_label")}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t("booking_email_placeholder")}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {t("booking_phone_label")}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t("booking_phone_placeholder")}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {t("booking_region_label")}
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="punta-cana">Punta Cana / Cap Cana</option>
                    <option value="bayahibe">Bayahibe / Dominicus</option>
                    <option value="juan-dolio">Juan Dolio / Nueva Romana</option>
                    <option value="distrito-nacional">Santo Domingo (DN)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {t("booking_budget_label")}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="150k-250k">{t("booking_budget_1")}</option>
                    <option value="250k-450k">{t("booking_budget_2")}</option>
                    <option value="450k-1M">{t("booking_budget_3")}</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Respuesta en menos de 2 horas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                    <span>100% Confidencial</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#002170] hover:bg-blue-800 text-white font-bold text-xs px-7 py-3 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>{t("booking_btn_submit")}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
