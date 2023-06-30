import React from "react";
import styled from "styled-components";
import { Center, Vertical } from "../lib/Flex";

import { VictoryBar } from "victory";
import MindmapDemo from "MindmapDemo";

const App: React.FC<{}> = () => {
  return (
    <Background>
      <Foreground>
        <VictoryBar />
        <MindmapDemo />
      </Foreground>
    </Background>
  );
};

const Foreground = styled(Vertical)`
  background-color: cyan;
  min-width: 200px;
  max-width: 400px;
  padding: 1em;
`;

const Background = styled(Center)`
  background-color: navy;
`;

export default App;
