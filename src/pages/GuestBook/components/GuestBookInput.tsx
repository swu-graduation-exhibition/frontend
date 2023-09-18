import { useState } from 'react';
import styled from 'styled-components';
import DropBox from './DropBox';
import SenderInput from './SenderInput';

const GuestBookInput = () => {
  const [guestBookContents, setGuestBookContents] = useState({
    sender: '',
    receiver: -1,
    content: '',
  });

  console.log(guestBookContents.sender);

  return (
    <GuestBookInputWrapper>
      <PeopleInputContainer>
        <InputWrapper>
          <SubTitle>보내는 사람</SubTitle>
          <SenderInput
            guestBookContents={guestBookContents}
            setGuestBookContents={setGuestBookContents}
          />
        </InputWrapper>
        <InputWrapper>
          <SubTitle>받는 사람</SubTitle>
          <DropBox
            isReceiver={true}
            guestBookContents={guestBookContents}
            setGuestBookContents={setGuestBookContents}
          />
        </InputWrapper>
      </PeopleInputContainer>
    </GuestBookInputWrapper>
  );
};

export default GuestBookInput;

const GuestBookInputWrapper = styled.div`
  margin-top: 4.3rem;
`;

const PeopleInputContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80rem;
`;

const InputWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.p`
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.Black};

  ${({ theme }) => theme.fonts.Caption_01};
`;
