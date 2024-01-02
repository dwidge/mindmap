import React from "react";
import { Group } from "@visx/group";
import { HierarchyPointNode } from "@visx/hierarchy/lib/types";
import { TreeNode } from "./TreeNode";
import { background, blue, white } from "./colours";

export function Node({ node, onClick }: GraphNode) {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={background}
        stroke={blue}
        strokeWidth={node.data.style?.includes("select") ? 3 : 1}
        strokeDasharray={node.children ? "" : "2,2"}
        rx={10}
        onClick={() => onClick(node.data)}
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: "none" }}
        fill={white}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

interface GraphNode {
  node: HierarchyNode;
  onClick: (names: TreeNode) => void;
}

type HierarchyNode = HierarchyPointNode<TreeNode>;
