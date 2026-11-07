
export default function Header() {
  return (
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

      <button
        type="button"
        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm"
      >
        <span className="mr-2">🏢</span>
        Mi copropiedad
      </button>
    </header>
  );
}
