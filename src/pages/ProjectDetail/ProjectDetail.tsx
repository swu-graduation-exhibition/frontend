import styled from 'styled-components';
import { PageLayout } from '~/common/components';
import ProjectComments from './components/ProjectComments';
import ProjectDetailAssets from './components/ProjectDetailAssets';
import ProjectDetailHeader from './components/ProjectDetailHeader';
import ProjectTeamInfo from './components/ProjectTeamInfo';

function ProjectDetail() {
  return (
    <PageLayout>
      <ProjectDetailSection>
        <ProjectDetailContainer>
          <ProjectDetailHeader />
          <ProjectDetailAssets />
          <ProjectTeamInfo />
          <ProjectComments />
        </ProjectDetailContainer>
      </ProjectDetailSection>
    </PageLayout>
  );
}

export default ProjectDetail;

const ProjectDetailSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ProjectDetailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  /* max-width: 164.8rem; */

  flex-direction: column;
`;
