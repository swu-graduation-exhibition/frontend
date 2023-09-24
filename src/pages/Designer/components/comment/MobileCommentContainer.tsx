import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import GuestBookCommentCard from '~/common/components/GuestBookCommentCard';
import { guestBookCommentData } from '~/common/data/guestBookCommentList';
import { MOBILE_WIDTH } from '~/constants/common';
import useCommentDesignerWithScroll from '~/lib/api/designer/use-get-designer-comment-scroll';
import { GuestBookCommentInfo } from '~/types/guestBook';

const MobileCommentContainer = () => {
  const { id } = useParams();

  const { data, ObservationComponent, isLoading } = useCommentDesignerWithScroll(id || '1', 3);

  if (isLoading) return <div>불러오기</div>;

  console.log('모바일');
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
  max-width: 165rem;
  grid-template-columns: repeat(4, minmax(27rem, 1fr));
  gap: 2rem;

  margin-top: 12rem;
  margin-bottom: 10rem;

  @media screen and (width <= 1300px) {
    grid-template-columns: repeat(2, minmax(27rem, 1fr));
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(1, minmax(27rem, 1fr));
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    margin-top: 4.6rem;
  }
`;
