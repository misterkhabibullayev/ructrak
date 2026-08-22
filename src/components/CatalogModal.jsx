import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { categoriesData } from "../data/categoriesData";
import { Link } from "react-router-dom";

function CatalogModal({ activeMenu }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    if (activeMenu) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [activeMenu]);

  return (
    <AnimatePresence>
      {Boolean(activeMenu) && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.04, 0.62, 0.23, 0.98],
          }}
          className="absolute top-[130%] left-0 z-30 w-full overflow-hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full h-screen bg-zinc-200 text-black dark:bg-zinc-950 dark:text-white"
          >
            <div
              className={`container1 transition-all duration-500 ${
                activeMenu ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3">
                <div>
                  <h3>{t("header.catalog")}</h3>
                  <div className="flex flex-col">
                    {categoriesData.map((item) => (
                      <Link to={`/catalog/${item.slug}`}>{item.title[currentLang]}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3>{t("header.aboutUs")}</h3>
                  <div className="flex flex-col">
                    <Link to={`about`}>{t("modal.aboutRuctrak")}</Link>
                    <Link to={`news`}>{t("modal.news")}</Link>
                    <Link to={`partners`}>{t("modal.partners")}</Link>
                    <Link to={`production`}>{t("modal.production")}</Link>
                    <Link to={`suppliers`}>{t("modal.suppliers")}</Link>
                    <Link to={`reviews`}>{t("modal.reviews")}</Link>
                    <Link to={`cert`}>{t("modal.certifikat")}</Link>
                    <Link to={`vacancies`}>{t("modal.vakansi")}</Link>
                    <Link to={`leasing`}>{t("modal.leasing")}</Link>
                  </div>
                </div>
                <div>
                  <h3>{t("header.media")}</h3>
                  <div>
                    <Link to={`photogallery`}>{t("modal.photogallery")}</Link>
                    <Link to={`video`}>{t("modal.video")}</Link>
                    <Link to={`promo`}>{t("modal.promo")}</Link>
                    <Link to={`info`}>{t("modal.info")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CatalogModal;
