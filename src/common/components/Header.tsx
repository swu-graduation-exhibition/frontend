import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { IcDefaultBar, IcHeaderLogo, IcCloseBar } from '~/assets/icons';
import {
  MOBILE_PAGE_CATEGORIES,
  MOBILE_PAGE_PATHS,
  PAGE_CATEGORIES,
  PAGE_PATHS,
} from '~/constants/common';
import { Default, Mobile } from '~/utils/mediaQuery';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);

  return (
    <HeaderWrapper isToggle={isToggle}>
      <div>
        <IcHeaderLogo onClick={() => navigate('/')} />{' '}
      </div>
      <Mobile>
        {isToggle ? (
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
        )}
      </Mobile>
      <Default>
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
      </Default>
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
    isToggle && window.innerWidth <= 768
      ? css`
          background-color: ${({ theme }) => theme.colors.Black};
          opacity: 70%;
          position: relative;
        `
      : css`
          border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Black};
        `}
  padding: 0 10%;
  z-index: 2;

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
      isToggle && window.innerWidth <= 767
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
  gap: 1rem;

  width: 100%;
  position: absolute;
  top: 5.4rem;
  left: 0;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.Black};

  padding-left: 1.6rem;

  a {
    font-size: 30px;
    font-weight: 300;
    line-height: 46px;

    color: ${({ theme }) => theme.colors.White};
  }
`;
