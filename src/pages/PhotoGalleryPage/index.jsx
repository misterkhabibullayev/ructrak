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
                className={`relative w-full aspect-square rounded overflow-hidden border border-[#a2a2a2] ${(index + 1) % 5 === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
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
