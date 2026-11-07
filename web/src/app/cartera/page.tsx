
export default function CarteraPage() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm text-slate-500">
          Gestión / Cartera y pagos
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#173B62]">
          Cartera y pagos
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Consulta y administra las obligaciones y pagos de los inmuebles.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="text-3xl">💰</div>

        <h2 className="mt-4 text-lg font-semibold text-[#173B62]">
          Gestión de cartera
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Aquí construiremos el seguimiento de obligaciones,
          pagos, saldos pendientes y estados de cuenta.
        </p>
      </div>
    </section>
  );
}
