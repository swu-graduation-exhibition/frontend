import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import GuestBookCommentCard from '~/common/components/GuestBookCommentCard';
import { MOBILE_WIDTH } from '~/constants/common';
import useCommentDesignerWithScroll from '~/lib/api/designer/use-get-designer-comment-scroll';
import { GuestBookCommentInfo } from '~/types/guestBook';

const MobileCommentContainer = () => {
  const { id } = useParams();

  const { data, ObservationComponent, isLoading } = useCommentDesignerWithScroll(id || '1', 3);

  if (isLoading) return <div>불러오기</div>;

  if (data) {
    const commentList = data?.reduce(
      (acc: GuestBookCommentInfo[], { response }): GuestBookCommentInfo[] => {
        return [...acc, ...response];
      },
      [],
    );
    return (
      <>
        <CommentListWrapper>
          {commentList.map(({ sender, content, createdAt }, idx) => (
            <GuestBookCommentCard
              key={idx}
              sender={sender}
              content={content}
              createdAt={createdAt}
            />
          ))}
        </CommentListWrapper>
        <ObservationComponent />
      </>
    );
  }
};

export default MobileCommentContainer;

const CommentListWrapper = styled.div`
  display: grid;
  margin-top: 4.3rem;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;

  @media screen and (width <= ${`1400px`}) {
    margin: 12rem 0 16rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 4.6rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;
