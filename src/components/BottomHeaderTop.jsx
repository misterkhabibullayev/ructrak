import { useEffect, useRef } from "react";
import { Images } from "../utils/images";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

function BottomHeaderTop() {
  const { t, i18n } = useTranslation();
  const [MIsOpen, setMIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    {
      code: "uz",
      label: "UZ",
      title: "O'zbekcha",
      Icon: Images.uzbekistanFlagIcon,
    },
    { code: "ru", label: "RU", title: "Русский", Icon: Images.russiaFlagIcon },
    {
      code: "en",
      label: "EN",
      title: "English",
      Icon: Images.unitedStatesFlagIcon,
    },
  ];

  const CurrentFlag =
    languages.find((lang) => lang.code === i18n.language)?.Icon ||
    Images.uzbekistanFlagIcon;

  const currentLangObject =
    languages.find((lang) => lang.code === i18n.language) || languages[0];
  const CurrentTitle = currentLangObject.title;

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setMIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <div className="container1">
        <div className="flex items-center justify-between">
          <div className="text-black dark:text-white group flex items-center gap-1">
            <div className="flex items-center justify-center">
              <Images.locationIcon className="group-hover:text-[#FEC80B] transition-all duration-300" />
            </div>
            <a
              href="https://www.google.com/maps/place/IT+Park/@41.5584113,60.6209181,18z/data=!4m6!3m5!1s0x41dfc9842c81fc9d:0x9e434d2b8a616ce9!8m2!3d41.5584081!4d60.6218835!16s%2Fg%2F11s8nxmc2_?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-37.5 font-FiraSans font-normal text-[10px] md:text-[14px] leading-[110%] text-black dark:text-white group-hover:text-[#FEC80B] transition-all duration-300"
            >
              {t("header.address")}
            </a>
          </div>
          <div className="flex items-center gap-5 md:gap-10">
            <div
              className="relative flex items-center justify-center"
              ref={dropdownRef}
            >
              <button
                onClick={() => setMIsOpen((prev) => !prev)}
                className="w-full h-full flex items-center gap-1 cursor-pointer"
              >
                <CurrentFlag className="w-6 h-6" />
                <span className="font-FiraSans font-normal text-[15px] leading-[110%] text-black dark:text-white">
                  {CurrentTitle}
                </span>
              </button>

              <AnimatePresence>
                {MIsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="absolute top-[120%] left-1/2 -translate-x-1/2 z-51 bg-white dark:bg-slate-900 shadow-xl rounded-lg border border-gray-200 dark:border-slate-800"
                  >
                    <div className="flex flex-col p-1.5 gap-1">
                      {languages.map((lang) => {
                        const Flag = lang.Icon;
                        const isActive = i18n.language === lang.code;

                        return (
                          <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-md transition-colors w-full text-left cursor-pointer ${
                              isActive
                                ? "bg-[#FEC80B] text-black font-medium"
                                : "hover:bg-slate-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            <Flag className="w-6 h-6" />
                            <span className="font-FiraSans font-normal text-[15px] leading-[110%]">
                              {lang.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
export default BottomHeaderTop;
