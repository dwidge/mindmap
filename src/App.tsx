import React from "react";
import styled from "styled-components";
import { Fill, Center } from "../lib/Flex";
import { rootTree, treeString } from "../lib/utils/treeString";
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
            <MindMap tree={rootTree("root", treeString(treeText, "  "))} />
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

const Foreground = styled(Fill)`
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
