import { useTranslation } from 'react-i18next';

export function useLanguage() {
  const { i18n } = useTranslation();

  function toggleLanguage() {
    const next = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('language', next);
  }

  return {
    language: i18n.language,
    toggleLanguage,
  };
}
