import React from "react";
import styled from "styled-components";
import { Fill } from "./Flex";

export function Aspect({
  aspectRatio = 1,
  children,
}: React.PropsWithChildren<{ aspectRatio?: number }>) {
  return (
    <Outer style={{ ["--aspectRatio" as string]: aspectRatio }}>
      <Fill>{children}</Fill>
    </Outer>
  );
}

const Outer = styled.div`
  position: relative;
  display: grid;
  flex: auto;

  &:before {
    content: "";
    display: inline-block;
    padding-top: calc((1 / (var(--aspectRatio))) * 100%);
  }
  > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
