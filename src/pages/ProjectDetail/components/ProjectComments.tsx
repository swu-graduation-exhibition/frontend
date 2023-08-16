import styled, { css } from 'styled-components';
import CommentInputSection from './CommentInputSection';

const ProjectComments = () => {
  return (
    <Container>
      <HeaderSection>
        <Title>Comments</Title>
        <CommentCount>22</CommentCount>
      </HeaderSection>
      <CommentInputSection />
    </Container>
  );
};

export default ProjectComments;

const Container = styled.section`
  width: 100%;
  margin-top: 9.3rem;

  max-width: 165rem;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  margin-bottom: 4rem;
`;

const Title = styled.div(({ theme }) => theme.fonts.Subtitle_01, css``);

const CommentCount = styled.span(
  ({ theme }) => theme.fonts.Subtitle_01,
  css`
    color: ${({ theme }) => theme.colors.Grayscales_600};

    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
  `,
);
