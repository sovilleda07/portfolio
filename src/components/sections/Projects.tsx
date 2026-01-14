export function Projects() {
  return (
    <section id="projects" className="w-full max-w-7xl py-20">
      <div className="mb-12 flex items-end justify-between px-4">
        <div>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
            Portfolio
          </h2>
          <h3 className="text-3xl font-bold md:text-4xl">Featured Projects</h3>
        </div>

        <a
          href="#"
          className="hidden items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3 md:flex"
        >
          View Github
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-2">
          <div className="relative aspect-4/3 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-primary/10 mix-blend-overlay" />
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyGcaEm1lOtnM_lKtubPPq2TycwDJXl3kt9HeQQ9BaI_5-AtN2fmKqI7Nvr3HcovqiwS8mpdh0P3NcCd2OL3M-N2wltJMARNwrOvmUCIZ9AXk6_f2FvkfqiSoTq9eyBI5P66HhpEFwh1ZXZczXhxYS4tr3LtIKboJB2XHuuLZdUTDbRSStuSVGRmAvU0JDAD3CU8KPM5iNgA8jy7Cin1id8uuv_1XYlqVZ-2UHANpQQxUeR8FMxmH-lVsz5XZBL01AahVos3cw6uYc')",
              }}
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white">
                React E-commerce
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Frontend e-commerce application built with React, featuring
                dynamic components, routing, and basic state management.
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {['React', 'JavaScript', 'React Router', 'CSS'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary dark:bg-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover">
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
                View on GitHub
              </button>

              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
                Live Demo
              </button>
            </div>
          </div>
        </article>

        <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-2">
          <div className="relative aspect-4/3 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-secondary/10 mix-blend-overlay" />
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyGcaEm1lOtnM_lKtubPPq2TycwDJXl3kt9HeQQ9BaI_5-AtN2fmKqI7Nvr3HcovqiwS8mpdh0P3NcCd2OL3M-N2wltJMARNwrOvmUCIZ9AXk6_f2FvkfqiSoTq9eyBI5P66HhpEFwh1ZXZczXhxYS4tr3LtIKboJB2XHuuLZdUTDbRSStuSVGRmAvU0JDAD3CU8KPM5iNgA8jy7Cin1id8uuv_1XYlqVZ-2UHANpQQxUeR8FMxmH-lVsz5XZBL01AahVos3cw6uYc')",
              }}
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-secondary dark:text-white">
                Rock Paper Scissors (React)
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Interactive game built with React and Vite, focused on
                component-based architecture, state management, and user
                interaction.
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {['React', 'Vite', 'JavaScript', 'CSS'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary dark:bg-secondary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover">
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
                View on GitHub
              </button>

              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
                Live Demo
              </button>
            </div>
          </div>
        </article>
        <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-2">
          <div className="relative aspect-4/3 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-blue-500/10 mix-blend-overlay" />
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyGcaEm1lOtnM_lKtubPPq2TycwDJXl3kt9HeQQ9BaI_5-AtN2fmKqI7Nvr3HcovqiwS8mpdh0P3NcCd2OL3M-N2wltJMARNwrOvmUCIZ9AXk6_f2FvkfqiSoTq9eyBI5P66HhpEFwh1ZXZczXhxYS4tr3LtIKboJB2XHuuLZdUTDbRSStuSVGRmAvU0JDAD3CU8KPM5iNgA8jy7Cin1id8uuv_1XYlqVZ-2UHANpQQxUeR8FMxmH-lVsz5XZBL01AahVos3cw6uYc')",
              }}
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white">
                To-Do List (API)
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                RESTful API built with Node.js and Express that provides CRUD
                operations for managing tasks, demonstrating backend
                fundamentals and API design.
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {['Node.js', 'Express', 'REST API', 'JavaScript'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover">
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
                View on GitHub
              </button>

              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-400 transition-colors cursor-not-allowed opacity-50 hover:bg-slate-50 dark:border-white/20 dark:text-slate-500 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-[16px]">
                  visibility_off
                </span>
                No Demo
              </button>
            </div>
          </div>
        </article>
        <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-2">
          <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">
              movie
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-green-600 dark:text-white">
                Movie Database
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                A responsive movie discovery app that fetches data from TMDB
                API, featuring search functionality, category filtering, and
                detailed movie pages.
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {['Node.js', 'Express', 'REST API', 'JavaScript'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-green-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-600 dark:bg-green-500/20  dark:text-green-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover">
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
                View on GitHub
              </button>

              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
                Live Demo
              </button>
            </div>
          </div>
        </article>
        <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-2">
          <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">
              cloud
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-orange-600 dark:text-white">
                Weather Dashboard
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Real-time weather application providing current conditions and
                5-day forecasts for any city, utilizing OpenWeatherMap API and
                local storage for history.
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {['Node.js', 'Express', 'REST API', 'JavaScript'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-orange-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:bg-orange-500/20 dark:text-orange-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover">
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
                View on GitHub
              </button>

              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
                Live Demo
              </button>
            </div>
          </div>
        </article>
        <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-2">
          <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">
              chat
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-yellow-500 dark:text-white">
                Real-time Chat App
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                A full-stack chat application enabling real-time messaging using
                Socket.io, with user authentication and chat room functionality.
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {['Node.js', 'Express', 'REST API', 'JavaScript'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-yellow-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-500 dark:bg-yellow-400/20 dark:text-yellow-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover">
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
                View on GitHub
              </button>

              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
                Live Demo
              </button>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-12 flex w-full justify-center">
        <button className="group inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-sm font-bold text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-primary/50">
          Load More Projects
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-y-0.5">
            expand_more
          </span>
        </button>
      </div>

      <div className="mt-8 text-center md:hidden">
        <a
          href="#"
          className="inline-flex items-center gap-2 font-bold text-primary"
        >
          View Github
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
