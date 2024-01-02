import React from "react";
import Graph from "../lib/Graph";

const nodes = [
  { name: "Node 1", x: 50, y: 50 },
  { name: "Node 2", x: 50, y: 150 },
  { name: "Node 3", x: 250, y: 350 },
  { name: "Node 4", x: 200, y: 150 },
];

const edges = [
  { source: 0, target: 1 },
  { source: 1, target: 2 },
  { source: 2, target: 3 },
  { source: 1, target: 3 },
  { source: 0, target: 3 },
];

export default function GraphDemo() {
  return <Graph nodes={nodes} edges={edges} />;
}
