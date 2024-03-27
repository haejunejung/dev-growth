import getFigmaStyles from '../queries/get-figma-styles';
import convertStylesToColorPalette from '../services/convert-styles-to-color-palette';

export default async function useColors() {
  const styles = await getFigmaStyles();
  const colorPalette = convertStylesToColorPalette(styles);

  return {colorPalette};
}
