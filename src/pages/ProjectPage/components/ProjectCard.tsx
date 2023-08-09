import { useState } from 'react';
import styled from 'styled-components';
import { IProjectData } from '../data/cardData';

interface ProjectCardProps {
  projectInfo: IProjectData;
}

function ProjectCard({ projectInfo }: ProjectCardProps) {
  const { category, title, participants, thumbnail }: IProjectData = projectInfo;
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  return (
    <Container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardThumbnail src={thumbnail} />
      {isMouseOn && (
        <CardBackDrop className="backdrop">
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
      <CaptionContainer className="caption">
        <CaptionTitleText>{title}</CaptionTitleText>
        <CaptionParticipants>
          {participants.map((member, i) => {
            return <CaptionMemberText key={i}>{member}</CaptionMemberText>;
          })}
        </CaptionParticipants>
      </CaptionContainer>
    </Container>
  );
}

export default ProjectCard;

const Container = styled.article`
  position: relative;
  cursor: pointer;

  @media screen and (width <= 520px) {
    .caption {
      display: flex;
    }

    .backdrop {
      display: none;
    }
  }
`;
const CardThumbnail = styled.img`
  width: 100%;
`;
const CardBackDrop = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3.2rem;

  animation: fadeinanimation 0.5s ease-in-out forwards;
  background: rgb(0 0 0 / 40%);

  @keyframes fadeinanimation {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const CategoryText = styled.span`
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;

  color: white;
  ${({ theme }) => theme.fonts.Body_03}
`;
const TitleText = styled.span`
  color: white;
  ${({ theme }) => theme.fonts.Body_03}
`;

const ProjectInfoContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  flex-direction: column;
`;
const ParticipantsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const MemberText = styled.span`
  width: fit-content;
  min-width: fit-content;

  color: white;
  ${({ theme }) => theme.fonts.Caption_02}
`;

const CaptionContainer = styled.section`
  display: none;
  flex-direction: column;
  padding: 1.3rem 0 6.4rem 1.6rem;
`;

const CaptionTitleText = styled.span`
  ${({ theme }) => theme.fonts.Caption_03}
  font-weight: 700;

  color: black;
`;

const CaptionParticipants = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CaptionMemberText = styled.span`
  ${({ theme }) => theme.fonts.Caption_04}
  color: black;
`;
