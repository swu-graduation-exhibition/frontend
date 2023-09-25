import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import Pagination from '~/pages/ProjectDetail/components/Pagination';
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';
import { guestBookData } from '../data/guestBookData';
import CategoryDropBox from './CategoryDropBox';
import Flowers from './Flowers';
import GuestBookCard from './GuestBookCard';

const Letters = () => {
  const [designerId, setDesignerId] = useState(-1);
  // 서버에서 데이터 받아오기
  const [guestBookList, setGuestBookList] = useState(guestBookData);

  // 데스크탑
  const [currentDesktopPage, setCurrentDesktopPage] = useState(1);
  const lastDesktopPage = Math.ceil(guestBookList.length / 8);
  const paginationDesktopNumbers = Array.from({ length: lastDesktopPage }).map((_, i) => i + 1);

  // 태블릿
  const [currentTabletPage, setCurrentTabletPage] = useState(1);
  const lastTabletPage = Math.ceil(guestBookList.length / 6);
  const paginationTabletNumbers = Array.from({ length: lastTabletPage }).map((_, i) => i + 1);

  // 모바일
  const [currentMobilePage, setCurrentMobilePage] = useState(1);
  const lastMobilePage = Math.ceil(guestBookList.length / 3);
  const paginationMobileNumbers = Array.from({ length: lastMobilePage }).map((_, i) => i + 1);

  useEffect(() => {
    // 필터링 - api 연결 후 삭제 예정
    if (designerId === 49 || designerId === -1) {
      setGuestBookList(guestBookData);
    } else {
      const newList = [...guestBookData.filter(({ receiver }) => receiver === designerId)];
      setGuestBookList(newList);
    }
  }, [designerId]);
  console.log(guestBookList.length);
  return (
    <>
      <CategoryDropBox designerId={designerId} setDesignerId={setDesignerId} />
      <Desktop>
        <>
          {guestBookList.length > 0 ? (
            <LettersWrapper>
              {guestBookList
                .slice(8 * (currentDesktopPage - 1), 8 * currentDesktopPage)
                .map(({ sender, content, createdAt, receiver }, idx) => (
                  <GuestBookCard
                    key={idx}
                    sender={sender}
                    content={content}
                    createdAt={createdAt}
                    receiver={receiver}
                  />
                ))}
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
          {guestBookList.length > 0 ? (
            <LettersWrapper>
              {guestBookList
                .slice(6 * (currentTabletPage - 1), 6 * currentTabletPage)
                .map(({ sender, content, createdAt, receiver }, idx) => (
                  <GuestBookCard
                    key={idx}
                    sender={sender}
                    content={content}
                    createdAt={createdAt}
                    receiver={receiver}
                  />
                ))}
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
        <>모바일 무한스크롤 데이터</>
      </Mobile>
      <Flowers length={guestBookData.length} />
    </>
  );
};

export default Letters;

const LettersWrapper = styled.section`
  display: grid;
  margin-top: 4.3rem;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;

  @media screen and (width <= ${TABLET_WIDTH}) {
    margin: 9.4rem 0;
    grid-template-columns: repeat(2, 1fr);
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
