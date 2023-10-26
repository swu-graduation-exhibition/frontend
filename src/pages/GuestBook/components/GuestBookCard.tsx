import { styled } from 'styled-components';
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
  margin-top: 1.2rem;
  ${({ theme }) => theme.fonts.Subtitle_04_Gray700};

  @media screen and (width <= ${`1600px`}) {
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

  @media screen and (width <= ${`1700px`}) {
    height: 40rem;
    padding: 3rem;
  }

  @media screen and (width <= ${`1600px`}) {
    height: 35rem;
    padding: 3rem;
  }

  @media screen and (width <= ${`1500px`}) {
    height: 30rem;
    padding: 2rem;
  }

  @media screen and (width <= ${`600px`}) {
    height: 34rem;
    padding: 2rem;
  }

  @media screen and (width <= ${`521px`}) {
    height: 22rem;
    padding: 2rem;
  }

  @media screen and (width<=${`420px`}) {
    height: 25rem;
    padding: 2rem;
  }
`;

const Sender = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_04};
  color: ${({ theme }) => theme.colors.Grayscales_900};

  @media screen and (width <= ${`1600px`}) {
    ${({ theme }) => theme.fonts.Mobile_Headline_01};
  }
`;

const CreatedAt = styled.div`
  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Grayscales_600};

  @media screen and (width <= ${`1600px`}) {
    ${({ theme }) => theme.fonts.Mobile_Body_05};
  }
`;
const Content = styled.div`
  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Black};
  word-break: break-all;

  @media screen and (width <= ${`1600px`}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }
`;
