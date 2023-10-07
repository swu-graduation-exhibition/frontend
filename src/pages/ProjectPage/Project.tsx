import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProjectList } from '~/api/project';
import { PageLayout } from '~/common/components';
import TopButton from '~/common/components/TopButton';
import { Mobile } from '~/utils/mediaQuery';
import ProjectCardContainer from './components/ProjectCardContainer';
import ProjectCategory from './components/ProjectCategory';
import { projectData, projectData1, projectData2 } from './data/cardData';

const CategoryData = {
  'ux-design': projectData,
  'digital-fabrication': projectData1,
  'bx-design': projectData2,
};

function Project() {
  const { category } = useParams();

  const checkCategoryType = () => {
    switch (category) {
      case 'ux-design':
        return 1;
      case 'digital-fabrication':
        return 2;
      case 'bx-design':
        return 3;
      default:
        return 1;
    }
  };

  const { data: projectData } = useQuery(
    ['projectData', category],
    () => getProjectList(checkCategoryType()),
    {
      onSuccess: () => {},
      onError: (err) => {
        console.log(err);
      },
    },
  );

  console.log(projectData);

  return (
    <PageLayout>
      <ProjectLayout>
        <ProjectCategory />
        <ProjectCardContainer projectData={projectData} />
        <Mobile>
          <TopButton />
        </Mobile>
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
  height: fit-content;
  padding-bottom: 15rem;
`;
