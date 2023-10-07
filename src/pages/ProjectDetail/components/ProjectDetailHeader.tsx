import styled, { css } from 'styled-components';
import { IcStarAll } from '~/assets/icons';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import theme from '~/styles/theme';

function ProjectDetailHeader() {
  return (
    <Container>
      <ProjcetTitle>
        <ProjectName>
          <IcStarAll />
          Project.Name
        </ProjectName>
        <ProjectMembers>
          <Member>김나현 오연정 이주연 주은서 주하영</Member>
        </ProjectMembers>
      </ProjcetTitle>
      <ProjectDescription>
        <Description>
          Scopin은 영감을 얻고 즐기는 새로운 방법입니다. 이제 일상의 경험이 재구성된 AR 공간에서
          사람들과 생각을 나누며 주변을 새롭게 바라보세요!
        </Description>
        <ButtonSection>
          <TryItButton>TRY IT!</TryItButton>
          <ButtonCaption>* 버튼을 눌러 서비스를 직접 체험해 보세요!</ButtonCaption>
        </ButtonSection>
      </ProjectDescription>
    </Container>
  );
}

export default ProjectDetailHeader;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16rem 13.6rem 8.2rem;

  flex-direction: row;

  @media screen and (width >${TABLET_WIDTH}) {
    height: 50.2rem;
    gap: 5rem;
  }

  @media screen and (width <= ${TABLET_WIDTH}) {
    padding: 6rem 6.4rem 6.4rem;

    flex-direction: column;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    padding: 2.3rem 1.6rem 1.6rem;

    flex-direction: column;
  }
`;

const ProjcetTitle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.8rem;
  min-width: fit-content;

  gap: 2rem;
`;

const ProjectName = styled.div(
  ({ theme }) => theme.fonts.Subtitle_01,
  css`
    display: flex;

    width: fit-content;
    height: fit-content;

    svg {
      position: relative;
      top: -0.5rem;
      margin-right: 0.5rem;
    }

    @media screen and (width <= 1400px) {
      ${({ theme }) => theme.fonts.Subtitle_02}
    }

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_02}
    }
  `,
);
const ProjectMembers = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.38rem;

  ${({ theme }) => theme.fonts.Caption_01};
  color: ${({ theme }) => theme.colors.Grayscales_700};
  margin-bottom: 3.2rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_04}
  }
`;

const Member = styled.span(
  ({ theme }) => theme.fonts.Caption_01,
  css`
    width: fit-content;
    min-width: fit-content;

    color: ${({ theme }) => theme.colors.Grayscales_700};
  `,
);

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 81.4rem;
  gap: 4.8rem;
`;

const Description = styled.div(
  ({ theme }) => theme.fonts.Caption_01,
  css`
    color: ${({ theme }) => theme.colors.Grayscales_900};

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Caption_01}
    }
  `,
);

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TryItButton = styled.button(
  ({ theme }) => theme.fonts.Subtitle_01,
  css`
    width: fit-content;
    padding: 0.8rem 3.2rem;
    border: 1px solid ${({ theme }) => theme.colors.Grayscales_900};

    color: ${({ theme }) => theme.colors.Grayscales_900};

    font-family: 'Antic Didone';
    font-weight: 400;

    @media screen and (width <= ${MOBILE_WIDTH}) {
      padding: 0.4rem 1.7rem;

      font-family: 'Antic Didone';
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.7rem;
    }
  `,
);

const ButtonCaption = styled.span(
  ({ theme }) => theme.fonts.Caption_03,
  css`
    color: ${theme.colors.Grayscales_500};

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Caption_01};
      color: ${theme.colors.Grayscales_500};
    }
  `,
);
