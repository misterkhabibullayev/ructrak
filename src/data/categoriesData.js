import kategoriyImg1 from "../Image/kategoriy-1.webp";
import kategoriyImg2 from "../Image/kategoriy-2.webp";
import kategoriyImg3 from "../Image/kategoriy-3.png";
import kategoriyImg4 from "../Image/kategoriy-4.webp";
import kategoriyImg5 from "../Image/kategoriy-5.webp";
import kategoriyImg6 from "../Image/kategoriy-6.webp";
import kategoriyImg7 from "../Image/kategoriy-7.webp";
import kategoriyImg8 from "../Image/kategoriy-8.png";
import kategoriyImg9 from "../Image/kategoriy-9.webp";
import kategoriyImg10 from "../Image/kategoriy-10.png";
import kategoriyImg11 from "../Image/kategoriy-11.webp";

export const categoriesData = [
  {
    id: 1,
    slug: "shtornye-avtomobili",
    img: kategoriyImg1,
    title: {
      uz: "Pardali avtomobillar",
      ru: "Шторные автомобили",
      en: "Curtain trucks",
    },
    filters: [
      {
        id: "brand",
        type: "checkbox",
        title: {
          ru: "Марка",
          uz: "Brend",
          en: "Brand",
        },
        // Список марок с локализацией на узбекский (латиница) и русский (кириллица)
        options: [
          {
            id: "gaz",
            label: {
              ru: "ГАЗ",
              uz: "GAZ",
              en: "GAZ",
            },
          },
          {
            id: "kamaz",
            label: {
              ru: "КАМАЗ",
              uz: "KAMAZ",
              en: "KAMAZ",
            },
          },
          {
            id: "jac",
            label: {
              ru: "JAC",
              uz: "JAC",
              en: "JAC",
            },
          },
          {
            id: "daewoo",
            label: {
              ru: "DAEWOO",
              uz: "DAEWOO",
              en: "DAEWOO",
            },
          },
          {
            id: "foton",
            label: {
              ru: "FOTON",
              uz: "FOTON",
              en: "FOTON",
            },
          },
          {
            id: "dong_feng",
            label: {
              ru: "DONG FENG",
              uz: "DONG FENG",
              en: "DONG FENG",
            },
          },
          {
            id: "maz",
            label: {
              ru: "МАЗ",
              uz: "MAZ",
              en: "MAZ",
            },
          },
        ],
      },
      {
        id: "total_weight",
        type: "checkbox",
        title: {
          ru: "Полная масса, тонн",
          uz: "To'liq massasi, tonna",
          en: "Gross weight, tons",
        },
        options: [
          {
            id: "up_to_12",
            label: {
              ru: "до 12",
              uz: "12 gacha",
              en: "up to 12",
            },
          },
          {
            id: "up_to_20",
            label: {
              ru: "до 20",
              uz: "20 gacha",
              en: "up to 20",
            },
          },
          {
            id: "up_to_5_5",
            label: {
              ru: "до 5,5",
              uz: "5.5 gacha",
              en: "up to 5.5",
            },
          },
          {
            id: "over_20",
            label: {
              ru: "свыше 20",
              uz: "20 dan yuqori",
              en: "over 20",
            },
          },
        ],
      },
    ],
    description: {
      uz: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none;
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";
            position: absolute;
            left: 0;
            color: #fec80b;
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>Pardali yuk mashinasi ortish qulayligi va yo'ldagi ishonchlilikni o'zida mujassam etadi. Kuchli dvigatellar va zamonaviy texnologiyalar boshqaruvni xavfsiz va qulay qiladi. "RusTrak" kompaniyasi har qanday vazifaga tayyor bo'lgan pardali avtomobillarni taklif etadi. Ishonchli konstruksiya va sifatli materiallar mashinalarning uzoq xizmat qilishini ta'minlaydi. Mos keladigan mashinani tanlash eng turli xil vazifalarni uddalashga yordam beradi. Har bir model amaliylik va chidamlilikni uyg'unlashtirgan holda, egalarining ehtiyojlarini hisobga olgan holda yaratiladi.</p>
<h2>Assortiment</h2>
<p>Biz zamonaviy sifat standartlariga javob beradigan tijorat avtomobillarining keng assortimentini taklif etamiz. Kataloqimizda pardali mashina turli xil korpus va brendlarda taqdim etilgan bo'lib, bu har qanday ekspluatatsiya vazifalari uchun texnikani tanlash imkonini beradi.</p>
<p>Markalar:</p>
<ul class="custom-list">
<li>GAZ</li>
<li>Valday</li>
<li>KAMAZ</li>
<li>Kompas</li>
<li>JAC</li>
<li>MAZ</li>
<li>FAW</li>
<li>FOTON</li>
<li>DAEWOO</li>
</ul>
<p>Avtomobillarning o'lchamlari va tonnaji tanlangan shassiga bog'liq: yuk ko'tarish quvvati 3 tonna bo'lgan ixcham modellardan tortib, 30 tonnagacha yuk tashishga mo'ljallangan kuchli mashinalargacha. Bunday diapazon texnikaning ishonchliligi va chidamliligini ta'minlagan holda, har qanday logistika va tijorat vazifalari uchun maqbul yechimni tanlash imkonini beradi.</p>
<h2>Pardali avtomobillarning xususiyatlari</h2>
<ul class="custom-list">
<li>Boltli ulanishlardagi ruxlangan ustunlar — shikastlanganda murakkab ta'mirlashsiz tezda almashtirilishi mumkin, bu xarajatlarni kamaytiradi va to'xtab qolish vaqtini qisqartiradi.</li>
<li>Rezina zichlagichli alyuminiy yo'naltiruvchilar — pardali bortli avtomobil har qanday sharoitda ekspluatatsiya qilinganda yukni namlik va changdan himoya qiluvchi ishonchli germetiklikka ega bo'ladi.</li>
<li>Hossen profili — butun ustki qurilmaning botiqligi va chidamliligini oshiradigan kuchaytirilgan konstruktiv element.</li>
<li>180° ga bukiladigan bortlar — marshrutda vaqtni tejagan holda, har qanday tomondan yukni oson ortish va tushirish imkonini beradi.</li>
<li>Har ikki tomonga suriladigan parda — ekspluatatsiya moslashuvchanligi: platformaning har qanday tomonidan yukga kirish imkoni mavjud.</li>
<li>Alyuminiy old devor — yengil va mustahkam, u konstruksiyaning umumiy vaznini kamaytiradi va korroziyaga chidamliligini oshiradi.</li>
<li>Suriladigan tom — yuqoridan qulay kirishni ta'minlaydi, bu ayniqsa pardali bortli furgonga nostandart o'lchamdagi yuklarni ortishda muhimdir.</li>
<li>Xochsimon kuchaytirgichli tent tomi — qo'shimcha yuklamalarga dosh beradi va hatto uzoq muddatli ekspluatatsiyada ham shaklini saqlab qoladi.</li>
<li>Yon tentning ikki tomonlama kuchaytirilishi — og'ir va moza yuklarni tashishda ishonchlilikni oshiradi.</li>
<li>Yukni mahkamlash uchun yashirin ilmoqlar — chiquvchi elementlarsiz xavfsiz fiksatsiya, bu platformani tartibli va qulay qiladi.</li>
<li>Taxlanadigan zina — qo'shimcha moslamalarsiz kuzovga tez va xavfsiz kirish.</li>
<li>Ustki qurilmani podramnikka mahkamlashning uchta varianti — pardali furgon turli shassi turlari va vazifalari uchun universallikni ta'minlab, har xil montaj sharoitlariga moslashadi.</li>
<li>Suriladigan markaziy ustunlar — maydondan optimal foydalanish imkonini beradi va yirik o'lchamli yuklar bilan ishlashni osonlashtiradi.</li>
<li>Yashirin qulflash armaturali alyuminiy darvozalar — yukning ishonchli himoyasi va ortiqcha detallarsiz estetik tashqi ko'rinish.</li>
<li>Suv tushishiga qarshi soyabon — yog'in-sochin va loydan qo'shimcha himoya, tashilayotgan yukning saqlanishini oshiradi.</li>
</ul>
<h2>Sohalarda qo'llanilishi</h2>
<p>"RusTrak" kompaniyasining pardali yuk mashinalari qurilish kompaniyalarida, logistika va transport tashkilotlarida keng qo'llanilib, materiallarni xavfsiz va qulay yetkazib berishni ta'minlaydi. Ular tovarlarni tijorat yo'li bilan yetkazib berishda, savdo va ulgurji kompaniyalarda, shuningdek, og'ir va katta o'lchamli yuklarni tashishda ishlatiladi. Ishonchli konstruksiya va yukning sifatli himoyasi ularni uzoq marshrutlar va har qanday ob-havo sharoitida ishlash uchun qulay qiladi.</p>
<h2>"RusTrak" kompaniyasi bilan ishlashning afzalliklari</h2>
<ul class="custom-list">
<li>Texnikaning katta tanlovi<br> Bizda turli markadagi va turdagi pardali va boshqa tijorat avtomobillari taqdim etilgan bo'lib, bu har qanday vazifa uchun texnikani tanlash imkonini beradi.</li>
<li>Professional qo'llab-quvvatlash<br> Bizning mutaxassislarimiz mijozning vazifalari va biznes xususiyatlarini hisobga olgan holda texnikani tanlashga yordam beradi.</li>
<li>Sertifikatlash va sifat nazorati<br> Barcha yuk mashinalari qat'iy tekshiruvdan o'tadi va sertifikatlangan, bu ekspluatatsiya xavfsizligini kafolatlaydi.</li>
<li>Kafolatli va kafolatdan keyingi xizmat ko'rsatish<br> Kompaniya xariditdan keyin texnik xizmat ko'rsatish va konsultatsiyalarni o'z ichiga olgan holda qo'llab-quvvatlashni ta'minlaydi.</li>
<li>Xarid qilish qulayligi<br> Xarid qilishning shaffof shartlari, turli to'lov shakllari va mijozlar uchun individual takliflar taqdim etiladi.</li>
<li>Tajriba va reputatsiya<br> "RusTrak" tijorat avtomobillari bozorida ko'p yillik tajribaga ega, bu yuqori professionalizm va mijozlar ishonchini tasdiqlaydi.</li>
</ul>
<h2>Ishonchlilik va qulaylik uchun yaratilgan texnika</h2>
<p>Pardali yuk mashinasini sotib olish — logistikani optimallashtirish va ekspluatatsiya xarajatlarini kamaytirishga imkon beradigan foydali yechimdir. Talablaringiz va sifat standartlaringizga javob beradigan texnikani tanlab, siz ekspluatatsiyaga to'liq tayyor bo'lgan ishonchli avtomobilni olasiz. "RusTrak" kompaniyasi ehtiyojlaringizga mos keladigan modelni tanlashga yordam beradi. Har bir mashinaning xususiyatlari va imkoniyatlari bilan tanishib chiqing. Texnikangizning ishonchliligi, qulayligi va uzoq muddat xizmat qilishi foydasiga tanlov qiling. Buyurtmani rasmiylashtirish uchun biz bilan bog'laning va mutaxassislar konsultatsiyasini oling.</p>
</div>`,
      ru: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none; /* убираем стандартные маркеры */
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px; /* отступ для маркера */
            margin-bottom: 10px; /* расстояние между пунктами */
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";          /* ромбик */
            position: absolute;
            left: 0;
            color: #fec80b;        /* жёлтый цвет */
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>Шторный грузовик сочетает удобство загрузки и надежность на дороге. Мощные двигатели и современная техника делают управление безопасным и комфортным. Компания «РусТрак» предлагает шторные автомобили, готовые к любым задачам. Надёжная конструкция и качественные материалы обеспечивают долгий срок службы машин. Выбор подходящей машины поможет справиться с самыми разными задачами. Каждая модель создаётся с учётом потребностей владельцев, сочетая практичность и долговечность.</p>
<h2>Ассортимент</h2>
<p>Мы предлагаем широкий ассортимент коммерческих автомобилей, отвечающих современным стандартам качества. В нашем каталоге представлена шторная машина в различных исполнениях и марках, что позволяет подобрать технику под любые задачи эксплуатации.</p>
<p>Марки:</p>
<ul class="custom-list">
<li>ГАЗ</li>
<li>Валдай</li>
<li>КАМАЗ</li>
<li>Компас</li>
<li>JAC</li>
<li>МАЗ</li>
<li>FAW</li>
<li>FOTON</li>
<li>DAEWOO</li>
</ul>
<p>Размеры и тоннаж автомобилей зависят от выбранного шасси: от компактных моделей грузоподъёмностью 3 тонны до мощных машин, рассчитанных на перевозку до 30 тонн. Такой диапазон позволяет подобрать оптимальное решение для любых логистических и коммерческих задач, обеспечивая надёжность и долговечность техники.</p>
<h2>Особенности шторных автомобилей</h2>
<ul class="custom-list">
<li>Оцинкованные стойки на болтовых соединениях — при повреждении их можно быстро заменить без сложного ремонта, что снижает затраты и сокращает простои.</li>
<li>Алюминиевые направляющие с резиновым уплотнителем — шторно бортовой автомобиль получает надёжную герметизацию, защищающую груз от влаги и пыли при эксплуатации в любых условиях.</li>
<li>Профиль Hossen — усиленный конструктивный элемент, который повышает жёсткость и долговечность всей надстройки.</li>
<li>Откидные борта на 180° — позволяют легко загружать и разгружать груз с любой стороны, экономя время на маршруте.</li>
<li>Сдвижная штора в обе стороны — гибкость эксплуатации: доступ к грузу возможен с любой стороны платформы.</li>
<li>Алюминиевая передняя стенка — лёгкая и прочная, она снижает общий вес конструкции и повышает устойчивость к коррозии.</li>
<li>Сдвижная крыша — обеспечивает удобный доступ сверху, что особенно важно при погрузке негабаритных грузов в шторно бортовой фургон.</li>
<li>Тент крыши с крестообразным усилителем — выдерживает дополнительные нагрузки и сохраняет форму даже при длительной эксплуатации.</li>
<li>Двунаправленное усиление бокового тента — повышает надёжность при перевозке тяжёлых и хрупких грузов.</li>
<li>Скрытые петли крепления груза — безопасная фиксация без выступающих элементов, что делает платформу аккуратной и удобной.</li>
<li>Складная лестница — быстрый и безопасный доступ к кузову без дополнительных приспособлений.</li>
<li>Три варианта крепления надстройки к подрамнику — шторный фургон адаптируется к разным условиям монтажа, обеспечивая универсальность для различных задач и типов шасси.</li>
<li>Сдвижные центральные стойки — позволяют оптимально использовать пространство и упрощают работу с крупногабаритными грузами.</li>
<li>Алюминиевые ворота со скрытой запорной арматурой — надёжная защита груза и эстетичный внешний вид без лишних деталей.</li>
<li>Противозаливной козырёк — дополнительная защита от осадков и грязи, повышающая сохранность перевозимого груза.</li>
</ul>
<h2><strong>&nbsp;</strong>Сферы применения</h2>
<p>Шторный грузовик от компании «РусТрак» находят широкое применение в строительных компаниях, логистических и транспортных организациях, обеспечивая безопасную и удобную доставку материалов. Они используются для коммерческой доставки товаров, в торговых и оптовых компаниях, а также при перевозке негабаритных и тяжёлых грузов. Надёжная конструкция и качественная защита груза делают их удобными для длительных маршрутов и работы в любых погодных условиях, обеспечивая эффективность перевозок и сохранность имущества.</p>
<h2>Преимущества работы с компанией «РусТрак»</h2>
<ul class="custom-list">
<li>Большой выбор техники<br> У нас представлены шторные и другие коммерческие автомобили различных марок и типов, что позволяет подобрать технику под любые задачи.</li>
<li>Профессиональная поддержка<br> Наши специалисты помогают подобрать технику с учётом задач клиента и особенностей бизнеса.</li>
<li>Сертификация и контроль качества<br> Все грузовики проходят строгую проверку и сертифицированы, что гарантирует безопасность эксплуатации.</li>
<li>Гарантийное и послегарантийное обслуживание<br> Компания обеспечивает поддержку после покупки, включая техническое обслуживание и консультации.</li>
<li>Удобство покупки<br> Предоставляются прозрачные условия приобретения, различные формы оплаты и индивидуальные предложения для клиентов.</li>
<li>Опыт и репутация<br> «РусТрак» имеет многолетний опыт работы на рынке коммерческих автомобилей, что подтверждает высокий профессионализм и доверие клиентов.</li>
</ul>
<h2>Техника, созданная для надежности и комфорта</h2>
<p>Купить шторный грузовик — выгодное решение, позволяющее оптимизировать логистику и сократить затраты на эксплуатацию. Выбирая технику, которая соответствует вашим требованиям и стандартам качества, вы получаете надёжный автомобиль, полностью готовый к эксплуатации. Компания «РусТрак» поможет подобрать модель, идеально подходящую для ваших нужд. Ознакомьтесь с характеристиками и возможностями каждой машины. Сделайте выбор в пользу надёжности, комфорта и долговечности вашей техники. Для оформления заказа свяжитесь с нами любым удобным способом и получите консультацию специалистов.</p>
</div>`,
      en: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none;
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";
            position: absolute;
            left: 0;
            color: #fec80b;
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>A curtain side truck combines loading convenience with reliability on the road. Powerful engines and modern technology make driving safe and comfortable. RusTrak offers curtain side vehicles ready for any task. Reliable construction and quality materials ensure a long service life. Choosing the right vehicle will help handle a wide variety of operational demands. Each model is created with the owner's needs in mind, combining practicality and durability.</p>
<h2>Assortment</h2>
<p>We offer a wide range of commercial vehicles that meet modern quality standards. Our catalog features curtain side trucks in various configurations and brands, allowing you to select equipment for any operational task.</p>
<p>Brands:</p>
<ul class="custom-list">
<li>GAZ</li>
<li>Valday</li>
<li>KAMAZ</li>
<li>Kompas</li>
<li>JAC</li>
<li>MAZ</li>
<li>FAW</li>
<li>FOTON</li>
<li>DAEWOO</li>
</ul>
<p>Dimensions and payload capacity depend on the chosen chassis: from compact models with a carrying capacity of 3 tons to powerful trucks designed to transport up to 30 tons. This range allows you to find the optimal solution for any logistical and commercial needs, ensuring reliability and durability.</p>
<h2>Features of Curtain Side Trucks</h2>
<ul class="custom-list">
<li>Galvanized bolted pillars — in case of damage, they can be quickly replaced without complex repairs, reducing costs and downtime.</li>
<li>Aluminum guides with rubber seals — the curtain side truck receives reliable sealing, protecting the cargo from moisture and dust in all conditions.</li>
<li>Hossen profile — a reinforced structural element that increases the rigidity and durability of the entire body structure.</li>
<li>180° fold-down side boards — allow easy loading and unloading from any side, saving time on route.</li>
<li>Sliding curtain on both sides — operational flexibility: access to the cargo is available from either side of the platform.</li>
<li>Aluminum front wall — lightweight and durable, it reduces overall structural weight and increases corrosion resistance.</li>
<li>Sliding roof — provides convenient top access, which is especially important when loading oversized cargo into a curtain side van.</li>
<li>Roof curtain with cross reinforcement — withstands additional loads and maintains its shape even during prolonged use.</li>
<li>Bidirectional side curtain reinforcement — enhances reliability when transporting heavy and fragile loads.</li>
<li>Hidden cargo tie-down rings — safe fixation without protruding elements, making the platform neat and practical.</li>
<li>Folding ladder — quick and safe access to the cargo area without extra equipment.</li>
<li>Three mounting options for the subframe — the curtain body adapts to different installation conditions, providing versatility for various chassis types.</li>
<li>Sliding center pillars — optimize space usage and simplify handling of bulky cargo.</li>
<li>Aluminum rear doors with hidden locking hardware — reliable cargo protection and an aesthetic appearance without unnecessary details.</li>
<li>Anti-drip visor — extra protection against precipitation and dirt, enhancing cargo safety.</li>
</ul>
<h2>Applications</h2>
<p>Curtain side trucks from RusTrak are widely used in construction companies, logistics, and transportation organizations, ensuring safe and convenient delivery of materials. They are used for commercial goods delivery, in trade and wholesale companies, as well as for transporting heavy and oversized cargo. Reliable construction and quality protection make them convenient for long-haul routes and operation in all weather conditions.</p>
<h2>Advantages of Working with RusTrak</h2>
<ul class="custom-list">
<li>Wide selection of equipment<br> We offer curtain side and other commercial vehicles of various brands and types, allowing you to choose machinery for any task.</li>
<li>Professional support<br> Our specialists help select machinery based on client needs and specific business requirements.</li>
<li>Certification and quality control<br> All trucks undergo strict inspection and are certified, guaranteeing operational safety.</li>
<li>Warranty and post-warranty service<br> The company provides support after purchase, including technical maintenance and consultations.</li>
<li>Convenience of purchase<br> Transparent purchase terms, various payment options, and tailored offers are provided to clients.</li>
<li>Experience and reputation<br> RusTrak has years of experience in the commercial vehicle market, proving high professionalism and client trust.</li>
</ul>
<h2>Technique Built for Reliability and Comfort</h2>
<p>Buying a curtain side truck is a cost-effective solution that optimizes logistics and reduces operational costs. By selecting machinery that meets your standards, you get a reliable vehicle fully ready for operation. RusTrak will help you choose the model perfectly suited to your needs. Explore the features and capabilities of each machine. Choose reliability, comfort, and durability. To place an order, contact us through any convenient channel to receive specialist consultation.</p>
</div>`,
    },
  },
  {
    id: 2,
    slug: "krany-manipulyatory",
    img: kategoriyImg2,
    title: {
      uz: "Kran-manipulyatorlar",
      ru: "Краны-манипуляторы",
      en: "Crane manipulators",
    },
    filters: [
      {
        id: "brand",
        type: "checkbox",
        title: {
          ru: "Марка",
          uz: "Brend",
          en: "Brand",
        },
        options: [
          { id: "gaz", label: "ГАЗ" },
          { id: "kamaz", label: "КАМАЗ" },
          { id: "jac", label: "JAC" },
          { id: "daewoo", label: "DAEWOO" },
          { id: "faw", label: "FAW" },
          { id: "foton", label: "FOTON" },
          { id: "dong_feng", label: "DONG FENG" },
          { id: "shacman", label: "SHACMAN" },
          { id: "baw", label: "BAW" },
          { id: "inman", label: "ИНМАН" },
          { id: "ural", label: "УРАЛ" },
          { id: "maz", label: "МАЗ" },
        ],
      },
      {
        id: "total_weight",
        type: "checkbox",
        title: {
          ru: "Полная масса, тонн",
          uz: "To'liq massasi, tonna",
          en: "Gross weight, tons",
        },
        options: [
          {
            id: "up_to_12",
            label: {
              ru: "до 12",
              uz: "12 gacha",
              en: "up to 12",
            },
          },
          {
            id: "up_to_20",
            label: {
              ru: "до 20",
              uz: "20 gacha",
              en: "up to 20",
            },
          },
          {
            id: "over_20",
            label: {
              ru: "свыше 20",
              uz: "20 dan yuqori",
              en: "over 20",
            },
          },
        ],
      },
      {
        id: "platform_length",
        type: "checkbox",
        title: {
          ru: "Длина платформы, м",
          uz: "Platforma uzunligi, m",
          en: "Platform length, m",
        },
        options: [
          { id: "length_3500", label: "3500" },
          { id: "length_4400", label: "4400" },
          { id: "length_5200", label: "5200" },
          { id: "length_5500", label: "5500" },
          { id: "length_6135", label: "6135" },
          { id: "length_6195", label: "6195" },
          { id: "length_6200", label: "6200" },
          { id: "length_6400", label: "6400" },
          { id: "length_6500", label: "6500" },
          { id: "length_6700", label: "6700" },
          { id: "length_6800", label: "6800" },
          { id: "length_7000", label: "7000" },
          { id: "length_7200", label: "7200" },
          { id: "length_8200", label: "8200" },
        ],
      },
      {
        id: "lifting_capacity",
        type: "range_input",
        title: {
          ru: "Грузоподъёмность КМУ, тонн",
          uz: "KMQ yuk ko'tarish quvvati, tonna",
          en: "Crane lifting capacity, tons",
        },
        inputs: [
          {
            id: "min",
            placeholder: {
              ru: "от",
              uz: "dan",
              en: "from",
            },
          },
          {
            id: "max",
            placeholder: {
              ru: "до",
              uz: "gacha",
              en: "to",
            },
          },
        ],
      },
    ],
    description: {
      uz: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none;
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";
            position: absolute;
            left: 0;
            color: #fec80b;
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>Yuk ko'tarish texnikasi og'ir materiallar bilan ishlashda qulaylikni ta'minlaydi. Kran-manipulyatorli avtomobil ortish va tashish ishlarini ortiqcha urintirishlarsiz bajarishga yordam beradi. Bunday texnika haratchanligi va aniq ishlashi bilan ajralib turadi. "RusTrak" kompaniyasi turli sharoitlarga mo'ljallangan modellarni taklif etadi. Yig'ilish sifati, mexanizmlarning ishonchliligi va o'ylangan konstruksiya texnikaga nosozliklarsiz uzoq xizmat qilish imkonini beradi. Bunday transport ishonchlilik hissini beradi va murakkab vazifalarni uddalashga ishonch bilan yordam beradi.</p>
<h2>Assortiment</h2>
<p>"RusTrak" kompaniyasi har xil turdagi ishlar va ekspluatatsiya sharoitlari uchun modellar keng tanlovini taklif etadi, yuklangan vazifalarni samarali uddalashi uchun optimal quvvat va xarakteristikalarga ega texnikani tanlab beradi. Biz yetakchi ishlab chiqaruvchilarning kran-manipulyatorlarini o'rnatishni amalga oshiramiz:</p>
<ul class="custom-list">
<li>INMAN</li>
<li>HKTC</li>
<li>XCMG</li>
<li>PALFINGER</li>
<li>HANGIL</li>
<li>DY</li>
<li>UNIC</li>
<li>FASSI</li>
<li>SOOSAN</li>
</ul>
<p>Vazifalarga qarab mos kran-manipulyator qurilmasi (KMQ) turini tanlash mumkin:</p>
<ul class="custom-list">
<li>Lyo'li (trosli) — strela tros bilan jihozlangan bo'lib, bu yer sathidan pastda ishlashni qulay va imkonli qiladi. Transport holatida u kabina ortiga taxlanmaydi, bu ayniqsa maxsus vazifalarni bajarishda juda qo'l keladi.</li>
<li>Sharnir-bo'g'imli (ilgakli) — tros o'rniga ilgak ishlatiladi. Transport holatida kabina ortida taxlanadi, buning sharofati bilan texnika ixchamlashadi va harakatlanishda qulay bo'ladi.</li>
</ul>
<h2>Kran-manipulyatorning konstruktiv xususiyatlari</h2>
<ul class="custom-list">
<li>Mustahkam Hossen profili — kran-manipulyatorli yuk mashinasining barqarorligi va chidamliligini saqlaydigan ishonchli poydevor.</li>
<li>Ochiq profillardan ishlangan asos — ekspluatatsiyada yuqori mustahkamlik va barqarorlik uchun optimal yechim.</li>
<li>Orqa tayanchlarning kuchaytirilgan montaj plastinasi — og'ir yuklar bilan ishlashda ishonchlilikni kafolatlaydi.</li>
<li>180° ga bukiladigan bortlar — har qanday tomondan qulay ortish va tushirish, buning evaziga KMQli bortli mashina tezroq va samaraliroq ishlaydi.</li>
<li>KMQning ishonchli mahkamlanishi — keng montaj plastinasi orqali o'rnatish va shpilkalarda fiksatsiya qilish xavfsizlik va uzoq xizmat muddatini ta'minlaydi.</li>
<li>Transport fanerasidan ishlangan yeyilishga chidamli pol qoplamasi — barcha choklar puxta germetiklangan, bu namlikdan himoya qiladi va ekspluatatsiya muddatini uzaytiradi.</li>
<li>Kabinani himoyalash — tasodifiy shikastlanishlarning oldini oladi, ekspluatatsiyada butunlikni saqlaydi va KMQli yuk avtomobilini xavfsizroq qiladi.</li>
<li>Suriladigan tom — qulay kirish va tashilayotgan materiallarni qo'shimcha himoyalash.</li>
<li>Platformaning kran rangi bilan bir xil boyalishi — yagona stil va texnikaning tartibli tashqi ko'rinishi.</li>
<li>Ramadagi surilishga qarshi plastinalar — ustki qurilmaning rama bilan ishonchli ulanishi, konstruksiyaning har ikki tomondan kuchaytirilishi.</li>
<li>Yukni mahkamlash uchun yashirin ilmoqlar — xavfsiz fiksatsiya va ortiqcha detallarsiz estetik tashqi ko'rinish.</li>
</ul>
<h2>Sohalarda qo'llanilishi</h2>
<p>Yuqori sifat fonida narxi hamyonbop bo'lib qolayotgan kran-manipulyator eng turli sohalarda keng qo'llaniladi. U qurilish maydonchalarida qurilish materiallarini ko'tarish va tashishda, kommunal xo'jalikda infratuzilmaga xizmat ko'rsatish va uskunalar tashishda, shuningdek logistika va ombor operatsiyalarida konteynerlar hamda yirik o'lchamli yuklarni tushirish va ortishda samarali ishlatiladi. Universalligi va haratchanligi evaziga texnika tor maydonlarda, shahar ko'chalarida va sanoat hududlarida ishlashga mos keladi va yuqori unumdorlik hamda vazifalarni bajarish vaqtini qisqartirishni ta'minlaydi.</p>
<h2>"RusTrak" kompaniyasi bilan ishlashning afzalliklari</h2>
<ul class="custom-list">
<li>Texnikaning keng tanlovi – turli markadagi va konfiguratsiyadagi kran-manipulyatorlar hamda yuk avtomobillarining katta assortimenti.</li>
<li>Sifat va ishonchlilik – texnika mustahkamlik va chidamlilikka tekshirilgan, yuqori ekspluatatsiya standartlariga javob beradi.</li>
<li>Professional qo'llab-quvvatlash – mutaxassislar aniq vazifalar va ish sharoitlariga mos optimal yechimni tanlashga yordam beradi.</li>
<li>Servis va xizmat ko'rsatish – kompaniya ekspluatatsiyaning barcha bosqichlarida texnik qo'llab-quvvatlash va konsultatsiyalarni ta'minlaydi.</li>
<li>Tezkor yetkazib berish – kran-manipulyatorli har qanday mashina hududlarga tezda yetkazib beriladi.</li>
<li>Individual yondashuv – har bir mijozning ehtiyojlari hisobga olinadi, optimal komplektatsiyalar va qo'shimcha opsiyalar taklif etiladi.</li>
</ul>
<h2>Har qanday vazifa uchun ishonchli texnika</h2>
<p>Kran-manipulyator sotib olish – amaliylik va vaqtni tejashni qadrlaydiganlar uchun foydali yechimdir. Biz vazifalaringiz va ish sharoitlaringizga mos texnikani tanlashga yordam beramiz. "RusTrak" kompaniyasi katta tanlov va sifatli xizmat ko'rsatishni ta'minlaydi. Jarayonlaringiz samaradorligini oshirish sari ishonchli qadam tashlang. Professional konsultatsiya va tezkor hamrohlikni oling. Buyurtmani rasmiylashtirish uchun biz bilan har qanday qulay usulda bog'laning.</p>
</div>`,
      ru: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none; /* убираем стандартные маркеры */
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px; /* отступ для маркера */
            margin-bottom: 10px; /* расстояние между пунктами */
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";          /* ромбик */
            position: absolute;
            left: 0;
            color: #fec80b;        /* жёлтый цвет */
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>Грузоподъёмная техника обеспечивает удобство при работе с тяжёлыми материалами. Автомобиль с краном манипулятором помогает выполнять погрузку и перевозку без лишних усилий. Такая техника отличается маневренностью и точной работой. Компания «РусТрак» предлагает модели, рассчитанные на разные условия. Качество сборки, надёжность механизмов и продуманная конструкция позволяют технике долго служить без сбоев. Такой транспорт дарит ощущение надёжности и уверенно помогает справляться со сложными задачами.</p>
<h2>Ассортимент</h2>
<p>Компания «РусТрак» предлагает широкий выбор моделей для разных типов работ и условий эксплуатации, подбирая технику с оптимальной мощностью и характеристиками, чтобы она эффективно справлялась с поставленными задачами. Мы осуществляем монтаж кранов‑манипуляторов ведущих производителей:</p>
<ul class="custom-list">
<li>ИНМАН</li>
<li>HKTC</li>
<li>XCMG</li>
<li>ПАЛФИНГЕР</li>
<li>HANGIL</li>
<li>DY</li>
<li>UNIC</li>
<li>FASSI</li>
<li>SOOSAN</li>
</ul>
<p>В зависимости от задач можно выбрать подходящий тип КМУ:</p>
<ul class="custom-list">
<li>Тросовый — стрела оснащена тросом, что делает возможной и удобной работу ниже уровня земли. В транспортном положении она не складывается за кабиной, что особенно полезно при выполнении специфических задач.</li>
<li>Шарнирно‑сочленённый (крюковой) — вместо троса используется крюк. Конструкция складывается за кабиной в транспортном положении, благодаря чему техника становится компактной и удобной при перемещении.</li>
</ul>
<h2>Конструктивные особенности крана-манипулятора</h2>
<ul class="custom-list">
<li>Прочный профиль Hossen — надёжная основа, благодаря которой грузовая машина с краном манипулятором сохраняет устойчивость и долговечность.</li>
<li>Основание из открытых профилей — оптимальное решение для высокой прочности и стабильности при эксплуатации.</li>
<li>Усиленная монтажная плита задних опор — гарантирует надёжность при работе с тяжёлыми грузами.</li>
<li>Откидные борта на 180° — удобная загрузка и разгрузка с любой стороны, благодаря чему бортовая машина с КМУ работает быстрее и эффективнее.</li>
<li>Надёжное крепление КМУ — установка через широкую монтажную плиту и фиксация на шпильках обеспечивает безопасность и долгий срок службы.</li>
<li>Износостойкий настил пола из транспортной фанеры — все швы тщательно герметизированы, что защищает от влаги и продлевает срок эксплуатации.</li>
<li>Защита кабины — предотвращает случайные повреждения, сохраняя целостность при эксплуатации и делая грузовой автомобиль с КМУ более безопасным.</li>
<li>Сдвижная крыша — удобный доступ и дополнительная защита перевозимых материалов.</li>
<li>Окрас платформы в цвет крана — единый стиль и аккуратный внешний вид техники.</li>
<li>Противосдвиговые пластины на раме — надёжное соединение надстройки с рамой, усиление конструкции с обеих сторон.</li>
<li>Скрытые петли крепления груза — безопасная фиксация и эстетичный внешний вид без лишних деталей.</li>
</ul>
<h2>Сферы применения</h2>
<p>Кран манипулятор цена которого остаётся доступной при высоком качестве техники, находит широкое применение в самых разных сферах. Он эффективно используется на строительных площадках для подъёма и транспортировки стройматериалов, в коммунальном хозяйстве при обслуживании инфраструктуры и перевозке оборудования, а также в логистике и складских операциях для разгрузки и погрузки контейнеров и крупногабаритных грузов. Благодаря универсальности и маневренности техника подходит для работы в условиях ограниченного пространства, на городских улицах и промышленных территориях, обеспечивая высокую производительность и сокращение времени на выполнение задач.</p>
<h2>Преимущества работы с компанией «РусТрак»</h2>
<ul class="custom-list">
<li>Широкий выбор техники – большой ассортимент кранов-манипуляторов и грузовых автомобилей различных марок и конфигураций.</li>
<li>Качество и надёжность – техника проверена на прочность и долговечность, соответствует высоким стандартам эксплуатации.</li>
<li>Профессиональная поддержка – специалисты помогают подобрать оптимальное решение под конкретные задачи и условия работы.</li>
<li>Сервис и обслуживание – компания обеспечивает техническую поддержку и консультации на всех этапах эксплуатации.</li>
<li>Оперативная доставка – любая машина с краном манипулятором быстро поставляется в регионы.</li>
<li>Индивидуальный подход – учитываются потребности каждого клиента, предлагаются оптимальные комплектации и дополнительные опции.</li>
</ul>
<h2>Надёжная техника для любых задач</h2>
<p>Купить кран манипулятор – выгодное решение для тех, кто ценит практичность и экономию времени. Мы поможем подобрать технику под ваши задачи и условия работы. Компания «РусТрак» обеспечивает большой выбор и качественное обслуживание. Сделайте уверенный шаг к повышению эффективности своих процессов. Получите профессиональную консультацию и оперативное сопровождение. Для оформления заказа свяжитесь с нами любым удобным способом.</p>
</div>`,
      en: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none;
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";
            position: absolute;
            left: 0;
            color: #fec80b;
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>Lifting equipment ensures convenience when working with heavy materials. A truck with a loader crane helps carry out loading and transportation without extra effort. Such equipment features high maneuverability and precise operation. RusTrak offers models designed for various conditions. Assembly quality, mechanism reliability, and well-thought-out design allow the machinery to serve long without failures. Such transport provides a feeling of reliability and confidently helps cope with complex tasks.</p>
<h2>Assortment</h2>
<p>RusTrak offers a wide selection of models for different types of work and operating conditions, selecting machinery with optimal power and specifications to effectively handle assigned tasks. We perform installation of loader cranes from leading manufacturers:</p>
<ul class="custom-list">
<li>INMAN</li>
<li>HKTC</li>
<li>XCMG</li>
<li>PALFINGER</li>
<li>HANGIL</li>
<li>DY</li>
<li>UNIC</li>
<li>FASSI</li>
<li>SOOSAN</li>
</ul>
<p>Depending on the tasks, you can choose a suitable crane type:</p>
<ul class="custom-list">
<li>Cable crane — equipped with a wire rope, making operation below ground level convenient and possible. In the transport position, it does not fold behind the cab, which is particularly useful for specific tasks.</li>
<li>Knuckle boom crane — uses a hook instead of a cable. The structure folds behind the cab in the transport position, making the vehicle compact and convenient during transit.</li>
</ul>
<h2>Design Features of the Crane Manipulator</h2>
<ul class="custom-list">
<li>Durable Hossen profile — a reliable base ensuring stability and durability for the crane truck.</li>
<li>Open profile base — an optimal solution for high strength and stability during operation.</li>
<li>Reinforced rear outsole mounting plate — guarantees reliability when handling heavy loads.</li>
<li>180° fold-down side boards — convenient loading and unloading from any side, making the flatbed crane truck operate faster and more efficiently.</li>
<li>Reliable crane mounting — installation via a wide mounting plate and stud fixation ensures safety and long service life.</li>
<li>Wear-resistant transport plywood flooring — all seams are thoroughly sealed, protecting against moisture and extending service life.</li>
<li>Cab protection — prevents accidental damage, preserving structural integrity during operation and making the crane truck safer.</li>
<li>Sliding roof — convenient access and additional protection for transported materials.</li>
<li>Platform painted in crane color — unified style and a neat appearance for the equipment.</li>
<li>Anti-shift plates on the chassis frame — reliable connection between the body structure and frame, reinforcing the design on both sides.</li>
<li>Hidden cargo tie-down rings — safe fixation and an aesthetic look without unnecessary protruding details.</li>
</ul>
<h2>Applications</h2>
<p>The crane manipulator, whose price remains affordable given high build quality, finds wide application across various industries. It is effectively used on construction sites for lifting and transporting building materials, in public utilities for infrastructure maintenance and equipment transport, as well as in logistics and warehouse operations for handling containers and bulky cargo. Thanks to versatility and maneuverability, the machinery is suitable for tight spaces, city streets, and industrial sites, ensuring high productivity and shorter execution times.</p>
<h2>Advantages of Working with RusTrak</h2>
<ul class="custom-list">
<li>Wide selection of equipment – a large assortment of crane manipulators and commercial trucks of various brands and configurations.</li>
<li>Quality and reliability – machinery is tested for strength and durability, meeting high operational standards.</li>
<li>Professional support – specialists help choose optimal solutions for specific tasks and working conditions.</li>
<li>Service and maintenance – the company provides technical support and consultations at all stages of operation.</li>
<li>Prompt delivery – any crane truck is quickly delivered to the regions.</li>
<li>Individual approach – client needs are considered, offering optimal equipment setups and additional options.</li>
</ul>
<h2>Reliable Machinery for Any Task</h2>
<p>Buying a crane manipulator is a cost-effective solution for those who value practicality and time savings. We will help you select equipment tailored to your tasks and operational conditions. RusTrak provides a wide selection and high-quality service. Take a confident step toward increasing the efficiency of your operations. Get professional advice and prompt support. Contact us through any convenient channel to place an order.</p>
</div>`,
    },
  },
  {
    id: 3,
    slug: "avtotoplivozapravshchiki",
    img: kategoriyImg3,
    title: {
      uz: "Yonilg'i quyish mashinalari (ATZ)",
      ru: "Автотопливозаправщики",
      en: "Fuel bowsers",
    },
    filters: [
      {
        id: "price",
        type: "range_input",
        title: {
          ru: "Цена",
          uz: "Narxi",
          en: "Price",
        },
        inputs: [
          {
            id: "min",
            placeholder: {
              ru: "от",
              uz: "dan",
              en: "from",
            },
          },
          {
            id: "max",
            placeholder: {
              ru: "до",
              uz: "gacha",
              en: "to",
            },
          },
        ],
      },
      {
        id: "brand",
        type: "checkbox",
        title: {
          ru: "Марка",
          uz: "Brend",
          en: "Brand",
        },
        options: [
          {
            id: "gaz",
            label: {
              ru: "ГАЗ",
              uz: "GAZ",
              en: "GAZ",
            },
          },
          {
            id: "jac",
            label: {
              ru: "JAC",
              uz: "JAC",
              en: "JAC",
            },
          },
          {
            id: "faw",
            label: {
              ru: "FAW",
              uz: "FAW",
              en: "FAW",
            },
          },
          {
            id: "foton",
            label: {
              ru: "FOTON",
              uz: "FOTON",
              en: "FOTON",
            },
          },
          {
            id: "dongfeng",
            label: {
              ru: "DONGFENG",
              uz: "DONGFENG",
              en: "DONGFENG",
            },
          },
          {
            id: "sollers",
            label: {
              ru: "SOLLERS",
              uz: "SOLLERS",
              en: "SOLLERS",
            },
          },
          {
            id: "ural",
            label: {
              ru: "УРАЛ",
              uz: "URAL",
              en: "URAL",
            },
          },
          {
            id: "valday",
            label: {
              ru: "Валдай",
              uz: "Valday",
              en: "Valday",
            },
          },
        ],
      },
      {
        id: "total_weight",
        type: "checkbox",
        title: {
          ru: "Полная масса, тонн",
          uz: "To'liq massasi, tonna",
          en: "Gross weight, tons",
        },
        options: [
          {
            id: "up_to_12",
            label: {
              ru: "до 12",
              uz: "12 gacha",
              en: "up to 12",
            },
          },
        ],
      },
      {
        id: "cistern_volume",
        type: "range_input",
        title: {
          ru: "Объем цистерны, л.",
          uz: "Sisterna hajmi, l.",
          en: "Tank capacity, l.",
        },
        inputs: [
          {
            id: "min",
            placeholder: {
              ru: "от",
              uz: "dan",
              en: "from",
            },
          },
          {
            id: "max",
            placeholder: {
              ru: "до",
              uz: "gacha",
              en: "to",
            },
          },
        ],
      },
    ],
    description: {
      uz: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none;
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";
            position: absolute;
            left: 0;
            color: #fec80b;
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>Yoqilg'i bilan ishonchli ta'minlash har qanday ob'yektda ishni osonlashtiradi. Avtoyoqilg'i quyuvchi mashina sotib olish — vaqtni tejash va xarajatlarni kamaytirgan holda texnikaga to'g'ridan-to me'yorda yoqilg'i quyish imkoniyatidir. Uskunalar yoqilg'ining aniq hisobini yuritish uchun mustahkam sisternalar va zamonaviy nasoslar bilan jihozlangan. "RusTrak" kompaniyasi turli vazifalar va hajmlarga mos keladigan modellarni taklif etadi. Mos avtoyoqilg'i quyuvchini tanlash ishning intensivligi va ekspluatatsiya sharoitlariga bog'liq. Sinovdan o'tgan yoqilg'i quyish tizimlaridan foydalanish barcha ob'yektlarda xavfsizlik va uzluksiz ishni kafolatlaydi.</p>
<h2>Assortiment</h2>
<p>"RusTrak" kompaniyasi har bir ATZ modeli turli vazifalar va ish hajmlariga moslashtirilgan xilma-xil texnikani taklif etadi. Kataloogimizda yetakchi markalarning avtomobillari taqdim etilgan:</p>
<ul class="custom-list">
<li>GAZ</li>
<li>KAMAZ</li>
<li>JAC</li>
<li>FAW</li>
<li>FOTON</li>
</ul>
<p>Sisternalarning mavjud sig'im variantlari:</p>
<ul class="custom-list">
<li>5 200 litr (5 m³)</li>
<li>6 000 litr (6 tonna)</li>
<li>8 000 litr (8 m³)</li>
<li>10 000 litr (10 m³)</li>
<li>12 000 litr (12 m³)</li>
</ul>
<p>Barcha modellar sertifikatlangan va zamonaviy sifat hamda xavfsizlik standartlariga javob beradi, bu esa ishonchlilik, uzoq muddatli xizmat va uzluksiz ishga ishonchni kafolatlaydi.</p>
<h2>Avtoyoqilg'i quyuvchilarning xususiyatlari</h2>
<ul class="custom-list">
<li>Ekspluatatsiya moslashuvchanligi – avtomobil yoqilg'i quyuvchisi ikkita yoqilg'i bo'limi bilan jihozlangan bo'lib, bu bir vaqtning o'zida har xil turdagi yonilg'i bilan ishlash imkonini beradi.</li>
<li>Ishonchlilik va uzoq xizmat muddati – sisterna qalinligi 3 mm bo'lgan mustahkam 09G2S po'latidan tayyorlangan.</li>
<li>Xizmat ko'rsatishga minimal xarajatlar – alyuminiy kommunikatsiyalar engil, korroziyaga chidamli va murakkab parvarishni talab qilmaydi.</li>
<li>Yo'lda qo'shimcha himoya – alyuminiydan ishlangan yon qurilma harakatlanish vaqtida shikastlanish xavfini kamaytiradi.</li>
<li>Tugunlarga tezkor kirish – taxlanadigan alyuminiy zina xizmat ko'rsatishni osonlashtiradi.</li>
<li>Yoqilg'i quyishda vaqtni tejash – yoqilg'i quyish mashinalari 600 l/min unumdorlikka ega plastinkali nasos bilan jihozlangan bo'lib, bu yuqori ish tezligini ta'minlaydi.</li>
<li>Ulanish qulayligi – uzunligi 3 metrdan bo'lgan ikkita tortuvchi shlang har qanday sharoitda yoqilg'i quyishni tashkil qilish imkonini beradi.</li>
<li>Beshiksturib qolishlarni kamaytirish – Elaflex Du-75 tez ajraluvchi ulanishlari ishonchlilikni kafolatlaydi va jarayonlarni tezlashtiradi.</li>
<li>Ishlashda qulaylik – yoqilg'i berish tugunining qopqog'i qulay va xavfsiz foydalanish uchun gazliftlar bilan jihozlangan.</li>
<li>O'ramlarni (gurlovinalarni) himoyalash – YMM uchun avtosisterna butun uzunligi bo'ylab tosiq bilan jihozlangan bo'lib, bu xizmat ko'rsatishni osonlashtiradi va xavfsizlikni oshiradi.</li>
<li>Masofadan turib ishlash – uzunligi 10 metr bo'lgan Du-25 tarqatish shlangi yoqilg'i quyishda qulaylikni ta'minlaydi.</li>
<li>Bosim barqarorligi – UD-33 nafas olish qurilmasi yoqilg'ini xavfsiz saqlashni kafolatlaydi.</li>
<li>Elektr tizimini to'liq nazorat qilish – mobil yoqilg'i quyuvchi uchta massa o'chirgich bilan jihozlangan bo'lib, ular mashinani har qanday tomondan va kabinadan elektrdan uzish imkonini beradi.</li>
<li>Operatsiyalarning soddaligi – tub klapanlarini boshqarish tarqatish tugunida jamlangan bo'lib, bu jarayonni tez va ishonchli qiladi.</li>
<li>Statik elektrdan himoya – uzunligi 10 metr bo'lgan yerga ulash shtiri yonilg'i bilan ishlashda xavfsizlikni ta'minlaydi.</li>
</ul>
<h2>Qo'llanilish sohalari</h2>
<p>Avtoyoqilg'i quyuvchi sotib olish avtomobillar va maxsus texnikalarga tezkor yoqilg'i quyish talab qilinadigan har qanday faoliyat sohasi uchun foydalidir. U uskunalar to'xtovsiz ishlashi kerak bo'lgan qurilish maydonchalarida, shuningdek qishloq xo'jaligida traktor va kombaynlarga xizmat ko'rsatishda almashtirib bo'lmaydigan yordamchidir. Sanoatda va ishlab chiqarish ob'yektlarida u avtoparkning uzluksiz ishini ta'minlaydi. Yoqilg'i quyish tizimlari kommunal va yo'l xizmatlari, shuningdek vaqt va resurslarni tejash muhim bo'lgan transport kompaniyalari tomonidan faol qo'llaniladi. Bundan tashqari, avtoyoqilg'i quyuvchilar masofadagi ob'yektlar va tadbirlarda mobil yoqilg'i quyish shoxobchalarini tashkil etish uchun mos keladi. Ularning universalligi yoqilg'i ta'minoti jarayonini sodda, xavfsiz va samaraliroq qiladi.</p>
<h2>"RusTrak" kompaniyasi bilan ishlashning afzalliklari</h2>
<ul class="custom-list">
<li>Texnikaning xilma-xilligi – har qanday vazifa va ish hajmi uchun avtoyoqilg'i quyuvchini tanlash imkoniyati.</li>
<li>Sifat va ishonchlilik – avtoyoqilg'i quyuvchi zamonaviy standartlarga javob beradi va xavfsizlik tizimlari bilan ta'minlangan.</li>
<li>Uskunalarni tanlashda yordam – kompaniya mutaxassislari ehtiyojlaringizni hisobga olgan holda maslahat beradi va optimal yechimni tanlaydi.</li>
<li>Mobil yetkazib berish va tezkorlik – texnika ortiqcha ushlanishlarsiz yetkazib beriladi va ekspluatatsiyaga topshiriladi.</li>
<li>Texnik qo'llab-quvvatlash va servis – kompaniya uskunani ekspluatatsiya qilish bo'yicha xizmat ko'rsatish, ta'mirlash va konsultatsiyalarni ta'minlaydi.</li>
<li>Vaqt va resurslarni tejash – to'g'ri avtoyoqilg'i quyuvchi bilan siz texnikaning bekor turib qolishini kamaytirasiz va yoqilg'i xarajatlarini qisqartirasiz.</li>
<li>Har bir mijozga individual yondashuv – yechim ishning xususiyatlari, hajmi va ekspluatatsiya sharoitlarini hisobga olgan holda tanlanadi.</li>
</ul>
<h2>Joyida sodda va xavfsiz yoqilg'i quyish</h2>
<p>Avtoyoqilg'i quyuvchi sotib olish — transportni yoqilg'i bilan qulay va xavfsiz ta'minlash sari birinchi qadamdir. Qarorni ortga surmang — vazifalaringizga mukammal mos keladigan modelni tanlang. "RusTrak" kompaniyasi ishonchli va zamonaviy avtoyoqilg'i quyuvchilarning katta tanloviga ega. Ehtiyojlaringiz va ekspluatatsiya sharoitlaringizni hisobga olgan holda eng mos yechimni aniqlashga yordam beramiz. Avtoparkingiz har doim yoqilg'i bilan ta'minlangan va ishga tayyor ekanligiga ishonch hosil qiling. Buyurtmani rasmiylashtirish uchun biz bilan har qanday qulay usulda bog'laning va biz aynan siz uchun optimal variantni tanlab beramiz.</p>
</div>`,
      ru: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none; /* убираем стандартные маркеры */
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px; /* отступ для маркера */
            margin-bottom: 10px; /* расстояние между пунктами */
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";          /* ромбик */
            position: absolute;
            left: 0;
            color: #fec80b;        /* жёлтый цвет */
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>Надёжное снабжение топливом упрощает работу на любых объектах. Купить автотопливозаправщик — возможность заправлять технику прямо на месте, экономя время и снижая расходы. Оборудование оснащено прочными цистернами и современными насосами для точного учета топлива. Компания «РусТрак» предлагает модели, которые подходят для различных задач и объёмов. Выбор подходящего автозаправщика зависит от интенсивности работы и условий эксплуатации. Использование проверенных систем заправки гарантирует безопасность и бесперебойную работу на всех объектах.</p>
<h2>Ассортимент</h2>
<p>Компания «РусТрак» предлагает разнообразную технику, где каждая модель АТЗ адаптирована под различные задачи и объёмы работы. В нашем каталоге представлены автомобили ведущих марок:</p>
<ul class="custom-list">
<li>ГАЗ</li>
<li>КАМАЗ</li>
<li>JAC</li>
<li>FAW</li>
<li>FOTON</li>
</ul>
<p>Доступные варианты вместимости цистерн:</p>
<ul class="custom-list">
<li>5 200 литров (5 м³)</li>
<li>6 000 литров (6 тонн)</li>
<li>8 000 литров (8 м³)</li>
<li>10 000 литров (10 м³)</li>
<li>12 000 литров (12 м³)</li>
</ul>
<p>Все модели сертифицированы и соответствуют современным стандартам качества и безопасности, что гарантирует надёжность, долговечность и уверенность в бесперебойной работе.</p>
<h2>Особенности автотопливозаправщиков</h2>
<ul class="custom-list">
<li>Гибкость эксплуатации – автомобильный топливозаправщик оснащён двумя топливными отсеками, что позволяет работать сразу с разными видами горючего.</li>
<li>Надежность и долговечность – цистерна выполнена из прочной стали 09Г2С толщиной 3 мм.</li>
<li>Минимальные затраты на обслуживание – алюминиевые коммуникации легкие, устойчивые к коррозии и не требуют сложного ухода.</li>
<li>Дополнительная защита на дороге – боковое устройство из алюминия снижает риск повреждений при движении.</li>
<li>Быстрый доступ к узлам – складная алюминиевая лестница облегчает обслуживание.</li>
<li>Экономия времени при заправке – топливозаправочные машины оснащены шиберным насосом с производительностью 600 л/мин, что обеспечивает высокую скорость работы.</li>
<li>Удобство подключения – два всасывающих рукава длиной по 3 метра позволяют организовать заправку в любых условиях.</li>
<li>Сокращение простоев – быстроразъемные соединения Elaflex Ду-75 гарантируют надежность и ускоряют процессы.</li>
<li>Комфорт при работе – крышка узла выдачи топлива оснащена газлифтами для удобного и безопасного использования.</li>
<li>Защита горловин – автоцистерна для ГСМ оснащена ограждением по всей длине, что облегчает обслуживание и повышает безопасность.</li>
<li>Работа на расстоянии – раздаточный рукав Ду-25 длиной 10 метров обеспечивает удобство при заправке.</li>
<li>Стабильность давления – дыхательное устройство УД-33 гарантирует безопасное хранение топлива.</li>
<li>Полный контроль электросистемы – мобильный заправщик оборудован тремя выключателями массы, позволяющими обесточить машину с любой стороны и из кабины.</li>
<li>Простота операций – управление донными клапанами сосредоточено в узле выдачи, что делает процесс быстрым и надежным.</li>
<li>Защита от статического электричества – штырь заземления длиной 10 метров обеспечивает безопасность при работе с горючим.</li>
</ul>
<h2>Сферы применения</h2>
<p>Купить автотопливозаправщик выгодно для любых сфер деятельности, где требуется оперативная заправка автомобилей и спецмашин. Он незаменим на строительных площадках, где оборудование должно работать без простоев, а также в сельском хозяйстве для обслуживания тракторов и комбайнов. В промышленности и на производственных объектах он обеспечивает бесперебойную работу автопарка. Системы заправки активно применяются коммунальными и дорожными службами, а также транспортными компаниями, которым важно экономить время и ресурсы. Кроме того, автозаправщики подходят для организации мобильных заправочных станций на удалённых объектах и мероприятиях. Их универсальность делает процесс снабжения топливом проще, безопаснее и эффективнее.</p>
<h2>Преимущества работы с компанией «РусТрак»</h2>
<ul class="custom-list">
<li>Разнообразие техники – возможность подобрать автотопливозаправщик под любые задачи и объемы работы.</li>
<li>Качество и надежность – автотопливозаправщик соответствует современным стандартам и обеспечена системами безопасности.</li>
<li>Помощь в выборе оборудования – специалисты компании консультируют и подбирают оптимальное решение с учетом ваших потребностей.</li>
<li>Мобильная доставка и оперативность – техника доставляется и вводится в эксплуатацию без лишних задержек.</li>
<li>Техническая поддержка и сервис – компания обеспечивает обслуживание, ремонт и консультации по эксплуатации оборудования.</li>
<li>Экономия времени и ресурсов – с правильным автозаправщиком вы сокращаете простои техники и снижаете расходы на топливо.</li>
<li>Индивидуальный подход к каждому клиенту – решение подбирается с учетом особенностей работы, объема и условий эксплуатации.</li>
</ul>
<h2>Простая и безопасная заправка на месте</h2>
<p>Купить автотопливозаправщик — первый шаг к удобному и безопасному обеспечению транспорта топливом. Не откладывайте решение — выберите модель, которая идеально подходит для ваших задач. Компания «РусТрак» имеет большой выбор надёжных и современных автозаправщиков. Мы поможем определить подходящее решение, учитывая ваши потребности и условия эксплуатации. Убедитесь, что ваш автопарк всегда заправлен и готов к работе. Для оформления заказа свяжитесь с нами любым удобным способом, и мы подберём оптимальный вариант именно для вас.</p>
</div>`,
    },
    en: `<div style="font-size:18px; line-height:1.5;">
    <style>
        div h2 {
            font-size:22px;
            margin-top:20px;
            margin-bottom:12px;
        }

        ul.custom-list {
            list-style-type: none;
            padding-left: 0;
        }

        ul.custom-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            font-size: 18px;
        }

        ul.custom-list li::before {
            content: "♦";
            position: absolute;
            left: 0;
            color: #fec80b;
            font-size: 16px;
            top: 2px;
        }
    </style>

<p>Reliable fuel supply simplifies operations at any site. Buying a fuel tanker truck is an opportunity to refuel machinery right on site, saving time and reducing costs. The equipment is fitted with durable tanks and modern pumps for precise fuel metering. RusTrak offers models suitable for various tasks and volumes. Choosing the right fuel tanker depends on work intensity and operating conditions. Using proven refueling systems guarantees safety and uninterrupted operation across all facilities.</p>
<h2>Assortment</h2>
<p>RusTrak offers a wide range of equipment, where each fuel tanker model is adapted for different tasks and workload volumes. Our catalog features vehicles from leading brands:</p>
<ul class="custom-list">
<li>GAZ</li>
<li>KAMAZ</li>
<li>JAC</li>
<li>FAW</li>
<li>FOTON</li>
</ul>
<p>Available tank capacity options:</p>
<ul class="custom-list">
<li>5,200 liters (5 m³)</li>
<li>6,000 liters (6 tons)</li>
<li>8,000 liters (8 m³)</li>
<li>10,000 liters (10 m³)</li>
<li>12,000 liters (12 m³)</li>
</ul>
<p>All models are certified and meet modern quality and safety standards, guaranteeing reliability, durability, and confidence in smooth operation.</p>
<h2>Features of Fuel Tanker Trucks</h2>
<ul class="custom-list">
<li>Operational flexibility – the mobile fuel dispenser is equipped with two fuel compartments, allowing simultaneous work with different fuel types.</li>
<li>Reliability and durability – the tank is made of durable 09G2S steel with a thickness of 3 mm.</li>
<li>Minimal maintenance costs – lightweight aluminum communications are corrosion-resistant and require no complex maintenance.</li>
<li>Additional road protection – an aluminum side guard reduces the risk of damage during transit.</li>
<li>Quick access to components – a foldable aluminum ladder facilitates servicing.</li>
<li>Time savings during refueling – fuel dispensing trucks feature a sliding vane pump with a capacity of 600 l/min, ensuring high operational speed.</li>
<li>Convenient connection – two 3-meter suction hoses enable refueling setup under any conditions.</li>
<li>Downtime reduction – Elaflex DN-75 quick-disconnect couplings guarantee reliability and speed up processes.</li>
<li>Work comfort – the fuel dispensing unit cover is equipped with gas struts for convenient and safe use.</li>
<li>Neck protection – the POL tank truck is equipped with a full-length guard, facilitating maintenance and enhancing safety.</li>
<li>Remote operation – a 10-meter DN-25 dispensing hose ensures convenience during refueling.</li>
<li>Pressure stability – the UD-33 breather device guarantees safe fuel storage.</li>
<li>Full electrical system control – the mobile refueler is equipped with three battery master switches, allowing power isolation from any side and inside the cab.</li>
<li>Simplicity of operations – bottom valve controls are centralized in the dispensing unit, making the process fast and reliable.</li>
<li>Static electricity protection – a 10-meter grounding rod ensures safety when working with flammable liquids.</li>
</ul>
<h2>Applications</h2>
<p>Buying a fuel tanker truck is beneficial for any industry requiring prompt refueling of vehicles and special machinery. It is indispensable on construction sites where equipment must run without downtime, as well as in agriculture for servicing tractors and harvesters. In industrial and manufacturing facilities, it ensures seamless fleet operation. Refueling systems are actively used by municipal and road services, as well as transport companies that prioritize saving time and resources. Furthermore, fuel tankers are suitable for setting up mobile fueling stations at remote sites and events. Their versatility makes fuel supply simpler, safer, and more efficient.</p>
<h2>Advantages of Working with RusTrak</h2>
<ul class="custom-list">
<li>Variety of equipment – ability to select a fuel tanker for any tasks and workload volumes.</li>
<li>Quality and reliability – equipment complies with modern standards and is equipped with safety systems.</li>
<li>Equipment selection assistance – company specialists provide consultations and select optimal solutions tailored to your needs.</li>
<li>Mobile delivery and promptness – machinery is delivered and commissioned without unnecessary delays.</li>
<li>Technical support and service – the company provides maintenance, repairs, and operational guidance.</li>
<li>Time and resource savings – with the right fuel tanker, you reduce equipment downtime and lower fuel expenses.</li>
<li>Individual approach to every client – solutions are tailored considering operational features, volume, and site conditions.</li>
</ul>
<h2>Simple and Safe Refueling On Site</h2>
<p>Buying a fuel tanker truck is the first step toward convenient and safe fleet fueling. Do not postpone your decision — choose a model perfectly suited to your needs. RusTrak offers a wide selection of reliable, modern fuel dispensers. We will help identify the right solution based on your requirements and operating conditions. Ensure your fleet is always fueled and ready for work. Contact us through any convenient method to place an order, and we will pick the optimal option for you.</p>
</div>`,
  },
  {
    id: 4,
    slug: "avtogidropodiyemniki",
    img: kategoriyImg4,
    title: {
      uz: "Avtogidroko'targichlar (Vishka)",
      ru: "Автогидроподъёмники",
      en: "Aerial work platforms",
    },
  },
  {
    id: 5,
    slug: "avtocisterny",
    img: kategoriyImg5,
    title: {
      uz: "Avtosisternalar",
      ru: "Автоцистерны",
      en: "Tanker trucks",
    },
  },
  {
    id: 6,
    slug: "avtoevakuatory",
    img: kategoriyImg6,
    title: {
      uz: "Avtoevakuatorlar",
      ru: "Автоэвакуаторы",
      en: "Tow trucks",
    },
  },
  {
    id: 7,
    slug: "izotermicheskie-furgony",
    img: kategoriyImg7,
    title: {
      uz: "Izotermik furgonlar",
      ru: "Изотермические фургоны",
      en: "Insulated vans",
    },
  },
  {
    id: 8,
    slug: "konteynerovozy",
    img: kategoriyImg8,
    title: {
      uz: "Konteyner tashuvchilar",
      ru: "Контейнеровозы",
      en: "Container chassis trucks",
    },
  },
  {
    id: 9,
    slug: "kryukovye-pogruzchiki",
    img: kategoriyImg9,
    title: {
      uz: "Ilgakli yuklagichlar (Multilift)",
      ru: "Крюковые погрузчики",
      en: "Hook lifts",
    },
  },
  {
    id: 10,
    slug: "samosvaly",
    img: kategoriyImg10,
    title: {
      uz: "Samosvallar",
      ru: "Самосвалы",
      en: "Dump trucks",
    },
  },
  {
    id: 11,
    slug: "avtomobili-dopog-kategoriya-exii",
    img: kategoriyImg11,
    title: {
      uz: "EXII toifasidagi ADR transport vositalari",
      ru: "Автомобили ДОПОГ категория EXII",
      en: "ADR / EXII category trucks",
    },
  },
];
