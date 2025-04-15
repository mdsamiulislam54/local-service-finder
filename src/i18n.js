import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from './languageData/translationEN.json'
import translationBN from './languageData/translationBN.json'

const resources = {
    en: {
      translation: translationEN
    },
    bn: {
      translation: translationBN
    }
  };

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, 
      },
})
export default i18n;
