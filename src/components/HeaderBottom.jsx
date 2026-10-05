import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import { Link, useNavigate } from "react-router-dom";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { LangModal } from "./LangModal";
import { AnimatePresence, motion } from "framer-motion";
import RequestCall from "./RequestCallModal";
import { useFavoritesStore } from "../store/useFavoritesStore";
import { useCartStore } from "../store/useCartStore";

const CatalogModal = lazy(() => import("../components/CatalogModal"));
export function HeaderBottom({ isSticky }) {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [request, setRequest] = useState(null);
  const { favorites } = useFavoritesStore();
  const { cart } = useCartStore();

  const [searchMod, setSearchMod] = useState(false);
  const searchModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchModalRef.current &&
        !searchModalRef.current.contains(event.target)
      ) {
        setSearchMod(false);
      }
    };

    if (searchMod) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchMod]);

  const navigate = useNavigate();
  const [searchTerm, setSerachTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSerachTerm("");
      setSearchMod(false);
    }
  };
  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };
  const closeRequest = () => setRequest(null);
  return (
    <>
      <div className="relative">
        <div className="container1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-6">
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
                    <Link
                      to="/"
                      aria-label={t("header.homeLink")}
                      className="flex items-center gap-2.5"
                    >
                      <Images.logoImage className="text-black dark:text-white transition-all duration-300 shrink-0" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              <div>
                <nav className="text-black dark:text-white transition-all duration-300 hidden lg:flex md:items-center gap-7 font-FiraSans font-normal text-[16px] leading-[130%] whitespace-nowrap">
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
                  <Link
                    to="/service"
                    className=""
                    aria-label={t("header.service")}
                  >
                    {t("header.service")}
                  </Link>
                  <Link
                    to="/remont"
                    className=""
                    aria-label={t("modal.remont")}
                  >
                    {t("modal.remont")}
                  </Link>
                  <Link to="/news" className="" aria-label={t("header.news")}>
                    {t("header.news")}
                  </Link>
                  <Link
                    to="/contacts"
                    className=""
                    aria-label={t("header.contacts")}
                  >
                    {t("header.contacts")}
                  </Link>
                </nav>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden xl:flex items-center border border-[#FEC80B] rounded-[40px] px-3 py-1 max-w-65">
                <form onSubmit={handleSearch} className="flex items-center relative">
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSerachTerm(e.target.value)}
                    aria-label={t("header.search")}
                    placeholder={t("header.searchPlaceholder")}
                    className="bg-transparent text-gray-900 placeholder:text-black dark:text-white dark:placeholder:text-white outline-none min-w-60"
                  />
                  <button type="submit" className="absolute right-1.5">
                    <Images.searchIcon className="text-black dark:text-white transition-all duration-300" />
                  </button>
                </form>
              </div>
              <div className="md:hidden flex items-center">
                <button onClick={() => setSearchMod(true)}>
                  <Images.searchIcon className="w-6.25 h-6.25 md:w-8.75 md:h-8.75 text-black dark:text-white transition-all duration-300" />
                </button>

                <div
                  className={`absolute top-[140%] left-0 px-5 w-full z-100 ${searchMod ? "block" : "hidden"}`}
                >
                  <div className="w-full p-3.75 bg-white dark:bg-slate-950 relative">
                    <form onSubmit={handleSearch} className="flex items-center">
                      <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSerachTerm(e.target.value)}
                        aria-label={t("header.search")}
                        placeholder={t("header.searchPlaceholder")}
                        className="bg-transparent text-gray-900 placeholder:text-black dark:text-white dark:placeholder:text-white outline-none min-w-full border border-[#FEC80B] py-2 pl-3.75 pr-10.25 rounded-full"
                      />
                      <button type="submit" className="absolute right-6.75">
                        <Images.searchIcon className="text-black dark:text-white transition-all duration-300" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Link
                  to="/cart"
                  aria-label={t("header.cart")}
                  className="text-black dark:text-white transition-all duration-300 relative"
                >
                  <Images.cartIcon className="w-6.25 h-6.25 md:w-8.75 md:h-8.75" />
                  {cart.length > 0 && (
                    <span className="absolute bottom-0 md:bottom-1 right-0 px-1 md:px-1.75 rounded font-FiraSans font-medium text-[12px] leading-[100%] bg-[#FEC80B] flex items-center justify-center text-black">
                      {cart.length > 9 ? "9+" : cart.length}
                    </span>
                  )}
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="/favorites"
                  aria-label={t("header.favorites")}
                  className="text-black dark:text-white transition-all duration-300 relative"
                >
                  <Images.favoritesIcon className="w-6.25 h-6.25 md:w-8.75 md:h-8.75 stroke-black dark:stroke-white" />
                  {favorites.length > 0 && (
                    <span className="absolute bottom-0 md:bottom-1 right-0 px-1 md:px-1.75 rounded font-FiraSans font-medium text-[12px] leading-[100%] bg-[#FEC80B] flex items-center justify-center text-black">
                      {favorites.length > 9 ? "9+" : favorites.length}
                    </span>
                  )}
                </Link>
              </div>
              <div
                className={`flex items-center justify-center ${isSticky ? "hidden" : "block"}`}
              >
                <LangModal />
              </div>
              <div className={isSticky ? "block" : "hidden"}>
                <button
                  onClick={() => setRequest("call")}
                  aria-label={t("header.requesCall")}
                  className="w-6.25 h-6.25 md:w-8.75 md:h-8.75 flex items-center justify-center bg-[#FEC80B] rounded-full"
                >
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
