"use client";

import { getStyles } from "@/utils/queries/figma";
import { convertColorPalette } from "@/utils/services/convertColorPalette";
import useColorStore from "@/utils/stores/useColorModuleStore";
import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  useEffect(() => {
    const fetchColorPalette = async () => {
      const styles = await getStyles();
      const colorPalette = convertColorPalette(styles);

      useColorStore.setState(colorPalette);
    };

    fetchColorPalette();
  }, []);

  return <Container>{children}</Container>;
};

const Container = styled.div(({ minHeight }: { minHeight?: number }) => ({
  maxWidth: 390,
  marginLeft: "auto",
  marginRight: "auto",
  minHeight: minHeight ?? "100vh",
  overflowY: "hidden",
  backgroundColor: "rgb(253, 253, 150)",
  position: "relative", // Add this line to make the container position relative
}));

export default Layout;
