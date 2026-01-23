import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { FeatureCard } from '../ui/FeatureCard';

export function About() {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <Container size="wide" padded={false}>
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-16">
          <div className="flex flex-col gap-12">
            <div className="mx-auto max-w-175 text-center">
              <SectionHeader
                title={t('about.title')}
                subtitle={t('about.subtitle')}
                subtitleAs="h3"
              >
                <p className="text-slate-600 dark:text-slate-300 mb-10">
                  {t('about.description_first_line')}
                </p>

                <p className="text-slate-600 dark:text-slate-300">
                  {t('about.description_second_line')}
                </p>
              </SectionHeader>

              <div className="mt-8">
                <Button
                  variant="primary"
                  as="a"
                  href="www.linkedin.com/in/soniavilleda"
                  className="inline-flex hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    download
                  </span>
                  {t('about.download_cv')}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <FeatureCard
                icon="brush"
                title={t('about.feature.frontend.title')}
                description={t('about.feature.frontend.description')}
                iconBg="bg-gradient-to-br from-pink-100 to-pink-50 dark:from-primary/20 dark:to-primary/10"
                animation="animate-float"
              />

              <FeatureCard
                icon="terminal"
                title={t('about.feature.backend.title')}
                description={t('about.feature.backend.description')}
                iconBg="bg-gradient-to-br from-purple-100 to-purple-50 dark:from-secondary/20 dark:to-secondary/10"
                iconColor="text-secondary"
                animation="animate-float-slow"
              />

              <FeatureCard
                icon="layers"
                title={t('about.feature.ux.title')}
                description={t('about.feature.ux.description')}
                iconBg="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-500/20 dark:to-blue-500/10 "
                iconColor="text-blue-500"
                animation="animate-float-slower"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
