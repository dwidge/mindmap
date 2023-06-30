import React from "react";
import styled from "styled-components";
import { Fill, Center, Vertical } from "../lib/Flex";
import PanZoom from "../lib/PanZoom";
import MindMap from "../lib/Mindmap";

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

const App: React.FC<{}> = () => {
  return (
    <Background>
      <Foreground>
        <Border>
          <PanZoom>
            <MindMap tree={{ name: "root", children: treeText }} />
          </PanZoom>
        </Border>
      </Foreground>
    </Background>
  );
};

const Border = styled(Fill)`
  background: red;
  border: solid 5px yellow;
  border-radius: 20px;
  overflow: hidden;

  .node circle {
  }

  .node text {
  }
`;

const Foreground = styled(Vertical)`
  background-color: cyan;
  height: 80%;
  min-height: 200px;
  min-width: 200px;
  max-width: 500px;
  padding: 1em;
`;

const Background = styled(Center)`
  background-color: navy;
`;

export default App;
