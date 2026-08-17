import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Images } from "../utils/images";
import { HeaderBottom } from "./HeaderBottom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";
import BottomHeaderTop from "./BottomHeaderTop";

function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  const headerTopRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerTopRef.current) {
        const topHeaderHeight = headerTopRef.current.offsetHeight;

        if (window.scrollY >= topHeaderHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerTopRef}
        className="dark:bg-slate-950 transition-all duration-300"
      >
        <div className="w-full container1">
          <div className="flex items-center justify-between pt-3.5 pb-2">
            <div>
              <Link to="/" className="flex items-center gap-2.5">
                <Images.logoImage className="text-black dark:text-white transition-all duration-300" />
                <div className="w-0.5 h-5.75 bg-[#FEC80B]"></div>
                <p className="font-FiraSans font-normal text-[14px] leading-[110%] text-[#000000] max-w-48 dark:text-white transition-all duration-300">
                  {t("header.tagline")}
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <div className="flex items-center justify-end relative">
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="cursor-pointer dark:text-white transition-all duration-300"
                  >
                    {t("header.workTime")}{" "}
                    <span
                      className={`text-[#FEC80B] inline-block transition-all duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      ▼
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="absolute top-full right-0 z-51 bg-white dark:bg-slate-900 shadow-lg rounded-lg p-3.5 overflow-hidden"
                      >
                        <div
                          className={`flex flex-col gap-3 transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
                        >
                          <span className="font-FiraSans font-normal text-[14px] text-black dark:text-white">
                            {t("header.modalworkTime1")}
                          </span>
                          <span className="font-FiraSans font-normal text-[14px] text-black dark:text-white">
                            {t("header.modalworkTime2")}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <p className="font-FiraSans font-normal text-[15px] leading-[110%] text-[#A1A1A1]">
                  {t("header.address")}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <div className="flex items-end gap-0.5 dark:text-white transition-all duration-300">
                    <span>{t("header.forRegions")}</span>
                    <a href="tel:8 (800) 77-77-210">8 (800) 77-77-210</a>
                  </div>
                  <div className="flex items-end gap-0.5 dark:text-white transition-all duration-300">
                    <span>{t("header.nizhnyNovgorod")}</span>
                    <a href="tel:8 (831) 225-00-55">8 (831) 225-00-55</a>
                  </div>
                </div>
                <div>
                  <button
                    onClick={toggleTheme}
                    className="w-11.5 h-11.5 flex items-center justify-center bg-[#FEC80B] rounded-full"
                  >
                    {theme === "light" ? (
                      <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Images.sunIcon />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Images.moonIcon />
                      </motion.div>
                    )}
                  </button>
                </div>
                <div>
                  <button className="w-11.5 h-11.5 flex items-center justify-center bg-[#FEC80B] rounded-full">
                    <Images.telephoneIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="sticky top-0 z-50">
        <hr className={`text-[#FEC80B] ${isSticky ? "hidden" : "block"}`} />
        <div className=" bg-white dark:bg-slate-950 pt-2.5">
          <AnimatePresence>
            {isSticky && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 30, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="overflow-hidden bg-white dark:bg-slate-950"
              >
                <div className="">
                  <BottomHeaderTop />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <hr className={`text-[#FEC80B] ${isSticky ? "block" : "hidden"}`} />
          <div className="pt-2.5 pb-3.5">
            <HeaderBottom />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
