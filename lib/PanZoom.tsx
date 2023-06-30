import React, { CSSProperties } from "react";
import styled from "styled-components";
import EasyPanZoom from "react-easy-panzoom";
import { Aspect } from "./Aspect";

export default function PanZoom({
  children,
  style,
  aspectRatio,
}: React.PropsWithChildren<{
  style?: CSSProperties;
  aspectRatio?: number;
}>) {
  return (
    <Aspect aspectRatio={aspectRatio}>
      <FillZoom style={style} autoCenter>
        {children}
      </FillZoom>
    </Aspect>
  );
}

const FillZoom = styled(EasyPanZoom)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  box-sizing: border-box;
`;
