import React from 'react';
import { styled } from 'styled-components';
import { graduationWorkList } from '../data/graduationData';
import GraduationWorkCard from './GraduationWorkCard';
import { MOBILE_WIDTH } from '~/constants/common';

const GraduationWorkList = () => {
  return (
    <ListWrapper>
      {graduationWorkList.map(({ img, track, title, memberList }, idx) => (
        <GraduationWorkCard
          key={title + idx}
          img={img}
          track={track}
          title={title}
          memberList={memberList}
        />
      ))}
    </ListWrapper>
  );
};

export default GraduationWorkList;

const ListWrapper = styled.div`
  display: grid;
  gap: 1%;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 16rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 5rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;
