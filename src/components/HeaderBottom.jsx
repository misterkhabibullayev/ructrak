import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import { Link } from "react-router-dom";

import { lazy, Suspense, useState } from "react";
import { LangModal } from "./LangModal";
import { AnimatePresence, motion } from "framer-motion";
import RequestCall from "./RequestCallModal";

const CatalogModal = lazy(() => import("../components/CatalogModal"));
export function HeaderBottom({ isSticky }) {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [request, setRequest] = useState(null);
  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };
  const closeRequest = () => setRequest(null);
  return (
    <>
      <div className="relative">
        <div className="container1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-10">
              <button
                onClick={() => toggleMenu("catalog")}
                aria-label={t("header.catalog")}
                className="py-1.25 md:py-2.25 px-2 md:px-4 bg-[#FEC80B] flex items-center gap-4 rounded cursor-pointer transition-all duration-300"
              >
                {activeMenu === "catalog" ? (
                  <Images.closeIcon />
                ) : (
                  <Images.burgerIcon />
                )}
                <AnimatePresence>
                  {!isSticky && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                      className="hidden font-FiraSans font-normal text-[18px] leading-[110%] text-black md:flex items-center justify-center whitespace-nowrap overflow-hidden"
                    >
                      {t("header.catalog")}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <AnimatePresence>
                {isSticky && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="overflow-hidden flex flex-col min-[456px]:hidden"
                  >
                    <Link
                      to={"/"}
                      aria-label={t("header.homeLink")}
                      className="font-FiraSans font-extrabold text-[16px] text-black dark:text-white"
                    >
                      РУСTРАК
                    </Link>
                    <a
                      href="tel:88005110525"
                      className="font-FiraSans font-normal text-[13px] text-zinc-400 whitespace-nowrap"
                    >
                      8 800-511-05-25
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isSticky && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden min-[456px]:flex items-center hidden"
                  >
                    <Link to="/" aria-label={t("header.homeLink")} className="flex items-center gap-2.5">
                      <Images.logoImage className="text-black dark:text-white transition-all duration-300 shrink-0" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              <div>
                <nav className="text-black dark:text-white transition-all duration-300 hidden lg:flex md:items-center gap-7.5 font-FiraSans font-normal text-[16px] leading-[130%]">
                  <button
                    onClick={() => toggleMenu("about")}
                    aria-label={t("header.aboutUs")}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    {t("header.aboutUs")}
                    <span
                      className={`text-[#FEC80B] transition-all duration-300 ${activeMenu === "about" ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  <button
                    onClick={() => toggleMenu("media")}
                    aria-label={t("header.media")}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    {t("header.media")}
                    <span
                      className={`text-[#FEC80B] transition-all duration-300 ${activeMenu === "media" ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  <Link to="/service" className="" aria-label={t("header.service")}>
                    {t("header.service")}
                  </Link>
                  <Link to="/news" className="" aria-label={t("header.news")}>
                    {t("header.news")}
                  </Link>
                  <Link to="/contacts" className="" aria-label={t("header.contacts")}>
                    {t("header.contacts")}
                  </Link>
                </nav>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden xl:flex items-center border border-[#FEC80B] rounded-[40px] px-3 py-1">
                <input
                  type="search"
                  aria-label={t("header.search")}
                  placeholder={t("header.searchPlaceholder")}
                  className="bg-transparent text-gray-900 placeholder:text-black dark:text-white dark:placeholder:text-white outline-none min-w-60"
                />
                <Images.searchIcon className="text-black dark:text-white transition-all duration-300" />
              </div>
              <div className="block md:hidden">
                <Images.searchIcon  className="w-6.25 h-6.25 md:w-8.75 md:h-8.75 text-black dark:text-white transition-all duration-300" />
              </div>
              <div>
                <Link
                  to="/cart"
                  aria-label={t("header.cart")}
                  className="text-black dark:text-white transition-all duration-300"
                >
                  <Images.cartIcon className="w-6.25 h-6.25 md:w-8.75 md:h-8.75" />
                </Link>
              </div>
              <div>
                <Link
                  to="/favorites"
                  aria-label={t("header.favorites")}
                  className="text-black dark:text-white transition-all duration-300"
                >
                  <Images.favoritesIcon className="w-6.25 h-6.25 md:w-8.75 md:h-8.75" />
                </Link>
              </div>
              <div
                className={`flex items-center justify-center ${isSticky ? "hidden" : "block"}`}
              >
                <LangModal />
              </div>
              <div className={isSticky ? "block" : "hidden"}>
                <button onClick={() => setRequest("call")} aria-label={t("header.requesCall")} className="w-6.25 h-6.25 md:w-8.75 md:h-8.75 flex items-center justify-center bg-[#FEC80B] rounded-full">
                  <Images.telephoneIcon className="w-4.25 h-4.25 md:w-6.75 md:h-6.75" />
                </button>
                <RequestCall request={request} closeRequest={closeRequest} />
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={null}>
          {activeMenu && (
            <CatalogModal
              activeMenu={activeMenu}
              onClose={() => setActiveMenu(false)}
            />
          )}
        </Suspense>
      </div>
    </>
  );
}
