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

  return (
    <>
      <Drop isDrop={isDrop} isReceiver={isReceiver}>
        {guestBookContents.receiver === 0 ? (
          <NoneReceiver>받는 사람을 선택해 주세요.</NoneReceiver>
        ) : (
          <YesReceiver>{DESIGNERS[guestBookContents.receiver]}</YesReceiver>
        )}

        {isDrop ? <DropBoxUpIcon /> : <DropBoxDownIcon />}
      </Drop>
    </>
  );
};

export default DropBox;

const Drop = styled.div<{ isDrop: boolean; isReceiver: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ isReceiver }) => (isReceiver ? 28.6 : 12.3)}rem;
  padding: 1.6rem;

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_500};

  background-color: ${({ theme }) => theme.colors.White};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: ${({ isReceiver }) => (isReceiver ? 26.9 : 12.4)}rem;
  }
`;

const DropBoxUpIcon = styled(DropBoxUpIc)`
  width: 2.4rem;
`;

const DropBoxDownIcon = styled(DropBoxDownIc)`
  width: 2.4rem;
`;

const NoneReceiver = styled.p`
  ${({ theme }) => theme.fonts.Caption_03_Gray500};
`;

const YesReceiver = styled.p`
  ${({ theme }) => theme.fonts.Caption_03};
`;
