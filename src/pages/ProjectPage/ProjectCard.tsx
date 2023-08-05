import { useState } from 'react';
import styled from 'styled-components';
import { IProjectData } from './data/cardData';

interface ProjectCardProps {
  projectData: IProjectData;
}

function ProjectCard({ projectData }: ProjectCardProps) {
  console.log(projectData);
  const { category, title, participants, thumbnail }: IProjectData = projectData;
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  return (
    <Container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardSection src={thumbnail} />
      {isMouseOn && (
        <CardBackDrop>
          <CategoryText>{category}</CategoryText>
          <ProjectInfoContainer>
            <TitleText>{title}</TitleText>
            <ParticipantsContainer>
              {participants.map((member, i) => {
                return <MemberText key={i}>{member}</MemberText>;
              })}
            </ParticipantsContainer>
          </ProjectInfoContainer>
        </CardBackDrop>
      )}
    </Container>
  );
}

export default ProjectCard;

const Container = styled.article`
  position: relative;

  cursor: pointer;
`;
const CardSection = styled.img`
  width: 100%;
  height: 100%;
`;
const CardBackDrop = styled.article`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: fadeInAnimation 0.5s ease-in-out forwards;
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CategoryText = styled.span`
  color: white;
  ${({ theme }) => theme.fonts.Body_03}

  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
`;
const TitleText = styled.span`
  color: white;
  ${({ theme }) => theme.fonts.Body_03}
`;

const ProjectInfoContainer = styled.section`
  position: absolute;
  bottom: 3.2rem;
  left: 3.2rem;
`;
const ParticipantsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const MemberText = styled.span`
  color: white;
  ${({ theme }) => theme.fonts.Caption_02}
`;
