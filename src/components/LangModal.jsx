import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "../utils/images";

export function LangModal() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tillay ro'yxati va ularga mos flag ikonkalari
  const languages = [
    { code: "uz", label: "UZ", title: "O'zbekcha", Icon: Images.uzbekistanFlagIcon },
    { code: "ru", label: "RU", title: "Русский", Icon: Images.russiaFlagIcon },
    { code: "en", label: "EN", title: "English", Icon: Images.unitedStatesFlagIcon },
  ];

  const CurrentFlag =
    languages.find((lang) => lang.code === i18n.language)?.Icon ||
    Images.uzbekistanFlagIcon;

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-full flex items-center gap-1 cursor-pointer"
      >
        <CurrentFlag className="w-8.75 h-8.75" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="absolute top-[130%] right-0 z-50 bg-white dark:bg-slate-900 shadow-xl rounded-lg overflow-hidden border border-gray-200 dark:border-slate-800"
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
                    <Flag />
                    <span className="font-FiraSans font-normal text-[15px] leading-[110%]">
                      {lang.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
