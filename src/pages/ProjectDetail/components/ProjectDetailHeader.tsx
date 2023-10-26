import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import useGetProjectDetail from '~/hooks/project';
import theme from '~/styles/theme';

function ProjectDetailHeader() {
  const { projectId } = useParams();
  const { projectDetail } = useGetProjectDetail(Number(projectId));

  return (
    <Container>
      <ProjcetTitle>
        <ProjectName>
          <IconStarAll src={`${import.meta.env.VITE_SWU_IMAGE}/ic_star_all.svg`} />
          {projectDetail?.title}
        </ProjectName>
        <ProjectMembers>{projectDetail?.members}</ProjectMembers>
      </ProjcetTitle>
      <ProjectDescription>
        <Description>{projectDetail?.desc}</Description>
        <ButtonSection>
          <a href={projectDetail?.link}>
            <TryItButton>TRY IT!</TryItButton>
          </a>
          <ButtonCaption>* 버튼을 눌러 서비스를 직접 체험해 보세요!</ButtonCaption>
        </ButtonSection>
      </ProjectDescription>
    </Container>
  );
}

export default ProjectDetailHeader;

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
  justify-content: space-between;
  width: 100%;
  padding: 16rem 13.6rem 8.2rem;

  flex-direction: row;

  @media screen and (width <= 1100px) {
    padding: 5.6rem 6.4rem 6.4rem;

    flex-direction: column;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    padding: 2.3rem 2.7rem 6rem;
  }
`;

const ProjcetTitle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.8rem;
  min-width: fit-content;

  @media screen and (width <= 1100px) {
    gap: 1.2rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    gap: 0.2rem;
  }
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

    @media screen and (width <= 1100px) {
      ${({ theme }) => theme.fonts.Subtitle_02}
    }

    @media screen and (width <= ${MOBILE_WIDTH}) {
      margin-left: -1rem;
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
    color: ${({ theme }) => theme.colors.Grayscales_700};
    margin-bottom: 1.4rem;
  }
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4.8rem;

  @media screen and (width>1100px) {
    width: 50rem;
  }

  @media screen and (width>1300px) {
    width: 60rem;
  }

  @media screen and (width>1400px) {
    width: 70rem;
  }

  @media screen and (width>1500px) {
    width: 81.4rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    gap: 2rem;
  }
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

  @media screen and (width <= ${MOBILE_WIDTH}) {
    gap: 0.4rem;
  }
`;

const TryItButton = styled.button`
  width: fit-content;
  padding: 0.8rem 3.2rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_900};

  color: ${({ theme }) => theme.colors.Grayscales_900};

  font-family: 'Antic Didone';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.4rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    padding: 0.4rem 1.7rem;

    font-family: 'Antic Didone';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7rem;
  }
`;

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
