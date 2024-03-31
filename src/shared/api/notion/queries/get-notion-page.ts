import {NotionAPI} from 'notion-client';

export default async function getNotionPage(pageId: string) {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(pageId, {fetchCollections: true});
  return recordMap;
}
