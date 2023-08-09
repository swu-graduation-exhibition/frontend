import React from 'react';
import { styled } from 'styled-components';
import { PageLayout } from '~/common/components';
import { ConceptContent, Interview, MainBanner } from './components';
import ImgGraduationExhibition from '~/assets/images/home_middle_background.png';
import ImgMobileGraduationExhibition from '~/assets/images/bg1_all_mobile.png';
import ImgBlackFlower from '~/assets/images/img2_home.png';
import ImgMobileBlackFlower from '~/assets/images/img2_home_mobile.png';
import { MOBILE_WIDTH } from '~/constants/common';

const Home = () => {
  return (
    <PageLayout>
      <HomeWrapper>
        <MainBanner />
        <GraduationExhibitionWrapper>
          <ConceptContent />
          <BlackFlower />
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
const BlackFlower = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  width: 130.7rem;
  height: 136.6rem;
  background-image: url(${ImgBlackFlower});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    position: initial;
    width: 100%;
    height: 0;
    padding-top: calc(260 / 374 * 100%);
    background-position: center center;
    background-image: url(${ImgMobileBlackFlower});
    background-size: cover;
  }
`;
