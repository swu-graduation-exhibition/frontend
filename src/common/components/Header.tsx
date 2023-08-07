import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { IcDefaultBar, IcHeaderLogo, IcCloseBar } from '~/assets/icons';
import {
  PAGE_CATEGORIES,
  PAGE_PATHS,
  MOBILE_PAGE_CATEGORIES,
  MOBILE_PAGE_PATHS,
} from '~/constants/common';
import useWindowSize from '~/hooks/useWindowSize';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const [isToggle, setIsToggle] = useState(false);

  return (
    <HeaderWrapper isToggle={isToggle}>
      <div>
        <IcHeaderLogo onClick={() => navigate('/')} />{' '}
      </div>
      {width <= 640 ? (
        isToggle ? (
          <>
            <IcCloseBar onClick={() => setIsToggle(false)} />
            <MobileLinkWrapper>
              {MOBILE_PAGE_CATEGORIES.map((category, idx) => (
                <LiContent key={category}>
                  <Link to={MOBILE_PAGE_PATHS[idx]}>{category}</Link>
                </LiContent>
              ))}
            </MobileLinkWrapper>
          </>
        ) : (
          <IcDefaultBar onClick={() => setIsToggle(true)} />
        )
      ) : (
        <LinkWrapper>
          {PAGE_CATEGORIES.map((category, idx) => (
            <LiContent key={category}>
              <Link
                to={PAGE_PATHS[idx]}
                className={pathname === PAGE_PATHS[idx] ? 'correct' : 'incorrect'}
              >
                {category}
              </Link>
            </LiContent>
          ))}
        </LinkWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled(({ isToggle, ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 192rem;
  height: 11rem;
  ${({ isToggle }) =>
    isToggle && window.innerWidth <= 630
      ? css`
          border-bottom: 0.1rem solid ${({ theme }) => theme.colors.White};
          background-color: ${({ theme }) => theme.colors.Black};
          opacity: 70%;

          position: relative;
        `
      : css`
          border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Black};
        `}
  padding: 0 10%;

  @media screen and (width <= 1400px) {
    height: 8rem;
    padding: 0 8%;
  }
  @media screen and (width <= 830px) {
    height: 5.5rem;
    padding: 0 1.6rem 0 0;
  }
  svg {
    cursor: pointer;
    @media screen and (width <= 1400px) {
      /* height: 8rem; */
    }
    @media screen and (width <= 830px) {
      height: 2.6rem;
    }
    ${({ isToggle }) =>
      isToggle && window.innerWidth <= 630
        ? css`
            path {
              fill: white;
            }
          `
        : css`
            path {
              fill: black;
            }
          `}
  }
`;
const LinkWrapper = styled.ul`
  display: flex;
  gap: 8.8rem;

  @media screen and (width <= 830px) {
    gap: 6.8rem;
  }
`;
const LiContent = styled.li`
  a {
    font-family: Noto Sans KR;
    font-size: 25px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;

    @media screen and (width <= 830px) {
      font-size: 1.6rem;
    }
  }
  .incorrect {
    color: ${({ theme }) => theme.colors.Grayscales_500};
  }
`;
const MobileLinkWrapper = styled(LinkWrapper)`
  flex-direction: column;
  gap: 0.3rem;

  width: 100%;
  position: absolute;
  top: 5.5rem;
  left: 0;
  height: 100vh;
  z-index: 2;

  background-color: ${({ theme }) => theme.colors.Black};

  padding-left: 1.6rem;

  a {
    font-size: 30px;
    font-weight: 300;
    line-height: 46px;

    color: ${({ theme }) => theme.colors.White};
  }
`;
