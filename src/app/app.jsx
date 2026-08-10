import { useEffect } from "react";
import Header from "../components/Header";
import { productsData } from "../data/productsData";
import { useThemeStore } from "../store/useThemeStore";

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
            </div>
        </>
    );
}
export default HomePage;
