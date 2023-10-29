import styled from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';
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
  margin-top: 21rem;
  padding: 0 13.6rem;

  /* margin-top: 6.3rem; */

  flex-direction: column;
  gap: 5rem;

  /* max-width: 165rem; */

  @media screen and (width <= ${`1100px`}) {
    margin-top: 13.8rem;
    padding: 0 6.4rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 9rem;
    padding: 0 2.8rem;
  }
`;
