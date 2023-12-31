import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';
import { Mobile } from '~/utils/mediaQuery';

interface ProjectTeamDesignerCardProp {
  member: { designerId: number; name: string; profile: string; field: string };
}

const ProjectTeamDesignerCard = ({ member }: ProjectTeamDesignerCardProp) => {
  // api 패칭 필요
  const [isMouseOn, setIsMouseOn] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  const moveToDesignerPage = () => {
    navigate(`/designer/${member.designerId}`);
  };

  return (
    <>
      <Container
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={moveToDesignerPage}
      >
        <CardThumbnail src={member.profile} alt="프로젝트 사진" />
        {isMouseOn && (
          <CardBackDrop>
            <CategoryText>{member.field}</CategoryText>
            <ProjectInfoContainer>
              <ParticipantsContainer>
                <MemberText>{member.name}</MemberText>
              </ParticipantsContainer>
            </ProjectInfoContainer>
          </CardBackDrop>
        )}
      </Container>

      <Mobile>
        <MobileContainer onClick={moveToDesignerPage}>
          <CardThumbnail src={member.profile} />
          <CaptionContainer>
            <CaptionTitleText>{member.field}</CaptionTitleText>
            <CaptionParticipants>
              <MemberText>{member.name}</MemberText>
            </CaptionParticipants>
          </CaptionContainer>
        </MobileContainer>
      </Mobile>
    </>
  );
};

export default ProjectTeamDesignerCard;

const MobileContainer = styled.article`
  position: relative;

  cursor: pointer;

  /* margin-bottom: 10rem; */
`;

const CaptionContainer = styled.section`
  height: 6rem;
  margin-bottom: 3rem;
  padding: 0.5rem 0.3rem;
  flex-direction: column;
`;

const CaptionTitleText = styled.span`
  ${({ theme }) => theme.fonts.Caption_03}
  font-weight: 700;

  color: black;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Subtitle_04}
  }
`;

const CaptionParticipants = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Container = styled.article`
  position: relative;

  cursor: pointer;

  margin-bottom: -0.2rem;
  margin-left: -0.1rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    display: none;
  }
`;

const CardThumbnail = styled.img`
  width: 100%;

  /* height: 100%; */

  /* height: 257.25px; */

  border: 1px solid black;
`;
const CardBackDrop = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99.5%;
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

  ${({ theme }) => theme.fonts.Caption_02}
  color: white;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_04};
    color: ${({ theme }) => theme.colors.Black};
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

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 0.6rem;

    ${({ theme }) => theme.fonts.Mobile_Subtitle_03};
    color: ${({ theme }) => theme.colors.Black};
  }
`;
