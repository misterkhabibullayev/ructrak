import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
        searchPlaceholder: "Поиск...",
      },
      heroSection: {
        swiper1: {
          swiperTitle: "Шторные фургоны КАМАЗ 4308 в наличии",
          description: "Габаритные размеры надстройки 6200х2550х2850 мм.",
          price: "Цена: 5 500 000 руб.",
          requestCall: "Заказать звонок",
        },
        swiper2: {
          swiperTitle: "Бортовые автомобили со шторным механизмом",
          description:
            "Производство и поставка коммерческого автотранспорта, бортовых автомобилей, в том числе со сдвижными шторками и сдвижной крышей.",
          readMore: "Подробнее",
        },
        swiper3: {
          swiperTitle: "ООО «РусТрак»",
          description:
            "Производство и поставка спецтехники и коммерческого автотранспорта",
          openKatalog: "Открыть каталог",
          requestCall: "Заказать звонок",
        },
        swiper4: {
          swiperTitle: "КРАНЫ-МАНИПУЛЯТОРЫ НА БАЗЕ ШАССИ MCV/HCV",
          description:
            "Производство автотранспорта с крано-манипуляторными установками. Использование противоскользящих пластин, установка распределителя управления аутригерами, отбортовка профилем HOSSEN, монтажные пластины для основания КМУ, окраска платформы в цвет КМУ.",
          readMore: "Подробнее",
          requestCall: "Заказать звонок",
        },
        swiper5: {
          swiperTitle: "ТОПЛИВОЗАПРАВЩИКИ НА БАЗЕ ШАССИ MCV/HCV",
          description:
            "Производство и поставка цистерн для топлива объемом 8 и 6 куб. м. Алюминиевая трубопроводная обвязка, композитные напорно-всасывающие рукава, высокопроизводительное топливораздаточное оборудование.",
          readMore: "Подробнее",
          requestCall: "Заказать звонок",
        },
      },
      categorySection: {
        categoryTitle: "Категории",
        modelLength: "моделей",
      },
      aboutCompanySection: {
        title: "О компании",
        titleSpan: "Рустрак",
        description1:
          "Наша компания занимает лидирующие позиции на рынке спецтехники: каждый день мы вносим свой вклад в развитие отечественного автопрома и укрепление российской экономики.",
        description2:
          "«РусТрак» является ведущим производителем коммерческого транспорта и специализированной техники. Наша работа признана и высоко оценена крупнейшими отечественными корпорациями и государственными структурами: мы поставляем спецтехнику для таких корпораций, как Газпром, Росатом, Россети, РСК «МИГ» и других.",
      },
    },
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
        searchPlaceholder: "Qidirish...",
      },
      heroSection: {
        swiper1: {
          swiperTitle: "KAMAZ 4308 pardali furgonlari omborda",
          description: "Ustki tuzilishning o'lchamlari 6200x2550x2850 mm.",
          price: "Narxi: 5 500 000 rubl.",
          requestCall: "Qo'ng'iroq qilishni so'rang",
        },
        swiper2: {
          swiperTitle: "Pardali mexanizmli tekis yuk mashinalari",
          description:
            "Tijorat transport vositalari, platformali yuk mashinalari, shu jumladan, toymasin pardalar va toymasin tomli yuk mashinalari ishlab chiqarish va yetkazib berish.",
          readMore: "Ko'proq o'qish",
        },
        swiper3: {
          swiperTitle: "RusTrak MChJ",
          description:
            "Ixtisoslashtirilgan uskunalar va maxsus transport vositalarini ishlab chiqarish va yetkazib berish",
          openKatalog: "Katalogni ochish",
          requestCall: "Qo'ng'iroq qilishni so'rang",
        },
        swiper4: {
          swiperTitle:
            "MCV/HCV yuk mashinalariga asoslangan yuk mashinasiga o'rnatilgan kranlar",
          description:
            "Kran-manipulyator bloklari bilan jihozlangan transport vositalarini ishlab chiqarish. Sirpanmaydigan plitalardan foydalanish, orqa tashuvchilar uchun boshqaruv distribyutorini o'rnatish, HOSSEN profilini ochish, kran asosiga o'rnatish plitalari va kran rangiga mos keladigan platforma bo'yog'i.",
          readMore: "Ko'proq o'qish",
          requestCall: "Qo'ng'iroq qilishni so'rang",
        },
        swiper5: {
          swiperTitle:
            "MCV/HCV yuk mashinalariga asoslangan yoqilg'i tankerlari",
          description:
            "8 va 6 kubometrli yoqilg'i sisternalarini ishlab chiqarish va yetkazib berish. Alyuminiy quvurlar, kompozit so'rish va yetkazib berish shlanglari va yuqori samarali yoqilg'i tarqatish moslamasi.",
          readMore: "Ko'proq o'qish",
          requestCall: "Qo'ng'iroq qilishni so'rang",
        },
      },
      categorySection: {
        categoryTitle: "Kategoriyalar",
        modelLength: "ta model",
      },
    },
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
        searchPlaceholder: "Search...",
      },
      heroSection: {
        swiper1: {
          swiperTitle: "KAMAZ 4308 curtainside vans in stock",
          description: "Superstructure dimensions: 6200x2550x2850 mm.",
          price: "Price: 5,500,000 RUB",
          requestCall: "Request a call",
        },
        swiper2: {
          swiperTitle: "Flatbed trucks with curtainside mechanism",
          description:
            "Production and supply of commercial vehicles, flatbed trucks, including those with sliding curtains and sliding roofs.",
          readMore: "Read more",
        },
        swiper3: {
          swiperTitle: "RusTrak LLC",
          description:
            "Production and supply of specialized machinery and commercial vehicles",
          openKatalog: "Open catalog",
          requestCall: "Request a call",
        },
        swiper4: {
          swiperTitle: "Truck-mounted cranes based on MCV/HCV chassis",
          description:
            "Production of vehicles equipped with crane-manipulator units. Anti-slip plates, outrigger control distributor installation, HOSSEN profile edging, mounting plates for the crane base, and platform painting matching the crane color.",
          readMore: "Read more",
          requestCall: "Request a call",
        },
        swiper5: {
          swiperTitle: "Fuel tankers based on MCV/HCV chassis",
          description:
            "Production and supply of 8 and 6 cubic meter fuel tanks. Aluminum piping, composite suction and discharge hoses, and high-performance fuel dispensing equipment.",
          readMore: "Read more",
          requestCall: "Request a call",
        },
      },
      categorySection: {
        categoryTitle: "Categories",
        modelLength: "models",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
