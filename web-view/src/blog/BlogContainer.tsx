import useColorStore from "@/utils/stores/useColorPaletteStore";
import { HStack, VStack } from "../shared/Stack";
import { TextElement } from "../shared/TextElement";
import BoxElement from "../shared/BoxElement";
import Link from "next/link";
import { ImageElement } from "../shared/ImageElement";
import useIconURLStore from "@/utils/stores/useIconURLStore";
import { TECH_BLOGS } from "@/utils/constants";
import { Spacer } from "../shared/Spacer";
const BlogContainer = () => {
  const colorPalette = useColorStore.getState().colorPalette;
  const iconURLs = useIconURLStore.getState().iconURLs;

  return (
    <VStack>
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
          <TextElement textStyle="T5">Blog</TextElement>
          <TextElement textStyle="C2-bold" color={colorPalette.blue_main}>
            View All
          </TextElement>
        </HStack>

        <VStack gap={20} paddingHorizontal={20} paddingVertical={20}>
          {TECH_BLOGS.map((blog, index) => (
            <BoxElement width={350} height={80} key={index}>
              <Link href={blog.href}>
                <HStack
                  alignItems="center"
                  paddingHorizontal={10}
                  paddingVertical={10}
                  height={"100%"}
                  gap={20}
                >
                  <ImageElement
                    src={blog.src ?? ""}
                    width={60}
                    height={60}
                    style={{ borderRadius: 16 }}
                  />
                  <TextElement textStyle="B1">{blog.alt}</TextElement>
                </HStack>
              </Link>
            </BoxElement>
          ))}
        </VStack>
      </VStack>

      <Spacer height={100} backgroundColor="white" />
    </VStack>
  );
};

export default BlogContainer;
