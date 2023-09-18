import { styled } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { GuestBookCommentInfo } from '~/types/guestBook';
import { getParseDate } from '~/utils/getParseDate';
import { DESIGNERS } from '../data/designers';

interface GuestBookCarProps extends GuestBookCommentInfo {
  receiver: number;
}

const GuestBookCard = ({ sender, content, createdAt, receiver }: GuestBookCarProps) => {
  return (
    <Container>
      <Sender>From. {sender}</Sender>
      <CreatedAt>{getParseDate(createdAt)}</CreatedAt>
      <Receiver>To. {DESIGNERS[receiver]}</Receiver>
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
  /* width: 39.5rem; */

  height: 45.1rem;

  /* margin: 0 2.3rem 2.1rem 0; */

  padding: 5.6rem 4.8rem;
  border: 1px solid var(--card_gs, #fff);

  border-radius: 0.8rem;
  background: var(
    --card_g,
    linear-gradient(139deg, rgb(255 255 255 / 70%) 2.79%, rgb(255 255 255 / 30%) 98.71%)
  );

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
