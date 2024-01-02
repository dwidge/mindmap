import React, { useState } from "react";
import { Vertical, Square } from "../lib/Flex";
import PanZoom from "../lib/PanZoom";
import { MindMapSelector, MindMapText } from "../lib";
import { Aspect } from "../lib/Aspect";
import styled from "styled-components";
import tree, { deepNode } from "treeData";
import { TreeNode } from "../lib/TreeNode";

export default function MindmapDemo() {
  const [selectNode, setSelectNode] = useState<TreeNode>();
  return (
    <Vertical>
      <Border>
        <Aspect>
          <MindMapSelector
            tree={deepNode}
            select={[selectNode, setSelectNode]}
          />
        </Aspect>
      </Border>
      {selectNode ? JSON.stringify(selectNode) : "No selection"}
      <PanZoom style={{ background: "orange" }}>
        <Square size={["100em", "100em"]}>
          <MindMapText tree={{ name: "root", children: [tree] }} />
        </Square>
      </PanZoom>
    </Vertical>
  );
}

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
