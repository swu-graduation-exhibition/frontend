import styled from 'styled-components';
import { Footer, Header } from '~/common/components';
import { MOBILE_WIDTH } from '~/constants/common';
import background from '../../assets/images/guestBookBackgroundImage.png';
import Title from './components/Title';
import GuestBookInput from './components/guestBookInput';

const GuestBook = () => {
  return (
    <>
      <Header />
      <GuestBookBackground src={background} alt="배경지" />
      <PageLayout>
        <Title />
        <GuestBookInput />
      </PageLayout>
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

const PageLayout = styled.div`
  padding: 16rem 13.6rem 0;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    padding: 2.4rem 1.6rem 0;
  }
`;
