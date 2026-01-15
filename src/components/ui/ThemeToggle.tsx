import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 transition-all hover:bg-slate-100 dark:border-white/20 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <span className="material-symbols-outlined text-[18px]">
          light_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-[18px]">dark_mode</span>
      )}
    </button>
  );
}
