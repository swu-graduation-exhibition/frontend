import styled from 'styled-components';
import Loading from '~/pages/Loading';

const BackgroundImg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -10;
  width: 100%;

  max-width: 192rem;

  height: 100%;

  object-fit: cover;
  max-height: 100%;
  transform: translate(-50%, -50%);

  background-color: '#ffffff';
`;

const GuestBackgroundImg = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -10;
  width: 100%;

  /* max-width: 192rem; */

  height: 100%;

  object-fit: cover;
  max-height: 100%;
  transform: translate(-50%, -50%);

  filter: blur(10px);
`;

export const whitePlaceholder = <BackgroundImg />;

export const yellowPlaceholder = (
  <GuestBackgroundImg src={`${import.meta.env.VITE_SWU_IMAGE}/guestBookBlur.png`} />
);

export const yellowPlaceholderMobile = (
  <GuestBackgroundImg src={`${import.meta.env.VITE_SWU_IMAGE}/guestBookBlurMobile.png`} />
);

export const empthyPlaceholder = <Loading />;
