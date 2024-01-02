import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export type Node = { name: string; x: number; y: number };
export type Edge = { source: number; target: number };

const Graph = ({
  nodes: oldnodes,
  edges,
}: {
  nodes: Node[];
  edges: Edge[];
}) => {
  const svgRef = useRef(null);
  const [nodes, setNodes] = useState(oldnodes);

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      adjustNodePositions90(oldnodes, edges);
    }
    setNodes([...oldnodes]);
    console.log("n1", oldnodes);
    return;
    const svg = d3.select(svgRef.current);

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(edges).id((d, i) => i)
      )
      .force("charge", d3.forceManyBody().strength(-100))
      .force(
        "center",
        d3.forceCenter(svg.attr("width") / 2, svg.attr("height") / 2)
      );

    simulation.on("tick", () => {
      svg
        .selectAll(".node")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);

      svg
        .selectAll(".link")
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
    });

    return () => {
      simulation.stop();
    };
  }, [oldnodes, edges]);

  return (
    <svg ref={svgRef} width={600} height={400} style={{ background: "beige" }}>
      {edges.map((edge, index) => (
        <line
          key={index}
          x1={nodes[edge.source].x}
          y1={nodes[edge.source].y}
          x2={nodes[edge.target].x}
          y2={nodes[edge.target].y}
          stroke="black"
        />
      ))}
      {nodes.map((node, index) => (
        <circle
          key={index}
          cx={node.x}
          cy={node.y}
          className="node"
          r={10}
          fill="blue"
        />
      ))}
      {nodes.map((node, index) => (
        <text key={index} x={node.x} y={node.y - 15} textAnchor="middle">
          {node.name}
        </text>
      ))}
    </svg>
  );
};

export default Graph;

export function adjustNodePositions(nodes: Node[], edges: Edge[]) {
  // Define the desired distance between nodes connected by an edge
  const desiredDistance = 200;
  // Iterate over each edge
  edges.forEach((edge) => {
    const { source, target } = edge;

    // Get the source and target nodes
    const sourceNode = nodes[source];
    const targetNode = nodes[target];

    // Calculate the current distance between the nodes
    const deltaX = targetNode.x - sourceNode.x;
    const deltaY = targetNode.y - sourceNode.y;
    const currentDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Calculate the force applied to each node based on the desired distance
    const force = ((currentDistance - desiredDistance) / currentDistance) * 0.1;

    // Update the positions of the nodes based on the force
    sourceNode.x += force * deltaX;
    sourceNode.y += force * deltaY;
    targetNode.x -= force * deltaX;
    targetNode.y -= force * deltaY;
  });
}

export function adjustNodePositions90(nodes: Node[], edges: Edge[]) {
  // Define the desired distance between nodes connected by an edge
  const desiredDistance = 200;

  // Iterate over each edge
  edges.forEach((edge) => {
    const { source, target } = edge;

    // Get the source and target nodes
    const sourceNode = nodes[source];
    const targetNode = nodes[target];

    // Calculate the current distance between the nodes
    const deltaX = targetNode.x - sourceNode.x;
    const deltaY = targetNode.y - sourceNode.y;
    const currentDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Calculate the force applied to each node based on the desired distance
    const force = ((currentDistance - desiredDistance) / currentDistance) * 0.1;

    // Calculate the preferred alignment based on the absolute difference between deltaX and deltaY
    const preferredAlignment =
      Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";

    // Update the positions of the nodes based on the force and preferred alignment
    if (preferredAlignment === "horizontal") {
      sourceNode.x += force * deltaX;
      targetNode.x -= force * deltaX;
      sourceNode.y += 0.2 * deltaY;
      targetNode.y -= 0.2 * deltaY;
    } else {
      sourceNode.x += 0.2 * deltaX;
      targetNode.x -= 0.2 * deltaX;
      sourceNode.y += force * deltaY;
      targetNode.y -= force * deltaY;
    }
  });
}
