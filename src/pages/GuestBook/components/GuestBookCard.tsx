import { styled } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { GuestBookPageCard } from '~/types/guestBook';
import { getParseDate } from '~/utils/getParseDate';

const GuestBookCard = ({ sender, content, createdAt, receiver }: GuestBookPageCard) => {
  return (
    <Container>
      <Sender>From. {sender}</Sender>
      <CreatedAt>{getParseDate(createdAt)}</CreatedAt>
      <Receiver>To. {receiver}</Receiver>
      <Content>{content}</Content>
    </Container>
  );
};

export default GuestBookCard;

const Receiver = styled.p`
  ${({ theme }) => theme.fonts.Subtitle_04_Gray700};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Headline_01_Gray700};
  }
`;

const Container = styled.div`
  height: 45.1rem;
  padding: 5.6rem 4.8rem;
  border: 1px solid var(--card_gs, #fff);

  border-radius: 0.8rem;
  background: var(
    --card_g,
    linear-gradient(139deg, rgb(255 255 255 / 70%) 2.79%, rgb(255 255 255 / 30%) 98.71%)
  );

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
    padding: 3rem;
  }

  @media screen and (width <= 1400px) {
    height: 24rem;
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
