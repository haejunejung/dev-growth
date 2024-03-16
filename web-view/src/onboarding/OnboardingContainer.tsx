import { HStack, VStack } from "../shared/Stack";
import BoxElement from "../shared/BoxElement";
import StyledTextElement from "./StyledTextElement";
import Link from "next/link";
import { ROUTES } from "../../utils/constants";
import OnboardingBackground from "./OnboardingBackground";
import useIconURLStore from "@/utils/stores/useIconURLStore";

const OnboardingContainer = () => {
  const WELCOME = ["W", "E", "L", "C", "O", "M", "LAST_E"];
  const iconURLs = useIconURLStore.getState().iconURLs;

  return (
    <VStack width={390} height={"100vh"}>
      <OnboardingBackground />
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
          <Link href={ROUTES.YOUTUBE}>
            {
              <img
                src={iconURLs.IcRight_48 ?? ""} // Add null check and provide a default value
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

export default OnboardingContainer;
