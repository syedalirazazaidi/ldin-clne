import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Components/Header";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import Wadet from "./Components/Wajet";
import Feed from "./Components/Feed";

function App() {
  return (
    <WrapContainer>
      <Header />
      <Wrap>
        <Sidebar />
        <Feed />
        <Wadet />
      </Wrap>
    </WrapContainer>
  );
}

export default App;
const WrapContainer = styled.div``;
const Wrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: space-evenly; */
  background-color: #f3f2ef;
`;
