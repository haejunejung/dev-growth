import { HStack, VStack } from "../shared/Stack";
import useColorStore from "@/utils/stores/useColorPaletteStore";
import { TextElement } from "../shared/TextElement";
import BoxElement from "../shared/BoxElement";
import GridElement from "../shared/GridElement";
import { ImageElement } from "../shared/ImageElement";
import Link from "next/link";
import BottomNavigator from "../shared/BottomNavigator";
import { TECH_YOUTUBES } from "@/utils/constants";
import { Spacer } from "../shared/Spacer";

const YoutubeContainer = () => {
  const colorPalette = useColorStore.getState().colorPalette;

  return (
    <VStack height={"100%"}>
      <VStack backgroundColor={colorPalette.red_main}>
        <HStack
          paddingHorizontal={20}
          paddingVertical={20}
          justifyContent="space-between"
        ></HStack>
      </VStack>

      <VStack
        backgroundColor="white"
        height={"100%"}
        style={{
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
          paddingHorizontal={20}
          paddingVertical={20}
        >
          <TextElement textStyle="T5">Youtube</TextElement>
          <TextElement textStyle="C2-bold" color={colorPalette.blue_main}>
            View All
          </TextElement>
        </HStack>

        <GridElement gap={20} paddingHorizontal={20} paddingVertical={20}>
          {TECH_YOUTUBES.map((youtube, index) => (
            <BoxElement width={160} height={160} key={index}>
              <Link href={youtube.href}>
                <ImageElement
                  src={youtube.src}
                  width={160}
                  height={160}
                  alt={youtube.alt}
                  style={{ borderRadius: 16 }}
                />
              </Link>
            </BoxElement>
          ))}
        </GridElement>
      </VStack>
      <Spacer height={100} backgroundColor="white" />
    </VStack>
  );
};

export default YoutubeContainer;
