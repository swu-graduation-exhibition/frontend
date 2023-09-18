import { useState } from 'react';
import styled from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';
import Content from './Content';
import ReceiverDropBox from './ReceiverDropBox';
import SenderInput from './SenderInput';
const GuestBookInput = () => {
  const [guestBookContents, setGuestBookContents] = useState({
    sender: '',
    receiver: -1,
    content: '',
  });

  const checkReadyToSend = () => {
    return (
      guestBookContents.sender !== '' &&
      guestBookContents.receiver !== -1 &&
      guestBookContents.content !== ''
    );
  };

  return (
    <GuestBookInputWrapper>
      <GuestBookHeadLine>
        <PeopleInputContainer>
          <InputWrapper gridArea={'sender'}>
            <SubTitle>보내는 사람</SubTitle>
            <SenderInput
              guestBookContents={guestBookContents}
              setGuestBookContents={setGuestBookContents}
            />
          </InputWrapper>
          <InputWrapper gridArea={'receiver'}>
            <SubTitle>받는 사람</SubTitle>
            <ReceiverDropBox
              isReceiver={true}
              guestBookContents={guestBookContents}
              setGuestBookContents={setGuestBookContents}
            />
          </InputWrapper>
        </PeopleInputContainer>
        <SendButton type="button" isReady={checkReadyToSend()}>
          등록
        </SendButton>
      </GuestBookHeadLine>
      <ContentWrapper>
        <SubTitle>메시지</SubTitle>
        <Content
          guestBookContents={guestBookContents}
          setGuestBookContents={setGuestBookContents}
        />
      </ContentWrapper>
    </GuestBookInputWrapper>
  );
};

export default GuestBookInput;

const GuestBookHeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const SendButton = styled.button<{ isReady: Boolean }>`
  width: 10.9rem;
  height: 6.2rem;
  border-radius: 1rem;

  background-color: ${({ isReady, theme }) =>
    isReady ? theme.colors.Grayscales_900 : theme.colors.Grayscales_200};

  ${({ theme, isReady }) =>
    isReady ? theme.fonts.Caption_03_White : theme.fonts.Caption_03_Gray600}

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-left: 0.5rem;
    height: 13rem;
    ${({ theme, isReady }) =>
      isReady ? theme.fonts.Mobile_Body_02_White : theme.fonts.Mobile_Body_02_Gray600}
  }
`;

const ContentWrapper = styled.div`
  margin-top: 4rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 1.8rem;
  }
`;

const GuestBookInputWrapper = styled.div`
  margin-top: 4.3rem;
`;

const PeopleInputContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    flex-direction: column;

    width: 26.9rem;
  }
`;

const InputWrapper = styled.article<{ gridArea: string }>`
  display: flex;
  flex-direction: column;
  grid-area: ${({ gridArea }) => gridArea};

  margin-top: ${({ gridArea }) => gridArea === 'receiver' && 0.5}rem;
`;

const SubTitle = styled.p`
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.Black};

  ${({ theme }) => theme.fonts.Caption_01};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    display: none;
  }
`;
