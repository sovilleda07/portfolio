import { useLanguage } from '../../hooks/useLanguage';

export function LanguageToggle() {
  const { toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Switch language"
      className="flex size-9 items-center justify-center rounded-full bg-white/20 text-slate-700 transition-all hover:bg-white/40 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
    >
      <span className="material-symbols-outlined text-[18px]"> language </span>
    </button>
  );
}
