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
  hegiht?: Property.Height;
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
  hegiht,
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
    </header>
  );
}

export default Header;
