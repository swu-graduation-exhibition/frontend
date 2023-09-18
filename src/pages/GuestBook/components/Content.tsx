import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';

interface ContentProps {
  guestBookContents: { sender: string; receiver: number; content: string };
  setGuestBookContents: Dispatch<
    SetStateAction<{ sender: string; receiver: number; content: string }>
  >;
}

const Content = (props: ContentProps) => {
  const { guestBookContents, setGuestBookContents } = props;

  const handleInputContent = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (e.target.value.length <= 100) {
      setGuestBookContents({ ...guestBookContents, content: e.target.value });
    }
  };

  return (
    <ContentArea
      placeholder="내용을 입력해 주세요."
      maxLength={100}
      value={guestBookContents.content}
      onChange={handleInputContent}
    />
  );
};

export default Content;

const ContentArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 25.6rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_500};
  background: ${({ theme }) => theme.colors.White};

  ${({ theme }) => theme.fonts.Caption_03};

  &::placeholder {
    ${({ theme }) => theme.fonts.Caption_03_Gray500};
  }

  &:focus {
    ${({ theme }) => theme.fonts.Caption_03};
    outline: 1px solid ${({ theme }) => theme.colors.Grayscales_900};
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    height: 16.9rem;

    &::placeholder {
      ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
    }

    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }
`;
