import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { NewsData } from "../../data/newsData";
import { Images } from "../../utils/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";
import FeedbackForm from "../../components/FeedbackForm";

function NewsDetailes() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { newsdetailes } = useParams();

  const currentNews = NewsData.find((item) => item.slug === newsdetailes);
  const newsTitle = currentNews.title[currentLang];

  const currentNewsDetailes = NewsData.filter(
    (news) => news.slug === currentNews.slug,
  );
  return (
    <>
      <section className="bg-[#F9F9F9] dark:bg-slate-900">
        <div className="container1">
          <div className="my-4">
            <Link
              to={"/news"}
              className="flex items-center gap-2 text-black dark:text-white"
            >
              <span className="rotate-180">
                <Images.rightArrowIcon />
              </span>
              <span>{t("newsDetailes.back")}</span>
            </Link>
          </div>
          <div>
            <div>
              <h2 className="font-FiraSans font-medium text-[24px] md:text-[32px] mb-3 text-black dark:text-white">
                {newsTitle}
              </h2>
              <p className="font-FiraSans font-normal text-[16px] md:text-[18px] text-black dark:text-white mb-10">
                {currentNews.publishedAt}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 mb-39">
              {currentNewsDetailes.map((item) => (
                <div
                  key={item.id}
                  dangerouslySetInnerHTML={{
                    __html: item.description[currentLang],
                  }}
                  className="newsDetailes w-full lg:w-1/2 text-black dark:text-white"
                ></div>
              ))}
              <div className="w-full lg:w-1/2 min-w-0">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 4500,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper w-full h-full"
                >
                  {currentNews.images.map((item, i) => (
                    <SwiperSlide key={i} className="w-full lg:w-1/2">
                      <div>
                        <img
                          src={item}
                          alt={newsTitle}
                          className="w-full h-auto object-contain rounded-xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container1 mb-10">
          <h2 className="font-FiraSans font-medium text-[20px] md:text-2xl leading-[120%] text-black dark:text-white mb-3 md:mb-8">{t("newsDetailes.moreNews")}</h2>
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
              className="mySwiper"
            >
              {NewsData.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group rounded-3xl overflow-hidden bg-slate-950"
                  >
                    <a href={`news/${item.slug}`}>
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
      <FeedbackForm />
    </>
  );
}
export default NewsDetailes;
