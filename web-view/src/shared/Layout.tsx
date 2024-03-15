"use client";

import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div(({}: { minHeight?: number }) => ({
  maxWidth: 390,
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#FF4911",
  position: "relative",
}));

export default Layout;
