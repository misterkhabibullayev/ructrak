import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import FeedbackForm from "../../components/FeedbackForm";

export default function LeasingPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        <div>
          <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[120%] text-black dark:text-white mb-8 mt-8 md:mt-2">
            {t("leasingPage.mainTitle")}
          </h1>
          <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
            {t("leasingPage.p1")}
          </p>
          <h3 className="font-FiraSans font-medium text-xl md:text-2xl mt-20 mb-8 leading-[120%] text-black dark:text-white">
            {t("leasingPage.title1")}
          </h3>
          <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
            {t("leasingPage.p2")}
          </p>
          <h3 className="font-FiraSans font-medium text-xl md:text-2xl mt-20 mb-8 leading-[120%] text-black dark:text-white">
            {t("leasingPage.title2")}
          </h3>
          <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
            {t("leasingPage.p3")}
          </p>
          <h3 className="font-FiraSans font-medium text-xl md:text-2xl mt-20 mb-8 leading-[120%] text-black dark:text-white">
            {t("leasingPage.title3")}
          </h3>
          <ul className="lg:pl-8 flex flex-col mb-8">
            <li className="flex gap-5 mb-8">
              <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                1
              </span>
              <div className="max-w-full md:max-w-[70%]">
                <p className="font-FiraSans font-medium text-[18px] md:text-[22px] leading-[120%] text-black dark:text-white mb-2">
                  {t("leasingPage.strong1")}
                </p>
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white">
                  {t("leasingPage.li1")}
                </p>
              </div>
            </li>
            <li className="flex gap-5 mb-8">
              <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                2
              </span>
              <div className="max-w-full md:max-w-[70%]">
                <p className="font-FiraSans font-medium text-[18px] md:text-[22px] leading-[120%] text-black dark:text-white mb-2">
                  {t("leasingPage.strong2")}
                </p>
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white">
                  {t("leasingPage.li2")}
                </p>
              </div>
            </li>
            <li className="flex gap-5 mb-1.25">
              <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                3
              </span>
              <div className="max-w-full md:max-w-[70%]">
                <p className="font-FiraSans font-medium text-[18px] md:text-[22px] leading-[120%] text-black dark:text-white mb-2">
                  {t("leasingPage.strong3")}
                </p>
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white">
                  {t("leasingPage.li3")}
                </p>
              </div>
            </li>
          </ul>
          <h3 className="font-FiraSans font-medium text-xl md:text-2xl mt-20 mb-8 leading-[120%] text-black dark:text-white">
            {t("leasingPage.title4")}
          </h3>
          <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
            {t("leasingPage.p4")}
          </p>
          <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%] mb-8">
            {t("leasingPage.p5")}{" "}
            <a href="tel:8 (831) 225-00-55">8 (831) 225-00-55</a>
          </p>
        </div>
      </div>
      <FeedbackForm />
    </>
  );
}
