import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';
import { guestBookData } from '../data/guestBookData';
import CategoryDropBox from './CategoryDropBox';
import GuestBookCard from './GuestBookCard';

const Letters = () => {
  const [designerId, setDesignerId] = useState(-1);
  const [guestBookList, setGuestBookList] = useState(guestBookData);

  useEffect(() => {
    // 필터링
    if (designerId === 49 || designerId === -1) {
      setGuestBookList(guestBookData);
    } else {
      const newList = [...guestBookData.filter(({ receiver }) => receiver === designerId)];
      setGuestBookList(newList);
    }
  }, [designerId]);

  return (
    <>
      <CategoryDropBox designerId={designerId} setDesignerId={setDesignerId} />

      {guestBookList.length > 0 ? (
        <LettersWrapper>
          {guestBookList.map(({ sender, content, createdAt, receiver }, idx) => (
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
    </>
  );
};

export default Letters;

const LettersWrapper = styled.section`
  display: grid;
  margin-top: 4.3rem;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;

  @media screen and (width <= 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (width <= 1400px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 3.2rem;
    gap: 1.7rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 3rem;
    gap: 1.2rem;
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
