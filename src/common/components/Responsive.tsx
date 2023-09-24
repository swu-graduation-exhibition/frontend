import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery({ minWidth: 1400 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }: PropsWithChildren) => {
  const isTablet = useMediaQuery({ minWidth: 522, maxWidth: 831 });
  return isTablet ? children : null;
};
const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery({ maxWidth: 521 });
  return isMobile ? children : null;
};
