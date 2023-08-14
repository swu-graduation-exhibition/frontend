import { styled } from 'styled-components';
import { youtubeData } from '../data/youtubeData';
import { MOBILE_WIDTH } from '~/constants/common';
import useDragScroll from '~/hooks/useDragScroll';

const YoutubeList = () => {
  const ref = useDragScroll();

  return (
    <YoutubeListWrapper>
      <DragListWrapper ref={ref}>
        <DragSlider>
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
const DragSlider = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 331.2rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 86.5rem;
  }
`;
