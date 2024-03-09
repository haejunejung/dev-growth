import * as Figma from "figma-api";

export async function getStyles() {
  const api = new Figma.Api({
    personalAccessToken: process.env.NEXT_PUBLIC_FIGMA_ACCESS_TOKEN!!,
  });

  const file = await api.getFile(process.env.NEXT_PUBLIC_FIGMA_FILE_KEY!!);
  return file.styles;
}

export async function getComponents() {
  const api = new Figma.Api({
    personalAccessToken: process.env.NEXT_PUBLIC_FIGMA_ACCESS_TOKEN!!,
  });

  const file = await api.getFile(process.env.NEXT_PUBLIC_FIGMA_FILE_KEY!!);
  return file.components;
}
