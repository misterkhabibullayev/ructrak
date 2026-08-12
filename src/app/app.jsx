import { useEffect } from "react";
import Header from "../components/Header";
import { productsData } from "../data/productsData";
import { useThemeStore } from "../store/useThemeStore";
import { HeroSection } from "../components/HeroSection";
import { KategorySection } from "../components/KategorySection";

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
    return (
        <>
            <div>
                <Header />
                <main className="dark:dark:bg-slate-900 transition-all duration-300">
                    <HeroSection />
                    <KategorySection />
                </main>
            </div>
        </>
    );
}
export default HomePage;
