import { useState } from 'react';
import styled from 'styled-components';
import nullPhoto from '~/assets/images/empthy_designer.png';
import { MOBILE_WIDTH } from '~/constants/common';
import { Mobile, ProjectDesktop } from '~/utils/mediaQuery';

interface ProjectCardProps {
  projectInfo: { type: number; title: string; members: string; photo: string };
}

function ProjectCard({ projectInfo }: ProjectCardProps) {
  const { type, title, members, photo } = projectInfo;
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  const category = ['', 'UX', 'DF', 'BX'];

  return (
    <>
      <ProjectDesktop>
        <Container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <CardThumbnailContainer>
            {photo ? (
              <CardThumbnail src={photo} alt="프로젝트 사진" />
            ) : (
              <CardThumbnail src={nullPhoto} alt="프로젝트 사진" />
            )}
          </CardThumbnailContainer>

          {isMouseOn && (
            <CardBackDrop>
              <CategoryText>{category[type]}</CategoryText>
              <ProjectInfoContainer>
                <TitleText>{title}</TitleText>
                <ParticipantsContainer>
                  <MemberText>{members}</MemberText>
                </ParticipantsContainer>
              </ProjectInfoContainer>
            </CardBackDrop>
          )}
        </Container>
      </ProjectDesktop>
      <Mobile>
        <Container>
          <CardThumbnailContainer>
            <CardThumbnail src={photo} />
          </CardThumbnailContainer>
          <CaptionContainer>
            <CaptionTitleText>{title}</CaptionTitleText>
            <CaptionParticipants>
              <MemberText>{members}</MemberText>
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

  cursor: pointer;
  margin-bottom: -0.2rem;
`;

const CardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const CardThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;

  object-fit: cover;
`;
const CardBackDrop = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.4rem 3.2rem 3.2rem;

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

  @media screen and (width<=1200px) {
    padding: 1.6rem;
  }
`;

const CategoryText = styled.span`
  position: absolute;
  top: 2.4rem;
  right: 3.2rem;

  ${({ theme }) => theme.fonts.Body_03}
  color: white;

  @media screen and (width<=1200px) {
    ${({ theme }) => theme.fonts.Mobile_Body_01}
    color: white;

    top: 1.6rem;
    right: 1.6rem;
  }
`;

const TitleText = styled.span`
  ${({ theme }) => theme.fonts.Body_03}
  color: white;

  @media screen and (width<=1200px) {
    ${({ theme }) => theme.fonts.Mobile_Subtitle_03}
    color: white;
  }
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

const MemberText = styled.p`
  width: fit-content;
  min-width: fit-content;

  ${({ theme }) => theme.fonts.Caption_02}
  color: white;

  @media screen and (width <= 1200px) {
    ${({ theme }) => theme.fonts.Mobile_Body_04};
    color: white;
  }

  @media screen and (width<=${MOBILE_WIDTH}) {
    color: ${({ theme }) => theme.colors.Black};
  }
`;

const CaptionContainer = styled.section`
  flex-direction: column;
  padding: 1.2rem 0 6.3rem 1.6rem;
`;

const CaptionTitleText = styled.span`
  ${({ theme }) => theme.fonts.Caption_03}
  font-weight: 700;

  color: black;

  @media screen and (width <= 1200px) {
    ${({ theme }) => theme.fonts.Mobile_Subtitle_03}
  }
`;

const CaptionParticipants = styled.div`
  display: flex;
  gap: 0.5rem;
`;
