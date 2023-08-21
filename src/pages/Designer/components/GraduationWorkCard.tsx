import { useState } from 'react';
import { styled } from 'styled-components';
import { GraduationWorkInfo } from '~/types/designer';
import ImgCardDefault from '~/assets/images/card3_default_desigenr.png';
import { MOBILE_WIDTH } from '~/constants/common';
import { Default, Mobile } from '~/utils/mediaQuery';

const GraduationWorkCard = ({ img, track, title, memberList }: GraduationWorkInfo) => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  return (
    <CardWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ImgWrapper>
        {isMouseOn && <CardHoverContent />}
        <WorkImg src={ImgCardDefault} />
      </ImgWrapper>

      <Default>
        <>
          <TrackWrapper>
            {track.map((text, idx) => (
              <span key={text + idx}>{text}</span>
            ))}
          </TrackWrapper>
          <ProjectName>{title}</ProjectName>
        </>
      </Default>
      <Mobile>
        <>
          <ProjectName>{title}</ProjectName>
          <TrackWrapper>
            {memberList.map((text, idx) => (
              <span key={text + idx}>{text}</span>
            ))}
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
  width: 100%;
  height: 100%;
  position: relative;

  cursor: pointer;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    height: 29.7rem;
  }
`;
const WorkImg = styled.img`
  width: 100%;
  height: 100%;
`;

const TrackWrapper = styled.div`
  display: flex;
  gap: 1%;
  margin-top: 2.5rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-left: 1.6rem;
    margin-top: 0.2rem;
    margin-bottom: 6.4rem;
  }

  span {
    ${({ theme }) => theme.fonts.Subtitle_03};

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Body_04};
    }
  }
`;

const ProjectName = styled.div`
  ${({ theme }) => theme.fonts.Body_03};
  margin-top: 1rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Subtitle_03};
    margin-left: 1.6rem;
    margin-top: 1.3rem;
  }
`;