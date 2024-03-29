import {NotionPostType} from '@/shared/model';
import getNotionPage from '../queries/get-notion-page';
import ConvertPageToPostList from '../services/convert-page-to-postList';

export default async function useNotionPage(pageId: string) {
  const recordMap = await getNotionPage(pageId);
  const notionPostList: NotionPostType[] =
    await ConvertPageToPostList(recordMap);
  return {notionPostList};
}
