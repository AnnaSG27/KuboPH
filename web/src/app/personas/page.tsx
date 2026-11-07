
export default function PersonasPage() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm text-slate-500">
          Gestión / Personas
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#173B62]">
          Personas
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Administra la información de propietarios, residentes y demás
          personas vinculadas a la copropiedad.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="text-3xl">👥</div>

        <h2 className="mt-4 text-lg font-semibold text-[#173B62]">
          Gestión de personas
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Aquí construiremos el registro, consulta, edición y gestión
          de las personas relacionadas con los inmuebles.
        </p>
      </div>
    </section>
  );
}
