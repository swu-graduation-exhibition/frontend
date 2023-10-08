import { styled } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';

const LocationContent = () => {
  return (
    <MainContentWrapper>
      <BannerTopContent>서울여자대학교 조형예술관 바롬전시갤러리</BannerTopContent>
      <BannerBottomContent>22.10.31(월) - 11.06(일) AM 10:00 - PM 20:00</BannerBottomContent>
    </MainContentWrapper>
  );
};

export default LocationContent;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 1rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    position: absolute;
    bottom: 2rem;
    right: 1.5rem;
  }
`;

const BannerTopContent = styled.div`
  ${({ theme }) => theme.fonts.Body_04};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_01};
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_05};
  }
`;

const BannerBottomContent = styled.div`
  ${({ theme }) => theme.fonts.Body_03};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Body_05};
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_02};
  }
`;
