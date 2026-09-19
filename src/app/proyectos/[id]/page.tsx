"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS } from "@/data/projects";
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Maximize2, 
  ShieldCheck, 
  Check, 
  TrendingUp, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Building,
  DollarSign,
  Sparkles,
  Award
} from "lucide-react";

export default function ProyectoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang, t } = useLanguage();
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [leadSent, setLeadSent] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", phone: "", email: "" });

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  const whatsappMessage = encodeURIComponent(
    lang === "es"
      ? "Hola Paola, me interesa el proyecto \"" + project.name + "\" (USD $" + project.priceFrom.toLocaleString("en-US") + ") en " + project.subLocation + ". Quisiera recibir el dossier oficial, planos y disponibilidad."
      : "Hello Paola, I am interested in \"" + project.name + "\" (USD $" + project.priceFrom.toLocaleString("en-US") + ") in " + project.subLocation + ". I would like to receive the official dossier, floor plans, and availability."
  );

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSent(true);
  };

  const amenities = [
    "Piscina Tipo Resort & Área de Solárium",
    "Gimnasio Climatizado de Alta Gama",
    "Seguridad Privada 24/7 y Control de Acceso",
    "Parqueo Techado Asignado",
    "Ascensores de Última Generación",
    "Manejo de Alquiler Vacacional Airbnb Llave en Mano",
    "Área Social con Lounge & Terraza BBQ",
    "Cercanía Inmediata a Playas y Centros Comerciales"
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 bg-[#F8FAFC]">
      {/* Top Breadcrumb & Quick Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> {t("detail_back")}
        </Link>

        <div className="flex items-center gap-2">
          {project.confotur && (
            <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              CONFOTUR (0% Impuestos)
            </span>
          )}
          {project.airbnbFriendly && (
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Airbnb ROI {project.roiEstimated}
            </span>
          )}
        </div>
      </div>

      {/* Project Title Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
          <span>{project.code}</span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-blue-600" /> {project.subLocation}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">
              {project.name}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              {lang === "es" ? project.description_es : project.description_en}
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm text-left lg:text-right shrink-0">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              {t("detail_price_from")}
            </span>
            <span className="text-3xl sm:text-4xl font-extrabold text-blue-900">
              {"USD $" + project.priceFrom.toLocaleString("en-US")}
            </span>
            <span className="text-xs text-red-600 font-semibold block mt-0.5">
              Planes de pago en cuotas durante construcción
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Gallery */}
      <div className="space-y-4">
        {/* Main Large Image */}
        <div className="relative w-full h-[380px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
          <Image
            src={galleryImages[selectedImgIndex] || project.image}
            alt={project.name}
            fill
            className="object-cover transition-all duration-300"
            priority
          />
        </div>

        {/* Thumbnail Selector Row */}
        {galleryImages.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {galleryImages.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImgIndex(idx)}
                className={"relative w-28 sm:w-36 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 " + (
                  selectedImgIndex === idx
                    ? "border-blue-700 ring-2 ring-blue-200 shadow-md"
                    : "border-slate-200 opacity-70 hover:opacity-100"
                )}
              >
                <Image
                  src={imgUrl}
                  alt={project.name + " miniatura " + (idx + 1)}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Key Specifications Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xs text-center">
          <Bed className="w-5 h-5 text-blue-700 mx-auto mb-1.5" />
          <p className="text-[11px] text-slate-500 font-bold uppercase">Habitaciones</p>
          <p className="text-sm font-extrabold text-slate-900 mt-0.5">{project.bedrooms}</p>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xs text-center">
          <Bath className="w-5 h-5 text-blue-700 mx-auto mb-1.5" />
          <p className="text-[11px] text-slate-500 font-bold uppercase">Baños</p>
          <p className="text-sm font-extrabold text-slate-900 mt-0.5">{project.bathrooms}</p>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xs text-center">
          <Maximize2 className="w-5 h-5 text-blue-700 mx-auto mb-1.5" />
          <p className="text-[11px] text-slate-500 font-bold uppercase">Área Total</p>
          <p className="text-sm font-extrabold text-slate-900 mt-0.5">{project.areaSqm} m²</p>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xs text-center">
          <Calendar className="w-5 h-5 text-blue-700 mx-auto mb-1.5" />
          <p className="text-[11px] text-slate-500 font-bold uppercase">Entrega</p>
          <p className="text-sm font-extrabold text-slate-900 mt-0.5">{project.delivery}</p>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xs text-center">
          <TrendingUp className="w-5 h-5 text-red-600 mx-auto mb-1.5" />
          <p className="text-[11px] text-slate-500 font-bold uppercase">ROI Proyectado</p>
          <p className="text-sm font-extrabold text-red-600 mt-0.5">{project.roiEstimated}</p>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xs text-center">
          <Building className="w-5 h-5 text-blue-700 mx-auto mb-1.5" />
          <p className="text-[11px] text-slate-500 font-bold uppercase">Tipo Inmueble</p>
          <p className="text-sm font-extrabold text-slate-900 mt-0.5">{project.type}</p>
        </div>
      </div>

      {/* Main Content: Details + Sticky Contact Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side (8 cols): Amenities, Tax Exemption & Financial Breakdown */}
        <div className="lg:col-span-8 space-y-8">
          {/* CONFOTUR Tax Incentive Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-50 text-red-700 rounded-2xl border border-red-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{t("detail_confotur_title")}</h3>
                <p className="text-xs text-red-700 font-bold">15 Años de Exención Fiscal Total (Ley 158-01)</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t("detail_confotur_desc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-start gap-2.5">
                <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong>0% Impuesto de Transferencia:</strong> Ahorro directo del 3% del valor total en el traspaso del título de propiedad.
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-start gap-2.5">
                <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong>0% Impuesto IPI (15 Años):</strong> Exención del 1% anual del Impuesto al Patrimonio Inmobiliario.
                </div>
              </div>
            </div>
          </div>

          {/* Airbnb & Rental Income Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl border border-blue-200">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{t("detail_airbnb_title")}</h3>
                <p className="text-xs text-blue-700 font-bold">Rentas en Dólares (USD) con Alta Ocupación</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t("detail_airbnb_desc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong>Ocupación Proyectada:</strong> Promedios superiores al 70% anual gracias a la alta demanda turística de la zona.
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong>Gestión Hotelera Turnkey:</strong> Administración profesional de check-in, limpieza y tarifas dinámicas.
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Checklist */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Amenidades & Características del Proyecto</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side (4 cols): Sticky Lead & Paola Caram Contact Box */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          {/* Main Action Box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">{t("detail_cta_title")}</h3>
              <p className="text-xs text-slate-500">
                {t("detail_cta_desc")}
              </p>
            </div>

            {/* Direct WhatsApp Paola Button */}
            <a
              href={"https://wa.me/18092995233?text=" + whatsappMessage}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t("detail_btn_whatsapp")}</span>
            </a>

            {/* Lead Capture Form */}
            <div className="pt-4 border-t border-slate-100">
              {leadSent ? (
                <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-xs font-bold text-red-900">¡Dossier Solicitado con Éxito!</p>
                  <p className="text-[11px] text-slate-600">Un asesor te enviará los planos y cotización por WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <p className="text-xs font-bold text-slate-800">Recibir Dossier & Planos por WhatsApp</p>
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre *"
                    value={leadData.name}
                    onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Teléfono *"
                    value={leadData.phone}
                    onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#002170] hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <span>{t("detail_btn_brochure")}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Agent Mini Card */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shrink-0">
                <Image
                  src="/assets/images/team/paola-caram.jpg"
                  alt="Paola Caram"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Paola Caram</p>
                <p className="text-[11px] text-slate-500">Directora de Asesoría & Handoff</p>
                <a href="tel:+18092995233" className="text-blue-700 font-semibold text-[11px] hover:underline">
                  +1 (809) 299-5233
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
