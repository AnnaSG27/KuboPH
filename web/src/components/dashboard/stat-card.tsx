
type StatCardProps = {
  label: string;
  value: string;
  icon: string;
};

export default function StatCard({
  label,
  value,
  icon,
}: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{label}</p>
        <span className="text-2xl">{icon}</span>
      </div>

      <p className="mt-5 text-3xl font-bold text-[#173B62]">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        Información por configurar
      </p>
    </article>
  );
}
