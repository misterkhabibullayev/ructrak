import productImg1 from "../Image/shtorny-gruzovik-maz.webp";
import productGallery1 from "../Image/438121-texnik-chizma.png";
import productImg2 from "../Image/kran-manipulator.webp";
import productGallery2 from "../Image/kran-manipulator.webp";
import productImg3 from "../Image/7pyjukocowss7phe63pk9qn1fdze2ep7.webp";
import productGallery3 from "../Image/631228.png";
import productGalleryKamaz1 from "../Image/kamaz1.webp";
import productGalleryKamaz2 from "../Image/kamaz2.webp";
import productGalleryKamaz3 from "../Image/kamaz3.webp";
import productGalleryKamaz4 from "../Image/kamaz4.webp";
import productGalleryKamaz_2_1 from "../Image/kamaz_2_1.webp";
import productGalleryKamaz_2_2 from "../Image/kamaz_2_2.webp";
import productGalleryKamaz_2_3 from "../Image/kamaz_2_3.webp";
import productGalleryKamaz_2_4 from "../Image/kamaz_2_4.webp";
import productGalleryMaz631228 from "../Image/productGalleryMaz631228.webp";
import productGalleryMaz631228_2 from "../Image/productGalleryMaz631228_2.webp";
import productGalleryMaz631228_3 from "../Image/productGalleryMaz631228_3.webp";
import productGalleryMaz631228_4 from "../Image/productGalleryMaz631228_4.webp";
import productGalleryMaz631228_5 from "../Image/productGalleryMaz631228_5.webp";
import productGalleryKamaz43082_1 from "../Image/productGalleryKamaz43082_1.webp"
import productGalleryKamaz43082_2 from "../Image/productGalleryKamaz43082_2.webp"
import productGalleryKamaz43082_3 from "../Image/productGalleryKamaz43082_3.webp"
import productGalleryKamaz43082_4 from "../Image/productGalleryKamaz43082_4.webp"
import productGalleryKamaz43082_5 from "../Image/productGalleryKamaz43082_5.webp"

export const productsData = [
  {
    id: "maz-438121",
    slug: "shtornyy-gruzovik-maz-438121-kornet",
    arikul: "MAZ-438121",
    categorySlug: "shtornye-avtomobili",
    category: "Curtain trucks",
    recommended: true,
    title: {
      uz: "Curtainsider yuk mashinasi MAZ 438121 (5389D5 modeli)",
      ru: "Шторный грузовик МАЗ 438121 (модель 5389D5)",
      en: "Curtainsider truck MAZ 438121 (model 5389D5)",
    },
    price: {
      isPriceOnRequest: true,
      amount: null,
      currecy: "RUB",
    },
    inStock: true,
    media: {
      mainImage: productImg1,
      gallery: [productGallery1],
      blueprints: ["/src/Image/438121-texnik-chizma.png"],
    },
    specifications: [
      {
        id: "specific-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "MAZ 438121 KORNET",
          ru: "МАЗ 438121 КОРНЕТ",
          en: "MAZ 438121 KORNET",
        },
      },
      {
        id: "specific-2",
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
        id: "specific-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mex., 6 bosqichli FAST GEAR 6J76T",
          ru: "Мех., 6-ти ступ. FAST GEAR 6J76T",
          en: "Manual 6-speed FAST GEAR 6J76T",
        },
      },
      {
        id: "specific-4",
        name: {
          uz: "Avtomobil uzunligi, mm",
          ru: "Длина автомобиля, мм",
          en: "Vehicle length, mm",
        },
        value: {
          uz: "9510",
          ru: "9510",
          en: "9510",
        },
      },
      {
        id: "specific-5",
        name: {
          uz: "Avtomobil kengligi, mm",
          ru: "Ширина автомобиля, мм",
          en: "Vehicle width, mm",
        },
        value: {
          uz: "2550",
          ru: "2550",
          en: "2550",
        },
      },
      {
        id: "specific-6",
        name: {
          uz: "Avtomobil balandligi, mm",
          ru: "Высота автомобиля, мм",
          en: "Vehicle height, mm",
        },
        value: {
          uz: "3880",
          ru: "3880",
          en: "3880",
        },
      },
      {
        id: "specific-7",
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
        id: "specific-8",
        name: {
          uz: "Platforma uzunligi, m",
          ru: "Длина платформы, м",
          en: "Platform length, m",
        },
        value: {
          uz: "7500",
          ru: "7500",
          en: "7500",
        },
      },
      {
        id: "specific-9",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса, кг",
          en: "Gross weight, kg",
        },
        value: {
          uz: "11990",
          ru: "11990",
          en: "11990",
        },
      },
      {
        id: "specific-10",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса, кг",
          en: "Curb weight, kg",
        },
        value: {
          uz: "5450",
          ru: "5450",
          en: "5450",
        },
      },
      {
        id: "specific-11",
        name: {
          uz: "Yuk ko'taruvchanligi, kg",
          ru: "Грузоподъёмность, кг",
          en: "Payload capacity, kg",
        },
        value: {
          uz: "6340",
          ru: "6340",
          en: "6340",
        },
      },
      {
        id: "specific-12",
        name: {
          uz: "Furgon hajmi, m3",
          ru: "Объем фургона, м3",
          en: "Van volume, m3",
        },
        value: {
          uz: "48",
          ru: "48",
          en: "48",
        },
      },
    ],
    fullSpecifications: [
      {
        id: "spec-1",
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
        id: "spec-2",
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
        id: "spec-3",
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
        id: "spac-4",
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
        id: "spac-5",
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
        id: "spac-6",
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
        id: "spac-7",
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
        id: "spac-8",
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
        id: "spac-9",
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
        id: "spac-10",
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
        id: "spac-11",
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
        id: "spac-12",
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
        id: "spac-13",
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
  {
    id: "maz-631228",
    slug: "shtornyy-gruzovik-maz-631228-524-010",
    arikul: "MAZ-631228",
    categorySlug: "shtornye-avtomobili",
    category: "Curtain trucks",
    recommended: true,
    title: {
      uz: "Curtainsider yuk mashinasi MAZ 631228-524-010 (4389M2 modeli)",
      ru: "Шторный грузовик МАЗ 631228-524-010 (модель 4389M2)",
      en: "Curtainsider truck MAZ 631228-524-010 (model 4389M2)",
    },
    price: {
      isPriceOnRequest: true,
      amount: null,
      currecy: "RUB",
    },
    inStock: true,
    media: {
      mainImage: productImg3,
      gallery: [productGallery3],
      blueprints: ["/src/Image/631228-texnik-chizma.png"],
    },
    specifications: [
      {
        id: "specific-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "MAZ 631228-524-010",
          ru: "МАЗ 631228-524-010",
          en: "MAZ 631228-524-010",
        },
      },
      {
        id: "specific-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "WP12.430E50, 430 ot kuchi",
          ru: "WP12.430E50, 430 л.с.",
          en: "WP12.430E50, 430 hp",
        },
      },
      {
        id: "specific-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mex., 16 bosqichli ZF 16S2520TO",
          ru: "Мех., 16-ти ступ. ZF 16S2520TO",
          en: "Manual 16-speed ZF 16S2520TO",
        },
      },
      {
        id: "specific-4",
        name: {
          uz: "Avtomobil uzunligi, mm",
          ru: "Длина автомобиля, мм",
          en: "Vehicle length, mm",
        },
        value: {
          uz: "10070",
          ru: "10070",
          en: "10070",
        },
      },
      {
        id: "specific-5",
        name: {
          uz: "Avtomobil kengligi, mm",
          ru: "Ширина автомобиля, мм",
          en: "Vehicle width, mm",
        },
        value: {
          uz: "2550",
          ru: "2550",
          en: "2550",
        },
      },
      {
        id: "specific-6",
        name: {
          uz: "Avtomobil balandligi, mm",
          ru: "Высота автомобиля, мм",
          en: "Vehicle height, mm",
        },
        value: {
          uz: "3990",
          ru: "3990",
          en: "3990",
        },
      },
      {
        id: "specific-7",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "4600+1400",
          ru: "4600+1400",
          en: "4600+1400",
        },
      },
      {
        id: "specific-8",
        name: {
          uz: "Platforma uzunligi, m",
          ru: "Длина платформы, м",
          en: "Platform length, m",
        },
        value: {
          uz: "7500",
          ru: "7500",
          en: "7500",
        },
      },
      {
        id: "specific-9",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса, кг",
          en: "Gross weight, kg",
        },
        value: {
          uz: "26500",
          ru: "26500",
          en: "26500",
        },
      },
      {
        id: "specific-10",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса, кг",
          en: "Curb weight, kg",
        },
        value: {
          uz: "12700",
          ru: "12700",
          en: "12700",
        },
      },
      {
        id: "specific-11",
        name: {
          uz: "Yuk ko'taruvchanligi, kg",
          ru: "Грузоподъёмность, кг",
          en: "Payload capacity, kg",
        },
        value: {
          uz: "13800",
          ru: "13800",
          en: "13800",
        },
      },
      {
        id: "specific-12",
        name: {
          uz: "Furgon hajmi, m3",
          ru: "Объем фургона, м3",
          en: "Van volume, m3",
        },
        value: {
          uz: "48",
          ru: "48",
          en: "48",
        },
      },
      {
        id: "specific-13",
        name: {
          uz: "Kuzov hajmi, m3",
          ru: "Объем кузова, м3",
          en: "Body volume, m3",
        },
        value: {
          uz: "48.9",
          ru: "48.9",
          en: "48.9",
        },
      },
    ],
    fullSpecifications: [
      {
        id: "spec-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "MAZ 631228-524-010",
          ru: "МАЗ 631228-524-010",
          en: "MAZ 631228-524-010",
        },
      },
      {
        id: "spec-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "WP12.430E50, 430 ot kuchi",
          ru: "WP12.430E50, 430 л.с.",
          en: "WP12.430E50, 430 hp",
        },
      },
      {
        id: "spec-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik, 16 bosqichli ZF 16S2520TO",
          ru: "Механическая, 16-ти ступенчатая ZF 16S2520TO",
          en: "Manual, 16-speed ZF 16S2520TO",
        },
      },
      {
        id: "spac-4",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "4600+1400",
          ru: "4600+1400",
          en: "4600+1400",
        },
      },
      {
        id: "spac-5",
        name: {
          uz: "Ustki qurilma o'lchamlari, mm",
          ru: "Габаритные размеры надстройки, мм",
          en: "Superstructure overall dimensions, mm",
        },
        value: {
          uz: "7500x2550x2690",
          ru: "7500x2550x2690",
          en: "7500x2550x2690",
        },
      },
      {
        id: "spac-6",
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
        id: "spac-7",
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
        id: "spac-8",
        name: {
          uz: "Platforma bortlari",
          ru: "Борта платформы",
          en: "Platform sides",
        },
        value: {
          uz: "Alyuminiy yoki po'lat ruxlangan bortlar, ochiladigan, sektsiyalar soni — har bir tomonda 2 tadan, balandligi 600 mm. Bortlarning ochilish burchagi — 180°. Alyuminiy qulflarga ega tez yechiladigan ustunlar har bir tomonda 1 tadan.",
          ru: "Алюминиевые или стальные оцинкованные борта, откидывающиеся, количество секций – 2 шт. на сторону, высота 600 мм. Угол открывания бортов – 180°. Быстросъёмные стойки 1 шт. на сторону с алюминиевыми замками.",
          en: "Aluminum or steel galvanized sides, fold-down, section count – 2 pcs per side, height 600 mm. Side opening angle – 180°. Quick-release posts 1 pc per side with aluminum locks.",
        },
      },
      {
        id: "spac-9",
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
        id: "spac-10",
        name: {
          uz: "Karkas",
          ru: "Каркас",
          en: "Frame",
        },
        value: {
          uz: "Po'latdan, balandligi 2700 mm. Roliklardagi alyuminiy yo'naltiruvchilar bilan tentni alohida surish mexanizmi: tom, yon tomonlar. Karkasning o'ng orqa ustunida kronshteynli mahkamlagichga ega tomni surish uchun ilgak-bagor. Uch qatorli taxta panjara. Darvoza ustidagi yechiladigan ko'ndalang to'sin, balandlik bo'yicha cheklovlarsiz yuklash imkonini beradi. Orqa darvoza ustidagi suvni chetlashtiruvchi alyuminiy soyabon. Orqa va old ustunlar ruxlangan.",
          ru: "Стальной, высотой 2700 мм. Механизм раздельного сдвижения тента с алюминиевыми направляющими на роликах: крыша, боковые стороны. Крюк-багор для сдвижения крыши с кронштейном крепления на правой задней стойке каркаса. Обрешетка из доски в три ряда. Съемная поперечина крыши над воротами, позволяет осуществлять загрузку без ограничений по высоте. Водоотводящий алюминиевый козырек над задними воротами. Задние и передние стойки оцинкованные.",
          en: "Steel, height 2700 mm. Separate curtain sliding mechanism with aluminum roller guides: roof, side panels. Hook-pole for roof sliding with a mounting bracket on the right rear frame post. Three-row board lathing. Removable roof crossmember above the doors allows loading without height restrictions. Water-diverting aluminum visor over the rear doors. Rear and front posts are galvanized.",
        },
      },
      {
        id: "spac-11",
        name: {
          uz: "Orqa darvoza",
          ru: "Задние ворота",
          en: "Rear doors",
        },
        value: {
          uz: "Ochilib-yopiladigan karkas turidagi darvoza, yig'ma alyuminiy profildan, zanglamaydigan po'latdan yashirin furnitura, har bir eshikka 2 tadan shtanga va 4 tadan oshiq-moshiq. Ochiq holatda fiksatsiya qilish imkoniyatiga ega.",
          ru: "Распашные ворота каркасного типа из наборного алюминиевого профиля со скрытой фурнитурой из нержавеющей стали, по 2 штанги на дверь, по 4 петли на дверь. С возможностью фиксации в открытом положении.",
          en: "Hinged frame-type doors made of assembled aluminum profile with hidden stainless steel hardware, 2 rods per door, 4 hinges per door. Fixable in open position.",
        },
      },
      {
        id: "spac-12",
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
        id: "spac-13",
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
  {
    id: "maz-6312s5-8535-012",
    slug: "kran-manipulyator-maz-6312s5-8535-012-s-kmu-inman-it-150-model-4389n8",
    arikul: " МАЗ-6312С5-8535-012",
    categorySlug: "krany-manipulyatory",
    category: "Crane manipulators",
    recommended: true,
    title: {
      uz: "Kran-manipulyator MAZ 6312C5-8535-012 INMAN IT 150 bilan (4389N8 modeli)",
      ru: "Кран-манипулятор МАЗ 6312C5-8535-012 с КМУ ИНМАН ИТ 150 (модель 4389N8)",
      en: "Crane manipulator MAZ 6312C5-8535-012 with KMU INMAN IT 150 (model 4389N8)",
    },
    price: {
      isPriceOnRequest: true,
      amount: null,
      currency: "RUB",
    },
    inStock: true,
    media: {
      mainImage: productImg2,
      gallery: [productGallery2],
      blueprints: ["/src/Image/kran-manipulator-texnika.jpg"],
    },
    specification: [
      {
        id: "specific-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "MAZ 6312C5-8535-012",
          ru: "МАЗ 6312C5-8535-012",
          en: "MAZ 6312C5-8535-012",
        },
      },
      {
        id: "specific-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "YaMZ-53603, 330 ot kuchi",
          ru: "ЯМЗ-53603, 330 л. с.",
          en: "YaMZ-53603, 330 hp",
        },
      },
      {
        id: "specific-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik 9 bosqichli",
          ru: "Механическая 9-ти ступенчатая",
          en: "Manual 9-speed",
        },
      },
      {
        id: "specific-4",
        name: {
          uz: "Avtomobil uzunligi, mm",
          ru: "Длина автомобиля, мм",
          en: "Vehicle length, mm",
        },
        value: {
          uz: "10650",
          ru: "10650",
          en: "10650",
        },
      },
      {
        id: "specific-5",
        name: {
          uz: "Avtomobil kengligi, mm",
          ru: "Ширина автомобиля, мм",
          en: "Vehicle width, mm",
        },
        value: {
          uz: "2550",
          ru: "2550",
          en: "2550",
        },
      },
      {
        id: "specific-6",
        name: {
          uz: "Avtomobil balandligi, mm",
          ru: "Высота автомобиля, мм",
          en: "Vehicle height, mm",
        },
        value: {
          uz: "3705",
          ru: "3705",
          en: "3705",
        },
      },
      {
        id: "specific-7",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "4600+1400",
          ru: "4600+1400",
          en: "4600+1400",
        },
      },
      {
        id: "specific-8",
        name: {
          uz: "Platforma uzunligi, m",
          ru: "Длина платформы, м",
          en: "Platform length, m",
        },
        value: {
          uz: "6700",
          ru: "6700",
          en: "6700",
        },
      },
      {
        id: "specific-9",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса, кг",
          en: "Gross weight, kg",
        },
        value: {
          uz: "33500",
          ru: "33500",
          en: "33500",
        },
      },
      {
        id: "specific-10",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса, кг",
          en: "Curb weight, kg",
        },
        value: {
          uz: "17880",
          ru: "17880",
          en: "17880",
        },
      },
      {
        id: "specific-11",
        name: {
          uz: "Yuk ko'taruvchanligi, kg",
          ru: "Грузоподъёмность, кг",
          en: "Payload capacity, kg",
        },
        value: {
          uz: "17360",
          ru: "17360",
          en: "17360",
        },
      },
      {
        id: "specific-12",
        name: {
          uz: "KMU yuk ko'taruvchanligi, tonna",
          ru: "Грузоподъёмность КМУ, тонн",
          en: "Crane capacity, tons",
        },
        value: {
          uz: "7.05",
          ru: "7,05",
          en: "7.05",
        },
      },
      {
        id: "specific-13",
        name: {
          uz: "Strela chiqqan masofasi, m",
          ru: "Вылет стрелы, м",
          en: "Boom reach, m",
        },
        value: {
          uz: "8.05",
          ru: "8,05",
          en: "8.05",
        },
      },
    ],
    fullSpecifications: [
      {
        id: "spac-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "MAZ 6312C5-8535-012",
          ru: "МАЗ 6312C5-8535-012",
          en: "MAZ 6312C5-8535-012",
        },
      },
      {
        id: "spac-2",
        name: {
          uz: "Ustki qurilma turi",
          ru: "Тип надстройки",
          en: "Superstructure type",
        },
        value: {
          uz: "KMU bilan bortli platforma",
          ru: "Бортовая платформа с КМУ",
          en: "Flatbed platform with loader crane",
        },
      },
      {
        id: "spac-3",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "YaMZ-53603, 330 ot kuchi",
          ru: "ЯМЗ-53603, 330 л. с.",
          en: "YaMZ-53603, 330 hp",
        },
      },
      {
        id: "spac-4",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik, 9 bosqichli",
          ru: "Механическая 9-ти ступенчатая",
          en: "Manual 9-speed",
        },
      },
      {
        id: "spac-5",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "4600+1400",
          ru: "4600+1400",
          en: "4600+1400",
        },
      },
      {
        id: "spac-6",
        name: {
          uz: "Avtomobil o'lchamlari (UzXKxB), mm",
          ru: "Габаритные размеры автомобиля, ДхШхВ (мм)",
          en: "Vehicle overall dimensions, LxWxH (mm)",
        },
        value: {
          uz: "10650x2550x3705",
          ru: "10650x2550x3705",
          en: "10650x2550x3705",
        },
      },
      {
        id: "spac-7",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса (кг)",
          en: "Gross weight, kg",
        },
        value: {
          uz: "33500",
          ru: "33500",
          en: "33500",
        },
      },
      {
        id: "spac-8",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса (кг)",
          en: "Curb weight, kg",
        },
        value: {
          uz: "17880",
          ru: "17880",
          en: "17880",
        },
      },
      {
        id: "spac-9",
        name: {
          uz: "Bort platformasi o'lchamlari (UzXKxB), mm",
          ru: "Габаритные размеры бортовой платформы, ДхШхВ (мм)",
          en: "Flatbed platform overall dimensions, LxWxH (mm)",
        },
        value: {
          uz: "6700x2550x600",
          ru: "6700x2550x600",
          en: "6700x2550x600",
        },
      },
      {
        id: "spac-10",
        name: {
          uz: "Bort platformasi asosi",
          ru: "Основание бортовой платформы",
          en: "Flatbed platform base",
        },
        value: {
          uz: "Ochiq profillardan payvandlangan karkas konstruktsiyasi. Bo'ylama lonjeronlar va ko'ndalang balkalardan, HOSSEN kontur va old devor profilidan iborat. Platformaning o'rovchi profilida yukni mahkamlash uchun ruxlangan ilmoqlar (yuklash kengligini kamaytirmaydi), har bir tomonda 5 tadan.",
          ru: "Сварная рамная конструкция из открытых профилей. Состоит из продольных лонжеронов и поперечных балок, окантовочного и передней стенки профиля HOSSEN. Оцинкованные петли крепления груза в окантовочном профиле платформы (не уменьшают погрузочную ширину платформы), 5 шт. с каждой стороны.",
          en: "Welded frame structure made of open profiles. Consists of longitudinal side members and cross beams, edging and front wall of HOSSEN profile. Galvanized load securing loops in the edging profile (do not reduce loading width), 5 pcs per side.",
        },
      },
      {
        id: "spac-11",
        name: {
          uz: "Pol",
          ru: "Пол",
          en: "Floor",
        },
        value: {
          uz: "Sirpanishga qarshi qoplamali, 24 mm qalinlikdagi namlikka chidamli fanera.",
          ru: "Влагостойкая фанера толщиной 24 мм с противоскользящим покрытием.",
          en: "Moisture-resistant plywood with a thickness of 24 mm with anti-slip coating.",
        },
      },
      {
        id: "spac-12",
        name: {
          uz: "Platforma bortlari",
          ru: "Борта платформы",
          en: "Platform sides",
        },
        value: {
          uz: "Po'lat ruxlangan yoki alyuminiy bortlar, ochiladigan, sektsiyalar soni — har bir tomonda 2 tadan, balandligi 600 mm. Bortlarning ochilish burchagi — 180°. Alyuminiy qulflarga ega tez yechiladigan ustunlar har bir tomonda 2 tadan.",
          ru: "Стальные оцинкованные или алюминиевые борта, откидывающиеся, количество секций – 2 шт. на сторону, высота 600 мм. Угол открывания бортов – 180°. Быстросъёмные стойки ломающегося типа по 2 на сторону с алюминиевыми замками.",
          en: "Galvanized steel or aluminum sides, fold-down, section count – 2 pcs per side, height 600 mm. Side opening angle – 180°. Quick-release breaking-type posts 2 pcs per side with aluminum locks.",
        },
      },
      {
        id: "spac-13",
        name: {
          uz: "Boshqa jihozlar",
          ru: "Прочее оборудование",
          en: "Other equipment",
        },
        value: {
          uz: "Plastik qanotlar, loydan himoya vositalari (bryzgoviki). Yon namlikdan himoyalangan gabarit chiroqlari. Alyuminiy profildan tayyorlangan yon himoya. Orqa himoya moslamasi. Platformaga chiqish uchun zinapoya.",
          ru: "Пластиковые крылья, брызговики. Боковые влагозащитные габаритные огни. Боковая защита из алюминиевых профилей на откидных оцинкованных кронштейнах. Заднее защитное устройство. Ступень для подъема на платформу.",
          en: "Plastic mudguards, mud flaps. Side moisture-proof clearance lights. Side protection made of aluminum profiles on folding galvanized brackets. Rear protective device. Step for climbing onto the platform.",
        },
      },
      {
        id: "spac-14",
        name: {
          uz: "Maksimal yuk momenti, tm",
          ru: "Максимальный грузовой момент, тм",
          en: "Max load moment, tm",
        },
        value: {
          uz: "15.0",
          ru: "15,0",
          en: "15.0",
        },
      },
      {
        id: "spac-15",
        name: {
          uz: "Maksimal yuk ko'tarishi, kg",
          ru: "Максимальная грузоподъемность, кг",
          en: "Max lifting capacity, kg",
        },
        value: {
          uz: "7050",
          ru: "7050",
          en: "7050",
        },
      },
      {
        id: "spac-16",
        name: {
          uz: "Minimal strela chiqqan masofasi, m",
          ru: "Минимальный вылет стрелы, м",
          en: "Min boom reach, m",
        },
        value: {
          uz: "4.6",
          ru: "4,6",
          en: "4.6",
        },
      },
      {
        id: "spac-17",
        name: {
          uz: "Maksimal masofadagi yuk ko'tarishi, kg",
          ru: "Г/п на максимальном вылете, кг",
          en: "Capacity at max reach, kg",
        },
        value: {
          uz: "300",
          ru: "300",
          en: "300",
        },
      },
      {
        id: "spac-18",
        name: {
          uz: "Maksimal strela chiqqan masofasi, m",
          ru: "Максимальный вылет стрелы, м",
          en: "Max boom reach, m",
        },
        value: {
          uz: "19.0",
          ru: "19,0",
          en: "19.0",
        },
      },
      {
        id: "spac-19",
        name: {
          uz: "Strela / sektsiyalar soni",
          ru: "Стрела / количество секций",
          en: "Boom / section count",
        },
        value: {
          uz: "Geksagonal / 6 sektsiya",
          ru: "Гексагональная / 6 секций",
          en: "Hexagonal / 6 sections",
        },
      },
      {
        id: "spac-20",
        name: {
          uz: "Strela ko'tarilish burchagi, °",
          ru: "Угол подъема стрелы, °",
          en: "Boom elevation angle, °",
        },
        value: {
          uz: "0 - 75",
          ru: "0 - 75",
          en: "0 - 75",
        },
      },
      {
        id: "spac-21",
        name: {
          uz: "Kolonna burilish burchagi, °",
          ru: "Угол поворота колонны, °",
          en: "Column slewing angle, °",
        },
        value: {
          uz: "420",
          ru: "420",
          en: "420",
        },
      },
      {
        id: "spac-22",
        name: {
          uz: "Old autrigerlar",
          ru: "Передние аутригеры",
          en: "Front outriggers",
        },
        value: {
          uz: "Kengligi 5.631 m",
          ru: "Размах 5,631 м",
          en: "Span 5.631 m",
        },
      },
      {
        id: "spac-23",
        name: {
          uz: "Orqa autrigerlar",
          ru: "Задние аутригеры",
          en: "Rear outriggers",
        },
        value: {
          uz: "-",
          ru: "-",
          en: "-",
        },
      },
    ],
  },
  {
    id: "kamaz-4308",
    slug: "shtornyy-gruzovik-kamaz-4308",
    arikul: "KAMAZ-4308",
    categorySlug: "shtornye-avtomobili",
    category: "Curtain trucks",
    recommended: true,
    title: {
      uz: "Curtainsider yuk mashinasi KAMAZ 4308",
      ru: "Шторный грузовик КАМАЗ 4308",
      en: "Curtainsider truck KAMAZ 4308",
    },
    price: {
      isPriceOnRequest: true,
      amount: null,
      currecy: "RUB",
    },
    inStock: true,
    media: {
      mainImage: productGalleryKamaz1,
      gallery: [
        productGalleryKamaz1,
        productGalleryKamaz2,
        productGalleryKamaz3,
        productGalleryKamaz4,
      ],
      blueprints: ["/src/Image/4308-texnik-chizma.png"],
    },
    specifications: [
      {
        id: "specific-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "KAMAZ 4308-3083-69(G5)",
          ru: "КАМАЗ 4308-3083-69(G5)",
          en: "KAMAZ 4308-3083-69(G5)",
        },
      },
      {
        id: "specific-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "Cummins ISB6.7 E5 250, 250 ot kuchi",
          ru: "Cummins ISB6.7 E5 250, 250 л. с.",
          en: "Cummins ISB6.7 E5 250, 250 hp",
        },
      },
      {
        id: "specific-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik, 9 bosqichli ZF9",
          ru: "Механическая, 9-ступенчатая ZF9",
          en: "Manual 9-speed ZF9",
        },
      },
      {
        id: "specific-4",
        name: {
          uz: "Avtomobil uzunligi, mm",
          ru: "Длина автомобиля, мм",
          en: "Vehicle length, mm",
        },
        value: {
          uz: "10900",
          ru: "10900",
          en: "10900",
        },
      },
      {
        id: "specific-5",
        name: {
          uz: "Avtomobil kengligi, mm",
          ru: "Ширина автомобиля, мм",
          en: "Vehicle width, mm",
        },
        value: {
          uz: "2550",
          ru: "2550",
          en: "2550",
        },
      },
      {
        id: "specific-6",
        name: {
          uz: "Avtomobil balandligi, mm",
          ru: "Высота автомобиля, мм",
          en: "Vehicle height, mm",
        },
        value: {
          uz: "3990",
          ru: "3990",
          en: "3990",
        },
      },
      {
        id: "specific-7",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "4780",
          ru: "4780",
          en: "4780",
        },
      },
      {
        id: "specific-8",
        name: {
          uz: "Platforma uzunligi, m",
          ru: "Длина платформы, м",
          en: "Platform length, m",
        },
        value: {
          uz: "8500",
          ru: "8500",
          en: "8500",
        },
      },
      {
        id: "specific-9",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса, кг",
          en: "Gross weight, kg",
        },
        value: {
          uz: "11980",
          ru: "11980",
          en: "11980",
        },
      },
      {
        id: "specific-10",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса, кг",
          en: "Curb weight, kg",
        },
        value: {
          uz: "6020",
          ru: "6020",
          en: "6020",
        },
      },
      {
        id: "specific-11",
        name: {
          uz: "Yuk ko'taruvchanligi, kg",
          ru: "Грузоподъёмность, кг",
          en: "Payload capacity, kg",
        },
        value: {
          uz: "4780",
          ru: "4780",
          en: "4780",
        },
      },
      {
        id: "specific-12",
        name: {
          uz: "Furgon hajmi, m3",
          ru: "Объем фургона, м3",
          en: "Van volume, m3",
        },
        value: {
          uz: "38...59",
          ru: "38...59",
          en: "38...59",
        },
      },
    ],
    fullSpecifications: [
      {
        id: "spec-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "KAMAZ 4308-3083-69(G5)",
          ru: "КАМАЗ 4308-3083-69(G5)",
          en: "KAMAZ 4308-3083-69(G5)",
        },
      },
      {
        id: "spec-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "Cummins ISB6.7 E5 250, 250 ot kuchi",
          ru: "Cummins ISB6.7 E5 250, 250 л. с.",
          en: "Cummins ISB6.7 E5 250, 250 hp",
        },
      },
      {
        id: "spec-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik, 9-bosqichli ZF9",
          ru: "Механическая, 9-ступенчатая ZF9",
          en: "Manual, 9-speed ZF9",
        },
      },
      {
        id: "spac-4",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "4780",
          ru: "4780",
          en: "4780",
        },
      },
      {
        id: "spac-5",
        name: {
          uz: "Ustki qurilma o'lchamlari, mm",
          ru: "Габаритные размеры надстройки, мм",
          en: "Superstructure overall dimensions, mm",
        },
        value: {
          uz: "8500x2550x2850",
          ru: "8500x2550x2850",
          en: "8500x2550x2850",
        },
      },
      {
        id: "spac-6",
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
        id: "spac-7",
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
        id: "spac-8",
        name: {
          uz: "Platforma bortlari",
          ru: "Борта платформы",
          en: "Platform sides",
        },
        value: {
          uz: "Alyuminiy yoki po'lat ruxlangan bortlar, ochiladigan, sektsiyalar soni — har bir tomonda 2 tadan, balandligi 400 mm. Bortlarning ochilish burchagi — 180°. Alyuminiy qulflarga ega suriluvchi ustunlar har bir tomonda 2 tadan.",
          ru: "Алюминиевые или стальные оцинкованные борта, откидывающиеся, количество секций – 2 шт. на сторону, высота 400 мм. Угол открывания бортов – 180°. Сдвижные стойки 2 шт. на сторону с алюминиевыми замками.",
          en: "Aluminum or steel galvanized sides, fold-down, section count – 2 pcs per side, height 400 mm. Side opening angle – 180°. Sliding posts 2 pcs per side with aluminum locks.",
        },
      },
      {
        id: "spac-9",
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
        id: "spac-10",
        name: {
          uz: "Karkas",
          ru: "Каркас",
          en: "Frame",
        },
        value: {
          uz: "Po'latdan, balandligi 2850 mm. Roliklardagi alyuminiy yo'naltiruvchilar bilan tentni alohida surish mexanizmi: tom, yon tomonlar. Karkasning o'ng orqa ustunida kronshteynli mahkamlagichga ega tomni surish uchun ilgak-bagor. To'rt qatorli taxta panjara. Darvoza ustidagi yechiladigan ko'ndalang to'sin, balandlik bo'yicha cheklovlarsiz yuklash imkonini beradi. Orqa darvoza ustidagi suvni chetlashtiruvchi alyuminiy soyabon. Orqa va old ustunlar ruxlangan.",
          ru: "Стальной, высотой 2850 мм. Механизм раздельного сдвижения тента с алюминиевыми направляющими на роликах: крыша, боковые стороны. Крюк-багор для сдвижения крыши с кронштейном крепления на правой задней стойке каркаса. Обрешетка из доски в четыре ряда. Съемная поперечина крыши над воротами, позволяет осуществлять загрузку без ограничений по высоте. Водоотводящий алюминиевый козырек над задними воротами. Задние и передние стойки оцинкованные.",
          en: "Steel, height 2850 mm. Separate curtain sliding mechanism with aluminum roller guides: roof, side panels. Hook-pole for roof sliding with a mounting bracket on the right rear frame post. Four-row board lathing. Removable roof crossmember above the doors allows loading without height restrictions. Water-diverting aluminum visor over the rear doors. Rear and front posts are galvanized.",
        },
      },
      {
        id: "spac-11",
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
        id: "spac-12",
        name: {
          uz: "Tent",
          ru: "Тент",
          en: "Tarpaulin / Curtain",
        },
        value: {
          uz: "Matoli tent, solishtirma og'irligi 650 g/m². Burchaklarda tent mustahkamlanishi. Ikkala tomondan orqa qismda gorizontal yo'nalishda tent tortgichlar (treshotka). Vertikal yo'nalishda tent tortgichlar (tasmalik va ilgakli tortish qulfi) qadami 0,5 m. Yon pardani orqaga oson surish uchun yechiladigan old parda shtangasi.",
          ru: "Тент из ткани, удельный вес 650 г/м2 Усиление тента крыши на углах. Натяжители тента в горизонтальном направлении (трещотка) сзади с обеих сторон. Натяжители тента в вертикальном направлении (натяжной замок со стропом и крюком) шаг 0,5 м. Съёмная передняя штанга боковой шторы для облегченного сдвижения шторы назад.",
          en: "Fabric tarpaulin, specific weight 650 g/m². Roof tarpaulin reinforcement at corners. Horizontal tarpaulin tensioners (ratchet) at the rear on both sides. Vertical tarpaulin tensioners (tension lock with strap and hook) step 0.5 m. Removable front bar of the side curtain for easier movement backward.",
        },
      },
      {
        id: "spac-13",
        name: {
          uz: "Boshqa jihozlar",
          ru: "Прочее оборудование",
          en: "Other equipment",
        },
        value: {
          uz: "Plastik qanotlar, energiyani yutuvchi materialdan loydan himoya vositalari (bryzgoviki). Yon namlikdan himoyalangan gabarit chiroqlari. Baza shassisining orqa urilishga qarshi bufer to'sini. Avtomobildan foydalanish talablariga muvofiq yorug'lik qaytaruvchi lenta va yoritish moslamalari. Ruxlangan chiqadigan zinapoya. Platformaga chiqish uchun tutqich.",
          ru: "Пластиковые крылья, брызговики из энергопоглощающего материала. Боковые влагозащитные габаритные огни. Задний противоподкатный брус от базового шасси. Устройства световой сигнализации и светоотражающая лента в соответствии с требованиями по эксплуатации автомобиля. Оцинкованная выдвижная лестница. Поручень для подъёма на платформу.",
          en: "Plastic mudguards, mud flaps made of energy-absorbing material. Side moisture-proof clearance lights. Rear underrun protective bar from the base chassis. Light signaling devices and reflective tape in accordance with vehicle operation requirements. Galvanized retractable ladder. Grab handle for climbing onto the platform.",
        },
      },
    ],
  },
  {
    id: "kamaz-65657",
    slug: "shtornyy-gruzovik-kamaz-65657",
    arikul: "KAMAZ-65657",
    categorySlug: "shtornye-avtomobili",
    category: "Curtain trucks",
    recommended: true,
    title: {
      uz: "Curtainsider yuk mashinasi KAMAZ 65657",
      ru: "Шторный грузовик КАМАЗ 65657",
      en: "Curtainsider truck KAMAZ 65657",
    },
    price: {
      isPriceOnRequest: true,
      amount: null,
      currecy: "RUB",
    },
    inStock: true,
    media: {
      mainImage: productGalleryKamaz_2_1,
      gallery: [
        productGalleryKamaz_2_1,
        productGalleryKamaz_2_2,
        productGalleryKamaz_2_3,
        productGalleryKamaz_2_4,
      ],
      blueprints: ["/src/Image/65657-texnik-chizma.png"],
    },
    specifications: [
      {
        id: "specific-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "KAMAZ 65657",
          ru: "КАМАЗ 65657",
          en: "KAMAZ 65657",
        },
      },
      {
        id: "specific-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "KAMAZ 910.12-450, 450 ot kuchi",
          ru: "КАМАЗ 910.12-450, 450 л. с.",
          en: "KAMAZ 910.12-450, 450 hp",
        },
      },
      {
        id: "specific-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Avtomatik, 12 bosqichli",
          ru: "Автоматическая, 12-ступенчатая",
          en: "Automatic 12-speed",
        },
      },
      {
        id: "specific-4",
        name: {
          uz: "Avtomobil uzunligi, mm",
          ru: "Длина автомобиля, мм",
          en: "Vehicle length, mm",
        },
        value: {
          uz: "11065",
          ru: "11065",
          en: "11065",
        },
      },
      {
        id: "specific-5",
        name: {
          uz: "Avtomobil kengligi, mm",
          ru: "Ширина автомобиля, мм",
          en: "Vehicle width, mm",
        },
        value: {
          uz: "2550",
          ru: "2550",
          en: "2550",
        },
      },
      {
        id: "specific-6",
        name: {
          uz: "Avtomobil balandligi, mm",
          ru: "Высота автомобиля, мм",
          en: "Vehicle height, mm",
        },
        value: {
          uz: "3960",
          ru: "3960",
          en: "3960",
        },
      },
      {
        id: "specific-7",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "5150+1350",
          ru: "5150+1350",
          en: "5150+1350",
        },
      },
      {
        id: "specific-8",
        name: {
          uz: "Platforma uzunligi, m",
          ru: "Длина платформы, м",
          en: "Platform length, m",
        },
        value: {
          uz: "8300",
          ru: "8300",
          en: "8300",
        },
      },
      {
        id: "specific-9",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса, кг",
          en: "Gross weight, kg",
        },
        value: {
          uz: "27000",
          ru: "27000",
          en: "27000",
        },
      },
      {
        id: "specific-10",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса, кг",
          en: "Curb weight, kg",
        },
        value: {
          uz: "12200",
          ru: "12200",
          en: "12200",
        },
      },
      {
        id: "specific-11",
        name: {
          uz: "Yuk ko'taruvchanligi, kg",
          ru: "Грузоподъёмность, кг",
          en: "Payload capacity, kg",
        },
        value: {
          uz: "14800",
          ru: "14800",
          en: "14800",
        },
      },
      {
        id: "specific-12",
        name: {
          uz: "Furgon hajmi, m3",
          ru: "Объем фургона, м3",
          en: "Van volume, m3",
        },
        value: {
          uz: "39...52",
          ru: "39...52",
          en: "39...52",
        },
      },
    ],
    fullSpecifications: [
      {
        id: "spec-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "KAMAZ 65657",
          ru: "КАМАЗ 65657",
          en: "KAMAZ 65657",
        },
      },
      {
        id: "spec-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "KAMAZ 910.12-450, 450 ot kuchi",
          ru: "КАМАЗ 910.12-450, 450 л. с.",
          en: "KAMAZ 910.12-450, 450 hp",
        },
      },
      {
        id: "spec-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Avtomatik, 12 bosqichli Fast Gear F12JZ2200+QH50/00-0A021B6",
          ru: "Автоматическая, 12-ступенчатая Fast Gear F12JZ2200+QH50/00-0A021B6",
          en: "Automatic, 12-speed Fast Gear F12JZ2200+QH50/00-0A021B6",
        },
      },
      {
        id: "spac-4",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "5150+1350",
          ru: "5150+1350",
          en: "5150+1350",
        },
      },
      {
        id: "spac-5",
        name: {
          uz: "Ustki qurilma o'lchamlari, mm",
          ru: "Габаритные размеры надстройки, мм",
          en: "Superstructure overall dimensions, mm",
        },
        value: {
          uz: "8300x2550x2600",
          ru: "8300x2550x2600",
          en: "8300x2550x2600",
        },
      },
      {
        id: "spac-6",
        name: {
          uz: "Bort platformasi asosi",
          ru: "Основание бортовой платформы",
          en: "Flatbed platform base",
        },
        value: {
          uz: "Ochiq profillardan payvandlangan karkas konstruktsiyasi. Bo'ylama lonjeronlar va ko'ndalang balkalardan, HOSSEN kontur va old devor profilidan iborat. Platformaning o'rovchi profilida yukni mahkamlash uchun ruxlangan ilmoqlar (yuklash kengligini kamaytirmaydi), har bir tomonda 8 tadan.",
          ru: "Сварная рамная конструкция из открытых профилей. Состоит из продольных лонжеронов и поперечных балок, окантовочного и передней стенки профиля HOSSEN. Оцинкованные петли крепления груза в окантовочном профиле платформы (не уменьшают погрузочную ширину платформы), 8 шт. с каждой стороны.",
          en: "Welded frame construction made of open profiles. Consists of longitudinal side members and cross beams, edging and front wall of the HOSSEN profile. Galvanized cargo attachment loops in the edging profile (do not reduce platform loading width), 8 pcs on each side.",
        },
      },
      {
        id: "spac-7",
        name: {
          uz: "Pol",
          ru: "Пол",
          en: "Floor",
        },
        value: {
          uz: "Qalinligi 27 mm bo'lgan sirpanishga qarshi qoplamali namlikka chidamli fanera.",
          ru: "Влагостойкая фанера с противоскользящим покрытием толщиной 27 мм.",
          en: "Moisture-resistant plywood with anti-slip coating, 27 mm thick.",
        },
      },
      {
        id: "spac-8",
        name: {
          uz: "Platforma bortlari",
          ru: "Борта платформы",
          en: "Platform sides",
        },
        value: {
          uz: "Alyuminiy bortlar, ochiladigan, sektsiyalar soni — har bir tomonda 2 tadan, balandligi 600 mm. Bortlarning ochilish burchagi — 180°. Alyuminiy qulflarga ega suriluvchi ustunlar har bir tomonda 2 tadan.",
          ru: "Алюминиевые борта, откидывающиеся, количество секций – 2 шт. на сторону, высота 600 мм. Угол открывания бортов – 180°. Сдвижные стойки 2 шт. на сторону с алюминиевыми замками.",
          en: "Aluminum sides, fold-down, section count – 2 pcs per side, height 600 mm. Side opening angle – 180°. Sliding posts 2 pcs per side with aluminum locks.",
        },
      },
      {
        id: "spac-9",
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
        id: "spac-10",
        name: {
          uz: "Karkas",
          ru: "Каркас",
          en: "Frame",
        },
        value: {
          uz: "Po'latdan, balandligi 2600 mm. Roliklardagi alyuminiy yo'naltiruvchilar bilan tentni alohida surish mexanizmi: tom, yon tomonlar. Karkasning o'ng orqa ustunida kronshteynli mahkamlagichga ega tomni surish uchun ilgak-bagor. Uch qatorli taxta panjara. Darvoza ustidagi yechiladigan ko'ndalang to'sin, balandlik bo'yicha cheklovlarsiz yuklash imkonini beradi. Orqa darvoza ustidagi suvni chetlashtiruvchi alyuminiy soyabon. Orqa va old ustunlar ruxlangan.",
          ru: "Стальной, высотой 2600 мм. Механизм раздельного сдвижения тента с алюминиевыми направляющими на роликах: крыша, боковые стороны. Крюк-багор для сдвижения крыши с кронштейном крепления на правой задней стойке каркаса. Обрешетка из доски в три ряда. Съемная поперечина крыши над воротами, позволяет осуществлять загрузку без ограничений по высоте. Водоотводящий алюминиевый козырек над задними воротами. Задние и передние стойки оцинкованные.",
          en: "Steel, height 2600 mm. Separate curtain sliding mechanism with aluminum roller guides: roof, side panels. Hook-pole for roof sliding with a mounting bracket on the right rear frame post. Three-row board lathing. Removable roof crossmember above the doors allows loading without height restrictions. Water-diverting aluminum visor over the rear doors. Rear and front posts are galvanized.",
        },
      },
      {
        id: "spac-11",
        name: {
          uz: "Orqa darvoza",
          ru: "Задние ворота",
          en: "Rear doors",
        },
        value: {
          uz: "Karkas turidagi ochiladigan darvoza, tashqi qoplamasi armaturalangan plastik, ichkisi 6 mm qalinlikdagi namlikka chidamli fanera. Ochiq holatda fiksatsiya qilish imkoniyatiga ega. Zanglamaydigan po'latdan furnitura, har bir eshikka 2 tadan shtanga va 4 tadan oshiq-moshiq. Ochiq holatda fiksatsiya qilish imkoniyatiga ega.",
          ru: "Распашные ворота каркасного типа, наружное покрытие армированный пластик, внутреннее влагостойкая фанера толщиной 6 мм. С возможностью фиксации в открытом положении. Фурнитура из нержавеющей стали с замками типа PUSH, по 2 штанги на дверь по 4 петли на дверь. С возможностью фиксации в открытом положении.",
          en: "Hinged frame-type doors, outer layer reinforced plastic, inner layer 6 mm moisture-resistant plywood. Can be fixed in open position. Stainless steel hardware with PUSH type locks, 2 rods per door, 4 hinges per door. Fixable in open position.",
        },
      },
      {
        id: "spac-12",
        name: {
          uz: "Tent",
          ru: "Тент",
          en: "Tarpaulin / Curtain",
        },
        value: {
          uz: "Matoli tent, solishtirma og'irligi 650 g/m². Burchaklarda tent mustahkamlanishi. Ikkala tomondan orqa qismda gorizontal yo'nalishda tent tortgichlar (treshotka). Vertikal yo'nalishda tent tortgichlar (tasmalik va ilgakli tortish qulfi) qadami 0,5 m. Yon pardani orqaga oson surish uchun yechiladigan old parda shtangasi.",
          ru: "Тент из ткани, удельный вес 650 г/м2 Усиление тента крыши на углах. Натяжители тента в горизонтальном направлении (трещотка) сзади с обеих сторон. Натяжители тента в вертикальном направлении (натяжной замок со стропом и крюком) шаг 0,5 м. Съёмная передняя штанга боковой шторы для облегченного сдвижения шторы назад.",
          en: "Fabric tarpaulin, specific weight 650 g/m². Roof tarpaulin reinforcement at corners. Horizontal tarpaulin tensioners (ratchet) at the rear on both sides. Vertical tarpaulin tensioners (tension lock with strap and hook) step 0.5 m. Removable front bar of the side curtain for easier movement backward.",
        },
      },
      {
        id: "spac-13",
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
  {
    id: "maz-631228-inman-it-150",
    slug: "kran-manipulyator-maz-631228-s-kmu-inman-it-150",
    arikul: "МАЗ-631228",
    categorySlug: "krany-manipulyatory",
    category: "Crane manipulators",
    recommended: true,
    title: {
      uz: "Kran-manipulyator MAZ 631228 INMAN IT 150 bilan",
      ru: "Кран-манипулятор МАЗ 631228 с КМУ ИНМАН ИТ 150",
      en: "Crane manipulator MAZ 631228 with KMU INMAN IT 150",
    },
    price: {
      isPriceOnRequest: true,
      amount: null,
      currency: "RUB",
    },
    inStock: true,
    media: {
      mainImage: productGalleryMaz631228,
      gallery: [
        productGalleryMaz631228_2,
        productGalleryMaz631228_3,
        productGalleryMaz631228_4,
        productGalleryMaz631228_5,
      ],
      blueprints: ["/src/Image/kran-manipulator-texnika.jpg"],
    },
    specification: [
      {
        id: "specific-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "MAZ 631228",
          ru: "МАЗ 631228",
          en: "MAZ 631228",
        },
      },
      {
        id: "specific-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "WP 12.430E50, 423 ot kuchi",
          ru: "WP 12.430E50, 423 л. с.",
          en: "WP 12.430E50, 423 hp",
        },
      },
      {
        id: "specific-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik, 12-ti yoki 16-ti bosqichli",
          ru: "Механическая, 12-ти или 16-ти ступ.",
          en: "Manual, 12-speed or 16-speed",
        },
      },
      {
        id: "specific-4",
        name: {
          uz: "Avtomobil uzunligi, mm",
          ru: "Длина автомобиля, мм",
          en: "Vehicle length, mm",
        },
        value: {
          uz: "10560",
          ru: "10560",
          en: "10560",
        },
      },
      {
        id: "specific-5",
        name: {
          uz: "Avtomobil kengligi, mm",
          ru: "Ширина автомобиля, мм",
          en: "Vehicle width, mm",
        },
        value: {
          uz: "2550",
          ru: "2550",
          en: "2550",
        },
      },
      {
        id: "specific-6",
        name: {
          uz: "Avtomobil balandligi, mm",
          ru: "Высота автомобиля, мм",
          en: "Vehicle height, mm",
        },
        value: {
          uz: "3700",
          ru: "3700",
          en: "3700",
        },
      },
      {
        id: "specific-7",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "4400+1400 yoki 4600+1400",
          ru: "4400+1400 или 4600+1400",
          en: "4400+1400 or 4600+1400",
        },
      },
      {
        id: "specific-8",
        name: {
          uz: "Platforma uzunligi, m",
          ru: "Длина платформы, м",
          en: "Platform length, m",
        },
        value: {
          uz: "6700",
          ru: "6700",
          en: "6700",
        },
      },
      {
        id: "specific-9",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса, кг",
          en: "Gross weight, kg",
        },
        value: {
          uz: "33500",
          ru: "33500",
          en: "33500",
        },
      },
      {
        id: "specific-10",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса, кг",
          en: "Curb weight, kg",
        },
        value: {
          uz: "16140",
          ru: "16140",
          en: "16140",
        },
      },
      {
        id: "specific-11",
        name: {
          uz: "Yuk ko'taruvchanligi, kg",
          ru: "Грузоподъёмность, кг",
          en: "Payload capacity, kg",
        },
        value: {
          uz: "17360",
          ru: "17360",
          en: "17360",
        },
      },
      {
        id: "specific-12",
        name: {
          uz: "KMU yuk ko'taruvchanligi, tonna",
          ru: "Грузоподъёмность КМУ, тонн",
          en: "Crane capacity, tons",
        },
        value: {
          uz: "7.05",
          ru: "7,05",
          en: "7.05",
        },
      },
      {
        id: "specific-13",
        name: {
          uz: "Strela chiqqan masofasi, m",
          ru: "Вылет стрелы, м",
          en: "Boom reach, m",
        },
        value: {
          uz: "19",
          ru: "19",
          en: "19",
        },
      },
    ],
    fullSpecifications: [
      {
        id: "spac-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "MAZ 631228",
          ru: "МАЗ 631228",
          en: "MAZ 631228",
        },
      },
      {
        id: "spac-2",
        name: {
          uz: "Ustki qurilma turi",
          ru: "Тип надстройки",
          en: "Superstructure type",
        },
        value: {
          uz: "KMU bilan bortli platforma",
          ru: "Бортовая платформа с КМУ",
          en: "Flatbed platform with loader crane",
        },
      },
      {
        id: "spac-3",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "WP 12.430E50, 423 ot kuchi",
          ru: "WP 12.430E50, 423 л. с.",
          en: "WP 12.430E50, 423 hp",
        },
      },
      {
        id: "spac-4",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik, 12-ti yoki 16-ti bosqichli",
          ru: "Механическая, 12-ти или 16-ти ступенчатая",
          en: "Manual, 12-speed or 16-speed",
        },
      },
      {
        id: "spac-5",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "4400+1400 yoki 4600+1400",
          ru: "4400+1400 или 4600+1400",
          en: "4400+1400 or 4600+1400",
        },
      },
      {
        id: "spac-6",
        name: {
          uz: "Avtomobil o'lchamlari (UzXKxB), mm",
          ru: "Габаритные размеры автомобиля, ДхШхВ (мм)",
          en: "Vehicle overall dimensions, LxWxH (mm)",
        },
        value: {
          uz: "10560x2550x3700",
          ru: "10560x2550x3700",
          en: "10560x2550x3700",
        },
      },
      {
        id: "spac-7",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса (кг)",
          en: "Gross weight, kg",
        },
        value: {
          uz: "33500",
          ru: "33500",
          en: "33500",
        },
      },
      {
        id: "spac-8",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса (кг)",
          en: "Curb weight, kg",
        },
        value: {
          uz: "16140",
          ru: "16140",
          en: "16140",
        },
      },
      {
        id: "spac-9",
        name: {
          uz: "Bort platformasi o'lchamlari (UzXKxB), mm",
          ru: "Габаритные размеры бортовой платформы, ДхШхВ (мм)",
          en: "Flatbed platform overall dimensions, LxWxH (mm)",
        },
        value: {
          uz: "6700x2550x600",
          ru: "6700x2550x600",
          en: "6700x2550x600",
        },
      },
      {
        id: "spac-10",
        name: {
          uz: "Bort platformasi asosi",
          ru: "Основание бортовой платформы",
          en: "Flatbed platform base",
        },
        value: {
          uz: "Ochiq profillardan payvandlangan karkas konstruktsiyasi. Bo'ylama lonjeronlar va ko'ndalang balkalardan, HOSSEN kontur va old devor profilidan iborat. Platformaning o'rovchi profilida yukni mahkamlash uchun ruxlangan ilmoqlar (yuklash kengligini kamaytirmaydi), har bir tomonda 5 tadan.",
          ru: "Сварная рамная конструкция из открытых профилей. Состоит из продольных лонжеронов и поперечных балок, окантовочного и передней стенки профиля HOSSEN. Оцинкованные петли крепления груза в окантовочном профиле платформы (не уменьшают погрузочную ширину платформы), 5 шт. с каждой стороны.",
          en: "Welded frame structure made of open profiles. Consists of longitudinal side members and cross beams, edging and front wall of HOSSEN profile. Galvanized load securing loops in the edging profile (do not reduce loading width), 5 pcs per side.",
        },
      },
      {
        id: "spac-11",
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
        id: "spac-12",
        name: {
          uz: "Platforma bortlari",
          ru: "Борта платформы",
          en: "Platform sides",
        },
        value: {
          uz: "Po'lat ruxlangan yoki alyuminiy bortlar, ochiladigan, sektsiyalar soni — har bir tomonda 2 tadan, balandligi 600 mm. Bortlarning ochilish burchagi — 180°. Alyuminiy qulflarga ega tez yechiladigan ustunlar har bir tomonda 2 tadan.",
          ru: "Стальные оцинкованные или алюминиевые борта, откидывающиеся, количество секций – 2 шт. на сторону, высота 600 мм. Угол открывания бортов – 180°. Быстросъёмные стойки ломающегося типа по 2 на сторону с алюминиевыми замками.",
          en: "Galvanized steel or aluminum sides, fold-down, section count – 2 pcs per side, height 600 mm. Side opening angle – 180°. Quick-release breaking-type posts 2 pcs per side with aluminum locks.",
        },
      },
      {
        id: "spac-13",
        name: {
          uz: "Boshqa jihozlar",
          ru: "Прочее оборудование",
          en: "Other equipment",
        },
        value: {
          uz: "Plastik qanotlar, loydan himoya vositalari (bryzgoviki). Yon namlikdan himoyalangan gabarit chiroqlari. Alyuminiy profildan tayyorlangan yon himoya. Orqa himoya moslamasi. Platformaga chiqish uchun zinapoya.",
          ru: "Пластиковые крылья, брызговики. Боковые влагозащитные габаритные огни. Боковая защита из алюминиевых профилей на откидных оцинкованных кронштейнах. Заднее защитное устройство. Ступень для подъема на платформу.",
          en: "Plastic mudguards, mud flaps. Side moisture-proof clearance lights. Side protection made of aluminum profiles on folding galvanized brackets. Rear protective device. Step for climbing onto the platform.",
        },
      },
      {
        id: "spac-14",
        name: {
          uz: "Maksimal yuk momenti, tm",
          ru: "Максимальный грузовой момент, тм",
          en: "Max load moment, tm",
        },
        value: {
          uz: "15.0",
          ru: "15,0",
          en: "15.0",
        },
      },
      {
        id: "spac-15",
        name: {
          uz: "Nominal yuk ko'tarishi, kg",
          ru: "Номинальная грузоподъемность, кг",
          en: "Nominal capacity, kg",
        },
        value: {
          uz: "7050",
          ru: "7050",
          en: "7050",
        },
      },
      {
        id: "spac-16",
        name: {
          uz: "Nominal ishchi radius, m",
          ru: "Номинальный рабочий радиус, м",
          en: "Nominal working radius, m",
        },
        value: {
          uz: "2.0",
          ru: "2,0",
          en: "2.0",
        },
      },
      {
        id: "spac-17",
        name: {
          uz: "Maksimal masofadagi yuk ko'tarishi, kg",
          ru: "Г/п на максимальном вылете, кг",
          en: "Capacity at max reach, kg",
        },
        value: {
          uz: "300",
          ru: "300",
          en: "300",
        },
      },
      {
        id: "spac-18",
        name: {
          uz: "Maksimal strela chiqqan masofasi, m",
          ru: "Максимальный вылет стрелы, м",
          en: "Max boom reach, m",
        },
        value: {
          uz: "19.0",
          ru: "19,0",
          en: "19.0",
        },
      },
      {
        id: "spac-19",
        name: {
          uz: "Strela / sektsiyalar soni",
          ru: "Стрела / количество секций",
          en: "Boom / section count",
        },
        value: {
          uz: "Geksagonal / 6 sektsiya",
          ru: "Гексагональная / 6 секций",
          en: "Hexagonal / 6 sections",
        },
      },
      {
        id: "spac-20",
        name: {
          uz: "Kolonna o'z o'qi atrofida burilish burchagi, grad",
          ru: "Угол вращения колонны вокруг своей оси, град",
          en: "Column rotation angle around its axis, deg",
        },
        value: {
          uz: "360° cheklovlarsiz",
          ru: "360° без ограничений",
          en: "360° without limits",
        },
      },
      {
        id: "spac-21",
        name: {
          uz: "Strela ko'tarilish burchagi, °",
          ru: "Угол подъема стрелы, °",
          en: "Boom elevation angle, °",
        },
        value: {
          uz: "0° - 75°",
          ru: "0° - 75°",
          en: "0° - 75°",
        },
      },
      {
        id: "spac-22",
        name: {
          uz: "Qo'shimcha (Optsionally)",
          ru: "Опционально",
          en: "Optionally",
        },
        value: {
          uz: "Burg'ulash qurilmasini o'rnatish, montaj savati",
          ru: "Установка бура, монтажная корзины",
          en: "Drill installation, mounting basket",
        },
      },
    ],
  },
  {
    id: "kamaz-43082-hktc-hlc-5014",
    slug: "kran-manipulyator-kamaz-43082-s-kmu-hktc-hlc-5014",
    arikul: "KAMAZ-43082",
    categorySlug: "krany-manipulyatory",
    category: "Crane manipulators",
    recommended: true,
    title: {
      uz: "Kran-manipulyator KAMAZ 43082 HKTC HLC-5014 bilan",
      ru: "Кран-манипулятор КАМАЗ 43082 с КМУ HKTC HLC-5014",
      en: "Crane manipulator KAMAZ 43082 with KMU HKTC HLC-5014",
    },
    price: {
      isPriceOnRequest: true,
      amount: null,
      currency: "RUB",
    },
    inStock: true,
    media: {
      mainImage: productGalleryKamaz43082_1,
      gallery: [
        productGalleryKamaz43082_2,
        productGalleryKamaz43082_3,
        productGalleryKamaz43082_4,
        productGalleryKamaz43082_5,
      ],
      blueprints: ["/src/Image/kran-manipulator-texnika.jpg"],
    },
    specification: [
      {
        id: "specific-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "KAMAZ 43082",
          ru: "КАМАЗ 43082",
          en: "KAMAZ 43082",
        },
      },
      {
        id: "specific-2",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "Cummins ISF3.8S5168, 166 ot kuchi",
          ru: "Cummins ISF3.8S5168, 166 л. с.",
          en: "Cummins ISF3.8S5168, 166 hp",
        },
      },
      {
        id: "specific-3",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik, 6 bosqichli",
          ru: "Механическая, 6-ти ступенчатая",
          en: "Manual 6-speed",
        },
      },
      {
        id: "specific-4",
        name: {
          uz: "Avtomobil uzunligi, mm",
          ru: "Длина автомобиля, мм",
          en: "Vehicle length, mm",
        },
        value: {
          uz: "9230",
          ru: "9230",
          en: "9230",
        },
      },
      {
        id: "specific-5",
        name: {
          uz: "Avtomobil kengligi, mm",
          ru: "Ширина автомобиля, мм",
          en: "Vehicle width, mm",
        },
        value: {
          uz: "2550",
          ru: "2550",
          en: "2550",
        },
      },
      {
        id: "specific-6",
        name: {
          uz: "Avtomobil balandligi, mm",
          ru: "Высота автомобиля, мм",
          en: "Vehicle height, mm",
        },
        value: {
          uz: "2610",
          ru: "2610",
          en: "2610",
        },
      },
      {
        id: "specific-7",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "5300",
          ru: "5300",
          en: "5300",
        },
      },
      {
        id: "specific-8",
        name: {
          uz: "Platforma uzunligi, m",
          ru: "Длина платформы, м",
          en: "Platform length, m",
        },
        value: {
          uz: "6300",
          ru: "6300",
          en: "6300",
        },
      },
      {
        id: "specific-9",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса, кг",
          en: "Gross weight, kg",
        },
        value: {
          uz: "11990",
          ru: "11990",
          en: "11990",
        },
      },
      {
        id: "specific-10",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса, кг",
          en: "Curb weight, kg",
        },
        value: {
          uz: "7650",
          ru: "7650",
          en: "7650",
        },
      },
      {
        id: "specific-11",
        name: {
          uz: "Yuk ko'taruvchanligi, kg",
          ru: "Грузоподъёмность, кг",
          en: "Payload capacity, kg",
        },
        value: {
          uz: "5500",
          ru: "5500",
          en: "5500",
        },
      },
      {
        id: "specific-12",
        name: {
          uz: "KMU yuk ko'taruvchanligi, tonna",
          ru: "Грузоподъёмность КМУ, тонн",
          en: "Crane capacity, tons",
        },
        value: {
          uz: "5.5",
          ru: "5,5",
          en: "5.5",
        },
      },
      {
        id: "specific-13",
        name: {
          uz: "Strela chiqqan masofasi, m",
          ru: "Вылет стрелы, м",
          en: "Boom reach, m",
        },
        value: {
          uz: "10.7",
          ru: "10,7",
          en: "10.7",
        },
      },
    ],
    fullSpecifications: [
      {
        id: "spac-1",
        name: {
          uz: "Baza shassisi",
          ru: "Базовое шасси",
          en: "Base chassis",
        },
        value: {
          uz: "KAMAZ 43082",
          ru: "КАМАЗ 43082",
          en: "KAMAZ 43082",
        },
      },
      {
        id: "spac-2",
        name: {
          uz: "Ustki qurilma turi",
          ru: "Тип надстройки",
          en: "Superstructure type",
        },
        value: {
          uz: "KMU bilan bortli platforma",
          ru: "Бортовая платформа с КМУ",
          en: "Flatbed platform with loader crane",
        },
      },
      {
        id: "spac-3",
        name: {
          uz: "Dvigatel",
          ru: "Двигатель",
          en: "Engine",
        },
        value: {
          uz: "Cummins ISF3.8S5168, 166 ot kuchi",
          ru: "Cummins ISF3.8S5168, 166 л. с.",
          en: "Cummins ISF3.8S5168, 166 hp",
        },
      },
      {
        id: "spac-4",
        name: {
          uz: "Uzatmalar qutisi (KPP)",
          ru: "КПП",
          en: "Transmission",
        },
        value: {
          uz: "Mexanik, 6 bosqichli",
          ru: "Механическая, 6-ти ступенчатая",
          en: "Manual 6-speed",
        },
      },
      {
        id: "spac-5",
        name: {
          uz: "G'ildirak bazasi, mm",
          ru: "Колесная база, мм",
          en: "Wheelbase, mm",
        },
        value: {
          uz: "5300",
          ru: "5300",
          en: "5300",
        },
      },
      {
        id: "spac-6",
        name: {
          uz: "Avtomobil o'lchamlari (UzXKxB), mm",
          ru: "Габаритные размеры автомобиля, ДхШхВ (мм)",
          en: "Vehicle overall dimensions, LxWxH (mm)",
        },
        value: {
          uz: "9230x2550x2610",
          ru: "9230x2550x2610",
          en: "9230x2550x2610",
        },
      },
      {
        id: "spac-7",
        name: {
          uz: "To'liq massasi, kg",
          ru: "Полная масса (кг)",
          en: "Gross weight, kg",
        },
        value: {
          uz: "11990",
          ru: "11990",
          en: "11990",
        },
      },
      {
        id: "spac-8",
        name: {
          uz: "Jihozlangan massasi, kg",
          ru: "Снаряженная масса (кг)",
          en: "Curb weight, kg",
        },
        value: {
          uz: "7650",
          ru: "7650",
          en: "7650",
        },
      },
      {
        id: "spac-9",
        name: {
          uz: "Bort platformasi o'lchamlari (UzXKxB), mm",
          ru: "Габаритные размеры бортовой платформы, ДхШхВ (мм)",
          en: "Flatbed platform overall dimensions, LxWxH (mm)",
        },
        value: {
          uz: "6300x2550x600",
          ru: "6300x2550x600",
          en: "6300x2550x600",
        },
      },
      {
        id: "spac-10",
        name: {
          uz: "Bort platformasi asosi",
          ru: "Основание бортовой платформы",
          en: "Flatbed platform base",
        },
        value: {
          uz: "Ochiq profillardan payvandlangan karkas konstruktsiyasi. Bo'ylama lonjeronlar va ko'ndalang balkalardan, HOSSEN kontur va old devor profilidan iborat. Platformaning o'rovchi profilida yukni mahkamlash uchun ruxlangan ilmoqlar (yuklash kengligini kamaytirmaydi), har bir tomonda 5 tadan.",
          ru: "Сварная рамная конструкция из открытых профилей. Состоит из продольных лонжеронов и поперечных балок, окантовочного и передней стенки профиля HOSSEN. Оцинкованные петли крепления груза в окантовочном профиле платформы (не уменьшают погрузочную ширину платформы), 5 шт. с каждой стороны.",
          en: "Welded frame structure made of open profiles. Consists of longitudinal side members and cross beams, edging and front wall of HOSSEN profile. Galvanized load securing loops in the edging profile (do not reduce loading width), 5 pcs per side.",
        },
      },
      {
        id: "spac-11",
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
        id: "spac-12",
        name: {
          uz: "Platforma bortlari",
          ru: "Борта платформы",
          en: "Platform sides",
        },
        value: {
          uz: "Po'lat ruxlangan yoki alyuminiy bortlar, ochiladigan, sektsiyalar soni — har bir tomonda 2 tadan, balandligi 600 mm. Bortlarning ochilish burchagi — 180°. Alyuminiy qulflarga ega tez yechiladigan ustunlar har bir tomonda 1 tadan.",
          ru: "Стальные оцинкованные или алюминиевые борта, откидывающиеся, количество секций – 2 шт. на сторону, высота 600 мм. Угол открывания бортов – 180°. Быстросъёмные стойки ломающегося типа по 1 на сторону с алюминиевыми замками.",
          en: "Galvanized steel or aluminum sides, fold-down, section count – 2 pcs per side, height 600 mm. Side opening angle – 180°. Quick-release breaking-type posts 1 pc per side with aluminum locks.",
        },
      },
      {
        id: "spac-13",
        name: {
          uz: "Boshqa jihozlar",
          ru: "Прочее оборудование",
          en: "Other equipment",
        },
        value: {
          uz: "Plastik qanotlar, loydan himoya vositalari (bryzgoviki). Yon namlikdan himoyalangan gabarit chiroqlari. Alyuminiy profildan tayyorlangan yon himoya. Orqa himoya moslamasi. Platformaga chiqish uchun zinapoya.",
          ru: "Пластиковые крылья, брызговики. Боковые влагозащитные габаритные огни. Боковая защита из алюминиевых профилей на откидных оцинкованных кронштейнах. Заднее защитное устройство. Ступень для подъема на платформу.",
          en: "Plastic mudguards, mud flaps. Side moisture-proof clearance lights. Side protection made of aluminum profiles on folding galvanized brackets. Rear protective device. Step for climbing onto the platform.",
        },
      },
      {
        id: "spac-14",
        name: {
          uz: "Maksimal yuk momenti, tm",
          ru: "Максимальный грузовой момент, тм",
          en: "Max load moment, tm",
        },
        value: {
          uz: "12.1",
          ru: "12,1",
          en: "12.1",
        },
      },
      {
        id: "spac-15",
        name: {
          uz: "Maksimal yuk ko'tarishi, kg",
          ru: "Максимальная грузоподъемность, кг",
          en: "Max lifting capacity, kg",
        },
        value: {
          uz: "5500",
          ru: "5500",
          en: "5500",
        },
      },
      {
        id: "spac-16",
        name: {
          uz: "Nominal ishchi radius, m",
          ru: "Номинальный рабочий радиус, м",
          en: "Nominal working radius, m",
        },
        value: {
          uz: "2.0",
          ru: "2,0",
          en: "2.0",
        },
      },
      {
        id: "spac-17",
        name: {
          uz: "Maksimal masofadagi yuk ko'tarishi, kg",
          ru: "Г/п на максимальном вылете, кг",
          en: "Capacity at max reach, kg",
        },
        value: {
          uz: "990",
          ru: "990",
          en: "990",
        },
      },
      {
        id: "spac-18",
        name: {
          uz: "Maksimal strela chiqqan masofasi, m",
          ru: "Максимальный вылет стрелы, м",
          en: "Max boom reach, m",
        },
        value: {
          uz: "10.7",
          ru: "10,7",
          en: "10.7",
        },
      },
      {
        id: "spac-19",
        name: {
          uz: "Strela / sektsiyalar soni",
          ru: "Стрела / количество секций",
          en: "Boom / section count",
        },
        value: {
          uz: "Geksagonal / 5 sektsiya",
          ru: "Гексагональная / 5 секций",
          en: "Hexagonal / 5 sections",
        },
      },
      {
        id: "spac-20",
        name: {
          uz: "Kolonna o'z o'qi atrofida burilish burchagi, grad",
          ru: "Угол вращения колонны вокруг своей оси, град",
          en: "Column rotation angle around its axis, deg",
        },
        value: {
          uz: "360°",
          ru: "360°",
          en: "360°",
        },
      },
      {
        id: "spac-21",
        name: {
          uz: "Strela nishablik burchagi, grad",
          ru: "Угол наклона стрелы, град",
          en: "Boom inclination angle, deg",
        },
        value: {
          uz: "0 - 76°",
          ru: "0 - 76°",
          en: "0 - 76°",
        },
      },
      {
        id: "spac-22",
        name: {
          uz: "Old autrigerlar",
          ru: "Передние аутригеры",
          en: "Front outriggers",
        },
        value: {
          uz: "Kengligi 4.17 m",
          ru: "Размах 4,17 м",
          en: "Span 4.17 m",
        },
      },
      {
        id: "spac-23",
        name: {
          uz: "Orqa autrigerlar",
          ru: "Задние аутригеры",
          en: "Rear outriggers",
        },
        value: {
          uz: "Mavjud",
          ru: "Наличие",
          en: "Present",
        },
      },
    ],
  },
];
