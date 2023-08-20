import styled, { css } from 'styled-components';
import useFormHooks from '~/hooks/useFormHooks';

const Ment = {
  project: {
    title: 'Comments',
    toMent: '보내는 사람이 누구인지 입력해 주세요.',
    messageMent: '프로젝트에 대한 솔직한 피드백과 따뜻한 코멘트를 남겨주세요.',
  },
  designer: {
    title: 'Guest Book',
    toMent: '보내는 사람을 입력해주세요.',
    messageMent: '내용을 입력해주세요.',
  },
} as const;

interface IFormSectionProps {
  page: 'project' | 'designer';
}

const CommonFormSection = ({ page }: IFormSectionProps) => {
  const { formData, inputOnChange, textAreaOnChange } = useFormHooks();
  const { to, message } = formData;

  const { title, toMent, messageMent } = Ment[page];
  return (
    <Container>
      <HeaderSection>
        <Title>{title}</Title>
        <CommentCount>22</CommentCount>
      </HeaderSection>
      <ToInputWrapper>
        <FromInput placeholder={toMent} value={to} onChange={inputOnChange} />
        <SubmitButton>등록</SubmitButton>
      </ToInputWrapper>
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
  margin-bottom: 4rem;
`;

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
