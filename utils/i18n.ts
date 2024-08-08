import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18nConfig from "@/i18n.config";


export default async function initTranslations(locale: any, namespaces: any) {
  const i18nInstance = createInstance();
  const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  };

  await i18nInstance
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: any) => {
        return import(`@/app/locales/${language}/${namespaces}.json`)
      })
    )
    .init({
      lng: locale,
      // fallbackLng: i18nConfig.defaultLocale,
      fallbackLng: "ja",
      detection: DETECTION_OPTIONS,
      supportedLngs: i18nConfig.locales,
      defaultNS: namespaces[0],
      fallbackNS: namespaces[0],
      ns: namespaces,
      preload: typeof window === "undefined" ? i18nConfig.locales : [],
    });

  return i18nInstance;
}
