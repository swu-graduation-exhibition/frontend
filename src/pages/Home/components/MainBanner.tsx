import { styled } from 'styled-components';
import ImgHomeBanner from '~/assets/images/img1_home.png';
import ImgMobileHomeBanner from '~/assets/images/img1_home_mobile.png';
import { LocationContent, UniversityContent } from '.';
import { Default, Mobile } from '~/utils/mediaQuery';

const MainBanner = () => {
  return (
    <>
      <Default>
        <MainBannerWrapper>
          <UniversityContent />
          <LocationContent />
        </MainBannerWrapper>
      </Default>
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

  padding: 9rem 5% 9rem 10%;

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
  min-height: 52.9rem;
  background-image: url(${ImgMobileHomeBanner});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;