import { Button } from '../../ui/Button';
import type { ProjectData } from '../../../data/projects';
import { projectColorStyles } from '../../../styles/projectColors';

type ProjectCardProps = {
  project: ProjectData;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    image,
    icon,
    imageOverlayColor = 'primary',
    tags,
    githubUrl,
    liveUrl,
    disabledDemo,
  } = project;

  const styles =
    projectColorStyles[imageOverlayColor ?? projectColorStyles.primary];

  return (
    <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-2 animate-project-enter">
      <div className="relative aspect-4/3 overflow-hidden">
        {image ? (
          <>
            <div
              className={`absolute inset-0 z-10 ${styles.overlay} mix-blend-overlay`}
            />
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-100 dark:bg-slate-800">
            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">
              {icon}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <h4
            className={`mb-2 text-xl font-bold text-slate-900 transition-colors ${styles.hoverText} dark:text-white`}
          >
            {title}
          </h4>
          <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${styles.tagBg} ${styles.tagText}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
          <Button
            as="a"
            href={githubUrl}
            variant="primary"
            size="sm"
            radius="lg"
            className="flex-1"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            View on GitHub
          </Button>

          <Button
            as="a"
            href={liveUrl}
            variant="outline"
            size="sm"
            radius="lg"
            disabled={disabledDemo || !liveUrl}
            className="flex-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">
              {disabledDemo ? 'visibility_off' : 'open_in_new'}
            </span>
            {disabledDemo ? 'No Demo' : 'Live Demo'}
          </Button>
        </div>
      </div>
    </article>
  );
}
