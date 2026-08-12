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

export function KategorySection() {
    return (
        <div>
            <div></div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'
                >
                    <SwiperSlide>salom</SwiperSlide>
                    <SwiperSlide>salom</SwiperSlide>
                    <SwiperSlide>salom</SwiperSlide>
                    <SwiperSlide>salom</SwiperSlide>
                    <SwiperSlide>salom</SwiperSlide>
                    <SwiperSlide>salom</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
