import styled from 'styled-components';
import { PageLayout } from '~/common/components';
import { TABLET_WIDTH } from '~/constants/common';
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

  padding: 16rem 13.6rem 0;

  @media screen and (width <= 955px) {
    padding: 4rem 6.4rem 0;
  }

  @media screen and (width <= ${TABLET_WIDTH}) {
    padding: 2.4rem 1.6rem 0;
  }

  /* height:; */
`;

const GuestBookBackground = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -10;
  width: 100%;
  height: 100%;
  height: fit-content;

  object-fit: cover;
  max-height: 100%;
  transform: translate(-50%, -50%);
`;

// const PageLayout = styled.div`
//   padding: 16rem 13.6rem 0;

//   @media screen and (width <= 955px) {
//     padding: 4rem 6.4rem 0;
//   }

//   @media screen and (width <= ${TABLET_WIDTH}) {
//     padding: 2.4rem 1.6rem 0;
//   }
// `;
