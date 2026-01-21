import type { ProjectColor } from '../data/projects';

export const projectColorStyles: Record<
  ProjectColor,
  {
    overlay: string;
    hoverText: string;
    tagBg: string;
    tagText: string;
  }
> = {
  primary: {
    overlay: 'bg-primary/10',
    hoverText: 'group-hover:text-primary',
    tagBg: 'bg-primary/10 dark:bg-primary/20',
    tagText: 'text-primary',
  },
  secondary: {
    overlay: 'bg-secondary/10',
    hoverText: 'group-hover:text-secondary',
    tagBg: 'bg-secondary/10 dark:bg-secondary/20',
    tagText: 'text-secondary',
  },
  blue: {
    overlay: 'bg-blue-500/10',
    hoverText: 'group-hover:text-blue-600',
    tagBg: 'bg-blue-500/10 dark:bg-blue-500/20',
    tagText: 'text-blue-600 dark:text-blue-400',
  },
  green: {
    overlay: 'bg-green-500/10',
    hoverText: 'group-hover:text-green-600',
    tagBg: 'bg-green-500/10 dark:bg-green-500/20',
    tagText: 'text-green-600 dark:text-green-400',
  },
  orange: {
    overlay: 'bg-orange-500/10',
    hoverText: 'group-hover:text-orange-600',
    tagBg: 'bg-orange-500/10 dark:bg-orange-500/20',
    tagText: 'text-orange-600 dark:text-orange-400',
  },
  yellow: {
    overlay: 'bg-yellow-400/10',
    hoverText: 'group-hover:text-yellow-500',
    tagBg: 'bg-yellow-400/10 dark:bg-yellow-400/20',
    tagText: 'text-yellow-500 dark:text-yellow-300',
  },
} as const;
