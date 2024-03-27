/* eslint-disable react/require-default-props */

import {Property} from 'csstype';
import {ReactNode} from 'react';

interface ButtonProps {
  children: ReactNode;
  mode: 'fill' | 'line';
  padding?: Property.Padding;
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
  padding,
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
        padding,
        width: fullWidth ? '100%' : 'auto',
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
