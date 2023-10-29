import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import ProgressiveImage from 'react-progressive-graceful-image';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { whitePlaceholder, yellowPlaceholder, yellowPlaceholderMobile } from '~/utils/background';
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
                <ProgressiveImage
                  src={`${import.meta.env.VITE_SWU_IMAGE}/ImgProjectDetail.png}`}
                  placeholder=""
                >
                  {(src, loading) => {
                    return loading ? whitePlaceholder : <DesignerBackgrodundCirImg src={src} />;
                  }}
                </ProgressiveImage>

                <ProgressiveImage
                  src={`${import.meta.env.VITE_SWU_IMAGE}/home_middle_background.png`}
                  placeholder=""
                >
                  {(src, loading) => {
                    return loading ? whitePlaceholder : <ProjectDetailBottomImg src={src} />;
                  }}
                </ProgressiveImage>
              </>
            )}
            {pathname === '/designer' && (
              <ProgressiveImage
                src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_default_designer.png`}
                placeholder=""
              >
                {(src, loading) => {
                  return loading ? whitePlaceholder : <DesignerDetailImg src={src} />;
                }}
              </ProgressiveImage>
            )}
            {pathname !== '/designer' && pathname.includes('/designer') && (
              <ProgressiveImage
                src={`${import.meta.env.VITE_SWU_IMAGE}/bg2_default_designer.png`}
                placeholder=""
              >
                {(src, loading) => {
                  return loading ? whitePlaceholder : <DesignerDetailImg src={src} />;
                }}
              </ProgressiveImage>
            )}
            {pathname === '/guestbook' && (
              <ProgressiveImage
                src={`${import.meta.env.VITE_SWU_IMAGE}/guestBookBackgroundImage.png`}
                placeholder=""
              >
                {(src, loading) => {
                  return loading ? yellowPlaceholder : <PageContentImg src={src} />;
                }}
              </ProgressiveImage>
            )}
          </>
        </Default>
        <Mobile>
          <>
            {pathname === '/home' && (
              <ProgressiveImage
                src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_all_mobile.png`}
                placeholder=""
              >
                {(src, loading) => {
                  return loading ? whitePlaceholder : <DesignerBackgrodunImg src={src} />;
                }}
              </ProgressiveImage>
            )}
            {pathname === '/guestbook' && (
              <ProgressiveImage
                src={`${import.meta.env.VITE_SWU_IMAGE}/guestBookMobileBackgroundImage.png`}
                placeholder=""
              >
                {(src, loading) => {
                  return loading ? yellowPlaceholderMobile : <PageContentImg src={src} />;
                }}
              </ProgressiveImage>
            )}
            {pathname.includes('/designer') && (
              <>
                <ProgressiveImage
                  src={`${import.meta.env.VITE_SWU_IMAGE}/DesignerBgCir.png`}
                  placeholder=""
                >
                  {(src, loading) => {
                    return loading ? (
                      whitePlaceholder
                    ) : (
                      <DesignerBackgrodundMoblieCirImg src={src} />
                    );
                  }}
                </ProgressiveImage>

                <ProgressiveImage
                  src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_all_mobile.png`}
                  placeholder=""
                >
                  {(src, loading) => {
                    return loading ? whitePlaceholder : <DesignerBackgrodunImg src={src} />;
                  }}
                </ProgressiveImage>
              </>
            )}
            {pathname.includes('/project') && !pathname.includes('/project/detail') && (
              <>
                <ProgressiveImage
                  src={`${import.meta.env.VITE_SWU_IMAGE}/DesignerBgCir.png`}
                  placeholder=""
                >
                  {(src, loading) => {
                    return loading ? (
                      whitePlaceholder
                    ) : (
                      <DesignerBackgrodundMoblieCirImg src={src} />
                    );
                  }}
                </ProgressiveImage>

                <ProgressiveImage
                  src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_all_mobile.png`}
                  placeholder=""
                >
                  {(src, loading) => {
                    return loading ? whitePlaceholder : <DesignerBackgrodunImg src={src} />;
                  }}
                </ProgressiveImage>
              </>
            )}
            {pathname.includes('/project/detail') && (
              <>
                <ProgressiveImage
                  src={`${import.meta.env.VITE_SWU_IMAGE}/ImgProjectDetail.png`}
                  placeholder=""
                >
                  {(src, loading) => {
                    return loading ? (
                      whitePlaceholder
                    ) : (
                      <DesignerBackgrodundMoblieCirImg src={src} />
                    );
                  }}
                </ProgressiveImage>

                <ProgressiveImage
                  src={`${import.meta.env.VITE_SWU_IMAGE}/bg1_all_mobile.png`}
                  placeholder=""
                >
                  {(src, loading) => {
                    return loading ? whitePlaceholder : <DesignerBackgrodunImg src={src} />;
                  }}
                </ProgressiveImage>
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

  /* max-width: 192rem; */

  height: 100%;

  object-fit: cover;

  /* max-height: 100%; */

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

  @media screen and (width <= ${`1200px`}) {
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
  right: 10px;
  bottom: 0;
  z-index: -10;

  width: 780px;
  object-fit: cover;

  @media screen and (width <=${`1200px`}) {
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

  @media screen and (width <=${`1200px`}) {
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
