import {VStack} from '@/shared/ui';
import {useNotionPage} from '@/shared/api';
import NotionPage from './NotionPage';

export default async function CommunityDetailPage({id}: {id: string}) {
  const {recordMap} = await useNotionPage(id);

  return (
    <VStack
      height="100%"
      backgroundColor="white"
      paddingHorizontal="20"
      paddingVertical="20"
      gap="20"
    >
      <NotionPage recordMap={recordMap} />
    </VStack>
  );
}
