import { useTranslation } from "react-i18next";
import { statsData } from "../data/statsData";
import CountMotion from "./CountMotion";
function AboutStatsSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <section className="bg-[#FEC80B] py-12.5">
      <div className="container1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-34">
          {statsData.map((item) => (
            <div key={item.id} data-aos="fade-up">
              <div>
                <h1 className="font-FiraSans font-medium text-[80px] md:text-[100px] leading-[100%]">
                  <CountMotion value={item.value} duration={1.5} />
                </h1>
              </div>
              <p className="font-FiraSans font-medium text-[32px] leading-[120%] mb-6">
                {item?.title?.[currentLang]}
              </p>
              <div>
                <p className="font-FiraSans font-normal text-[18px] leading-[150%] line-clamp-4">
                  {item?.description?.[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default AboutStatsSection;
