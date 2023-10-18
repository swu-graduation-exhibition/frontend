import { styled } from 'styled-components';
import { ReactComponent as IcHeaderLogo } from '~/assets/icons/ic_header_logo.svg';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH } from '~/constants/common';

const ConceptContent = () => {
  return (
    <ConceptContentWrapper>
      <TextRootWrapper>
        <Title>제 40회 2023 서울여자대학교 산업디자인학과 졸업 작품 전시회 </Title>
        <IcHeaderLogo width={555} height={94} />
        <SubTitle>[ 여행을 시작하다 · 출발하다 ]</SubTitle>

        <Description>
          더 나은 나를 만나고, 성장하기 위해 열심히 달려왔습니다.
          <br />
          그리고 저희는 또 다른 시작의 출발점에 서있습니다.
          <br />
          <br />
          지금까지의 여정을 되돌아보며
          <br /> 하나의 꽃으로서 활짝 핀 저희의 모습을 전시에 담았습니다.
          <br />
          <br />
          꽃이 만개한 순간, 새로운 꿈과 목표를 향한
          <br />
          우리의 모험을 설레는 마음으로 이제 시작합니다.
        </Description>
      </TextRootWrapper>
    </ConceptContentWrapper>
  );
};

export default ConceptContent;

const ConceptContentWrapper = styled.div`
  position: relative;
  display: flex;
`;
const TextRootWrapper = styled.div`
  svg {
    path {
      fill: black;
    }
    @media screen and (width <= ${MOBILE_WIDTH}) {
      width: 23rem;
      height: 3.8rem;
    }
  }
`;
const Title = styled.div`
  ${({ theme }) => theme.fonts.Caption_01};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Caption_03};
  }
`;
const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.Body_01};
  margin-bottom: 5rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_01};
    margin-bottom: 2.6rem;
  }
`;

const Description = styled.div`
  ${({ theme }) => theme.fonts.Body_04};
  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_01};
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_05};
    background-color: ${({ theme }) => theme.colors.White};
  }
`;
