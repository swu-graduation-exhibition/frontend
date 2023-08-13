import { PageLayout } from '~/common/components';
import styled from 'styled-components';
import ProjectDetailHeader from './components/ProjectDetailHeader';
import projectBgImg from '../../assets/images/projectBgImg.png';

const ProjectDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 13.6rem;
  border: 1px solid black;

  background-image: url(${projectBgImg});
  background-size: cover;
  background-repeat: no-repeat;
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
