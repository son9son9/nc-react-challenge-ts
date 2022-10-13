import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";

const AppWrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  const [toggleTheme, setToggleTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={toggleTheme}>
      <AppWrapper>
        <Header />
        <Router />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
