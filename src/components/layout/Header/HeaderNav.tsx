const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Contact'] as const;

export function HeaderNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV_ITEMS.map((label) => (
        <a
          key={label}
          href={label === 'Home' ? '#' : `#${label.toLocaleLowerCase()}`}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
