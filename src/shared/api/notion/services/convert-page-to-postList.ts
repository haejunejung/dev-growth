import {Block, RecordMap} from 'notion-types';
import {NotionPostType} from '@/shared/model';

/* eslint-disable camelcase */

export default async function ConvertPageToPostList(
  recordMap: RecordMap,
): Promise<NotionPostType[]> {
  const recordMapBlock: RecordMap['block'] = recordMap.block;

  const filteredBlocks = Object.values(recordMapBlock).filter(
    (block: {value: Block; role: string}) =>
      block?.value?.properties?.NTUE !== undefined,
  );

  return filteredBlocks
    .map((block: {value: Block; role: string}) => {
      const {id, properties, format, created_time} = block.value;

      const {NTUE, title, CSjF} = properties;
      const page_icon = format?.page_icon;
      const U_G = properties['U_G]'];

      return {
        id,
        types: NTUE,
        title: `${page_icon !== undefined ? page_icon : ''} ${title}`,
        description: CSjF,
        createdTime: new Date(created_time),
        author: U_G,
      };
    })
    .sort((a, b) => b.createdTime.getTime() - a.createdTime.getTime());
}
