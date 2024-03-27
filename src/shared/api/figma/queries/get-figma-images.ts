import {Api} from 'figma-api';
import {FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY} from '../constants';

export default async function getFigmaImages(ids: string) {
  const api = new Api({
    personalAccessToken: FIGMA_ACCESS_TOKEN,
  });

  const images = await api.getImage(FIGMA_FILE_KEY, {
    ids,
    scale: 1,
    format: 'svg',
  });

  return images.images;
}
