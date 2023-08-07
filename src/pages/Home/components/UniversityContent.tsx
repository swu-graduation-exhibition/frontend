import { styled } from 'styled-components';

const UniversityContent = () => {
  return (
    <MainContentWrapper>
      <BannerLeftContent>40th</BannerLeftContent>
      <BannerContentLine />
      <BannerRightContent>
        <span>Seoul Women’s University</span>
        <span>Industrial Design Graduation Exhibition</span>
      </BannerRightContent>
    </MainContentWrapper>
  );
};

export default UniversityContent;

const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

const BannerLeftContent = styled.div`
  font-family: 'Antic Didone';
  font-size: 70px;
  font-weight: 400;
  line-height: 83px;
  letter-spacing: -0.01em;

  @media screen and (width <= 830px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0em;
  }
`;
const BannerContentLine = styled.div`
  border: 0.01rem solid black;
  width: 0.1rem;
  height: 5.6rem;

  @media screen and (width <= 830px) {
    height: 3.6rem;
  }
`;

const BannerRightContent = styled(BannerLeftContent)`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  span {ß
    font-size: 25px;
    line-height: 34px;
    letter-spacing: -0.01em;

    @media screen and (width <= 830px) {
      font-size: 11px;
      line-height: 15px;
      letter-spacing: 0em;
    }
  }
`;
