import {TECH_BLOGS} from '@/shared/consts';
import {useColorPaletteStore} from '@/shared/stores';
import {Grid, HStack, Image, ShadowBox, Text} from '@/shared/ui';
import {Group, Layout} from '@/widgets/ui';
import Link from 'next/link';

export default function BlogPage() {
  const {colorPalette} = useColorPaletteStore.getState();

  return (
    <Layout>
      <Group>
        <Group.Header>
          <Group.Title title="Blog" />
          <Group.Option option="View All" color={colorPalette.blue_main} />
        </Group.Header>
        <Group.Section>
          <Grid gridTemplateColumns="repeat(1, 1fr)" gap="20">
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
          </Grid>
        </Group.Section>
      </Group>
    </Layout>
  );
}
