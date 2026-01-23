import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';
import { SectionHeader } from '../../ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../../data/projects';

const INITIAL_VISIBLE = 3;

export function Projects() {
  const { t } = useTranslation();

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_VISIBLE);

  const hasMoreProjects = projects.length > INITIAL_VISIBLE;

  return (
    <Section id="projects">
      <Container size="wide" padded={false}>
        <div className="mb-12 flex items-end justify-between px-4">
          <SectionHeader
            title={t('projects.title')}
            subtitle={t('projects.subtitle')}
            subtitleAs="h3"
            align="left"
            subtitleSpacing="none"
          />

          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3 md:flex"
          >
            {t('projects.github')}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-12 flex w-full justify-center text-center text-slate-500">
            {t('projects.empty')}
          </p>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMoreProjects && (
          <div className="mt-12 flex w-full justify-center">
            <Button
              variant="soft"
              size="md"
              radius="full"
              className="group inline-flex"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll
                ? t('projects.less_projects')
                : t('projects.more_projects')}
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-y-0.5">
                {showAll ? 'expand_less' : 'expand_more'}
              </span>
            </Button>
          </div>
        )}

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-bold text-primary"
          >
            {t('projects.github')}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </Container>
    </Section>
  );
}
