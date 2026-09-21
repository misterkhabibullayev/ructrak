import { create } from 'zustand';

export const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  error: null,

  // JSON fayldan ma'lumotni yuklab olish (fetch qilish)
  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      // Agar JSON faylingiz public/data/categoriesData.json ichida bo'lsa:
      const response = await fetch('/data/categories.json');
      
      if (!response.ok) {
        throw new Error("Kategoriyalarni yuklab bo'lmadi");
      }
      
      const data = await response.json();
      set({ categories: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));