import {Property} from 'csstype';
import {CSSProperties} from 'react';

/* eslint-disable react/require-default-props */

interface SpacerProps {
  backgroundColor?: Property.BackgroundColor;
  paddingVertical?: Property.Padding;
  paddingHorizontal?: Property.Padding;
  marginVertical?: Property.Margin;
  marginHorizontal?: Property.Margin;
  width?: Property.Width;
  height?: Property.Height;
  style?: CSSProperties;
}

function Spacer({
  backgroundColor,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  width,
  height,
  style,
}: SpacerProps) {
  return (
    <div
      style={{
        display: 'block',
        backgroundColor,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        margin: `${marginVertical}px ${marginHorizontal}px`,
        width: `${width}px`,
        height: `${height}px`,
        ...style,
      }}
    />
  );
}

export default Spacer;
