import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../../ui/LanguageToggle';
import { ThemeToggle } from '../../ui/ThemeToggle';
import { Button } from '../../ui/Button';
import { useResume } from '../../../hooks/useResume';

export function HeaderActions() {
  const { t } = useTranslation();
  const { resumeURL, resumeFilename } = useResume();

  return (
    <div className="flex items-center gap-3">
      <LanguageToggle />

      <ThemeToggle />

      <Button
        as="a"
        href={resumeURL}
        download={resumeFilename}
        size="sm"
        variant="secondary"
        className="hidden shadow-lg transition-opacity sm:flex"
      >
        {t('nav.resume')}
      </Button>
    </div>
  );
}
