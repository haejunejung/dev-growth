"use client";

import { HStack, VStack } from "../shared/Stack";
import HomeBackground from "./HomeBackground";
import BoxElement from "../shared/BoxElement";
import StyledTextElement from "./StyledTextElement";
import useIconURLStore from "@/utils/stores/useIconModuleStore";
import Link from "next/link";
import { ROUTES } from "../../utils/constants";

const HomeContainer = () => {
  const WELCOME = ["W", "E", "L", "C", "O", "M", "LAST_E"];
  const iconURLs = useIconURLStore() as any;

  console.log(iconURLs);

  return (
    <VStack width={390} height={"100vh"}>
      <HomeBackground />
      <VStack
        alignItems="center"
        justifyContent="center"
        height={"100%"}
        gap={32}
        style={{ zIndex: 1 }}
      >
        <HStack>
          {WELCOME.map((letter, index) => (
            <StyledTextElement text={letter} key={index} />
          ))}
        </HStack>
        <BoxElement
          width={64}
          height={64}
          color="white"
          style={{
            transform: "rotate(45deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href={ROUTES.HOME}>
            {
              <img
                src={iconURLs?.IcRight_48} // Access the 'IcRight_48' property correctly
                style={{
                  transform: "rotate(-45deg)",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              />
            }
          </Link>
        </BoxElement>
      </VStack>
    </VStack>
  );
};

export default HomeContainer;
