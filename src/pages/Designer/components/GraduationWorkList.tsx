import React from 'react';
import { styled } from 'styled-components';
import { graduationWorkList } from '../data/graduationData';
import GraduationWorkCard from './GraduationWorkCard';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';

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
  display: flex;
  gap: 4.8rem;

  margin-top: 15rem;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    margin-top: 12.2rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 4rem;
    gap: 6.4rem;
    flex-direction: column;
  }
`;
