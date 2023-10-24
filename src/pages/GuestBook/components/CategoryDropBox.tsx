import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';

import { DESIGNERS } from '../data/designers';

interface CategoryDropBoxProps {
  designerId: number;
  setDesignerId: Dispatch<SetStateAction<number>>;
}

const CategoryDropBox = (props: CategoryDropBoxProps) => {
  // All -> -1 , 모두에게 -> 49
  const { designerId, setDesignerId } = props;
  const [isDrop, setIsDrop] = useState(false);

  const handleDrop = () => {
    setIsDrop((id) => !id);
  };

  const handleSelectDesigner = (index: number) => {
    setDesignerId(index);
    setIsDrop(false);
  };

  const checkSelected = (index: number) => {
    return index === designerId;
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isDrop]);

  function isClickedOutside(e: MouseEvent) {
    return isDrop && !modalRef.current?.contains(e.target as Node);
  }

  function closeModal(e: MouseEvent) {
    if (isClickedOutside(e)) {
      setIsDrop(false);
    }
  }

  return (
    <CategoryDropBoxWrapper>
      <Drop $isDrop={isDrop} onClick={handleDrop}>
        {designerId === -1 ? (
          <Receiver>All</Receiver>
        ) : (
          <>
            {designerId === 49 ? (
              <Receiver>모두에게</Receiver>
            ) : (
              <Receiver>{DESIGNERS[designerId]}</Receiver>
            )}
          </>
        )}
        <div>
          {isDrop ? (
            <DropBoxUpIcon src={`${import.meta.env.VITE_SWU_IMAGE}/dropBoxUpIc.svg`} />
          ) : (
            <DropBoxDownIcon src={`${import.meta.env.VITE_SWU_IMAGE}/dropBoxDownIc.svg`} />
          )}
        </div>
      </Drop>
      {isDrop && (
        <Box ref={modalRef}>
          <Designer
            paddingTop={1.6}
            isSelected={checkSelected(-1)}
            onClick={() => handleSelectDesigner(-1)}
          >
            All
          </Designer>
          <Designer
            paddingTop={0.8}
            isSelected={checkSelected(49)}
            onClick={() => handleSelectDesigner(49)}
          >
            모두에게
          </Designer>
          {DESIGNERS.map(
            (designer, index) =>
              index !== 0 && (
                <Designer
                  paddingTop={0.8}
                  isSelected={checkSelected(index)}
                  onClick={() => handleSelectDesigner(index)}
                >
                  {designer}
                </Designer>
              ),
          )}
        </Box>
      )}
    </CategoryDropBoxWrapper>
  );
};

export default CategoryDropBox;

const CategoryDropBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2.4rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 4.6rem;
  }
`;

const Designer = styled.p<{ paddingTop: number; isSelected: boolean }>`
  display: flex;
  align-items: center;

  height: 4rem;
  padding: ${({ paddingTop }) => paddingTop}rem 1rem 0.8rem 1.6rem;

  ${({ theme }) => theme.fonts.Caption_04};

  &:active {
    background: linear-gradient(
      90deg,
      #ffde31 0%,
      rgb(255 251 215 / 0%) 101.04%,
      rgb(255 251 215 / 0%) 101.04%
    );
    background-blend-mode: multiply;
  }

  background: linear-gradient(
    90deg,
    ${({ isSelected }) => (isSelected ? '#ffde31' : 'transparent')} 0%,
    rgb(255 251 215 / 0%) 101.04%,
    rgb(255 251 215 / 0%) 101.04%
  );
  background-blend-mode: ${({ isSelected }) => isSelected && 'multiply'};
`;

const Box = styled.div`
  overflow: scroll;
  position: absolute;
  width: 14.1rem;
  height: 37.6rem;
  margin-top: 7.2rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_900};

  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.White};

  cursor: pointer;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 12.4rem;
    margin-top: 6rem;
  }
`;

const Drop = styled.div<{ $isDrop: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 14.1rem;
  height: 6.2rem;
  padding: 1.6rem;
  border: 1px solid
    ${({ theme, $isDrop }) => ($isDrop ? theme.colors.Black : theme.colors.Grayscales_500)};

  background-color: ${({ theme }) => theme.colors.White};

  border-radius: 1rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 12.4rem;
    height: 4.9rem;
    margin-right: 0;
  }
`;

const DropBoxUpIcon = styled.img`
  width: 2.4rem;

  cursor: pointer;
`;

const DropBoxDownIcon = styled.img`
  width: 2.4rem;

  cursor: pointer;
`;

const Receiver = styled.p`
  ${({ theme }) => theme.fonts.Caption_03_Gray500};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
  }
`;
