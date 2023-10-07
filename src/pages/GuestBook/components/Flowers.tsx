import styled from 'styled-components';
import {
  DesktopFlower1,
  DesktopFlower10,
  DesktopFlower11,
  DesktopFlower12,
  DesktopFlower13,
  DesktopFlower14,
  DesktopFlower15,
  DesktopFlower16,
  DesktopFlower17,
  DesktopFlower18,
  DesktopFlower19,
  DesktopFlower2,
  DesktopFlower20,
  DesktopFlower3,
  DesktopFlower4,
  DesktopFlower5,
  DesktopFlower6,
  DesktopFlower7,
  DesktopFlower8,
  DesktopFlower9,
  MobileFlower1,
  MobileFlower10,
  MobileFlower11,
  MobileFlower12,
  MobileFlower13,
  MobileFlower14,
  MobileFlower15,
  MobileFlower16,
  MobileFlower17,
  MobileFlower18,
  MobileFlower19,
  MobileFlower2,
  MobileFlower20,
  MobileFlower3,
  MobileFlower4,
  MobileFlower5,
  MobileFlower6,
  MobileFlower7,
  MobileFlower8,
  MobileFlower9,
  TabletFlower1,
  TabletFlower10,
  TabletFlower11,
  TabletFlower12,
  TabletFlower13,
  TabletFlower14,
  TabletFlower15,
  TabletFlower16,
  TabletFlower17,
  TabletFlower18,
  TabletFlower19,
  TabletFlower2,
  TabletFlower20,
  TabletFlower3,
  TabletFlower4,
  TabletFlower5,
  TabletFlower6,
  TabletFlower7,
  TabletFlower8,
  TabletFlower9,
} from '~/assets/icons';
import { TABLET_WIDTH } from '~/constants/common';
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';

interface FlowerProp {
  length: number;
}

const Flowers = ({ length }: FlowerProp) => {
  const desktopFlowers = () => {
    if (length >= 190) {
      return <DesktopFlower20Img />;
    } else if (length >= 180) {
      return <DesktopFlower19Img />;
    } else if (length >= 170) {
      return <DesktopFlower18Img />;
    } else if (length >= 160) {
      return <DesktopFlower17Img />;
    } else if (length >= 150) {
      return <DesktopFlower16Img />;
    } else if (length >= 140) {
      return <DesktopFlower15Img />;
    } else if (length >= 130) {
      return <DesktopFlower14Img />;
    } else if (length >= 120) {
      return <DesktopFlower13Img />;
    } else if (length >= 110) {
      return <DesktopFlower12Img />;
    } else if (length >= 100) {
      return <DesktopFlower11Img />;
    } else if (length >= 90) {
      return <DesktopFlower10Img />;
    } else if (length >= 80) {
      return <DesktopFlower9Img />;
    } else if (length >= 70) {
      return <DesktopFlower8Img />;
    } else if (length >= 60) {
      return <DesktopFlower7Img />;
    } else if (length >= 50) {
      return <DesktopFlower6Img />;
    } else if (length >= 40) {
      return <DesktopFlower5Img />;
    } else if (length >= 30) {
      return <DesktopFlower4Img />;
    } else if (length >= 20) {
      return <DesktopFlower3Img />;
    } else if (length >= 10) {
      return <DesktopFlower2Img />;
    } else {
      return <DesktopFlower1Img />;
    }
  };

  const tabletFlowers = () => {
    if (length >= 190) {
      return <TabletFlower20Img />;
    } else if (length >= 180) {
      return <TabletFlower19Img />;
    } else if (length >= 170) {
      return <TabletFlower18Img />;
    } else if (length >= 160) {
      return <TabletFlower17Img />;
    } else if (length >= 150) {
      return <TabletFlower16Img />;
    } else if (length >= 140) {
      return <TabletFlower15Img />;
    } else if (length >= 130) {
      return <TabletFlower14Img />;
    } else if (length >= 120) {
      return <TabletFlower13Img />;
    } else if (length >= 110) {
      return <TabletFlower12Img />;
    } else if (length >= 100) {
      return <TabletFlower11Img />;
    } else if (length >= 90) {
      return <TabletFlower10Img />;
    } else if (length >= 80) {
      return <TabletFlower9Img />;
    } else if (length >= 70) {
      return <TabletFlower8Img />;
    } else if (length >= 60) {
      return <TabletFlower7Img />;
    } else if (length >= 50) {
      return <TabletFlower6Img />;
    } else if (length >= 40) {
      return <TabletFlower5Img />;
    } else if (length >= 30) {
      return <TabletFlower4Img />;
    } else if (length >= 20) {
      return <TabletFlower3 />;
    } else if (length >= 10) {
      return <TabletFlower2Img />;
    } else {
      return <TabletFlower1Img />;
    }
  };

  const mobileFlowers = () => {
    if (length >= 190) {
      return <MobileFlower20Img />;
    } else if (length >= 180) {
      return <MobileFlower19Img />;
    } else if (length >= 170) {
      return <MobileFlower18Img />;
    } else if (length >= 160) {
      return <MobileFlower17Img />;
    } else if (length >= 150) {
      return <MobileFlower16Img />;
    } else if (length >= 140) {
      return <MobileFlower15Img />;
    } else if (length >= 130) {
      return <MobileFlower14Img />;
    } else if (length >= 120) {
      return <MobileFlower13Img />;
    } else if (length >= 110) {
      return <MobileFlower12Img />;
    } else if (length >= 100) {
      return <MobileFlower11Img />;
    } else if (length >= 90) {
      return <MobileFlower10Img />;
    } else if (length >= 80) {
      return <MobileFlower9Img />;
    } else if (length >= 70) {
      return <MobileFlower8Img />;
    } else if (length >= 60) {
      return <MobileFlower7Img />;
    } else if (length >= 50) {
      return <MobileFlower6Img />;
    } else if (length >= 40) {
      return <MobileFlower5Img />;
    } else if (length >= 30) {
      return <MobileFlower4Img />;
    } else if (length >= 20) {
      return <MobileFlower3Img />;
    } else if (length >= 10) {
      return <MobileFlower2Img />;
    } else {
      return <MobileFlower1Img />;
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
  margin-left: -18rem;

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
  left: -0.5rem;
  z-index: -1;
  width: 105%;
`;

const DesktopFlower20Img = styled(DesktopFlower20)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower19Img = styled(DesktopFlower19)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower18Img = styled(DesktopFlower18)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower17Img = styled(DesktopFlower17)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower16Img = styled(DesktopFlower16)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower15Img = styled(DesktopFlower15)`
  width: 221.4rem;
  height: 91.7rem;
`;
const DesktopFlower14Img = styled(DesktopFlower14)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower13Img = styled(DesktopFlower13)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower12Img = styled(DesktopFlower12)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower11Img = styled(DesktopFlower11)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower10Img = styled(DesktopFlower10)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower9Img = styled(DesktopFlower9)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower8Img = styled(DesktopFlower8)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower7Img = styled(DesktopFlower7)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower6Img = styled(DesktopFlower6)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower5Img = styled(DesktopFlower5)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower4Img = styled(DesktopFlower4)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower3Img = styled(DesktopFlower3)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower2Img = styled(DesktopFlower2)`
  width: 221.4rem;
  height: 91.7rem;
`;

const DesktopFlower1Img = styled(DesktopFlower1)`
  width: 221.4rem;
  height: 91.7rem;
`;

// 태블릿
const TabletFlower20Img = styled(TabletFlower20)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower19Img = styled(TabletFlower19)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower18Img = styled(TabletFlower18)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower17Img = styled(TabletFlower17)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower16Img = styled(TabletFlower16)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower15Img = styled(TabletFlower15)`
  width: 83.1rem;
  height: 34.419rem;
`;
const TabletFlower14Img = styled(TabletFlower14)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower13Img = styled(TabletFlower13)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower12Img = styled(TabletFlower12)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower11Img = styled(TabletFlower11)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower10Img = styled(TabletFlower10)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower9Img = styled(TabletFlower9)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower8Img = styled(TabletFlower8)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower7Img = styled(TabletFlower7)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower6Img = styled(TabletFlower6)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower5Img = styled(TabletFlower5)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower4Img = styled(TabletFlower4)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower3Img = styled(TabletFlower3)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower2Img = styled(TabletFlower2)`
  width: 83.1rem;
  height: 34.419rem;
`;

const TabletFlower1Img = styled(TabletFlower1)`
  width: 83.1rem;
  height: 34.419rem;
`;

// 모바일
const MobileFlower20Img = styled(MobileFlower20)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower19Img = styled(MobileFlower19)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower18Img = styled(MobileFlower18)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower17Img = styled(MobileFlower17)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower16Img = styled(MobileFlower16)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower15Img = styled(MobileFlower15)`
  width: 37.505rem;
  height: 15.534rem;
`;
const MobileFlower14Img = styled(MobileFlower14)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower13Img = styled(MobileFlower13)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower12Img = styled(MobileFlower12)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower11Img = styled(MobileFlower11)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower10Img = styled(MobileFlower10)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower9Img = styled(MobileFlower9)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower8Img = styled(MobileFlower8)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower7Img = styled(MobileFlower7)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower6Img = styled(MobileFlower6)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower5Img = styled(MobileFlower5)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower4Img = styled(MobileFlower4)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower3Img = styled(MobileFlower3)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower2Img = styled(MobileFlower2)`
  width: 37.505rem;
  height: 15.534rem;
`;

const MobileFlower1Img = styled(MobileFlower1)`
  width: 37.505rem;
  height: 15.534rem;
`;
