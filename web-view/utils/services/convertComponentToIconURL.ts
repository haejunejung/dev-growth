import * as Figma from "figma-api";
import { getFigmaImages } from "../queries/getFigmaImages";

export const convertComponentToIconURL = async (iconComponents: {
  [iconName: string]: Figma.Component;
}) => {
  const ids = Object.keys(iconComponents)
    .map((id) => id)
    .join(",");

  const images = await getFigmaImages(ids);

  const getIcon = (iconName: string) => {
    const icon = Object.values(iconComponents).find((i) => i.name === iconName);
    const iconImage = Object.keys(images).find(
      (i) =>
        i ===
        Object.keys(iconComponents).find((key) => iconComponents[key] === icon)
    );

    if (iconImage !== undefined && iconImage !== null) {
      return images[iconImage];
    }

    return "";
  };

  return {
    IcYoutube: getIcon("IcYoutube"),
    IcGithub: getIcon("IcGithub"),
    IcBlog: getIcon("IcBlog"),
    IcSearch: getIcon("IcSearch"),
    IcAdd: getIcon("IcAdd"),
    IcRight_48: getIcon("IcRight_48"),
    IcDev: getIcon("IcDev"),
    IcNew: getIcon("IcNew"),
    IcMenu: getIcon("IcMenu"),
    IcLinkRightArrow: getIcon("IcLinkRightArrow"),
  };
};
