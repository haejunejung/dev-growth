import {useColorPaletteStore} from '@/shared/stores';
import {HStack, Image, ShadowBox, Spacer, Text, VStack} from '@/shared/ui';
import Link from 'next/link';

const TECH_BLOGS = [
  {
    href: 'https://tech.kakaopay.com/',
    src: 'https://tech.kakaopay.com/_astro/thumb.d1ed7fac_ZdSsSI.avif',
    name: '카카오페이 블로그',
  },

  {
    href: 'https://fe-developers.kakaoent.com/',
    src: 'https://fe-developers.kakaoent.com/static/1bda93dd1dec2e1e487f886194b4a9d9/4ce34/thumbnail.png',
    name: '카카오엔터테이먼츠 블로그',
  },

  {
    href: 'https://techblog.woowahan.com/',
    src: 'https://techblog.woowahan.com/wp-content/uploads/2024/03/rep-intro1.png',
    name: '우아한 기술 블로그',
  },

  {
    href: 'https://blog.gangnamunni.com/blog/',
    src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOS40OCAxOS40OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmQyNjc7fS5jbHMtMntmaWxsOiNmZjU0MGY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSLroIjsnbTslrRfMiIgZGF0YS1uYW1lPSLroIjsnbTslrQgMiI+PGcgaWQ9IkdyYXBoaWMiPjxnIGlkPSJBbmRyb2lkIj48ZyBpZD0iU3ltYm9sIj48cGF0aCBpZD0iRm9sZGVkIiBjbGFzcz0iY2xzLTEiIGQ9Ik05LjQ1LDEwSDVBNSw1LDAsMCwxLDEuNDcsOC41NkwxMC45MiwxOGgwYTUsNSwwLDAsMS0xLjQ3LTMuNTRaIi8+PHBhdGggaWQ9IkhlYXJ0IiBjbGFzcz0iY2xzLTIiIGQ9Ik05LjQ1LDBINUE1LDUsMCwwLDAsMS40Nyw4LjU2aDBBNSw1LDAsMCwwLDUsMTBIOS40NXY0LjQ0QTUsNSwwLDAsMCwxMC45MiwxOGgwYTUsNSwwLDAsMCw4LjU2LTMuNTRWMFoiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+',
    name: '강남언니 블로그',
  },

  {
    href: 'https://blog.banksalad.com/tech/',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAeFBMVEVHcEwAtrIAmf8AmP8Am+QACQcAmf8AmP8AmP8Azc0Azc0AyqoAzc0Azc0AzJEAzMwAzMwAzMzzgcQAzMwAy4T0gsb1gcbtfb/0gsb0gcYAzc31gsYAzYAAzYAAzIAAzH8AzYD1gsYAzIAAzID0gcUAzIAAzIAAzYCfweY6AAAAKHRSTlMADa31BgH/nOrw3B7/sTuBUW0u2CnR8A7/aNH//+f/Z7OigZeZUM79IxcNhAAAASdJREFUeAFtjgWCwzAQxBRwmSG4cbn9/w8vU8fHakMjLxBI0ixLc37jekhGb/LwhRsAkQY5Rgl5tOFsFuQEBdMZ/C+ZLxaLJd/lOLZltRBrvsn87TLYLAIbopQdTyZj1HNgRZAChGMd5fabFGjX5d+2gp1K2csdcFES/seiBJgupgkORQScZFXVwLyBGM8PPU72WLXtUcX6UDrHhBanqNqeWoqVCTpv3k6S7ZtKlpP33jrOOnLGEeSlVGVMrzpjQFlVUnJg1odXDl7cYFfdpSS5eXGAbliplBJxnQ542GCjkhMP9Xn62FmgnuKpESTmhfnz6fE4nb2Z15VIOg72DwecpKw31Ya/6at3kiJ5+u/YM1E+SHh09kmnPYMc4HB9dq9X97weiOEHk6MmFfY4Eg8AAAAASUVORK5CYII=',
    name: '뱅크샐러드 블로그',
  },

  {
    href: 'https://toss.tech/tech',
    src: 'https://wp.toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter.png',
    name: '토스 테크 블로그',
  },

  {
    href: 'https://engineering.linecorp.com/ko/blog',
    src: 'https://vos.line-scdn.net/landpress-content-v2_1761/1666854339957.png?updatedAt=1666854341000',
    name: '라인 블로그',
  },

  {
    href: 'https://yozm.wishket.com/magazine/',
    src: 'https://yozm.wishket.com/static/renewal/img/news/Graphic_Banner_Heart_3loop.gif',
    name: '요즘 IT',
  },
];

function BlogPage() {
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

        <VStack gap="20" paddingHorizontal="20" paddingVertical="20">
          {TECH_BLOGS.map(blog => (
            <ShadowBox key={blog.name} width={350} height={80}>
              <Link href={blog.href}>
                <HStack
                  alignItems="center"
                  paddingHorizontal="10"
                  paddingVertical="10"
                  gap="20"
                >
                  <Image
                    src={blog.src}
                    alt={blog.name}
                    width={60}
                    height={60}
                  />
                  <Text textStyle="B1">{blog.name}</Text>
                </HStack>
              </Link>
            </ShadowBox>
          ))}
        </VStack>
      </VStack>

      <Spacer height="100" backgroundColor="white" />
    </VStack>
  );
}

export default BlogPage;
