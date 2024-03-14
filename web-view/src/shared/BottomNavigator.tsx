"use client";

import { ROUTES } from "@/utils/constants";
import BoxElement from "./BoxElement";
import Link from "next/link";
import { TextElement } from "./TextElement";
import { HStack, VStack } from "./Stack";
import useIconURLStore from "@/utils/stores/useIconURLStore";

interface IconURLs {
  IcYoutube: string;
  IcGithub: string;
  IcBlog: string;
}

const BottomNavigator = () => {
  const iconURLs = useIconURLStore() as IconURLs;

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
            <img src={iconURLs["IcYoutube"]} width={30} height={30} />
            <TextElement textStyle="C1">Youtube</TextElement>
          </VStack>
        </Link>
        <Link href={ROUTES.GITHUB}>
          <VStack alignItems="center">
            <img src={iconURLs["IcGithub"]} width={30} height={30} />
            <TextElement textStyle="C1">Github</TextElement>
          </VStack>
        </Link>
        <Link href={ROUTES.BLOG}>
          <VStack alignItems="center">
            <img src={iconURLs["IcBlog"]} width={30} height={30} />
            <TextElement textStyle="C1">Tech</TextElement>
          </VStack>
        </Link>
      </HStack>
    </BoxElement>
  );
};

export default BottomNavigator;
