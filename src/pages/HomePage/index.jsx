import { Helmet } from "react-helmet-async";
import { AboutCompanySection } from "../../components/AboutCompany";
import { HeroSection } from "../../components/HeroSection";
import { KategorySection } from "../../components/KategorySection";
import { useTranslation } from "react-i18next";

function HomePage() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('metaTitleDescriptions.mainTitle')}</title>
        <meta name="description" content={t('metaTitleDescriptions.mainDescription')} />
      </Helmet>
      <HeroSection />
      <KategorySection />
      <AboutCompanySection />
    </>
  );
}
export default HomePage;
