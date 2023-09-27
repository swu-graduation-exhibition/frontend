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
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';

interface FlowerProp {
  length: number;
}

const Flowers = ({ length }: FlowerProp) => {
  const desktopFlowers = () => {
    if (length >= 190) {
      return <DesktopFlower20 />;
    } else if (length >= 180) {
      return <DesktopFlower19 />;
    } else if (length >= 170) {
      return <DesktopFlower18 />;
    } else if (length >= 160) {
      return <DesktopFlower17 />;
    } else if (length >= 150) {
      return <DesktopFlower16 />;
    } else if (length >= 140) {
      return <DesktopFlower15 />;
    } else if (length >= 130) {
      return <DesktopFlower14 />;
    } else if (length >= 120) {
      return <DesktopFlower13 />;
    } else if (length >= 110) {
      return <DesktopFlower12 />;
    } else if (length >= 100) {
      return <DesktopFlower11 />;
    } else if (length >= 90) {
      return <DesktopFlower10 />;
    } else if (length >= 80) {
      return <DesktopFlower9 />;
    } else if (length >= 70) {
      return <DesktopFlower8 />;
    } else if (length >= 60) {
      return <DesktopFlower7 />;
    } else if (length >= 50) {
      return <DesktopFlower6 />;
    } else if (length >= 40) {
      return <DesktopFlower5 />;
    } else if (length >= 30) {
      return <DesktopFlower4 />;
    } else if (length >= 20) {
      return <DesktopFlower3 />;
    } else if (length >= 10) {
      return <DesktopFlower2 />;
    } else {
      return <DesktopFlower1 />;
    }
  };

  const tabletFlowers = () => {
    if (length >= 190) {
      return <TabletFlower20 />;
    } else if (length >= 180) {
      return <TabletFlower19 />;
    } else if (length >= 170) {
      return <TabletFlower18 />;
    } else if (length >= 160) {
      return <TabletFlower17 />;
    } else if (length >= 150) {
      return <TabletFlower16 />;
    } else if (length >= 140) {
      return <TabletFlower15 />;
    } else if (length >= 130) {
      return <TabletFlower14 />;
    } else if (length >= 120) {
      return <TabletFlower13 />;
    } else if (length >= 110) {
      return <TabletFlower12 />;
    } else if (length >= 100) {
      return <TabletFlower11 />;
    } else if (length >= 90) {
      return <TabletFlower10 />;
    } else if (length >= 80) {
      return <TabletFlower9 />;
    } else if (length >= 70) {
      return <TabletFlower8 />;
    } else if (length >= 60) {
      return <TabletFlower7 />;
    } else if (length >= 50) {
      return <TabletFlower6 />;
    } else if (length >= 40) {
      return <TabletFlower5 />;
    } else if (length >= 30) {
      return <TabletFlower4 />;
    } else if (length >= 20) {
      return <TabletFlower3 />;
    } else if (length >= 10) {
      return <TabletFlower2 />;
    } else {
      return <TabletFlower1 />;
    }
  };

  const mobileFlowers = () => {
    if (length >= 190) {
      return <MobileFlower20 />;
    } else if (length >= 180) {
      return <MobileFlower19 />;
    } else if (length >= 170) {
      return <MobileFlower18 />;
    } else if (length >= 160) {
      return <MobileFlower17 />;
    } else if (length >= 150) {
      return <MobileFlower16 />;
    } else if (length >= 140) {
      return <MobileFlower15 />;
    } else if (length >= 130) {
      return <MobileFlower14 />;
    } else if (length >= 120) {
      return <MobileFlower13 />;
    } else if (length >= 110) {
      return <MobileFlower12 />;
    } else if (length >= 100) {
      return <MobileFlower11 />;
    } else if (length >= 90) {
      return <MobileFlower10 />;
    } else if (length >= 80) {
      return <MobileFlower9 />;
    } else if (length >= 70) {
      return <MobileFlower8 />;
    } else if (length >= 60) {
      return <MobileFlower7 />;
    } else if (length >= 50) {
      return <MobileFlower6 />;
    } else if (length >= 40) {
      return <MobileFlower5 />;
    } else if (length >= 30) {
      return <MobileFlower4 />;
    } else if (length >= 20) {
      return <MobileFlower3 />;
    } else if (length >= 10) {
      return <MobileFlower2 />;
    } else {
      return <MobileFlower1 />;
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

  /* margin-top: 100rem; */

  bottom: 0;
  z-index: -3;

  width: 105%;
  margin-left: -2.5%;
`;

const MobileContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  z-index: -1;

  width: 105%;

  /* height: 139.5rem; */

  margin-left: -2.5%;
`;
