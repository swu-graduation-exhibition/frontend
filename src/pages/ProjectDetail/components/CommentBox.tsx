import styled, { css } from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';
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

  @media screen and (width <= ${MOBILE_WIDTH}) {
    flex-direction: column;
    padding: 2.4rem 0;

    /* border-bottom: ${({ theme }) => `1px solid ${theme.colors.Grayscales_400}`}; */
  }
`;

const CommentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.3rem;
  min-width: 18.3rem;
`;

const Name = styled.span`
  ${({ theme }) => theme.fonts.Subtitle_04}

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_01}
    font-weight: 700;
  }
`;

const Date = styled.span(
  ({ theme }) => theme.fonts.Caption_03,
  css`
    margin-top: 0.8rem;

    color: ${({ theme }) => theme.colors.Grayscales_500};

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Body_05};
      color: ${({ theme }) => theme.colors.Grayscales_500};
    }
  `,
);

const Content = styled.span`
  ${({ theme }) => theme.fonts.Caption_03}

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03}
  }
`;
