import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';

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
    </>
  );
};

export default ProjectTeamDesignerCard;

const Container = styled.article`
  position: relative;

  cursor: pointer;

  margin-bottom: -0.2rem;
`;
const CardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid black;
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
    ${({ theme }) => theme.fonts.Mobile_Body_04};
    color: ${({ theme }) => theme.colors.Black};
  }
`;
