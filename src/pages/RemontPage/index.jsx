import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import FirstCar1 from "../../Image/first_car_2.jpg";
import FirstCar2 from "../../Image/first_car_1.jpg";
import FirstCar3 from "../../Image/03.jpg";
import FirstCar4 from "../../Image/04.jpg";
import ThirdCar1 from "../../Image/third_car_1.jpg";
import ThirdCar2 from "../../Image/third_car_2.jpg";
import Proiszdotsva1 from "../../Image/proizvodstvo_3.jpg";
import Proiszdotsva2 from "../../Image/proizvodstvo_1.png";
import Proiszdotsva3 from "../../Image/proizvodstvo_4.jpg";
import Proiszdotsva4 from "../../Image/proizvodstvo_2.png";
import FeedbackForm from "../../components/FeedbackForm";
import { useEffect, useState } from "react";
import RequestCall from "../../components/RequestCallModal";

export default function RemontPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "uz";
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);

  useEffect(() => {
    let isDown = false;
    let currentSlider = null;

    // Kursor qayerdaligini aniqlash
    const getCursorPos = (e, slider) => {
      let a = slider.getBoundingClientRect();
      let x =
        (e.pageX || (e.touches && e.touches[0].pageX)) -
        a.left -
        window.scrollX;
      return x;
    };

    // Rasmni surish jarayoni
    const slide = (e) => {
      if (!isDown || !currentSlider) return;
      e.preventDefault();
      const beforeOverlay = currentSlider.querySelector(".img-comp-before");
      const sliderHandle = currentSlider.querySelector(".img-comp-slider");

      if (!beforeOverlay || !sliderHandle) return;

      let pos = getCursorPos(e, currentSlider);
      if (pos < 0) pos = 0;
      if (pos > currentSlider.offsetWidth) pos = currentSlider.offsetWidth;

      beforeOverlay.style.width = pos + "px";
      sliderHandle.style.left = pos + "px";
    };

    const stopSlide = () => {
      isDown = false;
      currentSlider = null;
    };

    const handleResize = () => {
      const sliders = document.querySelectorAll(".image-comparison-slider");
      sliders.forEach((slider) => {
        const img = slider.querySelector(".img-comp-before img");
        if (img) img.style.width = slider.offsetWidth + "px";
      });
    };

    // DOM to'liq chizilishini kutish uchun setTimeout ishlatamiz
    const initTimer = setTimeout(() => {
      const sliders = document.querySelectorAll(".image-comparison-slider");

      sliders.forEach((slider) => {
        const sliderHandle = slider.querySelector(".img-comp-slider");
        if (sliderHandle) {
          sliderHandle.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isDown = true;
            currentSlider = slider;
          });
          sliderHandle.addEventListener("touchstart", () => {
            isDown = true;
            currentSlider = slider;
          });
        }
      });

      handleResize();

      window.addEventListener("mousemove", slide);
      window.addEventListener("touchmove", slide, { passive: false });
      window.addEventListener("mouseup", stopSlide);
      window.addEventListener("touchend", stopSlide);
      window.addEventListener("resize", handleResize);

      const requestButtons = document.querySelectorAll(".rtrf-popup-button");
      const handleRequestClick = () => {
        setRequest("tm");
      };

      requestButtons.forEach((btn) => {
        btn.addEventListener("click", handleRequestClick);
      });
    }, 150); // 150ms kutish (HTML chizilib bo'lishi uchun yetarli)

    // Komponent o'chganda (yoki til o'zgarganda) xotirani tozalash
    return () => {
      clearTimeout(initTimer); // Taymerni tozalash
      window.removeEventListener("mousemove", slide);
      window.removeEventListener("touchmove", slide);
      window.removeEventListener("mouseup", stopSlide);
      window.removeEventListener("touchend", stopSlide);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentLang]);

  const remonts = {
    remontTitle: {
      ru: "Ремонт шторных полуприцепов от компании «Рустрак» в Нижнем Новгороде",
      uz: "Nijniy Novgorodda «RusTrak» kompaniyasidan parda-tentli yarim tirkamalarni ta'mirlash",
      en: "Repair of curtain-sided semi-trailers by LLC RusTrak in Nizhny Novgorod",
    },
    description: {
      ru: `<div style="font-size:18px; line-height:1.5;"><style>div h2{font-size:22px;margin-top:20px;margin-bottom:12px;}.gallery{display:flex;justify-content:center;flex-wrap:wrap;gap:15px;margin:20px 0;text-align:center;}.gallery img{width:250px;height:auto;border-radius:6px;object-fit:cover;border:3px solid transparent;transition:all 0.3s ease;}.gallery img:hover{border-color:#fec80b;box-shadow:0 0 20px 5px #fec80b;transform:none;}.gallery-title{font-weight:bold;margin:10px 0 5px;text-align:center;}ul.custom-list{list-style-type:none;padding-left:0;}ul.custom-list li{position:relative;padding-left:25px;margin-bottom:10px;font-size:18px;}ul.custom-list li::before{content:"♦";position:absolute;left:0;color:#fec80b;font-size:16px;top:2px;}.after-group.responsive-gallery{display:flex;gap:15px;justify-content:center;}.after-group.responsive-gallery img{width:500px;max-width:100%;height:auto;border-radius:6px;border:3px solid transparent;transition:all 0.3s ease;}@media(max-width:1050px){.after-group.responsive-gallery{flex-direction:column;align-items:center;}.after-group.responsive-gallery img{width:100%;max-width:600px;}}.image-comparison-slider{position:relative;width:100%;max-width:600px;height:400px;margin:20px auto;border-radius:6px;box-shadow:0 4px 15px rgba(0,0,0,0.2);overflow:hidden;}@media(max-width:600px){.image-comparison-slider{height:290px;margin:10px auto !important;}}@media(max-width:320px){.image-comparison-slider{max-width:90%;max-height:250px;margin:10px auto;}}.image-comparison-slider>img,.img-comp-before img{display:block;width:100% !important;height:100% !important;object-fit:cover;pointer-events:none;}.img-comp-before{position:absolute;top:0;left:0;width:50%;height:100%;overflow:hidden;z-index:1;}.img-comp-slider-line{display:none;}.img-comp-slider{position:absolute;top:0;bottom:0;left:50%;width:4px;background:#fec80b;cursor:ew-resize;z-index:10;transform:translateX(-50%);}.img-comp-slider-icon{display:none;}.img-comp-slider::after{content:'';position:absolute;height:100%;width:7px;background-color:#fec80b;box-shadow:0 0 10px rgba(0,0,0,0.5);}.img-comp-slider::before{content:'↔';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;background:#fec80b;border:3px solid white;border-radius:50%;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;box-shadow:0 2px 6px rgba(0,0,0,0.3);}.sliders-row{display:flex;justify-content:center;gap:20px;flex-wrap:wrap;margin:20px 0;}.sliders-row .image-comparison-slider{max-width:600px;width:100%;margin:0;}@media(max-width:850px){.sliders-row{flex-direction:column;align-items:center;}.sliders-row .image-comparison-slider{max-width:100%;}}</style><p>Логистическая сфера опирается на устойчивую работу прицепной техники. Ремонт шторных полуприцепов обеспечивает восстановление работоспособности конструкции после интенсивной эксплуатации. Наши мастера учитывают конструктивные особенности узлов и применяют проверенные методы обслуживания. Компания «Рустрак» в Нижнем Новгороде предлагает сервис, ориентированный на качество и долговечность оборудования. Своевременные технические мероприятия поддерживают стабильное состояние прицепов при интенсивных нагрузках. Надёжный подход к обслуживанию формирует уверенность в бесперебойной работе техники.</p><div class="gallery-item" style="display:flex; margin-top:20px; flex-direction:column; align-items:center; gap:0;"><div class="after-group responsive-gallery"><img src=${FirstCar1} alt="после ремонта"><img src=${FirstCar2} alt="после ремонта"></div></div><div class="remont_container"><button class="rtrf-popup-button">Рассчитать стоимость ремонта</button></div><h2>Наши услуги</h2><p>Компания «Рустрак» выполняет полный ремонт полуприцепов в Нижнем Новгороде после повреждений или выхода из строя. Мы восстанавливаем конструкцию прицепа, исправляем каркас и боковые тенты, ремонтируем двери, замки и механизмы открывания, а также восстанавливаем пол и борта прицепа. Все работы выполняются с высокой точностью и соблюдением стандартов качества, что гарантирует долговечность восстановленных элементов.</p><p><strong>Важно:</strong> ремонт ходовой, двигателя, замена масел и плановое техническое обслуживание не производятся.</p><div class="gallery-container" style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap; margin:20px 0; text-align:center; align-items:flex-start;"></div><div class="sliders-row"><div class="image-comparison-slider" id="image-slider-1"><img src=${FirstCar4} style="height: 500px; " alt="после ремонта"><div class="img-comp-before"><img src=${FirstCar3} style="height: 500px; width: 600px; min-width: 600px;" alt="до ремонта"></div><div class="img-comp-slider"></div></div><div class="image-comparison-slider" id="image-slider-2" style="max-width: 300px; max-height: 500px;"><img src=${ThirdCar2} alt="после ремонта"><div class="img-comp-before"><img src=${ThirdCar1} alt="до ремонта" style="width: 300px; min-width: 300px;"></div><div class="img-comp-slider"></div></div></div><h2>Преимущества компании «Рустрак»</h2><ul class="custom-list"><li>Большая производственная база – позволяет одновременно выполнять несколько крупных заказов и обслуживать большое количество техники.</li><li>Вместительные цеха – обеспечивают удобство работы с крупногабаритными полуприцепами и комфорт для сотрудников.</li><li>Профессиональные мастера – специалисты с опытом и знаниями гарантируют качественный и точный ремонт.</li><li>Полный цикл производства – все работы выполняются на месте, от диагностики до финальной сборки, без привлечения сторонних подрядчиков.</li><li>Опыт 17 лет – долгий срок работы на рынке подтверждает надёжность и компетентность компании.</li><li>Гарантия на ремонт – обеспечивает уверенность в долговечности и качестве выполненных работ.</li></ul><img src=${Proiszdotsva1} style="width:100%; margin-bottom:20px;"><div style="display:flex; gap:0;"><img src=${Proiszdotsva2} style="width:33.333%;"><img src=${Proiszdotsva3} style="width:33.333%;"><img src=${Proiszdotsva4} style="width:33.333%;"></div><div class="remont_container"><button class="rtrf-popup-button">Рассчитать стоимость ремонта</button></div><h2>Качественный сервис для полуприцепов</h2><p>Ремонт шторных полуприцепов помогает продлить срок службы техники и сохранить её функциональность. Обратитесь к нашей команде, чтобы получить надежное и аккуратное обслуживание. Компания «Рустрак» в Нижнем Новгороде выполняет работы с вниманием к деталям и строгими стандартами качества. Доверьте нам технические задачи и получите результат, который оправдает ожидания. Запланируйте обслуживание заранее и убедитесь в удобстве нашего сервиса. Для начала сотрудничества свяжитесь с нами любым удобным способом, и мы поможем организовать все быстро и профессионально.</p></div>`,
      uz: `<div style="font-size:18px; line-height:1.5;"><style>div h2{font-size:22px;margin-top:20px;margin-bottom:12px;}.gallery{display:flex;justify-content:center;flex-wrap:wrap;gap:15px;margin:20px 0;text-align:center;}.gallery img{width:250px;height:auto;border-radius:6px;object-fit:cover;border:3px solid transparent;transition:all 0.3s ease;}.gallery img:hover{border-color:#fec80b;box-shadow:0 0 20px 5px #fec80b;transform:none;}.gallery-title{font-weight:bold;margin:10px 0 5px;text-align:center;}ul.custom-list{list-style-type:none;padding-left:0;}ul.custom-list li{position:relative;padding-left:25px;margin-bottom:10px;font-size:18px;}ul.custom-list li::before{content:"♦";position:absolute;left:0;color:#fec80b;font-size:16px;top:2px;}.after-group.responsive-gallery{display:flex;gap:15px;justify-content:center;}.after-group.responsive-gallery img{width:500px;max-width:100%;height:auto;border-radius:6px;border:3px solid transparent;transition:all 0.3s ease;}@media(max-width:1050px){.after-group.responsive-gallery{flex-direction:column;align-items:center;}.after-group.responsive-gallery img{width:100%;max-width:600px;}}.image-comparison-slider{position:relative;width:100%;max-width:600px;height:400px;margin:20px auto;border-radius:6px;box-shadow:0 4px 15px rgba(0,0,0,0.2);overflow:hidden;}@media(max-width:600px){.image-comparison-slider{height:290px;margin:10px auto !important;}}@media(max-width:320px){.image-comparison-slider{max-width:90%;max-height:250px;margin:10px auto;}}.image-comparison-slider>img,.img-comp-before img{display:block;width:100% !important;height:100% !important;object-fit:cover;pointer-events:none;}.img-comp-before{position:absolute;top:0;left:0;width:50%;height:100%;overflow:hidden;z-index:1;}.img-comp-slider-line{display:none;}.img-comp-slider{position:absolute;top:0;bottom:0;left:50%;width:4px;background:#fec80b;cursor:ew-resize;z-index:10;transform:translateX(-50%);}.img-comp-slider-icon{display:none;}.img-comp-slider::after{content:'';position:absolute;height:100%;width:7px;background-color:#fec80b;box-shadow:0 0 10px rgba(0,0,0,0.5);}.img-comp-slider::before{content:'↔';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;background:#fec80b;border:3px solid white;border-radius:50%;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;box-shadow:0 2px 6px rgba(0,0,0,0.3);}.sliders-row{display:flex;justify-content:center;gap:20px;flex-wrap:wrap;margin:20px 0;}.sliders-row .image-comparison-slider{max-width:600px;width:100%;margin:0;}@media(max-width:850px){.sliders-row{flex-direction:column;align-items:center;}.sliders-row .image-comparison-slider{max-width:100%;}}</style><p>Logistika sohasi tirkama texnikalarining barqaror ishlashiga tayanadi. Parda-tentli yarim tirkamalarni ta'mirlash jadal foydalanishdan so'ng konstruksiyaning ishchanligini tiklashni ta'minlaydi. Ustalarimiz tugunlarning konstruktiv xususiyatlarini hisobga oladi va sinovdan o'tgan xizmat ko'rsatish usullarini qo'llaydi. Nijniy Novgorodagi «RusTrak» kompaniyasi uskunaning sifati va uzoq muddat xizmat qilishiga qaratilgan xizmatni taklif etadi. O'z vaqtida o'tkazilgan texnik chora-tadbirlar intensiv yuklanishlarda tirkamalarning barqaror holatini saqlab qoladi. Xizmat ko'rsatishdagi ishonchli yondashuv texnikaning uzluksiz ishlashiga ishonch uyg'otadi.</p><div class="gallery-item" style="display:flex; margin-top:20px; flex-direction:column; align-items:center; gap:0;"><div class="after-group responsive-gallery"><img src=${FirstCar1} alt="ta'mirlashdan so'ng"><img src=${FirstCar2} alt="ta'mirlashdan so'ng"></div></div><div class="remont_container"><button class="rtrf-popup-button">Ta'mirlash narxini hisoblash</button></div><h2>Bizning xizmatlarimiz</h2><p>«RusTrak» kompaniyasi Nijniy Novgorodda shikastlanish yoki ishdan chiqish holatlaridan keyin yarim tirkamalarni to'liq ta'mirlashni amalga oshiradi. Biz tirkama konstruksiyasini tiklaymiz, karkas va yon tentlarni to'g'rilaymiz, eshiklar, qulflar va ochish mexanizmlarini ta'mirlaymiz, shuningdek, tirkama poli va bortlarini tiklaymiz. Barcha ishlar yuqori aniqlik va sifat standartlariga rioya qilingan holda bajariladi, bu esa tiklangan elementlarning uzoq muddat xizmat qilishini kafolatlaydi.</p><p><strong>Muhim:</strong> yurish qismi, dvigatelni ta'mirlash, moylarni almashtirish va rejali texnik xizmat ko'rsatish amalga oshirilmaydi.</p><div class="gallery-container" style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap; margin:20px 0; text-align:center; align-items:flex-start;"></div><div class="sliders-row"><div class="image-comparison-slider" id="image-slider-1"><img src=${FirstCar4} style="height: 500px; " alt="ta'mirlashdan so'ng"><div class="img-comp-before"><img src=${FirstCar3} style="height: 500px; width: 600px; min-width: 600px;" alt="ta'mirlashdan oldin"></div><div class="img-comp-slider"></div></div><div class="image-comparison-slider" id="image-slider-2" style="max-width: 300px; max-height: 500px;"><img src=${ThirdCar2} alt="ta'mirlashdan so'ng"><div class="img-comp-before"><img src=${ThirdCar1} alt="ta'mirlashdan oldin" style="width: 300px; min-width: 300px;"></div><div class="img-comp-slider"></div></div></div><h2>«RusTrak» kompaniyasining afzalliklari</h2><ul class="custom-list"><li>Katta ishlab chiqarish bazasi – bir vaqtning o'zida bir nechta yirik buyurtmalarni bajarish va ko'p miqdordagi texnikaga xizmat ko'rsatish imkonini beradi.</li><li>Keng sexlar – yirik gabaritli yarim tirkamalar bilan ishlash qulayligini va xodimlar uchun qulaylikni ta'minlaydi.</li><li>Professional ustalar – tajriba va bilimga ega mutaxassislar sifatli va aniq ta'mirlashni kafolatlaydi.</li><li>To'liq ishlab chiqarish sikli – diagnostikadan tortib yakuniy yig'ishgacha bo'lgan barcha ishlar uchinchi tomon pudratchilarisiz, joyning o'zida bajariladi.</li><li>17 yillik tajriba – bozorda uzoq muddat ishlash kompaniyaning ishonchliligi va malakasini tasdiqlaydi.</li><li>Ta'mirlash kafolati – bajarilgan ishlarning uzoq muddatliligi va sifatiga ishonch beradi.</li></ul><img src=${Proiszdotsva1} style="width:100%; margin-bottom:20px;"><div style="display:flex; gap:0;"><img src=${Proiszdotsva2} style="width:33.333%;"><img src=${Proiszdotsva3} style="width:33.333%;"><img src=${Proiszdotsva4} style="width:33.333%;"></div><div class="remont_container"><button class="rtrf-popup-button">Ta'mirlash narxini hisoblash</button></div><h2>Yarim tirkamalar uchun sifatli xizmat ko'rsatish</h2><p>Parda-tentli yarim tirkamalarni ta'mirlash texnikaning xizmat qilish muddatini uzaytirishga va uning funksionalligini saqlab qolishga yordam beradi. Ishonchli va ehtiyotkorona xizmat olish uchun jamoamizga murojaat qiling. Nijniy Novgorodagi «RusTrak» kompaniyasi ishlarni tafsilotlarga e'tibor va qat'iy sifat standartlari bilan bajaradi. Texnik vazifalarni bizga ishoning va kutganingizni oqlaydigan natijaga erishing. Xizmat ko'rsatishni oldindan rejalashtiring va xizmatimizning qulayligiga ishonch hosil qiling. Hamkorlikni boshlash uchun o'zingizga qulay bo'lgan har qanday usulda biz bilan bog'laning va biz barchasini tez hamda professional tarzda tashkil etishga yordam beramiz.</p></div>`,
      en: `<div style="font-size:18px; line-height:1.5;"><style>div h2{font-size:22px;margin-top:20px;margin-bottom:12px;}.gallery{display:flex;justify-content:center;flex-wrap:wrap;gap:15px;margin:20px 0;text-align:center;}.gallery img{width:250px;height:auto;border-radius:6px;object-fit:cover;border:3px solid transparent;transition:all 0.3s ease;}.gallery img:hover{border-color:#fec80b;box-shadow:0 0 20px 5px #fec80b;transform:none;}.gallery-title{font-weight:bold;margin:10px 0 5px;text-align:center;}ul.custom-list{list-style-type:none;padding-left:0;}ul.custom-list li{position:relative;padding-left:25px;margin-bottom:10px;font-size:18px;}ul.custom-list li::before{content:"♦";position:absolute;left:0;color:#fec80b;font-size:16px;top:2px;}.after-group.responsive-gallery{display:flex;gap:15px;justify-content:center;}.after-group.responsive-gallery img{width:500px;max-width:100%;height:auto;border-radius:6px;border:3px solid transparent;transition:all 0.3s ease;}@media(max-width:1050px){.after-group.responsive-gallery{flex-direction:column;align-items:center;}.after-group.responsive-gallery img{width:100%;max-width:600px;}}.image-comparison-slider{position:relative;width:100%;max-width:600px;height:400px;margin:20px auto;border-radius:6px;box-shadow:0 4px 15px rgba(0,0,0,0.2);overflow:hidden;}@media(max-width:600px){.image-comparison-slider{height:290px;margin:10px auto !important;}}@media(max-width:320px){.image-comparison-slider{max-width:90%;max-height:250px;margin:10px auto;}}.image-comparison-slider>img,.img-comp-before img{display:block;width:100% !important;height:100% !important;object-fit:cover;pointer-events:none;}.img-comp-before{position:absolute;top:0;left:0;width:50%;height:100%;overflow:hidden;z-index:1;}.img-comp-slider-line{display:none;}.img-comp-slider{position:absolute;top:0;bottom:0;left:50%;width:4px;background:#fec80b;cursor:ew-resize;z-index:10;transform:translateX(-50%);}.img-comp-slider-icon{display:none;}.img-comp-slider::after{content:'';position:absolute;height:100%;width:7px;background-color:#fec80b;box-shadow:0 0 10px rgba(0,0,0,0.5);}.img-comp-slider::before{content:'↔';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;background:#fec80b;border:3px solid white;border-radius:50%;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;box-shadow:0 2px 6px rgba(0,0,0,0.3);}.sliders-row{display:flex;justify-content:center;gap:20px;flex-wrap:wrap;margin:20px 0;}.sliders-row .image-comparison-slider{max-width:600px;width:100%;margin:0;}@media(max-width:850px){.sliders-row{flex-direction:column;align-items:center;}.sliders-row .image-comparison-slider{max-width:100%;}}</style><p>The logistics sector relies on the stable operation of trailer equipment. Repair of curtain-sided semi-trailers ensures the restoration of the structure's operability after intensive use. Our masters take into account the design features of the components and apply proven maintenance methods. The RusTrak company in Nizhny Novgorod offers a service focused on the quality and durability of the equipment. Timely technical measures maintain the stable condition of trailers under intense loads. A reliable approach to maintenance builds confidence in the uninterrupted operation of the equipment.</p><div class="gallery-item" style="display:flex; margin-top:20px; flex-direction:column; align-items:center; gap:0;"><div class="after-group responsive-gallery"><img src=${FirstCar1} alt="after repair"><img src=${FirstCar2} alt="after repair"></div></div><div class="remont_container"><button class="rtrf-popup-button">Calculate repair cost</button></div><h2>Our services</h2><p>The RusTrak company performs a complete repair of semi-trailers in Nizhny Novgorod after damage or failure. We restore the trailer structure, fix the frame and side awnings, repair doors, locks, and opening mechanisms, and also restore the floor and sides of the trailer. All work is carried out with high precision and in compliance with quality standards, which guarantees the durability of the restored elements.</p><p><strong>Important:</strong> repair of the chassis, engine, oil changes, and scheduled maintenance are not provided.</p><div class="gallery-container" style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap; margin:20px 0; text-align:center; align-items:flex-start;"></div><div class="sliders-row"><div class="image-comparison-slider" id="image-slider-1"><img src=${FirstCar4} style="height: 500px; " alt="after repair"><div class="img-comp-before"><img src=${FirstCar3} style="height: 500px; width: 600px; min-width: 600px;" alt="before repair"></div><div class="img-comp-slider"></div></div><div class="image-comparison-slider" id="image-slider-2" style="max-width: 300px; max-height: 500px;"><img src=${ThirdCar2} alt="after repair"><div class="img-comp-before"><img src=${ThirdCar1} alt="before repair" style="width: 300px; min-width: 300px;"></div><div class="img-comp-slider"></div></div></div><h2>Advantages of the RusTrak company</h2><ul class="custom-list"><li>Large production base – allows executing several large orders simultaneously and servicing a large number of vehicles.</li><li>Spacious workshops – provide convenience for working with oversized semi-trailers and comfort for employees.</li><li>Professional masters – specialists with experience and knowledge guarantee high-quality and precise repairs.</li><li>Full production cycle – all works are performed on-site, from diagnostics to final assembly, without involving third-party contractors.</li><li>17 years of experience – a long period of operation in the market confirms the reliability and competence of the company.</li><li>Repair warranty – ensures confidence in the durability and quality of the work performed.</li></ul><img src=${Proiszdotsva1} style="width:100%; margin-bottom:20px;"><div style="display:flex; gap:0;"><img src=${Proiszdotsva2} style="width:33.333%;"><img src=${Proiszdotsva3} style="width:33.333%;"><img src=${Proiszdotsva4} style="width:33.333%;"></div><div class="remont_container"><button class="rtrf-popup-button">Calculate repair cost</button></div><h2>Quality service for semi-trailers</h2><p>Repair of curtain-sided semi-trailers helps to extend the service life of the equipment and preserve its functionality. Contact our team to receive reliable and careful service. The RusTrak company in Nizhny Novgorod performs work with attention to detail and strict quality standards. Entrust your technical tasks to us and get a result that meets your expectations. Plan your maintenance in advance and make sure of the convenience of our service. To start cooperation, contact us in any convenient way, and we will help organize everything quickly and professionally.</p></div>`,
    },
  };
  return (
    <>
      <div>
        <Helmet>
          <title>{t("metaTitleDescriptions.remont")}</title>
        </Helmet>

        <div className="container1">
          <div>
            <Breadcrumbs />
          </div>

          <div>
            <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] mb-8 pt-8 md:pt-2 text-black dark:text-white">
              {remonts.remontTitle[currentLang]}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: remonts.description[currentLang],
              }}
              className="pb-20 text-black dark:text-white"
            ></div>
          </div>
        </div>
        <RequestCall
          request={request}
          setRequest={setRequest}
          closeRequest={closeRequest}
        />
        <FeedbackForm />
      </div>
    </>
  );
}
