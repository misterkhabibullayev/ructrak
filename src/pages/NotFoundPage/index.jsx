import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Img404 from "../../Image/404.webp";
import { Helmet } from "react-helmet-async";

function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("notFound.sahifaTopilmadi")}</title>
      </Helmet>
      <div className="container1 py-20 md:py-0 md:pb-37.5 overflow-hidden">
        <div className="flex items-center gap-20 px-15 md:px-30 mx-auto">
          <div className="w-full md:w-90">
            <h1 className="font-FiraSans font-bold text-[50px] md:text-[190px] text-[#FEC80B] text-center">
              404
            </h1>
            <h2 className="font-FiraSans font-bold text-[20px] md:text-[28px] text-[#FEC80B] mb-5 text-center ">
              {t("notFound.sahifaTopilmadi")}
            </h2>
            <p className="font-FiraSans font-normal text-black dark:text-white text-[14px] md:text-[16px] mb-8 text-center">
              {t("notFound.sahifaOchirilgan")}
            </p>
            <Link
              to={"/catalog"}
              className="flex items-center justify-center rounded w-full py-3.25 px-7.5 font-FiraSans font-normal text-black text-[14px] md:text-[16px] bg-[#FEC80B] hover:bg-[#FFD43A] transition-all duration-300"
            >
              {t("notFound.homepagegaqaytish")}
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img
              src={Img404}
              alt="notFound"
              className="min-w-143.5 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default NotFound;
