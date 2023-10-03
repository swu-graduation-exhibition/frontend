import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 8000);
  }, []);
  return (
    <PlayerWrapper>
      <video muted={true} autoPlay={true} loop={true} playsInline>
        <source src={'moving_poster.mp4'} type="video/mp4" />
        {/* <source src={`${import.meta.env.PUBLIC_URL}`} type="video/mp4" /> */}
      </video>
    </PlayerWrapper>
  );
}

export default Landing;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
  }
`;
