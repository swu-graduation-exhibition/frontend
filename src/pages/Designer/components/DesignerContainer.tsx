import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { css, styled } from 'styled-components';
import TopButton from '~/common/components/TopButton';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { useDesignerList } from '~/lib/api/designer/get-designer-list';
import { Default, Mobile } from '~/utils/mediaQuery';
import DesignerCard from './DesignerCard';

const DesignerContainer = () => {
  const { data } = useDesignerList();

  if (data?.data) {
    const designerInfoList = data.data;

    return (
      <Container>
        <NavTitle>
          <IconStarAll src={`${import.meta.env.VITE_SWU_IMAGE}/ic_star_all.svg`} />
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
        <LazyLoadComponent>
          <DesignerCardWrapper>
            {designerInfoList.map(({ designer_id, name_ko, field, profile }, idx) => (
              <DesignerCard
                isFirst={window.screen.width >= 832 ? idx % 3 === 0 : idx % 2 === 0}
                key={`${designer_id}-${name_ko}`}
                designer_id={designer_id}
                name_ko={name_ko}
                field={field}
                profile={profile}
              />
            ))}
          </DesignerCardWrapper>
        </LazyLoadComponent>
        <Mobile>
          <TopButton />
        </Mobile>
      </Container>
    );
  }
};

export default DesignerContainer;

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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 16rem;
  padding: 0% 7%;

  @media screen and (width <= ${`1400px`}) {
    justify-content: flex-start;
    height: fit-content;
    flex-direction: column;
  }

  @media screen and (width <= ${TABLET_WIDTH}) {
    margin-top: 4rem;
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

    @media screen and (width <= ${`1400px`}) {
      ${({ theme }) => theme.fonts.Subtitle_02}
    }

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_01};
      img {
        top: 0;
        width: 1rem;
        height: 1rem;
      }
    }
  `,
);

const DetailText = styled.span(
  ({ theme }) => theme.fonts.Body_04,
  css`
    margin-top: 1.6rem;

    @media screen and (width <= ${TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Caption_03};
    }
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

  border-top: 0.2px solid black;
  border-left: 0.2px solid black;

  & > div {
    border-bottom: 0.2px solid black;
    border-right: 0.2px solid black;
  }

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 8rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    grid-row-gap: 3.5rem;
    margin-top: 6rem;
    border: none;

    & > div {
      border: none;
    }
  }
`;
