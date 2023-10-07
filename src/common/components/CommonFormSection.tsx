import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { postProjectComment } from '~/api/project';
import { MOBILE_WIDTH } from '~/constants/common';
import useFormHooks from '~/hooks/useFormHooks';
import useGetProjectCommentDesktop from '~/hooks/useGetProjectCommentDesktop';
import { FormSectionProps } from '~/types/commonFormSection';
import { Desktop, Mobile, Tablet } from '~/utils/mediaQuery';
import { FormSupplies } from '../data/commonFormSection';

const CommonFormSection = ({ page }: FormSectionProps) => {
  const { formData, setSetFormData, isButtonActive, inputOnChange, textAreaOnChange } =
    useFormHooks();
  const { to, message } = formData;
  const { projectId } = useParams();

  const { desktopData } = useGetProjectCommentDesktop(Number(projectId), 1);
  console.log(desktopData);

  const { title, toMent, messageMent } = FormSupplies[page];

  const queryClient = useQueryClient();

  const { mutate: sendComment } = useMutation(
    () =>
      postProjectComment({
        sender: formData.to,
        receiver: Number(projectId),
        content: formData.message,
      }),
    {
      onSuccess: () => {
        setSetFormData({
          to: '',
          message: '',
        });
        queryClient.invalidateQueries(['getProjectCommentDesktop']);
        queryClient.invalidateQueries(['getProjectCommentTablet']);
        queryClient.invalidateQueries(['getProjectCommentMobile']);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  const sendProjectComment = () => {
    sendComment();
  };

  return (
    <Container>
      <HeaderSection>
        <Title>{title}</Title>
        {page === 'project' && <CommentCount>{desktopData && desktopData.count}</CommentCount>}
      </HeaderSection>
      {page === 'designer' && <ToLabelSection>보내는 사람</ToLabelSection>}
      <ToInputWrapper>
        <FromInput placeholder={toMent} value={to} onChange={inputOnChange} />

        {isButtonActive ? (
          page === 'designer' ? (
            <SubmitButton>등록</SubmitButton>
          ) : (
            <>
              <Desktop>
                <SubmitButton type="button" onClick={sendProjectComment}>
                  등록
                </SubmitButton>
              </Desktop>
              <Tablet>
                <SubmitButton type="button" onClick={sendProjectComment}>
                  등록
                </SubmitButton>
              </Tablet>
              <Mobile>
                <SubmitButton onClick={sendProjectComment}>등록</SubmitButton>
              </Mobile>
            </>
          )
        ) : (
          <UnSubmitButton type="button">등록</UnSubmitButton>
        )}
      </ToInputWrapper>
      {page === 'designer' && <MsgLabelSection>메시지</MsgLabelSection>}
      <TextAreaWrapper>
        <TextArea placeholder={messageMent} value={message} onChange={textAreaOnChange} />
        <CountingLetterSection>
          <CountLetter>{`${message?.length ?? 0} / 100`}</CountLetter>
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
  align-items: center;
  margin-bottom: 5rem;
  flex-direction: row;
  gap: 2.4rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-bottom: 4rem;
  }
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

const Title = styled.div(
  ({ theme }) => theme.fonts.Subtitle_01,
  css`
    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_01}
    }
  `,
);

const CommentCount = styled.span(
  ({ theme }) => theme.fonts.Subtitle_01,
  css`
    color: ${({ theme }) => theme.colors.Grayscales_600};

    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Body_02}
      font-weight: 300;

      color: ${({ theme }) => theme.colors.Grayscales_600};
    }
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

    &:focus {
      border: 1px solid black;
    }

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Caption_03}
      width: 39.2rem;
      padding: 1.6rem 2.4rem;
      font-size: 1.5rem;
    }
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

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Caption_03}
      color: ${({ theme }) => theme.colors.Grayscales_50};
      margin-left: 1rem;

      font-size: 1.5rem;
    }
  `,
);
const UnSubmitButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.colors.Grayscales_200};
  color: ${({ theme }) => theme.colors.Grayscales_600};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_03}
    color: ${({ theme }) => theme.colors.Grayscales_600};
    margin-left: 1rem;

    font-size: 1.5rem;
  }
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

    &:focus {
      border: 1px solid black;
    }

    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Caption_03}
      font-size: 1.5rem;
      height: 25.6rem;
    }
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
    font-size: 1.5rem;
  `,
);
