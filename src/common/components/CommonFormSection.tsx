import styled, { DefaultTheme, css } from 'styled-components';
import useFormHooks from '~/hooks/useFormHooks';
import { FormSupplies } from '../data/commonFormSection';
import { FormSectionProps, SubmitButtonProps } from '~/types/commonFormSection';

const CommonFormSection = ({ page }: FormSectionProps) => {
  const { formData, isButtonActive, inputOnChange, textAreaOnChange } = useFormHooks();
  const { to, message } = formData;

  const { title, toMent, messageMent } = FormSupplies[page];
  return (
    <Container>
      <HeaderSection>
        <Title>{title}</Title>
        {page === 'project' && <CommentCount>22</CommentCount>}
      </HeaderSection>
      {page === 'designer' && <ToLabelSection>보내는 사람</ToLabelSection>}
      <ToInputWrapper>
        <FromInput placeholder={toMent} value={to} onChange={inputOnChange} />
        {isButtonActive ? <SubmitButton>등록</SubmitButton> : <UnSubmitButton>등록</UnSubmitButton>}
      </ToInputWrapper>
      {page === 'designer' && <MsgLabelSection>메시지</MsgLabelSection>}
      <TextAreaWrapper>
        <TextArea placeholder={messageMent} value={message} onChange={textAreaOnChange} />
        <CountingLetterSection>
          <CountLetter>{`(${message?.length ?? 0} / 100자)`}</CountLetter>
        </CountingLetterSection>
      </TextAreaWrapper>
    </Container>
  );
};

export default CommonFormSection;

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;
const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  margin-bottom: 5rem;
`;

const ToLabelSection = styled.div(
  ({ theme }) => theme.fonts.Caption_01,
  css`
    margin-bottom: 0.8rem;
  `,
);

const MsgLabelSection = styled.div(
  ({ theme }) => theme.fonts.Caption_01,
  css`
    margin-top: 2.2rem;
    margin-bottom: 0.8rem;
  `,
);

const Title = styled.div(({ theme }) => theme.fonts.Subtitle_01);

const CommentCount = styled.span(
  ({ theme }) => theme.fonts.Subtitle_01,
  css`
    color: ${({ theme }) => theme.colors.Grayscales_600};

    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
  `,
);
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
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.Grayscales_900};

    color: ${({ theme }) => theme.colors.Grayscales_50};
  `,
);
const UnSubmitButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.colors.Grayscales_200};

  color: ${({ theme }) => theme.colors.Grayscales_600};
`;

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
