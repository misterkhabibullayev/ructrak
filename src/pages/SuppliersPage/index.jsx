import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import FeedbackForm from "../../components/FeedbackForm";
import { Helmet } from "react-helmet-async";

export default function SuppliersPage() {
  const { t } = useTranslation();
  return (
    <>
    <Helmet>
      <title>{t("metaTitleDescriptions.collabTitle")}</title>
      <meta name="description" content="metaTitleDescriptions.collabDescription" />
    </Helmet>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        <div>
          <h2 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[120%] text-black dark:text-white mb-8 mt-8 md:mt-2">
            {t("suppliersPage.mainTitle")}
          </h2>
          <div>
            <h2 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[120%] text-black dark:text-white mb-8">
              {t("suppliersPage.aboutTitle")}
            </h2>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white mb-8.75 max-w-full md:max-w-[70%]">
              {t("suppliersPage.p1")}
            </p>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[75%]">
              {t("suppliersPage.p2")}
            </p>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white mb-8.75 max-w-full md:max-w-[70%]">
              {t("suppliersPage.p3")}
            </p>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white mb-8.75 max-w-full md:max-w-[70%]">
              {t("suppliersPage.p4")}
            </p>
            <ul className="flex flex-col mb-8.75">
              <li className="flex items-center gap-5 mb-1.25">
                <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                  1
                </span>
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
                  {t("suppliersPage.li1")}
                </p>
              </li>
              <li className="flex items-center gap-5 mb-1.25">
                <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                  2
                </span>
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
                  {t("suppliersPage.li2")}
                </p>
              </li>
              <li className="flex items-center gap-5 mb-1.25">
                <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                  3
                </span>
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
                  {t("suppliersPage.li3")}
                </p>
              </li>
              <li className="flex gap-5 mb-1.25">
                <span className="min-w-9.5 h-9.5 bg-[#FEC80B] rounded-full flex items-center justify-center font-FiraSans font-medium text-2xl leading-[100%] text-black">
                  4
                </span>
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
                  {t("suppliersPage.li4")}
                </p>
              </li>
            </ul>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white mb-8.75 max-w-full md:max-w-[70%]">
              {t("suppliersPage.p5")}
            </p>
            <ul className="flex flex-col mb-8.75">
              <li className="flex gap-5 mb-1.25">
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
                  {t("suppliersPage.li5")}
                </p>
              </li>
              <li className="flex gap-5 mb-1.25">
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
                  {t("suppliersPage.li6")}
                </p>
              </li>
              <li className="flex gap-5 mb-1.25">
                <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
                  {t("suppliersPage.li7")}
                </p>
              </li>
            </ul>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">
              {t("suppliersPage.p6")}
            </p>
            <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white mb-8.75 max-w-full md:max-w-[70%]">
              {t("suppliersPage.p7")}
            </p>
          </div>
        </div>
      </div>
      <FeedbackForm />
    </>
  );
}
