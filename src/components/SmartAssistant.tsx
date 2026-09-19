"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, MessageSquare, Sparkles, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SmartAssistant() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: lang === "es"
        ? "¡Hola! 👋 Soy el Asistente Virtual Inteligente de Puentea RD. Puedo ayudarte a consultar proyectos, beneficios de la Ley CONFOTUR o conectarte con Paola Caram. ¿Qué te gustaría saber?"
        : "Hello! 👋 I am the Puentea RD Smart AI Assistant. I can help you explore developments, CONFOTUR tax incentives, or connect with Paola Caram. How can I help you today?",
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", phone: "", email: "", region: "Punta Cana" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showLeadForm, leadSuccess]);

  const quickChips = [
    { label: "📜 ¿Qué es CONFOTUR?", query: "Que es la Ley CONFOTUR" },
    { label: "🏖️ Punta Cana", query: "Proyectos en Punta Cana" },
    { label: "🏙️ Santo Domingo", query: "Proyectos en Santo Domingo" },
    { label: "🇺🇸 Invertir desde USA", query: "Como invertir desde Estados Unidos" },
    { label: "📱 Contáctanos", query: "Deseo contactar un asesor" },
  ];

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputVal.trim();
    if (!textToSend) return;

    // Add user msg
    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    if (!queryText) setInputVal("");

    setTimeout(() => {
      const q = textToSend.toLowerCase();
      let response = "";

      if (q.includes("confotur") || q.includes("impuesto") || q.includes("ipi") || q.includes("exencion")) {
        response = "La Ley CONFOTUR 158-01 otorga exenciones extraordinarias:\n• 15 años de exención del 100% en impuesto IPI (1% anual).\n• 0% de impuesto de transferencia inmobiliaria (3% de ahorro directo).\n• 0% impuesto sobre la renta en alquileres vacacionales.";
      } else if (q.includes("punta cana") || q.includes("cap cana") || q.includes("bavaro") || q.includes("marina")) {
        response = "🏖️ En Punta Cana & Cap Cana contamos con proyectos de lujo como:\n• Marina Garden II (Cap Cana) — Desde US$ 630,000\n• Wave Garden (Zona Hotelera) — Desde US$ 350,000\n• Solari Bávaro — Desde US$ 189,000\nTodos con alta demanda en Airbnb y CONFOTUR.";
      } else if (q.includes("santo domingo") || q.includes("distrito") || q.includes("piantini")) {
        response = "🏙️ En Santo Domingo disponemos de Torre Piantini Luxury Residences y suites ejecutivas para renta corporativa con alta plusvalía.";
      } else if (q.includes("usa") || q.includes("exterior") || q.includes("diaspora") || q.includes("remoto") || q.includes("lejos")) {
        response = "🇺🇸 ¡El 100% de los trámites se pueden realizar a distancia! Asistimos a dominicanos y extranjeros en EE.UU., Puerto Rico y Europa con firma digital y pagos seguros por fideicomiso.";
      } else if (q.includes("paola") || q.includes("contacto") || q.includes("telefono") || q.includes("whatsapp") || q.includes("hablar")) {
        response = "📱 Puedes comunicarte de inmediato con Paola Caram:\n• WhatsApp: +1 (809) 299-5233\n• Email: paola.caram@ciasard.org.do";
      } else {
        response = "Gracias por tu consulta. En Puentea RD te brindamos acceso a más de 27 proyectos verificados con beneficios CONFOTUR. ¿Deseas que te pongamos en contacto con Paola Caram?";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 450);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSuccess(true);
    setShowLeadForm(false);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 bg-[#002170] hover:bg-blue-800 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-blue-400/30"
          aria-label="Abrir Asistente Virtual"
        >
          <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
            <Bot className="w-4 h-4 text-sky-300" />
          </div>
          <div className="text-left pr-1">
            <div className="text-xs font-bold flex items-center gap-1.5">
              Puentea AI <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            </div>
            <div className="text-[10px] text-blue-200 font-medium">Asistente Virtual</div>
          </div>
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[380px] h-[520px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#002170] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-500/30 border border-blue-400/40 flex items-center justify-center">
                <Bot className="w-5 h-5 text-sky-300" />
              </div>
              <div>
                <h3 className="text-xs font-bold">Puentea AI Assistant</h3>
                <p className="text-[10px] text-red-300 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> En línea • Inteligencia Inmobiliaria
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={"flex flex-col " + (msg.sender === "user" ? "items-end" : "items-start")}
              >
                <div
                  className={"px-3.5 py-2.5 rounded-2xl max-w-[85%] whitespace-pre-line leading-relaxed " + (
                    msg.sender === "user"
                      ? "bg-[#002170] text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm"
                  )}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">
                  {msg.sender === "user" ? "Tú" : "Puentea AI"}
                </span>
              </div>
            ))}

            {/* Quick Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.query)}
                  className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-2.5 py-1 rounded-full text-[11px] transition-colors shadow-xs"
                >
                  {chip.label}
                </button>
              ))}
              <button
                onClick={() => setShowLeadForm(true)}
                className="bg-red-50 hover:bg-red-100 border border-red-300 text-red-800 font-bold px-2.5 py-1 rounded-full text-[11px] transition-colors"
              >
                📝 Solicitar Dossier
              </button>
            </div>

            {/* Inline Lead Form */}
            {showLeadForm && (
              <form onSubmit={handleLeadSubmit} className="bg-white border border-slate-200 rounded-2xl p-3.5 space-y-2.5 shadow-sm">
                <p className="font-bold text-slate-900 text-xs">Recibir Dossier & Asesoría CONFOTUR</p>
                <input
                  type="text"
                  required
                  placeholder="Tu Nombre Completo *"
                  value={leadData.name}
                  onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Teléfono *"
                  value={leadData.phone}
                  onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg text-xs"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}

            {leadSuccess && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-3 text-red-800 text-xs space-y-2">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>¡Solicitud enviada!</span>
                </div>
                <p className="text-[11px]">Nos pondremos en contacto contigo a la brevedad.</p>
                <a
                  href={"https://wa.me/18092995233?text=" + encodeURIComponent("Hola Paola, acabo de solicitar el dossier en Puentea RD (" + leadData.name + ").")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-[11px] font-bold text-red-700 underline"
                >
                  Abrir WhatsApp ahora →
                </a>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribe tu duda sobre proyectos..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            />
            <button
              onClick={() => handleSend()}
              className="w-8 h-8 rounded-full bg-[#002170] hover:bg-blue-800 text-white flex items-center justify-center transition-transform hover:scale-105"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
