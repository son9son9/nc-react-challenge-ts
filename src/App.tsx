import React, { useState } from "react";
import styled from "styled-components";
import Router from "./Router";

const AppWrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Router />
    </AppWrapper>
  );
}

export default App;
