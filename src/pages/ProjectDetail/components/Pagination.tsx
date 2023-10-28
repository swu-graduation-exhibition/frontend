import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  lastPage: number;
  paginationNumbers: number[];
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  lastPage,
  paginationNumbers,
}: PaginationProps) => {
  const [pageList, setPageList] = useState<number[][]>([]);

  function moveToPrev() {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }

  function moveToNext() {
    if (currentPage === lastPage) return;
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    const newPagination = [...paginationNumbers];
    const length = newPagination.length;
    const divide = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0);
    const newArray = [];

    for (let i = 0; i <= divide; i++) {
      newArray.push(newPagination.splice(0, 10));
    }

    setPageList(newArray);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== 1) {
      if (window.innerWidth <= 520) {
      } else if (window.innerWidth <= 830) {
        window.scroll({
          top: 500,
          behavior: 'smooth',
        });
      } else if (window.innerWidth <= 1200) {
        window.scroll({
          top: 850,
          behavior: 'smooth',
        });
      } else if (window.innerWidth <= 1400) {
        window.scroll({
          top: 750,
          behavior: 'smooth',
        });
      } else {
        window.scroll({
          top: 850,
          behavior: 'smooth',
        });
      }
    }
  }, [currentPage]);

  return (
    <>
      <Container>
        <IconWrapper onClick={moveToPrev}>
          <IconArrowLeft src={`${import.meta.env.VITE_SWU_IMAGE}/ic_arrow_left.svg`} />
        </IconWrapper>
        <ButtonWrapper>
          {pageList[Math.floor(currentPage / 11)]?.map((page, i) => {
            console.log(page);
            return (
              <PageButton
                key={i}
                onClick={() => setCurrentPage(page)}
                $iscurrentpage={currentPage === page && 'page'}
              >
                {page}
              </PageButton>
            );
          })}
        </ButtonWrapper>
        <IconWrapper onClick={moveToNext}>
          <IconArrowRight src={`${import.meta.env.VITE_SWU_IMAGE}/ic_arrow_right.svg`} />
        </IconWrapper>
      </Container>
    </>
  );
};

export default Pagination;

const IconArrowLeft = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`;

const IconArrowRight = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.6rem;
`;
const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.6rem;
  height: 4.6rem;

  cursor: pointer;
`;

const ButtonWrapper = styled.ul`
  display: flex;
  flex-direction: row;
`;

const PageButton = styled.li<{ $iscurrentpage: 'page' | false }>(
  ({ theme }) => theme.fonts.Caption_01,
  ({ $iscurrentpage }) => `color : ${$iscurrentpage === 'page' ? 'black;' : 'gray;'}`,
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.6rem;
    height: 4.6rem;
  `,
);
