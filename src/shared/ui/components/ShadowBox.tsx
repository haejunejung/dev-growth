import {CSSProperties, ReactNode} from 'react';

/* eslint-disable react/require-default-props */

interface ShadowBoxProps {
  children: ReactNode;
  width: number;
  height: number;
  color?: string;
  alignItems?: string;
  justifyContent?: string;
  style?: CSSProperties;
}

function ShadowBox({
  children,
  width,
  height,
  color,
  alignItems,
  justifyContent,
  style,
}: ShadowBoxProps) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        alignItems: alignItems ?? 'center',
        justifyContent: justifyContent ?? 'center',
        zIndex: 1,
        boxShadow: '4px 6px 0px black',
        borderRadius: '16px',
        border: '1px solid black',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBox;
