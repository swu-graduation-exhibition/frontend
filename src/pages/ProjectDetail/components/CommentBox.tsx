import styled, { css } from 'styled-components';
import { CommnetBoxProps } from '../type/comment';

const CommentBox = ({ commentData, $lastelement }: CommnetBoxProps) => {
  const { sender, content, createdAt } = commentData;

  return (
    <Container $lastelement={$lastelement}>
      <CommentInfoBox>
        <Name>{sender}</Name>
        <Date>
          {createdAt.slice(0, 10).split('-')[0]}.{createdAt.slice(0, 10).split('-')[1]}.
          {createdAt.slice(0, 10).split('-')[2]}
        </Date>
      </CommentInfoBox>
      <Content>{content}</Content>
    </Container>
  );
};

export default CommentBox;

const Container = styled.article<{ $lastelement: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 5.6rem 4.8rem;

  border-bottom: ${({ $lastelement, theme }) =>
    $lastelement ? `1px solid ${theme.colors.Grayscales_400}` : null};
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
    margin-top: 0.8rem;

    color: ${({ theme }) => theme.colors.Grayscales_500};
  `,
);

const Content = styled.span(({ theme }) => theme.fonts.Caption_03);
