import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProjectComment } from '~/api/project';
import TopButton from '~/common/components/TopButton';
import useGetProjectCommentDesktop from '~/hooks/useGetProjectCommentDesktop';
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
  const lastTabletPage = Math.ceil(tabletData?.count / 3);
  const paginationTabletNumbers = Array.from({ length: lastTabletPage }).map((_, i) => i + 1);

  // 모바일
  const queryClient = useQueryClient();

  const getQuery = (key: string) => {
    queryClient.invalidateQueries([key]);
  };

  // 모바일

  const [mobilComment, setMobilComment] = useState<any>([]);
  const [mobileCount, setMobileCount] = useState(0);
  const [isKey, setIsKey] = useState(false);

  useEffect(() => {
    setMobilComment([]);
  }, [projectId]);

  useEffect(() => {
    if (mobilComment.length === 0) {
      setIsKey((ik) => !ik);
    }
  }, [mobilComment]);

  const { data, isSuccess, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ['getProjectCommentMobile', isKey],
      async ({ pageParam = 1 }) => await getData(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage?.nextPage;
        },
        refetchOnWindowFocus: false,
      },
    );

  const { observerRef } = useInfiniteScroll(fetchNextPage, hasNextPage);

  async function getData(page: number) {
    if (hasNextPage !== false) {
      const response = await getProjectComment(Number(projectId), page, 3);
      setMobileCount(response?.count);
      setMobilComment((prev: any) => [...prev, ...response?.projectCommentList]);

      return { response, nextPage: page + 1 };
    }
  }

  return (
    <Container>
      <Desktop>
        <>
          {getQuery('getProjectCommentDesktop')}
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
              <>아직 등록되어 있는 메시지가 없어요.</>
            )}
          </CommentListWrapper>
          {desktopData?.count > 8 && (
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
          {getQuery('getProjectCommentTablet')}

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
              <>아직 등록되어 있는 메시지가 없어요.</>
            )}
          </CommentListWrapper>
          {tabletData?.count > 6 && (
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
                {[...mobilComment]
                  .filter((comment, i) => i > 2 && comment)
                  .map((commentData: any, i: number) => (
                    <CommentBox
                      key={i}
                      commentData={commentData}
                      $lastelement={i === mobileCount - 1 ? false : true}
                    />
                  ))}
              </>
            ) : (
              <>아직 등록되어 있는 메시지가 없어요.</>
            )}
          </CommentListWrapper>
          <Target ref={observerRef} />
        </>
      </Mobile>
    </Container>
  );
};

export default CommentListSection;

const Target = styled.div`
  height: 50px;
`;

const Container = styled.div`
  height: fit-content;
`;
const CommentListWrapper = styled.section`
  margin-bottom: 7.2rem;
`;
