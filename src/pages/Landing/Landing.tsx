import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Default, Mobile } from '~/utils/mediaQuery';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 8000);
  }, []);
  return (
    <PlayerWrapper>
      <Default>
        <img src={`${import.meta.env.VITE_SWU_IMAGE}/moving_landing_bg.gif`} />
      </Default>
      <Mobile>
        <img src={`${import.meta.env.VITE_SWU_IMAGE}/moving_landing.gif`} />
      </Mobile>
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
    object-fit: cover;

    margin: auto;
  }
`;
