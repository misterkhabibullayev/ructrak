import { useEffect } from "react";
import Header from "../components/Header";
import { useThemeStore } from "../store/useThemeStore";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  
  return (
    <>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        <main className="flex-1 dark:bg-slate-900">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default MainLayout;
