import styled from 'styled-components';
import CommentBox from './CommentBox';
import { commentList } from '../data/comment';

const Container = styled.div`
  height: fit-content;
`;

const CommentListSection = () => {
  return (
    <Container>
      {commentList.map((commentData, i) => (
        <CommentBox
          key={i}
          commentData={commentData}
          lastElement={commentList.length - 1 === i ? false : true}
        />
      ))}
    </Container>
  );
};

export default CommentListSection;
