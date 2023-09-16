import { styled } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { GuestBookCommentInfo } from '~/types/guestBook';
import { getParseDate } from '~/utils/getParseDate';

const GuestBookCommentCard = ({ sender, content, createdAt }: GuestBookCommentInfo) => {
  return (
    <Container>
      <Sender>From. {sender}</Sender>
      <CreatedAt>{getParseDate(createdAt)}</CreatedAt>
      <Content>{content}</Content>
    </Container>
  );
};

export default GuestBookCommentCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  width: 100%;
  height: 40rem;

  padding: 5rem;

  border-radius: 8px;
  border: 1px solid #000;
  background: #fff;

  @media screen and (width <= 1400px) {
    padding: 3rem;
  }
  @media screen and (width <= ${TABLET_WIDTH}) {
    height: 24rem;
    padding: 2rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    height: 22rem;
    padding: 2rem;
  }
`;

const Sender = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_04};
  color: ${({ theme }) => theme.colors.Grayscales_900};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Headline_01};
  }
`;

const CreatedAt = styled.div`
  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Grayscales_600};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_05};
  }
`;
const Content = styled.div`
  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Black};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }
`;
