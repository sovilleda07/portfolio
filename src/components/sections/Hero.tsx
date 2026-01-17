import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <Section
      id="hero"
      size="hero"
      className="flex flex-col justify-center items-center text-center gap-8 relative"
    >
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
            <Button
              variant="primary"
              as="a"
              href="projects"
              className="group relative hover:-translate-y-0.5 w-full sm:w-auto"
            >
              View Projects
            </Button>

            <Button
              variant="ghost"
              as="a"
              href="contact"
              className="backdrop-blur-sm hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-3xl">
          keyboard_arrow_down
        </span>
      </div>
    </Section>
  );
}
