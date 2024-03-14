"use client";

import React, { CSSProperties } from "react";
import styled from "@emotion/styled";

type SafeNumber = number | `${number}`;

interface ImageElementProps {
  src: string;
  alt?: string;
  width: SafeNumber;
  height: SafeNumber;
  onClick?: () => void;
  style?: CSSProperties;
}

export const ImageElement = (props: ImageElementProps) => {
  return (
    <ImageContainer
      alt={props.alt ?? "이미지 없음"}
      src={props.src}
      height={props.height}
      width={props.width}
      style={{ ...props.style }}
      onClick={props.onClick}
    />
  );
};

const ImageContainer = styled.img({
  objectFit: "cover",
  alignItems: "center",
  justifyItems: "center",
});
