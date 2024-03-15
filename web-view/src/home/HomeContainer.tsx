import useIconURLStore from "@/utils/stores/useIconURLStore";
import CircleElement from "../shared/CircleElement";
import { HStack, VStack } from "../shared/Stack";
import { Spacer } from "../shared/Spacer";
import useColorStore from "@/utils/stores/useColorPaletteStore";
import { TextElement } from "../shared/TextElement";
import BoxElement from "../shared/BoxElement";
import GridElement from "../shared/GridElement";
import { ImageElement } from "../shared/ImageElement";
import Link from "next/link";

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

  const techs = [
    {
      href: "https://www.youtube.com/@woowatech/videos",
      src: "https://yt3.googleusercontent.com/QrgmVSc0XrlU2-HvapuC-MiN4-NHmtHt1tgvaMdMbXXEX1GDzOhJkfBHnSOalo7IFLMOemaO=s176-c-k-c0x00ffffff-no-rj",
      alt: "우아한 테크",
    },
    {
      href: "https://www.youtube.com/@kakaotech/videos",
      src: "https://yt3.googleusercontent.com/5ZZf-givSJtmaFO7pNCOj91Uhq8CLqQStM28cz-aqXpf-dTnS-TkNr-GZDKzkm_B5KQiV38psg=s176-c-k-c0x00ffffff-no-rj",
      alt: "카카오 테크",
    },
    {
      href: "https://www.youtube.com/@toss_official/videos",
      src: "https://yt3.googleusercontent.com/2bsQ4yzU3k7p2BByX53LR7FRMAsHWFrJtis8WXel6UDzgZsyOcrBgIn_DdRgULJaVikI22uZ=s176-c-k-c0x00ffffff-no-rj",
      alt: "토스 테크",
    },
    {
      href: "https://www.youtube.com/@eo_studio/videos",
      src: "https://yt3.googleusercontent.com/XrGumB6T_nt9exbSOKGB_Tw2Ascr9bcx2QN43k1VeqfwbCKUuDVDlArTSdY18h0OvvfykprbQw=s176-c-k-c0x00ffffff-no-rj",
      alt: "eo 테크",
    },
    {
      href: "https://www.youtube.com/@feconfkorea/videos",
      src: "https://yt3.googleusercontent.com/ytc/AIdro_nhUC6hKUGU2eFxYfZvAtk21mzWBpbcPzPU5UgnnQ=s176-c-k-c0x00ffffff-no-rj",
      alt: "FEConf 테크",
    },
    {
      href: "https://www.youtube.com/@daangntech/videos",
      src: "https://yt3.googleusercontent.com/R0BHC2bWTgyOxHXtX2MD04Mm2PSZZ4qA2SHv5TxuXHnBk5WMGyVx42NJ1MZIgGUY1ZJIXf_5nA=s176-c-k-c0x00ffffff-no-rj",
      alt: "당근 테크",
    },
  ];

  return (
    <VStack height={"100vh"}>
      <VStack backgroundColor={colorPalette.red_main}>
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
          {techs.map((tech, index) => (
            <BoxElement width={160} height={160} key={index}>
              <Link href={tech.href}>
                <ImageElement
                  src={tech.src}
                  width={160}
                  height={160}
                  alt={tech.alt}
                />
              </Link>
            </BoxElement>
          ))}
        </GridElement>
      </VStack>
    </VStack>
  );
};

export default HomeContainer;
