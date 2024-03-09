"use client";

import { Property } from "csstype";
import Image from "next/image";
import React, { CSSProperties } from "react";

type SafeNumber = number | `${number}`;

interface ImageElementProps {
  src: string;
  alt?: string;
  height: SafeNumber;
  width: SafeNumber;
  onClick?: () => void;
  objectFit?: Property.ObjectFit;
  objectPosition?: Property.ObjectPosition;
  style?: CSSProperties;
}

export const ImageElement = (props: ImageElementProps) => {
  return (
    <Image
      alt={props.alt ?? "이미지 없음"}
      src={props.src}
      height={props.height}
      width={props.width}
      objectFit={props.objectFit ?? "cover"}
      style={{ ...props.style }}
      onClick={props.onClick}
    />
  );
};
