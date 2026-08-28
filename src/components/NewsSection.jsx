// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { useTranslation } from "react-i18next";
import { Navigation, Pagination } from "swiper/modules";
import { Images } from "../utils/images";
import { NewsData } from "../data/newsData";

export function NewsSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <section className="overflow-hidden">
      <div className="container1">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-FiraSans font-medium text-[28px] md:text-[42px] dark:text-white">
            {t("categorySection.categoryTitle")}
          </h1>
          <div className="hidden md:flex items-center gap-2.5">
            <button
              aria-label={t("recommendedSection.prev")}
              className="custom-prev-btnNews border border-slate-600 rounded group hover:bg-[#FEC80B]  p-1.75 transition-all duration-300"
            >
              <Images.swiperPrevBtnIcon className="text-black dark:text-white group-hover:text-black" />
            </button>
            <button
              aria-label={t("recommendedSection.next")}
              className="custom-next-btnNews border border-slate-600 rounded group hover:bg-[#FEC80B]  p-1.75 transition-all duration-300"
            >
              <Images.swiperNextBtnIcon className="text-black dark:text-white group-hover:text-black" />
            </button>
          </div>
        </div>
        <div className="">
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
            loop={true}
            navigation={{
              prevEl: ".custom-prev-btnNews",
              nextEl: ".custom-next-btnNews",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {NewsData.map((item) => (
              <SwiperSlide key={item.id} className="py-10">
                <div>
                  <div>
                    <img src={item.images[0]} alt={item.title[currentLang]} />
                  </div>
                  <div>
                    <div>
                      <span>{item.publishedAt}</span>
                      <h3>{item.title[currentLang]}</h3>
                    </div>
                    <div>
                      <span>{t("newsSection.podrobne")}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
