import styled from 'styled-components';
import CommentBox from './CommentBox';
import { commentList } from '../data/commentData';
import Pagination from './Pagination';

const CommentListSection = () => {
  return (
    <Container>
      <CommentListWrapper>
        {commentList.map((commentData, i) => (
          <CommentBox
            key={i}
            commentData={commentData}
            lastElement={commentList.length - 1 === i ? false : true}
          />
        ))}
      </CommentListWrapper>
      <Pagination />
    </Container>
  );
};

export default CommentListSection;

const Container = styled.div`
  height: fit-content;
`;
const CommentListWrapper = styled.section`
  margin-bottom: 7.2rem;
`;
