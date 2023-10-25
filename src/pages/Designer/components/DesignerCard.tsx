import { css, styled } from 'styled-components';
import { DesingerInfo } from '~/types/designer';
import { useState } from 'react';
import { Default, HomeDesktop, Mobile } from '~/utils/mediaQuery';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { useNavigate } from 'react-router-dom';
import { getFieldArray } from '~/utils/getFieldArray';

interface DesignerCardProps extends DesingerInfo {
  isFirst: boolean;
}
const DesignerCard = ({ designer_id, name_ko, field, profile, isFirst }: DesignerCardProps) => {
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
      <CardImg src={profile} alt="designer-card" className={isFirst ? 'first' : 'second'} />
      <Default>
        <>
          <HomeDesktop>
            <>
              {isMouseOn && (
                <CardHoverContent>
                  <TrackUl>
                    {getFieldArray(field)
                      .reverse()
                      .map((data) => (
                        <TrackList key={name_ko + data}>{data}</TrackList>
                      ))}
                  </TrackUl>
                </CardHoverContent>
              )}
            </>
          </HomeDesktop>

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

    .second {
      border-right: 0.2px solid black;
    }
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 618px;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    height: 527.25px;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    height: 257.25px;
    border-bottom: 0.2px solid black;
    border-top: 0.2px solid black;
    border-left: 0.2px solid black;
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
  right: 7%;

  display: flex;
  flex-direction: row-reverse;
  gap: 1.6rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    position: relative;
    top: 0;
    right: 0;
    gap: 1.2rem;
    flex-direction: row;
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
