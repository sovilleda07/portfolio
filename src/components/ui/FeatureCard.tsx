type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  iconBg,
  iconColor = 'text-primary',
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/40 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-lg">
      <div
        className={`mb-6 flex size-12 items-center justify-center rounded-2xl ${iconBg} ${iconColor}`}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <h4 className="mb-2 text-xl font-bold">{title}</h4>

      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
}
