import { useState } from 'react';
import styled from 'styled-components';
import CommentBox from './CommentBox';
import { commentAllList } from '../data/commentData';
import Pagination from './Pagination';

const CommentListSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.floor(commentAllList.length / 8);
  const paginationNumbers = Array.from({ length: lastPage }).map((_, i) => i + 1);

  const commentList = commentAllList.slice(8 * currentPage - 8, 8 * currentPage - 1);

  return (
    <Container>
      <CommentListWrapper>
        {commentList.map((commentData, i) => (
          <CommentBox
            key={i}
            commentData={commentData}
            lastelement={commentAllList.length - 1 === i ? false : true}
          />
        ))}
      </CommentListWrapper>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
        paginationNumbers={paginationNumbers}
      />
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
