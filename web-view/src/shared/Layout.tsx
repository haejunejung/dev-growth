"use client";

import { getComponents, getStyles } from "@/utils/queries/figma";
import { convertColorPalette } from "@/utils/services/convertColorPalette";
import { convertIcons } from "@/utils/services/convertIcons";
import useColorStore from "@/utils/stores/useColorModuleStore";
import useIconURLStore from "@/utils/stores/useIconModuleStore";
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

  useEffect(() => {
    const fetchIconURLs = async () => {
      const iconComponents = await getComponents();
      const iconURLs = await convertIcons(iconComponents);

      useIconURLStore.setState(iconURLs);
    };

    fetchIconURLs();
  }, []);

  useEffect(() => {
    const adjustHeight = () => {
      // 실제 viewport 높이를 CSS 변수로 설정
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    // 초기 로드 시와 창 크기 변경 시에 높이 조정
    window.addEventListener("resize", adjustHeight);
    adjustHeight(); // 초기 설정

    // cleanup 함수에서 이벤트 리스너 제거
    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  return <Container>{children}</Container>;
};

const Container = styled.div(({}: { minHeight?: number }) => ({
  maxWidth: 390,
  marginLeft: "auto",
  marginRight: "auto",
  minHeight: "calc(var(--vh, 1vh) * 100)",
  overflowY: "hidden",
  backgroundColor: "rgb(253, 253, 150)",
  position: "relative",
}));

export default Layout;
