import { PageLayout } from '~/common/components';
import styled from 'styled-components';
import ProjectDetailHeader from './components/ProjectDetailHeader';
import ProjectDetailAssets from './components/ProjectDetailAssets';

const ProjectDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 13.6rem;
`;

function ProjectDetail() {
  return (
    <PageLayout>
      <ProjectDetailContainer>
        <ProjectDetailHeader />
        <ProjectDetailAssets />
      </ProjectDetailContainer>
    </PageLayout>
  );
}

export default ProjectDetail;
