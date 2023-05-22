// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Item } from "./utils/treeString";
import { Relative } from "./Flex";
import render from "./utils/renderTree";

export default function MindMap({ tree }: { tree: Item }) {
  const svgRef = useRef(null);

  useEffect(() => {
    render(svgRef.current, tree);
  }, [tree]);

  return (
    <Relative>
      <Svg ref={svgRef}></Svg>
    </Relative>
  );
}

const Svg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;

  .node text {
    font: 1em sans-serif;
    fill: black;
  }

  .node circle {
    fill: white;
    stroke: black;
    stroke-width: 2px;
  }

  .link {
    fill: none;
    stroke: black;
    stroke-width: 2px;
    stroke-opacity: 0.2;
  }

  background: silver;
`;
