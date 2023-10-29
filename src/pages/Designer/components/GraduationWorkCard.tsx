import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { ProjectInfo } from '~/types/designer';
import { getFieldString } from '~/utils/getFieldArray';
import { Default, HomeDesktop, Mobile } from '~/utils/mediaQuery';

const GraduationWorkCard = ({ projectId, photo, title, type, members }: ProjectInfo) => {
  const [isMouseOn, setIsMouseOn] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  const handleClickCard = () => {
    navigate(`/project/detail/${projectId}`);
  };

  return (
    <CardWrapper
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClickCard}
    >
      <Default>
        <ImgWrapper>
          <HomeDesktop>
            <>{isMouseOn && <CardHoverContent />}</>
          </HomeDesktop>
          <WorkImg src={photo} />
        </ImgWrapper>
      </Default>
      <Mobile>
        <WorkImg src={photo} />
      </Mobile>

      <Default>
        <>
          <TrackWrapper>
            <span>{getFieldString(type)}</span>
          </TrackWrapper>
          <ProjectName>{title}</ProjectName>
        </>
      </Default>
      <Mobile>
        <>
          <ProjectName>{title}</ProjectName>
          <TrackWrapper>
            <span>{members}</span>
          </TrackWrapper>
        </>
      </Mobile>
    </CardWrapper>
  );
};

export default GraduationWorkCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 100%;
  }
`;

const CardHoverContent = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgb(0 0 0 / 40%);
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 45rem;
  height: 45rem;

  cursor: pointer;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    width: 30rem;
    height: 30rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 100%;
    height: 37.5rem;
  }
`;
const WorkImg = styled.img`
  width: 100%;

  object-fit: contain;

  border: 1px solid black;
`;

const TrackWrapper = styled.div`
  display: flex;
  gap: 1%;
  margin-top: 2.5rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 0.2rem;
    margin-left: 1.6rem;
  }

  span {
    ${({ theme }) => theme.fonts.Subtitle_03};

    @media screen and (width <= ${HOME_TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Subtitle_02};
    }

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Body_04};
    }
  }
`;

const ProjectName = styled.div`
  ${({ theme }) => theme.fonts.Body_03};
  margin-top: 1rem;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_02};
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Subtitle_03};
    margin-left: 1.6rem;
    margin-top: 1.3rem;
  }
`;
