import styled from 'styled-components';
import { Footer, Header } from '~/common/components';
import background from '../../assets/images/guestBookBackgroundImage.png';

const GuestBook = () => {
  return (
    <>
      <Header />
      <GuestBookBackground src={background} alt="배경지" />
      <Footer />
    </>
  );
};

export default GuestBook;

const GuestBookBackground = styled.img`
  position: absolute;
  z-index: -2;
  width: 100%;
`;
