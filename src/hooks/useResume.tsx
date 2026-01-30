import { useTranslation } from 'react-i18next';

const RESUME_FILES = {
  es: 'Sonia_Villeda_CV_ES.pdf',
  en: 'Sonia_Villeda_CV_EN.pdf',
} as const;

type Language = keyof typeof RESUME_FILES;

export function useResume() {
  const { i18n } = useTranslation();

  const lang = (i18n.language as Language) ?? 'es';

  const filename = RESUME_FILES[lang] ?? RESUME_FILES.es;
  const url = `/resume/${filename}`;

  return {
    resumeURL: url,
    resumeFilename: filename,
  };
}
