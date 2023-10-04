import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TopButton from '~/common/components/TopButton';
import useGetProjectCommentDesktop from '~/hooks/useGetProjectCommentDesktop';
import useGetProjectCommentMobile from '~/hooks/useGetProjectCommentMobile';
import useGetProjectCommentTablet from '~/hooks/useGetProjectCommentTablet';
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
  const [currentMobilePage, setCurrentMobilePage] = useState(1);
  const { mobileData } = useGetProjectCommentMobile(Number(projectId), currentMobilePage);
  const lastMobilePage = Math.ceil(mobileData?.count / 3);
  const paginationMobileNumbers = Array.from({ length: lastMobilePage }).map((_, i) => i + 1);

  const queryClient = useQueryClient();

  const getQuery = (key: string) => {
    queryClient.invalidateQueries([key]);
  };

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
          {getQuery('getProjectCommentMobile')}

          <TopButton />
          <CommentListWrapper>
            {mobileData?.count > 0 ? (
              <>
                {mobileData.projectCommentList.map((commentData: any, i: number) => (
                  <CommentBox
                    key={i}
                    commentData={commentData}
                    $lastelement={i === mobileData.projectCommentList.length - 1 ? false : true}
                  />
                ))}
              </>
            ) : (
              <>아직 등록되어 있는 메시지가 없어요.</>
            )}
          </CommentListWrapper>
          {mobileData?.count > 3 && (
            <Pagination
              currentPage={currentMobilePage}
              setCurrentPage={setCurrentMobilePage}
              lastPage={lastMobilePage}
              paginationNumbers={paginationMobileNumbers}
            />
          )}
        </>
      </Mobile>
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
