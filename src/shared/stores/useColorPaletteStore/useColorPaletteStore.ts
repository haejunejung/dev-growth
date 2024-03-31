import {ColorPaletteType} from '@/shared/model';
import {create} from 'zustand';

interface ColorStoreProps {
  colorPalette: Record<ColorPaletteType, string>;
}

const useColorPaletteStore = create<ColorStoreProps>(set => ({
  colorPalette: {} as Record<ColorPaletteType, string>,
  setColorPalette: (colorPalette: Record<ColorPaletteType, string>) =>
    set({colorPalette}),
}));

export default useColorPaletteStore;
