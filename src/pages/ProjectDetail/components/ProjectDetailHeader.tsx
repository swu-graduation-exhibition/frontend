import styled, { css } from 'styled-components';
import { IcStarAll } from '~/assets/icons';
import { MOBILE_WIDTH } from '~/constants/common';
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
          <Member>김나현</Member>
          <Member>오연정</Member>
          <Member>이주연</Member>
          <Member>주은서</Member>
          <Member>주하영</Member>
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
  gap: 5rem;
  height: 50.2rem;
  padding: 16rem 0 8.2rem;
  flex-direction: row;

  @media screen and (width <= ${MOBILE_WIDTH}) {
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
  `,
);
const ProjectMembers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.38rem;
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
  `,
);

const ButtonCaption = styled.span(
  ({ theme }) => theme.fonts.Caption_03,
  css`
    color: ${theme.colors.Grayscales_500};
  `,
);
