import { styled } from 'styled-components';
import useWindowSize from '~/hooks/useWindowSize';

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <FooterWrapper>
      <TextCaption>{`Copyright© Industrial Design,Seoul Women’s University,`}</TextCaption>

      {width <= 830 ? (
        <>
          <TextCaption>{`All rights reserved 서울여자대학교 미래산업융합대학`}</TextCaption>
          <TextCaption>{` 서울시 노원구 화랑로 612`}</TextCaption>
        </>
      ) : (
        <TextCaption>{`All rights reserved 서울여자대학교 미래산업융합대학 | 서울시 노원구 화랑로 612`}</TextCaption>
      )}
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 9rem;
  width: 100%;
`;
const TextCaption = styled.div`
  ${({ theme }) => theme.fonts.Caption_04};
  @media screen and (width <= 830px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
