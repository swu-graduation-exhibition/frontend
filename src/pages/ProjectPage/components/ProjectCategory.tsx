import styled, { css } from 'styled-components';
import { PROJECT_CATEGORY, TProjectCategories } from '../../../types/project';
import { useState } from 'react';
import { IcStarAll } from '~/assets/icons';

function ProjectCategory() {
  const [isSelected, setIsSelected] = useState('UX Design');

  const handleCategory = (category: TProjectCategories) => {
    setIsSelected(category);
  };

  return (
    <Container>
      <NavTitle>
        <IcStarAll />
        Project
      </NavTitle>
      <ButtonSection>
        {PROJECT_CATEGORY.map((category, i) => {
          return (
            <CategoryButton
              key={i}
              isChecked={isSelected === category}
              onClick={() => handleCategory(category)}
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

  @media screen and (width <= 1400px) {
    justify-content: flex-start;
    height: fit-content;
    padding: 1.3rem 0 5.2rem 2.9rem;
    flex-direction: column;
    gap: 1.8rem;
  }
`;

const NavTitle = styled.header(
  ({ theme }) => theme.fonts.Headline_03,
  css`
    display: flex;

    width: fit-content;
    height: fit-content;

    svg {
      position: relative;
      top: 1rem;
      margin-right: 0.5rem;
    }

    @media screen and (width <= 1400px) {
      ${({ theme }) => theme.fonts.Subtitle_02}
    }
  `,
);

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  width: fit-content;

  @media screen and (width <= 1400px) {
    flex-direction: column;
  }
`;

const CategoryButton = styled.button<{ isChecked: boolean }>`
  width: fit-content;
  padding: 1.6rem 3.2rem;
  border: 0.15rem solid var(--grayscales-800, #343a40);

  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.Grayscales_900 : `transparent`};
  color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.White : theme.colors.Grayscales_700};

  text-align: center;
  min-width: fit-content;
  font-family: 'Antic Didone', serif;
  font-size: 3.2rem;
  font-weight: 500;
  border-radius: 0.4rem;

  @media screen and (width <= 1400px) {
    font-size: 2.1rem;

    text-align: start;
    font-weight: 500;
  }
`;
