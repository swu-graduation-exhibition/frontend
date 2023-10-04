import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Footer, Header } from '.';
import { Default, Mobile } from '~/utils/mediaQuery';
import ImgGraduationExhibition from '~/assets/images/home_middle_background.png';
import ImgDesignerBackground from '~/assets/images/bg1_default_designer.png';
import ImgMobileGraduationExhibition from '~/assets/images/bg1_all_mobile.png';
import { useLocation } from 'react-router-dom';
import desktopBackground from '~/assets/images/guestBookBackgroundImage.png';
import mobileBackground from '~/assets/images/guestBookMobileBackgroundImage.png';

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
  position: relative;
  overflow: hidden;
`;
const PageContentImg = styled.img`
  position: absolute;

  object-fit: cover;
  z-index: -2;
  width: 100%;
  height: 100%;
  max-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
