import { PageLayout } from '~/common/components';
import styled from 'styled-components';
import ProjectDetailHeader from './components/ProjectDetailHeader';
import ProjectDetailAssets from './components/ProjectDetailAssets';
import ProjectTeamInfo from './components/ProjectTeamInfo';
import ProjectComments from './components/ProjectComments';

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
  margin: 0 7%;
  max-width: 164.8rem;
  flex-direction: column;
`;
