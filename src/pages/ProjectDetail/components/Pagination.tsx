import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IcArrowLeft, IcArrowRight } from '~/assets/icons';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageArray] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <>
      <Container>
        <IconWrapper onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          <IcArrowLeft />
        </IconWrapper>
        <ButtonWrapper>
          {currentPageArray.map((_, i) => (
            <PageButton
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              ariaCurrent={currentPage === i + 1 ? 'page' : null}
            >
              {i + 1}
            </PageButton>
          ))}
        </ButtonWrapper>
        <IconWrapper
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === currentPageArray.length + 1}
        >
          <IcArrowRight />
        </IconWrapper>
      </Container>
    </>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4.6rem;
`;
const IconWrapper = styled.span<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.6rem;
  height: 4.6rem;

  cursor: pointer;
`;

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

const PageButton = styled.span<{ ariaCurrent: 'page' | null }>(
  ({ theme }) => theme.fonts.Caption_01,
  ({ ariaCurrent }) => `color : ${ariaCurrent === 'page' ? 'black;' : 'gray;'}`,
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.6rem;
    height: 4.6rem;
    font-weight: 400;
    cursor: pointer;
  `,
);
