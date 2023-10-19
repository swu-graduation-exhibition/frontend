import styled from 'styled-components';
import { LoadingIc } from '~/assets/icons';

export default function Loading() {
  return (
    <Background>
      <LoadingImage />
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;

  background-color: rgb(0 0 0 / 40%);
  flex-direction: column;
`;

const LoadingImage = styled(LoadingIc)`
  z-index: 10;
  height: 20rem;

  animation: fadeinanimation 1s ease-out;
  animation-iteration-count: infinite;

  @keyframes fadeinanimation {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
