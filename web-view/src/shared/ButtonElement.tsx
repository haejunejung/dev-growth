"use client";

import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ButtonElementProps {
  children: ReactNode;
  backgroundColor?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const ButtonElement = (props: ButtonElementProps) => {
  return (
    <StyledButton
      {...props}
      backgroundColor={props.backgroundColor}
      width={props.fullWidth ? "100%" : "fit-content"}
      cursor={props.disabled ? "default" : "pointer"}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  width: string;
  backgroundColor?: string;
  cursor: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => props.cursor};
  align-items: center;
  justify-content: center;
`;
