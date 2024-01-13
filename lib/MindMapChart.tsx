//airbnb.io/visx/docs/responsive

import React, { useMemo } from "react";
import { Group } from "@visx/group";
import { Tree, hierarchy } from "@visx/hierarchy";
import { LinkHorizontal } from "@visx/shape";
import { TreeNode } from "./TreeNode";
import { Node } from "./Node";

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

export type MindMapChartProps = {
  tree: TreeNode;
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  onClick?: (names: TreeNode) => void;
  transform?: (n: TreeNode) => TreeNode;
};

export default function MindMapChart({
  tree,
  width = 400,
  height = 400,
  margin = defaultMargin,
  onClick = () => {},
  transform = (n) => n,
}: MindMapChartProps) {
  const data = useMemo(() => hierarchy(tree), [tree]);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  return (
    <svg width={width} height={height}>
      <Tree<TreeNode> root={data} size={[yMax, xMax]}>
        {(tree) => (
          <Group top={margin.top} left={margin.left}>
            {tree.links().map((link, i) => (
              <LinkHorizontal key={`link-${i}`} data={link} className="link" />
            ))}
            {tree.descendants().map((node, i) => (
              <Node
                key={`node-${i}`}
                node={{ ...node, data: transform(node.data) }}
                onClick={onClick}
              />
            ))}
          </Group>
        )}
      </Tree>
    </svg>
  );
}
