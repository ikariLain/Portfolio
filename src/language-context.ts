import { createContext } from 'react';
import type { Language, Translation } from './i18n';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: Translation;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
