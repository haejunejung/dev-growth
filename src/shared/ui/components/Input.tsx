/* eslint-disable react/require-default-props */

import {ChangeEventHandler, CSSProperties, RefObject} from 'react';

interface InputProps {
  ref: RefObject<HTMLInputElement>;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  maxLength: number;
  style?: CSSProperties;
}

function Input({
  ref,
  value,
  onChange,
  placeholder,
  maxLength,
  style,
}: InputProps) {
  return (
    <input
      type="text"
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      style={style}
    />
  );
}

export default Input;
