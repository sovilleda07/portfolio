import type { SkillCategoryData } from '../../../data/skills';
import { SkillItem } from './SkillItem';

type SkillCardProps = SkillCategoryData;

export function SkillCard({
  icon,
  title,
  subtitle,
  iconBg,
  iconColor,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-[2.5rem] bg-white dark:bg-white/5 p-10 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="mb-10 flex flex-col gap-1">
        <div
          className={`mb-4 flex size-16 items-center justify-center rounded-3xl ${iconBg} ${iconColor}`}
        >
          <span className="material-symbols-outlined text-[28px]">{icon}</span>
        </div>

        <h3 className="text-[28px] font-bold leading-tight text-slate-900 dark:text-white ">
          {title}
        </h3>

        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
          {subtitle}
        </p>
      </div>

      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillItem key={skill.label} {...skill} />
        ))}
      </div>
    </div>
  );
}
