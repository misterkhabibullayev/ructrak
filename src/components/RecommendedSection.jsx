import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { productsData } from "../data/productsData";
import { Images } from "../utils/images";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";
import RequestCall from "./RequestCallModal";

export default function Recommended() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [request, setRequest] = useState(null);
  const closeRequest = () => setRequest(null);
  return (
    <>
      <section className="my-40 bg-[#F9F9F9] dark:bg-slate-950 py-14">
        <div className="container1">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-FiraSans font-medium text-[28px] md:text-[42px] dark:text-white">
              {t("recommendedSection.recTitle")}
            </h1>
            <div className="hidden md:flex items-center gap-2.5">
              <button
                aria-label={t("recommendedSection.prev")}
                disabled={isBeginning}
                className={`custom-prev-btnRec border border-slate-600 rounded p-1.75 transition-all duration-300 ${isBeginning ? "opacity-30 cursor-not-allowed" : "group hover:bg-[#FEC80B]"}`}
              >
                <Images.swiperPrevBtnIcon className="text-black dark:text-white group-hover:text-black" />
              </button>
              <button
                aria-label={t("recommendedSection.next")}
                disabled={isEnd}
                className={`custom-next-btnRec border border-slate-600 rounded p-1.75 transition-all duration-300 ${isEnd ? "opacity-30 cursor-not-allowed" : "group hover:bg-[#FEC80B]"}`}
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
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev-btnRec",
              nextEl: ".custom-next-btnRec",
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="mySwiper rounded-2xl"
          >
            {productsData
              ?.filter((product) => product.recommended === true)
              .map((product, index) => (
                <SwiperSlide key={product.id}>
                  <div data-aos="fade-up" data-aos-delay={index * 100}>
                    <a href={`catalog/${product.categorySlug}/${product.slug}`}>
                      <div className="w-full aspect-square">
                        <img
                          src={product.media.mainImage}
                          alt={product.title[currentLang]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </a>
                    <div className="px-3 py-4 bg-white dark:bg-slate-900">
                      <div>
                        <a
                          href={`catalog/${product.categorySlug}/${product.slug}`}
                          className="font-FiraSans font-normal text-[11px] min-[456px]:text-[18px] leading-[120%] text-black dark:text-white line-clamp-2"
                        >
                          {product?.title?.[currentLang]}
                        </a>
                        {product.price.isPriceOnRequest && (
                          <p className="font-FiraSans font-medium text-[11px] min-[456px]:text-[22px] leading-[120%] text-black dark:text-white mt-3.5 mb-2.75">
                            {t("recommendedSection.cena")}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col min-[890px]:flex-row md:justify-between">
                        <a
                          href={`catalog/${product.categorySlug}/${product.slug}`}
                          aria-label={t("recommendedSection.podrobne")}
                          className="py-1.5 min-[456px]:py-3.25 px-2.75 min-[456px]:px-7.75 bg-[#fec80b] hover:bg-[#FFD43A] rounded transition-all duration-300 font-FiraSans font-normal text-[11px] min-[456px]:text-[16px] text-center leading-[110%] text-black mb-3 min-[890px]:mb-0"
                        >
                          {t("recommendedSection.podrobne")}
                        </a>
                        <button
                          onClick={() => setRequest("kp")}
                          aria-label={t("recommendedSection.poluchit")}
                          className="font-FiraSans font-normal text-[11px] min-[456px]:text-[16px] leading-[110%] text-[#A1A1A1] flex items-center justify-center gap-0.5"
                        >
                          {t("recommendedSection.poluchit")}
                          <Images.arrowIcon className="hidden min-[456px]:block" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          {request && (
            <RequestCall request={request} closeRequest={closeRequest} />
          )}
        </div>
      </section>
    </>
  );
}
