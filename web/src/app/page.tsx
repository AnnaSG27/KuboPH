
import Header from "@/components/layout/header";
import StatCard from "@/components/dashboard/stat-card";
import ModuleCard from "@/components/dashboard/module-card";

const indicators = [
  { label: "Inmuebles", value: "—", icon: "🏢" },
  { label: "Personas", value: "—", icon: "👥" },
  { label: "Cartera pendiente", value: "—", icon: "💰" },
  { label: "Documentos", value: "—", icon: "📄" },
];

const modules = [
  {
    name: "Personas",
    description: "Propietarios y residentes",
    icon: "👥",
  },
  {
    name: "Inmuebles",
    description: "Unidades privadas y datos",
    icon: "🏢",
  },
  {
    name: "Cartera",
    description: "Obligaciones y pagos",
    icon: "💰",
  },
  {
    name: "Documentos",
    description: "Archivos y comunicaciones",
    icon: "📄",
  },
  {
    name: "Facturación",
    description: "Conceptos y cobros",
    icon: "🧾",
  },
  {
    name: "Informes",
    description: "Indicadores y reportes",
    icon: "📊",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {indicators.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="mb-5">
        <h2 className="text-xl font-bold text-[#173B62]">
          Módulos de gestión
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Accede a las diferentes áreas de administración.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard key={module.name} {...module} />
        ))}
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-5 text-center text-xs text-slate-400">
        Kubo PH · Gestión inteligente de propiedad horizontal
      </footer>
    </>
  );
}
