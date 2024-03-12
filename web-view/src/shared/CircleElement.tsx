"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";

interface CircleElementProps {
  children: ReactNode;
  size: number;
  color?: string;
  isShadow?: boolean;
  style?: React.CSSProperties;
}

const CircleElement = (props: CircleElementProps) => {
  const shadowElement = {
    boxShadow: "4px 6px 0px black",
    border: "1px solid black",
  };

  return (
    <StyledCircle
      {...props}
      style={props.style && props.isShadow ? shadowElement : undefined}
    >
      {props.children}
    </StyledCircle>
  );
};

interface StyledCircleProps {
  size: number;
  color?: string;
}

const StyledCircle = styled.div<StyledCircleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 60px;
`;
