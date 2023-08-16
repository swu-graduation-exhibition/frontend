import styled, { css } from 'styled-components';

const CommentInputSection = () => {
  return (
    <Container>
      <BBangBBangAAA>
        <FromInput placeholder="보내는 사람이 누구인지 입력해 주세요." />
        <OkJiButton>등록</OkJiButton>
      </BBangBBangAAA>
      <TextArea placeholder="프로젝트에 대한 솔직한 피드백과 따뜻한 코멘트를 남겨주세요." />
    </Container>
  );
};

export default CommentInputSection;

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const BBangBBangAAA = styled.div`
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

const OkJiButton = styled.button(
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
