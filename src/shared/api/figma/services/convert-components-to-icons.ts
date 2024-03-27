import * as Figma from 'figma-api';
import {iconNames, IconType} from '@/shared/model';
import getFigmaImages from '../queries/get-figma-images';

export default async function convertComponentsToIcons(iconComponents: {
  [iconName: string]: Figma.Component;
}) {
  const ids = Object.keys(iconComponents)
    .map(id => id)
    .join(',');

  const images = await getFigmaImages(ids);

  const getIcon = (iconName: string): string => {
    const icon = Object.values(iconComponents).find(i => i.name === iconName);
    const iconImage = Object.keys(images).find(
      i =>
        i ===
        Object.keys(iconComponents).find(key => iconComponents[key] === icon),
    );

    if (iconImage !== undefined && iconImage !== null) {
      return images[iconImage] as string;
    }

    return '';
  };

  const result = iconNames.reduce<Record<IconType, string>>(
    (acc, iconName) => {
      acc[iconName] = getIcon(iconName);
      return acc;
    },
    {} as Record<IconType, string>,
  );

  return result;
}
