import { css, styled } from 'styled-components';
import { IcStarAll } from '~/assets/icons';
import { designerData } from '../data/designerData';
import DesignerCard from './DesignerCard';
import { MOBILE_WIDTH } from '~/constants/common';
import { Default, Mobile } from '~/utils/mediaQuery';

const DesignerContainer = () => {
  return (
    <Container>
      <NavTitle>
        <IcStarAll />
        Designer
      </NavTitle>
      <Mobile>
        <MobileTextWrapper>
          <DetailMobileText>Seoul Women’s University </DetailMobileText>
          <DetailMobileText>Industrial Design</DetailMobileText>
        </MobileTextWrapper>
      </Mobile>
      <Default>
        <DetailText>Seoul Women’s University • Industrial Design</DetailText>
      </Default>
      <DesignerCardWrapper>
        {designerData.map(({ name, track, img }, idx) => (
          <DesignerCard key={idx} name={name} track={track} img={img} />
        ))}
      </DesignerCardWrapper>
    </Container>
  );
};

export default DesignerContainer;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  margin-top: 16rem;
  padding: 0% 7%;

  @media screen and (width <= 1400px) {
    justify-content: flex-start;
    height: fit-content;
    flex-direction: column;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 2.3rem;
  }
`;

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
        width: 1rem;
        height: 1rem;
        top: 0rem;
      }
    }
  `,
);

const DetailText = styled.span(
  ({ theme }) => theme.fonts.Body_04,
  css`
    margin-top: 1.6rem;
  `,
);
const MobileTextWrapper = styled.div`
  margin-top: 0.4rem;
`;
const DetailMobileText = styled.p(
  ({ theme }) => theme.fonts.Mobile_Caption_01,
  css`
    margin-top: 0.4rem;
  `,
);

const DesignerCardWrapper = styled.section`
  display: grid;
  max-width: 164.8rem;
  margin-top: 10rem;
  margin-bottom: 13.6rem;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (width <= 830px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3.5rem;
    margin-top: 6rem;
  }
`;