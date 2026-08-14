import { useEffect } from "react";
import Header from "../components/Header";
import { useThemeStore } from "../store/useThemeStore";
import { HeroSection } from "../components/HeroSection";
import { KategorySection } from "../components/KategorySection";
import { AboutCompanySection } from "../components/AboutCompany";
import Aos from "aos";

function HomePage() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement; // <html> elementi
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <div>
        <Header />
        <main className="dark:dark:bg-slate-900 transition-all duration-300">
          <HeroSection />
          <KategorySection />
          <AboutCompanySection />
        </main>
      </div>
    </>
  );
}
export default HomePage;
