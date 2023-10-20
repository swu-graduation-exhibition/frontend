import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import ImgDesignerBackgroundCir from '~/assets/images/DesignerBgCir.png';
import ImgProjectDetailTopBg from '~/assets/images/ImgProjectDetail.png';
import ImgMobileGraduationExhibition from '~/assets/images/bg1_all_mobile.png';
import ImgDesignerBackground from '~/assets/images/bg1_default_designer.png';
import ImgDesignerDetailBackground from '~/assets/images/bg2_default_designer.png';
import desktopBackground from '~/assets/images/guestBookBackgroundImage.png';
import mobileBackground from '~/assets/images/guestBookMobileBackgroundImage.png';
import ImgGraduationExhibition from '~/assets/images/home_middle_background.png';

import ImgLeftDot from '~/assets/images/left_dot.png';
import ImgRightDot from '~/assets/images/right_dot.png';
import ImgDotWrapper from '~/assets/images/dot_wrapper.png';

import { Default, Mobile } from '~/utils/mediaQuery';
import { Footer, Header } from '.';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';

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
          <>
            {pathname === '/home' && (
              <>
                <DotLeftHomeImg src={ImgLeftDot} />
                <DotRightImg src={ImgRightDot} />
                <DotWrapperImg src={ImgDotWrapper} />
              </>
            )}
            {pathname.includes('/project') && !pathname.includes('/project/detail') && (
              <>
                <DotLeftImg src={ImgLeftDot} />
                <DotRightImg src={ImgRightDot} />
                <DotWrapperImg src={ImgDotWrapper} />
              </>
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
              <DesignerDetailImg src={ImgDesignerDetailBackground} />
            )}
            {pathname === '/guestbook' && <PageContentImg src={desktopBackground} />}
          </>
        </Default>
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
const DotWrapperImg = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -13;

  width: 100%;
  object-fit: cover;
`;
const DotLeftImg = styled.img`
  position: absolute;
  top: 600px;
  left: 0%;
  z-index: -10;

  width: 294px;
  object-fit: cover;

  @media screen and (width <= 1200px) {
    width: 200px;
  }
  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    width: 150px;
  }
  @media screen and (width <= ${TABLET_WIDTH}) {
    width: 100px;
  }
`;
const DotRightImg = styled.img`
  position: absolute;
  z-index: -10;
  bottom: 0;
  right: 10px;

  width: 780px;
  object-fit: cover;
  @media screen and (width <= 1200px) {
    width: 680px;
  }

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    width: 500px;
  }
  @media screen and (width <= ${TABLET_WIDTH}) {
    width: 400px;
  }
`;

const DotLeftHomeImg = styled(DotLeftImg)`
  top: 1730px;
  @media screen and (width <= 1200px) {
    top: 2430px;
  }
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
  height: 100%;
  object-fit: fill;
`;
