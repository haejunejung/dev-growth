import NextImage from 'next/image';
import {Property} from 'csstype';
import {
  ImageLoader,
  OnLoadingComplete,
  PlaceholderValue,
  StaticImport,
} from 'next/dist/shared/lib/get-img-props';
import {CSSProperties} from 'react';

/* eslint-disable react/require-default-props */

interface ImageProps {
  src: string | StaticImport;
  alt?: string;
  width: number | `${number}`;
  height: number | `${number}`;
  fill?: boolean;
  loader?: ImageLoader;
  quality?: number;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  placeholder?: PlaceholderValue;
  blurDataURL?: string;
  unoptimized?: boolean;
  onLoadingComplete?: OnLoadingComplete;
  layout?: string;
  objectFit?: string;
  objectPosition?: string;
  lazyBoundary?: string;
  lazyRoot?: string;
  border?: Property.Border;
  borderRadius?: Property.BorderRadius;
  style?: CSSProperties;
}

function Image({
  src,
  alt,
  width,
  height,
  fill,
  loader,
  quality,
  priority,
  loading,
  placeholder,
  blurDataURL,
  unoptimized,
  onLoadingComplete,
  layout,
  objectFit,
  objectPosition,
  lazyBoundary,
  lazyRoot,
  border,
  borderRadius,
  style,
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt ?? 'alt'}
      width={width}
      height={height}
      fill={fill}
      loader={loader}
      quality={quality}
      priority={priority}
      loading={loading}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      unoptimized={unoptimized}
      onLoadingComplete={onLoadingComplete}
      layout={layout}
      objectFit={objectFit}
      objectPosition={objectPosition}
      lazyBoundary={lazyBoundary}
      lazyRoot={lazyRoot}
      style={{
        border,
        borderRadius,
        ...style,
      }}
    />
  );
}

export default Image;
