import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language } from './i18n';
import { LanguageContext } from './language-context';

function getInitialLanguage(): Language {
  return localStorage.getItem('language') === 'sv' ? 'sv' : 'en';
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.meta.description);
    localStorage.setItem('language', language);
  }, [copy, language]);

  const value = useMemo(
    () => ({ language, setLanguage, copy }),
    [copy, language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
