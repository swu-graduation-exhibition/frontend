import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 832 });
  return isDesktop ? children : null;
};

const GuestBookDesktop = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 1201 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 521, maxWidth: 831 });
  return isTablet ? children : null;
};

const GuestBookTablet = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 521, maxWidth: 1200 });
  return isTablet ? children : null;
};

const Mobile = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 520 });
  return isMobile ? children : null;
};

// mobile이 아닐 때만 출력되는 컴포넌트
const Default = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isNotMobile = useMediaQuery({ minWidth: 521 });
  return isNotMobile ? children : null;
};

export { Default, Desktop, GuestBookDesktop, GuestBookTablet, Mobile, Tablet };
