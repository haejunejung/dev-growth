import {Image, VStack} from '@/shared/ui';
import {useNotionPage} from '@/shared/api';
import {useIconStore} from '@/shared/stores';
import NotionPage from './NotionPage';

export default async function PostDetailPage({id}: {id: string}) {
  const {recordMap} = await useNotionPage(id);
  const {icons} = useIconStore.getState();

  return (
    <VStack
      height="100%"
      backgroundColor="white"
      paddingHorizontal="20"
      paddingVertical="20"
      gap="20"
    >
      <Image src={icons.IcLinkLeftArrow} width={48} height={48} />
      <NotionPage recordMap={recordMap} />
    </VStack>
  );
}
