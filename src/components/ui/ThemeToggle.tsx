import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex size-9 items-center justify-center rounded-full bg-white/20 text-slate-700 transition-all hover:bg-white/40 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
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
