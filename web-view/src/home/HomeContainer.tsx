import useIconURLStore from "@/utils/stores/useIconURLStore";
import CircleElement from "../shared/CircleElement";
import { HStack, VStack } from "../shared/Stack";
import { Spacer } from "../shared/Spacer";
import useColorStore from "@/utils/stores/useColorPaletteStore";
import { TextElement } from "../shared/TextElement";
import BoxElement from "../shared/BoxElement";
import GridElement from "../shared/GridElement";
import { ImageElement } from "../shared/ImageElement";

const IconElement = ({ src, color }: { src: string | null; color: string }) => {
  return (
    <CircleElement size={48} color={color}>
      <ImageElement src={src ?? ""} width={24} height={24} />
    </CircleElement>
  );
};

const HomeContainer = () => {
  const colorPalette = useColorStore.getState().colorPalette;
  const iconURLs = useIconURLStore.getState().iconURLs;

  return (
    <VStack height={"100vh"}>
      <VStack backgroundColor={colorPalette.red_main}>
        <Spacer height={48} />
        <HStack
          paddingHorizontal={20}
          paddingVertical={20}
          justifyContent="space-between"
        >
          <IconElement src={iconURLs.IcDev} color="white" />
          <HStack gap={16}>
            <IconElement src={iconURLs.IcSearch} color="white" />
            <IconElement src={iconURLs.IcNew} color="white" />
          </HStack>
        </HStack>
      </VStack>

      <VStack
        backgroundColor="white"
        height={"100%"}
        style={{
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}
      >
        <HStack justifyContent="space-around" paddingVertical={20}>
          <IconElement src={iconURLs.IcMenu} color={colorPalette.red_main} />
          <IconElement src={iconURLs.IcBlog} color={colorPalette.red_main} />
          <IconElement src={iconURLs.IcYoutube} color={colorPalette.red_main} />
          <IconElement src={iconURLs.IcGithub} color={colorPalette.red_main} />
        </HStack>

        <HStack
          alignItems="center"
          justifyContent="space-between"
          paddingHorizontal={20}
          paddingVertical={20}
        >
          <TextElement textStyle="T5">Collection</TextElement>
          <TextElement textStyle="C2-bold" color={colorPalette.blue_main}>
            View All
          </TextElement>
        </HStack>

        <GridElement gap={20} paddingHorizontal={20} paddingVertical={20}>
          {Array.from({ length: 4 }).map((_, index) => (
            <BoxElement width={160} height={160} key={index}>
              {
                <ImageElement
                  src="https://yt3.googleusercontent.com/QrgmVSc0XrlU2-HvapuC-MiN4-NHmtHt1tgvaMdMbXXEX1GDzOhJkfBHnSOalo7IFLMOemaO=s176-c-k-c0x00ffffff-no-rj"
                  width={160}
                  height={160}
                />
              }
            </BoxElement>
          ))}
        </GridElement>
      </VStack>
    </VStack>
  );
};

export default HomeContainer;
