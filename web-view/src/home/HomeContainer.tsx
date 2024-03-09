"use client";

import useColorStore from "@/utils/stores/useColorModuleStore";
import { VStack } from "../shared/Stack";
import HomeBackground from "./HomeBackground";
import { ImageElement } from "../shared/ImageElement";
import profile from "@/public/profile.svg";
import { TextElement } from "../shared/TextElement";
import BoxElement from "../shared/BoxElement";
import { ButtonElement } from "../shared/ButtonElement";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";

const HomeContainer = () => {
  const colorPalette: any = useColorStore();

  return (
    <VStack width={390} height={"100vh"}>
      <HomeBackground />
      <VStack
        alignItems="center"
        justifyContent="center"
        height={"100%"}
        gap={16}
      >
        <ImageElement
          src={profile}
          width={120}
          height={120}
          style={{ paddingBottom: 20 }}
        />
        <TextElement textStyle="T1">
          Welcome to <span style={{ color: "#FF4911" }}>developer growth</span>
        </TextElement>
        <BoxElement width={270} height={90} color={"#FFFF00"}>
          <ButtonElement fullWidth={true}>
            <Link href={ROUTES.YOUTUBE}>
              <TextElement textStyle="T1">DEV</TextElement>
            </Link>
          </ButtonElement>
        </BoxElement>
      </VStack>
    </VStack>
  );
};

export default HomeContainer;
