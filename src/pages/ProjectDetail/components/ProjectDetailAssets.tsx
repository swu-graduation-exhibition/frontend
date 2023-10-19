import styled from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';

const ProjectDetailAssets = () => {
  const photo =
    'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjRfMjU4/MDAxNjE5MjQwMDg5MjM1.N19YLjOPGrzUaf8YSq9KauSciuykMAKcfWmjLAVoHAYg.9vtYMglfPwE-8WSoSGKR4SujwoNIdBE5sDU7b_c0XEkg.JPEG.chooddingg/PHOTO_0194.JPG?type=w800';

  return <Container src={photo} alt="프로젝트 이미지" />;
};

export default ProjectDetailAssets;

const Container = styled.img`
  width: 100%;

  /* max-width: 165rem; */

  /* height: 140rem; */

  margin-bottom: 20rem;

  @media screen and (width <= ${TABLET_WIDTH}) {
    margin-bottom: 12.8rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-bottom: 5rem;
  }
`;
