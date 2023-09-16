import { styled } from 'styled-components';
import { GraduationWorkList, Profile } from './components';
import { MOBILE_WIDTH } from '~/constants/common';
import CommentListSection from '../ProjectDetail/components/CommentListSection';
import CommonFormSection from '~/common/components/CommonFormSection';
import { guestBookCommentData } from '~/common/data/guestBookCommentList';
import GuestBookCommentCard from '~/common/components/GuestBookCommentCard';
import Pagination from '../ProjectDetail/components/Pagination';
import { useState } from 'react';

const DesignerDetail = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(100 / 8);
  const paginationNumbers = Array.from({ length: lastPage }).map((_, i) => i + 1);

  return (
    <DesignerDetailWrapper>
      <Profile />
      <GraduationWorkList />
      <GuestBookWrapper>
        <CommonFormSection page="designer" />
      </GuestBookWrapper>
      <CommentListWrapper>
        {guestBookCommentData.map(({ sender, content, createdAt }, idx) => (
          <GuestBookCommentCard key={idx} sender={sender} content={content} createdAt={createdAt} />
        ))}
      </CommentListWrapper>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
        paginationNumbers={paginationNumbers}
      />
    </DesignerDetailWrapper>
  );
};

export default DesignerDetail;

const DesignerDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 13.6rem;
  padding: 0% 7%;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 1.3rem;
    padding: 0%;
  }
`;

const GuestBookWrapper = styled.div`
  margin-top: 20rem;
`;

const CommentListWrapper = styled.div`
  display: grid;
  max-width: 165rem;
  grid-template-columns: repeat(4, minmax(27rem, 1fr));
  gap: 2rem;

  margin-top: 12rem;
  margin-bottom: 10rem;
`;
