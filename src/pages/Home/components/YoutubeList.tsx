import { styled, css } from 'styled-components';
import { useState } from 'react';
import { youtubeData } from '../data/youtubeData';
import { MOBILE_WIDTH } from '~/constants/common';
import { useCarouselSize } from '~/hooks/useCarouselSize';
import { modifySliderRange, sliderEvent } from '~/utils/sliderEvent';
import {
  YOUTUBE_MOBILE_SLIDER_ITEM_HALF_WIDTH,
  YOUTUBE_SLIDER_ITEM_HALF_WIDTH,
} from '~/constants/home';

const YoutubeList = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [transX, setTransX] = useState<number>(0);
  const { ref } = useCarouselSize();
  const width = window.innerWidth > 767 ? 816 : 214;
  const sliderItemHalfWidth =
    window.innerWidth > 767
      ? YOUTUBE_SLIDER_ITEM_HALF_WIDTH
      : YOUTUBE_MOBILE_SLIDER_ITEM_HALF_WIDTH;

  return (
    <YoutubeListWrapper>
      <DragListWrapper ref={ref}>
        <DragSlider
          currentIdx={currentIdx}
          dragItemWidth={width}
          transX={transX}
          {...sliderEvent({
            onDragChange: (deltaX) => {
              setTransX(modifySliderRange(deltaX, -width, width));
            },
            onDragEnd: (deltaX) => {
              const maxIndex = youtubeData.length - 1;

              Array(maxIndex + 1)
                .fill(0)
                .map((_, i) => i + 1)
                .some((num) => {
                  console.log(currentIdx, num);
                  if (deltaX < -sliderItemHalfWidth * num) {
                    setCurrentIdx(modifySliderRange(currentIdx + num, 0, maxIndex));
                    return true;
                  }
                  if (deltaX > sliderItemHalfWidth * num) {
                    setCurrentIdx(modifySliderRange(currentIdx - num, 0, maxIndex));
                    return true;
                  }
                });

              setTransX(0);
            },
          })}
        >
          {youtubeData.map(({ id, url }, idx) => (
            <YoutubeCard src="" key={id} alt={id + '번재'} />
          ))}
        </DragSlider>
      </DragListWrapper>
    </YoutubeListWrapper>
  );
};

export default YoutubeList;

const YoutubeListWrapper = styled.div`
  margin-top: 4rem;
  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 1.2rem;
  }
`;
const DragListWrapper = styled.article`
  overflow: hidden;
`;
const YoutubeCard = styled.img`
  width: 81.6rem;
  height: 45.9rem;

  background-color: aliceblue;
  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 21.4rem;
    height: 12rem;
  }
`;
const DragSlider = styled(({ currentIdx, dragItemWidth, transX, ...props }) => (
  <section {...props} />
))`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 331.2rem;
  ${({ currentIdx, dragItemWidth, transX }) => css`
    transform: translateX(${(-currentIdx * dragItemWidth + transX) / 10}rem);
  `};
  ${({ transX }) => css`
    transition: transform ${transX ? 0 : 300}ms ease-out 0s;
  `};
  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 86.5rem;
  }
`;
