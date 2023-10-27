import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface SenderInputProps {
  guestBookContents: { sender: string; receiver: number; content: string };
  setGuestBookContents: Dispatch<
    SetStateAction<{ sender: string; receiver: number; content: string }>
  >;
}

const SenderInput = (props: SenderInputProps) => {
  const { guestBookContents, setGuestBookContents } = props;

  const handleInputSender = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (e.target.value.length <= 8) {
      setGuestBookContents({ ...guestBookContents, sender: e.target.value });
    }
  };

  return (
    <Input
      type="text"
      placeholder="보내는 사람을 입력해 주세요."
      maxLength={8}
      onChange={handleInputSender}
      value={guestBookContents.sender}
    />
  );
};

export default SenderInput;

const Input = styled.input`
  display: inline-flex;
  align-items: center;
  width: 27.2rem;
  padding: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_500};

  background-color: ${({ theme }) => theme.colors.White};
  gap: 0.8rem;

  border-radius: 1rem;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.Black};

    color: ${({ theme }) => theme.colors.Black};
  }

  ${({ theme }) => theme.fonts.Caption_03};

  &::placeholder {
    ${({ theme }) => theme.fonts.Caption_03_Gray500};
  }

  @media screen and (width <= ${`955px`}) {
    width: 27.2rem;
  }

  @media screen and (width <= ${`1000px`}) {
    &::placeholder {
      ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
    }

    ${({ theme }) => theme.fonts.Mobile_Body_03};

    width: 22rem;
  }

  @media screen and (width <= ${`600px`}) {
    &::placeholder {
      ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
    }

    ${({ theme }) => theme.fonts.Mobile_Body_03};

    width: 100%;
  }

  @media screen and (width <= ${`350px`}) {
    &::placeholder {
      font-size: 1rem;
    }

    font-size: 1rem;
  }
`;
