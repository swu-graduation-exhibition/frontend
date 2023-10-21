import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import GuestBookCommentCard from '~/common/components/GuestBookCommentCard';
import { MOBILE_WIDTH } from '~/constants/common';
import { useDefaultCommentList } from '~/lib/api/designer/get-designer-comment-list';
import Pagination from '~/pages/ProjectDetail/components/Pagination';

const DesktopCommentContainer = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: commmentDesignerList } = useDefaultCommentList(id || '1', 8, currentPage);

  if (!commmentDesignerList?.data.designerCommentList) return <div>로딩중</div>;

  const { data } = commmentDesignerList;
  const lastPage = Math.ceil(data.count / 8);
  const paginationNumbers = Array.from({ length: lastPage }).map((_, i) => i + 1);

  return (
    <>
      <CommentListWrapper>
        {data.designerCommentList.map(({ sender, content, createdAt }, idx) => (
          <GuestBookCommentCard key={idx} sender={sender} content={content} createdAt={createdAt} />
        ))}
      </CommentListWrapper>
      {data.designerCommentList.length && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
          paginationNumbers={paginationNumbers}
        />
      )}
    </>
  );
};

export default DesktopCommentContainer;

const CommentListWrapper = styled.div`
  display: grid;
  margin-top: 12rem;
  margin-bottom: 9.9rem;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;
`;
