import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <h1>NOMADCODERS Challenge</h1>
      <Circle />
    </Wrapper>
  );
}

export default App;
