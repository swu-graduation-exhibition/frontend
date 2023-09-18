import styled, { css } from 'styled-components';
import { IcStarAll } from '~/assets/icons';
import { MOBILE_WIDTH } from '~/constants/common';

const Title = () => {
  return (
    <NavTitle>
      <IcStarAll />
      Guest Book
    </NavTitle>
  );
};

export default Title;

const NavTitle = styled.header(
  ({ theme }) => theme.fonts.Headline_03,
  css`
    display: flex;

    width: fit-content;
    height: fit-content;

    svg {
      position: relative;
      top: 1rem;
      margin-right: 0.5rem;
    }

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
