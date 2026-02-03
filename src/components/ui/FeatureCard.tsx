type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor?: string;
  animation: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  iconBg,
  iconColor = 'text-primary',
  animation,
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/40 bg-white/40 p-8 transition-all duration-300 group hover:-translate-y-2 hover:bg-white/60 hover:shadow-lg dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 ${animation}`}
    >
      <div
        className={`mb-6 flex size-12 items-center justify-center rounded-2xl group-hover:scale-110 ${iconBg} ${iconColor} transition-transform`}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <h4 className="mb-2 text-xl font-bold">{title}</h4>

      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {description}
      </p>
    </div>
  );
}
