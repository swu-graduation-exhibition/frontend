import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Footer, Header } from '.';
import { Default, Mobile } from '~/utils/mediaQuery';
import ImgGraduationExhibition from '~/assets/images/home_middle_background.png';
import ImgMobileGraduationExhibition from '~/assets/images/bg1_all_mobile.png';

interface PageLayoutProps {
  mainBanner?: ReactNode;
  children: ReactNode;
}

const PageLayout = ({ children, mainBanner }: PageLayoutProps) => {
  return (
    <PageLayoutWrapper>
      <Header />
      {mainBanner}
      <ContentWrapper>
        {children}
        <Footer />
        <Default>
          <PageContentImg src={ImgGraduationExhibition} />
        </Default>
        <Mobile>
          <PageContentImg src={ImgMobileGraduationExhibition} />
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
`;
const PageContentImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  z-index: -2;
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;
