import React from "react";
import { ScaleSVG } from "@visx/responsive";
import MindMapChart from "./MindMapChart";
import { TreeNode } from "./TreeNode";

export type MindmapProps = {
  tree: TreeNode;
  resolution?: [number, number];
  onClick?: (n: TreeNode) => void;
  transform?: (n: TreeNode) => TreeNode;
};

export default function MindMap({
  tree,
  resolution: [width, height] = [1000, 1000],
  onClick,
  transform,
}: MindmapProps) {
  return (
    <ScaleSVG width={width} height={height}>
      <MindMapChart
        tree={tree}
        width={width}
        height={height}
        onClick={onClick}
        transform={transform}
      />
    </ScaleSVG>
  );
}
