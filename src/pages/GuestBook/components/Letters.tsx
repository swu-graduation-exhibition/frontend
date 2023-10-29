import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import TopButton from '~/common/components/TopButton';
import { MOBILE_WIDTH } from '~/constants/common';
import useGetGuestBookDesktop from '~/hooks/useGetGuestBookDesktop';
import useGetGuestBookMobile from '~/hooks/useGetGuestBookMobile';
import useGetGuestBookTablet from '~/hooks/useGetGuestBookTablet';
import useInfiniteScroll from '~/hooks/useInfiniteScroll';
import Loading from '~/pages/Loading';
import Pagination from '~/pages/ProjectDetail/components/Pagination';
import { GuestBookPageCard } from '~/types/guestBook';
import { GuestBookDesktop, GuestBookTablet, Mobile } from '~/utils/mediaQuery';
import CategoryDropBox from './CategoryDropBox';
import Flowers from './Flowers';
import GuestBookCard from './GuestBookCard';

const Letters = () => {
  const [designerId, setDesignerId] = useState(-1);

  // 데스크탑
  const [currentDesktopPage, setCurrentDesktopPage] = useState(1);
  const { desktopData, isDesktopLoading } = useGetGuestBookDesktop(designerId, currentDesktopPage);
  const lastDesktopPage = Math.ceil(desktopData?.count / 8);
  const paginationDesktopNumbers = Array.from({ length: lastDesktopPage }).map((_, i) => i + 1);

  // 태블릿
  const [currentTabletPage, setCurrentTabletPage] = useState(1);
  const { tabletData, isTabletLoading } = useGetGuestBookTablet(designerId, currentTabletPage);
  const lastTabletPage = Math.ceil(tabletData?.count / 6);
  const paginationTabletNumbers = Array.from({ length: lastTabletPage }).map((_, i) => i + 1);

  const queryClient = useQueryClient();

  const getQuery = (key: string) => {
    queryClient.invalidateQueries([key]);
  };

  // 모바일

  const { mobileCount, mobileData, fetchNextPage, hasNextPage, isLoading } =
    useGetGuestBookMobile(designerId);
  const { observerRef } = useInfiniteScroll(fetchNextPage, hasNextPage);

  return (
    <>
      {isLoading && <Loading />}
      {isDesktopLoading && <Loading />}
      {isTabletLoading && <Loading />}
      <CategoryDropBox designerId={designerId} setDesignerId={setDesignerId} />
      <GuestBookDesktop>
        <>
          {/* {getQuery('getGuestBookDesktop')} */}
          {desktopData?.count > 0 ? (
            <LettersWrapper>
              {desktopData.commentList.map(
                ({ sender, content, createdAt, receiver }: GuestBookPageCard, idx: number) => (
                  <GuestBookCard
                    key={idx}
                    sender={sender}
                    content={content}
                    createdAt={createdAt}
                    receiver={receiver}
                  />
                ),
              )}
            </LettersWrapper>
          ) : (
            <NoMessage>아직 등록되어 있는 메시지가 없어요.</NoMessage>
          )}
          {desktopData?.count > 0 && (
            <PaginationWrapper>
              <Pagination
                currentPage={currentDesktopPage}
                setCurrentPage={setCurrentDesktopPage}
                lastPage={lastDesktopPage}
                paginationNumbers={paginationDesktopNumbers}
              />
            </PaginationWrapper>
          )}

          <Flowers length={desktopData?.count} />
        </>
      </GuestBookDesktop>
      <GuestBookTablet>
        <>
          {/* {getQuery('getGuestBookTablet')} */}
          {tabletData?.count > 0 ? (
            <LettersWrapper>
              {tabletData?.commentList.map(
                ({ sender, content, createdAt, receiver }: GuestBookPageCard, idx: number) => (
                  <GuestBookCard
                    key={idx}
                    sender={sender}
                    content={content}
                    createdAt={createdAt}
                    receiver={receiver}
                  />
                ),
              )}
            </LettersWrapper>
          ) : (
            <NoMessage>아직 등록되어 있는 메시지가 없어요.</NoMessage>
          )}
          {tabletData?.count > 0 && (
            <PaginationWrapper>
              <Pagination
                currentPage={currentTabletPage}
                setCurrentPage={setCurrentTabletPage}
                lastPage={lastTabletPage}
                paginationNumbers={paginationTabletNumbers}
              />
            </PaginationWrapper>
          )}

          <Flowers length={tabletData?.count} />
        </>
      </GuestBookTablet>
      <Mobile>
        <>
          <TopButton />
          {mobileCount ? (
            <LettersWrapper>
              {mobileData?.map(
                ({ sender, content, createdAt, receiver }: GuestBookPageCard, idx: number) => (
                  <GuestBookCard
                    key={idx}
                    sender={sender}
                    content={content}
                    createdAt={createdAt}
                    receiver={receiver}
                  />
                ),
              )}
            </LettersWrapper>
          ) : (
            <NoMessage>아직 등록되어 있는 메시지가 없어요.</NoMessage>
          )}
          <Target ref={observerRef} />

          <Flowers length={mobileCount} />
        </>
      </Mobile>
    </>
  );
};

export default Letters;

const Target = styled.div`
  height: 50px;
`;
const LettersWrapper = styled.section`
  display: grid;
  margin-top: 4.3rem;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;

  @media screen and (width <= ${`1400px`}) {
    margin: 9.4rem 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    /* margin: 9.4rem 0; */

    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoMessage = styled.h1`
  margin: 12.4rem 0;

  text-align: center;
  ${({ theme }) => theme.fonts.Caption_03}

  color: ${({ theme }) => theme.colors.Grayscales_800};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin: 9.4rem 0;

    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }
`;

const PaginationWrapper = styled.section`
  margin-top: 4.2rem;
`;
