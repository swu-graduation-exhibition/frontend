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
            {pathname === '/home' && <PageContentAbosoulteImg src={ImgGraduationExhibition} />}
            {pathname.includes('/project') && !pathname.includes('/project/detail') && (
              <ProjectDetailBottomImg src={ImgGraduationExhibition} />
            )}
            {pathname.includes('/project/detail') && (
              <>
                <DesignerBackgrodundCirImg src={ImgProjectDetailTopBg} />
                <ProjectDetailBottomImg src={ImgGraduationExhibition} />
              </>
            )}
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
            {pathname.includes('/designer') ||
              (pathname.includes('/project') && !pathname.includes('/project/detail') && (
                <>
                  <DesignerBackgrodundCirImg src={ImgDesignerBackgroundCir} />
                  <DesignerBackgrodunImg src={ImgMobileGraduationExhibition} />
                </>
              ))}
            {pathname.includes('/project/detail') && (
              <>
                <DesignerBackgrodundCirImg src={ImgProjectDetailTopBg} />
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
const ProjectDetailBottomImg = styled(DesignerBackgrodunImg)`
  position: absolute;
  bottom: 0;
  z-index: -10;

  width: 100%;
  height: 259rem;
`;
