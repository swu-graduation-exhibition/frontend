import styled from 'styled-components';

export default function Loading() {
  return (
    <Background>
      <LoadingImage src={`${import.meta.env.VITE_SWU_IMAGE}/loading.png`} />
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;

  /* background-color: #ffffff4f; */

  background: linear-gradient(to top, '#FDF9D3', 'white');

  /* background-color: red; */

  flex-direction: column;
`;

const LoadingImage = styled.img`
  z-index: 10;

  /* height: 20rem;
   */

  width: 100%;

  /* @media screen and (height>=1080px) {
    width: 100%;
  }

  @media screen and (height<1080px) {
    height: 100vh;
  } */

  /* animation: fadeinanimation 2s ease-out; */

  /* animation-iteration-count: infinite; */

  @keyframes fadeinanimation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
