import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import useGetProjectDetail from '~/hooks/project';

const ProjectDetailAssets = () => {
  const { projectId } = useParams();
  const { projectDetail } = useGetProjectDetail(Number(projectId));

  function checkExtension(photoExtension: string) {
    return (
      photoExtension === 'gif' ||
      photoExtension === 'png' ||
      photoExtension === 'jpg' ||
      photoExtension === 'jpeg' ||
      photoExtension === 'GIF' ||
      photoExtension === 'PNG' ||
      photoExtension === 'JPG' ||
      photoExtension === 'JPEG'
    );
  }

  return (
    <DetailAssets>
      {projectDetail?.photos.map((photo: string, index: number) => {
        const photoExtension = photo.split('.')[photo.split('.').length - 1];
        return (
          <>
            {checkExtension(photoExtension) ? (
              <Container key={index} src={photo} alt="프로젝트 이미지" />
            ) : (
              <PlayerWrapper
                isPhoto={
                  photo ===
                  'https://player.vimeo.com/video/878319131?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
                }
              >
                {photo ===
                'https://player.vimeo.com/video/878319131?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479' ? (
                  <ReactPlayer url={photo} width="100vw" height="220vw" controls playsinline />
                ) : (
                  <ReactPlayer url={photo} width="100vw" height="58vw" controls playsinline />
                )}
              </PlayerWrapper>
            )}
          </>
        );
      })}
    </DetailAssets>
  );
};

export default ProjectDetailAssets;

const PlayerWrapper = styled.div<{ isPhoto: boolean }>`
  margin-top: -${({ isPhoto }) => (isPhoto ? 2.5 : 2)}rem;
  margin-bottom: -${({ isPhoto }) => (isPhoto ? 2.5 : 2)}rem;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: -${({ isPhoto }) => (isPhoto ? 1.4 : 1)}rem;
    margin-bottom: -${({ isPhoto }) => (isPhoto ? 1.4 : 1)}rem;
  }
`;

const DetailAssets = styled.div`
  margin-bottom: 20rem;

  @media screen and (width <= ${TABLET_WIDTH}) {
    margin-bottom: 12.8rem;
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-bottom: 5rem;
  }
`;

const Container = styled.img`
  width: 100%;
  margin-bottom: -0.2rem;
`;
