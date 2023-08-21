import { styled } from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';
import YoutubeList from './YoutubeList';

const Interview = () => {
  return (
    <InterviewWrapper>
      <Title>2023 졸업 작품 전시회 인터뷰</Title>
      <YoutubeList />
    </InterviewWrapper>
  );
};

export default Interview;

const InterviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16.7rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 3.4rem;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline_03};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Headline_01};
    margin-top: 3.4rem;
  }
`;
