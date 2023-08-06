import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { IcHeaderLogo } from '~/assets/icons';
import { PAGE_CATEGORIES, PAGE_PATHS } from '~/constants/common';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <IcHeaderLogo onClick={() => navigate('/')} />
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
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 11rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Black};
  padding: 0 13.6rem;

  > svg {
    cursor: pointer;
  }
`;
const LinkWrapper = styled.ul`
  display: flex;
  gap: 8.8rem;
`;
const LiContent = styled.li`
  a {
    font-family: Noto Sans KR;
    font-size: 25px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
  .incorrect {
    color: ${({ theme }) => theme.colors.Grayscales_500};
  }
`;
