import { PageLayout } from '~/common/components';
import styled from 'styled-components';
import ProjectDetailHeader from './components/ProjectDetailHeader';

const ProjectDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 13.6rem;
  border: 1px solid black;
`;

function ProjectDetail() {
  return (
    <PageLayout>
      <ProjectDetailContainer>
        <ProjectDetailHeader />
      </ProjectDetailContainer>
    </PageLayout>
  );
}

export default ProjectDetail;
