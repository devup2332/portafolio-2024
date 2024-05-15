"use client";
import { I18nextProvider } from "react-i18next";
import i18n, { t } from "i18next";
import en from "../../public/translations/en/index.json";
import es from "../../public/translations/es/index.json";

i18n.init({
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development",
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

interface TranslationProps {
  children: React.ReactNode;
}
const TranslationProvider = ({ children }: TranslationProps) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
