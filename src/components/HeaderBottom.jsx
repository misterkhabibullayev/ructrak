import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import { Link } from "react-router-dom";
import CatalogModal from "./CatalogModal";
import { useState } from "react";
import { LangModal } from "./LangModal";

export function HeaderBottom() {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(null);
  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };
  return (
    <>
      <div className="relative">
        <div className="container1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <button
                onClick={() => toggleMenu("catalog")}
                className="py-2.25 px-4 bg-[#FEC80B] flex items-center gap-4 rounded cursor-pointer transition-all duration-300"
              >
                {activeMenu === "catalog" ? (
                  <Images.closeIcon />
                ) : (
                  <Images.burgerIcon />
                )}
                <span className="font-FiraSans font-normal text-[18px] leading-[110%] text-black flex items-center justify-center">
                  {t("header.catalog")}
                </span>
              </button>
              <div>
                <nav className="text-black dark:text-white transition-all duration-300 flex items-center gap-7.5 font-FiraSans font-normal text-[16px] leading-[130%]">
                  <button
                    onClick={() => toggleMenu("about")}
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
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    {t("header.media")}
                    <span
                      className={`text-[#FEC80B] transition-all duration-300 ${activeMenu === "media" ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  <Link to="/service" className="">
                    {t("header.service")}
                  </Link>
                  <Link to="/news" className="">
                    {t("header.news")}
                  </Link>
                  <Link to="/contacts" className="">
                    {t("header.contacts")}
                  </Link>
                </nav>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-[#FEC80B] rounded-[40px] px-3 py-1">
                <input
                  type="search"
                  placeholder={t("header.searchPlaceholder")}
                  className="bg-transparent text-gray-900 placeholder:text-black dark:text-white dark:placeholder:text-white outline-none min-w-65"
                />
                <Images.searchIcon className="text-black dark:text-white transition-all duration-300" />
              </div>
              <div>
                <Link
                  to="/cart"
                  className="text-black dark:text-white transition-all duration-300"
                >
                  <Images.cartIcon />
                </Link>
              </div>
              <div>
                <Link
                  to="/favorites"
                  className="text-black dark:text-white transition-all duration-300"
                >
                  <Images.favoritesIcon />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <LangModal />
              </div>
              <div className="hidden">
                <button className="w-8.75 h-8.75 flex items-center justify-center bg-[#FEC80B] rounded-full">
                  <Images.telephoneIcon width={25} height={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <CatalogModal
          activeMenu={activeMenu}
          onClose={() => setActiveMenu(null)}
        />
      </div>
    </>
  );
}
