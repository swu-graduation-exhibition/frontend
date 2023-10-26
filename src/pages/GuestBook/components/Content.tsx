import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';

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
    <TextAreaWrapper>
      <ContentArea
        placeholder="내용을 입력해 주세요."
        maxLength={100}
        value={guestBookContents.content}
        onChange={handleInputContent}
      />
      <CountingLetterSection>
        <CountLetter>{`${guestBookContents.content?.length ?? 0} / 100`}</CountLetter>
      </CountingLetterSection>
    </TextAreaWrapper>
  );
};

export default Content;

const TextAreaWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
`;

const CountingLetterSection = styled.section`
  position: absolute;
  right: 2.4rem;
  bottom: 2.4rem;
`;

const CountLetter = styled.span(
  ({ theme }) => theme.fonts.Caption_03,
  css`
    color: ${({ theme }) => theme.colors.Grayscales_500};

    @media screen and (width <= ${`1000px`}) {
      ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
    }
  `,
);

const CommentBox = styled.p`
  position: absolute;
  right: 12%;
  margin-top: -4rem;

  ${({ theme }) => theme.fonts.Caption_03_Gray500};
  font-size: 1.5rem;

  @media screen and (width <= ${TABLET_WIDTH}) {
    right: 10%;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    right: 7%;
  }
`;

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

  @media screen and (width <= ${`1000px`}) {
    height: 16.9rem;

    &::placeholder {
      ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
    }

    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }
`;
