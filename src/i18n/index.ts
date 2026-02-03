import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';

function detectInitialLanguage(): 'es' | 'en' {
  const savedLanguage = localStorage.getItem('language');

  if (savedLanguage === 'en' || savedLanguage === 'es') {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith('es')) {
    return 'es';
  }

  return 'en';
}

const initialLanguage = detectInitialLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
