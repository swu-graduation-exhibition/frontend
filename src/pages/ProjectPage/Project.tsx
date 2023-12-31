import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProjectList } from '~/api/project';
import { PageLayout } from '~/common/components';
import TopButton from '~/common/components/TopButton';
import { MOBILE_WIDTH } from '~/constants/common';
import { Mobile } from '~/utils/mediaQuery';
import Loading from '../Loading';
import ProjectCardContainer from './components/ProjectCardContainer';
import ProjectCategory from './components/ProjectCategory';

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

  const { data: projectData, isLoading } = useQuery(
    ['projectData', category],
    () => getProjectList(checkCategoryType()),
    {
      onSuccess: () => {},
      onError: (err) => {
        console.log(err);
      },
    },
  );
  // console.log(projectData);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'instant',
    });
  }, []);
  if (isLoading) return <Loading />;

  return (
    <PageLayout>
      <ProjectLayout>
        <Container>
          <ProjectCategory />
          <ProjectCardContainer projectData={projectData} />
        </Container>
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
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;

  /* margin: 0 13.6rem; */

  padding: 0% 7%;
  flex-direction: column;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    padding: 0%;
  }

  /* 
  @media screen and (width <= ${`830px`}) {
    margin: 0 6.4rem;
  }

  @media screen and (width <= ${`520px`}) {
    margin: 0;
  } */
`;
