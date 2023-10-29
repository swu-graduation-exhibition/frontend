import { styled } from 'styled-components';
import { HOME_MOBILE_WIDTH, HOME_TABLET_WIDTH } from '~/constants/common';
import { ProjectInfo } from '~/types/designer';
import GraduationWorkCard from './GraduationWorkCard';

interface GraduationWorkListProp {
  projectList: ProjectInfo[];
}
const GraduationWorkList = ({ projectList }: GraduationWorkListProp) => {
  return (
    <ListWrapper>
      {projectList.map(({ projectId, photo, type, title, members }, idx) => (
        <GraduationWorkCard
          key={title + idx}
          projectId={projectId}
          photo={photo}
          type={type}
          title={title}
          members={members}
        />
      ))}
    </ListWrapper>
  );
};

export default GraduationWorkList;

const ListWrapper = styled.div`
  display: flex;
  gap: 4.8rem;

  margin-top: 15rem;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    margin-top: 12.2rem;
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    margin-top: 4rem;
    gap: 6.4rem;
    flex-direction: column;
  }
`;
