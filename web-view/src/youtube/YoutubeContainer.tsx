import Link from "next/link";
import BoxElement from "../shared/BoxElement";
import { HStack, VStack } from "../shared/Stack";
import { Spacer } from "../shared/Spacer";

const SelectedButton = ({
  href,
  imageUrl,
}: {
  href: string;
  imageUrl: string;
}) => {
  return (
    <BoxElement width={50} height={50}>
      <Link href={href}>
        <img
          src={imageUrl}
          width={50}
          height={50}
          style={{ borderRadius: 16, border: "1px solid #000000" }}
        />
      </Link>
    </BoxElement>
  );
};

const YoutubeContainer = () => {
  const techs = {
    우아한테크: {
      href: "https://www.youtube.com/@woowatech/videos",
      imageUrl:
        "https://yt3.googleusercontent.com/QrgmVSc0XrlU2-HvapuC-MiN4-NHmtHt1tgvaMdMbXXEX1GDzOhJkfBHnSOalo7IFLMOemaO=s176-c-k-c0x00ffffff-no-rj",
    },
    FEConf: {
      href: "https://www.youtube.com/@feconfkorea/videos",
      imageUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_nhUC6hKUGU2eFxYfZvAtk21mzWBpbcPzPU5UgnnQ=s176-c-k-c0x00ffffff-no-rj",
    },
    토스: {
      href: "https://www.youtube.com/@toss_official/videos",
      imageUrl:
        "https://yt3.googleusercontent.com/2bsQ4yzU3k7p2BByX53LR7FRMAsHWFrJtis8WXel6UDzgZsyOcrBgIn_DdRgULJaVikI22uZ=s176-c-k-c0x00ffffff-no-rj",
    },
    카카오: {
      href: "https://www.youtube.com/@kakaotech/videos",
      imageUrl:
        "https://yt3.googleusercontent.com/5ZZf-givSJtmaFO7pNCOj91Uhq8CLqQStM28cz-aqXpf-dTnS-TkNr-GZDKzkm_B5KQiV38psg=s176-c-k-c0x00ffffff-no-rj",
    },
  };

  return (
    <VStack gap={16}>
      <Spacer height={54} />
      <HStack alignItems="center" justifyContent="space-around">
        {Object.entries(techs).map(([key, value], index) => (
          <SelectedButton
            key={key}
            href={value.href}
            imageUrl={value.imageUrl}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default YoutubeContainer;
