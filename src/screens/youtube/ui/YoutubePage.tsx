import {Grid, Image, ShadowBox} from '@/shared/ui';
import {useColorPaletteStore} from '@/shared/stores';
import Link from 'next/link';
import {Group, Layout} from '@/widgets/ui';
import {TECH_YOUTUBES} from '@/shared/consts';

function YoutubePage() {
  const {colorPalette} = useColorPaletteStore.getState();

  return (
    <Layout>
      <Group>
        <Group.Header>
          <Group.Title title="Youtube" />
          <Group.Option option="View All" color={colorPalette.blue_main} />
        </Group.Header>
        <Group.Section>
          <Grid gridTemplateColumns="repeat(2, 1fr)" gap="20">
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
        </Group.Section>
      </Group>
    </Layout>
  );
}

export default YoutubePage;
