import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { DropBoxDownIc, DropBoxUpIc } from '~/assets/icons';
import { MOBILE_WIDTH } from '~/constants/common';
import { DESIGNERS } from '../data/designers';

interface DropBoxProps {
  guestBookContents: { sender: string; receiver: number; content: string };
  setGuestBookContents: Dispatch<
    SetStateAction<{ sender: string; receiver: number; content: string }>
  >;
}

const ReceiverDropBox = (props: DropBoxProps) => {
  const { guestBookContents, setGuestBookContents } = props;
  const [isDrop, setIsDrop] = useState(false);

  const handleDrop = () => {
    setIsDrop((id) => !id);
  };

  const handleSelectDesigner = (index: number) => {
    setGuestBookContents({ ...guestBookContents, receiver: index });
    setIsDrop(false);
  };

  const checkSelected = (index: number) => {
    return index === guestBookContents.receiver;
  };

  return (
    <>
      <Drop isDrop={isDrop} onClick={handleDrop}>
        {guestBookContents.receiver === -1 ? (
          <NoneReceiver>받는 사람을 선택해 주세요.</NoneReceiver>
        ) : (
          <YesReceiver>{DESIGNERS[guestBookContents.receiver]}</YesReceiver>
        )}
        <div>{isDrop ? <DropBoxUpIcon /> : <DropBoxDownIcon />}</div>
      </Drop>
      {isDrop && (
        <Box>
          <Designer
            paddingTop={1.6}
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
    </>
  );
};

export default ReceiverDropBox;

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
  width: 39.2rem;
  height: 37.6rem;
  margin-top: 12.2rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_900};

  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.White};

  cursor: pointer;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 26.9 rem;
    margin-top: 7rem;
  }
`;

const Drop = styled.div<{ isDrop: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 28.6 rem;
  padding: 1.6rem;
  border: 1px solid
    ${({ theme, isDrop }) => (isDrop ? theme.colors.Black : theme.colors.Grayscales_500)};

  background-color: ${({ theme }) => theme.colors.White};

  border-radius: 1rem;

  @media screen and (width <= 955px) {
    width: 27.2rem;
  }

  @media screen and (width <= 720px) {
    width: 22rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 100%;
  }
`;

const DropBoxUpIcon = styled(DropBoxUpIc)`
  width: 2.4rem;

  cursor: pointer;
`;

const DropBoxDownIcon = styled(DropBoxDownIc)`
  width: 2.4rem;

  cursor: pointer;
`;

const NoneReceiver = styled.p`
  ${({ theme }) => theme.fonts.Caption_03_Gray500};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
  }

  @media screen and (width <= 720px) {
    ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
  }
`;

const YesReceiver = styled.p`
  ${({ theme }) => theme.fonts.Caption_03};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }

  @media screen and (width <= 720px) {
    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }
`;
