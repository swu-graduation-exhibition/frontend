import styled from 'styled-components';

export default function Loading() {
  return (
    <Background>
      <LoadingImage src={`${import.meta.env.VITE_SWU_IMAGE}/loadingIc.svg`} />
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;

  background-color: #ffffff4f;

  flex-direction: column;
`;

const LoadingImage = styled.img`
  z-index: 10;
  height: 20rem;

  animation: fadeinanimation 2s ease-out;
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
