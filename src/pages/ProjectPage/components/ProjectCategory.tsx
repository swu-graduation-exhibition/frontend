import styled from 'styled-components';
import { ProjectCategories } from '../types/project';

function ProjectCategory() {
  return (
    <Container>
      <NavTitle>Project</NavTitle>
      <ButtonSection>
        {ProjectCategories.map((category, i) => {
          return <CategoryButton key={i}>{category}</CategoryButton>;
        })}
      </ButtonSection>
    </Container>
  );
}

export default ProjectCategory;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 165rem;
  height: 31.5rem;
  border-bottom: 1px solid black;

  padding: 16rem 0 8rem 0;
`;

const NavTitle = styled.header`
  ${({ theme }) => theme.fonts.Headline_03}
  height: fit-content;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`;

const CategoryButton = styled.button`
  font-family: 'Antic Didone', serif;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  padding: 1.6rem 3.2rem;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.Grayscales_700};
  background-color: white;
  border: 1.5px solid var(--grayscales-800, #343a40);
`;
