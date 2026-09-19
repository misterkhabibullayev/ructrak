import { useTranslation } from "react-i18next";
import AboutImage1 from "../Image/about-im_v2.webp";
import AboutImage2 from "../Image/about-im2_v2.webp";

export default function AboutPageLastSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-10">
        <div className="container1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 md:mb-40">
            <div className="bg-[#FEC80B] col-span-1 md:col-span-7 xl:col-span-4 rounded-lg py-8 px-2 md:py-16.25 md:px-4.75">
              <h3 className="font-FiraSans font-medium text-xl md:text-3xl leading-[120%] mb-2 md:mb-3">
                {t("aboutPage.tAboutTitle")}
              </h3>
              <p className="mb-12 font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black">
                {t("aboutPage.tAboutDesc")}
              </p>
              <h3 className="font-FiraSans font-medium text-xl md:text-3xl leading-[120%] mb-2 md:mb-3">
                {t("aboutPage.tAboutTitle2")}
              </h3>
              <p className="ont-FiraSans font-normal text-base md:text-lg leading-[150%] text-black">
                {t("aboutPage.tAboutDesc2")}
              </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 col-span-1 md:col-span-5 xl:col-span-8 gap-x-6 gap-y-6">
              <div className="max-h-70.75 xl:max-h-none rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  src={AboutImage1}
                  alt={t("aboutPage.tAboutTitle")}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="max-h-67.5 xl:max-h-none rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  src={AboutImage2}
                  alt={t("aboutPage.tAboutTitle2")}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="max-w-217.5">
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white md:mb-10">
              {t("aboutPage.bP1")}
            </p>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white md:mb-10">
              {t("aboutPage.bP2")}
            </p>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white md:mb-10">
              {t("aboutPage.bP3")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
