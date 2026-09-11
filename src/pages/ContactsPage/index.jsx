import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactPInfo from "../../components/ContactPInfo";
import ContactsCard from "../../components/ContactsCard";
import FeedbackForm from "../../components/FeedbackForm";
import { Helmet } from "react-helmet-async";

function ContactsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("metaTitleDescriptions.vakansiTitle")}</title>
        <meta
          name="description"
          content={t("metaTitleDescriptions.serviceDescription")}
        />
      </Helmet>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
        <ContactPInfo />
        <section>
          <h2 className="font-FiraSans font-medium text-[24px] md:text-[32px] leading-[130%] text-black dark:text-white">
            {t("contactPage.employees")}
          </h2>
          <ContactsCard />
        </section>
      </div>
      <FeedbackForm />
    </>
  );
}
export default ContactsPage;
