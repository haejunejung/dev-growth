/* eslint-disable react/require-default-props */

import {Property} from 'csstype';
import {ReactNode} from 'react';

interface ButtonProps {
  children: ReactNode;
  mode?: 'fill' | 'line';
  paddingHorizontal?: Property.Padding;
  paddingVertical?: Property.Padding;
  borderColor?: Property.BorderColor;
  borderRadius?: Property.BorderRadius;
  backgroundColor?: Property.BackgroundColor;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  mode,
  paddingHorizontal,
  paddingVertical,
  borderColor,
  borderRadius,
  backgroundColor,
  fullWidth,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      style={{
        width: fullWidth ? '100%' : 'auto',
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        cursor: disabled ? 'default' : 'pointer',
        borderRadius: borderRadius ?? 0,
        border:
          mode === 'line' ? `1px solid ${borderColor ?? 'black'}` : 'none',
        backgroundColor: mode === 'fill' ? backgroundColor : 'transparent',
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
