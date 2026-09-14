import { useTranslation } from "react-i18next";
import { Images } from "../utils/images";
import AboutImage from "../Image/about-track.webp";

export default function AboutPageULSection() {
  const { t } = useTranslation();

  const liData = [
    {
      id: 1,
      title: t("aboutPage.li1"),
    },
    {
      id: 2,
      title: t("aboutPage.li2"),
    },
    {
      id: 3,
      title: t("aboutPage.li3"),
    },
    {
      id: 4,
      title: t("aboutPage.li4"),
    },
    {
      id: 5,
      title: t("aboutPage.li5"),
    },
    {
      id: 6,
      title: t("aboutPage.li6"),
    },
  ];
  return (
    <>
      <section className="py-10">
        <div className="container1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h2 className="font-FiraSans font-medium text-xl md:text-3xl leading-[120%] text-black dark:text-white mb-6 md:mb-10">
                {t("aboutPage.liTitle")}
              </h2>
              <ul>
                {liData.map((item) => (
                  <li key={item.id} className="flex gap-3 md:gap-3 mb-3 md:mb-4.75">
                    <span className="w-6 h-6">
                      <Images.checkMarkedIcon />
                    </span>
                    <span className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white w-full">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={AboutImage} alt={t("aboutPage.liTitle")} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
