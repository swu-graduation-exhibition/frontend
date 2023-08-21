import styled from 'styled-components';
import CommonFormSection from '../../../common/components/CommonFormSection';

const ProjectComments = () => {
  return (
    <Container>
      <CommonFormSection page={'project'} />
    </Container>
  );
};

export default ProjectComments;

const Container = styled.section`
  display: flex;
  width: 100%;
  margin-top: 9.3rem;
  flex-direction: column;
  gap: 5rem;

  max-width: 165rem;
`;
