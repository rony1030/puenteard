"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0A1E36] border-t border-slate-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
        <div className="md:col-span-4 space-y-4">
          <div className="relative w-64 sm:w-72 h-16 sm:h-20">
            <Image
              src="/assets/brand/logo-white.svg"
              alt="Puentea RD"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            {t("footer_desc")}
          </p>
        </div>

        <div className="md:col-span-2 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            {t("footer_quick_links")}
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-white transition-colors">{t("nav_home")}</Link></li>
            <li><Link href="#regiones" className="hover:text-white transition-colors">{t("nav_regions")}</Link></li>
            <li><Link href="/proyectos" className="hover:text-white transition-colors">{t("nav_projects")}</Link></li>
            <li><Link href="#asesoria" className="hover:text-white transition-colors">{t("nav_advisory")}</Link></li>
            <li><Link href="#asesora" className="hover:text-white transition-colors">{t("nav_agent")}</Link></li>
            <li><Link href="/admin" className="hover:text-amber-400 transition-colors">{t("nav_crm")}</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            {t("footer_legal")}
          </h4>
          <ul className="space-y-2 text-xs">
            <li><span className="hover:text-white cursor-pointer">{t("footer_confotur_info")}</span></li>
            <li><span className="hover:text-white cursor-pointer">{t("footer_privacy")}</span></li>
            <li><span className="hover:text-white cursor-pointer">{t("footer_terms")}</span></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            {t("footer_contact_title")}
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-400" />
              <a href="tel:+18092995233" className="hover:text-white transition-colors">{t("footer_phone")}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400" />
              <a href="mailto:paola.caram@ciasard.org.do" className="hover:text-white transition-colors">{t("footer_email")}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>{t("footer_address")}</span>
            </li>
          </ul>

          <div className="pt-2 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
        <p>© {new Date().getFullYear()} Puentea RD. {t("footer_rights")}</p>
        <p className="text-[11px]">Asesoría Inmobiliaria de Alta Gama & Diáspora Dominicana</p>
      </div>
    </footer>
  );
}
