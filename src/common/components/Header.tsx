import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { IcDefaultBar, IcHeaderLogo } from '~/assets/icons';
import { PAGE_CATEGORIES, PAGE_PATHS } from '~/constants/common';
import useWindowSize from '~/hooks/useWindowSize';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { width } = useWindowSize();

  return (
    <HeaderWrapper>
      <div>
        <IcHeaderLogo onClick={() => navigate('/')} />
      </div>
      {width <= 640 ? (
        <IcDefaultBar />
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

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 192rem;
  height: 11rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Black};
  padding: 0 10%;

  div > svg {
    cursor: pointer;
    @media screen and (width <= 1400px) {
      /* height: 8rem; */
    }
    @media screen and (width <= 830px) {
      height: 2.6rem;
    }
  }

  @media screen and (width <= 1400px) {
    height: 8rem;
    padding: 0 8%;
  }
  @media screen and (width <= 830px) {
    height: 5.5rem;
    padding: 0 5%;
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
