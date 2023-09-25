import { css, styled } from 'styled-components';
import { DesingerInfo } from '~/types/designer';
import ImgDefaultDesigner from '~/assets/images/img1_default_desinger.png';
import { useState } from 'react';
import { Default, Mobile } from '~/utils/mediaQuery';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { useNavigate } from 'react-router-dom';
import { getFieldArray } from '~/utils/getFieldArray';
const DesignerCard = ({ designer_id, name_ko, field, profile }: DesingerInfo) => {
  const navigate = useNavigate();

  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  const handleClickCard = () => {
    navigate(String(designer_id));
  };

  return (
    <CardWrapper
      onClick={handleClickCard}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <CardImg src={profile} alt="designer-card" />
      <Default>
        <>
          <CardHoverContent>
            {isMouseOn && (
              <TrackUl>
                {getFieldArray(field).map((data) => (
                  <TrackList key={name_ko + data}>{data}</TrackList>
                ))}
              </TrackUl>
            )}
          </CardHoverContent>
          <NameTitle>{name_ko}</NameTitle>
        </>
      </Default>
      <Mobile>
        <>
          <TrackUl>
            {getFieldArray(field).map((data, idx) => (
              <TrackList key={designer_id * idx}>{data}</TrackList>
            ))}
          </TrackUl>
          <MobileNameTitle>{name_ko}</MobileNameTitle>
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
  height: 412px;

  @media screen and (width <= ${TABLET_WIDTH}) {
    height: 351px;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    height: 172px;
  }

  object-fit: cover;
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
