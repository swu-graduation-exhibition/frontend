import styled from 'styled-components';

function Project() {
  return <StAppWrapper>Project Page</StAppWrapper>;
}

export default Project;

const StAppWrapper = styled.div`
  ${({ theme }) => theme.fonts.Headline_01};
`;
