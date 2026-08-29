import { Helmet } from "react-helmet-async";
import { AboutCompanySection } from "../../components/AboutCompany";
import { HeroSection } from "../../components/HeroSection";
import { KategorySection } from "../../components/KategorySection";
import { useTranslation } from "react-i18next";
import AboutStatsSection from "../../components/AboutStatsSection";
import Recommended from "../../components/RecommendedSection";
import ScrollSlider from "../../components/ScrollSlider";
import { NewsSection } from "../../components/NewsSection";
import FeedbackForm from "../../components/FeedbackForm";

function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("metaTitleDescriptions.mainTitle")}</title>
        <meta
          name="description"
          content={t("metaTitleDescriptions.mainDescription")}
        />
      </Helmet>
      <HeroSection />
      <KategorySection />
      <AboutCompanySection />
      <AboutStatsSection />
      <ScrollSlider />
      <Recommended />
      <NewsSection />
      <FeedbackForm />
    </>
  );
}
export default HomePage;
