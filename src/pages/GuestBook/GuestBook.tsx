import styled from 'styled-components';
import { PageLayout } from '~/common/components';
import { TABLET_WIDTH } from '~/constants/common';
import GuestBookInput from './components/GuestBookInput';
import Letters from './components/Letters';
import Title from './components/Title';

const GuestBook = () => {
  return (
    <GuestBookWrapper>
      <PageLayout>
        <PageWrapper>
          <Title />
          <GuestBookInput />
          <Letters />
        </PageWrapper>
      </PageLayout>
    </GuestBookWrapper>
  );
};

export default GuestBook;

const PageWrapper = styled.div`
  padding: 16rem 13.6rem 0;

  @media screen and (width <= ${`955px`}) {
    padding: 4rem 6.4rem 0;
  }

  @media screen and (width <= ${TABLET_WIDTH}) {
    padding: 2.4rem 1.6rem 0;
  }
`;

const GuestBookWrapper = styled.div`
  overflow: scroll;
`;
