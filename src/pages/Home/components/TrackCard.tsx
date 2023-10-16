import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { IcArrowHome } from '~/assets/icons';
import { MOBILE_WIDTH } from '~/constants/common';

import { TrackDataInfo } from '~/types/home';

const TrackCard = ({ title, desc, url }: TrackDataInfo) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(url);
  };
  return (
    <TrackCardWrapper onClick={handleClickCard}>
      <TitleWrapper>
        <Title>{title.toUpperCase()}</Title>
        <IcArrowHome />
      </TitleWrapper>
      <Description>{desc}</Description>
    </TrackCardWrapper>
  );
};

export default TrackCard;

const TrackCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 53.6rem;
  height: 42rem;

  gap: 3.2rem;
  padding: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.Black};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 27.5rem;
    height: 21.6rem;
    padding: 2rem;
  }
`;
const TitleWrapper = styled.header`
  display: flex;
  white-space: pre-line;
  justify-content: space-between;

  svg {
    width: 5.6rem;
    height: 5.6rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;
const Title = styled.h3`
  font-family: 'Ade';
  font-size: 52px;
  font-weight: 400;
  color: var(--grayscales-900, #212529);

  width: fit-content;
  @media screen and (width <= ${MOBILE_WIDTH}) {
    font-size: 26px;
  }
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.Caption_01};
  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Caption_01};
  }
`;
