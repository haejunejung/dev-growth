import {
  Grid,
  HStack,
  Image,
  ShadowBox,
  Spacer,
  Text,
  VStack,
} from '@/shared/ui';
import {useColorPaletteStore} from '@/shared/stores';
import Link from 'next/link';

export const TECH_YOUTUBES = [
  {
    href: 'https://www.youtube.com/@woowatech/videos',
    src: 'https://yt3.googleusercontent.com/QrgmVSc0XrlU2-HvapuC-MiN4-NHmtHt1tgvaMdMbXXEX1GDzOhJkfBHnSOalo7IFLMOemaO=s176-c-k-c0x00ffffff-no-rj',
    name: '우아한 테크',
  },
  {
    href: 'https://www.youtube.com/@kakaotech/videos',
    src: 'https://yt3.googleusercontent.com/5ZZf-givSJtmaFO7pNCOj91Uhq8CLqQStM28cz-aqXpf-dTnS-TkNr-GZDKzkm_B5KQiV38psg=s176-c-k-c0x00ffffff-no-rj',
    name: '카카오 테크',
  },
  {
    href: 'https://www.youtube.com/@toss_official/videos',
    src: 'https://yt3.googleusercontent.com/2bsQ4yzU3k7p2BByX53LR7FRMAsHWFrJtis8WXel6UDzgZsyOcrBgIn_DdRgULJaVikI22uZ=s176-c-k-c0x00ffffff-no-rj',
    name: '토스 테크',
  },
  {
    href: 'https://www.youtube.com/@eo_studio/videos',
    src: 'https://yt3.googleusercontent.com/XrGumB6T_nt9exbSOKGB_Tw2Ascr9bcx2QN43k1VeqfwbCKUuDVDlArTSdY18h0OvvfykprbQw=s176-c-k-c0x00ffffff-no-rj',
    name: 'eo 테크',
  },
  {
    href: 'https://www.youtube.com/@feconfkorea/videos',
    src: 'https://yt3.googleusercontent.com/ytc/AIdro_nhUC6hKUGU2eFxYfZvAtk21mzWBpbcPzPU5UgnnQ=s176-c-k-c0x00ffffff-no-rj',
    name: 'FEConf 테크',
  },
  {
    href: 'https://www.youtube.com/@daangntech/videos',
    src: 'https://yt3.googleusercontent.com/R0BHC2bWTgyOxHXtX2MD04Mm2PSZZ4qA2SHv5TxuXHnBk5WMGyVx42NJ1MZIgGUY1ZJIXf_5nA=s176-c-k-c0x00ffffff-no-rj',
    name: '당근 테크',
  },
  {
    href: 'https://www.youtube.com/@NHNCloud/videos',
    src: 'https://yt3.googleusercontent.com/wEScuNlTFM5tkYzKAcHTnDT-WfCrrkO6W00XhBaiQzWFZQpeEBzKAOUOsD76xlHovnHl14zSFQ=s176-c-k-c0x00ffffff-no-rj',
    name: 'NHN Cloud 테크',
  },
];

function YoutubePage() {
  const {colorPalette} = useColorPaletteStore.getState();

  return (
    <VStack>
      <VStack backgroundColor={colorPalette.red_main}>
        <div
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 20,
            justifyContent: 'space-between',
          }}
        />
      </VStack>

      <VStack
        backgroundColor="white"
        height="100%"
        style={{
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
          paddingHorizontal="20"
          paddingVertical="20"
        >
          <Text textStyle="T5">Blog</Text>
          <Text textStyle="C2-bold" color={colorPalette.blue_main}>
            View All
          </Text>
        </HStack>

        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          gap="20"
          paddingHorizontal="20"
          paddingVertical="20"
        >
          {TECH_YOUTUBES.map(youtube => (
            <ShadowBox width={160} height={160} key={youtube.name}>
              <Link href={youtube.href}>
                <Image
                  src={youtube.src}
                  width={160}
                  height={160}
                  alt={youtube.name}
                  style={{borderRadius: 16}}
                />
              </Link>
            </ShadowBox>
          ))}
        </Grid>
      </VStack>

      <Spacer height="100" backgroundColor="white" />
    </VStack>
  );
}

export default YoutubePage;
