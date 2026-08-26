import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";
import { Images } from "../utils/images";

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.div
          initial={{ opacity: 0, x: -15, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -15, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          <button
            onClick={toggleTheme}
            className="relative flex items-center w-12 h-6 bg-[#FEC80B] rounded-full p-0.5 cursor-pointer transition-colors"
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
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
      </AnimatePresence>
    </>
  );
}
export default ThemeToggle;
