import React from "react";
import { Vertical, Square } from "../lib/Flex";
import PanZoom from "../lib/PanZoom";
import MindMap from "../lib/Mindmap";
import { Aspect } from "../lib/Aspect";
import styled from "styled-components";

export default function MindmapDemo() {
  return (
    <Vertical>
      <Border>
        <Aspect>
          <MindMap tree={{ name: "root", children: treeText }} />
        </Aspect>
      </Border>
      <PanZoom style={{ background: "orange" }}>
        <Square size={["100em", "100em"]}>
          <MindMap tree={{ name: "root", children: treeText }} />
        </Square>
      </PanZoom>
    </Vertical>
  );
}
const treeText = `
a
  a1
    a1a
  a2
  a3
b
c
d
  d1
  d2
`;

const Border = styled(Vertical)`
  background: red;
  border: solid 5px yellow;
  border-radius: 20px;
  overflow: hidden;

  .node circle {
  }

  .node text {
  }
`;
