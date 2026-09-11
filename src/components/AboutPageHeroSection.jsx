import { useTranslation } from "react-i18next";
import UnionImg from "../Image/chevron-years.png";

export default function AboutPageHeroSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="bg-[url('/Image/about-company.jpg')] bg-top  bg-no-repeat bg-cover mt-4">
        <div className="container1 relative">
          <div className="max-w-full md:max-w-[40%] pt-4.5 pb-37.5 md:pt-22.5 md:pb-47.5">
            <p className="font-FiraSans font-medium text-lg md:text-3xl text-white">
              {t("aboutPage.heroTitle")}
            </p>
          </div>
          <div className="w-35 absolute -bottom-0.75">
            <img
              src={UnionImg}
              alt="union image"
              draggable={false}
              className="-mb-5"
            />
          </div>
        </div>
      </section>
    </>
  );
}
