import React from 'react';
import { styled } from 'styled-components';
import { PageLayout } from '~/common/components';
import { ConceptContent, Interview, MainBanner } from './components';
import ImgGraduationExhibition from '~/assets/images/home_middle_background.png';
import ImgMobileGraduationExhibition from '~/assets/images/bg1_all_mobile.png';
import ImgBlackFlower from '~/assets/images/img2_home.png';
import ImgMobileBlackFlower from '~/assets/images/img2_home_mobile.png';
import { MOBILE_WIDTH } from '~/constants/common';
import { Default, Mobile } from '~/utils/mediaQuery';

const Home = () => {
  return (
    <PageLayout>
      <HomeWrapper>
        <MainBanner />
        <GraduationExhibitionWrapper>
          <ConceptContent />
          <Default>
            <BlackFlower src={ImgBlackFlower} />
          </Default>
          <Mobile>
            <MobileBlackFlower src={ImgMobileBlackFlower} />
          </Mobile>
          <Interview />
        </GraduationExhibitionWrapper>
      </HomeWrapper>
    </PageLayout>
  );
};

export default Home;

const HomeWrapper = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  position: relative;
`;

const GraduationExhibitionWrapper = styled.section`
  position: relative;

  height: 251.9rem;
  background-image: url(${ImgGraduationExhibition});
  background-size: cover;
  background-repeat: no-repeat;

  padding: 3% 10%;
  @media screen and (width <= ${MOBILE_WIDTH}) {
    background-image: url(${ImgMobileGraduationExhibition});

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
