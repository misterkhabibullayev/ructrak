import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
      header: {
        tagline: "производство и продажа автоспецтехники",
        workTime: "Время работы",
        address: "г. Нижний Новгород ул. Торфяная, 35",
        forRegions: "Для регионов:",
        nizhnyNovgorod: "Нижний Новгород:",
        catalog: "Каталог",
        aboutUs: "О нас",
        media: "Медиа",
        service: "Сервис",
        news: "Новости",
        contacts: "Контакты",
        searchPlaceholder: "Поиск..."
      }
    }
  },
  uz: {
    translation: {
      header: {
        tagline: "maxsus avtotexnikalarni ishlab chiqarish va sotish",
        workTime: "Ish vaqti",
        address: "Nijniy Novgorod sh., Torfyanaya ko'ch., 35",
        forRegions: "Hududlar uchun:",
        nizhnyNovgorod: "Nijniy Novgorod:",
        catalog: "Katalog",
        aboutUs: "Biz haqimizda",
        media: "Media",
        service: "Servis",
        news: "Yangiliklar",
        contacts: "Kontaktlar",
        searchPlaceholder: "Qidirish..."
      }
    }
  },
  en: {
    translation: {
      header: {
        tagline: "production and sale of special vehicles",
        workTime: "Working hours",
        address: "Nizhny Novgorod, Torfyanaya st., 35",
        forRegions: "For regions:",
        nizhnyNovgorod: "Nizhny Novgorod:",
        catalog: "Catalog",
        aboutUs: "About us",
        media: "Media",
        service: "Service",
        news: "News",
        contacts: "Contacts",
        searchPlaceholder: "Search..."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;