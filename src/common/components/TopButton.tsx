import { useEffect, useState } from 'react';
import { keyframes, styled, css } from 'styled-components';

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <ButtonWrapper>
      <CustomButton onClick={scrollToTop} type="button" $isshow={showButton}>
        <img src={`${import.meta.env.VITE_SWU_IMAGE}/btn_floating.svg`} />
      </CustomButton>
    </ButtonWrapper>
  );
};

export default TopButton;

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;
const boxFadeOut = keyframes`
   0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
`;

const CustomButton = styled.button<{ $isshow: boolean }>`
  ${({ $isshow }) =>
    $isshow
      ? css`
          opacity: 1;
          animation: ${boxFade} ease-in-out 1s;
        `
      : css`
          opacity: 0;
          animation: ${boxFadeOut} ease-in-out 0.8s;
        `}
  border-radius: 100px;
  border-color: ${({ theme }) => theme.colors.Grayscales_800};
  outline: none;
  cursor: pointer;

  &:hover {
    color: rgb(142 26 26);
  }
`;
