import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

const storedLanguage = localStorage.getItem("appLanguage");
const browserLanguage = navigator.language?.toLowerCase().startsWith("ar")
  ? "ar"
  : "en";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: storedLanguage || browserLanguage,
    supportedLngs: ["en", "ar"],
    ns: ["common"],
    defaultNS: "common",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

const setDocumentLanguageDirection = (language) => {
  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
};

setDocumentLanguageDirection(i18n.resolvedLanguage || i18n.language || "en");

i18n.on("languageChanged", (language) => {
  localStorage.setItem("appLanguage", language);
  setDocumentLanguageDirection(language);
});

export default i18n;
