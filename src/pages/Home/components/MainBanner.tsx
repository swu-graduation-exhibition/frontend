import { styled } from 'styled-components';
import ImgHomeBanner from '~/assets/images/img1_home.png';
import ImgMobileHomeBanner from '~/assets/images/img1_home_mobile.png';
import ImgPadHomeBanner from '~/assets/images/img1_home_pad.png';
import { LocationContent, UniversityContent } from '.';
import { HomeDesktop, HomeTablet, Mobile } from '~/utils/mediaQuery';

const MainBanner = () => {
  return (
    <>
      <HomeDesktop>
        <MainBannerWrapper>
          <UniversityContent />
          <LocationContent />
        </MainBannerWrapper>
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

const MainBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 6rem 5%;

  height: 96.8rem;
  background-position: center center;
  background-image: url(${ImgHomeBanner});
  background-size: cover;
  background-repeat: no-repeat;
`;
const MobileBannerWrapper = styled.div`
  position: relative;
  padding: 4% 3%;
  width: 100%;
  height: 0;
  padding-top: calc(529 / 374 * 100%);

  height: 52.9rem;
  background-image: url(${ImgMobileHomeBanner});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const TabletBannerWrapper = styled(MainBannerWrapper)`
  width: 100vw;
  background-position: initial;
  background-image: url(${ImgPadHomeBanner});
`;
