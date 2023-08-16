import styled, { css } from 'styled-components';
import theme from '~/styles/theme';

const ProjectTeamInfo = () => {
  return (
    <Container>
      <TeamName>Team.name</TeamName>
      <TeamCardContainer></TeamCardContainer>
    </Container>
  );
};

export default ProjectTeamInfo;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  gap: 6.4rem;
  margin-bottom: 21rem;
`;

const TeamName = styled.div(({ theme }) => theme.fonts.Subtitle_01, css``);

const TeamCardContainer = styled.div`
  width: 100%;
  height: 41.2rem;

  background-color: slateblue;
`;
