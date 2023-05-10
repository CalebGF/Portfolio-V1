import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones en diferentes idiomas
import enTranslation from '../assets/languages/en.json';
import esTranslation from '../assets/languages/es.json';

// Configura i18next
i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Lenguaje predeterminado
    fallbackLng: 'en', // Lenguaje de respaldo si no se encuentra una traducción para el idioma actual
    resources: {
      en: {
        translation: enTranslation, // Importa las traducciones en inglés
      },
      es: {
        translation: esTranslation, // Importa las traducciones en español
      },
    },
  });

export default i18n;
