import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

interface IProjectProps {
  projectData: { type: number; title: string; members: string; photo: string }[];
}

function ProjectCardContainer({ projectData }: IProjectProps) {
  return (
    <Container>
      <ProjectCardLayout>
        {projectData?.map((projectInfo, i) => {
          return (
            <Link to={`/project/detail/${i + 1}`}>
              <ProjectCard key={i} projectInfo={projectInfo} />
            </Link>
          );
        })}
      </ProjectCardLayout>
    </Container>
  );
}

export default ProjectCardContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 13.6rem;

  @media screen and (width <= 830px) {
    margin: 0 6.4rem;
  }

  @media screen and (width <= 520px) {
    margin: 0;
  }
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
