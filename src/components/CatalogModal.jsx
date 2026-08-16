import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CatalogModal({ activeMenu }) {
  useEffect(() => {
    if (activeMenu) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
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
              bu modal
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CatalogModal;