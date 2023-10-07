import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 8500);
  }, []);
  return (
    <PlayerWrapper>
      <ReactPlayer
        url={'moving_poster.mp4'}
        width="100%"
        height="100%"
        loop={false}
        muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
        playing={true}
      />
    </PlayerWrapper>
  );
}

export default Landing;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
  }
`;
