import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcStarAll } from '~/assets/icons';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { CATEGORY_PATH, PROJECT_CATEGORY, TProjectCategories } from '../../../types/project';

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
            <Link key={i} to={`/project/${CATEGORY_PATH[category]}`}>
              <CategoryButton
                $ischecked={isSelected === category}
                onClick={() => handleCategory(category)}
              >
                {category}
              </CategoryButton>
            </Link>
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
  align-items: flex-start;

  flex-direction: column;

  width: 100%;

  /* max-width: 165rem; */

  padding: 16rem 0 7.2rem;

  @media screen and (width<=${TABLET_WIDTH}) {
    padding: 5.6rem 0;
  }

  @media screen and (width<=${MOBILE_WIDTH}) {
    padding: 2.3rem 0 4.2rem;
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

    margin-bottom: 4rem;

    @media screen and (width <= ${TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Subtitle_02}
      margin-bottom: 2.4rem;
    }

    @media screen and (width<=${MOBILE_WIDTH}) {
      margin-bottom: 1.8rem;
      margin-left: 1.7rem;
    }
  `,
);

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  width: fit-content;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    flex-direction: column;
    padding-left: 2.9rem;
  }
`;

const CategoryButton = styled.button<{ $ischecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 1.2rem 3.2rem;
  border: 0.15rem solid var(--grayscales-800, #343a40);

  background-color: ${({ $ischecked, theme }) =>
    $ischecked ? theme.colors.Grayscales_900 : `transparent`};
  color: ${({ $ischecked, theme }) =>
    $ischecked ? theme.colors.White : theme.colors.Grayscales_700};

  font-family: 'Antic Didone', serif;
  text-align: center;
  min-width: fit-content;
  font-size: 3.2rem;
  font-weight: 500;
  border-radius: 0.4rem;
  gap: 0.4rem;

  @media screen and (width <= ${TABLET_WIDTH}) {
    font-size: 2.1rem;
    padding: 0.8rem 2rem;
  }

  @media screen and (width<=${MOBILE_WIDTH}) {
    padding: 1.08rem 2.16rem;
  }
`;
