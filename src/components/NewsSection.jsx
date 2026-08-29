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
    <section className="overflow-hidden pb-16">
      <div className="container1">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-FiraSans font-medium text-[28px] md:text-[42px] dark:text-white">
            {t("newsSection.title")}
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
                slidesPerView: 2,
                spaceBetween: 12,
              },
              320: {
                slidesPerView: 2,
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
            {NewsData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group rounded-t-sm rounded-r-sm overflow-hidden"
                >
                  <a href={`news/${item.slug}`}>
                    <div className="w-full aspect-video">
                      <img
                        src={item.images[0]}
                        alt={item.title[currentLang]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between h-43.75 py-5.5 px-2.75">
                      <div>
                        <span className="font-FiraSans font-normal text-[14px] md:text-[16px] leading-[130%] text-black dark:text-white">
                          {item.publishedAt}
                        </span>
                        <h3 className="line-clamp-3 font-FiraSans font-medium text-[16px] min-[456px]:text-[18px] leading-[110%] text-black dark:text-white mt-0.5 md:mt-1">
                          {item.title[currentLang]}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-[#A1A1A1] group-hover:text-[#fec80b] transition-all duration-300">
                        <span className="font-FiraSans font-normal text-[11px] min-[456px]:text-[18px] leading-[110%]">
                          {t("newsSection.readMore")}
                        </span>
                        <Images.rightArrowIcon />
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
