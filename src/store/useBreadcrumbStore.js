import { create } from "zustand";

export const useBreadcrumbStore = create((set) => ({
  dynamicName: "",
  setDynamicName: (name) => set({ dynamicName: name }),
}));