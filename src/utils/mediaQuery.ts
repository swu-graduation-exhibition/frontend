import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 832 });
  return isDesktop ? children : null;
};

const GuestBookDesktop = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 1401 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 521, maxWidth: 831 });
  return isTablet ? children : null;
};

const HomeDesktop = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  return isDesktop ? children : null;
};
const HomeTablet = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 630, maxWidth: 1024 });
  return isTablet ? children : null;
};

const HomeMobile = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 629 });
  return isMobile ? children : null;
};

const HomeDefault = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isNotMobile = useMediaQuery({ minWidth: 630 });
  return isNotMobile ? children : null;
};

const GuestBookTablet = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 521, maxWidth: 1400 });
  return isTablet ? children : null;
};

const ProjectDetailBig = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 691 });
  return isTablet ? children : null;
};

const ProjectDetailMobile = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isTablet = useMediaQuery({ maxWidth: 690 });
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

const ProjectDesktop = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 521 });
  return isDesktop ? children : null;
};

export {
  Default,
  Desktop,
  GuestBookDesktop,
  GuestBookTablet,
  HomeDefault,
  HomeDesktop,
  HomeMobile,
  HomeTablet,
  Mobile,
  ProjectDesktop,
  ProjectDetailBig,
  ProjectDetailMobile,
  Tablet,
};
