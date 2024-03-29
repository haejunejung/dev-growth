import {VStack} from '@/shared/ui';
import {useNotionPage} from '@/shared/api';
import NotionPage from './NotionPage';

export default async function PostDetailPage({id}: {id: string}) {
  const {recordMap} = await useNotionPage(id);

  return (
    <VStack>
      <NotionPage recordMap={recordMap} />
    </VStack>
  );
}
