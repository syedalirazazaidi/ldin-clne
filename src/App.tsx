import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Components/Header";
import styled from "styled-components";

function App() {
  return (
    <WrapContainer>
      <Header />
    </WrapContainer>
  );
}

export default App;
const WrapContainer = styled.div`
  /* align-items: center;
  display: flex;
  justify-content: center; */
`;
