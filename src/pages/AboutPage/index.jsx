import AboutPageHeroSection from "../../components/AboutPageHeroSection";
import { AbourSwiperSection } from "../../components/AboutSwiperSection";
import Breadcrumbs from "../../components/Breadcrumbs";

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
    </>
  );
}
