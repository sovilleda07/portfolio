import { Container } from '../layout/Container';

export function Hero() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-center items-center text-center gap-8 py-20 relative">
      <Container>
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-sm shadow-sm mb-6">
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Hi, I&apos;m Sonia 👋
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-4 text-slate-900 dark:text-white">
            Designing <br className="hidden md:block" />
            <span className="text-gradient animate-gradient-x">
              Digital Solutions
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-6">
            Full Stack Web Developer
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-medium leading-loose max-w-150 mx-auto mb-4">
            I build functional and scalable web applications, combining clean
            front-end interfaces with robust backend logic and API integrations.
          </p>

          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-10">
            React · JavaScript · Node.js · APIs · SQL
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a
              href="#projects"
              className=" group relative flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center rounded-full h-12 px-8 bg-white/50 dark:bg-white/10
                border border-white/20 hover:bg-white/80 dark:hover:bg-white/20 text-slate-900 dark:text-white
                text-sm font-bold transition-all backdrop-blur-sm hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-3xl">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
