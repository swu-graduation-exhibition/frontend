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
  gap: 2rem;

  width: 100%;
  height: 40rem;

  padding: 5rem;

  border-radius: 8px;
  border: 1px solid #000;
  background: #fff;
`;

const Sender = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_04};
  color: ${({ theme }) => theme.colors.Grayscales_900};
`;

const CreatedAt = styled.div`
  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Grayscales_600};
`;
const Content = styled.div`
  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Black};
`;
