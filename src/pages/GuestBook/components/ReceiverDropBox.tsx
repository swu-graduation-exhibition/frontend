import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { DESIGNERS } from '../data/designers';

interface DropBoxProps {
  guestBookContents: { sender: string; receiver: number; content: string };
  setGuestBookContents: Dispatch<
    SetStateAction<{ sender: string; receiver: number; content: string }>
  >;
  isDrop: boolean;
  setIsDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReceiverDropBox = (props: DropBoxProps) => {
  const { guestBookContents, setGuestBookContents, isDrop, setIsDrop } = props;
  // const [isDrop, setIsDrop] = useState(false);

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

  useEffect(() => {
    if (isDrop && guestBookContents.receiver !== -1) {
      if (guestBookContents.receiver > 40 && guestBookContents.receiver < 49) {
        const ref = modalRef.current;

        if (ref) ref.scrollTop = 40 * 40;
      } else if (guestBookContents.receiver === 49) {
        if (modalRef) {
          const ref = modalRef.current;

          if (ref) ref.scrollTop = 0;
        }
      } else {
        if (modalRef) {
          const ref = modalRef.current;
          console.log(modalRef, modalRef.current?.scrollTop, modalRef.current?.scrollHeight);

          if (ref) ref.scrollTop = guestBookContents.receiver * 40;
        }
      }
    }
  }, [isDrop]);

  return (
    <>
      <Drop $isDrop={isDrop} onClick={handleDrop}>
        {guestBookContents.receiver === -1 ? (
          <NoneReceiver>받는 사람을 선택해 주세요.</NoneReceiver>
        ) : (
          <YesReceiver>
            {guestBookContents.receiver === 49 ? '모두에게' : DESIGNERS[guestBookContents.receiver]}
          </YesReceiver>
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
          <Designer isSelected={checkSelected(49)} onClick={() => handleSelectDesigner(49)}>
            모두에게
          </Designer>

          {DESIGNERS.map(
            (designer, index) =>
              index !== 0 && (
                <Designer
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

const Designer = styled.p<{ isSelected: boolean }>`
  display: flex;
  align-items: center;

  height: 4rem;
  padding: 0.8rem 1rem 0.8rem 1.6rem;

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

  @media screen and (width <= ${`350px`}) {
    font-size: 1rem !important;
    padding: 0 0.8rem 0 1.3rem;
  }
`;

const Box = styled.div`
  overflow: scroll;
  position: absolute;
  z-index: 2;

  /* width: 28.6rem; */

  width: 39.2rem;
  height: 37.6rem;

  /* height: fit-content; */

  margin-top: 12.2rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_900};

  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.White};

  cursor: pointer;

  @media screen and (width <= ${TABLET_WIDTH}) {
    /* width: 26.9rem; */

    margin-top: 7rem;
  }

  @media screen and (width <= ${`600px`}) {
    width: 74.5%;

    /* margin-top: 7rem; */
  }
`;

const Drop = styled.div<{ $isDrop: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* width: 28.6rem; */

  padding: 1.6rem;
  border: 1px solid
    ${({ theme, $isDrop }) => ($isDrop ? theme.colors.Black : theme.colors.Grayscales_500)};

  background-color: ${({ theme }) => theme.colors.White};

  border-radius: 1rem;

  div {
    margin-left: 0.8rem;
  }

  @media screen and (width <= ${`955px`}) {
    width: 27.2rem;
  }

  @media screen and (width <= ${`650px`}) {
    width: 23.5rem;
  }

  @media screen and (width <= ${`600px`}) {
    width: 100%;
  }
`;

const DropBoxUpIcon = styled.img`
  /* width: 2.4rem; */

  width: 1.1rem;
  height: 0.6rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 0.8496rem;
    height: 0.4634rem;
  }

  margin: 0 0.6rem;
  cursor: pointer;
`;

const DropBoxDownIcon = styled.img`
  /* width: 2.4rem; */

  width: 1.1rem;
  height: 0.6rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 0.8496rem;
    height: 0.4634rem;
  }

  margin: 0 0.6rem;
  cursor: pointer;
`;

const NoneReceiver = styled.p`
  ${({ theme }) => theme.fonts.Caption_03_Gray500};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
  }

  @media screen and (width <= ${`1000px`}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03_Gray500};
  }

  @media screen and (width <= ${`350px`}) {
    &::placeholder {
      font-size: 1rem;
    }

    font-size: 1rem;
  }
`;

const YesReceiver = styled.p`
  ${({ theme }) => theme.fonts.Caption_03};

  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }

  @media screen and (width <= ${`1000px`}) {
    ${({ theme }) => theme.fonts.Mobile_Body_03};
  }

  @media screen and (width <= ${`350px`}) {
    &::placeholder {
      font-size: 1rem;
    }

    font-size: 1rem;
  }
`;
