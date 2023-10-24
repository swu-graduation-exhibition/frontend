import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 8500);
  }, []);
  return (
    <PlayerWrapper>
      <img src={`${import.meta.env.VITE_SWU_IMAGE}/moving_landing.gif`} />
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
