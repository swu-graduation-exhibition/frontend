import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import ReactPlayer from 'react-player';
import MovingLandingGif from 'assets/moving_landing.gif';
import { MOBILE_WIDTH } from '~/constants/common';
function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 8500);
  }, []);
  return (
    <PlayerWrapper>
      <img src={MovingLandingGif} />
    </PlayerWrapper>
  );
}

export default Landing;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: contain;

    margin: auto;
  }
`;
