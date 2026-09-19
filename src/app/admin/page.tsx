"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { 
  Building2, 
  Users, 
  Plus, 
  ArrowLeft, 
  MessageCircle, 
  Search, 
  Filter, 
  Download, 
  ShieldCheck, 
  TrendingUp, 
  Check, 
  X, 
  Mail, 
  Phone,
  Trash2,
  ExternalLink
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  projectInterest: string;
  budget: string;
  country: string;
  status: "Nuevo" | "Contactado" | "En Negociación" | "Calificado" | "Cerrado";
  date: string;
}

const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-01",
    name: "Carlos Méndez",
    phone: "+1 786 450 8921",
    email: "carlos.mendez@gmail.com",
    projectInterest: "Marina Garden II (Cap Cana)",
    budget: "$600,000 - $750,000",
    country: "Miami, USA",
    status: "Nuevo",
    date: "Hoy, 10:45 AM"
  },
  {
    id: "lead-02",
    name: "Elena Rosario",
    phone: "+1 646 322 1980",
    email: "elena.rosario@nyrealty.com",
    projectInterest: "Wave Garden (Bávaro)",
    budget: "$200,000 - $350,000",
    country: "New York, USA",
    status: "En Negociación",
    date: "Ayer, 3:20 PM"
  },
  {
    id: "lead-03",
    name: "David Sterling",
    phone: "+1 416 908 7741",
    email: "dsterling@investcorp.ca",
    projectInterest: "Solari Bávaro (Punta Cana)",
    budget: "$150,000 - $250,000",
    country: "Toronto, Canadá",
    status: "Contactado",
    date: "18 Sep, 2:15 PM"
  },
  {
    id: "lead-04",
    name: "María Gómez",
    phone: "+1 978 514 8832",
    email: "mgomez.boston@verizon.net",
    projectInterest: "Perla Residences (Bayahibe)",
    budget: "$180,000 - $300,000",
    country: "Boston, USA",
    status: "Calificado",
    date: "17 Sep, 11:30 AM"
  }
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"inventory" | "leads">("inventory");
  const [projectList, setProjectList] = useState<Project[]>(PROJECTS);
  const [leadList, setLeadList] = useState<Lead[]>(INITIAL_LEADS);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const [newProject, setNewProject] = useState({
    name: "",
    region: "punta-cana",
    subLocation: "",
    priceFrom: 195000,
    bedrooms: "2-3",
    bathrooms: "2",
    areaSqm: 120,
    confotur: true,
    airbnbFriendly: true,
    roiEstimated: "14% Anual",
    type: "Apartamento de Lujo"
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Project = {
      id: "puentea-custom-" + Date.now(),
      code: "PUENTEA-" + (projectList.length + 1).toString().padStart(3, '0'),
      name: newProject.name,
      slug: newProject.name.toLowerCase().replace(/\s+/g, "-"),
      image: "/assets/images/projects/marina-garden-2.jpg",
      gallery: [
        "/assets/images/projects/marina-garden-2.jpg",
        "/assets/images/projects/wave-garden.jpg",
        "/assets/images/projects/solari-bavaro.jpg"
      ],
      region: newProject.region,
      subLocation: newProject.subLocation || newProject.region.toUpperCase(),
      type: newProject.type,
      description_es: "Nuevo proyecto inmobiliario verificado registrado en la plataforma Puentea RD.",
      description_en: "New verified real estate development registered in Puentea RD platform.",
      priceFrom: Number(newProject.priceFrom),
      currency: "USD",
      confotur: newProject.confotur,
      airbnbFriendly: newProject.airbnbFriendly,
      delivery: "2026 - 2027",
      bedrooms: newProject.bedrooms,
      bathrooms: newProject.bathrooms,
      areaSqm: Number(newProject.areaSqm),
      roiEstimated: newProject.roiEstimated,
      
    };

    setProjectList([created, ...projectList]);
    setModalOpen(false);
    setNewProject({
      name: "",
      region: "punta-cana",
      subLocation: "",
      priceFrom: 195000,
      bedrooms: "2-3",
      bathrooms: "2",
      areaSqm: 120,
      confotur: true,
      airbnbFriendly: true,
      roiEstimated: "14% Anual",
      type: "Apartamento de Lujo"
    });
  };

  const handleStatusChange = (leadId: string, newStatus: Lead["status"]) => {
    setLeadList(leadList.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
  };

  const handleDeleteProject = (projectId: string) => {
    if (confirm("¿Estás seguro de eliminar este proyecto del inventario?")) {
      setProjectList(projectList.filter(p => p.id !== projectId));
    }
  };

  const exportLeadsCSV = () => {
    const headers = "Nombre,Telefono,Email,Proyecto,Presupuesto,Origen,Estado,Fecha\n";
    const rows = leadList.map(l => 
      `"${l.name}","${l.phone}","${l.email}","${l.projectInterest}","${l.budget}","${l.country}","${l.status}","${l.date}"`
    ).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Puentea_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredProjects = projectList.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.subLocation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLeads = leadList.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.projectInterest.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-700 mb-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Volver al Sitio Web
            </Link>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Panel CRM Inmobiliario
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Gestión de inventario de propiedades y seguimiento de prospectos para la Diáspora
            </p>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === "inventory" ? (
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#002170] hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" /> Agregar Proyecto
              </button>
            ) : (
              <button
                onClick={exportLeadsCSV}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Download className="w-4 h-4" /> Exportar CSV
              </button>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">Inventario Total</p>
              <p className="text-2xl font-extrabold text-slate-900">{projectList.length} Proyectos</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">Con CONFOTUR</p>
              <p className="text-2xl font-extrabold text-slate-900">
                {projectList.filter((p) => p.confotur).length} Exentos
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">Renta Airbnb</p>
              <p className="text-2xl font-extrabold text-slate-900">
                {projectList.filter((p) => p.airbnbFriendly).length} Aptos
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-700 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">Prospectos Activos</p>
              <p className="text-2xl font-extrabold text-slate-900">{leadList.length} Leads</p>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => { setActiveTab("inventory"); setSearchTerm(""); }}
            className={"px-4 py-2 rounded-xl text-xs font-bold transition-all " + (
              activeTab === "inventory"
                ? "bg-[#002170] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-200"
            )}
          >
            Inventario de Proyectos ({projectList.length})
          </button>
          <button
            onClick={() => { setActiveTab("leads"); setSearchTerm(""); }}
            className={"px-4 py-2 rounded-xl text-xs font-bold transition-all " + (
              activeTab === "leads"
                ? "bg-[#002170] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-200"
            )}
          >
            Gestión de Leads / Prospectos ({leadList.length})
          </button>
        </div>

        {/* Inventory View */}
        {activeTab === "inventory" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
            <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar proyecto o zona..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Mostrando {filteredProjects.length} de {projectList.length} proyectos
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 font-bold text-slate-600 border-b border-slate-200 uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Código</th>
                    <th className="p-4">Proyecto</th>
                    <th className="p-4">Ubicación</th>
                    <th className="p-4">Precio Desde</th>
                    <th className="p-4">CONFOTUR</th>
                    <th className="p-4">Airbnb ROI</th>
                    <th className="p-4">Entrega</th>
                    <th className="p-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProjects.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-mono font-bold text-slate-400 text-[11px]">{p.code}</td>
                      <td className="p-4 font-bold text-slate-900">
                        <Link href={"/proyectos/" + p.id} className="hover:text-blue-700 hover:underline flex items-center gap-1.5">
                          {p.name}
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </Link>
                      </td>
                      <td className="p-4 font-semibold text-slate-600">{p.subLocation}</td>
                      <td className="p-4 font-extrabold text-blue-900">
                        {"USD $" + p.priceFrom.toLocaleString("en-US")}
                      </td>
                      <td className="p-4">
                        {p.confotur ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                            CONFOTUR 0%
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[11px]">Estándar</span>
                        )}
                      </td>
                      <td className="p-4">
                        {p.airbnbFriendly ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            {p.roiEstimated || "Sí"}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[11px]">Residencial</span>
                        )}
                      </td>
                      <td className="p-4 font-medium text-slate-600">{p.delivery}</td>
                      <td className="p-4 text-right space-x-2">
                        <Link
                          href={"/proyectos/" + p.id}
                          className="inline-block text-blue-700 font-bold hover:underline"
                        >
                          Ver
                        </Link>
                        <button
                          onClick={() => handleDeleteProject(p.id)}
                          className="text-red-600 hover:text-red-800 p-1 rounded-lg hover:bg-red-50"
                          title="Eliminar Proyecto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Leads Management View */}
        {activeTab === "leads" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
            <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar lead por nombre, correo o proyecto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 outline-none"
                >
                  <option value="all">Todos los Estados</option>
                  <option value="Nuevo">Nuevo</option>
                  <option value="Contactado">Contactado</option>
                  <option value="En Negociación">En Negociación</option>
                  <option value="Calificado">Calificado</option>
                  <option value="Cerrado">Cerrado</option>
                </select>
              </div>

              <span className="text-xs text-slate-500 font-medium">
                {filteredLeads.length} prospectos registrados
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 font-bold text-slate-600 border-b border-slate-200 uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Prospecto</th>
                    <th className="p-4">Contacto</th>
                    <th className="p-4">Ubicación Cliente</th>
                    <th className="p-4">Proyecto de Interés</th>
                    <th className="p-4">Presupuesto</th>
                    <th className="p-4">Estado Pipeline</th>
                    <th className="p-4">Fecha</th>
                    <th className="p-4 text-right">Handoff WhatsApp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-bold text-slate-900">{lead.name}</td>
                      <td className="p-4 space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                          <Phone className="w-3 h-3 text-blue-600" />
                          <a href={"tel:" + lead.phone} className="hover:underline">{lead.phone}</a>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <a href={"mailto:" + lead.email} className="hover:underline">{lead.email}</a>
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-slate-700">{lead.country}</td>
                      <td className="p-4 font-bold text-blue-900">{lead.projectInterest}</td>
                      <td className="p-4 font-medium text-slate-600">{lead.budget}</td>
                      <td className="p-4">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead["status"])}
                          className={"text-[11px] font-bold px-2.5 py-1 rounded-lg border outline-none " + (
                            lead.status === "Nuevo" ? "bg-red-50 text-red-700 border-red-200" :
                            lead.status === "Contactado" ? "bg-blue-50 text-blue-700 border-blue-200" :
                            lead.status === "En Negociación" ? "bg-amber-50 text-amber-700 border-amber-200" :
                            lead.status === "Calificado" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                            "bg-slate-100 text-slate-700 border-slate-300"
                          )}
                        >
                          <option value="Nuevo">Nuevo</option>
                          <option value="Contactado">Contactado</option>
                          <option value="En Negociación">En Negociación</option>
                          <option value="Calificado">Calificado</option>
                          <option value="Cerrado">Cerrado</option>
                        </select>
                      </td>
                      <td className="p-4 text-[11px] text-slate-500 font-medium">{lead.date}</td>
                      <td className="p-4 text-right">
                        <a
                          href={"https://wa.me/" + lead.phone.replace(/[^0-9]/g, '') + "?text=" + encodeURIComponent("Hola " + lead.name + ", le contactamos de Puentea RD respecto a su interés en " + lead.projectInterest + ". ¿En qué horario le gustaría coordinar su asesoría?")}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg shadow-sm transition-all"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal Add Project */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Registrar Nuevo Proyecto</h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nombre del Proyecto</label>
                  <input
                    type="text"
                    required
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="Ej: Residencial Punta Sol"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Región</label>
                  <select
                    value={newProject.region}
                    onChange={(e) => setNewProject({ ...newProject, region: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  >
                    <option value="punta-cana">Punta Cana / Bávaro</option>
                    <option value="cap-cana">Cap Cana</option>
                    <option value="bayahibe">Bayahibe</option>
                    <option value="juan-dolio">Juan Dolio</option>
                    <option value="santo-domingo">Santo Domingo (DN)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sub-Ubicación</label>
                  <input
                    type="text"
                    required
                    value={newProject.subLocation}
                    onChange={(e) => setNewProject({ ...newProject, subLocation: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="Ej: Playa Bávaro, Marina"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Precio Desde (USD)</label>
                  <input
                    type="number"
                    required
                    value={newProject.priceFrom}
                    onChange={(e) => setNewProject({ ...newProject, priceFrom: Number(e.target.value) })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Metros Cuadrados (m²)</label>
                  <input
                    type="number"
                    required
                    value={newProject.areaSqm}
                    onChange={(e) => setNewProject({ ...newProject, areaSqm: Number(e.target.value) })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newProject.confotur}
                    onChange={(e) => setNewProject({ ...newProject, confotur: e.target.checked })}
                    className="rounded text-red-600 focus:ring-red-500 w-4 h-4"
                  />
                  <span>Ley CONFOTUR 158-01 (0% Impuestos)</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newProject.airbnbFriendly}
                    onChange={(e) => setNewProject({ ...newProject, airbnbFriendly: e.target.checked })}
                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <span>Airbnb Friendly</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-[#002170] hover:bg-blue-800 text-white rounded-xl shadow-sm"
                >
                  Guardar Proyecto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
