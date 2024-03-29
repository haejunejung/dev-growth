import {useNotionPostList} from '@/shared/api';
import {useColorPaletteStore, useIconStore} from '@/shared/stores';
import {HStack, Image, ShadowBox, Spacer, Text, VStack} from '@/shared/ui';
import Link from 'next/link';

export default async function CommunityPage() {
  const {colorPalette} = useColorPaletteStore.getState();
  const {icons} = useIconStore.getState();
  const {notionPostList} = await useNotionPostList(
    'b64da9383fbb41e6bfa37ec3ae8f1bfe',
  );

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
          <Text textStyle="T5">Community</Text>
          <Text textStyle="C2-bold" color={colorPalette.blue_main}>
            View All
          </Text>
        </HStack>

        <VStack gap="20" paddingHorizontal="20" paddingVertical="20">
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
                  <Image src={icons.IcKebab} width={24} height={24} />
                </HStack>
                <Link href={`/community/${post.id}`}>
                  <VStack>
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
        </VStack>

        <Spacer height="100" backgroundColor="white" />
      </VStack>
    </VStack>
  );
}
