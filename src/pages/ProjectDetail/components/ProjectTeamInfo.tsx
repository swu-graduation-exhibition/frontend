import styled, { css } from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import ProjectTeamDesignerCard from './ProjectTeamDesignerCard';

const ProjectTeamInfo = () => {
  const memberList = [
    {
      designerId: 19,
      name: '엄희수',
      profile:
        'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjRfMjU4/MDAxNjE5MjQwMDg5MjM1.N19YLjOPGrzUaf8YSq9KauSciuykMAKcfWmjLAVoHAYg.9vtYMglfPwE-8WSoSGKR4SujwoNIdBE5sDU7b_c0XEkg.JPEG.chooddingg/PHOTO_0194.JPG?type=w800',
      field: 'UX',
    },
    {
      designerId: 22,
      name: '원예린',
      profile:
        'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjRfMjU4/MDAxNjE5MjQwMDg5MjM1.N19YLjOPGrzUaf8YSq9KauSciuykMAKcfWmjLAVoHAYg.9vtYMglfPwE-8WSoSGKR4SujwoNIdBE5sDU7b_c0XEkg.JPEG.chooddingg/PHOTO_0194.JPG?type=w800',
      field: 'BX',
    },
    {
      designerId: 32,
      name: '이인영',
      profile:
        'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjRfMjU4/MDAxNjE5MjQwMDg5MjM1.N19YLjOPGrzUaf8YSq9KauSciuykMAKcfWmjLAVoHAYg.9vtYMglfPwE-8WSoSGKR4SujwoNIdBE5sDU7b_c0XEkg.JPEG.chooddingg/PHOTO_0194.JPG?type=w800',
      field: 'UX BX',
    },
    {
      designerId: 34,
      name: '이지은',
      profile:
        'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjRfMjU4/MDAxNjE5MjQwMDg5MjM1.N19YLjOPGrzUaf8YSq9KauSciuykMAKcfWmjLAVoHAYg.9vtYMglfPwE-8WSoSGKR4SujwoNIdBE5sDU7b_c0XEkg.JPEG.chooddingg/PHOTO_0194.JPG?type=w800',
      field: 'UX',
    },
  ];

  return (
    <Container>
      <TeamName>Team.name</TeamName>

      <TeamCardContainer>
        {memberList.map((member) => {
          return <ProjectTeamDesignerCard member={member} />;
        })}
      </TeamCardContainer>
    </Container>
  );
};

export default ProjectTeamInfo;

const Container = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
  margin: 0 7%;
  flex-direction: column;
  gap: 6.4rem;

  max-width: 165rem;
  padding: 0 13.6rem;

  @media screen and (width <= ${TABLET_WIDTH}) {
    padding: 0 6.4rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    gap: 0.6rem;
    padding: 0;
  }
`;

const TeamName = styled.div(
  ({ theme }) => theme.fonts.Subtitle_01,
  css`
    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_02}
    }
  `,
);

const TeamCardContainer = styled.div`
  display: grid;
  width: 100%;

  /* height: 41.2rem; */

  grid-template-columns: repeat(4, 1fr);

  @media screen and (width <= ${TABLET_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
