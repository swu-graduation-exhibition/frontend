import styled from 'styled-components';

import { TABLET_WIDTH } from '~/constants/common';
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';

interface FlowerProp {
  length: number;
}

const Flowers = ({ length }: FlowerProp) => {
  const DESKTOP_FLOWERS = [
    '',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower1.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower2.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower3.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower4.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower5.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower6.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower7.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower8.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower9.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower10.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower11.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower12.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower13.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower14.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower15.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower16.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower17.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower18.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower19.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/DesktopFlower20.svg',
  ];
  const TABLET_FLOWERS = [
    '',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower1.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower2.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower3.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower4.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower5.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower6.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower7.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower8.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower9.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower10.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower11.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower12.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower13.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower14.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower15.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower16.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower17.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower18.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower19.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/TabletFlower20.svg',
  ];
  const MOBILE_FLOWERS = [
    '',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower1.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower2.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower3.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower4.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower5.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower6.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower7.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower8.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower9.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower10.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower11.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower12.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower13.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower14.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower15.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower16.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower17.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower18.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower19.svg',
    'https://swu-exhibit.s3.ap-northeast-2.amazonaws.com/web/MobileFlower20.svg',
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
