import styled from 'styled-components';
import projectImage from '~/assets/images/projectCardImg.png';

function ProjectCard() {
  return (
    <Container>
      <CardSection src={projectImage} />
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
