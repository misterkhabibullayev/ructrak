import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import { vacanciesData } from "../../data/vacanciesData";
import { Images } from "../../utils/images";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import FeedbackForm from "../../components/FeedbackForm";

export default function VacanciesPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [isAccOpen, setIsAccOpen] = useState(null);
  const handleAccOpen = (accName) => {
    setIsAccOpen((prev) => (prev === accName ? null : accName));
  };
  return (
    <>
      <Helmet>
        <title>{t("metaTitleDescriptions.vakansiTitle")}</title>
        <meta
          name="description"
          content={t("metaTitleDescriptions.vakansiDescription")}
        />
      </Helmet>
      <section>
        <div className="container1">
          <div>
            <Breadcrumbs />
          </div>
          <div>
            <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[120%] text-black dark:text-white mb-8 mt-8 md:mt-2">
              {t("vacanciesPage.title")}
            </h1>
          </div>
          <div className="mb-20 md:mb-30 select-none">
            {vacanciesData.map((item) => (
              <div
                key={item.id}
                className={`border border-[#EBEBEB] rounded-lg ${isAccOpen ? "border-none" : ""}`}
              >
                <div
                  onClick={() => handleAccOpen(item.id)}
                  className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 rounded-t-lg ${isAccOpen ? "bg-[#FEC80B]" : "bg-transparent"}`}
                >
                  <h2
                    className={`font-FiraSans font-medium text-lg md:text-2xl leading-[120%] transition-all duration-300 ${isAccOpen ? "text-black dark:text-black" : "text-black dark:text-white"}`}
                  >
                    {item.title[currentLang]}
                  </h2>
                  <span>
                    <Images.swiperNextBtnIcon
                      className={`rotate-90 transition-all duration-300 ${isAccOpen ? "text-black dark:text-black rotate-270" : "text-black dark:text-white"}`}
                    />
                  </span>
                </div>
                <div
                  className={`grid dark:bg-slate-950 transition-[grid-template-rows] duration-300 ease-in-out ${isAccOpen ? "grid-rows-[1fr] border border-t-0 border-l-[#EBEBEB] border-r-[#EBEBEB] border-b-[#EBEBEB]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="py-8 px-4 rounded-lg">
                      <div className="mb-6 md:mb-8">
                        <h3 className="font-FiraSans font-medium text-base md:text-lg leading-[110%] text-black dark:text-white mb-2.25">
                          {t("vacanciesPage.responsibilities")}
                        </h3>
                        <ul className="pl-4">
                          {item.responsibilities[currentLang].map(
                            (res, index) => (
                              <li
                                key={index}
                                className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white"
                              >
                                • {res}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <div className="mb-6 md:mb-8">
                        <h3 className="font-FiraSans font-medium text-base md:text-lg leading-[110%] text-black dark:text-white mb-2.25">
                          {t("vacanciesPage.requirements")}
                        </h3>
                        <ul className="pl-4">
                          {item.requirements[currentLang].map((res, index) => (
                            <li
                              key={index}
                              className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white"
                            >
                              • {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-8 md:mb-12">
                        <h3 className="font-FiraSans font-medium text-base md:text-lg leading-[110%] text-black dark:text-white mb-2.25">
                          {t("vacanciesPage.conditions")}
                        </h3>
                        <ul className="pl-4">
                          {item.conditions[currentLang].map((res, index) => (
                            <li
                              key={index}
                              className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white"
                            >
                              • {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <button
                          aria-label={t("vacanciesPage.reply")}
                          className="py-1.5 px-6 bg-[#FEC80B] hover:bg-[#FFD43A] rounded ml-8.75"
                        >
                          {t("vacanciesPage.reply")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeedbackForm />
    </>
  );
}
