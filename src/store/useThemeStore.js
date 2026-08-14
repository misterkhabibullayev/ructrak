import { create } from "zustand";

export const useThemeStore = create((set) => {
  // Boshlang'ich qiymatni localStorage'dan olamiz
  const savedTheme = localStorage.getItem("theme") || "light";

  // Dastur birinchi marta yuklanganda HTML'ga 'dark' klassini qo'shib qo'yamiz
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return {
    theme: savedTheme,
    toggleTheme: () =>
      set((state) => {
        const nextTheme = state.theme === "light" ? "dark" : "light";
        
        // LocalStorage va DOM (HTML) ni yangilaymiz
        localStorage.setItem("theme", nextTheme);
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        return { theme: nextTheme };
      }),
  };
});