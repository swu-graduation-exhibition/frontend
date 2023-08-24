import styled, { css } from 'styled-components';

interface CommentData {
  from: string;
  date: string;
  content: string;
}

interface CommnetBoxProps {
  commentData: CommentData;
  lastElement: boolean;
}

const CommentBox = ({ commentData, lastElement }: CommnetBoxProps) => {
  const { from, date, content } = commentData;
  return (
    <Container lastElement={lastElement}>
      <CommentInfoBox>
        <Name>{from}</Name>
        <Date>{date}</Date>
      </CommentInfoBox>
      <Content>{content}</Content>
    </Container>
  );
};

export default CommentBox;

const Container = styled.article<{ lastElement: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 5.6rem 4.8rem;

  border-bottom: ${({ lastElement, theme }) =>
    lastElement ? `1px solid ${theme.colors.Grayscales_400}` : null};
`;

const CommentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.3rem;
  min-width: 18.3rem;
`;

const Name = styled.span(({ theme }) => theme.fonts.Subtitle_04);
const Date = styled.span(
  ({ theme }) => theme.fonts.Caption_03,
  css`
    color: ${({ theme }) => theme.colors.Grayscales_500};
  `,
);

const Content = styled.span(({ theme }) => theme.fonts.Caption_03);
