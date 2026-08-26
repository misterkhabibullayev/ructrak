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
    { top: "5%", left: "64%" },
    { top: "23%", left: "88%" },
    { top: "50%", left: "97%" },
    { top: "77%", left: "90%" },
    { top: "95%", left: "70%" },
  ];

  return (
    <section ref={sectionRef} className="h-[500vh] my-10 min-[890px]:my-20">
      <div className="h-dvh sticky top-30 lg:top-10 w-full flex flex-col justify-start min-[1300px]:flex-row min-[1300px]:items-center min-[1300px]:justify-between gap-10 md:gap-20 container1">
        <div className="w-full min-[890px]:w-[50%] lg:w-[45%]">
          <div className="relative w-full max-w-120">
            <div className="w-70 mx-auto md:mx-0 md:w-full aspect-square">
              <img
                className="w-full h-full object-contain"
                src={sliderImage}
                alt="slider image"
              />
            </div>

            <ul className="min-[890px]:absolute mt-10 min-[890px]:mt-0 inset-0 flex flex-col gap-3 min-[890px]:block">
              {items.map((elem, index) => {
                const isActive = index === activeIndex;

                return (
                  <li
                    key={elem.id || index}
                    className="min-[890px]:absolute flex items-center gap-7"
                    style={{
                      top: positions[index]?.top || "0%",
                      left: positions[index]?.left || "0%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <span
                      className={`shrink-0 w-3 h-3 min-[500px]:w-5 min-[500px]:h-5 rounded-full border border-[#fec80b] min-[500px]:border-2 ${
                        isActive ? "bg-[#fec80b]" : "bg-white dark:bg-slate-900"
                      }`}
                    />

                    <span
                      className={`text-[14px] md:text-[20px] font-FiraSans font-normal leading-[110%] text-black dark:text-white whitespace-nowrap ${
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

        <div className="relative w-full min-[1300px]:w-[40%] flex flex-col justify-center">
          <div className="relative w-full h-1 min-[1300px]:w-0.5 min-[1300px]:h-120 dark:bg-slate-700 rounded-full overflow-hidden min-[1300px]:absolute min-[1300px]:left-0 min-[1300px]:top-1/2 min-[1300px]:-translate-y-1/2">
            {/* Desktop Line */}
            <div
              className="absolute inset-0 origin-top rounded-full hidden min-[1300px]:block bg-[#fec80b] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `scaleY(${progress})`,
              }}
            />

            {/* Mobile Line */}
            <div
              className="absolute inset-0 origin-left rounded-full block min-[1300px]:hidden bg-[#fec80b] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `scaleX(${progress})`,
              }}
            />
          </div>

          {/* SVG va Matn */}
          <div className="w-full px-3 md:px-7 mt-6 min-[1300px]:mt-0 min-[1300px]:px-10">
            <div className="flex min-[1300px]:flex-col gap-6">
              {SvgComponent && (
                <div className="shrink-0">
                  <SvgComponent className="text-black dark:text-white w-15 h-15" />
                </div>
              )}

              <div className="w-full">
                <p className="w-full font-FiraSans font-normal text-[15px] md:text-[16px] leading-[130%] text-black dark:text-white">
                  {item?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSlider;
