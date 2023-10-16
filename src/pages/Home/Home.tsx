import { styled } from 'styled-components';
import { PageLayout } from '~/common/components';
import { ConceptContent, Interview, MainBanner, TrackIntroduce } from './components';
import ImgBlackFlower from '~/assets/images/img2_home.png';
import ImgMobileBlackFlower from '~/assets/images/img2_home_mobile.png';
import ImgTabletBlackFlower from '~/assets/images/img2_home_pad.png';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { HomeTablet, HomeDesktop, Mobile } from '~/utils/mediaQuery';

const Home = () => {
  return (
    <PageLayout>
      <MainBanner />
      <GraduationExhibitionWrapper>
        <ConceptContent />
        <HomeDesktop>
          <BlackFlower src={ImgBlackFlower} />
        </HomeDesktop>
        <HomeTablet>
          <MobileBlackFlower src={ImgTabletBlackFlower} />
        </HomeTablet>
        <Mobile>
          <MobileBlackFlower src={ImgMobileBlackFlower} />
        </Mobile>
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
  right: 0;
  top: 0;

  z-index: -1;
`;
const MobileBlackFlower = styled.img`
  width: 100%;
`;
