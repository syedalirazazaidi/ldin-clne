import React from "react";
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
  background-color: #f3f2ef;
`;
