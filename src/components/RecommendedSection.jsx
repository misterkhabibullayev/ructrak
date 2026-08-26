import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { productsData } from "../data/productsData";
import { Images } from "../utils/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";
import { useState } from "react";

export default function Recommended() {
  const { t } = useTranslation();
  // const currentLang = i18n.languages;
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <>
      <section className="my-40 bg-[#F9F9F9] dark:bg-slate-800 py-14">
        <div className="container1">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-FiraSans font-medium text-[28px] md:text-[42px] dark:text-white">
              {t("recommendedSection.recTitle")}
            </h1>
            <div className="hidden md:flex items-center gap-2.5">
              <button
                disabled={isBeginning}
                className={`custom-prev-btn border border-slate-600 rounded p-1.75 transition-all duration-300 ${isBeginning ? "opacity-30 cursor-not-allowed" : "group hover:bg-[#FEC80B]"}`}
              >
                <Images.swiperPrevBtnIcon className="text-black dark:text-white group-hover:text-black" />
              </button>
              <button
                disabled={isEnd}
                className={`custom-next-btn border border-slate-600 rounded p-1.75 transition-all duration-300 ${isEnd ? "opacity-30 cursor-not-allowed" : "group hover:bg-[#FEC80B]"}`}
              >
                <Images.swiperNextBtnIcon className="text-black dark:text-white group-hover:text-black" />
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              575: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev-btn",
              nextEl: ".custom-next-btn",
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="mySwiper"
          >
            {productsData
              ?.filter((product) => product.recommended === true)
              .map((product) => (
                <SwiperSlide key={product.id}>
                  <div>
                    <img src={product.media.mainImage} alt={product.arikul} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
