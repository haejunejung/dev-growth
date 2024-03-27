import {Property} from 'csstype';
import {ReactNode} from 'react';

/* eslint-disable react/require-default-props */

interface HeaderProps {
  children: ReactNode;
  flex?: Property.Flex;
  flexDirection?: Property.FlexDirection;
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
}

function Header({
  children,
  flex,
  flexDirection,
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
}: HeaderProps) {
  return (
    <header
      style={{
        display: 'flex',
        flex,
        flexDirection,
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
      }}
    >
      {children}
    </header>
  );
}

export default Header;
