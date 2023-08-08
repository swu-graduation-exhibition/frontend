import styled from 'styled-components';
import ProjectCardContainer from './components/ProjectCardContainer';
import ProjectCategory from './components/ProjectCategory';
import projectBgImg from '../../assets/images/projectBgImg.png';
import { PageLayout } from '~/common/components';

function Project() {
  return (
    <PageLayout>
      <ProjectLayout>
        <ProjectCategory />
        <ProjectCardContainer />
      </ProjectLayout>
    </PageLayout>
  );
}

export default Project;

const ProjectLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-image: url(${projectBgImg});
  background-size: cover;
  background-repeat: no-repeat;

  padding-bottom: 15rem;
`;

const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 11rem;
  max-width: 165rem;
  border-bottom: 1px solid black;
`;

const StAppWrapper = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_02};
`;
