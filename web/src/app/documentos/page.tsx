
export default function DocumentosPage() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm text-slate-500">
          Gestión / Documentos
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#173B62]">
          Documentos
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Organiza y consulta los documentos de la copropiedad.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="text-3xl">📄</div>

        <h2 className="mt-4 text-lg font-semibold text-[#173B62]">
          Gestión documental
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Aquí construiremos el almacenamiento, clasificación y consulta
          de archivos y documentos administrativos.
        </p>
      </div>
    </section>
  );
}
