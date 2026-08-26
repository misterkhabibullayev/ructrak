import { useEffect, useRef, useState } from "react";
import sliderImage from "../Image/benefits.png";
import lineSvg from "../data/sliderLinePart";
import { useTranslation } from "react-i18next";

function ScrollSlider() {
  const { t } = useTranslation();
  const scrollSlider = t("scrollSlider.linePart", {
    returnObjects: true,
  });

  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const items = Array.isArray(scrollSlider) ? scrollSlider : [];

  const activeIndex = Math.max(
    0,
    Math.min(Math.floor(progress * items.length), items.length - 1),
  );

  const item = items[activeIndex] || {};

  // String ko'rinishida solishtiramiz: String(svg.id) === String(item?.id)
  const ItemSvgObj = lineSvg?.find(
    (svg) => String(svg.id) === String(item?.id),
  );
  const SvgComponent = ItemSvgObj?.svg;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;

      if (maxScroll <= 0) return;

      const newProgress = Math.min(Math.max(-rect.top / maxScroll, 0), 1);

      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const positions = [
    { top: "5%", left: "70%" },
    { top: "23%", left: "95%" },
    { top: "50%", left: "103.75%" },
    { top: "77%", left: "96%" },
    { top: "95%", left: "75%" },
  ];

  return (
    <section ref={sectionRef} className="h-[500vh] my-10 min-[890px]:my-20">
      <div className="h-dvh sticky gap-10 top-30 md:top-5 w-full flex flex-col justify-start min-[890px]:h-dvh min-[890px]:flex-row min-[890px]:items-center min-[890px]:justify-between px-6 md:px-10 lg:px-20 xl:px-30 container1">
        <div className="w-1/2 md:w-[40%]">
          <div className="relative w-full">
            <img
              className="w-full h-auto"
              src={sliderImage}
              alt="slider image"
            />

            <ul className="min-[890px]:absolute min-[890px]:inset-0 p-10">
              {items.map((elem, index) => {
                const isActive = index === activeIndex;

                return (
                  <li
                    key={elem.id || index}
                    className="min-[890px]:absolute whitespace-nowrap"
                    style={{
                      top: positions[index]?.top || "0%",
                      left: positions[index]?.left || "0%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <span
                      className={`before:-left-3.5 before:top-2 before:absolute before:border-[#fec80b] before:content-[""] before:inline-block before:w-5 before:h-5 before:rounded-full before:border-2 max-[500px]:before:border max-[500px]:before:w-3 max-[500px]:before:h-3 max-[500px]:before:-left-3 max-[500px]:ml-2 min-[890px]:before:border-[#fec80b] min-[500px]:before:-left-5 min-[500px]:before:top-1 min-[500px]:before:w-5 min-[500px]:before:h-5 md:before:-left-5 min-[1024px]:before:-left-7 min-[1190px]:before:-left-6! min-[1330px]:before:-left-7! min-[1500px]:before:-left-7.5! min-[1750px]:before:-left-8.5! ml-1.5 ${
                        isActive
                          ? "before:bg-[#fec80b] min-[890px]:before:bg-[#fec80b]"
                          : "before:bg-white dark:before:bg-slate-900"
                      }`}
                    />

                    <span
                      className={`max-[500px]:text-[14px] max-[890px]:text-xl benefits__button text ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      {elem.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="relative w-full min-[890px]:w-[30%]">
          <div className="relative w-0.5 h-120 max-[890px]:w-full max-[890px]:h-1 bg-transparent rounded-full overflow-visible min-[890px]:absolute min-[890px]:left-0 min-[890px]:top-1/2 min-[890px]:-translate-y-1/2">
            {/* Desktop Line */}
            <div
              className="absolute inset-0 origin-top rounded-full hidden min-[890px]:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `scaleY(${progress})`,
              }}
            >
              <div className="w-full h-full bg-[#fec80b] rounded-full" />

              {progress > 0 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none flex items-center justify-center"></div>
              )}
            </div>

            {/* Mobile Line */}
            <div
              className="absolute inset-0 origin-left rounded-full hidden max-[890px]:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `scaleX(${progress})`,
              }}
            >
              <div className="w-full h-full bg-[#fec80b] rounded-full" />

              {progress > 0 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 pointer-events-none flex items-center justify-center">
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center w-full ml-3 md:ml-7 mt-10">
            <div className="flex md:flex-col gap-10 mb-2">
              <div className="mb-8">
                {/* SVG RENDERING QISMI: */}
                {SvgComponent && <SvgComponent />}
              </div>

              <div className="w-full max-[890px]:w-full">
                <p className="text-[20px] w-full">{item?.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSlider;
