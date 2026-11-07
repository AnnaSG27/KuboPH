
type ModuleCardProps = {
  name: string;
  description: string;
  icon: string;
};

export default function ModuleCard({
  name,
  description,
  icon,
}: ModuleCardProps) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <span className="text-3xl">{icon}</span>

      <h4 className="mt-4 font-semibold text-[#173B62]">
        {name}
      </h4>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>
    </article>
  );
}
