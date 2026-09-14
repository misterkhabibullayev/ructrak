import AboutPageHeroSection from "../../components/AboutPageHeroSection";
import AboutPageLastSection from "../../components/AboutPageLastSection";
import AboutPageULSection from "../../components/AboutPageULSection";
import { AbourSwiperSection } from "../../components/AboutSwiperSection";
import Breadcrumbs from "../../components/Breadcrumbs";
import FeedbackForm from "../../components/FeedbackForm";

export default function AboutPage() {
  return (
    <>
      <div className="container1">
        <div>
          <Breadcrumbs />
        </div>
      </div>
      <AboutPageHeroSection />
      <AbourSwiperSection />
      <AboutPageULSection />
      <AboutPageLastSection />
      <FeedbackForm />
    </>
  );
}
