
const modules = [
  { icon: "👥", name: "Personas", description: "Propietarios y residentes" },
  { icon: "🏢", name: "Inmuebles", description: "Unidades privadas y datos" },
  { icon: "💰", name: "Cartera", description: "Obligaciones y pagos" },
  { icon: "📄", name: "Documentos", description: "Archivos y comunicaciones" },
  { icon: "🧾", name: "Facturación", description: "Conceptos y cobros" },
  { icon: "📊", name: "Informes", description: "Indicadores y reportes" },
];

const indicators = [
  { label: "Inmuebles", value: "—", icon: "🏢" },
  { label: "Personas", value: "—", icon: "👥" },
  { label: "Cartera pendiente", value: "—", icon: "💰" },
  { label: "Documentos", value: "—", icon: "📄" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 md:flex">
      <aside className="w-full bg-[#102D50] p-6 text-white md:min-h-screen md:w-64">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#164B83]">
            K
          </div>
          <div>
            <h1 className="text-xl font-bold">Kubo PH</h1>
            <p className="text-[10px] tracking-widest text-blue-200">
              GESTIÓN INTEGRAL
            </p>
          </div>
        </div>

        <p className="mb-3 text-xs uppercase tracking-widest text-blue-200">
          Menú principal
        </p>

        <nav className="space-y-2">
          {[
            "Panel general",
            "Personas",
            "Inmuebles",
            "Cartera y pagos",
            "Facturación",
            "Finanzas",
            "Documentos",
            "Comunicaciones",
            "Informes",
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-lg px-4 py-3 text-sm ${
                index === 0
                  ? "bg-white font-semibold text-[#173B62]"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>

        <div className="mt-10 rounded-xl bg-white/10 p-4">
          <p className="text-sm font-semibold">Kubo PH</p>
          <p className="mt-1 text-xs text-blue-200">
            Plataforma de administración
          </p>
        </div>
      </aside>

      <section className="min-w-0 flex-1 p-5 md:p-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">
              Panel general / Noviembre 2026
            </p>
            <h2 className="mt-1 text-3xl font-bold text-[#173B62]">
              ¡Bienvenida a Kubo PH!
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Aquí comienza la gestión de tu copropiedad.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm">
            <span className="mr-2">🏢</span>
            Mi copropiedad
          </div>
        </header>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {indicators.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">{item.label}</p>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <p className="mt-5 text-3xl font-bold text-[#173B62]">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Información por configurar
              </p>
            </article>
          ))}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#173B62]">
              Módulos de gestión
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Accede a las diferentes áreas de administración.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <article
              key={module.name}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl">{module.icon}</span>
              <h4 className="mt-4 font-semibold text-[#173B62]">
                {module.name}
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                {module.description}
              </p>
            </article>
          ))}
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-center text-xs text-slate-400">
          Kubo PH · Gestión inteligente de propiedad horizontal
        </footer>
      </section>
    </main>
  );
}
