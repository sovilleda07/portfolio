import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeader } from '../../ui/SectionHeader';
import { SkillCard } from './SkillCard';
import { SKILLS } from '../../../data/skills';
import { useTranslation } from 'react-i18next';

export function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills" size="tight">
      <Container size="wide" padded={false}>
        <div className="flex flex-col items-center gap-12">
          <SectionHeader
            title={t('skills.title')}
            subtitle={t('skills.subtitle')}
          >
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              {t('skills.description')}
            </p>
          </SectionHeader>

          <div className="grid w-full grid-cols-1 gap-6 px-4 lg:grid-cols-3 lg:gap-8">
            {SKILLS.map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
