import { Style } from "figma-api";

export const convertColorPalette = (styles: { [styleName: string]: Style }) => {
  const getColorCode = (name: string) => {
    const style = Object.values(styles).find((s: any) => s.name === name);
    return style ? style.description : undefined;
  };

  return {
    green_main: getColorCode("green_main"),
    red_main: getColorCode("red_main"),
    yellow_main: getColorCode("yellow_main"),
    pink_main: getColorCode("pink_main"),
    blue_quaternary: getColorCode("blue_quaternary"),
    blue_tertiary: getColorCode("blue_tertiary"),
    blue_secondary: getColorCode("blue_secondary"),
    red_quaternary: getColorCode("red_quaternary"),
    red_tertiary: getColorCode("red_tertiary"),
    red_secondary: getColorCode("red_secondary"),
    red_primary: getColorCode("red_primary"),
    yellow_quaternary: getColorCode("yellow_quaternary"),
    yellow_secondary: getColorCode("yellow_secondary"),
    yellow_primary: getColorCode("yellow_primary"),
    green_quaternary: getColorCode("green_quaternary"),
    green_tertiary: getColorCode("green_tertiary"),
    green_secondary: getColorCode("green_secondary"),
    green_primary: getColorCode("green_primary"),
    pink_quaternary: getColorCode("pink_quaternary"),
    pink_tertiary: getColorCode("pink_tertiary"),
    pink_secondary: getColorCode("pink_secondary"),
    pink_primary: getColorCode("pink_primary"),
    purple_quaternary: getColorCode("purple_quaternary"),
    purple_tertiary: getColorCode("purple_tertiary"),
    purple_secondary: getColorCode("purple_secondary"),
    purple_primary: getColorCode("purple_primary"),
    blue_main: getColorCode("blue_main"),
    blue_primary: getColorCode("blue_primary"),
  };
};
