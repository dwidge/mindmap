import React from "react";
import styled from "styled-components";
import { Fill } from "./Flex";

export function Aspect({ a = 1, children }) {
  return (
    <Outer a={a}>
      <Inner>{children}</Inner>
    </Outer>
  );
}

const Outer = styled.div`
  width: 100%;
  padding-top: ${({ a = 1 }) => (100 / a) | 0}%;
  position: relative;
`;
const Inner = styled(Fill)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
