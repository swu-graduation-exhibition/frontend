import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGuestBook } from '~/api/guestBook';
import TopButton from '~/common/components/TopButton';
import { MOBILE_WIDTH } from '~/constants/common';
import useGetGuestBookDesktop from '~/hooks/useGetGuestBookDesktop';
import useGetGuestBookTablet from '~/hooks/useGetGuestBookTablet';
import useInfiniteScroll from '~/hooks/useInfiniteScroll';
import Pagination from '~/pages/ProjectDetail/components/Pagination';
import { GuestBookPageCard } from '~/types/guestBook';
import { GuestBookDesktop, GuestBookTablet, Mobile } from '~/utils/mediaQuery';
import CategoryDropBox from './CategoryDropBox';
import GuestBookCard from './GuestBookCard';

const Letters = () => {
  const [designerId, setDesignerId] = useState(-1);

  // 데스크탑
  const [currentDesktopPage, setCurrentDesktopPage] = useState(1);
  const { desktopData } = useGetGuestBookDesktop(designerId, currentDesktopPage);
  const lastDesktopPage = Math.ceil(desktopData?.count / 8);
  const paginationDesktopNumbers = Array.from({ length: lastDesktopPage }).map((_, i) => i + 1);

  // 태블릿
  const [currentTabletPage, setCurrentTabletPage] = useState(1);
  const { tabletData } = useGetGuestBookTablet(designerId, currentTabletPage);
  const lastTabletPage = Math.ceil(tabletData?.count / 6);
  const paginationTabletNumbers = Array.from({ length: lastTabletPage }).map((_, i) => i + 1);

  // 모바일

  const [mobileDesignerCommentList, setMobileDesignerCommentList] = useState<GuestBookPageCard[]>(
    [],
  );
  const [mobileCount, setMobileCount] = useState(0);
  const [isKey, setIsKey] = useState(false);

  useEffect(() => {
    setMobileDesignerCommentList([]);
  }, [designerId]);

  useEffect(() => {
    if (mobileDesignerCommentList.length === 0) {
      setIsKey((ik) => !ik);
    }
  }, [mobileDesignerCommentList]);

  console.log(mobileDesignerCommentList);

  const { data, isSuccess, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ['getGuestBook', isKey],
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
      const id = designerId === -1 ? '' : designerId;
      const response = await getGuestBook(id, page, 3);
      setMobileCount(response?.count);
      setMobileDesignerCommentList((prev) => [...prev, ...response?.commentList]);

      return { response, nextPage: page + 1 };
    }
  }

  return (
    <>
      <CategoryDropBox designerId={designerId} setDesignerId={setDesignerId} />
      <GuestBookDesktop>
        <>
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
          <PaginationWrapper>
            <Pagination
              currentPage={currentDesktopPage}
              setCurrentPage={setCurrentDesktopPage}
              lastPage={lastDesktopPage}
              paginationNumbers={paginationDesktopNumbers}
            />
          </PaginationWrapper>
        </>
      </GuestBookDesktop>
      <GuestBookTablet>
        <>
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
          <PaginationWrapper>
            <Pagination
              currentPage={currentTabletPage}
              setCurrentPage={setCurrentTabletPage}
              lastPage={lastTabletPage}
              paginationNumbers={paginationTabletNumbers}
            />
          </PaginationWrapper>
        </>
      </GuestBookTablet>
      <Mobile>
        <>
          <TopButton />
          {/* {desktopData?.count > 0 ? ( */}
          {mobileDesignerCommentList ? (
            <LettersWrapper>
              {mobileDesignerCommentList?.map(
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
        </>
      </Mobile>
    </>
  );
};

export default Letters;

const Target = styled.div`
  height: 30px;
`;
const LettersWrapper = styled.section`
  display: grid;
  margin-top: 4.3rem;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;

  @media screen and (width <= 1200px) {
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

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin: 9.4rem 0;
    ${({ theme }) => theme.fonts.Mobile_Caption_03}
  }
`;

const PaginationWrapper = styled.section`
  margin-top: 4.2rem;
`;
