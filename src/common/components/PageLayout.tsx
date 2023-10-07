import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import ImgMobileGraduationExhibition from '~/assets/images/bg1_all_mobile.png';
import ImgDesignerBackground from '~/assets/images/bg1_default_designer.png';
import desktopBackground from '~/assets/images/guestBookBackgroundImage.png';
import mobileBackground from '~/assets/images/guestBookMobileBackgroundImage.png';
import { Default, Mobile } from '~/utils/mediaQuery';
import { Footer, Header } from '.';
import ImgGraduationExhibition from '~/assets/images/home_middle_background.png';
import ImgDesignerBackgroundCir from '~/assets/images/DesignerBgCir.png';

interface PageLayoutProps {
  mainBanner?: ReactNode;
  children: ReactNode;
}

const PageLayout = ({ children, mainBanner }: PageLayoutProps) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <PageLayoutWrapper>
      <Header />
      {mainBanner}
      <ContentWrapper>
        {children}
        <Footer />
        <Default>
<<<<<<< HEAD
          <PageContentImg
            src={
              pathname === '/designer' || pathname === '/project/detail'
                ? ImgDesignerBackground
                : pathname === '/guestbook'
                ? desktopBackground
                : ImgGraduationExhibition
            }
          />
        </Default>
        <Mobile>
          <PageContentImg
            src={
              pathname === '/guestbook' || pathname === '/project/detail'
                ? mobileBackground
                : ImgMobileGraduationExhibition
            }
          />
=======
          <>
            {pathname === '/home' && <PageContentAbosoulteImg src={ImgGraduationExhibition} />}
            {pathname.includes('/designer') && <PageContentImg src={ImgDesignerBackground} />}
            {pathname === '/guestbook' && <PageContentImg src={desktopBackground} />}
          </>
        </Default>
        <Mobile>
          <>
            {pathname === '/home' && (
              <PageContentAbosoulteImg src={ImgMobileGraduationExhibition} />
            )}
            {pathname === '/guestbook' && <PageContentImg src={mobileBackground} />}
            {pathname.includes('/designer') && (
              <>
                <DesignerBackgrodundCirImg src={ImgDesignerBackgroundCir} />
                <DesignerBackgrodunImg src={ImgMobileGraduationExhibition} />
              </>
            )}
          </>
>>>>>>> 85cf62eeb964d81bea17452b613026f3b1176031
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
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -10;
  width: 100vw;
  max-width: 190rem;
  height: 100%;

  object-fit: cover;
  max-height: 100%;
  transform: translate(-50%, -50%);
`;
const PageContentAbosoulteImg = styled.img`
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

const DesignerBackgrodunImg = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -10;

  width: 100%;
  height: 70rem;
`;
const DesignerBackgrodundCirImg = styled.img`
  position: absolute;
  top: 0;
  z-index: -10;

  width: 100%;
  height: 70rem;
`;
