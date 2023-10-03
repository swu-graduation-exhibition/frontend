import { useState } from 'react';
import styled from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';
import { Mobile, ProjectDesktop } from '~/utils/mediaQuery';
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
    <>
      <ProjectDesktop>
        <Container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <CardThumbnail src={thumbnail} />
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
          <CaptionContainer>
            <CaptionTitleText>{title}</CaptionTitleText>
            <CaptionParticipants>
              {participants.map((member, i) => {
                return <CaptionMemberText key={i}>{member}</CaptionMemberText>;
              })}
            </CaptionParticipants>
          </CaptionContainer>
        </Container>
      </ProjectDesktop>
      <Mobile>
        <Container>
          <CardThumbnail src={thumbnail} />
          <CaptionContainer>
            <CaptionTitleText>{title}</CaptionTitleText>
            <CaptionParticipants>
              {participants.map((member, i) => {
                return <CaptionMemberText key={i}>{member}</CaptionMemberText>;
              })}
            </CaptionParticipants>
          </CaptionContainer>
        </Container>
      </Mobile>
    </>
  );
}

export default ProjectCard;

const Container = styled.article`
  position: relative;

  @media screen and (width >= ${MOBILE_WIDTH}) {
    height: 100%;
  }

  cursor: pointer;
`;
const CardThumbnail = styled.img`
  width: 100%;
  height: 100%;
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

  ${({ theme }) => theme.fonts.Body_03}
  color: white;
`;
const TitleText = styled.span`
  ${({ theme }) => theme.fonts.Body_03}
  color: white;
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

  ${({ theme }) => theme.fonts.Caption_02}
  color: white;
`;

const CaptionContainer = styled.section`
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
