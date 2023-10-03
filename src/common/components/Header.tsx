import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { IcDefaultBar, IcHeaderLogo, IcCloseBar } from '~/assets/icons';
import {
  MOBILE_PAGE_CATEGORIES,
  MOBILE_PAGE_PATHS,
  MOBILE_WIDTH,
  PAGE_CATEGORIES,
  PAGE_PATHS,
  TABLET_WIDTH,
} from '~/constants/common';
import { Default, Mobile } from '~/utils/mediaQuery';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);

  return (
    <HeaderWrapper $istoggle={isToggle}>
      <div>
        <IcHeaderLogo onClick={() => navigate('/home')} />
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

const HeaderWrapper = styled.div<{ $istoggle: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 192rem;
  height: 11rem;
  ${({ $istoggle }) =>
    $istoggle && window.innerWidth <= 520
      ? css`
          background-color: ${({ theme }) => theme.colors.Black};
          opacity: 70%;
          position: relative;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.White};
          border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Black};
        `}
  padding: 0 5%;
  z-index: 2;

  @media screen and (width <= ${TABLET_WIDTH}) {
    height: 11rem;
    padding: 4.3rem 6.4rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    height: 5.5rem;
    padding: 0 1.6rem 0 0;
  }
  svg {
    cursor: pointer;

    @media screen and (width <=${TABLET_WIDTH}) {
      height: 3.6rem;
    }
    @media screen and (width <= ${MOBILE_WIDTH}) {
      height: 2.5rem;
    }
    ${({ $istoggle }) =>
      $istoggle && window.innerWidth <= 520
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

  @media screen and (width <= ${TABLET_WIDTH}) {
    gap: 3.2rem;
  }
`;
const LiContent = styled.li`
  a {
    font-family: Noto Sans KR;
    font-size: 25px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;

    @media screen and (width <= ${TABLET_WIDTH}) {
      font-size: 2rem;
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
