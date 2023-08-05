import { useState } from 'react';
import styled from 'styled-components';
import projectImage from '~/assets/images/projectCardImg.png';

function ProjectCard() {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOn(true);
  };

  const handleMouseOut = () => {
    setIsMouseOn(false);
  };

  return (
    <Container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardSection src={projectImage} />
      {isMouseOn && <CardBackDrop />}
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
`;
