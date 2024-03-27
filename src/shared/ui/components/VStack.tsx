import {Property} from 'csstype';
import {ReactNode} from 'react';

/* eslint-disable react/require-default-props */

interface VStackProps {
  children: ReactNode;
  flex?: Property.Flex;
  backgroundColor?: Property.BackgroundColor;
  paddingVertical?: Property.Padding;
  paddingHorizontal?: Property.Padding;
  gap?: Property.Gap;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  width?: Property.Width;
  hegiht?: Property.Height;
  position?: Property.Position;
  top?: Property.Top;
  bottom?: Property.Bottom;
}

function VStack({
  children,
  flex,
  backgroundColor,
  paddingVertical,
  paddingHorizontal,
  gap,
  alignItems,
  justifyContent,
  width,
  hegiht,
  position,
  top,
  bottom,
}: VStackProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex,
        backgroundColor,
        padding: `${paddingVertical} ${paddingHorizontal}`,
        gap,
        alignItems,
        justifyContent,
        width,
        height: hegiht,
        position,
        top,
        bottom,
      }}
    >
      {children}
    </div>
  );
}

export default VStack;
