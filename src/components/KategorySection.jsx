import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import { categoriesData } from "../data/categoriesData";
import { productsData } from "../data/productsData";

export function KategorySection() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    return (
        <div className='container1 my-20'>
            <div className='flex items-center justify-between mb-8'>
                <h1 className='font-FiraSans font-medium text-[28px] md:text-[42px] dark:text-white'>
                    {t("categorySection.categoryTitle")}
                </h1>
                <div>
                    <button className='custom-prev-btn'>
                        <Images.swiperPrevBtnIcon className='text-black dark:text-white' />
                    </button>
                    <button className='custom-next-btn'>
                        <Images.swiperNextBtnIcon className='text-black dark:text-white' />
                    </button>
                </div>
            </div>
            <div className=''>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={24}
                    loop={true}
                    navigation={{
                        prevEl: ".custom-prev-btn",
                        nextEl: ".custom-next-btn",
                    }}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'
                >
                    {categoriesData.map((item) => (
                        <SwiperSlide key={item.id} className="py-10">
                            <div className='w-full h-full py-4.5 px-3.5 border border-[#EBEBEB] rounded-lg shadow-my hover:border-[#FEC80B] hover:shadow-hover transition-all duration-300'>
                                <a
                                    href={`/catalog/${item.slug}`}
                                    className='inline-block w-full h-full'
                                >
                                    <div>
                                        <h2 className='font-FiraSans font-normal text-[24px] leading-[120%] text-black dark:text-white mb-0.5 line-clamp-1'>
                                            {item?.title?.[currentLang]}
                                        </h2>
                                        <p className='font-FiraSans font-normal text-[16px] leading-[130%] text-[#A1A1A1]'>
                                            <span>
                                                {
                                                    productsData.filter(
                                                        (product) =>
                                                            product.categorySlug ===
                                                            item.slug,
                                                    ).length
                                                }
                                            </span>
                                            <span className='ml-1'>
                                                {t(
                                                    "categorySection.modelLength",
                                                )}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex items-end justify-end mt-6">
                                        <div className='w-57.5 h-57.5'>
                                            <img
                                                src={item.img}
                                                alt={item?.title?.[currentLang]}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
