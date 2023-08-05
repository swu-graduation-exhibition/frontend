import styled from 'styled-components';
import projectImage from '~/assets/images/projectCardImg.png';

function Project() {
  const CardData = Array.from({ length: 12 });
  return (
    <ProjectLayout>
      <NavigationBar>
        <StAppWrapper>Project Page</StAppWrapper>
      </NavigationBar>
      <ButtonSection />
      <ProjectCardContainer>
        <ProjectCardLayout>
          {CardData.map(() => (
            <CardContainer>
              <ProjectCard src={projectImage} />
            </CardContainer>
          ))}
        </ProjectCardLayout>
      </ProjectCardContainer>
    </ProjectLayout>
  );
}

export default Project;

const ProjectLayout = styled.section`
  width: 100%;
`;

const NavigationBar = styled.nav`
  display: flex;
  width: 100%;
  height: 11rem;
  align-items: center;
  border-bottom: 1px solid black;
`;

const ButtonSection = styled.section`
  display: flex;
  width: 100%;
  height: 31.5rem;
  align-items: center;
  border-bottom: 1px solid black;
`;
const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 13.6rem;
`;
const ProjectCardLayout = styled.section`
  width: 100%;
  max-width: 165rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(27rem, 1fr));
`;
const CardContainer = styled.article``;
const ProjectCard = styled.img`
  width: 100%;
  height: 100%;
`;
const StAppWrapper = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_02};
`;
