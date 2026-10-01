import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import FeedbackForm from "../../components/FeedbackForm";
import { Link } from "react-router-dom";

export default function ReklamsMaterialPage() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <Helmet>
          <title>{t("metaTitleDescriptions.promo")}</title>
        </Helmet>
        <div className="container1">
          <div>
            <Breadcrumbs />
          </div>
          <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[118%] text-black dark:text-white mb-8 pt-8 md:pt-2">
            {t("breadCrumbs.promo")}
          </h1>
          <div>
            <div className="mb-10">
              <h3 className="font-FiraSans font-normal text-[20px] md:text-2xl leading-[120%] text-black dark:text-white my-2.5">
                {t("promoPage.title1")}
              </h3>
              <Link
                to={
                  "https://rtrf.ru/upload/iblock/dc7/05zscdtqwo09vw8ebd2dob3xwxa9c9wt.pdf"
                }
                className="font-FiraSans font-normal text-base md:text-lg underline text-black dark:text-white"
              >
                {t("promoPage.link1")}
              </Link>
            </div>
            <div className="mb-10">
              <h3 className="font-FiraSans font-normal text-[20px] md:text-2xl leading-[120%] text-black dark:text-white my-2.5">
                {t("promoPage.title2")}
              </h3>
              <div className="flex flex-col">
                <Link
                  to={
                    "https://rtrf.ru/upload/iblock/a33/aq4p9vkztmdcuz4h0knxnjbyps1hm5mx.pdf"
                  }
                  className="font-FiraSans font-normal text-base md:text-lg underline text-black dark:text-white"
                >
                  {t("promoPage.link2")}
                </Link>
                <Link
                  to={
                    "https://rtrf.ru/upload/iblock/58c/kw4j96cw2tg7ydn92e81s7a9yrdpqc8s.pdf"
                  }
                  className="font-FiraSans font-normal text-base md:text-lg underline text-black dark:text-white"
                >
                  {t("promoPage.link3")}
                </Link>
                <Link
                  to={
                    "https://rtrf.ru/upload/iblock/f48/c0qtzrjnfix9tvmknmvrcf7abaxssyau.pdf"
                  }
                  className="font-FiraSans font-normal text-base md:text-lg underline text-black dark:text-white"
                >
                  {t("promoPage.link4")}
                </Link>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="font-FiraSans font-normal text-[20px] md:text-2xl leading-[120%] text-black dark:text-white my-2.5">
                {t("promoPage.title3")}
              </h3>
              <div className="flex flex-col">
                <Link
                  to={
                    "https://rtrf.ru/upload/iblock/06d/nnn1put7h22qmnw702hiqrci3i986p2t.pdf"
                  }
                  className="font-FiraSans font-normal text-base md:text-lg underline text-black dark:text-white"
                >
                  {t("promoPage.link5")}
                </Link>
                <Link
                  to={
                    "https://rtrf.ru/upload/iblock/a86/hfopgqh0pfvbej4cahrcl0lftaoixsno.pdf"
                  }
                  className="font-FiraSans font-normal text-base md:text-lg underline text-black dark:text-white"
                >
                  {t("promoPage.link6")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FeedbackForm />
      </div>
    </>
  );
}
