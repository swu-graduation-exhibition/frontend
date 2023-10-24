import styled, { css } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';

const Title = () => {
  return (
    <NavTitle>
      <IconStarAll src={`${import.meta.env.VITE_SWU_IMAGE}/ic_star_all.svg`} />
      Guest Book
    </NavTitle>
  );
};

export default Title;

const IconStarAll = styled.img`
  width: 1.9rem;
  margin-right: 0.4rem;

  @media screen and (width<=${TABLET_WIDTH}) {
    width: 1rem;
    margin-right: 0.2rem;
  }

  @media screen and (width<=${MOBILE_WIDTH}) {
    margin-right: 0;
  }
`;

const NavTitle = styled.header(
  ({ theme }) => theme.fonts.Headline_03,
  css`
    display: flex;

    width: fit-content;
    height: fit-content;

    @media screen and (width <= 1400px) {
      ${({ theme }) => theme.fonts.Subtitle_02}
    }

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_01};
      svg {
        top: 0;
        width: 1rem;
        height: 1rem;
      }
    }
  `,
);
