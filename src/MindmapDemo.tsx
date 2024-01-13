import React, { useState } from "react";
import { Vertical, Square } from "../lib/Flex";
import PanZoom from "../lib/PanZoom";
import { MindMapSelector, MindMapText } from "../lib";
import { Aspect } from "../lib/Aspect";
import styled from "styled-components";
import { treeNode, textNode } from "treeData";
import { TreeNode } from "../lib/TreeNode";

export default function MindmapDemo() {
  const [selectNode, setSelectNode] = useState<TreeNode>();
  return (
    <Vertical>
      <Border>
        <Aspect>
          <MindMapSelector
            tree={treeNode}
            select={[selectNode, setSelectNode]}
          />
        </Aspect>
        {selectNode ? JSON.stringify(selectNode) : "No selection"}
        <PanZoom style={{ background: "gray" }}>
          <Square size={["200em", "200em"]}>
            <MindMapText text={{ name: "root", children: [textNode] }} />
          </Square>
        </PanZoom>
      </Border>
    </Vertical>
  );
}

const Border = styled(Vertical)`
  background: pink;
  border: solid 5px yellow;
  border-radius: 20px;
  overflow: hidden;

  .node text {
    fill: green;
    font-family: Arial;
  }
  .link {
    fill: none;
    stroke: purple;
    stroke-width: 1;
  }

  .node rect {
    fill: red;
    stroke: yellow;
    stroke-width: 1;
  }

  .node.parent rect {
    stroke-dasharray: 2, 2;
  }

  .node.selected rect {
    stroke-width: 3;
  }
`;
