import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import ImgMobileGraduationExhibition from '~/assets/images/bg1_all_mobile.png';
import ImgDesignerBackground from '~/assets/images/bg1_default_designer.png';
import desktopBackground from '~/assets/images/guestBookBackgroundImage.png';
import mobileBackground from '~/assets/images/guestBookMobileBackgroundImage.png';
import ImgGraduationExhibition from '~/assets/images/home_middle_background.png';
import { Default, Mobile } from '~/utils/mediaQuery';
import { Footer, Header } from '.';

interface PageLayoutProps {
  mainBanner?: ReactNode;
  children: ReactNode;
}

const PageLayout = ({ children, mainBanner }: PageLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <PageLayoutWrapper>
      <Header />
      {mainBanner}
      <ContentWrapper>
        {children}
        <Footer />
        <Default>
          <PageContentImg
            src={
              pathname === '/designer'
                ? ImgDesignerBackground
                : pathname === '/guestbook'
                ? desktopBackground
                : ImgGraduationExhibition
            }
          />
        </Default>
        <Mobile>
          <PageContentImg
            src={pathname === '/guestbook' ? mobileBackground : ImgMobileGraduationExhibition}
          />
        </Mobile>
      </ContentWrapper>
    </PageLayoutWrapper>
  );
};

export default PageLayout;

const PageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
const ContentWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;
const PageContentImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -10;
  width: 100%;
  height: 100%;

  object-fit: cover;
  max-height: 100%;
  transform: translate(-50%, -50%);
`;
