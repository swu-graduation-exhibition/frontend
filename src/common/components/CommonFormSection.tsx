import styled, { css } from 'styled-components';
import useFormHooks from '~/hooks/useFormHooks';

const CommentFormSection = () => {
  const { formData, inputOnChange, textAreaOnChange } = useFormHooks();
  const { to, message } = formData;
  return (
    <Container>
      <ToInputWrapper>
        <FromInput
          placeholder="보내는 사람이 누구인지 입력해 주세요."
          value={to}
          onChange={inputOnChange}
        />
        <SubmitButton>등록</SubmitButton>
      </ToInputWrapper>
      <TextAreaWrapper>
        <TextArea
          placeholder="프로젝트에 대한 솔직한 피드백과 따뜻한 코멘트를 남겨주세요."
          value={message}
          onChange={textAreaOnChange}
        />
        <CountingLetterSection>
          <CountLetter>{`(${message?.length ?? 0} / 100자)`}</CountLetter>
        </CountingLetterSection>
      </TextAreaWrapper>
    </Container>
  );
};

export default CommentFormSection;

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const ToInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const FromInput = styled.input(
  ({ theme }) => theme.fonts.Caption_03,
  css`
    width: 40rem;
    height: 6.2rem;
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.Grayscales_500};

    background-color: white;

    border-radius: 1rem;
  `,
);

const SubmitButton = styled.button(
  ({ theme }) => theme.fonts.Caption_03,
  css`
    width: 14.9rem;
    height: 6.2rem;

    background-color: ${({ theme }) => theme.colors.Grayscales_900};
    border-radius: 1rem;

    color: ${({ theme }) => theme.colors.Grayscales_50};
  `,
);

const TextArea = styled.textarea(
  ({ theme }) => theme.fonts.Caption_02,
  css`
    overflow: auto;
    height: 25.6rem;
    padding: 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.Grayscales_500};
    outline: none;

    box-shadow: none;

    border-radius: 1rem;

    resize: none;
  `,
);

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
  `,
);
