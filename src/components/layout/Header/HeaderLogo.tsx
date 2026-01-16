export function HeaderLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary text-white shadow-lg shadow-primary/30">
        <span className="material-symbols-outlined text-[20px]">code</span>
      </div>
      <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
        SV<span className="text-primary">.</span>
      </h2>
    </div>
  );
}
