"use client";

import useIconURLStore from "@/utils/stores/useIconModuleStore";
import CircleElement from "../shared/CircleElement";
import { HStack, VStack } from "../shared/Stack";
import { Spacer } from "../shared/Spacer";
import useColorStore from "@/utils/stores/useColorModuleStore";
import { TextElement } from "../shared/TextElement";
import BoxElement from "../shared/BoxElement";
import GridElement from "../shared/GridElement";

const HomeContainer = () => {
  const colorPalette = useColorStore() as any;
  const iconURLs = useIconURLStore() as any;

  return (
    <VStack height={"100vh"}>
      <VStack backgroundColor={colorPalette.red_main}>
        <Spacer height={48} />
        <HStack
          paddingHorizontal={20}
          paddingVertical={20}
          justifyContent="space-between"
        >
          <CircleElement size={48} color="white">
            {
              <img
                src={iconURLs?.IcDev} // Access the 'IcRight_48' property correctly
                style={{
                  alignItems: "center",
                  justifyItems: "center",
                }}
              />
            }
          </CircleElement>

          <HStack gap={16}>
            <CircleElement size={48} color="white">
              {
                <img
                  src={iconURLs?.IcSearch} // Access the 'IcRight_48' property correctly
                  style={{
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                />
              }
            </CircleElement>
            <CircleElement size={48} color="white">
              {
                <img
                  src={iconURLs?.IcNew} // Access the 'IcRight_48' property correctly
                  style={{
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                />
              }
            </CircleElement>
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
          <CircleElement size={48} color={colorPalette.red_main}>
            {
              <img
                src={iconURLs?.IcMenu} // Access the 'IcRight_48' property correctly
                style={{
                  alignItems: "center",
                  justifyItems: "center",
                }}
              />
            }
          </CircleElement>
          <CircleElement size={48} color={colorPalette.red_main}>
            {
              <img
                src={iconURLs?.IcBlog} // Access the 'IcRight_48' property correctly
                style={{
                  alignItems: "center",
                  justifyItems: "center",
                }}
              />
            }
          </CircleElement>
          <CircleElement size={48} color={colorPalette.red_main}>
            {
              <img
                src={iconURLs?.IcYoutube} // Access the 'IcRight_48' property correctly
                style={{
                  alignItems: "center",
                  justifyItems: "center",
                }}
              />
            }
          </CircleElement>
          <CircleElement size={48} color={colorPalette.red_main}>
            {
              <img
                src={iconURLs?.IcGithub} // Access the 'IcRight_48' property correctly
                style={{
                  alignItems: "center",
                  justifyItems: "center",
                }}
              />
            }
          </CircleElement>
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
          {Array.from({ length: 6 }).map((_, index) => (
            <BoxElement width={160} height={160} key={index}>
              {
                <img
                  src={
                    "https://yt3.googleusercontent.com/QrgmVSc0XrlU2-HvapuC-MiN4-NHmtHt1tgvaMdMbXXEX1GDzOhJkfBHnSOalo7IFLMOemaO=s176-c-k-c0x00ffffff-no-rj"
                  } // Access the 'IcRight_48' property correctly
                  style={{
                    alignItems: "center",
                    justifyItems: "center",
                    objectFit: "cover",
                  }}
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
