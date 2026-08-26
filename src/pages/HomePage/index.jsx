import { Helmet } from "react-helmet-async";
import { AboutCompanySection } from "../../components/AboutCompany";
import { HeroSection } from "../../components/HeroSection";
import { KategorySection } from "../../components/KategorySection";
import { useTranslation } from "react-i18next";
import AboutStatsSection from "../../components/AboutStatsSection";
import SwiperSliderSection from "../../components/SwiperSliderSection";
import Recommended from "../../components/RecommendedSection";

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
      <AboutStatsSection />
      <SwiperSliderSection />
      <Recommended />
    </>
  );
}
export default HomePage;
