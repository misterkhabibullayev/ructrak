import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (setCart, getCart) => ({
      cart: [],

      toggleCart: (product) => {
        const { cart } = getCart();

        const isCexist = cart.some((item) => item.id === product.id);

        if (isCexist) {
          setCart({
            cart: cart.filter((item) => item.id !== product.id),
          });
        } else {
          setCart({
            cart: [...cart, product],
          });
        }
      },
      isCart: (productId) => {
        return getCart().cart.some((item) => item.id === productId);
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
