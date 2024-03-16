"use client";

import { ROUTES, UIConstants } from "@/utils/constants";
import BoxElement from "./BoxElement";
import Link from "next/link";
import { TextElement } from "./TextElement";
import { HStack, VStack } from "./Stack";
import useIconURLStore from "@/utils/stores/useIconURLStore";
import useColorStore from "@/utils/stores/useColorPaletteStore";
import styled from "@emotion/styled";

const BottomNavigator = () => {
  const colorPalette = useColorStore.getState().colorPalette;
  const iconURLs = useIconURLStore.getState().iconURLs;

  return (
    <HStack paddingHorizontal={20}>
      <BottomContainer width={350} height={60}>
        <HStack
          gap={20}
          alignItems="center"
          justifyContent="space-around"
          height={"100%"}
        >
          <Link href={ROUTES.YOUTUBE}>
            <VStack alignItems="center">
              <img src={iconURLs.IcYoutube ?? ""} width={24} height={24} />
              <TextElement textStyle="C1">Youtube</TextElement>
            </VStack>
          </Link>
          <Link href={ROUTES.GITHUB}>
            <VStack alignItems="center">
              <img src={iconURLs.IcGithub ?? ""} width={24} height={24} />
              <TextElement textStyle="C1">Github</TextElement>
            </VStack>
          </Link>
          <Link href={ROUTES.BLOG}>
            <VStack alignItems="center">
              <img src={iconURLs.IcBlog ?? ""} width={24} height={24} />
              <TextElement textStyle="C1">Tech</TextElement>
            </VStack>
          </Link>
        </HStack>
      </BottomContainer>
    </HStack>
  );
};

export default BottomNavigator;

export const BottomContainer = styled(BoxElement)({
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  maxWidth: 350,
  padding: "24px 0",
  position: "fixed",
  bottom: 10,
  zIndex: 2,
  backgroundColor: "white",
});
