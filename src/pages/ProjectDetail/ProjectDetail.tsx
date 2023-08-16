import { PageLayout } from '~/common/components';
import styled from 'styled-components';
import ProjectDetailHeader from './components/ProjectDetailHeader';
import ProjectDetailAssets from './components/ProjectDetailAssets';
import ProjectTeamInfo from './components/ProjectTeamInfo';
import ProjectComments from './components/ProjectComments';

function ProjectDetail() {
  return (
    <PageLayout>
      <ProjectDetailContainer>
        <ProjectDetailHeader />
        <ProjectDetailAssets />
        <ProjectTeamInfo />
        <ProjectComments />
      </ProjectDetailContainer>
    </PageLayout>
  );
}

export default ProjectDetail;

const ProjectDetailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
