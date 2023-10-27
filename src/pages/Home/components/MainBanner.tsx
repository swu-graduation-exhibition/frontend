import { styled } from 'styled-components';
import { HomeDesktop, HomeMobile, HomeTablet } from '~/utils/mediaQuery';
import { LocationContent, UniversityContent } from '.';

const MainBanner = () => {
  return (
    <>
      <HomeDesktop>
        <MainImg src={`${import.meta.env.VITE_SWU_IMAGE}/banner_home_pc.png`} />
      </HomeDesktop>
      <HomeTablet>
        <MainImg src={`${import.meta.env.VITE_SWU_IMAGE}/banner_home_tab.png`} />
      </HomeTablet>
      <HomeMobile>
        <MainImg src={`${import.meta.env.VITE_SWU_IMAGE}/banner_home_mobile.jpg`} />
      </HomeMobile>
    </>
  );
};

export default MainBanner;

const MainImg = styled.img`
  width: 100%;

  object-fit: cover;
`;
