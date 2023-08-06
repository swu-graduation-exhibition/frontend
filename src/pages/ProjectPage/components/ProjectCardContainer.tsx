import styled from 'styled-components';
import projectData from '../data/cardData';
import ProjectCard from './ProjectCard';

function ProjectCardContainer() {
  return (
    <Container>
      <ProjectCardLayout>
        {projectData.map((projectData, i) => (
          <ProjectCard key={i} projectData={projectData} />
        ))}
      </ProjectCardLayout>
    </Container>
  );
}

export default ProjectCardContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectCardLayout = styled.section`
  display: grid;
  max-width: 165rem;
  grid-template-columns: repeat(3, minmax(27rem, 1fr));

  @media screen and (width <= 830px) {
    grid-template-columns: repeat(2, minmax(27rem, 1fr));
  }

  @media screen and (width <= 520px) {
    grid-template-columns: repeat(1, minmax(27rem, 1fr));
  }
`;
