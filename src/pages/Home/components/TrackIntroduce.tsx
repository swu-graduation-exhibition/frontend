import { styled, css } from 'styled-components';
import { trackCardData } from '../data/trackData';
import { TrackCard } from '.';
import { useState } from 'react';
import { MOBILE_WIDTH } from '~/constants/common';
import { useCarouselSize } from '~/hooks/useCarouselSize';
import { modifySliderRange, sliderEvent } from '~/utils/sliderEvent';
import {
  TRACK_INTRODUCE_MOBILE_SLIDER_ITEM_HALF_WIDTH,
  TRACK_INTRODUCE_SLIDER_HALF_WIDTH,
} from '~/constants/home';
const TrackIntroduce = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [transX, setTransX] = useState<number>(0);
  const { ref } = useCarouselSize();

  const width =
    window.innerWidth > 767
      ? TRACK_INTRODUCE_SLIDER_HALF_WIDTH * 2
      : TRACK_INTRODUCE_MOBILE_SLIDER_ITEM_HALF_WIDTH * 2;
  const sliderItemHalfWidth =
    window.innerWidth > 767
      ? TRACK_INTRODUCE_SLIDER_HALF_WIDTH
      : TRACK_INTRODUCE_MOBILE_SLIDER_ITEM_HALF_WIDTH;

  return (
    <TrackIntroduceWrapper>
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
              const maxIndex = trackCardData.length - 1;

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
          {trackCardData.map(({ title, desc, url }) => (
            <TrackCard title={title} desc={desc} url={url} key={title} />
          ))}
        </DragSlider>
      </DragListWrapper>
    </TrackIntroduceWrapper>
  );
};

export default TrackIntroduce;

const TrackIntroduceWrapper = styled.div`
  margin-top: 14.2rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 8.6rem;
  }
`;
const DragListWrapper = styled.article`
  overflow: hidden;
`;
const DragSlider = styled(({ currentIdx, dragItemWidth, transX, ...props }) => (
  <section {...props} />
))`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 164.8rem;
  ${({ currentIdx, dragItemWidth, transX }) => css`
    transform: translateX(${(-currentIdx * dragItemWidth + transX) / 10}rem);
  `};
  ${({ transX }) => css`
    transition: transform ${transX ? 0 : 300}ms ease-out 0s;
  `};
  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 84.8rem;
    gap: 1rem;
  }
`;
