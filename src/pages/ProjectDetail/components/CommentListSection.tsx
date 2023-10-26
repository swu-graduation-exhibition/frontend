import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TopButton from '~/common/components/TopButton';
import { MOBILE_WIDTH } from '~/constants/common';
import useGetProjectCommentDesktop from '~/hooks/useGetProjectCommentDesktop';
import useGetProjectCommentMobile from '~/hooks/useGetProjectCommentMobile';
import useGetProjectCommentTablet from '~/hooks/useGetProjectCommentTablet';
import useInfiniteScroll from '~/hooks/useInfiniteScroll';
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';
import CommentBox from './CommentBox';
import Pagination from './Pagination';

const CommentListSection = () => {
  const { projectId } = useParams();

  // 데스크탑
  const [currentDesktopPage, setCurrentDesktopPage] = useState(1);
  const { desktopData } = useGetProjectCommentDesktop(Number(projectId), currentDesktopPage);
  const lastDesktopPage = Math.ceil(desktopData?.count / 8);
  const paginationDesktopNumbers = Array.from({ length: lastDesktopPage }).map((_, i) => i + 1);

  // 태블릿
  const [currentTabletPage, setCurrentTabletPage] = useState(1);
  const { tabletData } = useGetProjectCommentTablet(Number(projectId), currentTabletPage);
  const lastTabletPage = Math.ceil(tabletData?.count / 6);
  const paginationTabletNumbers = Array.from({ length: lastTabletPage }).map((_, i) => i + 1);

  // 모바일
  const queryClient = useQueryClient();

  const getQuery = (key: string) => {
    queryClient.invalidateQueries([key]);
  };

  // 모바일
  const { mobileCount, mobileData, fetchNextPage, hasNextPage } = useGetProjectCommentMobile(
    Number(projectId),
  );
  const { observerRef } = useInfiniteScroll(fetchNextPage, hasNextPage);

  return (
    <Container>
      <Desktop>
        <>
          {/* {getQuery('getProjectCommentDesktop')} */}
          <CommentListWrapper>
            {desktopData?.count > 0 ? (
              <>
                {desktopData.projectCommentList.map((commentData: any, i: number) => (
                  <CommentBox
                    key={i}
                    commentData={commentData}
                    $lastelement={i === desktopData.projectCommentList.length - 1 ? false : true}
                  />
                ))}
              </>
            ) : (
              <NoMessage>아직 등록되어 있는 메시지가 없어요.</NoMessage>
            )}
          </CommentListWrapper>
          {desktopData?.count > 0 && (
            <Pagination
              currentPage={currentDesktopPage}
              setCurrentPage={setCurrentDesktopPage}
              lastPage={lastDesktopPage}
              paginationNumbers={paginationDesktopNumbers}
            />
          )}
        </>
      </Desktop>
      <Tablet>
        <>
          {/* {getQuery('getProjectCommentTablet')} */}

          <CommentListWrapper>
            {tabletData?.count > 0 ? (
              <>
                {tabletData.projectCommentList.map((commentData: any, i: number) => (
                  <CommentBox
                    key={i}
                    commentData={commentData}
                    $lastelement={i === tabletData.projectCommentList.length - 1 ? false : true}
                  />
                ))}
              </>
            ) : (
              <NoMessage>아직 등록되어 있는 메시지가 없어요.</NoMessage>
            )}
          </CommentListWrapper>
          {tabletData?.count > 0 && (
            <Pagination
              currentPage={currentTabletPage}
              setCurrentPage={setCurrentTabletPage}
              lastPage={lastTabletPage}
              paginationNumbers={paginationTabletNumbers}
            />
          )}
        </>
      </Tablet>
      <Mobile>
        <>
          <TopButton />
          <CommentListWrapper>
            {mobileCount > 0 ? (
              <>
                {mobileData?.map((commentData: any, i: number) => (
                  <CommentBox
                    key={i}
                    commentData={commentData}
                    $lastelement={i === mobileCount - 1 ? false : true}
                  />
                ))}
              </>
            ) : (
              <NoMessage>아직 등록되어 있는 메시지가 없어요.</NoMessage>
            )}
          </CommentListWrapper>
          <Target ref={observerRef} />
        </>
      </Mobile>
    </Container>
  );
};

export default CommentListSection;

const NoMessage = styled.h1`
  margin: 12.4rem 0;

  text-align: center;
  ${({ theme }) => theme.fonts.Caption_03}

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin: 9.4rem 0;
    ${({ theme }) => theme.fonts.Mobile_Caption_03}
  }
`;

const Target = styled.div`
  height: 50px;
`;

const Container = styled.div`
  height: fit-content;
`;
const CommentListWrapper = styled.section`
  margin-bottom: 7.2rem;
`;
