import * as Figma from "figma-api";

export async function getStyles() {
  const api = new Figma.Api({
    personalAccessToken: "figd_xZSwZaT_nKoISqcm4sNfvKZbsYwFmMShRs7PzPx5",
  });

  const file = await api.getFile("oCQTvZWE6nWVPbDOHkFQfX");
  return file.styles;
}
