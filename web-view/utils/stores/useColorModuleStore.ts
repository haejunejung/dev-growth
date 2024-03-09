import { create } from "zustand";

const useColorStore = create((set) => ({
  colorPalette: [] as { [colorName: string]: string }[],
  setColorPalette: (colorPalette: { [colorName: string]: string }[]) =>
    set({ colorPalette }),
}));

export default useColorStore;
