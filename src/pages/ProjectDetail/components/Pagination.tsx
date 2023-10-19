import styled, { css } from 'styled-components';
import { IcArrowLeft, IcArrowRight } from '~/assets/icons';

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
  return (
    <>
      <Container>
        <IconWrapper
          onClick={() => {
            if (currentPage === 1) return;
            setCurrentPage(currentPage - 1);
          }}
        >
          <IconArrowLeft />
        </IconWrapper>
        <ButtonWrapper>
          {paginationNumbers.map((_, i) => (
            <PageButton
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              $iscurrentpage={currentPage === i + 1 && 'page'}
            >
              {i + 1}
            </PageButton>
          ))}
        </ButtonWrapper>
        <IconWrapper
          onClick={() => {
            if (currentPage === lastPage) return;
            setCurrentPage(currentPage + 1);
          }}
        >
          <IconArrowRight />
        </IconWrapper>
      </Container>
    </>
  );
};

export default Pagination;

const IconArrowLeft = styled(IcArrowLeft)`
  width: 2.3rem;
  height: 2.3rem;
`;

const IconArrowRight = styled(IcArrowRight)`
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
