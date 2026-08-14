import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import swiper1Img from "../Image/swiper-1.jpg";
import swiper2Img from "../Image/swiper-2.webp";
import swiper3Img from "../Image/swiper-3.jpg";
import swiper4Img from "../Image/swiper-4.jpg";
import swiper5Img from "../Image/swiper-5.jpg";

export function HeroSection() {
    const { t } = useTranslation();
    return (
        <div className='container1 pt-7 px-0 rounded-2xl relative group'>
            <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".hero-pagination",
                    clickable: true,
                    bulletClass: "hero-bullet",
                    bulletActiveClass: "hero-bullet-active",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide
                    className='w-full h-full flex items-center bg-cover bg-center bg-no-repeat rounded-2xl '
                    style={{ backgroundImage: `url(${swiper1Img})` }}
                >
                    <div className='w-full h-120 flex items-center bg-linear-to-r from-black via-black/60 to-transparent rounded-l-2xl'>
                        <div className='my-auto px-8'>
                            <h1 className='font-FiraSans font-extrabold text-[32px] md:text-[40px] leading-[120%] text-white max-w-full md:max-w-113'>
                                {t("heroSection.swiper1.swiperTitle")}
                            </h1>
                            <p className='hidden md:block font-FiraSans font-normal text-[18px] mt-4 mb-8 text-white max-w-full md:max-w-113'>
                                {t("heroSection.swiper1.description")}
                                <br />
                                {t("heroSection.swiper1.price")}
                            </p>
                            <div>
                                <button className='px-7.5 py-3 bg-transparent border-2 border-[#FEC80B] text-white rounded cursor-pointer hover:bg-[#FEC80B] hover:text-black transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]'>
                                    {t("heroSection.swiper1.requestCall")}
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='w-full h-full flex items-center bg-cover bg-center bg-no-repeat rounded-2xl '
                    style={{ backgroundImage: `url(${swiper2Img})` }}
                >
                    <div className='w-full h-120 flex items-center bg-linear-to-r from-black via-black/60 to-transparent rounded-l-2xl'>
                        <div className='my-auto px-8'>
                            <h1 className='font-FiraSans font-extrabold text-[32px] md:text-[40px] leading-[120%] text-white max-w-full md:max-w-120'>
                                {t("heroSection.swiper2.swiperTitle")}
                            </h1>
                            <p className='hidden md:block font-FiraSans font-normal text-[18px] mt-4 mb-8 text-white max-w-full md:max-w-113'>
                                {t("heroSection.swiper2.description")}
                            </p>
                            <div>
                                <button className='px-7.5 py-3 bg-transparent border-2 border-[#FEC80B] text-white rounded cursor-pointer hover:bg-[#FEC80B] hover:text-black transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]'>
                                    {t("heroSection.swiper2.readMore")}
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='w-full h-full flex items-center bg-cover bg-center bg-no-repeat rounded-2xl '
                    style={{ backgroundImage: `url(${swiper3Img})` }}
                >
                    <div className='w-full h-120 flex items-center bg-linear-to-r from-black via-black/60 to-transparent rounded-l-2xl'>
                        <div className='my-auto px-8'>
                            <h1 className='font-FiraSans font-extrabold text-[32px] md:text-[40px] leading-[120%] text-white max-w-full md:max-w-120'>
                                {t("heroSection.swiper3.swiperTitle")}
                            </h1>
                            <p className='hidden md:block font-FiraSans font-normal text-[18px] mt-4 mb-8 text-white max-w-full md:max-w-113'>
                                {t("heroSection.swiper3.description")}
                            </p>
                            <div className='flex flex-col gap-3 md:flex-row'>
                                <a
                                    href='/about'
                                    className='px-7.5 py-3 bg-[#FEC80B] border-2 border-[#FEC80B] text-black rounded cursor-pointer hover:bg-[#FFD43A] transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]'
                                >
                                    {t("heroSection.swiper3.openKatalog")}
                                </a>
                                <button className='px-7.5 py-3 bg-transparent border-2 border-[#FEC80B] text-white rounded cursor-pointer hover:bg-[#FEC80B] hover:text-black transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]'>
                                    {t("heroSection.swiper3.requestCall")}
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='w-full h-full flex items-center bg-cover bg-center bg-no-repeat rounded-2xl '
                    style={{ backgroundImage: `url(${swiper4Img})` }}
                >
                    <div className='w-full h-120 flex items-center bg-linear-to-r from-black via-black/60 to-transparent rounded-l-2xl'>
                        <div className='my-auto px-8'>
                            <h1 className='font-FiraSans font-extrabold text-[14px] md:text-[28px] leading-[120%] text-white max-w-full md:max-w-120'>
                                {t("heroSection.swiper4.swiperTitle")}
                            </h1>
                            <p className='hidden md:block font-FiraSans font-normal text-[16px] mt-4 mb-8 text-white max-w-full md:max-w-113'>
                                {t("heroSection.swiper4.description")}
                            </p>
                            <div className='flex flex-col gap-3 md:flex-row'>
                                <a
                                    href='/catalog/krany-manipulyatory/'
                                    className='px-7.5 py-3 bg-[#FEC80B] border-2 border-[#FEC80B] text-black rounded cursor-pointer hover:bg-[#FFD43A] transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]'
                                >
                                    {t("heroSection.swiper4.readMore")}
                                </a>
                                <button className='px-7.5 py-3 bg-transparent border-2 border-[#FEC80B] text-white rounded cursor-pointer hover:bg-[#FEC80B] hover:text-black transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]'>
                                    {t("heroSection.swiper4.requestCall")}
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='w-full h-full flex items-center bg-cover bg-center bg-no-repeat rounded-2xl '
                    style={{ backgroundImage: `url(${swiper5Img})` }}
                >
                    <div className='w-full h-120 flex items-center bg-linear-to-r from-black via-black/60 to-transparent rounded-l-2xl'>
                        <div className='my-auto px-8'>
                            <h1 className='font-FiraSans font-extrabold text-[14px] md:text-[28px] leading-[120%] text-white max-w-full md:max-w-120'>
                                {t("heroSection.swiper5.swiperTitle")}
                            </h1>
                            <p className='hidden md:block font-FiraSans font-normal text-[16px] mt-4 mb-8 text-white max-w-full md:max-w-113'>
                                {t("heroSection.swiper5.description")}
                            </p>
                            <div className='flex flex-col gap-3 md:flex-row'>
                                <a
                                    href='/catalog/krany-manipulyatory/'
                                    className='px-7.5 py-3 bg-[#FEC80B] border-2 border-[#FEC80B] text-black rounded cursor-pointer hover:bg-[#FFD43A] transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]'
                                >
                                    {t("heroSection.swiper5.readMore")}
                                </a>
                                <button className='px-7.5 py-3 bg-transparent border-2 border-[#FEC80B] text-white rounded cursor-pointer hover:bg-[#FEC80B] hover:text-black transition-all duration-300 font-FiraSans font-normal text-[16px] leading-[110%]'>
                                    {t("heroSection.swiper5.requestCall")}
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
            <div className='hero-pagination absolute bottom-10 left-0 right-0 z-10 flex justify-center items-center gap-2'></div>
        </div>
    );
}
