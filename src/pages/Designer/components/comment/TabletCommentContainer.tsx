import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import GuestBookCommentCard from '~/common/components/GuestBookCommentCard';
import { guestBookCommentData } from '~/common/data/guestBookCommentList';
import { MOBILE_WIDTH } from '~/constants/common';
import { useDefaultCommentList } from '~/lib/api/designer/get-designer-comment-list';
import Pagination from '~/pages/ProjectDetail/components/Pagination';

const TabletCommentContainer = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: commmentDesignerList } = useDefaultCommentList(id || '1', 6, currentPage);

  console.log(commmentDesignerList);

  if (!commmentDesignerList?.data.designerCommentList) return <div>로딩중</div>;

  const { data } = commmentDesignerList;
  const lastPage = Math.ceil(data.count / 6);
  const paginationNumbers = Array.from({ length: lastPage }).map((_, i) => i + 1);

  return (
    <>
      <CommentListWrapper>
        {data.designerCommentList.map(({ sender, content, createdAt }, idx) => (
          <GuestBookCommentCard key={idx} sender={sender} content={content} createdAt={createdAt} />
        ))}
      </CommentListWrapper>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
        paginationNumbers={paginationNumbers}
      />
    </>
  );
};

export default TabletCommentContainer;

const CommentListWrapper = styled.div`
  display: grid;
  max-width: 165rem;
  gap: 2rem;

  grid-template-columns: repeat(2, minmax(27rem, 1fr));
  margin-left: 1.6rem;
  margin-right: 1.6rem;
  margin-top: 4.6rem;
  margin-bottom: 10rem;
`;
