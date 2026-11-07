
export default function InmueblesPage() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm text-slate-500">
          Gestión / Inmuebles
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#173B62]">
          Inmuebles
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Administra las unidades privadas y la información de cada inmueble.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="text-3xl">🏢</div>

        <h2 className="mt-4 text-lg font-semibold text-[#173B62]">
          Gestión de inmuebles
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Aquí construiremos el registro, consulta y administración
          de las unidades privadas de cada copropiedad.
        </p>
      </div>
    </section>
  );
}
