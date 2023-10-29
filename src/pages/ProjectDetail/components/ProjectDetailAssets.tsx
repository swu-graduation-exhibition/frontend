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
              <PlayerWrapper>
                <ReactPlayer url={photo} width="100vw" height="58vw" controls playsinline />
              </PlayerWrapper>
            )}
          </>
        );
      })}
    </DetailAssets>
  );
};

export default ProjectDetailAssets;

const PlayerWrapper = styled.div`
  margin-bottom: -6px;
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
  margin-bottom: -2px;
`;
