import React from 'react';
import { styled } from 'styled-components';
import { PageLayout } from '~/common/components';
import { ConceptContent, Interview, MainBanner, TrackIntroduce } from './components';
import ImgBlackFlower from '~/assets/images/img2_home.png';
import ImgMobileBlackFlower from '~/assets/images/img2_home_mobile.png';
import { MOBILE_WIDTH } from '~/constants/common';
import { Default, Mobile } from '~/utils/mediaQuery';

const Home = () => {
  return (
    <PageLayout mainBanner={<MainBanner />}>
      <HomeWrapper>
        <GraduationExhibitionWrapper>
          <ConceptContent />
          <Default>
            <BlackFlower src={ImgBlackFlower} />
          </Default>
          <Mobile>
            <MobileBlackFlower src={ImgMobileBlackFlower} />
          </Mobile>
          <Interview />
          <TrackIntroduce />
        </GraduationExhibitionWrapper>
      </HomeWrapper>
    </PageLayout>
  );
};

export default Home;

const HomeWrapper = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;

const GraduationExhibitionWrapper = styled.section`
  position: relative;

  /* height: 251.9rem; */
  padding: 3% 0 3% 10%;
  @media screen and (width <= ${MOBILE_WIDTH}) {
    padding: 2rem 1.6rem;
  }
`;
const BlackFlower = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;
const MobileBlackFlower = styled.img`
  width: 100%;
`;
