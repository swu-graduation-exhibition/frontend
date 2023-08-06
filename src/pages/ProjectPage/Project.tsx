import styled from 'styled-components';
import ProjectCardContainer from './components/ProjectCardContainer';
import ProjectCategory from './components/ProjectCategory';

function Project() {
  return (
    <ProjectLayout>
      <NavigationBar>
        <StAppWrapper>Project Page</StAppWrapper>
      </NavigationBar>
      <ProjectCategory />
      <ProjectCardContainer />
    </ProjectLayout>
  );
}

export default Project;

const ProjectLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
