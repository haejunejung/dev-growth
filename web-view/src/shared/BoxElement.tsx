"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";

interface BoxElementProps {
  children: ReactNode;
  width: number;
  height: number;
  color?: string;
  alignItems?: string;
  justifyContent?: string;
  style?: React.CSSProperties;
}

const BoxElement = (props: BoxElementProps) => {
  return (
    <StyledBox {...props} style={props.style}>
      {props.children}
    </StyledBox>
  );
};

export default BoxElement;

interface StyledBoxProps {
  width: number;
  height: number;
  color?: string;
  alignItems?: string;
  justifyContent?: string;
}

const StyledBox = styled.div<StyledBoxProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  align-items: ${(props) => props.alignItems} ?? "center";
  justify-content: ${(props) => props.justifyContent} ?? "center";
  z-index: 1;
  box-shadow: 4px 6px 0px black;
  border-radius: 16px;
  border: 1px solid black;
`;
