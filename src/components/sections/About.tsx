export function About() {
  return (
    <section id="about" className="w-full max-w-7xl py-20">
      <div className="glass-panel rounded-[2.5rem] p-8 md:p-16">
        <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-175 text-center">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              About me
            </h2>

            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Desing Meets Logic
            </h3>

            <p className="mb-10 text-slate-600">
              I believe great software is built at the intersection of usability
              and engineering. With a full stack background, I work across
              front-end and back-end to build web applications that are both
              intuitive to use and technically solid.
            </p>

            <p className="text-slate-600">
              My experience includes building user interfaces, developing APIs,
              integrating external services, and working with databases, alwats
              focusing on clean code, maintainability, and real-world
              requirements.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary/50"
              >
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                Download CV
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/40 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-lg">
              <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 text-primary">
                <span className="material-symbols-outlined">brush</span>
              </div>

              <h4 className="mb-2 text-xl font-bold">Front-end Development</h4>

              <p className="text-sm text-slate-500">
                Creating responsive and accessible user interfaces using React
                and modern JavaScript, with a strong focus on usability and
                clean component structure.
              </p>
            </div>

            <div className="rounded-3xl border border-white/40 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-lg">
              <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 text-secondary">
                <span className="material-symbols-outlined">terminal</span>
              </div>

              <h4 className="mb-2 text-xl font-bold">Backend Logic</h4>

              <p className="text-sm text-slate-500">
                Developing APIs and backend services with Node.js, handling
                business logic, data persistence, and integrations that support
                scalable applications.
              </p>
            </div>

            <div className="rounded-3xl border border-white/40 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-lg">
              <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-500">
                <span className="material-symbols-outlined">layers</span>
              </div>

              <h4 className="mb-2 text-xl font-bold">Product & UX Thinking</h4>

              <p className="text-sm text-slate-500">
                Applying UX principles to ensure applications are easy to use,
                performant, and aligned with real user and product needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
