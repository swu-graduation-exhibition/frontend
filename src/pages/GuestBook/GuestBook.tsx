import styled from 'styled-components';
import { Footer, Header } from '~/common/components';
import { TABLET_WIDTH } from '~/constants/common';
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';
import desktopBackground from '../../assets/images/guestBookBackgroundImage.png';
import mobileBackground from '../../assets/images/guestBookMobileBackgroundImage.png';
import Flowers from './components/Flowers';
import GuestBookInput from './components/GuestBookInput';
import Letters from './components/Letters';
import Title from './components/Title';

const GuestBook = () => {
  // 서버에서 데이터 받아오기 -> 커스텀 훅 구현하기
  const count = 20;

  return (
    <GuestBookWrapper>
      <Header />
      <Flowers length={count} />
      <Desktop>
        <GuestBookBackground src={desktopBackground} alt="배경지" />
      </Desktop>
      <Tablet>
        <GuestBookBackground src={mobileBackground} alt="배경지" />
      </Tablet>
      <Mobile>
        <GuestBookBackground src={mobileBackground} alt="배경지" />
      </Mobile>

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

  height:;
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
