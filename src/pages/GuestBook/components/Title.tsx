import styled from 'styled-components';
import { GuestBookTitleIc } from '~/assets/icons';
import { MOBILE_WIDTH } from '~/constants/common';

const Title = () => {
  return (
    <GuestBookTitle>
      <GuestBookTitleIcon />
      <h1>Guest Book</h1>
    </GuestBookTitle>
  );
};

export default Title;

const GuestBookTitle = styled.header`
  display: flex;
  align-items: flex-start;

  height: 7.5rem;

  color: ${({ theme }) => theme.colors.Grayscales_800};
  ${({ theme }) => theme.fonts.Headline_03};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    align-items: flex-start;

    height: 4.2rem;

    ${({ theme }) => theme.fonts.Subtitle_02};
  }
`;

const GuestBookTitleIcon = styled(GuestBookTitleIc)`
  width: 1.9rem;
  margin-top: 0.5rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 1rem;
  }
`;
