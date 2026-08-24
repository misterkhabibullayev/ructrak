import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { categoriesData } from "../data/categoriesData";
import { Link, useLocation } from "react-router-dom";

function CatalogModal({ activeMenu, onClose }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();
  const prevPathname = useRef(location.pathname);
  const [openSections, setOpenSections] = useState({
    catalog: false,
    aboutUs: false,
    media: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      onClose();
      prevPathname.current = location.pathname;
    }
  }, [location.pathname, onClose]);

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 575);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleAccordion = (section) => {
    if (isMobile) {
      setOpenSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

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
          onClick={onClose}
          className="absolute top-[130%] left-0 z-30 w-full overflow-hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full h-screen bg-zinc-200 text-black dark:bg-slate-900 dark:text-white overflow-y-auto"
          >
            <div
              className={`container1 transition-all duration-500 ${
                activeMenu ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-0 justify-between min-[575px]:grid-cols-2 md:grid-cols-3 py-5">
                <div>
                  <div
                    onClick={() => toggleAccordion("catalog")}
                    className={`flex items-center gap-1 min-[575px]:mb-4 ${
                      isMobile ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <h3 className="font-FiraSans font-extrabold text-[22px] leading-[160%] text-black dark:text-white">
                      {t("header.catalog")}
                    </h3>
                    {isMobile && (
                      <span
                        className={`text-[#FEC80B] transition-all duration-300 ${
                          openSections.catalog ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </div>
                  {isMobile ? (
                    <AnimatePresence>
                      {openSections.catalog && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="pl-4 mb-4 flex flex-col gap-4 m-0 p-0 list-none">
                            {categoriesData.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  to={`/catalog/${item.slug}`}
                                  className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                                >
                                  {item.title[currentLang]}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ) : (
                    <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                      {categoriesData.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/catalog/${item.slug}`}
                            className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                          >
                            {item.title[currentLang]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <div
                    onClick={() => toggleAccordion("aboutUs")}
                    className={`flex items-center gap-1 min-[575px]:mb-4 ${
                      isMobile ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <h3 className="font-FiraSans font-extrabold text-[22px] leading-[160%] text-black dark:text-white">
                      {t("header.aboutUs")}
                    </h3>
                    {isMobile && (
                      <span
                        className={`text-[#FEC80B] transition-all duration-300 ${
                          openSections.aboutUs ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </div>
                  {isMobile ? (
                    <AnimatePresence>
                      {openSections.aboutUs && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="pl-4 flex flex-col gap-4 mb-4 p-0 list-none">
                            <li>
                              <Link
                                to={`about`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.aboutRuctrak")}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`news`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.news")}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`partners`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.partners")}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`production`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.production")}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`suppliers`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.suppliers")}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`reviews`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.reviews")}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`cert`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.certifikat")}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`vacancies`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.vakansi")}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`leasing`}
                                className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                              >
                                {t("modal.leasing")}
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ) : (
                    <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                      <li>
                        <Link
                          to={`about`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.aboutRuctrak")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`news`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.news")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`partners`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.partners")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`production`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.production")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`suppliers`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.suppliers")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`reviews`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.reviews")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`cert`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.certifikat")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`vacancies`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.vakansi")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`leasing`}
                          className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.leasing")}
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <div
                      onClick={() => toggleAccordion("media")}
                      className={`flex items-center gap-1 min-[575px]:mb-4 ${
                        isMobile ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <h3 className="font-FiraSans font-extrabold text-[22px] leading-[160%] text-black dark:text-white">
                        {t("header.media")}
                      </h3>
                      {isMobile && (
                        <span
                          className={`text-[#FEC80B] transition-all duration-300 ${
                            openSections.media ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          ▼
                        </span>
                      )}
                    </div>
                    {isMobile ? (
                      <AnimatePresence>
                        {openSections.media && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="pl-4 flex flex-col gap-4 mb-4 p-0 list-none">
                              <li>
                                <Link
                                  to={`photogallery`}
                                  className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                                >
                                  {t("modal.photogallery")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`video`}
                                  className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                                >
                                  {t("modal.video")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`promo`}
                                  className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                                >
                                  {t("modal.promo")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`info`}
                                  className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                                >
                                  {t("modal.info")}
                                </Link>
                              </li>
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : (
                      <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                        <li>
                          <Link
                            to={`photogallery`}
                            className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                          >
                            {t("modal.photogallery")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`video`}
                            className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                          >
                            {t("modal.video")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`promo`}
                            className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                          >
                            {t("modal.promo")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`info`}
                            className="font-FiraSans font-normal text-[15px] md:text-[16px] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                          >
                            {t("modal.info")}
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  <div className="flex items-start lg:justify-end">
                    <ul className="flex flex-col gap-0 min-[575px]:gap-6 list-none">
                      <li>
                        <Link
                          to={`service`}
                          className="font-FiraSans font-extrabold text-[22px] leading-[160%] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("header.service")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`remont`}
                          className="font-FiraSans font-extrabold text-[22px] leading-[160%] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.remont")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`news`}
                          className="font-FiraSans font-extrabold text-[22px] leading-[160%] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("modal.news")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`contacts`}
                          className="font-FiraSans font-extrabold text-[22px] leading-[160%] text-black dark:text-white hover:text-[#FEC80B] transition-all duration-300"
                        >
                          {t("header.contacts")}
                        </Link>
                      </li>
                    </ul>
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
