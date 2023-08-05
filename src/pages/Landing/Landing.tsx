import styled from 'styled-components';

function Landing() {
  return <StAppWrapper>메인입니다</StAppWrapper>;
}

export default Landing;

const StAppWrapper = styled.div`
  ${({ theme }) => theme.fonts.Headline_01};
`;
