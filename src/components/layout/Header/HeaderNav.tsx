import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../../../data/navigation';
import { useActiveSection } from '../../../hooks/useActiveSection';

export function HeaderNav() {
  const { t } = useTranslation();
  const activeSection = useActiveSection();

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV_ITEMS.map(({ labelKey, id }) => {
        const isActive = activeSection === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className={`relative text-sm font-medium transition-colors
              ${
                isActive
                  ? 'text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full'
                  : 'text-slate-600 hover:text-primary dark:text-slate-300'
              }`}
          >
            {t(labelKey)}
          </a>
        );
      })}
    </nav>
  );
}
