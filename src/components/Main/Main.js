import React from "react";
import styled from "styled-components";
import BrowseAll from "./BrowseAll";
import Navbar from "./Navbar";

function Main() {
  return (
    <MainComponent className="p-2 rounded-3 bg-info">
      <Navbar />
      <BrowseAll />
    </MainComponent>
  );
}

export default Main;

const MainComponent = styled.div`
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column; 
  overflow: hidden;
`;
