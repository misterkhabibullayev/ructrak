import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactPInfo from "../../components/ContactPInfo";
import ContactsCard from "../../components/ContactsCard";

function ContactsPage() {
  const { t } = useTranslation();
  return (
    <>
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
    </>
  );
}
export default ContactsPage;
