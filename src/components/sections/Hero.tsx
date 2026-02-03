import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section
      id="home"
      size="hero"
      className="flex flex-col justify-center items-center text-center gap-8 relative"
    >
      <Container>
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-sm shadow-sm mb-6 animate-slide-up-fade opacity-0">
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {t('hero.greeting')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-4 text-slate-900 dark:text-white animate-slide-up-fade opacity-0 stagger-1">
            {t('hero.title_first_line')} <br className="hidden md:block" />
            <span className="text-gradient animate-gradient-x">
              {t('hero.title_second_line')}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-6 animate-slide-up-fade opacity-0 stagger-2">
            {t('hero.subtitle')}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-medium leading-7 max-w-150 mx-auto mb-4 animate-slide-up-fade opacity-0 stagger-3">
            {t('hero.description')}
          </p>

          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-10 animate-slide-up-fade opacity-0 stagger-4">
            {t('hero.technologies')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full animate-slide-up-fade opacity-0 stagger-4">
            <Button
              variant="primary"
              as="a"
              href="#projects"
              className="group relative hover:-translate-y-0.5 w-full sm:w-auto"
            >
              {t('hero.projects')}
            </Button>

            <Button
              variant="ghost"
              as="a"
              href="#contact"
              className="backdrop-blur-sm hover:-translate-y-0.5 w-full sm:w-auto"
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </Container>

      <a
        href="#about"
        className="mt-16 md:mt-24 animate-bounce opacity-50 hover:opacity-80 transition-opacity"
      >
        <span className="material-symbols-outlined text-3xl">
          keyboard_arrow_down
        </span>
      </a>
    </Section>
  );
}
