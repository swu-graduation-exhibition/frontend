import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

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
                <DotLeftHomeImg src={`${import.meta.env.VITE_SWU_IMAGE}/left_dot.png`} />
                <DotRightImg src={`${import.meta.env.VITE_SWU_IMAGE}/right_dot.png`} />
                <DotWrapperImg src={`${import.meta.env.VITE_SWU_IMAGE}/dot_wrapper.png`} />
              </>
            )}
            {pathname.includes('/project') && !pathname.includes('/project/detail') && (
              <>
                <DotLeftImg src={`${import.meta.env.VITE_SWU_IMAGE}/left_dot.png`} />
                <DotRightImg src={`${import.meta.env.VITE_SWU_IMAGE}/right_dot.png`} />
                <DotWrapperImg src={`${import.meta.env.VITE_SWU_IMAGE}/dot_wrapper.png`} />
              </>
            )}
            {pathname.includes('/project/detail') && (
              <>
                <DesignerBackgrodundCirImg
                  src={`${import.meta.env.VITE_SWU_IMAGE}/ImgProjectDetail.png`}
                />
                <ProjectDetailBottomImg
                  src={`${import.meta.env.VITE_SWU_IMAGE}/home_middle_background.png`}
                />
              </>
            )}
            {pathname === '/designer' && (
              <DesignerDetailImg
                src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_default_designer.png`}
              />
            )}
            {pathname !== '/designer' && pathname.includes('/designer') && (
              <DesignerDetailImg
                src={`${import.meta.env.VITE_SWU_IMAGE}/bg2_default_designer.png`}
              />
            )}
            {pathname === '/guestbook' && (
              <PageContentImg
                src={`${import.meta.env.VITE_SWU_IMAGE}/guestBookBackgroundImage.png`}
              />
            )}
          </>
        </Default>
        <Mobile>
          <>
            {pathname === '/home' && (
              <DesignerBackgrodunImg src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_all_mobile.png`} />
            )}
            {pathname === '/guestbook' && (
              <PageContentImg
                src={`${import.meta.env.VITE_SWU_IMAGE}/guestBookMobileBackgroundImage.png`}
              />
            )}
            {pathname.includes('/designer') && (
              <>
                <DesignerBackgrodundMoblieCirImg
                  src={`${import.meta.env.VITE_SWU_IMAGE}/DesignerBgCir.png`}
                />
                <DesignerBackgrodunImg
                  src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_all_mobile.png`}
                />
              </>
            )}
            {pathname.includes('/project') && !pathname.includes('/project/detail') && (
              <>
                <DesignerBackgrodundMoblieCirImg
                  src={`${import.meta.env.VITE_SWU_IMAGE}/DesignerBgCir.png`}
                />
                <DesignerBackgrodunImg
                  src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_all_mobile.png`}
                />
              </>
            )}
            {pathname.includes('/project/detail') && (
              <>
                <DesignerBackgrodundMoblieCirImg
                  src={`${import.meta.env.VITE_SWU_IMAGE}/ImgProjectDetail.png`}
                />
                <DesignerBackgrodunImg
                  src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_all_mobile.png`}
                />
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
