import {Property} from 'csstype';
import {CSSProperties, ReactNode} from 'react';

/* eslint-disable react/require-default-props */

interface HStackProps {
  children: ReactNode;
  flex?: Property.Flex;
  backgroundColor?: Property.BackgroundColor;
  paddingVertical?: Property.Padding;
  paddingHorizontal?: Property.Padding;
  gap?: Property.Gap;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  width?: Property.Width;
  height?: Property.Height;
  position?: Property.Position;
  top?: Property.Top;
  bottom?: Property.Bottom;
  style?: CSSProperties;
}

function HStack({
  children,
  flex,
  backgroundColor,
  paddingVertical,
  paddingHorizontal,
  gap,
  alignItems,
  justifyContent,
  width,
  height,
  position,
  top,
  bottom,
  style,
}: HStackProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex,
        backgroundColor,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        gap: `${gap}px`,
        alignItems,
        justifyContent,
        width: `${width}px`,
        height: `${height}px`,
        position,
        top,
        bottom,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default HStack;
