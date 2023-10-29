import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { HOME_MOBILE_WIDTH, HOME_TABLET_WIDTH, MOBILE_WIDTH } from '~/constants/common';

import { TrackDataInfo } from '~/types/home';

const TrackCard = ({ title, desc, url }: TrackDataInfo) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(url);
  };
  return (
    <TrackCardWrapper onClick={handleClickCard}>
      <TitleWrapper>
        <Title fontSize={title.includes('Digital')}>{title.toUpperCase()}</Title>
        <img src={`${import.meta.env.VITE_SWU_IMAGE}/ic_arrow_home.svg`} />
      </TitleWrapper>
      <Description>{desc}</Description>
    </TrackCardWrapper>
  );
};

export default TrackCard;

const TrackCardWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 42rem;

  gap: 3.2rem;
  padding: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.Black};

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    width: 53.6rem;
    height: 42rem;
  }
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
  width: 100%;
  position: relative;
  img {
    position: absolute;
    right: 0;
    width: 5.6rem;
    height: 5.6rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    img {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;
const Title = styled.h3<{ fontSize: boolean }>`
  font-family: 'Ade';
  font-size: ${({ fontSize }) => (fontSize ? '45px' : '52px')};
  font-weight: 400;
  color: var(--grayscales-900, #212529);

  width: fit-content;
  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    font-size: 52px;
  }
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
