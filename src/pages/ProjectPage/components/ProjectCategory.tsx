import styled from 'styled-components';
import { ProjectCategories } from '../types/project';
import { useState } from 'react';

function ProjectCategory() {
  const [isSelected, setIsSelected] = useState('UX Design');

  const handleCategory = (category: string) => {
    setIsSelected(category);
  };
  const [isMouseOver, setIsMouseOver] = useState('');

  const handleMouseOver = (category: string) => {
    setIsMouseOver(category);
  };

  const handleMouseOut = () => {
    setIsMouseOver('');
  };

  return (
    <Container>
      <NavTitle>Project</NavTitle>
      <ButtonSection>
        {ProjectCategories.map((category, i) => {
          return (
            <CategoryButton
              key={i}
              isChecked={isSelected === category}
              onClick={() => handleCategory(category)}
              onMouseOver={() => handleMouseOver(category)}
              onMouseOut={handleMouseOut}
              isMouseOver={isMouseOver === category}
            >
              {category}
            </CategoryButton>
          );
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

  padding: 16rem 0 8rem;
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

const CategoryButton = styled.button<{ isChecked: boolean; isMouseOver: boolean }>`
  padding: 1.6rem 3.2rem;
  border: 1.5px solid var(--grayscales-800, #343a40);

  background-color: ${({ isMouseOver, isChecked, theme }) =>
    isMouseOver
      ? 'rgba(134, 142, 150, 0.10)'
      : isChecked
      ? theme.colors.Grayscales_900
      : theme.colors.White};
  color: ${({ isMouseOver, isChecked, theme }) =>
    isMouseOver
      ? theme.colors.Grayscales_700
      : isChecked
      ? theme.colors.White
      : theme.colors.Grayscales_700};

  text-align: center;
  font-family: 'Antic Didone', serif;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  border-radius: 0.4rem;
`;
