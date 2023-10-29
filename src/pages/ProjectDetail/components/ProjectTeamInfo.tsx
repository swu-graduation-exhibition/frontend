import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import useGetProjectDetail from '~/hooks/project';
import ProjectTeamDesignerCard from './ProjectTeamDesignerCard';

interface MemberType {
  designerId: number;
  name: string;
  profile: string;
  field: string;
}

const ProjectTeamInfo = () => {
  const { projectId } = useParams();
  const { projectDetail } = useGetProjectDetail(Number(projectId));
  console.log(projectDetail);
  return (
    <Container>
      {projectDetail?.teamName && <TeamName>{projectDetail?.teamName}</TeamName>}

      <TeamCardContainer>
        {projectDetail?.memberList.map((member: MemberType) => {
          return <ProjectTeamDesignerCard member={member} />;
        })}
      </TeamCardContainer>
    </Container>
  );
};

export default ProjectTeamInfo;

const Container = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
  margin: 0 7%;
  flex-direction: column;
  gap: 6.4rem;

  /* max-width: 165rem; */

  padding: 0 13.6rem;

  @media screen and (width <= ${`1100px`}) {
    padding: 0 6.4rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    gap: 0.6rem;

    padding: 0 2.8rem;
  }
`;

const TeamName = styled.div(
  ({ theme }) => theme.fonts.Subtitle_01,
  css`
    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_02}
    }
  `,
);

const TeamCardContainer = styled.div`
  display: grid;
  width: 100%;

  /* height: 41.2rem; */

  grid-template-columns: repeat(4, 1fr);

  @media screen and (width <= ${TABLET_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
