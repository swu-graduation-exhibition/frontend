import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { DropBoxDownIc, DropBoxUpIc } from '~/assets/icons';
import { MOBILE_WIDTH } from '~/constants/common';
import { DESIGNERS } from '../data/designers';

interface DropBoxProps {
  isReceiver: boolean;
  guestBookContents: { sender: string; receiver: number; content: string };
  setGuestBookContents: Dispatch<
    SetStateAction<{ sender: string; receiver: number; content: string }>
  >;
}

const DropBox = (props: DropBoxProps) => {
  const { isReceiver, guestBookContents, setGuestBookContents } = props;
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
      <Drop isDrop={isDrop} isReceiver={isReceiver} onClick={handleDrop}>
        {guestBookContents.receiver === -1 ? (
          <NoneReceiver>받는 사람을 선택해 주세요.</NoneReceiver>
        ) : (
          <YesReceiver>{DESIGNERS[guestBookContents.receiver]}</YesReceiver>
        )}
        <div>{isDrop ? <DropBoxUpIcon /> : <DropBoxDownIcon />}</div>
      </Drop>
      {isDrop && (
        <Box isReceiver={isReceiver}>
          <Designer
            paddingTop={1.6}
            isSelected={checkSelected(DESIGNERS.length - 1)}
            onClick={() => handleSelectDesigner(DESIGNERS.length - 1)}
          >
            {DESIGNERS[DESIGNERS.length - 1]}
          </Designer>
          {DESIGNERS.map((designer, index) => (
            <Designer
              paddingTop={0.8}
              isSelected={checkSelected(index)}
              onClick={() => handleSelectDesigner(index)}
            >
              {designer}
            </Designer>
          ))}
        </Box>
      )}
    </>
  );
};

export default DropBox;

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

const Box = styled.div<{ isReceiver: boolean }>`
  overflow: scroll;
  position: absolute;
  width: ${({ isReceiver }) => (isReceiver ? 39.2 : 11.9)}rem;
  height: 37.6rem;
  margin-top: 12.2rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_900};

  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.White};

  cursor: pointer;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: ${({ isReceiver }) => (isReceiver ? 26.9 : 12.4)}rem;
    margin-top: 7rem;
  }
`;

const Drop = styled.div<{ isDrop: boolean; isReceiver: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ isReceiver }) => (isReceiver ? 28.6 : 12.3)}rem;
  margin-right: 10.6rem;
  padding: 1.6rem;
  border: 1px solid
    ${({ theme, isDrop }) => (isDrop ? theme.colors.Black : theme.colors.Grayscales_500)};

  background-color: ${({ theme }) => theme.colors.White};

  border-radius: 1rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: ${({ isReceiver }) => (isReceiver ? 26.9 : 12.4)}rem;
    margin-right: 0;
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
`;

const YesReceiver = styled.p`
  ${({ theme }) => theme.fonts.Caption_03};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }
`;
