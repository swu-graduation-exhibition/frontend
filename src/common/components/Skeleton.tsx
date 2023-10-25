import styled, { keyframes } from 'styled-components';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH } from '~/constants/common';

export default function Skeleton() {
  return <Card />;
}

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(45rem);
  }
`;

const Card = styled.div`
  width: 100%;
  height: 618px;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    height: 527.25px;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    height: 257.25px;
  }

  background-color: rgb(145 145 145 / 10%);

  animation: ${loading} 4s infinite;
  object-fit: cover;
`;
