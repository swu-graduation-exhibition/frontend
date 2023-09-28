import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { getGuestBook } from '~/api/getGuestBook';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import useGetGuestBookDesktop from '~/hooks/useGetGuestBookDesktop';
import useGetGuestBookTablet from '~/hooks/useGetGuestBookTablet';
import useInfiniteScroll from '~/hooks/useInfiniteScroll';
import Pagination from '~/pages/ProjectDetail/components/Pagination';
import { GuestBookPageCard } from '~/types/guestBook';
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';
import CategoryDropBox from './CategoryDropBox';
import GuestBookCard from './GuestBookCard';

const Letters = () => {
  const [designerId, setDesignerId] = useState(-1);
  // 서버에서 데이터 받아오기
  // useGetGuestBook(page)
  // const [guestBookList, setGuestBookList] = useState(guestBookData);
  // const count = 20;

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
  // const { trackData, fetchNextPage, hasNextPage } = useGetGuestBook({
  //   id: designerId,
  // });

  // const [mobileGuests, setMobileGuests] = useState<GuestBookPageCard[]>([]);

  // const { data, isSuccess, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
  //   useInfiniteQuery(['guestBooks'], ({ pageParam = 1 }) => getData(pageParam), {
  //     getNextPageParam: (lastPage, allPages) => {
  //       return lastPage?.response.length !== 0 ? lastPage?.nextPage : undefined;
  //     },
  //     refetchOnWindowFocus: false,
  //   });

  // async function getData(page: number) {
  //   if (hasNextPage !== false) {
  //     const response = await getGuestBook(designerId, page, 3);
  //     setMobileGuests((prev) => [...prev, ...response.designerCommentList]);
  //     return { response, nextPage: page + 1 };
  //   }
  // }

  const [mobileDesignerCommentList, setMobileDesignerCommentList] = useState<GuestBookPageCard[]>(
    [],
  );

  const { data, isSuccess, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(['getMobileGuestBooks'], ({ pageParam = 1 }) => getData(pageParam), {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.list.length !== 0 ? lastPage?.nextPage : undefined;
      },
      refetchOnWindowFocus: false,
    });

  const { observerRef } = useInfiniteScroll(fetchNextPage, hasNextPage);

  async function getData(page: number) {
    if (hasNextPage !== false) {
      const response = await getGuestBook(designerId, page, 3);
      console.log(response);
      const list = response.designerCommentList;
      setMobileDesignerCommentList((prev) => [...prev, ...list]);

      return { list, nextPage: page + 1 };
    }
  }

  return (
    <>
      <CategoryDropBox designerId={designerId} setDesignerId={setDesignerId} />
      <Desktop>
        <>
          {lastDesktopPage > 0 ? (
            <LettersWrapper>
              {desktopData?.designerCommentList.map(
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
      </Desktop>
      <Tablet>
        <>
          {lastTabletPage > 0 ? (
            <LettersWrapper>
              {tabletData?.designerCommentList.map(
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
      </Tablet>
      <Mobile>
        <>
          {lastDesktopPage > 0 ? (
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
  height: 10px;

  background-color: pink;
`;
const LettersWrapper = styled.section`
  display: grid;
  margin-top: 4.3rem;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;

  @media screen and (width <= ${TABLET_WIDTH}) {
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
