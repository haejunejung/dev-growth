import { ROUTES } from "@/utils/constants";
import BoxElement from "./BoxElement";
import Link from "next/link";
import { TextElement } from "./TextElement";
import { HStack } from "./Stack";

const BottomNavigator = () => {
  return (
    <BoxElement
      width={350}
      height={60}
      style={{ position: "absolute", bottom: 30, left: 20 }}
    >
      <HStack
        gap={20}
        alignItems="center"
        justifyContent="center"
        height={"100%"}
      >
        <Link href={ROUTES.YOUTUBE}>
          <TextElement textStyle="T1">YOUTUBE</TextElement>
        </Link>
        <Link href={ROUTES.GITHUB}>
          <TextElement textStyle="T1">GITHUB</TextElement>
        </Link>
        <Link href={ROUTES.BLOG}>
          <TextElement textStyle="T1">BLOG</TextElement>
        </Link>
      </HStack>
    </BoxElement>
  );
};

export default BottomNavigator;
