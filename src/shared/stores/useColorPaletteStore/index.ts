import {create} from 'zustand';

const useColorPaletteStore = create(set => ({
  colorPalette: {},
  setColorPalette: (colorPalette: {[colorName: string]: string}) =>
    set({colorPalette}),
}));

export default useColorPaletteStore;
