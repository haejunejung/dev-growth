import * as Figma from "figma-api";

async function getImages(ids: string) {
  const api = new Figma.Api({
    personalAccessToken: process.env.NEXT_PUBLIC_FIGMA_ACCESS_TOKEN!!,
  });

  const images = await api.getImage(process.env.NEXT_PUBLIC_FIGMA_FILE_KEY!!, {
    ids: ids,
    scale: 1,
    format: "svg",
  });

  return images.images;
}

export const convertIcons = async (iconComponents: {
  [iconName: string]: Figma.Component;
}) => {
  const ids = Object.keys(iconComponents)
    .map((id) => id)
    .join(",");

  const images = (await getImages(ids)) || [];

  const getIcon = (iconName: string) => {
    const icon = Object.values(iconComponents).find((i) => i.name === iconName);
    const iconImage = Object.keys(images).find(
      (i) =>
        i ===
        Object.keys(iconComponents).find((key) => iconComponents[key] === icon)
    );

    if (iconImage !== undefined) {
      return images[iconImage];
    }
  };

  return {
    IcYoutube: getIcon("IcYoutube"),
    IcGithub: getIcon("IcGithub"),
    IcBlog: getIcon("IcBlog"),
    IcSearch: getIcon("IcSearch"),
    IcAdd: getIcon("IcAdd"),
  };
};
