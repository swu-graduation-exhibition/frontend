import styled from 'styled-components';
import ProjectCategory from './components/ProjectCategory';
import { PageLayout } from '~/common/components';
import { useParams } from 'react-router-dom';
import ProjectCardContainer from './components/ProjectCardContainer';
import { projectData, projectData1, projectData2 } from './data/cardData';
import { Mobile } from '~/utils/mediaQuery';
import TopButton from '~/common/components/TopButton';

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
      <Mobile>
        <TopButton />
      </Mobile>
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
  height: fit-content;
  padding-bottom: 15rem;
`;
