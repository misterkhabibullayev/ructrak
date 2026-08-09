import { nanoid } from "nanoid";

export const productsData = [
    {
        id: nanoid(10),
        slug: "shtornyy-gruzovik-maz-438121-kornet",
        arikul: "MAZ-438121",
        categorySlug: "shtornye-avtomobili",
        categoryLang: {
            uz: "Pardali avtomobillar",
            ru: "Шторные автомобили",
            en: "Curtain cars",
        },
        title: {
            uz: "Шторный грузовик МАЗ 438121 (модель 5389D5)",
            ru: "",
            en: "",
        },
        price: {
            isPriceOnRequest: true,
            amount: null,
            currecy: "RUB",
        },
        inStock: true,
        media: {
            mainImage: "/src/Image/shtorny-gruzovik-maz.webp",
            gallery: [
                "/src/Image/shtorny-gruzovik-maz.webp",
                "/src/Image/shtorny-gruzovik-maz.webp",
            ],
            blueprints: ["/src/Image/438121-texnik-chizma.png"],
        },
        fullSpecifications: [
            {
                id: nanoid(6),
                name: {
                    uz: "Baza shassisi",
                    ru: "Базовое шасси",
                    en: "Base chassis",
                },
                value: {
                    uz: "MAZ 438121-2540-025",
                    ru: "МАЗ 438121-2540-025",
                    en: "MAZ 438121-2540-025",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Dvigatel",
                    ru: "Двигатель",
                    en: "Engine",
                },
                value: {
                    uz: "WP4.1NQ190E50, 190 ot kuchi",
                    ru: "WP4.1NQ190E50, 190 л.с.",
                    en: "WP4.1NQ190E50, 190 hp",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Uzatmalar qutisi (KPP)",
                    ru: "КПП",
                    en: "Transmission",
                },
                value: {
                    uz: "Mexanik, 6 bosqichli FAST GEAR 6J76T",
                    ru: "Механическая, 6-ти ступенчатая FAST GEAR 6J76T",
                    en: "Manual, 6-speed FAST GEAR 6J76T",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "G'ildirak bazasi, mm",
                    ru: "Колесная база, мм",
                    en: "Wheelbase, mm",
                },
                value: {
                    uz: "5200",
                    ru: "5200",
                    en: "5200",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Ustki qurilma o'lchamlari, mm",
                    ru: "Габаритные размеры надстройки, мм",
                    en: "Superstructure overall dimensions, mm",
                },
                value: {
                    uz: "7500x2550x2850",
                    ru: "7500x2550x2850",
                    en: "7500x2550x2850",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Bort platformasi asosi",
                    ru: "Основание бортовой платформы",
                    en: "Flatbed platform base",
                },
                value: {
                    uz: "Ochiq profillardan payvandlangan karkas konstruktsiyasi. Bo'ylama lonjeronlar va ko'ndalang balkalardan, HOSSEN kontur va old devor profilidan iborat. Platformaning o'rovchi profilida yukni mahkamlash uchun ruxlangan ilmoqlar (yuklash kengligini kamaytirmaydi), har bir tomonda 7 tadan.",
                    ru: "Сварная рамная конструкция из открытых профилей. Состоит из продольных лонжеронов и поперечных балок, окантовочного и передней стенки профиля HOSSEN. Оцинкованные петли крепления груза в окантовочном профиле платформы (не уменьшают погрузочную ширину платформы), 7 шт. с каждой стороны.",
                    en: "Welded frame construction made of open profiles. Consists of longitudinal side members and cross beams, edging and front wall of the HOSSEN profile. Galvanized cargo attachment loops in the edging profile (do not reduce platform loading width), 7 pcs on each side.",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Pol",
                    ru: "Пол",
                    en: "Floor",
                },
                value: {
                    uz: "Sirpanishga qarshi qoplamali namlikka chidamli fanera.",
                    ru: "Влагостойкая фанера с противоскользящим покрытием.",
                    en: "Moisture-resistant plywood with anti-slip coating.",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Platforma bortlari",
                    ru: "Борта платформы",
                    en: "Platform sides",
                },
                value: {
                    uz: "Alyuminiy yoki po'lat ruxlangan bortlar, ochiladigan, sektsiyalar soni — har bir tomonda 2 tadan, balandligi 400 mm. Bortlarning ochilish burchagi — 180°. Alyuminiy qulflarga ega tez yechiladigan ustunlar har bir tomonda 2 tadan.",
                    ru: "Алюминиевые или стальные оцинкованные борта, откидывающиеся, количество секций – 2 шт. на сторону, высота 400 мм. Угол открывания бортов – 180°. Быстросъёмные стойки 2 шт. на сторону с алюминиевыми замками.",
                    en: "Aluminum or steel galvanized sides, fold-down, section count – 2 pcs per side, height 400 mm. Side opening angle – 180°. Quick-release posts 2 pcs per side with aluminum locks.",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Old devor",
                    ru: "Передняя стенка",
                    en: "Front wall",
                },
                value: {
                    uz: "Ustki qurilmaning to'liq balandligi bo'ylab alyuminiy profildan tayyorlangan.",
                    ru: "Выполнена из алюминиевого профиля на всю высоту надстройки",
                    en: "Made of aluminum profile for the full height of the superstructure",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Karkas",
                    ru: "Каркас",
                    en: "Frame",
                },
                value: {
                    uz: "Po'latdan, balandligi 2850 mm. Roliklardagi alyuminiy yo'naltiruvchilar bilan tentni alohida surish mexanizmi: tom, yon tomonlar. Karkasning o'ng orqa ustunida kronshteynli mahkamlagichga ega tomni surish uchun ilgak-bagor. Uch qatorli taxta panjara. Darvoza ustidagi yechiladigan ko'ndalang to'sin, balandlik bo'yicha cheklovlarsiz yuklash imkonini beradi. Orqa darvoza ustidagi suvni chetlashtiruvchi alyuminiy soyabon. Orqa va old ustunlar ruxlangan.",
                    ru: "Стальной, высотой 2850 мм. Механизм раздельного сдвижения тента с алюминиевыми направляющими на роликах: крыша, боковые стороны. Крюк-багор для сдвижения крыши с кронштейном крепления на правой задней стойке каркаса. Обрешетка из доски в три ряда. Съемная поперечина крыши над воротами, позволяет осуществлять загрузку без ограничений по высоте. Водоотводящий алюминиевый козырек над задними воротами. Задние и передние стойки оцинкованные.",
                    en: "Steel, height 2850 mm. Separate curtain sliding mechanism with aluminum roller guides: roof, side panels. Hook-pole for roof sliding with a mounting bracket on the right rear frame post. Three-row board lathing. Removable roof crossmember above the doors allows loading without height restrictions. Water-diverting aluminum visor over the rear doors. Rear and front posts are galvanized.",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Orqa darvoza",
                    ru: "Задние ворота",
                    en: "Rear doors",
                },
                value: {
                    uz: "Karkas turidagi ochiladigan darvoza, tashqi qoplamasi armaturalangan plastik, ichkisi 6 mm qalinlikdagi namlikka chidamli fanera. Ochiq holatda fiksatsiya qilish imkoniyatiga ega. Ruxlangan po'latdan furnitura, har bir eshikka 2 tadan shtanga va 4 tadan oshiq-moshiq. Ochiq holatda fiksatsiya qilish imkoniyatiga ega.",
                    ru: "Распашные ворота каркасного типа, наружное покрытие армированный пластик, внутреннее влагостойкая фанера толщиной 6 мм. С возможностью фиксации в открытом положении. Фурнитура из оцинкованной стали, по 2 штанги на дверь по 4 петли на дверь. С возможностью фиксации в открытом положении.",
                    en: "Hinged frame-type doors, outer layer reinforced plastic, inner layer 6 mm moisture-resistant plywood. Can be fixed in the open position. Galvanized steel fittings, 2 rods and 4 hinges per door. Fixable in open position.",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Tent",
                    ru: "Тент",
                    en: "Tarpaulin / Curtain",
                },
                value: {
                    uz: "Matoli tent, solishtirma og'irligi 650 g/m². Burchaklarda tent mustahkamlanishi. Ikkala tomondan orqa qismda gorizontal yo'nalishda tent tortgichlar (treshotka). Vertikal yo'nalishda tent tortgichlar (tasmalik va ilgakli tortish qulfi) qadami 0,6 m. Yon pardani orqaga oson surish uchun yechiladigan old parda shtangasi.",
                    ru: "Тент из ткани, удельный вес 650 г/м2. Усиление тента крыши на углах. Натяжители тента в горизонтальном направлении (трещотка) сзади с обеих сторон. Натяжители тента в вертикальном направлении (натяжной замок со стропом и крюком) шаг 0,6м. Съёмная передняя штанга боковой шторы для облегченного движения шторы назад.",
                    en: "Fabric tarpaulin, specific weight 650 g/m². Roof tarpaulin reinforcement at corners. Horizontal tarpaulin tensioners (ratchet) at the rear on both sides. Vertical tarpaulin tensioners (tension lock with strap and hook) step 0.6 m. Removable front bar of the side curtain for easier movement backward.",
                },
            },
            {
                id: nanoid(6),
                name: {
                    uz: "Boshqa jihozlar",
                    ru: "Прочее оборудование",
                    en: "Other equipment",
                },
                value: {
                    uz: "Plastik qanotlar, loydan himoya vositalari (bryzgoviki). Yon namlikdan himoyalangan gabarit chiroqlari. Baza shassisining yon himoyasi. Orqa himoya moslamasi. Ruxlangan chiqadigan zinapoya. Platformaga chiqish uchun tutqich.",
                    ru: "Пластиковые крылья, брызговики. Боковые влагозащитные габаритные огни. Боковая защита от базового шасси. Заднее защитное устройство. Оцинкованная выдвижная лестница. Поручень для подъёма на платформу.",
                    en: "Plastic mudguards, mud flaps. Side moisture-proof clearance lights. Base chassis side protection. Rear protective device. Galvanized retractable ladder. Grab handle for climbing onto the platform.",
                },
            },
        ],
    },
];
