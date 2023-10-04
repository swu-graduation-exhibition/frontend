import styled from 'styled-components';
import { PageLayout } from '~/common/components';
import useGetGuestBookDesktop from '~/hooks/useGetGuestBookDesktop';
import GuestBookInput from './components/GuestBookInput';
import Letters from './components/Letters';
import Title from './components/Title';

const GuestBook = () => {
  const { desktopData } = useGetGuestBookDesktop(1, 1);

  return (
    <GuestBookWrapper>
      <PageLayout>
        <Title />
        <GuestBookInput />
        <Letters />
      </PageLayout>
    </GuestBookWrapper>
  );
};

export default GuestBook;

const FooterWrapper = styled.div`
  position: sticky;
  top: 195rem;
`;

const GuestBookWrapper = styled.div`
  overflow: scroll;
`;
