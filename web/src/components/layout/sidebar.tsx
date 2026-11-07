
const navigation = [
  { label: "Panel general", icon: "⌂", active: true },
  { label: "Personas", icon: "♙" },
  { label: "Inmuebles", icon: "▦" },
  { label: "Cartera y pagos", icon: "$" },
  { label: "Facturación", icon: "▤" },
  { label: "Finanzas", icon: "◈" },
  { label: "Documentos", icon: "▧" },
  { label: "Comunicaciones", icon: "✉" },
  { label: "Informes", icon: "▥" },
];

export default function Sidebar() {
  return (
    <aside className="w-full bg-[#102D50] p-6 text-white md:min-h-screen md:w-64 md:shrink-0">
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
        {navigation.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
              item.active
                ? "bg-white font-semibold text-[#173B62]"
                : "text-blue-100 hover:bg-white/10"
            }`}
          >
            <span className="w-5 text-center">{item.icon}</span>
            {item.label}
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
  );
}
