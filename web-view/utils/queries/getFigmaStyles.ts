import * as Figma from "figma-api";
import { FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY } from "../constants";

export async function getFigmaStyles() {
  const api = new Figma.Api({
    personalAccessToken: FIGMA_ACCESS_TOKEN,
  });

  const file = await api.getFile(FIGMA_FILE_KEY);
  return file.styles;
}
