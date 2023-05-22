import React, { ReactNode } from "react";
import styled from "styled-components";
import EasyPanZoom from "react-easy-panzoom";
import { Relative, Square } from "./Flex";

export default function PanZoom({
  children,
  size = ["100em", "100em"],
  ...opts
}: {
  children: ReactNode;
  size?: [string, string];
}) {
  return (
    <Relative>
      <FillZoom autoCenter {...opts}>
        <Square size={size}>{children}</Square>
      </FillZoom>
    </Relative>
  );
}

const FillZoom = styled(EasyPanZoom)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;
