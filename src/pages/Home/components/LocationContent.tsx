import { styled } from 'styled-components';
import { HOME_MOBILE_WIDTH, HOME_TABLET_WIDTH, TABLET_WIDTH } from '~/constants/common';

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
  align-items: flex-end;
  position: absolute;
  right: 13.5rem;
  bottom: 8.7rem;
  flex-direction: column;

  gap: 1rem;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    right: 6.4rem;
    bottom: 6.4rem;
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    right: 1.5rem;
    bottom: 2rem;
  }
`;

const BannerTopContent = styled.div`
  ${({ theme }) => theme.fonts.Body_04};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_01};
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_05};
  }
`;

const BannerBottomContent = styled.div`
  ${({ theme }) => theme.fonts.Body_03};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Body_05};
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_02};
  }
`;
