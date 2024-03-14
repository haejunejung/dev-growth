import { create } from "zustand";

interface ColorPaletteStore {
  colorPalette: { [colorName: string]: string };
  setColorPalette: (colorPalette: { [colorName: string]: string }) => void;
}

const useColorPaletteStore = create<ColorPaletteStore>((set) => ({
  colorPalette: {},
  setColorPalette: (colorPalette: { [colorName: string]: string }) =>
    set({ colorPalette }),
}));

export default useColorPaletteStore;
