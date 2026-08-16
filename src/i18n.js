import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ru: {
    translation: {
      metaTitleDescriptions: {
        mainTitle: "Главная страница - Ructrak",
        mainDescription:
          "Ructrak — надежная площадка для спецтехники и качественных запчастей. Познакомьтесь с широким ассортиментом каталогов, выгодными ценами и быстрой доставкой.",
        catalogTitle: "Каталог - Ructrak",
        catalogDescription:
          "Каталог качественных и гарантированных запчастей и оборудования. Найдите нужный вам товар по доступным ценам и оформите заказ онлайн.",
        newsTitle: "Новости - Ructrak",
        newsDescription:
          "Будьте в курсе последних новостей Ructrak, полезных статей и важных технических событий.",
        galleryTitle: "Галерея - Ructrak",
        galleryDescription:
          "Галерея качественных фотографий продукции Ructrak и реализованных проектов.",
        vakansiTitle: "Вакансии - Ructrak",
        vakansiDescription:
          "Присоединяйтесь к команде Ructrak! Ознакомьтесь с актуальными вакансиями и вакансиями в нашей компании и отправьте свое резюме.",
        contactsTitle: "Контакты и общение - Ructrak",
        contactsDescription:
          "Контактные телефоны Ructrak, адрес и карта проезда. У вас есть вопросы? Связаться с нами!",
        collabTitle: "Партнерство и поставщики - Ructrak",
        collabDescription:
          "Установите взаимовыгодное партнерство с Ructrak. Специальные условия и предложения для поставщиков и партнеров.",
        serviceTitle: "Сервис и обслуживание - Ructrak",
        serviceDescription:
          "Профессиональный сервис и обслуживание спецтехники. Опытные специалисты и гарантия качества ремонта.",
        kreditsTitle: "Условия кредитования и лизинга - Ructrak",
        kreditsDescription:
          "Приобретайте специализированное оборудование на выгодных условиях кредитования и лизинга. Низкие процентные ставки и быстрое оформление заявок.",
      },
      header: {
        tagline: "производство и продажа автоспецтехники",
        workTime: "Время работы",
        modalworkTime1: "Пн-пт: с 8:00 до 18:00",
        modalworkTime2: "Сб-вс: Выходной",
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
        description1:
          "Наша компания занимает лидирующие позиции на рынке спецтехники: каждый день мы вносим свой вклад в развитие отечественного автопрома и укрепление российской экономики.",
        description2:
          "«РусТрак» является ведущим производителем коммерческого транспорта и специализированной техники. Наша работа признана и высоко оценена крупнейшими отечественными корпорациями и государственными структурами: мы поставляем спецтехнику для таких корпораций, как Газпром, Росатом, Россети, РСК «МИГ» и других.",
        more: "Подробнее",
      },
    },
  },
  uz: {
    translation: {
      metaTitleDescriptions: {
        mainTitle: "Bosh sahifa - Ructrak",
        mainDescription:
          "Ructrak — maxsus texnikalar va sifatli ehtiyot qismlarning ishonchli platformasi. Keng turdagi katalog, hamyonbop narxlar va tezkor yetkazib berish xizmati bilan tanishing.",
        catalogTitle: "Katalog - Ructrak",
        catalogDescription:
          "Sifatli hamda kafolatlangan ehtiyot qismlar va uskunalar katalogi. O'zingizga kerakli mahsulotni qulay narxlarda toping va onlayn buyurtma bering.",
        newsTitle: "Yangiliklar - Ructrak",
        newsDescription:
          "Ructrak kompaniyasining eng so'nggi yangiliklari, foydali maqolalari va texnika olamidagi muhim voqealardan xabardor bo'ling.",
        galleryTitle: "Galereya - Ructrak",
        galleryDescription:
          "Ructrak mahsulotlari hamda amalga oshirilgan loyihalarning yuqori sifatli fotosuratlari galereyasi.",
        vakansiTitle: "Vakansiyalar - Ructrak",
        vakansiDescription:
          "Ructrak jamoasiga qo'shiling! Kompaniyamizdagi dolzarb bo'sh ish o'rinlari bilan tanishing va o'z rezyumengizni yuboring.",
        contactsTitle: "Kontaktlar va Bog'lanish - Ructrak",
        contactsDescription:
          "Ructrak aloqa telefon raqamlari, manzil va joylashuv xaritasi. Savollaringiz bormi? Biz bilan bog'laning!",
        collabTitle: "Hamkorlik va Yetkazib beruvchilar - Ructrak",
        collabDescription:
          "Ructrak bilan o'zaro manfaatli hamkorlikni yo'lga qo'ying. Yetkazib beruvchilar va hamkorlar uchun maxsus shartlar hamda takliflar.",
        serviceTitle: "Servis va Texnik xizmat ko'rsatish - Ructrak",
        serviceDescription:
          "Maxsus texnikalar uchun professional servis va xizmat ko'rsatish. Tajribali mutaxassislar va sifatli ta'mirlash kafolati.",
        kreditsTitle: "Kredit va Lizing Shartlari - Ructrak",
        kreditsDescription:
          "Maxsus texnikalarni qulay kredit va lizing shartlari asosida xarid qiling. Past foiz stavkalari va tezkor rasmiylashtirish.",
      },
      header: {
        tagline: "maxsus avtotexnikalarni ishlab chiqarish va sotish",
        workTime: "Ish vaqti",
        modalworkTime1: "Dush-Jum: 8:00 dan 18:00 gacha",
        modalworkTime2: "Shan-Yak: Dam olish kuni",
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
      aboutCompanySection: {
        title: "Kompaniya haqida",
        description1:
          "Kompaniyamiz maxsus texnika bozorda yetakchi o'rinni egallaydi: har kuni biz mahalliy avtosanoatni rivojlantirishga munosib hissa qo'shib kelmoqdamiz.",
        description2:
          "«RusTrak» tijorat transporti va ixtisoslashtirilgan texnikalarning yetakchi ishlab chiqaruvchisi hisoblanadi. Faoliyatimiz yirik korporatsiyalar va davlat tuzilmalari tomonidan yuqori baholangan: biz Gazprom, Rosatom, Rosseti, RSK «MIG» va boshqa ko'plab yirik korporatsiyalar uchun maxsus texnikalar yetkazib beramiz.",
        more: "Batafsil",
      },
    },
  },
  en: {
    translation: {
      metaTitleDescriptions: {
        mainTitle: "Main Page - Ructrak",
        mainDescription:
          "Ructrak is a reliable platform for heavy machinery and quality spare parts. Explore our wide range of catalogs, great prices, and fast delivery.",
        catalogTitle: "Catalog - Ructrak",
        catalogDescription:
          "Catalog of high-quality and guaranteed spare parts and equipment. Find the product you need at affordable prices and place an order online.",
        newsTitle: "News - Ructrak",
        newsDescription:
          "Stay tuned for the latest Ructrak news, useful articles, and important technical updates.",
        galleryTitle: "Gallery - Ructrak",
        galleryDescription:
          "Gallery of high-quality photos featuring Ructrak products and completed projects.",
        vakansiTitle: "Vacancies - Ructrak",
        vakansiDescription:
          "Join the Ructrak team! Check out the current job openings at our company and send us your resume.",
        contactsTitle: "Contacts & Communication - Ructrak",
        contactsDescription:
          "Ructrak contact numbers, address, and location map. Have questions? Contact us!",
        collabTitle: "Partnership & Suppliers - Ructrak",
        collabDescription:
          "Establish a mutually beneficial partnership with Ructrak. Special terms and offers for suppliers and partners.",
        serviceTitle: "Service & Maintenance - Ructrak",
        serviceDescription:
          "Professional service and maintenance for heavy machinery. Experienced specialists and guaranteed repair quality.",
        kreditsTitle: "Credit & Leasing Terms - Ructrak",
        kreditsDescription:
          "Purchase specialized equipment on favorable credit and leasing terms. Low interest rates and quick application processing.",
      },
      header: {
        tagline: "production and sale of special vehicles",
        workTime: "Working hours",
        modalworkTime1: "Mon-Fri: 8:00 AM – 6:00 PM",
        modalworkTime2: "Sat-Sun: Closed",
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
      aboutCompanySection: {
        title: "About company",
        description1:
          "Our company holds a leading position in the specialized equipment market: every day we contribute to the development of the domestic automotive industry.",
        description2:
          "«RusTrak» is a leading manufacturer of commercial vehicles and specialized equipment. Our work is recognized and highly appreciated by major corporations and government agencies: we supply specialized equipment for corporations such as Gazprom, Rosatom, Rosseti, RAC «MiG», and others.",
        more: "Learn More",
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
