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
  position: relative;
  padding: 6rem 5% 10rem 5%;
  width: 100%;
  padding-top: calc(968 / 1916 * 100%);

  height: 96.8rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${ImgHomeBanner});
`;
const MobileBannerWrapper = styled.div`
  position: relative;
  padding: 4% 3%;
  width: 100%;
  padding-top: calc(529 / 374 * 100%);

  height: 52.9rem;
  background-image: url(${ImgMobileHomeBanner});
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
  background-image: url(${ImgPadHomeBanner});
`;
