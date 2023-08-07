import { styled } from 'styled-components';
import ImgHomeBanner from '~/assets/images/img1_home.png';
import ImgMobileHomeBanner from '~/assets/images/img1_home_mobile.png';
import { LocationContent, UniversityContent } from '.';

const MainBanner = () => {
  return (
    <MainBannerWrapper>
      <UniversityContent />
      <LocationContent />
    </MainBannerWrapper>
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

  @media screen and (width <= 830px) {
    padding: 4% 3%;
    height: fit-content;
    min-height: 52.9rem;
    background-image: url(${ImgMobileHomeBanner});
  }
`;
