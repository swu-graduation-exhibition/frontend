import styled from 'styled-components';
import { Footer, Header } from '~/common/components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import desktopBackground from '../../assets/images/guestBookBackgroundImage.png';
import mobileBackground from '../../assets/images/guestBookMobileBackgroundImage.png';
import GuestBookInput from './components/GuestBookInput';
import Letters from './components/Letters';
import Title from './components/Title';

const GuestBook = () => {
  return (
    <GuestBookWrapper>
      <Header />
      <GuestBookBackground
        desktopBackground={desktopBackground}
        mobileBackground={mobileBackground}
      />
      <PageLayout>
        <Title />
        <GuestBookInput />
        <Letters />
      </PageLayout>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </GuestBookWrapper>
  );
};

export default GuestBook;

const FooterWrapper = styled.div`
  position: sticky;
  top: 195rem;
`;

const GuestBookWrapper = styled.div`
  overflow: scroll;
`;

const GuestBookBackground = styled.div<{ desktopBackground: string; mobileBackground: string }>`
  position: absolute;
  z-index: -2;
  width: 100%;
  margin-top: -47rem;

  content: url(${({ desktopBackground }) => desktopBackground});

  @media screen and (width <= 1500px) {
    margin-top: 0;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 0;
    content: url(${({ mobileBackground }) => mobileBackground});
  }
`;

const PageLayout = styled.div`
  padding: 16rem 13.6rem 0;

  @media screen and (width <= 955px) {
    padding: 4rem 6.4rem 0;
  }

  @media screen and (width <= ${TABLET_WIDTH}) {
    padding: 2.4rem 1.6rem 0;
  }
`;
