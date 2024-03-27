import getFigmaComponents from '../queries/get-figma-components';
import convertComponentsToIcons from '../services/convert-components-to-icons';

export default async function useIcons() {
  const components = await getFigmaComponents();
  const icons = await convertComponentsToIcons(components);
  return {icons};
}
