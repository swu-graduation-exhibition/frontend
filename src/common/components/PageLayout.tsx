import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import ImgDesignerBackgroundCir from '~/assets/images/DesignerBgCir.png';
import ImgProjectDetailTopBg from '~/assets/images/ImgProjectDetail.png';
import ImgMobileGraduationExhibition from '~/assets/images/bg1_all_mobile.png';
import ImgDesignerBackground from '~/assets/images/bg1_default_designer.png';
import desktopBackground from '~/assets/images/guestBookBackgroundImage.png';
import mobileBackground from '~/assets/images/guestBookMobileBackgroundImage.png';
import ImgGraduationExhibition from '~/assets/images/home_middle_background.png';
import { Default, HomeDesktop, HomeTablet, Mobile } from '~/utils/mediaQuery';
import { Footer, Header } from '.';
import { MOBILE_WIDTH } from '~/constants/common';

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
        <HomeDesktop>
          <>{pathname === '/home' && <PageContentAbosoulteImg src={ImgGraduationExhibition} />}</>
        </HomeDesktop>
        <Default>
          <>
            {pathname.includes('/project') && !pathname.includes('/project/detail') && (
              <ProjectDetailBottomImg src={ImgGraduationExhibition} />
            )}
            {pathname.includes('/project/detail') && (
              <>
                <DesignerBackgrodundCirImg src={ImgProjectDetailTopBg} />
                <ProjectDetailBottomImg src={ImgGraduationExhibition} />
              </>
            )}
            {pathname === '/designer' && (
              <>
                <DesignerBackgrodundCirImg src={ImgProjectDetailTopBg} />
                <ProjectDetailBottomImg src={ImgDesignerBackground} />
              </>
            )}
            {pathname !== '/designer' && pathname.includes('/designer') && (
              <DesignerDetailImg src={ImgDesignerBackground} />
            )}
            {pathname === '/guestbook' && <PageContentImg src={desktopBackground} />}
          </>
        </Default>
        <HomeTablet>
          <>{pathname === '/home' && <HomeBackgrodunImg src={ImgMobileGraduationExhibition} />}</>
        </HomeTablet>
        <Mobile>
          <>
            {pathname === '/home' && <DesignerBackgrodunImg src={ImgMobileGraduationExhibition} />}
            {pathname === '/guestbook' && <PageContentImg src={mobileBackground} />}
            {pathname.includes('/designer') && (
              <>
                <DesignerBackgrodundMoblieCirImg src={ImgDesignerBackgroundCir} />
                <DesignerBackgrodunImg src={ImgMobileGraduationExhibition} />
              </>
            )}
            {pathname.includes('/project') && !pathname.includes('/project/detail') && (
              <>
                <DesignerBackgrodundMoblieCirImg src={ImgDesignerBackgroundCir} />
                <DesignerBackgrodunImg src={ImgMobileGraduationExhibition} />
              </>
            )}
            {pathname.includes('/project/detail') && (
              <>
                <DesignerBackgrodundMoblieCirImg src={ImgProjectDetailTopBg} />
                <DesignerBackgrodunImg src={ImgMobileGraduationExhibition} />
              </>
            )}
          </>
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
  width: 100%;

  padding-top: 11rem;
  @media screen and (width <= ${MOBILE_WIDTH}) {
    padding-top: 5.5rem;
  }
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
  bottom: 0;
  z-index: -10;
  width: 100%;
  object-fit: cover;
  max-height: 100%;
`;
const HomeBackgrodunImg = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -10;

  width: 100%;
  object-fit: cover;
`;
const DesignerBackgrodunImg = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -10;

  width: 100%;
  height: 70rem;
`;
const DesignerBackgrodundMoblieCirImg = styled.img`
  position: absolute;
  top: 55px;
  z-index: -10;

  width: 100%;
  height: 70rem;
`;
const DesignerBackgrodundCirImg = styled.img`
  position: absolute;
  top: 110px;
  z-index: -10;

  width: 100%;
  height: 70rem;
`;
const ProjectDetailBottomImg = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -10;

  width: 100%;
  object-fit: cover;
`;
const DesignerDetailImg = styled.img`
  position: absolute;
  top: 110px;
  z-index: -10;

  width: 100%;
  /* height: 5580px; */
  object-fit: cover;
`;
