import { styled } from 'styled-components';
import { LocationContent, UniversityContent } from '.';
import { HomeDesktop, HomeTablet, Mobile } from '~/utils/mediaQuery';

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
        <TabletBannerWrapper>
          <UniversityContent />
          <LocationContent />
        </TabletBannerWrapper>
      </HomeTablet>
      <Mobile>
        <MobileBannerWrapper>
          <UniversityContent />
          <LocationContent />
        </MobileBannerWrapper>
      </Mobile>
    </>
  );
};

export default MainBanner;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 974px;
  border-bottom: 1px solid black;
`;
const MainBannerWrapper = styled.img`
  /* margin: 6rem 5% 10rem 5%; */
  /* width: 100%; */
  /* max-width: 1931px;
  max-height: 1018px; */

  object-fit: cover;
`;
const MobileBannerWrapper = styled.div`
  position: relative;
  padding: 4% 3%;
  width: 100%;
  padding-top: calc(529 / 374 * 100%);

  height: 52.9rem;

  background-image: url(${`${import.meta.env.VITE_SWU_IMAGE}/img1_home_mobile.png`});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const TabletBannerWrapper = styled.div`
  position: relative;
  padding: 6rem 5% 10rem 5%;
  width: 100%;
  padding-top: calc(720 / 830 * 100%);

  height: 72rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${`${import.meta.env.VITE_SWU_IMAGE}/img1_home.png`});
`;
