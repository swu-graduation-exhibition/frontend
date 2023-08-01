import React from 'react';
import { styled } from 'styled-components';

const App = () => {
  return <StAppWrapper>메인입니다</StAppWrapper>;
};

export default App;

const StAppWrapper = styled.div`
  ${({ theme }) => theme.fonts.Headline_01};
`;
