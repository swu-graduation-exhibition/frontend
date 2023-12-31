import { styled } from 'styled-components';
import { youtubeData } from '../data/youtubeData';
import { HOME_TABLET_WIDTH, MOBILE_WIDTH } from '~/constants/common';
import useDragScroll from '~/hooks/useDragScroll';

const YoutubeList = () => {
  const ref = useDragScroll();

  return (
    <YoutubeListWrapper>
      <DragListWrapper ref={ref}>
        <DragSlider>
          {youtubeData.map(({ id, url, link }, idx) => (
            <CardWrapper key={id} onClick={() => window.open(link, '_blank')}>
              <YoutubeCard src={url} alt={id + '번재'} />
              <PlayImg src={`${import.meta.env.VITE_SWU_IMAGE}/youtube_logo.png`} />
            </CardWrapper>
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
const CardWrapper = styled.div`
  position: relative;

  width: 81.6rem;
  height: 45.9rem;

  /* background-color: aliceblue; */
  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    width: 56.8rem;
    height: 32rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 21.4rem;
    height: 12rem;
  }
`;
const YoutubeCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const PlayImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;

  /* background-color: aliceblue; */
  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    width: 10rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 4rem;
  }
`;
const DragSlider = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 249.6rem;
  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    width: 172.6rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 65.1rem;
  }
`;
