import styled from 'styled-components';
import { Footer, Header } from '~/common/components';
import { TABLET_WIDTH } from '~/constants/common';
import useGetGuestBookDesktop from '~/hooks/useGetGuestBookDesktop';
import { GuestBookDesktop, GuestBookTablet, Mobile } from '~/utils/mediaQuery';
import desktopBackground from '../../assets/images/guestBookBackgroundImage.png';
import mobileBackground from '../../assets/images/guestBookMobileBackgroundImage.png';
import Flowers from './components/Flowers';
import GuestBookInput from './components/GuestBookInput';
import Letters from './components/Letters';
import Title from './components/Title';

const GuestBook = () => {
  const { desktopData } = useGetGuestBookDesktop(1, 1);

  return (
    <GuestBookWrapper>
      <Header />

      <GuestBookDesktop>
        <GuestBookBackground src={desktopBackground} alt="배경지" />
      </GuestBookDesktop>
      <GuestBookTablet>
        <GuestBookBackground src={mobileBackground} alt="배경지" />
      </GuestBookTablet>
      <Mobile>
        <GuestBookBackground src={mobileBackground} alt="배경지" />
      </Mobile>

      <PageLayout>
        <Title />
        <GuestBookInput />
        <Letters />
      </PageLayout>
      <Flowers length={desktopData?.count} />
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

  /* height:; */
`;

const GuestBookBackground = styled.img`
  position: absolute;
  z-index: -10;
  width: 100%;
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
