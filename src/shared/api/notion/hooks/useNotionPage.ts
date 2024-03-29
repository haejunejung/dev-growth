import getNotionPage from '../queries/get-notion-page';

export default async function useNotionPage(pageId: string) {
  const recordMap = await getNotionPage(pageId);

  return {recordMap};
}
