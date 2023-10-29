import { styled } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
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
      <LinkWrapper>
        <TextLink target="__blank" href="https://www.instagram.com/swu_id/">
          Instagram
        </TextLink>
        <LineDiv />
        <TextLink target="__blank" href="https://www.behance.net/2023swindustr/projects">
          Behance
        </TextLink>
        <LineDiv />
        <TextLink target="__blank" href="https://notefolio.net/swuid2023">
          Notefolio
        </TextLink>
      </LinkWrapper>
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
  margin: 10.5rem 0;

  width: 100%;

  @media screen and (width <= ${TABLET_WIDTH}) {
    height: 8.3rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin: 5rem 0;
  }
`;
const TextCaption = styled.div`
  ${({ theme }) => theme.fonts.Caption_03};
  text-align: center;
  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Caption_02};
    text-align: center;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;
const LineDiv = styled.span`
  height: 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.Yello_Main_700};

  @media screen and (width <= ${TABLET_WIDTH}) {
    height: 1.2rem;
    border-width: 0.08rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    height: 1rem;
    border-width: 0.099rem;
  }
`;
const TextLink = styled.a`
  ${({ theme }) => theme.fonts.Caption_03};
  color: ${({ theme }) => theme.colors.Yello_Main_700};

  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_04};
    color: ${({ theme }) => theme.colors.Yello_Main_700};
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Caption_02};
    color: ${({ theme }) => theme.colors.Yello_Main_700};
  }
`;
