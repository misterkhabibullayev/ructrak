import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";
import { Images } from "../utils/images";

export default function LanguageThemeToggle() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { theme, toggleTheme } = useThemeStore();

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLangChange = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false)
    };

    return (
        <div className="flex items-center justify-center w-full" ref={containerRef}>
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="flex items-center justify-center bg-[#FEC80B] rounded-full p-1 shadow-md overflow-hidden relative"
            >
                <AnimatePresence mode="popLayout">
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 15, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 15, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1.5 pl-2 pr-1"
                        >
                            <button
                                onClick={() => handleLangChange("uz")}
                                className={`flex items-center justify-center w-7 h-7 rounded-full transition-all cursor-pointer ${
                                    i18n.language?.startsWith("uz")
                                        ? "ring-2 ring-black bg-white/30"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                title="O'zbekcha"
                            >
                                <Images.uzbekistanFlagIcon />
                            </button>

                            <button
                                onClick={() => handleLangChange("ru")}
                                className={`flex items-center justify-center w-7 h-7 rounded-full transition-all cursor-pointer ${
                                    i18n.language?.startsWith("ru")
                                        ? "ring-2 ring-black bg-white/30"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                title="Русский"
                            >
                                <Images.russiaFlagIcon />
                            </button>

                            <button
                                onClick={() => handleLangChange("en")}
                                className={`flex items-center justify-center w-7 h-7 rounded-full transition-all cursor-pointer ${
                                    i18n.language?.startsWith("en")
                                        ? "ring-2 ring-black bg-white/30"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                title="English"
                            >
                                <Images.unitedStatesFlagIcon />
                            </button>

                            <div className="w-px h-6 bg-black/20 mx-1 rounded-full" />
                        </motion.div>
                    )}
                </AnimatePresence>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 shrink-0 relative flex items-center justify-center rounded-full transition-transform active:scale-95 cursor-pointer select-none"
                >
                    <span className="absolute top-1.5 left-1.5 text-[10px] font-extrabold uppercase text-black leading-none">
                        {i18n.language?.slice(0, 2) || "RU"}
                    </span>

                    <span className="w-px h-7 bg-black rotate-45 block" />

                    <span className="absolute bottom-1.5 right-1.5 text-black flex items-center justify-center">
                        {theme === "light" ? (
                            <Images.sunIcon />
                        ) : (
                            <Images.moonIcon />
                        )}
                    </span>
                </button>

                <AnimatePresence mode="popLayout">
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -15, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -15, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center pr-2 pl-1"
                        >
                            <div className="w-px h-6 bg-black/20 mx-1 rounded-full" />

                            <button
                                onClick={toggleTheme}
                                className="relative flex items-center w-12 h-6 bg-black/15 rounded-full p-0.5 cursor-pointer transition-colors"
                                title="Mavzuni o'zgartirish"
                            >
                                <motion.div
                                    layout
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className={`flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-md ${
                                        theme === "dark" ? "ml-auto" : "ml-0"
                                    }`}
                                >
                                    {theme === "light" ? (
                                        <Images.sunIcon className="text-amber-500 w-3.5 h-3.5" />
                                    ) : (
                                        <Images.moonIcon className="text-slate-800 w-3.5 h-3.5" />
                                    )}
                                </motion.div>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}