import { styled } from 'styled-components';
import { PageLayout } from '~/common/components';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH } from '~/constants/common';
import { HomeDesktop, HomeMobile, HomeTablet } from '~/utils/mediaQuery';
import { ConceptContent, Interview, MainBanner, TrackIntroduce } from './components';

const Home = () => {
  return (
    <PageLayout>
      <MainBanner />
      <GraduationExhibitionWrapper>
        <ConceptContent />
        <HomeDesktop>
          <BlackFlower src={`${import.meta.env.VITE_SWU_IMAGE}/img2_home.png`} />
        </HomeDesktop>
        <HomeTablet>
          <MobileBlackFlower src={`${import.meta.env.VITE_SWU_IMAGE}/img2_home_pad.png`} />
        </HomeTablet>
        <HomeMobile>
          <MobileBlackFlower src={`${import.meta.env.VITE_SWU_IMAGE}/img2_home_mobile.png`} />
        </HomeMobile>
        <Interview />
        <TrackIntroduce />
      </GraduationExhibitionWrapper>
    </PageLayout>
  );
};

export default Home;

const GraduationExhibitionWrapper = styled.section`
  position: relative;

  padding: 11rem 13.6rem;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    padding: 8rem 6rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    padding: 2rem 1.6rem;
  }
`;
const BlackFlower = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;
const MobileBlackFlower = styled.img`
  width: 100%;
`;
