import styled from 'styled-components';
import ProjectCard from './ProjectCard';

function Project() {
  const CardData = Array.from({ length: 12 });
  return (
    <ProjectLayout>
      <NavigationBar>
        <StAppWrapper>Project Page</StAppWrapper>
      </NavigationBar>
      <ButtonSection />
      <ProjectCardContainer>
        <ProjectCardLayout>
          {CardData.map(() => (
            <ProjectCard />
          ))}
        </ProjectCardLayout>
      </ProjectCardContainer>
    </ProjectLayout>
  );
}

export default Project;

const ProjectLayout = styled.section`
  width: 100%;
`;

const NavigationBar = styled.nav`
  display: flex;
  width: 100%;
  height: 11rem;
  align-items: center;
  border-bottom: 1px solid black;
`;

const ButtonSection = styled.section`
  display: flex;
  width: 100%;
  height: 31.5rem;
  align-items: center;
  border-bottom: 1px solid black;
`;
const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectCardLayout = styled.section`
  display: grid;
  max-width: 165rem;
  grid-template-columns: repeat(3, minmax(27rem, 1fr));

  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(2, minmax(27rem, 1fr));
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, minmax(27rem, 1fr));
  }
`;

const StAppWrapper = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_02};
`;