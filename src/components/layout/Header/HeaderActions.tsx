import { ThemeToggle } from '../../ui/ThemeToggle';
import { Button } from '../../ui/Button';

export function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      <button
        aria-label="Switch language"
        className="flex size-9 items-center justify-center rounded-full bg-white/20 text-slate-700 transition-all hover:bg-white/40 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      >
        <span className="material-symbols-outlined text-[18px]">
          {' '}
          language{' '}
        </span>
      </button>

      <ThemeToggle />

      <Button
        size="sm"
        variant="secondary"
        className="hidden shadow-lg transition-opacity sm:flex"
      >
        Resume
      </Button>
    </div>
  );
}
