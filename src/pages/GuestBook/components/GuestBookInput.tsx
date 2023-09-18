import { useState } from 'react';
import styled from 'styled-components';

const GuestBookInput = () => {
  const [guestBookContents, setGuestBookContents] = useState({
    sender: '',
    receiver: 0,
    content: '',
  });

  const handleInputFrom = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (e.target.value.length <= 8) {
      setGuestBookContents({ ...guestBookContents, sender: e.target.value });
    }
  };

  console.log(guestBookContents.sender);

  return (
    <>
      <SubTitle>보내는 사람</SubTitle>
      <FromInput
        type="text"
        placeholder="보내는 사람을 입력해 주세요."
        maxLength={8}
        onChange={handleInputFrom}
        value={guestBookContents.sender}
      />
    </>
  );
};

export default GuestBookInput;

const SubTitle = styled.p`
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.Black};

  ${({ theme }) => theme.fonts.Caption_01};
`;

const FromInput = styled.input`
  display: inline-flex;
  align-items: center;
  width: 27.2rem;
  padding: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_500};

  background: ${({ theme }) => theme.colors.white};
  gap: 0.8rem;

  border-radius: 1rem;

  color: ${({ theme }) => theme.colors.Grayscales_500};
  ${({ theme }) => theme.fonts.Caption_03};
`;
