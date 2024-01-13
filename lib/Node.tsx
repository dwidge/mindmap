import React from "react";
import { Group } from "@visx/group";
import { HierarchyPointNode } from "@visx/hierarchy/lib/types";
import { TreeNode } from "./TreeNode";
import { splitLinesLimit } from "./splitLinesLimit";

export function Node({ node, onClick }: GraphNode) {
  const label = node.data.name;
  const maxLength = Math.min(30, label.length);
  const lines = splitLinesLimit(label, maxLength);
  const width = maxLength / 4 + 2;
  const height = lines.length;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const selected = !!node.data.style?.includes("select");
  const parent = !!node.children;

  return (
    <Group
      top={node.x}
      left={node.y}
      className={["node", selected && "selected", parent && "parent"].join(" ")}
    >
      <title>{label}</title>
      <rect
        height={height + "em"}
        width={width + "em"}
        y={centerY + "em"}
        x={centerX + "em"}
        rx={10}
        onClick={() => onClick(node.data)}
      />
      {lines.map((line, i) => (
        <text
          dy={i + 0.5 + 0.33 + centerY + "em"}
          fontSize={9}
          textAnchor="middle"
          style={{ pointerEvents: "none" }}
        >
          {line}
        </text>
      ))}
    </Group>
  );
}

interface GraphNode {
  node: HierarchyNode;
  onClick: (names: TreeNode) => void;
}

type HierarchyNode = HierarchyPointNode<TreeNode>;
