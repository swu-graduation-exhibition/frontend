import { styled } from 'styled-components';
import { trackCardData } from '../data/trackData';
import { TrackCard } from '.';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH } from '~/constants/common';
import useDragScroll from '~/hooks/useDragScroll';

const TrackIntroduce = () => {
  const ref = useDragScroll();

  return (
    <TrackIntroduceWrapper>
      <DragListWrapper ref={ref}>
        <DragSlider>
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
  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    margin-top: 14rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 8.6rem;
  }
`;
const DragListWrapper = styled.article`
  overflow: hidden;
`;
const DragSlider = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 164.8rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 84.8rem;
    gap: 1rem;
  }
`;
