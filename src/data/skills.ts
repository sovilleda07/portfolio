export type SkillItemData = {
  icon: string;
  label: string;
  color: string;
};

export type SkillCategoryData = {
  icon: string;
  title: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
  skills: SkillItemData[];
};

export const SKILLS: SkillCategoryData[] = [
  {
    icon: 'web',
    title: 'Front-End',
    subtitle: 'Client Side',
    iconBg: 'bg-pink-100 dark:bg-pink-500/20',
    iconColor: 'text-pink-500',
    skills: [
      { icon: 'html', label: 'HTML5', color: 'text-orange-500' },
      { icon: 'css', label: 'CSS3 / SASS', color: 'text-blue-500' },
      {
        icon: 'javascript',
        label: 'JavaScript (ES6+)',
        color: 'text-yellow-500',
      },
      { icon: 'grid_view', label: 'Bootstrap', color: 'text-indigo-500' },
      { icon: 'flex_wrap', label: 'Tailwind', color: 'text-green-500' },
      { icon: 'code', label: 'React', color: 'text-cyan-500' },
    ],
  },
  {
    icon: 'dns',
    title: 'Back-End',
    subtitle: 'Server Side',
    iconBg: 'bg-purple-100 dark:bg-purple-500/20 ',
    iconColor: 'text-purple-500',
    skills: [
      { icon: 'terminal', label: 'Node.js', color: 'text-green-500' },
      {
        icon: 'settings_ethernet',
        label: 'Express.js',
        color: 'text-slate-600',
      },
      { icon: 'php', label: 'PHP', color: 'text-indigo-400' },
      { icon: 'diamond', label: 'Laravel', color: 'text-red-400' },
      { icon: 'api', label: 'REST APIs', color: 'text-blue-500' },
      { icon: 'deployed_code', label: 'Docker', color: 'text-sky-500' },
      { icon: 'commit', label: 'Git', color: 'text-red-500' },
    ],
  },
  {
    icon: 'database',
    title: 'Database',
    subtitle: 'Data Management',
    iconBg: 'bg-blue-100 dark:bg-blue-500/20',
    iconColor: 'text-blue-500',
    skills: [
      { icon: 'table_chart', label: 'MySQL', color: 'text-blue-700' },
      { icon: 'storage', label: 'PostgreSQL', color: 'text-blue-600' },
      { icon: 'dataset', label: 'MS SQL', color: 'text-red-600' },
      { icon: 'eco', label: 'MongoDB', color: 'text-green-600' },
    ],
  },
];
