import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs";
import FeedbackForm from "../../components/FeedbackForm";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import GalleryImg1 from "../../Image/fotogallery1.webp";
import GalleryImg2 from "../../Image/fotogallery2.webp";
import GalleryImg3 from "../../Image/fotogallery3.webp";
import GalleryImg4 from "../../Image/fotogallery4.webp";
import GalleryImg5 from "../../Image/fotogallery5.jpg";
import GalleryImg6 from "../../Image/fotogallery6.jpg";
import GalleryImg7 from "../../Image/fotogallery7.webp";
import GalleryImg8 from "../../Image/fotogallery8.webp";
import GalleryImg9 from "../../Image/fotogallery9.webp";
import GalleryImg10 from "../../Image/fotogallery10.webp";
import GalleryImg11 from "../../Image/fotogallery11.webp";
import GalleryImg12 from "../../Image/fotogallery12.webp";
import GalleryImg13 from "../../Image/fotogallery13.webp";
import GalleryImg14 from "../../Image/fotogallery14.webp";
import GalleryImg15 from "../../Image/fotogallery15.webp";
import GalleryImg16 from "../../Image/fotogallery16.png";
import GalleryImg17 from "../../Image/fotogallery17.webp";
import GalleryImg18 from "../../Image/fotogallery18.webp";
import GalleryImg19 from "../../Image/fotogallery19.webp";
import GalleryImg20 from "../../Image/fotogallery20.webp";
import GalleryImg21 from "../../Image/fotogallery21.webp";
import Gruzovikrustrak32 from "../../Image/Gruzovik-rustrak-_32_.jpg";
import Gruzovikrustrak31 from "../../Image/Gruzovik-rustrak-_31_.jpg";
import Gruzovikrustrak30 from "../../Image/Gruzovik-rustrak-_30_.jpg";
import Gruzovikrustrak29 from "../../Image/Gruzovik-rustrak-_29_.jpg";
import Gruzovikrustrak28 from "../../Image/Gruzovik-rustrak-_28_.jpg";
import Gruzovikrustrak27 from "../../Image/Gruzovik-rustrak-_27_.jpg";
import Gruzovikrustrak26 from "../../Image/Gruzovik-rustrak-_26_.jpg";
import Gruzovikrustrak25 from "../../Image/Gruzovik-rustrak-_25_.jpg";
import Gruzovikrustrak24 from "../../Image/Gruzovik-rustrak-_24_.jpg";
import Gruzovikrustrak23 from "../../Image/Gruzovik-rustrak-_23_.jpg";
import Gruzovikrustrak22 from "../../Image/Gruzovik-rustrak-_22_.jpg";
import Gruzovikrustrak21 from "../../Image/Gruzovik-rustrak-_21_.jpg";
import Gruzovikrustrak20 from "../../Image/Gruzovik-rustrak-_20_.jpg";
import Gruzovikrustrak19 from "../../Image/Gruzovik-rustrak-_19_.jpg";
import Gruzovikrustrak18 from "../../Image/Gruzovik-rustrak-_18_.jpg";
import Gruzovikrustrak17 from "../../Image/Gruzovik-rustrak-_17_.jpg";
import Gruzovikrustrak16 from "../../Image/Gruzovik-rustrak-_16_.jpg";
import Gruzovikrustrak15 from "../../Image/Gruzovik-rustrak-_15_.jpg";
import Gruzovikrustrak14 from "../../Image/Gruzovik-rustrak-_14_.jpg";
import Gruzovikrustrak13 from "../../Image/Gruzovik-rustrak-_13_.jpg";
import Gruzovikrustrak12 from "../../Image/Gruzovik-rustrak-_12_.jpg";
import Gruzovikrustrak11 from "../../Image/Gruzovik-rustrak-_11_.jpg";
import Gruzovikrustrak10 from "../../Image/Gruzovik-rustrak-_10_.jpg";
import About6 from "../../Image/Skrinshot_2026_04_02_03_12_34_922.webp";
import About7 from "../../Image/Skrinshot_2026_04_02_03_12_23_780.png";
import About8 from "../../Image/Proizvodstvo-Rustrak-_11_.jpg";
import About9 from "../../Image/Proizvodstvo-Rustrak-_10_.jpg";
import About10 from "../../Image/Proizvodstvo-Rustrak-_9_.jpg";
import About11 from "../../Image/Proizvodstvo-Rustrak-_8_.jpg";
import About12 from "../../Image/Proizvodstvo-Rustrak-_7_.jpg";
import About13 from "../../Image/Proizvodstvo-Rustrak-_6_.jpg";
import About14 from "../../Image/Proizvodstvo-Rustrak-_5_.jpg";
import About15 from "../../Image/Proizvodstvo-Rustrak-_4_.jpg";
import About16 from "../../Image/Proizvodstvo-Rustrak-_3_.jpg";
import About17 from "../../Image/Proizvodstvo-Rustrak-_2_.jpg";
import About18 from "../../Image/Proizvodstvo-Rustrak-_1_.jpg";
import About19 from "../../Image/zscwkpsgxe3z0n775bhk4ytyzoxo2xlq.webp";
import EXHI6 from "../../Image/Vistavki-rustrak-_6_.jpg";
import EXHI7 from "../../Image/Vistavki-rustrak-_5_.jpg";
import EXHI8 from "../../Image/Vistavki-rustrak-_4_.jpg";
import EXHI9 from "../../Image/Vistavki-rustrak-_3_.webp";
import EXHI10 from "../../Image/Vistavki-rustrak-_2_.webp";
import EXHI11 from "../../Image/Vistavki-rustrak-_1_.webp";
import EXHI12 from "../../Image/h5tn9ysuu3l3el60gw5dkzzhke0xpwh8.webp";
import EXHI13 from "../../Image/7l7m8att0z9l0y6a60saagqs3lj5o86w.webp";
import EXHI14 from "../../Image/xmhkw6r79n5jvzbb9p47xdke0ptkig00.webp";
import EXHI15 from "../../Image/4ty691y4ko8ynl76mz2tm4vt62handmf.webp";
import { Link } from "react-router-dom";

export default function PhotoGalleryPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("avto");

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const galleryImages = [
    {
      id: 1,
      img: GalleryImg1,
      category: "avto",
    },
    {
      id: 2,
      img: GalleryImg2,
      category: "avto",
    },
    {
      id: 3,
      img: GalleryImg3,
      category: "avto",
    },
    {
      id: 4,
      img: GalleryImg4,
      category: "avto",
    },
    {
      id: 5,
      img: GalleryImg5,
      category: "avto",
    },
    {
      id: 6,
      img: GalleryImg6,
      category: "avto",
    },
    {
      id: 7,
      img: GalleryImg7,
      category: "promo",
    },
    {
      id: 8,
      img: GalleryImg8,
      category: "promo",
    },
    {
      id: 9,
      img: GalleryImg9,
      category: "promo",
    },
    {
      id: 10,
      img: GalleryImg10,
      category: "promo",
    },
    {
      id: 11,
      img: GalleryImg11,
      category: "promo",
    },
    {
      id: 12,
      img: GalleryImg12,
      category: "about",
    },
    {
      id: 13,
      img: GalleryImg13,
      category: "about",
    },
    {
      id: 14,
      img: GalleryImg14,
      category: "about",
    },
    {
      id: 15,
      img: GalleryImg15,
      category: "about",
    },
    {
      id: 16,
      img: GalleryImg16,
      category: "about",
    },
    {
      id: 17,
      img: GalleryImg17,
      category: "exhi",
    },
    {
      id: 18,
      img: GalleryImg18,
      category: "exhi",
    },
    {
      id: 19,
      img: GalleryImg19,
      category: "exhi",
    },
    {
      id: 20,
      img: GalleryImg20,
      category: "exhi",
    },
    {
      id: 21,
      img: GalleryImg21,
      category: "exhi",
    },
    {
      id: 22,
      img: Gruzovikrustrak32,
      category: "avto",
    },
    { id: 23, img: Gruzovikrustrak31, category: "avto" },
    { id: 24, img: Gruzovikrustrak30, category: "avto" },
    { id: 25, img: Gruzovikrustrak29, category: "avto" },
    { id: 26, img: Gruzovikrustrak28, category: "avto" },
    { id: 27, img: Gruzovikrustrak27, category: "avto" },
    { id: 28, img: Gruzovikrustrak26, category: "avto" },
    { id: 29, img: Gruzovikrustrak25, category: "avto" },
    { id: 30, img: Gruzovikrustrak24, category: "avto" },
    { id: 31, img: Gruzovikrustrak23, category: "avto" },
    { id: 32, img: Gruzovikrustrak22, category: "avto" },
    { id: 33, img: Gruzovikrustrak21, category: "avto" },
    { id: 34, img: Gruzovikrustrak20, category: "avto" },
    { id: 35, img: Gruzovikrustrak19, category: "avto" },
    { id: 36, img: Gruzovikrustrak18, category: "avto" },
    { id: 37, img: Gruzovikrustrak17, category: "avto" },
    { id: 38, img: Gruzovikrustrak16, category: "avto" },
    { id: 39, img: Gruzovikrustrak15, category: "avto" },
    { id: 40, img: Gruzovikrustrak14, category: "avto" },
    { id: 41, img: Gruzovikrustrak13, category: "avto" },
    { id: 42, img: Gruzovikrustrak12, category: "avto" },
    { id: 43, img: Gruzovikrustrak11, category: "avto" },
    { id: 44, img: Gruzovikrustrak10, category: "avto" },
    {
      id: 45,
      img: About6,
      category: "about",
    },
    { id: 46, img: About7, category: "about" },
    { id: 47, img: About8, category: "about" },
    { id: 48, img: About9, category: "about" },
    { id: 49, img: About10, category: "about" },
    { id: 50, img: About11, category: "about" },
    { id: 51, img: About12, category: "about" },
    { id: 52, img: About13, category: "about" },
    { id: 53, img: About14, category: "about" },
    { id: 54, img: About15, category: "about" },
    { id: 55, img: About16, category: "about" },
    { id: 56, img: About17, category: "about" },
    { id: 57, img: About18, category: "about" },
    { id: 58, img: About19, category: "about" },
    {
      id: 59,
      img: EXHI6,
      category: "exhi",
    },
    { id: 60, img: EXHI7, category: "exhi" },
    { id: 61, img: EXHI8, category: "exhi" },
    { id: 62, img: EXHI9, category: "exhi" },
    { id: 63, img: EXHI10, category: "exhi" },
    { id: 64, img: EXHI11, category: "exhi" },
    { id: 65, img: EXHI12, category: "exhi" },
    { id: 66, img: EXHI13, category: "exhi" },
    { id: 67, img: EXHI14, category: "exhi" },
    { id: 68, img: EXHI15, category: "exhi" },
  ];

  const filteredImages = galleryImages.filter(
    (item) => item.category === activeCategory,
  );

  const getButtonClass = (category) => {
    const baseClass =
      "border py-1.5 md:py-3 px-3 md:px-5 rounded transition-all duration-300 font-FiraSans font-normal text-base leading-[110%]";

    if (activeCategory === category) {
      return `${baseClass} border-[#FEC80B] bg-[#FEC80B] text-black`;
    }

    return `${baseClass} border-[#EBEBEB] bg-transparent text-black dark:text-white hover:border-[#FEC80B] hover:bg-[#FEC80B] dark:hover:text-black`;
  };

  const isLargeCard = (index) => {
    const itemNumber = index + 1;

    let current = 5;
    let step = 15;

    while (current <= itemNumber) {
      if (current === itemNumber) return true;
      current += step;
      step += 5;
    }

    return false;
  };
  return (
    <>
      <div>
        <Helmet>
          <title>{t("metaTitleDescriptions.photogallery")}</title>
        </Helmet>
        <div className="container1">
          <div>
            <Breadcrumbs />
          </div>
          <div className="flex items-center justify-between mb-8 gap-10">
            <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] pt-8 md:pt-2 text-black dark:text-white">
              {t("photoGalleryPage.title")}
            </h1>
            <Link
              to={"/video"}
              className="hidden lg:flex py-3.25 px-7.5 bg-transparent border border-[#FEC80B] rounded hover:bg-[#FEC80B] transition-all duration-300 font-FiraSans font-normal text-base leading-[110%] text-black dark:text-white dark:hover:text-black whitespace-nowrap"
            >
              {t("photoGalleryPage.video")}
            </Link>
          </div>
          <div className="flex items-center flex-wrap gap-3 md:gap-5 mb-8">
            <button
              onClick={() => setActiveCategory("avto")}
              className={getButtonClass("avto")}
            >
              {t("photoGalleryPage.filAuto")}
            </button>
            <button
              onClick={() => setActiveCategory("promo")}
              className={getButtonClass("promo")}
            >
              {t("photoGalleryPage.filPromo")}
            </button>
            <button
              onClick={() => setActiveCategory("about")}
              className={getButtonClass("about")}
            >
              {t("photoGalleryPage.filAbout")}
            </button>
            <button
              onClick={() => setActiveCategory("exhi")}
              className={getButtonClass("exhi")}
            >
              {t("photoGalleryPage.filExhi")}
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className={`relative w-full aspect-square rounded overflow-hidden border border-[#a2a2a2] ${isLargeCard(index) ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <a
                  href={item.img}
                  data-fancybox="gallery"
                  className="inline-block group w-full h-full"
                >
                  <img
                    src={item.img}
                    alt="reviews"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <FeedbackForm />
      </div>
    </>
  );
}
