import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (product) => {
        const { favorites } = get();
        const isExist = favorites.some((item) => item.id === product.id);

        if (isExist) {
          set({
            favorites: favorites.filter((item) => item.id !== product.id),
          });
        } else {
          set({
            favorites: [...favorites, product],
          });
        }
      },
      isFavorites: (productId) => {
        return get().favorites.some((item) => item.id === productId);
      },
    }),
    {
      name: "favorites-storage",
    },
  ),
);
