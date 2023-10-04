import { useState } from 'react';
import { IProjectData } from '../data/cardData';
import {
  CaptionContainer,
  CaptionMemberText,
  CaptionParticipants,
  CaptionTitleText,
  CardBackDrop,
  CardThumbnail,
  CategoryText,
  Container,
  MemberText,
  ParticipantsContainer,
  ProjectCardProps,
  ProjectInfoContainer,
  TitleText,
} from './ProjectCard';

export function ProjectCard({ projectInfo }: ProjectCardProps) {
  const { category, title, participants, thumbnail }: IProjectData = projectInfo;
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  return (
    <ProjectDesktop>
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
    </ProjectDesktop>
  );
}
