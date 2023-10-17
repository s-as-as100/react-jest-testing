import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      english: {
        translations: {
          "Welcome to FlixStock": "Welcome to FlixStock",
          "We offer a suite of products that help you enhance your customer's image experience at every touchpoint of their buying journey":
            "We offer a suite of products that help you enhance your customer's imageexperience at every touchpoint of their buying journey",
        },
      },
      french: {
        translations: {
          "Welcome to FlixStock": "Bienvenue sur FlixStock",
          "We offer a suite of products that help you enhance your customer's image experience at every touchpoint of their buying journey":
            "Nous proposons une suite de produits qui vous aident à améliorer l'expérience d'image de vos clients à chaque point de contact de leur parcours d'achat",
        },
      },
      german: {
        translations: {
          "Welcome to FlixStock": "Willkommen bei FlixStock",
          "We offer a suite of products that help you enhance your customer's image experience at every touchpoint of their buying journey":
            "Wir bieten eine Reihe von Produkten an, die Ihnen helfen, das Imageerlebnis Ihrer Kunden an jedem Berührungspunkt ihrer Kaufreise zu verbessern",
        },
      },
      hindi: {
        translations: {
          "Welcome to FlixStock": "फ़्लिक्सस्टॉक में आपका स्वागत है",
          "We offer a suite of products that help you enhance your customer's image experience at every touchpoint of their buying journey":
            "एक वर्ष से अधिक समय के उत्पाद के लिए, आपके पास जो छवियाँ हैं, वे आपके लिए अधिक मूल्यवान हैं",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
