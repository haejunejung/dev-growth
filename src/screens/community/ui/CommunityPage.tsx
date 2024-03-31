import {useNotionPostList} from '@/shared/api';
import {useColorPaletteStore} from '@/shared/stores';
import {Grid, HStack, ShadowBox, Text, VStack} from '@/shared/ui';
import {Group, Layout} from '@/widgets/ui';
import Link from 'next/link';

export default async function CommunityPage() {
  const {colorPalette} = useColorPaletteStore.getState();
  const {notionPostList} = await useNotionPostList(
    'b64da9383fbb41e6bfa37ec3ae8f1bfe',
  );

  return (
    <Layout>
      <Group>
        <Group.Header>
          <Group.Title title="Community" />
          <Group.Option option="View All" color={colorPalette.blue_main} />
        </Group.Header>
        <Group.Section>
          <Grid gridTemplateColumns="repeat(1, 1fr)" gap="20">
            {notionPostList.map(post => (
              <ShadowBox key={post.id} width={350} height={150}>
                <VStack paddingHorizontal="20" paddingVertical="20" gap="20">
                  <HStack alignItems="center" justifyContent="space-between">
                    <HStack alignItems="center" gap="10">
                      <VStack>
                        <Text textStyle="B1" style={{textAlign: 'left'}}>
                          {post.author}
                        </Text>
                      </VStack>
                    </HStack>
                  </HStack>
                  <Link href={`/community/${post.id}`}>
                    <VStack height="80">
                      <Text textStyle="B1" style={{textAlign: 'left'}}>
                        {post.title}
                      </Text>
                      <Text textStyle="C1" style={{textAlign: 'left'}}>
                        {post.description}
                      </Text>
                    </VStack>
                  </Link>
                </VStack>
              </ShadowBox>
            ))}
          </Grid>
        </Group.Section>
      </Group>
    </Layout>
  );
}
