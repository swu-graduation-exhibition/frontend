import styled from 'styled-components';
import ProjectCategory from './components/ProjectCategory';
import projectBgImg from '../../assets/images/projectBgImg.png';
import { PageLayout } from '~/common/components';
import { useParams } from 'react-router-dom';
import ProjectCardContainer from './components/ProjectCardContainer';
import { projectData, projectData1, projectData2 } from './data/cardData';

const CategoryData = {
  'ux-design': projectData,
  'digital-fabrication': projectData1,
  'bx-design': projectData2,
};

function Project() {
  const { category } = useParams();
  type TCategory = keyof typeof CategoryData;
  const projectData = CategoryData[category as TCategory];

  return (
    <PageLayout>
      <ProjectLayout>
        <ProjectCategory />
        <ProjectCardContainer projectData={projectData} />
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
