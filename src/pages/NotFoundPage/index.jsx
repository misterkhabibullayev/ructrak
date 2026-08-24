import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Img404 from "../../Image/404.png";
import { Helmet } from "react-helmet-async";

function NotFound() {
  const { t } = useTranslation();
  return (
    <>
    <Helmet>
      <title>{t("notFound.sahifaTopilmadi")}</title>
    </Helmet>
      <div className="container1">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between px-0 md:px-30 mx-auto">
          <div className="w-full md:w-90">
            <h1 className="font-FiraSans font-bold text-[80px] md:text-[190px] text-[#FEC80B] text-center">
              404
            </h1>
            <h2 className="font-FiraSans font-bold text-[28px] text-[#FEC80B] mb-5 text-center ">
              {t("notFound.sahifaTopilmadi")}
            </h2>
            <p className="font-FiraSans font-normal text-black dark:text-white text-[18px] mb-8 text-center">
              {t("notFound.sahifaOchirilgan")}
            </p>
            <Link
              to={"/catalog"}
              className="flex items-center justify-center rounded w-full py-3.25 px-7.5 font-FiraSans font-normal text-black text-[16px] bg-[#FEC80B] hover:bg-[#FFD43A] transition-all duration-300"
            >
              {t("notFound.homepagegaqaytish")}
            </Link>
          </div>
          <div className="w-70 md:w-143.5 md:h-143.5 flex items-center justify-center">
            <img src={Img404} alt="notFound" />
          </div>
        </div>
      </div>
    </>
  );
}
export default NotFound;
