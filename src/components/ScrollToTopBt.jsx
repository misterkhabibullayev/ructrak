import { useEffect, useState } from "react";
import { Images } from "../utils/images";

export default function ArrowUp() {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    const toggleToTop = () => {
      if (window.scrollY > 200) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    };
    window.addEventListener("scroll", toggleToTop);

    return () => window.removeEventListener("scroll", toggleToTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 md:bottom-7 right-5 md:right-7 z-100 ${toTop ? "opacity-100" : "opacity-0"}`}
      >
        <Images.arrowUpIcon className="w-9 h-9 md:w-11 md:h-11" />
      </button>
    </>
  );
}
