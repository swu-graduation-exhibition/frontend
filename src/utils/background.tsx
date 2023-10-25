import styled from 'styled-components';

const BackgroundImg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -10;
  width: 100vw;
  max-width: 190rem;
  height: 100%;

  object-fit: cover;
  max-height: 100%;
  transform: translate(-50%, -50%);
`;

export const whitePlaceholder = <BackgroundImg style={{ backgroundColor: '#ffffff' }} />;

export const yellowPlaceholder = <BackgroundImg style={{ backgroundColor: '#F7F5F4' }} />;
