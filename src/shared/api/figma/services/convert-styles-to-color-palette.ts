import {colorPalette, ColorPaletteType} from '@/shared/model';
import {Style} from 'figma-api';

export default function convertStylesToColorPalette(styles: {
  [styleName: string]: Style;
}) {
  const getColorCode = (name: string) => {
    const style = Object.values(styles).find((s: Style) => s.name === name);
    return style ? style.description : '';
  };

  const result = colorPalette.reduce<Record<ColorPaletteType, string>>(
    (acc, colorName) => {
      acc[colorName] = getColorCode(colorName);
      return acc;
    },
    {} as Record<ColorPaletteType, string>,
  );

  return result;
}
