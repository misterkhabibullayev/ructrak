import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs";
import FeedbackForm from "../../components/FeedbackForm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { videosData } from "../../data/videosData";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function PhotoGalleryPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "uz";

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <>
      <div>
        <Helmet>
          <title>{t("metaTitleDescriptions.video")}</title>
        </Helmet>
        <div className="container1">
          <div>
            <Breadcrumbs />
          </div>
          <div className="flex items-center justify-between mb-8 gap-10">
            <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] pt-8 md:pt-2 text-black dark:text-white">
              {t("metaTitleDescriptions.video")}
            </h1>
            <Link
              to={"/photogallery"}
              className="hidden lg:flex py-3.25 px-7.5 bg-transparent border border-[#FEC80B] rounded hover:bg-[#FEC80B] transition-all duration-300 font-FiraSans font-normal text-base leading-[110%] text-black dark:text-white dark:hover:text-black whitespace-nowrap"
            >
              {t("videoPage.photo")}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pb-10">
            {videosData.map((item) => (
              <div key={item.id} className="cursor-pointer group">
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${item.urlId}`}
                  title={item.title[currentLang]}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3 className="font-FiraSans font-medium text-lg pt-5 leading-[110%] text-black dark:text-white">
                  {item.title[currentLang]}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <FeedbackForm />
      </div>
    </>
  );
}
