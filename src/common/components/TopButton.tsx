import { useEffect, useState } from 'react';
import { keyframes, styled } from 'styled-components';
import { FloatingIc } from '~/assets/icons';

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

    console.log(window.scrollY);
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <ButtonWrapper>
        <CustomButton onClick={scrollToTop} type="button">
          <FloatingIc />
        </CustomButton>
      </ButtonWrapper>
    )
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

const ButtonWrapper = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
`;

const CustomButton = styled.button`
  animation: ${boxFade} 1s linear alternate;

  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:hover {
    color: rgb(142 26 26);
  }
`;
