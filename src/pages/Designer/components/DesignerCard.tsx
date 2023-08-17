import { css, styled } from 'styled-components';
import { DesingerInfo } from '~/types/designer';
import ImgDefaultDesigner from '~/assets/images/img1_default_desinger.png';
import { useState } from 'react';
import { Default, Mobile } from '~/utils/mediaQuery';
import { MOBILE_WIDTH } from '~/constants/common';
const DesignerCard = ({ name, track, img }: DesingerInfo) => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  return (
    <CardWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardImg src={ImgDefaultDesigner} alt="designer-card" />
      <Default>
        <>
          <CardHoverContent>
            {isMouseOn && (
              <TrackUl>
                {track.map((data) => (
                  <TrackList key={name + data}>{data}</TrackList>
                ))}
              </TrackUl>
            )}
          </CardHoverContent>
          <NameTitle>{name}</NameTitle>
        </>
      </Default>
      <Mobile>
        <>
          <TrackUl>
            {track.map((data) => (
              <TrackList key={name + data}>{data}</TrackList>
            ))}
          </TrackUl>
          <MobileNameTitle>{name}</MobileNameTitle>
        </>
      </Mobile>
    </CardWrapper>
  );
};

export default DesignerCard;

const CardWrapper = styled.div`
  position: relative;
  @media screen and (width <= ${MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;
const CardHoverContent = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgb(0 0 0 / 40%);
`;

const NameTitle = styled.header(
  ({ theme }) => theme.fonts.Body_03,
  css`
    position: absolute;
    bottom: 7%;
    left: 7%;

    color: ${({ theme }) => theme.colors.White};
  `,
);

const MobileNameTitle = styled.header`
  ${({ theme }) => theme.fonts.Mobile_Subtitle_03};
`;

const TrackUl = styled.ul`
  position: absolute;
  top: 7%;
  right: 17%;

  display: flex;
  gap: 10%;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    position: relative;
    top: 0;
    right: 0;
    gap: 1.2rem;
  }
`;
const TrackList = styled.li(
  ({ theme }) => theme.fonts.Body_03,
  css`
    color: ${({ theme }) => theme.colors.White};

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_04};
      color: ${({ theme }) => theme.colors.Black};
    }
  `,
);
