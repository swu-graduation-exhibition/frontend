import styled from 'styled-components';

import { TABLET_WIDTH } from '~/constants/common';
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';

interface FlowerProp {
  length: number;
}

const Flowers = ({ length }: FlowerProp) => {
  const DESKTOP_FLOWERS = [
    ``,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower1.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower2.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower3.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower4.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower5.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower6.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower7.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower8.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower9.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower10.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower11.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower12.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower13.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower14.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower15.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower16.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower17.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower18.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower19.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/DesktopFlower20.svg`,
  ];
  const TABLET_FLOWERS = [
    ``,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower1.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower2.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower3.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower4.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower5.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower6.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower7.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower8.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower9.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower10.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower11.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower12.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower13.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower14.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower15.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower16.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower17.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower18.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower19.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/TabletFlower20.svg`,
  ];
  const MOBILE_FLOWERS = [
    ``,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower1.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower2.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower3.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower4.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower5.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower6.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower7.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower8.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower9.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower10.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower11.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower12.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower13.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower14.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower15.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower16.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower17.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower18.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower19.svg`,
    `${import.meta.env.VITE_SWU_FLOWER}/MobileFlower20.svg`,
  ];

  const desktopFlowers = () => {
    if (length >= 190) {
      return <DesktopFlower src={DESKTOP_FLOWERS[20]} />;
    } else if (length >= 180) {
      return <DesktopFlower src={DESKTOP_FLOWERS[19]} />;
    } else if (length >= 170) {
      return <DesktopFlower src={DESKTOP_FLOWERS[18]} />;
    } else if (length >= 160) {
      return <DesktopFlower src={DESKTOP_FLOWERS[17]} />;
    } else if (length >= 150) {
      return <DesktopFlower src={DESKTOP_FLOWERS[16]} />;
    } else if (length >= 140) {
      return <DesktopFlower src={DESKTOP_FLOWERS[15]} />;
    } else if (length >= 130) {
      return <DesktopFlower src={DESKTOP_FLOWERS[14]} />;
    } else if (length >= 120) {
      return <DesktopFlower src={DESKTOP_FLOWERS[13]} />;
    } else if (length >= 110) {
      return <DesktopFlower src={DESKTOP_FLOWERS[12]} />;
    } else if (length >= 100) {
      return <DesktopFlower src={DESKTOP_FLOWERS[11]} />;
    } else if (length >= 90) {
      return <DesktopFlower src={DESKTOP_FLOWERS[10]} />;
    } else if (length >= 80) {
      return <DesktopFlower src={DESKTOP_FLOWERS[9]} />;
    } else if (length >= 70) {
      return <DesktopFlower src={DESKTOP_FLOWERS[8]} />;
    } else if (length >= 60) {
      return <DesktopFlower src={DESKTOP_FLOWERS[7]} />;
    } else if (length >= 50) {
      return <DesktopFlower src={DESKTOP_FLOWERS[6]} />;
    } else if (length >= 40) {
      return <DesktopFlower src={DESKTOP_FLOWERS[5]} />;
    } else if (length >= 30) {
      return <DesktopFlower src={DESKTOP_FLOWERS[4]} />;
    } else if (length >= 20) {
      return <DesktopFlower src={DESKTOP_FLOWERS[3]} />;
    } else if (length >= 10) {
      return <DesktopFlower src={DESKTOP_FLOWERS[2]} />;
    } else {
      return <DesktopFlower src={DESKTOP_FLOWERS[1]} />;
    }
  };

  const tabletFlowers = () => {
    if (length >= 190) {
      return <TabletFlower src={TABLET_FLOWERS[20]} />;
    } else if (length >= 180) {
      return <TabletFlower src={TABLET_FLOWERS[19]} />;
    } else if (length >= 170) {
      return <TabletFlower src={TABLET_FLOWERS[18]} />;
    } else if (length >= 160) {
      return <TabletFlower src={TABLET_FLOWERS[17]} />;
    } else if (length >= 150) {
      return <TabletFlower src={TABLET_FLOWERS[16]} />;
    } else if (length >= 140) {
      return <TabletFlower src={TABLET_FLOWERS[15]} />;
    } else if (length >= 130) {
      return <TabletFlower src={TABLET_FLOWERS[14]} />;
    } else if (length >= 120) {
      return <TabletFlower src={TABLET_FLOWERS[13]} />;
    } else if (length >= 110) {
      return <TabletFlower src={TABLET_FLOWERS[12]} />;
    } else if (length >= 100) {
      return <TabletFlower src={TABLET_FLOWERS[11]} />;
    } else if (length >= 90) {
      return <TabletFlower src={TABLET_FLOWERS[10]} />;
    } else if (length >= 80) {
      return <TabletFlower src={TABLET_FLOWERS[9]} />;
    } else if (length >= 70) {
      return <TabletFlower src={TABLET_FLOWERS[8]} />;
    } else if (length >= 60) {
      return <TabletFlower src={TABLET_FLOWERS[7]} />;
    } else if (length >= 50) {
      return <TabletFlower src={TABLET_FLOWERS[6]} />;
    } else if (length >= 40) {
      return <TabletFlower src={TABLET_FLOWERS[5]} />;
    } else if (length >= 30) {
      return <TabletFlower src={TABLET_FLOWERS[4]} />;
    } else if (length >= 20) {
      return <TabletFlower src={TABLET_FLOWERS[3]} />;
    } else if (length >= 10) {
      return <TabletFlower src={TABLET_FLOWERS[2]} />;
    } else {
      return <TabletFlower src={TABLET_FLOWERS[1]} />;
    }
  };

  const mobileFlowers = () => {
    if (length >= 190) {
      return <MobileFlower src={MOBILE_FLOWERS[20]} />;
    } else if (length >= 180) {
      return <MobileFlower src={MOBILE_FLOWERS[19]} />;
    } else if (length >= 170) {
      return <MobileFlower src={MOBILE_FLOWERS[18]} />;
    } else if (length >= 160) {
      return <MobileFlower src={MOBILE_FLOWERS[17]} />;
    } else if (length >= 150) {
      return <MobileFlower src={MOBILE_FLOWERS[16]} />;
    } else if (length >= 140) {
      return <MobileFlower src={MOBILE_FLOWERS[15]} />;
    } else if (length >= 130) {
      return <MobileFlower src={MOBILE_FLOWERS[14]} />;
    } else if (length >= 120) {
      return <MobileFlower src={MOBILE_FLOWERS[13]} />;
    } else if (length >= 110) {
      return <MobileFlower src={MOBILE_FLOWERS[12]} />;
    } else if (length >= 100) {
      return <MobileFlower src={MOBILE_FLOWERS[11]} />;
    } else if (length >= 90) {
      return <MobileFlower src={MOBILE_FLOWERS[10]} />;
    } else if (length >= 80) {
      return <MobileFlower src={MOBILE_FLOWERS[9]} />;
    } else if (length >= 70) {
      return <MobileFlower src={MOBILE_FLOWERS[8]} />;
    } else if (length >= 60) {
      return <MobileFlower src={MOBILE_FLOWERS[7]} />;
    } else if (length >= 50) {
      return <MobileFlower src={MOBILE_FLOWERS[6]} />;
    } else if (length >= 40) {
      return <MobileFlower src={MOBILE_FLOWERS[5]} />;
    } else if (length >= 30) {
      return <MobileFlower src={MOBILE_FLOWERS[4]} />;
    } else if (length >= 20) {
      return <MobileFlower src={MOBILE_FLOWERS[3]} />;
    } else if (length >= 10) {
      return <MobileFlower src={MOBILE_FLOWERS[2]} />;
    } else {
      return <MobileFlower src={MOBILE_FLOWERS[1]} />;
    }
  };

  return (
    <>
      <Desktop>
        <DesktopContainer>{desktopFlowers()}</DesktopContainer>
      </Desktop>
      <Tablet>
        <DesktopContainer>{tabletFlowers()}</DesktopContainer>
      </Tablet>
      <Mobile>
        <MobileContainer>{mobileFlowers()}</MobileContainer>
      </Mobile>
    </>
  );
};

export default Flowers;

const DesktopContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  z-index: -3;
  width: 110%;
  margin-top: -35%;
  margin-left: -22rem;

  @media screen and (width <= 1400px) {
    margin-top: -40%;
  }

  @media screen and (width <= 1200px) {
    margin-top: -45%;
  }

  @media screen and (width <= 1000px) {
    margin-left: -16rem;
  }

  @media screen and (width <= 950px) {
    margin-left: -10rem;
  }

  @media screen and (width <= ${TABLET_WIDTH}) {
    margin-left: -5rem;
  }
`;

const MobileContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 65%;
  bottom: 12rem;
  left: -1.5rem;
  z-index: -1;
  width: 105%;
`;

const DesktopFlower = styled.img`
  width: 95%;
`;

// 태블릿
const TabletFlower = styled.img`
  width: 95%;
`;

// 모바일
const MobileFlower = styled.img`
  width: 95%;
`;
