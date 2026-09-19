"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, MessageCircle } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo without any pill badge */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-36 sm:w-44 h-11">
              <Image
                src="/assets/brand/logo-primary.png"
                alt="Puentea RD Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {t("nav_home")}
            </Link>
            <Link
              href="/proyectos"
              className="text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {t("nav_projects")}
            </Link>
            <Link
              href="#regiones"
              className="text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {t("nav_regions")}
            </Link>
            <Link
              href="#asesoria"
              className="text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {t("nav_advisory")}
            </Link>
            <Link
              href="#asesora"
              className="text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {t("nav_agent")}
            </Link>
            <Link
              href="/admin"
              className="text-xs font-semibold text-slate-600 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {t("nav_crm")}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5">
              <button
                onClick={() => setLang("es")}
                className={"text-xs font-bold px-2.5 py-1 rounded-md transition-all " + (
                  lang === "es"
                    ? "bg-blue-700 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={"text-xs font-bold px-2.5 py-1 rounded-md transition-all " + (
                  lang === "en"
                    ? "bg-blue-700 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                EN
              </button>
            </div>

            {/* WhatsApp Primary Button */}
            <a
              href="https://wa.me/18092995233?text=Hola%20Paola,%20deseo%20asesor%C3%ADa%20para%20invertir%20en%20Rep%C3%BAblica%20Dominicana."
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === "es" ? "Contáctanos" : "Contact Us"}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-xs font-bold px-2.5 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" /> {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-24 px-6 pb-10 flex flex-col justify-between sm:hidden">
          <div className="space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-900 border-b border-slate-100 pb-3"
            >
              {t("nav_home")}
            </Link>
            <Link
              href="/proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-700 border-b border-slate-100 pb-3"
            >
              {t("nav_projects")}
            </Link>
            <Link
              href="#regiones"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-700 border-b border-slate-100 pb-3"
            >
              {t("nav_regions")}
            </Link>
            <Link
              href="#asesoria"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-700 border-b border-slate-100 pb-3"
            >
              {t("nav_advisory")}
            </Link>
            <Link
              href="#asesora"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-700 border-b border-slate-100 pb-3"
            >
              {t("nav_agent")}
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-700 border-b border-slate-100 pb-3"
            >
              {t("nav_crm")}
            </Link>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-100">
            <a
              href="https://wa.me/18092995233?text=Hola%20Paola,%20deseo%20asesor%C3%ADa%20para%20invertir%20en%20Rep%C3%BAblica%20Dominicana."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3.5 rounded-xl shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === "es" ? "Contáctanos" : "Contact Us"}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
