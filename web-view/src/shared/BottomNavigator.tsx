import { ROUTES } from "@/utils/constants";
import BoxElement from "./BoxElement";
import Link from "next/link";
import { TextElement } from "./TextElement";
import { HStack, VStack } from "./Stack";
import useIconURLStore from "@/utils/stores/useIconURLStore";
import useColorStore from "@/utils/stores/useColorPaletteStore";

const BottomNavigator = () => {
  const colorPalette = useColorStore.getState().colorPalette;
  const iconURLs = useIconURLStore.getState().iconURLs;

  return (
    <BoxElement
      width={350}
      height={60}
      style={{ position: "absolute", bottom: 30, left: 20 }}
    >
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
    </BoxElement>
  );
};

export default BottomNavigator;
