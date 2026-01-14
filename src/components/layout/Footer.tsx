export function Footer() {
  return (
    <footer className="w-full border-t border-white/20 bg-white/30 py-8 backdrop-blur-md dark:bg-black/20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-10">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          © 2026 Sonia Villeda. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/sovilleda07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
          >
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/soniavilleda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sovilleda07@gmail.com"
            className="text-sm font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
