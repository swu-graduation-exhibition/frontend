import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MOBILE_WIDTH } from '~/constants/common';
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

  const designer1 = useRef<HTMLDivElement>(null);
  const designer2 = useRef<HTMLDivElement>(null);
  const designer3 = useRef<HTMLDivElement>(null);
  const designer4 = useRef<HTMLDivElement>(null);
  const designer5 = useRef<HTMLDivElement>(null);
  const designer6 = useRef<HTMLDivElement>(null);
  const designer7 = useRef<HTMLDivElement>(null);
  const designer8 = useRef<HTMLDivElement>(null);
  const designer9 = useRef<HTMLDivElement>(null);
  const designer10 = useRef<HTMLDivElement>(null);
  const designer11 = useRef<HTMLDivElement>(null);
  const designer12 = useRef<HTMLDivElement>(null);
  const designer13 = useRef<HTMLDivElement>(null);
  const designer14 = useRef<HTMLDivElement>(null);
  const designer15 = useRef<HTMLDivElement>(null);
  const designer16 = useRef<HTMLDivElement>(null);
  const designer17 = useRef<HTMLDivElement>(null);
  const designer18 = useRef<HTMLDivElement>(null);
  const designer19 = useRef<HTMLDivElement>(null);
  const designer20 = useRef<HTMLDivElement>(null);
  const designer21 = useRef<HTMLDivElement>(null);
  const designer22 = useRef<HTMLDivElement>(null);
  const designer23 = useRef<HTMLDivElement>(null);
  const designer24 = useRef<HTMLDivElement>(null);
  const designer25 = useRef<HTMLDivElement>(null);
  const designer26 = useRef<HTMLDivElement>(null);
  const designer27 = useRef<HTMLDivElement>(null);
  const designer28 = useRef<HTMLDivElement>(null);
  const designer29 = useRef<HTMLDivElement>(null);
  const designer30 = useRef<HTMLDivElement>(null);
  const designer31 = useRef<HTMLDivElement>(null);
  const designer32 = useRef<HTMLDivElement>(null);
  const designer33 = useRef<HTMLDivElement>(null);
  const designer34 = useRef<HTMLDivElement>(null);
  const designer35 = useRef<HTMLDivElement>(null);
  const designer36 = useRef<HTMLDivElement>(null);
  const designer37 = useRef<HTMLDivElement>(null);
  const designer38 = useRef<HTMLDivElement>(null);
  const designer39 = useRef<HTMLDivElement>(null);
  const designer40 = useRef<HTMLDivElement>(null);
  const designer41 = useRef<HTMLDivElement>(null);
  const designer42 = useRef<HTMLDivElement>(null);
  const designer43 = useRef<HTMLDivElement>(null);
  const designer44 = useRef<HTMLDivElement>(null);
  const designer45 = useRef<HTMLDivElement>(null);
  const designer46 = useRef<HTMLDivElement>(null);
  const designer47 = useRef<HTMLDivElement>(null);
  const designer48 = useRef<HTMLDivElement>(null);
  const designerEveryone = useRef<HTMLDivElement>(null);

  const refArr = [
    designer1,
    designer1,
    designer2,
    designer3,
    designer4,
    designer5,
    designer6,
    designer7,
    designer8,
    designer9,
    designer10,
    designer11,
    designer12,
    designer13,
    designer14,
    designer15,
    designer16,
    designer17,
    designer18,
    designer19,
    designer20,
    designer21,
    designer22,
    designer23,
    designer24,
    designer25,
    designer26,
    designer27,
    designer28,
    designer29,
    designer30,
    designer31,
    designer32,
    designer33,
    designer34,
    designer35,
    designer36,
    designer37,
    designer38,
    designer39,
    designer40,
    designer41,
    designer42,
    designer43,
    designer44,
    designer45,
    designer46,
    designer47,
    designer48,
    designerEveryone,
  ];

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
  console.log(guestBookContents.receiver);
  useEffect(() => {
    // if (isDrop && guestBookContents.receiver !== -1) {
    //   if (guestBookContents.receiver > 40 && guestBookContents.receiver < 49) {
    //     designer40.current?.scrollIntoView({ behavior: 'instant' });
    //   }
    //   refArr[guestBookContents.receiver].current?.scrollIntoView({
    //     behavior: 'instant',
    //     block: 'center',
    //   });
    // }
  }, [isDrop]);

  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (isDrop) {
      // window.scroll(0, 0);
    }
  }, [position]);

  function checkId() {
    if (guestBookContents.receiver !== -1) {
      if (guestBookContents.receiver > 40 && guestBookContents.receiver < 49) {
        return '#40';
      }
      return `#${guestBookContents.receiver}`;
    }
  }

  console.log(checkId());

  return (
    <>
      <a href={checkId()}>
        <Drop $isDrop={isDrop} onClick={handleDrop}>
          {guestBookContents.receiver === -1 ? (
            <NoneReceiver>받는 사람을 선택해 주세요.</NoneReceiver>
          ) : (
            <YesReceiver>
              {guestBookContents.receiver === 49
                ? '모두에게'
                : DESIGNERS[guestBookContents.receiver]}
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
      </a>
      {isDrop && (
        <Box ref={modalRef}>
          <Designer
            isSelected={checkSelected(49)}
            onClick={() => handleSelectDesigner(49)}
            ref={refArr[49]}
            id={`${49}`}
          >
            모두에게
          </Designer>

          {DESIGNERS.map(
            (designer, index) =>
              index !== 0 && (
                <Designer
                  isSelected={checkSelected(index)}
                  onClick={() => handleSelectDesigner(index)}
                  ref={refArr[index]}
                  id={`${index}`}
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
  width: 39.2rem;
  height: 37.6rem;
  margin-top: 12.2rem;
  border: 1px solid ${({ theme }) => theme.colors.Grayscales_900};

  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.White};

  cursor: pointer;

  @media screen and (width <= ${`600px`}) {
    width: 26.9rem;
    margin-top: 7rem;
  }
`;

const Drop = styled.div<{ $isDrop: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 28.6 rem;
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
    width: 23rem;
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
