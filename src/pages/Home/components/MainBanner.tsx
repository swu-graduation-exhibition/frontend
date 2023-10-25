import { styled } from 'styled-components';
import { HomeDesktop, HomeMobile, HomeTablet } from '~/utils/mediaQuery';
import { LocationContent, UniversityContent } from '.';
import img1_home_pad from '../../../assets/images/img1_home_pad.png';

const MainBanner = () => {
  return (
    <>
      <HomeDesktop>
        <Wrapper>
          <MainBannerWrapper src={`${import.meta.env.VITE_SWU_IMAGE}/img1_home.png`} />
          <UniversityContent />
          <LocationContent />
        </Wrapper>
      </HomeDesktop>
      <HomeTablet>
        <TabletBannerWrapper background={img1_home_pad}>
          <UniversityContent />
          <LocationContent />
        </TabletBannerWrapper>
      </HomeTablet>
      <HomeMobile>
        <MobileBannerWrapper>
          <UniversityContent />
          <LocationContent />
        </MobileBannerWrapper>
      </HomeMobile>
    </>
  );
};

export default MainBanner;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 974px;

  /* border-bottom: 1px solid black; */
`;
const MainBannerWrapper = styled.img`
  /* margin: 6rem 5% 10rem 5%; */

  width: 102%;

  /* max-width: 1931px;
  max-height: 1018px; */

  object-fit: cover;
`;
const MobileBannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 52.9rem;
  padding: 4% 3%;
  padding-top: calc(529 / 374 * 100%);

  background-image: url(${`${import.meta.env.VITE_SWU_IMAGE}/img1_home_mobile.png`});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const TabletBannerWrapper = styled.div<{ background: string }>`
  position: relative;
  width: 100%;

  /* height: 72rem; */

  /* padding: 6rem 5% 10rem; */

  padding-top: calc(720 / 830 * 100%);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  background-image: url(${({ background }) => background});
`;
