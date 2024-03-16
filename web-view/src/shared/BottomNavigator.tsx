import { ROUTES } from "@/utils/constants";
import BoxElement from "./BoxElement";
import Link from "next/link";
import { TextElement } from "./TextElement";
import { HStack, VStack } from "./Stack";
import useIconURLStore from "@/utils/stores/useIconURLStore";

const BottomNavigator = () => {
  const iconURLs = useIconURLStore.getState().iconURLs;

  return (
    <HStack paddingHorizontal={20}>
      <BoxElement
        width={350}
        height={60}
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: 350,
          padding: "24px 0",
          position: "fixed",
          bottom: 10,
          zIndex: 2,
          backgroundColor: "white",
        }}
      >
        <HStack
          gap={20}
          alignItems="center"
          justifyContent="space-around"
          height={"100%"}
        >
          <TabItem
            href={ROUTES.YOUTUBE}
            src={iconURLs.IcYoutube ?? ""}
            alt={"Youtube"}
          />
          <TabItem
            href={ROUTES.GITHUB}
            src={iconURLs.IcGithub ?? ""}
            alt={"Github"}
          />
          <TabItem
            href={ROUTES.BLOG}
            src={iconURLs.IcBlog ?? ""}
            alt={"Blog"}
          />
        </HStack>
      </BoxElement>
    </HStack>
  );
};

const TabItem = ({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) => {
  return (
    <Link href={href}>
      <VStack alignItems="center">
        <img src={src} width={24} height={24} />
        <TextElement textStyle="C1">{alt}</TextElement>
      </VStack>
    </Link>
  );
};

export default BottomNavigator;
