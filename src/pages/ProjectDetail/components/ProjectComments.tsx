import styled from 'styled-components';
import CommonFormSection from '../../../common/components/CommonFormSection';
import CommentListSection from './CommentListSection';

const ProjectComments = () => {
  return (
    <Container>
      <CommonFormSection page={'project'} />
      <CommentListSection />
    </Container>
  );
};

export default ProjectComments;

const Container = styled.section`
  display: flex;
  width: 100%;
  margin: 0 7%;
  margin-top: 9.3rem;
  flex-direction: column;
  gap: 5rem;

  max-width: 165rem;
`;
