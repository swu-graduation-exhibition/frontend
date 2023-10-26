import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

interface IProjectProps {
  projectData: { type: number; title: string; members: string; photo: string; projectId: number }[];
}

function ProjectCardContainer({ projectData }: IProjectProps) {
  const navigate = useNavigate();

  function moveToDetail(projectId: number) {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    navigate(`/project/detail/${projectId}`);
  }

  return (
    <>
      <ProjectCardLayout>
        {projectData?.map((projectInfo) => {
          return (
            <div onClick={() => moveToDetail(projectInfo?.projectId)}>
              <ProjectCard key={projectInfo?.projectId} projectInfo={projectInfo} />
            </div>
          );
        })}
      </ProjectCardLayout>
    </>
  );
}

export default ProjectCardContainer;

const ProjectCardLayout = styled.section`
  display: grid;

  /* max-width: 165rem; */

  grid-template-columns: repeat(3, minmax(27rem, 1fr));
  align-content: start;

  @media screen and (width <= ${`830px`}) {
    grid-template-columns: repeat(2, minmax(27rem, 1fr));
    align-content: start;
  }

  @media screen and (width <= ${`520px`}) {
    grid-template-columns: repeat(1, minmax(27rem, 1fr));
    align-content: start;
  }
`;
