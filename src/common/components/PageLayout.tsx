import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Footer, Header } from '.';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <PageLayoutWrapper>
      <Header />
      {children}
      <Footer />
    </PageLayoutWrapper>
  );
};

export default PageLayout;

const PageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
