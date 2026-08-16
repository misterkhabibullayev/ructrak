import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import aboutImg from "../Image/about-truck32.png";

export function AboutCompanySection() {
  const { t } = useTranslation();
  return (
    <div className="container1 mt-40 pb-40">
      <div className="flex flex-col md:flex-row gap-6 md:justify-between">
        <div className="w-full md:w-[40%]">
          <h1
            data-aos="fade-up"
            className="font-FiraSans font-medium text-[28px] md:text-[42px] leading-[120%] text-black dark:text-white"
          >
            {t("aboutCompanySection.title")}{" "}
            <span className="font-FiraSans font-medium text-[28px] md:text-[42px] leading-[120%] text-[#FEC80B]">
              Ructrak
            </span>
          </h1>
          <div className="flex flex-col gap-10 mt-5.5 mb-16">
            <p
              data-aos="fade-up"
              className="font-FiraSans font-normal text-[18px] leading-[150%] text-black dark:text-white"
            >
              {t("aboutCompanySection.description1")}
            </p>
            <p
              data-aos="fade-up"
              className="font-FiraSans font-normal text-[18px] leading-[150%] text-black dark:text-white"
            >
              {t("aboutCompanySection.description2")}
            </p>
          </div>
          <div data-aos="fade-up" className="hidden md:block">
            <a
              href="/about"
              className="inline-flex items-center gap-2 py-1.5 px-6 bg-[#FEC80B] hover:bg-[#FFD43A] rounded "
            >
              {t("aboutCompanySection.more")} <Images.moreIcon />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img data-aos="fade-left" src={aboutImg} alt="about img" />
        </div>
      </div>
    </div>
  );
}
