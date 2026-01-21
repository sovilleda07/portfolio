import type { SkillItemData } from '../../../data/skills';

type SkillItemProps = SkillItemData;

export function SkillItem({ icon, label, color }: SkillItemProps) {
  return (
    <div className="group flex items-center gap-5">
      <div
        className={`flex size-10 shrink-0 items-center justify-center ${color}`}
      >
        <span className="material-symbols-outlined text-[28px]">{icon}</span>
      </div>
      <span className="text-lg font-bold text-slate-700 dark:text-slate-200 transition-colors group-hover:text-current">
        {label}
      </span>
    </div>
  );
}
