import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ru: {
    translation: {
      metaTitleDescriptions: {
        mainTitle: "Завод производитель автоспецтехники «РусТрак»",
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
        search: "Поиск",
        favorites: "Избранное",
        cart: "Тележка",
        language: "Язык",
        requesCall: "Запросить звонок",
        homeLink: "Рустрак - Главная страница",
      },
      modal: {
        aboutRuctrak: "О компании ООО «Рустрак»",
        news: "Новости",
        partners: "Наши партнёры",
        production: "Производство",
        suppliers: "Поставщикам и партнёрам",
        reviews: "Отзывы",
        certifikat: "Сертификаты",
        vakansi: "Вакансии",
        leasing: "Кредит и лизинг",
        photogallery: "Фотогалерея",
        video: "Видео",
        promo: "Рекламные материалы",
        info: "Информационные материалы",
        remont: "Ремонт",
      },
      requestModal: {
        modalTitleZakaz: "Заказать звонок",
        modalTitleKommer: "Получить коммерческое предложение",
        modalP: "Наш менеджер свяжется с Вами в ближайшее время",
        inputLabel1: "Ваше имя *",
        inputPlacholder1: "Иван",
        inputError: "Поле обязательно для заполнения",
        inputLabel2: "Телефон *",
        agreeText: "Я согласен <0>на обработку персональных данных</0>",
        submitBtnCall: "Оставить заявку",
        emailInputLabel: "E-mail *",
        submitBtnKp: "Получить КП",
        uspeshna: "Успешно!",
        uspeshnaP:
          "Ваши данные направлены нашему менеджеру. Мы свяжемся с вами в ближайшее время!",
        close: "Закрыть",
        uvedam: "Подобрать аналогичный грузовик",
        submitBtnVariant: "Получить варианты",
      },
      notFound: {
        sahifaTopilmadi: "Страница не найдена",
        sahifaOchirilgan:
          "Пожалуйста воспользуйтесь навигацией или формой поиска, чтобы найти интересующую Вас информацию.",
        homepagegaqaytish: "Перейти в каталог",
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
      scrollSlider: {
        linePart: [
          {
            id: 1,
            name: "Конструкторское бюро",
            text: "Собственное конструкторское бюро позволяет реализовать индивидуальные проекты клиентов.",
          },
          {
            id: 2,
            name: "Разработка",
            text: "Все проекты разработаны в соответствии с мануалами производителей транспортных средств.",
          },
          {
            id: 3,
            name: "Производственная база",
            text: "Собственная производственная база позволяет значительно снизить себестоимость продукции, повышая её конкурентоспособность.",
          },
          {
            id: 4,
            name: "Гарантия",
            text: "Собственное конструкторское бюро позволяет реализовать индивидуальные проекты клиентов. Гарантия на надстройки и работы соответствует гарантии на шасси.",
          },
          {
            id: 5,
            name: "Сервис",
            text: "Сервисное обслуживание: широкая партнёрская сервисная сеть на всей территории Российской Федерации.",
          },
        ],
      },
      recommendedSection: {
        recTitle: "Рекомендуемая продукция",
        cena: "Цена по запросу",
        podrobne: "Подробнее",
        poluchit: "Получить КП",
        prev: "Кнопка «Назад»",
        next: "Кнопка «Далее»",
      },
      newsSection: {
        Title: "Новости",
        readMore: "Подробнее",
      },
      feedbackForm: {
        title: "ОСТАЛИСЬ ВОПРОСЫ?",
        subtitle:
          "Оставьте свои контактные данные, и мы перезвоним Вам в ближайшее время",
        nameLabel: "Ваше имя",
        namePlaceholder: "Иван",
        inputError: "Поле обязательно для заполнения",
        phoneLabel: "Телефон",
        phonePlaceholder: "+998",
        submitBtn: "Отправить",
        policyText:
          "Нажимая на кнопку отправить <0>Вы соглашаетесь на обработку персональных данных</0>",
        successTitle: "УСПЕШНО!",
        successDescription:
          "Ваши данные направлену нашему менеджеру. Мы свяжемся с вами в ближайшее время!",
      },
      footer: {
        phoneFax: "Тел/факс",
        email: "Email",
        address: "г. Нижний Новгород ул. Торфяная, 35",
        requestCallBtn: "Заказать звонок",
        aboutTitle: "О нас",
        aboutCompany: "О компании ООО «Рустрак»",
        news: "Новости",
        partners: "Наши партнёры",
        production: "Производство",
        suppliers: "Поставщикам и партнёрам",
        reviews: "Отзывы",
        certificates: "Сертификаты",
        vacancies: "Вакансии",
        creditLeasing: "Кредит и лизинг",
        service: "Сервис",
        repair: "Ремонт",
        contacts: "Контакты",
        articles: "Полезные статьи",
        mediaTitle: "Медиа",
        photoGallery: "Фотогалерея",
        video: "Видео",
        promoMaterials: "Рекламные материалы",
        disclaimer:
          "Информация на сайте не является публичной офертой, определяемой согласно статье 435 Гражданского кодекса РФ и носит исключительно информационный характер.",
      },
      breadCrumbs: {
        main: "Главная",
        catalog: "Каталог",
        news: "Новости",
        contacts: "Контакты",
        service: "Сервис и гарантии",
        suppliers: "Поставщикам и партнёрам",
        leasing: "Кредит и лизинг",
        vacancies: "Вакансии",
      },
      contactPage: {
        title: "Контакты производителя автоспецтехники РусТрак",
        adress: "603035 г. Нижний Новгород, ул. Торфяная, д. 35",
        tel1: "Нижний Новгород:",
        tel2: "Для регионов:",
        email: "Электронная почта:",
        remonplan: "Запись на техническое обслуживание:",
        employees: "Сотрудники",
      },
      newsPage: {
        title: "Новости РусТрак",
        showMore: "Показать ещё",
        backBtn: "Back",
        nextBtn: "Next",
      },
      newsDetailes: {
        back: "Назад",
        moreNews: "Ещё новости",
      },
      servicePage: {
        title: "Сервис по гарантийному ремонту автоспецтехники РусТрак",
        text: "После приобретения продукции в ООО «Рустрак» Вы всегда можете обратиться за помощью по любым вопросам, связанными с гарантийным обслуживанием, настройкой и ремонтом транспорного средства, поставкой дополнительного обурудования, а также внесением доработок под задачи клиента. Вы можете обратиться за технической поддержкой и консультацией по эксплуатации в любое время и в любой срок после заключения контракта.",
        asks: "Как получить поддержку?",
        li1: "Заполнить Рекламационный акт с внесением подписи ответственного лица и печати организации, подробно описать характер отказа. Приложить фото: шильды в пассажирской двери, шильды вышедшего из строя оборудования, первая страница ПТС.",
        li2: "Сфотографировать неисправности, а также общий вид изделия в целом.",
        li3: "Отправить заполненный акт, копию ПТС, фотографии неисправностей по электронной почте: kb1@rtrf.ru",
        text2:
          "После этого специалисты гарантийной службы свяжутся с владельцем и предложат варианты организации ремонта.",
        text3:
          "Любые вопросы относительно гарантийного обслуживания техники производства «РусТрак» можно задать по телефону 8 (831) 225-00-55 (доб 610) или по электронной почте: kb1@rtrf.ru",
      },
      suppliersPage: {
        mainTitle: "Поставщикам и партнёрам",
        aboutTitle: "ООО «Рустрак» приглашает к сотрудничеству.",
        p1: "Наша компания 17 лет работает на рынке производства и продажи коммерческого транспорта и спецтехники и прочно занимает ведущие позиции на российском рынке.",
        p2: "Мы приглашаем к сотрудничеству поставщиков комплектующих, как одно из основных направлений развития компании.",
        p3: "Наша компания заинтересована в долгосрочном и эффективном сотрудничестве.",
        p4: "Мы ценим в партнёрах:",
        li1: "Высококачественную продукцию;",
        li2: "Гибкую ценовую политику;",
        li3: "Регулярное информирование об ассортименте и складских остатках продукции;",
        li4: "Минимальные сроки поставки.",
        p5: "Основные принципы ООО «РусТрак» при взаимодействии с партнёрами:",
        li5: "- Доверие,",
        li6: "- честность,",
        li7: "- взаимопомощь;",
        p6: "Долгосрочное сотрудничество на взаимовыгодной основе. Обязательность и точность выполнения договоренностей. Соблюдение международных норм деловой этики.",
        p7: "Всегда рады Вам!",
      },
      leasingPage: {
        mainTitle: "Кредит и лизинг на автоспецтехнику компании РусТрак",
        p1: "Компания Рустрак предоставляет возможность покупки автоспецтехники в кредит и в лизинг. Мы работаем со всеми банками и лизинговыми компаниями. Помните, Вы можете выбрать любую лизинговую компанию, которая Вас устроит.",
        title1: "Основные условия лизинга",
        p2: "Сумма аванса 5-30% от стоимости техники. Удорожание объекта лизинга в год на 8-9% Срок выплаты лизинговых платежей от 6-ти месяцев до 5-ти лет. После полного расчёта по лизингу техника переходит в собственность Вашей фирмы.",
        title2: "Преимущества лизинговых схем:",
        p3: "Максимальная отсрочка платежа. Ускоренная амортизация: участники лизинговой сделки имеют право применять механизм ускоренной амортизации предмета лизинга с коэффициентом ускорения до 3, что позволяет быстрее окупить технику, варьировать длительность лизингового договора. Налоговая оптимизация: все платежи, производимые по договору лизинга, относятся на себестоимость продукции, тем самым, уменьшая налогооблагаемую базу по налогу на прибыль. Экономия средств лизингополучателя в результате отсутствия необходимости уплаты налога на имущество, т.к. предмет лизинга в большинстве случаев находится на балансе лизинговой компании. Возможность приобрести и использовать имущество, не отвлекая при этом собственные средства предприятия единовременно и в полном объёме. Возможность приобретения в собственность предмета лизинга, полностью освобожденного от налоговой нагрузки, по истечению срока договора лизинга. Самостоятельный выбор предмета лизинга и его продавца лизингополучателем.",
        title3: "Три основных вида лизинга:",
        strong1: "Финансовый лизинг",
        li1: "Лизингодатель (лизинговая компания) приобретает в собственность указанное лизингополучателем имущество у определённого продавца и передаёт лизингополучателю это имущество в качестве предмета лизинга на определённых условиях во временное владение и пользование. Имущество (предмет лизинга) переходит в собственность лизингополучателя при условии выплаты лизингополучателем всех лизинговых платежей.",
        strong2: "Оперативный лизинг",
        li2: "Имущество не выкупается лизингополучателем, а остаётся в собственности лизинговой компании и после окончания срока действия договора лизинга ещё раз передаётся в лизинг или аренду.",
        strong3: "Возвратный лизинг",
        li3: "Предприятие покупает имущество на собственные средства, а затем обращается в лизинговую компанию. Это один из способов достаточно быстро вернуть оборотные средства. Лизинговая компания рассматривает имущество как предмет лизинга и приобретает его по договору купли-продажи у предприятия. Это же имущество передается в лизинг этому же предприятию.",
        title4: 'Информация о партнёре - компания "CARCADE"',
        p4: "Компания CARCADE – это универсальный лизинговый партнёр. CARCADE финансирует покупку как легковых автомобилей, так и коммерческого транспорта. Оформить коммерческие автомобили или спецтехнику в лизинг можно без предоставления финансовой отчётности по 2 документам. Условия оформления сделки: аванс от 4% до 50%, срок лизинга от 12 до 60 месяцев, последний платёж от 1% до 15%. Дополнительная выгода клиентов CARCADE: каско в рассрочку, бесплатная цессия, электронный документооборот.",
        p5: "За получением более подробной информации по спецтехники и приобретению в лизинг обращайтесь по телефону:",
      },
      vacanciesPage: {
        title: "Вакансии",
        responsibilities: "Обязанности:",
        requirements: "Требования:",
        conditions: "Условия:",
        reply: "Откликнуться",
      },
    },
  },
  uz: {
    translation: {
      metaTitleDescriptions: {
        mainTitle:
          "RusTrak - maxsus maqsadli transport vositalari ishlab chiqaruvchisi",
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
        search: "Qidirish",
        favorites: "Sevimlilar",
        cart: "Savat",
        language: "Til",
        requesCall: "Qo'ng'iroqni so'rash",
        homeLink: "Ructrak - Bosh sahifa",
      },
      modal: {
        aboutRuctrak: "«Rustrak» MChJ haqida",
        news: "Yangiliklar",
        partners: "Bizning hamkorlarimiz",
        production: "Ishlab chiqarish",
        suppliers: "Tadbirkorlar va hamkorlarga",
        reviews: "Sharhlar",
        certifikat: "Sertifikatlar",
        vakansi: "Bo'sh ish o'rinlari",
        leasing: "Kredit va lizing",
        photogallery: "Fotogalereya",
        video: "Video",
        promo: "Reklama materiallari",
        info: "Axborot materiallari",
        remont: "Ta'mirlash",
      },
      requestModal: {
        modalTitleZakaz: "Qo'ng'iroq buyurtma qilish",
        modalTitleKommer: "Tijorat taklifini olish",
        modalP: "Menejerimiz tez orada siz bilan bog'lanadi",
        inputLabel1: "Ismingiz *",
        inputPlacholder1: "Ibrohim",
        inputError: "Ushbu maydonni to'ldirish majburiy",
        inputLabel2: "Telefon raqamingiz *",
        agreeText: "Men <0>shaxsiy ma'lumotlarni qayta ishlashga</0> roziman",
        submitBtnCall: "Ariza qoldirish",
        emailInputLabel: "E-mail *",
        submitBtnKp: "KP olish",
        uspeshna: "Muvaffaqiyatli!",
        uspeshnaP:
          "Ma'lumotlaringiz menejerimizga yuborildi. Biz tez orada siz bilan bog'lanamiz!",
        close: "Yopish",
        uvedam: "O'xshash yuk mashinasini toping",
        submitBtnVariant: "Variantlarni olish",
      },
      notFound: {
        sahifaTopilmadi: "Sahifa topilmadi",
        sahifaOchirilgan:
          "Sizni qiziqtirgan ma'lumotlarni topish uchun navigatsiya yoki qidiruv shaklidan foydalaning.",
        homepagegaqaytish: "Katalogga o'tish",
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
      scrollSlider: {
        linePart: [
          {
            id: 1,
            name: "Loyiha-konstruktorlik byurosi",
            text: "Xususiy konstruktorlik byurosi mijozlarning individual loyihalarini amalga oshirish imkonini beradi.",
          },
          {
            id: 2,
            name: "Ishlab chiqish",
            text: "Barcha loyihalar transport vositalari ishlab chiqaruvchilarining yo'riqnomalariga muvofiq ishlab chiqilgan.",
          },
          {
            id: 3,
            name: "Ishlab chiqarish bazasi",
            text: "Xususiy ishlab chiqarish bazasi mahsulot tannarxini sezilarli darajada kamaytirishga va uning raqobatbardoshligini oshirishga imkon beradi.",
          },
          {
            id: 4,
            name: "Kafolat",
            text: "Xususiy konstruktorlik byurosi mijozlarning individual loyihalarini amalga oshirish imkonini beradi. Ustki qurilmalar va bajarilgan ishlarga beriladigan kafolat shassi kafolatiga mos keladi.",
          },
          {
            id: 5,
            name: "Servis",
            text: "Servis xizmati ko'rsatish: Rossiya Federatsiyasining barcha hududlarida keng hamkorlikdagi servis tarmog'i.",
          },
        ],
      },
      recommendedSection: {
        recTitle: "Tavsiya etilgan mahsulotlar",
        cena: "Narxi so'rov bo'yicha",
        podrobne: "Batafsil",
        poluchit: "Tavsiyanoma olish",
        prev: "Orqaga tugmasi",
        next: "Oldinga tugmasi",
      },
      newsSection: {
        title: "Yangiliklar",
        readMore: "Batafsil o'qing",
      },
      feedbackForm: {
        title: "SAVOLLARINGIZ QOLDIMI?",
        subtitle:
          "Aloqa ma'lumotlaringizni qoldiring, tez orada siz bilan bog'lanamiz",
        nameLabel: "Ismingiz",
        namePlaceholder: "Ivan",
        inputError: "Ushbu maydonni to'ldirish majburiy",
        phoneLabel: "Telefon",
        phonePlaceholder: "+998",
        submitBtn: "Yuborish",
        policyText:
          "Yuborish tugmasini bosish orqali <0>shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz</0>",
        successTitle: "MUVAFFAQIYATLI!",
        successDescription:
          "Ma'lumotlaringiz menejerimizga yuborildi. Tez orada siz bilan bog'lanamiz!",
      },
      footer: {
        phoneFax: "Tel/faks",
        email: "Email",
        address: "Nijniy Novgorod sh., Torfyanaya ko'chasi, 35",
        requestCallBtn: "Qo'ng'iroq buyurtma qilish",
        aboutTitle: "Biz haqimizda",
        aboutCompany: "«Rustrak» MChJ kompaniyasi haqida",
        news: "Yangiliklar",
        partners: "Hamkorlarimiz",
        production: "Ishlab chiqarish",
        suppliers: "Yetkazib beruvchilar va hamkorlarga",
        reviews: "Mijozlar fikri",
        certificates: "Sertifikatlar",
        vacancies: "Bo'sh ish o'rinlari",
        creditLeasing: "Kredit va lizing",
        service: "Servis xizmati",
        repair: "Ta'mirlash",
        contacts: "Kontaktlar",
        articles: "Foydali maqolalar",
        mediaTitle: "Media",
        photoGallery: "Fotogalereya",
        video: "Video",
        promoMaterials: "Reklama materiallari",
        disclaimer:
          "Saytdagi ma'lumotlar ommaviy oferta hisoblanmaydi va faqat ma'lumot berish xarakteriga ega.",
      },
      breadCrumbs: {
        main: "Bosh sahifa",
        catalog: "Katalog",
        news: "Yangiliklar",
        contacts: "Kontaktlar",
        service: "Xizmat va kafolatlar",
        suppliers: "Yetkazib beruvchilar va hamkorlar uchun",
        leasing: "Kredit va lizing",
        vacancies: "Bo'sh ish o'rinlari",
      },
      contactPage: {
        title: "RusTrak maxsus avtotexnika ishlab chiqaruvchisi kontaktlari",
        adress: "603035 Nijniy Novgorod sh., Torfyanaya ko'ch., 35-uy",
        tel1: "Nijniy Novgorod:",
        tel2: "Hududlar uchun:",
        email: "Elektron pochta:",
        remonplan: "Texnik xizmat ko'rsatishga yozilish:",
        employees: "Xodimlar",
      },
      newsPage: {
        title: "RusTrak yangiliklari",
        showMore: "Ko'proq ko'rsatish",
        backBtn: "Orqaga",
        nextBtn: "Keyingisi",
      },
      newsDetailes: {
        back: "Orqaga",
        moreNews: "Boshqa yangiliklar",
      },
      servicePage: {
        title: "RusTrak maxsus avtotexnikasini kafolatli ta'mirlash servisi",
        text: "«RusTrak» MChJ mahsulotlarini xarid qilganingizdan so'ng, kafolatli xizmat ko'rsatish, transport vositasini sozlash va ta'mirlash, qo'shimcha uskunalar yetkazib berish, shuningdek, mijoz topshiriqlariga moslab takomillashtirish bilan bog'liq har qanday masalalar bo'yicha har doim yordam so'rab murojaat qilishingiz mumkin. Shartnoma tuzilgandan so'ng xohlagan vaqtingizda va har qanday muddatda texnik qo'llab-quvvatlash hamda foydalanish bo'yicha maslahat olishingiz mumkin.",
        asks: "Qanday qilib yordam olish mumkin?",
        li1: "Mas'ul shaxsning imzosi va tashkilot muhrini qo'ygan holda Reklamatsiya dalolatnomasini to'ldiring, nosozlik xususiyatini batafsil tasvirlang. Yo'lovchi eshigidagi shild, ishdan chiqqan uskunaning shildi hamda PTSning (Transport vositasi pasporti) birinchi sahifasi fotosuratlarini ilova qiling.",
        li2: "Nosozliklarni hamda mahsulotning umumiy ko'rinishini suratga oling.",
        li3: "To'ldirilgan dalolatnoma, PTS nusxasi va nosozliklar fotosuratlarini kb1@rtrf.ru elektron pochtasiga yuboring.",
        text2:
          "Shundan so'ng kafolat xizmati mutaxassislari avtomobil egasi bilan bog'lanishadi va ta'mirlashni tashkil etish variantlarini taklif qilishadi.",
        text3:
          "«RusTrak» ishlab chiqargan texnikalarga kafolatli xizmat ko'rsatish bo'yicha har qanday savollarni 8 (831) 225-00-55 (qo'shimcha 610) telefoni yoki kb1@rtrf.ru elektron pochtasi orqali berishingiz mumkin.",
      },
      suppliersPage: {
        mainTitle: "Yetkazib beruvchilar va hamkorlarga",
        aboutTitle: "«RusTrak» MChJ hamkorlikka taklif etadi.",
        p1: "Kompaniyamiz tijorat transporti va maxsus texnikalarni ishlab chiqarish hamda sotish bozorida 17 yildan beri faoliyat yuritib kelmoqda va Rossiya bozorida mustahkam yetakchi o'rinlarni egallaydi.",
        p2: "Biz kompaniyani rivojlantirishning asosiy yo'nalishlaridan biri sifatida komplektasiya va butlovchi qismlarni yetkazib beruvchilarni hamkorlikka taklif etamiz.",
        p3: "Kompaniyamiz uzoq muddatli va samarali hamkorlikdan manfaatdor.",
        p4: "Biz hamkorlarda quyidagilarni qadrlaymiz:",
        li1: "Yuqori sifatli mahsulot;",
        li2: "Moslashuvchan narx siyosati;",
        li3: "Assortiment va ombor qoldiqlari haqida muntazam xabardor qilib borish;",
        li4: "Eng qisqa yetkazib berish muddatlari.",
        p5: "«RusTrak» MChJning hamkorlar bilan o'zaro munosabatlardagi asosiy prinsiplari:",
        li5: "- Ishonch,",
        li6: "- halol yondashuv,",
        li7: "- o'zaro yordam;",
        p6: "O'zaro manfaatli asosda uzoq muddatli hamkorlik. Kelishuvlarni majburiy va aniq bajarish. Xalqaro biznes etikasi normalariga rioya qilish.",
        p7: "Sizni ko'rishdan har doim xursandmiz!",
      },
      leasingPage: {
        mainTitle:
          "RusTrak kompaniyasi maxsus avtotexnikalarini kredit va lizingga olish",
        p1: "RusTrak kompaniyasi maxsus avtotexnikalarni kredit hamda lizingga xarid qilish imkoniyatini taqdim etadi. Biz barcha banklar va lizing kompaniyalari bilan ishlaymiz. Yodda tuting, siz o'zingizga maqbul bo'lgan har qanday lizing kompaniyasini tanlashingiz mumkin.",
        title1: "Lizingning asosiy shartlari",
        p2: "Boshlang'ich to'lov (avans) summasi texnika qiymatining 5-30% ini tashkil qiladi. Lizing obyekti qiymatining yillik oshishi 8-9%. Lizing to'lovlarini to'lash muddati 6 oydan 5 yilgacha. Lizing bo'yicha to'liq hisob-kitob qilingandan so'ng texnika sizning korxonangiz mulkiga o'tadi.",
        title2: "Lizing sxemalarining afzalliklari:",
        p3: "Maksimal darajada kechiktirilgan to'lov. Tezlashtirilgan amortizatsiya: lizing bitimi ishtirokchilari lizing obyektiga 3 gacha bo'lgan tezlashtirish koeffitsienti bilan tezlashtirilgan amortizatsiya mexanizmini qo'llash huquqiga ega, bu esa texnika xarajatlarini tezroq qoplash va lizing shartnomasi muddatini o'zgartirish imkonini beradi. Soliq optimallashtirish: lizing shartnomasi bo'yicha amalga oshiriladigan barcha to'lovlar mahsulot tannarxiga kiritiladi va shu orqali foyda solig'i bo'yicha soliqqa tortiladigan bazani kamaytiradi. Lizing oluvchining mol-mulk solig'ini to'lash zarurati yo'qligi hisobiga mablag'larini tejashi, chunki lizing obyekti aksariyat hollarda lizing kompaniyasining balansida bo'ladi. Korxonaning o'z shaxsiy mablag'larini bir vaqtning o'zida va to'liq jalb qilmagan holda mol-mulkni xarid qilish va undan foydalanish imkoniyati. Lizing shartnomasi muddati tugagach, soliq yukidan to'liq ozod qilingan lizing obyektini xususiy mulk sifatida sotib olish imkoniyati. Lizing oluvchi tomonidan lizing obyekti va uni sotuvchini mustaqil ravishda tanlash.",
        title3: "Lizingning uchta asosiy turi:",
        strong1: "Moliyaviy lizing",
        li1: "Lizing beruvchi (lizing kompaniyasi) lizing oluvchi ko'rsatgan mol-mulkni ma'lum bir sotuvchidan o'z mulkiga sotib oladi va uni ma'lum shartlar asosida vaqtincha egalik qilish va foydalanish uchun lizing obyekti sifatida lizing oluvchiga topshiradi. Lizing oluvchi barcha lizing to'lovlarini to'lagan taqdirda, mol-mulk (lizing obyekti) lizing oluvchining mulkiga o'tadi.",
        strong2: "Operativ lizing",
        li2: "Mol-mulk lizing oluvchi tomonidan sotib olinmaydi, balki lizing kompaniyasining mulki bo'lib qoladi va lizing shartnomasi muddati tugagandan so'ng qayta lizingga yoki ijara beriladi.",
        strong3: "Qaytadan lizing (qaytariluvchi lizing)",
        li3: "Korxona mol-mulkni o'z mablag'lariga sotib oladi va keyin lizing kompaniyasiga murojaat qiladi. Bu aylanma mablag'larni tezda qaytarishning usullaridan biridir. Lizing kompaniyasi mol-mulkni lizing obyekti sifatida ko'rib chiqadi va uni oldi-sotdi shartnomasi bo mezonida korxonadan sotib oladi. Xuddi shu mol-mulk ushbu korxonaning o'ziga lizingga beriladi.",
        title4: 'Hamkor haqida ma\'lumot — "CARCADE" kompaniyasi',
        p4: "CARCADE kompaniyasi — bu universal lizing hamkori. CARCADE ham yengil avtomobillar, ham tijorat transporti xaridini moliyalashtiradi. Tijorat avtomobillari yoki maxsus texnikalarni lizingga rasmiylashtirish moliyaviy hisobotlarsiz, faqat 2 ta hujjat bo'yicha amalga oshiriladi. Bitimni rasmiylashtirish shartlari: avans 4% dan 50% gacha, lizing muddati 12 oydan 60 oygacha, oxirgi to'lov 1% dan 15% gacha. CARCADE mijozlarining qo'shimcha afzalliklari: KASKO bo'lib to'lash, bepul tsessiya (huquqni o'tkazish), elektron hujjat aylanishi.",
        p5: "Maxsus texnikalar va ularni lizingga xarid qilish bo'yicha batafsil ma'lumot olish uchun telefon orqali murojaat qiling:",
      },
      vacanciesPage: {
        title: "Bo'sh ish o'rinlari",
        responsibilities: "Majburiyatlar:",
        requirements: "Talablar:",
        conditions: "Sharoitlar:",
        reply: "Ariza topshirish",
      },
    },
  },
  en: {
    translation: {
      metaTitleDescriptions: {
        mainTitle: "RusTrak - a manufacturer of special-purpose vehicles",
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
        search: "Search",
        favorites: "Favorites",
        cart: "Cart",
        language: "Language",
        requestCall: "Request Call",
        homeLink: "Ructrak - Home page",
      },
      modal: {
        aboutRuctrak: "About LLC «Rustrak»",
        news: "News",
        partners: "Our partners",
        production: "Production",
        suppliers: "For suppliers and partners",
        reviews: "Reviews",
        certifikat: "Certificates",
        vakansi: "Vacancies",
        leasing: "Credit and leasing",
        photogallery: "Photo gallery",
        video: "Video",
        promo: "Promotional materials",
        info: "Information materials",
        remont: "Repair",
      },
      requestModal: {
        modalTitleZakaz: "Request a Call",
        modalTitleKommer: "Get a Commercial Offer",
        modalP: "Our manager will contact you shortly",
        inputLabel1: "Your Name *",
        inputPlacholder1: "John",
        inputError: "This field is required",
        inputLabel2: "Phone Number *",
        agreeText: "I agree to <0>the processing of personal data</0>",
        submitBtnCall: "Submit Request",
        emailInputLabel: "E-mail *",
        submitBtnKp: "Get Commercial Offer",
        uspeshna: "Success!",
        uspeshnaP:
          "Your details have been sent to our manager. We will contact you shortly!",
        close: "Close",
        uvedam: "Find a similar truck",
        submitBtnVariant: "Get Options",
      },
      notFound: {
        sahifaTopilmadi: "Page not found",
        sahifaOchirilgan:
          "Please use the navigation or search form to find the information you are interested in.",
        homepagegaqaytish: "Go to catalog",
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
      scrollSlider: {
        linePart: [
          {
            id: 1,
            name: "Design Bureau",
            text: "In-house design bureau allows us to implement custom client projects.",
          },
          {
            id: 2,
            name: "Development",
            text: "All projects are developed in accordance with vehicle manufacturers' manuals.",
          },
          {
            id: 3,
            name: "Production Base",
            text: "Our own production facility allows us to significantly reduce cost prices, increasing product competitiveness.",
          },
          {
            id: 4,
            name: "Warranty",
            text: "In-house design bureau allows us to implement custom client projects. Warranty for superstructures and works corresponds to the chassis warranty.",
          },
          {
            id: 5,
            name: "Service",
            text: "Service maintenance: an extensive partner service network throughout the Russian Federation.",
          },
        ],
      },
      recommendedSection: {
        recTitle: "Recommended Products",
        cena: "Price upon request",
        podrobne: "Read more",
        poluchit: "Get a quote",
        prev: "Previous button",
        next: "Next button",
      },
      newsSection: {
        title: "News",
        readMore: "Read more",
      },
      feedbackForm: {
        title: "STILL HAVE QUESTIONS?",
        subtitle:
          "Leave your contact details, and we will call you back shortly",
        nameLabel: "Your name",
        namePlaceholder: "Ivan",
        inputError: "This field is required",
        phoneLabel: "Phone",
        phonePlaceholder: "+998",
        submitBtn: "Submit",
        policyText:
          "By clicking the submit button <0>you agree to the processing of personal data</0>",
        successTitle: "SUCCESS!",
        successDescription:
          "Your details have been sent to our manager. We will contact you shortly!",
      },
      footer: {
        phoneFax: "Tel/fax",
        email: "Email",
        address: "Nizhny Novgorod, Torfyanaya st., 35",
        requestCallBtn: "Request a call",
        aboutTitle: "About us",
        aboutCompany: "About LLC «Rustrak»",
        news: "News",
        partners: "Our partners",
        production: "Production",
        suppliers: "For suppliers and partners",
        reviews: "Reviews",
        certificates: "Certificates",
        vacancies: "Vacancies",
        creditLeasing: "Credit and leasing",
        service: "Service",
        repair: "Repair",
        contacts: "Contacts",
        articles: "Useful articles",
        mediaTitle: "Media",
        photoGallery: "Photo gallery",
        video: "Video",
        promoMaterials: "Promotional materials",
        disclaimer:
          "The information on the site is not a public offer and is for informational purposes only.",
      },
      breadCrumbs: {
        main: "Home",
        catalog: "Catalog",
        news: "News",
        contacts: "Contacts",
        service: "Service and warranties",
        suppliers: "For suppliers and partners",
        leasing: "Credit and leasing",
        vacancies: "Vacancies",
      },
      contactPage: {
        title: "Contacts of RusTrak special vehicles manufacturer",
        adress: "603035 Nizhny Novgorod, Torfyanaya st., 35",
        tel1: "Nizhny Novgorod:",
        tel2: "For regions:",
        email: "Email:",
        remonplan: "Book maintenance service:",
        employees: "Employees",
      },
      newsPage: {
        title: "RusTrak news",
        showMore: "Show more",
        backBtn: "Back",
        nextBtn: "Next",
      },
      newsDetailes: {
        back: "Back",
        moreNews: "More News",
      },
      servicePage: {
        title: "RusTrak Commercial Vehicles Warranty Repair Service",
        text: "After purchasing products from LLC «Rustrak», you can always contact us for assistance with any issues related to warranty service, vehicle setup and repair, supply of additional equipment, as well as customization for specific client tasks. You can reach out for technical support and operational consultation at any time after concluding the contract.",
        asks: "How to get support?",
        li1: "Fill out the Claim Form signed by the authorized person and stamped with the organization's seal, describing the nature of the issue in detail. Attach photos of: the VIN plate on the passenger door, the ID plate of the failed equipment, and the first page of the PTS (Vehicle Registration Document).",
        li2: "Take photos of the faults and the overall view of the product as a whole.",
        li3: "Send the completed form, a copy of the PTS, and photos of the malfunctions by email to: kb1@rtrf.ru",
        text2:
          "After this, warranty service specialists will contact the owner and propose options for arranging the repair.",
        text3:
          "Any questions regarding the warranty service of «RusTrak» equipment can be asked by phone at 8 (831) 225-00-55 (ext. 610) or by email: kb1@rtrf.ru",
      },
      suppliersPage: {
        mainTitle: "To Suppliers and Partners",
        aboutTitle: "LLC «Rustrak» invites you to cooperate.",
        p1: "Our company has been operating in the commercial vehicle and special equipment manufacturing and sales market for 17 years and holds a leading position in the Russian market.",
        p2: "We invite suppliers of components to cooperate, as this is one of the key development directions for our company.",
        p3: "Our company is interested in long-term and effective cooperation.",
        p4: "In our partners, we value:",
        li1: "High-quality products;",
        li2: "Flexible pricing policy;",
        li3: "Regular updates on product range and stock availability;",
        li4: "Shortest delivery times.",
        p5: "Main principles of LLC «Rustrak» in interacting with partners:",
        li5: "- Trust,",
        li6: "- honesty,",
        li7: "- mutual support;",
        p6: "Long-term cooperation on a mutually beneficial basis. Strict and precise execution of agreements. Compliance with international standards of business ethics.",
        p7: "Always glad to work with you!",
      },
      leasingPage: {
        mainTitle: "Credit and Leasing for Commercial Vehicles by RusTrak",
        p1: "RusTrak provides the opportunity to purchase commercial vehicles and special equipment through credit and leasing. We work with all banks and leasing companies. Remember, you can choose any leasing company that suits your preferences.",
        title1: "Main Leasing Terms",
        p2: "Advance payment is 5-30% of the vehicle cost. Annual appreciation of the leased asset is 8-9%. Leasing payment term ranges from 6 months to 5 years. Upon full settlement under the agreement, the equipment becomes the property of your company.",
        title2: "Advantages of Leasing Schemes:",
        p3: "Maximum payment deferral. Accelerated depreciation: parties to a leasing transaction have the right to apply an accelerated depreciation mechanism to the leased item with an acceleration factor of up to 3, allowing faster return on investment and flexibility in contract terms. Tax optimization: all payments made under the lease agreement are classified as production costs, thereby reducing the taxable income base. Savings on property tax, as in most cases the leased asset remains on the leasing company's balance sheet. Ability to acquire and use assets without tying up the company's working capital upfront in full. Opportunity to gain full ownership of the asset free of tax burden upon expiration of the contract. Free choice of the leased item and supplier by the lessee.",
        title3: "Three Main Types of Leasing:",
        strong1: "Financial Leasing",
        li1: "The lessor (leasing company) acquires ownership of the asset specified by the lessee from a designated seller and transfers it to the lessee as a leased item under agreed terms for temporary possession and use. Ownership of the item transfers to the lessee provided all lease payments have been fully settled.",
        strong2: "Operational Leasing",
        li2: "The asset is not bought out by the lessee but remains the property of the leasing company, and upon expiration of the contract term, it can be leased or rented out again.",
        strong3: "Leaseback (Return Leasing)",
        li3: "The enterprise purchases equipment using its own funds and then applies to a leasing company. This is an effective way to quickly replenish working capital. The leasing company considers the property as a leased item and buys it under a sales contract from the enterprise. The same asset is then leased back to the same enterprise.",
        title4: 'Partner Information — "CARCADE" Company',
        p4: "CARCADE is a universal leasing partner financing purchases of both passenger cars and commercial vehicles. Commercial vehicles or special equipment can be leased without providing financial statements, using only 2 documents. Transaction terms: advance payment from 4% to 50%, lease term from 12 to 60 months, final payment from 1% to 15%. Additional benefits for CARCADE clients: CASCO in installments, free assignment (cession), and electronic document management.",
        p5: "For more detailed information on special equipment and leasing options, please contact us by phone:",
      },
      vacanciesPage: {
        title: "Vacancies",
        responsibilities: "Responsibilities:",
        requirements: "Requirements:",
        conditions: "Conditions:",
        reply: "Apply",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      loockupLocalStorage: "i18nextLng",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
