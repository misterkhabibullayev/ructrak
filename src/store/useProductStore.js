import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [],
  isLoading: false,
  isFetched: false, // Ma'lumot bir marta yuklanganini bilish uchun flag

  fetchProducts: async () => {
    // Agar ma'lumotlar allaqachon yuklangan bo'lsa, qayta fetch qilmaymiz
    if (get().isFetched || get().isLoading) return;

    set({ isLoading: true });

    try {
      const res = await fetch("/data/products.json");
      if (!res.ok) throw new Error("Network response error");

      const data = await res.json();
      set({ products: data, isLoading: false, isFetched: true });
    } catch (err) {
      console.error("Error fetching products:", err);
      set({ isLoading: false });
    }
  },
}));
