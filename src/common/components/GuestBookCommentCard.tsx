import { styled } from 'styled-components';
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

  width: 100%;
  height: 40rem;
  padding: 5rem;

  border-radius: 0.8rem;
  border: 1px solid #000;
  background: #fff;

  @media screen and (width <= 1700px) {
    height: 40rem;
    padding: 3rem;
  }

  @media screen and (width <= 1600px) {
    height: 35rem;
    padding: 3rem;
  }

  @media screen and (width <= 1500px) {
    height: 30rem;
    padding: 2rem;
  }

  @media screen and (width <= 600px) {
    height: 34rem;
    padding: 2rem;
  }

  @media screen and (width <= 521px) {
    height: 22rem;
    padding: 2rem;
  }

  @media screen and (width<=420px) {
    height: 25rem;
    padding: 2rem;
  }
`;

const Sender = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_04};
  color: ${({ theme }) => theme.colors.Grayscales_900};

  @media screen and (width <= 1600px) {
    ${({ theme }) => theme.fonts.Mobile_Headline_01};
  }
`;

const CreatedAt = styled.div`
  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Grayscales_600};

  @media screen and (width <= 1600px) {
    ${({ theme }) => theme.fonts.Mobile_Body_05};
  }
`;
const Content = styled.div`
  margin-top: 1.2rem;

  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Black};
  word-break: break-all;

  @media screen and (width <= 1600px) {
    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }
`;
