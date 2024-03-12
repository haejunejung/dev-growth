import * as Figma from "figma-api";
import { FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY } from "../constants";

export async function getFigmaImages(ids: string) {
  const api = new Figma.Api({
    personalAccessToken: FIGMA_ACCESS_TOKEN,
  });

  const images = await api.getImage(FIGMA_FILE_KEY, {
    ids: ids,
    scale: 1,
    format: "svg",
  });

  return images.images;
}
