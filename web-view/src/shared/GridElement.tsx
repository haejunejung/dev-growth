"use client";

import styled from "@emotion/styled";

interface GridElementProps {
  children: React.ReactNode;
  gap?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

const GridElement = (props: GridElementProps) => {
  return (
    <GridContainer
      templateColumns="repeat(2, 1fr)"
      gap={props.gap}
      paddingLeft={props.paddingHorizontal}
      paddingRight={props.paddingHorizontal}
      paddingTop={props.paddingVertical}
      paddingBottom={props.paddingVertical}
    >
      {props.children}
    </GridContainer>
  );
};

export default GridElement;

interface GridContainerProps {
  templateColumns?: string;
  gap?: number;
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.templateColumns || "repeat(2, 1fr)"};
  gap: ${(props) => props.gap || 16}px;
  padding-left: ${(props) => props.paddingLeft || props.padding || 0}px;
  padding-right: ${(props) => props.paddingRight || props.padding || 0}px;
  padding-top: ${(props) => props.paddingTop || props.padding || 0}px;
  padding-bottom: ${(props) => props.paddingBottom || props.padding || 0}px;
`;
