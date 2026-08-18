import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { pt } from './locales/pt';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

// Mantém o atributo lang do <html> sincronizado com o idioma ativo,
// o que ajuda leitores de tela e mecanismos de busca.
const syncDocumentLanguage = (language) => {
  document.documentElement.lang = language?.startsWith('pt') ? 'pt-BR' : 'en';
};

syncDocumentLanguage(i18n.language);
i18n.on('languageChanged', syncDocumentLanguage);

export default i18n;
