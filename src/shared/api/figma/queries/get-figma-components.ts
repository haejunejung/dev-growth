import {Api} from 'figma-api';
import {FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY} from '../constants';

export default async function getFigmaComponents() {
  const api = new Api({
    personalAccessToken: FIGMA_ACCESS_TOKEN,
  });

  const file = await api.getFile(FIGMA_FILE_KEY);
  return file.components;
}
