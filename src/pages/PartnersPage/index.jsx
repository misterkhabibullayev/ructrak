import { useTranslation } from "react-i18next";
import { partners } from "../../data/partnersData";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FeedbackForm from "../../components/FeedbackForm";

export default function PartnersPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "uz";
  return (
    <>
      <div>
        <Helmet>
          <title>{t("metaTitleDescriptions.partners")}</title>
        </Helmet>
        <div className="container1">
          <div>
            <Breadcrumbs />
          </div>
          <h1 className="font-FiraSans font-medium text-2xl md:text-[32px] leading-[120%] mb-8 pt-8 md:pt-2 text-black dark:text-white">{t("breadCrumbs.partners")}</h1>
          {partners.map((item) => (
            <div key={item.id} className="mb-18">
              <h3 className="font-FiraSans font-medium text-2xl leading-[120%] mb-8 text-black dark:text-white">{item.name[currentLang]}</h3>
              <p className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black dark:text-white max-w-full md:max-w-[70%]">{item.description[currentLang]}</p>
              <br />
              <Link to={item.links} className="font-FiraSans font-normal text-base md:text-lg leading-[150%] text-black/50 dark:text-white/50">{item.links}</Link>
            </div>
          ))}
        </div>
        <FeedbackForm />
      </div>
    </>
  );
}
