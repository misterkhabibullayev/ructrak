import { useTranslation } from "react-i18next";
import { useSearchParams, Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { NewsData } from "../../data/newsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";
import { Images } from "../../utils/images";

function NewsPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // URL'dan sahifa raqamini olish (standart holatda 1)
  const [searchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const currentPage = isNaN(pageFromUrl) || pageFromUrl < 1 ? 1 : pageFromUrl;

  // Paginatsiya sozlamalari
  const gridNewsData = NewsData.slice(1);
  const itemsPerPage = 8;
  const totalItems = NewsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  // Har bir sahifa uchun kerakli 8 ta ma'lumotni qirqib olish
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = gridNewsData.slice(startIndex, startIndex + itemsPerPage);

  // Sahifa linkini shakllantiruvchi yordamchi funksiya
  const getPageLink = (page) => {
    return page === 1 ? "/news" : `/news?page=${page}`;
  };

  // Sahifa raqamlari qatorini hosil qilish
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  const getFirstParagraph = (htmlContent) => {
    if (!htmlContent) return "";
    const match = htmlContent.match(/<p>[\s\S]*?<\/p>/i);
    return match ? match[0] : "";
  };

  return (
    <>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        <div>
          <h2 className="font-FiraSans font-medium text-[24px] md:text-[32px] leading-[130%] text-black dark:text-white mb-8 mt-4 md:mt-0">
            {t("newsPage.title")}
          </h2>

          {/* Hero Slider Section (Faqat 1-sahifada ko'rinadi) */}
          {currentPage === 1 && NewsData.length > 0 && (
            <div className="hidden md:flex items-start mb-14">
              <div className="w-1/2 relative rounded-2xl overflow-hidden">
                <Swiper
                  spaceBetween={0}
                  loop={true}
                  centeredSlides={true}
                  pagination={{
                    el: ".hero-pagination",
                    clickable: true,
                    bulletClass: "hero-bullet",
                    bulletActiveClass: "hero-bullet-active",
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {NewsData[0].images.map((item, idx) => (
                    <SwiperSlide key={idx} className="h-full">
                      <img
                        src={item}
                        alt={NewsData[0].title[currentLang]}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="hero-pagination absolute bottom-2 left-0 w-full z-10 flex justify-center items-center gap-2"></div>
              </div>
              <div className="flex-1 pt-4.5 pl-6.25">
                <div>
                  <span className="font-FiraSans font-normal text-[18px] leading-[150%] text-black dark:text-white mb-3">
                    {NewsData[0].publishedAt}
                  </span>
                  <h2 className="font-FiraSans font-medium text-[24px] leading-[120%] mb-7.5 text-black dark:text-white">
                    {NewsData[0].title[currentLang]}
                  </h2>
                  <p
                    className="newsDescription font-FiraSans font-normal text-[18px] leading-[150%] text-black dark:text-white mb-11.75 hidden min-[1200px]:flex"
                    dangerouslySetInnerHTML={{
                      __html: getFirstParagraph(
                        NewsData[0].description[currentLang],
                      ),
                    }}
                  ></p>
                </div>
                <div className="text-[#A1A1A1]">
                  <Link
                    to={`/news/${NewsData[0].slug}`}
                    className="font-FiraSans font-normal text-[11px] min-[456px]:text-[18px] leading-[110%] flex items-center gap-2 hover:text-[#fec80b] transition-all duration-300"
                  >
                    {t("newsSection.readMore")}
                    <Images.rightArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Dinamik Grid (8 tadan yangilik) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-30">
            {currentNews.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={item.id}
                className="group rounded-t-lg rounded-r-lg overflow-hidden"
              >
                <Link to={`/news/${item.slug}`}>
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
                </Link>
              </div>
            ))}
          </div>

          {/* Paginatsiya Bo'limi */}
          <div className="flex flex-col items-center gap-10.75">
            {totalPages > 1 && currentPage < totalPages && (
              <Link
                to={getPageLink(currentPage + 1)}
                aria-label={t("newsPage.showMore")}
                className="py-4.5 px-11.5 rounded bg-[#FEC80B] hover:bg-[#FFD43A] transition-all duration-300 font-FiraSans text-[16px] leading-[110%] text-black"
              >
                {t("newsPage.showMore")}
              </Link>
            )}

            <div className="flex items-center gap-2 sm:gap-4 font-FiraSans text-[16px] select-none">
              {/* Orqaga Link */}
              {currentPage > 1 ? (
                <Link
                  to={getPageLink(currentPage - 1)}
                  className="flex items-center gap-2 text-[#A1A1A1] hover:text-black dark:hover:text-white transition-colors duration-200 mr-2"
                >
                  <Images.rightArrowIcon className="rotate-180" />
                  {t("newsPage.back", "Назад")}
                </Link>
              ) : (
                <span className="flex items-center gap-2 text-[#A1A1A1] opacity-40 cursor-not-allowed mr-2">
                  <Images.rightArrowIcon className="rotate-180" />
                  {t("pagination.prev", "Назад")}
                </span>
              )}

              {/* Sahifa raqamlari (Linklar) */}
              <div className="flex items-center gap-1 sm:gap-2">
                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span key={idx} className="px-1 sm:px-2 text-[#A1A1A1]">
                      ...
                    </span>
                  ) : (
                    <Link
                      key={idx}
                      to={getPageLink(page)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-medium transition-all duration-200 ${
                        currentPage === page
                          ? "bg-[#FEC80B] text-black font-semibold shadow-sm pointer-events-none"
                          : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                      }`}
                    >
                      {page}
                    </Link>
                  ),
                )}
              </div>

              {/* Oldinga Link */}
              {currentPage < totalPages ? (
                <Link
                  to={getPageLink(currentPage + 1)}
                  className="flex items-center gap-2 text-black dark:text-white hover:text-[#FEC80B] transition-colors duration-200 ml-2 font-medium"
                >
                  <span>{t("pagination.next", "Дальше")}</span>
                  <Images.rightArrowIcon />
                </Link>
              ) : (
                <span className="flex items-center gap-2 text-black dark:text-white opacity-40 cursor-not-allowed ml-2 font-medium">
                  <span>{t("newsPage.next", "Дальше")}</span>
                  <Images.rightArrowIcon />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPage;
