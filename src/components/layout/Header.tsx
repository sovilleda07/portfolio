export function Header() {
  return (
    <div className="sticky top-4 z-50 w-full px-4 md:px-10">
      <header className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-3 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="flex items-center gap-2 md:justify-self-start">
          <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary text-white shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-[20px]">
              terminal
            </span>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            SV<span className="text-primary">.</span>
          </h2>
        </div>

        <nav className="hidden items-center gap-8 md:flex md:justify-self-center">
          <a
            href="#"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3 md:justify-self-end">
          <button
            aria-label="Switch language"
            className="flex size-9 items-center justify-center rounded-full bg-white/20 text-slate-700 transition-all hover:bg-white/40 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-[20px]">
              language
            </span>
          </button>

          <button
            aria-label="Toggle theme"
            className="flex size-9 items-center justify-center rounded-full bg-white/20 text-slate-700 transition-all hover:bg-white/40 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            onClick={() => document.documentElement.classList.toggle('dark')}
          >
            <span className="material-symbols-outlined text-[20px]">
              light_mode
            </span>
          </button>

          <button className="hidden h-9 items-center justify-center rounded-full bg-slate-900 px-5 text-xs font-bold text-white shadow-lg transition-opacity hover:opacity-90 dark:bg-white dark:text-slate-900 sm:flex">
            Resume
          </button>
        </div>
      </header>
    </div>
  );
}
