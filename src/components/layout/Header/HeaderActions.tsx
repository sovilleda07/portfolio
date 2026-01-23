import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../../ui/LanguageToggle';
import { ThemeToggle } from '../../ui/ThemeToggle';
import { Button } from '../../ui/Button';

export function HeaderActions() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <LanguageToggle />

      <ThemeToggle />

      <Button
        size="sm"
        variant="secondary"
        className="hidden shadow-lg transition-opacity sm:flex"
      >
        {t('nav.resume')}
      </Button>
    </div>
  );
}
