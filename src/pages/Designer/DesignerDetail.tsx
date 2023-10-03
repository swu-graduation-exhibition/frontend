import { styled } from 'styled-components';
import { GraduationWorkList, Profile } from './components';
import { MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import CommonFormSection from '~/common/components/CommonFormSection';
import { useDesignerDetail } from '~/lib/api/designer/get-designer-detail';
import { useParams } from 'react-router-dom';
import { Default, Desktop, Mobile, Tablet } from '~/utils/mediaQuery';
import useCommentDesignerWithScroll from '~/lib/api/designer/use-get-designer-comment-scroll';
import DesktopCommentContainer from './components/comment/DesktopCommentContainer';
import MobileCommentContainer from './components/comment/MobileCommentContainer';
import TabletCommentContainer from './components/comment/TabletCommentContainer';
import TopButton from '~/common/components/TopButton';

const DesignerDetail = () => {
  const { id } = useParams();
  const { data } = useDesignerDetail(id || '1');
  const designerData = data?.data;

  if (!designerData) return <div>데이터 없음</div>;

  const { koreanName, englishName, profile, desc, tel, email, behance, instagram } = designerData;

  return (
    <DesignerDetailWrapper>
      <Profile
        profile={profile}
        koreanName={koreanName}
        englishName={englishName}
        desc={desc}
        tel={tel}
        email={email}
        behance={behance}
        instagram={instagram}
      />
      <GraduationWorkList />
      <GuestBookWrapper>
        <CommonFormSection page="designer" />
      </GuestBookWrapper>

      <Desktop>
        <DesktopCommentContainer />
      </Desktop>
      <Tablet>
        <TabletCommentContainer />
      </Tablet>
      <Mobile>
        <>
          <MobileCommentContainer />
          <TopButton />
        </>
      </Mobile>
    </DesignerDetailWrapper>
  );
};

export default DesignerDetail;

const DesignerDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 13.6rem;
  padding: 0% 7%;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 1.3rem;
    padding: 0%;
  }
`;

const GuestBookWrapper = styled.div`
  margin-top: 20rem;
  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-left: 1.6rem;
    margin-right: 1.6rem;
  }
`;

const CommentListWrapper = styled.div`
  display: grid;
  max-width: 165rem;
  grid-template-columns: repeat(4, minmax(27rem, 1fr));
  gap: 2rem;

  margin-top: 12rem;
  margin-bottom: 10rem;

  @media screen and (width <= 1300px) {
    grid-template-columns: repeat(2, minmax(27rem, 1fr));
  }

  @media screen and (width <= ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(1, minmax(27rem, 1fr));
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    margin-top: 4.6rem;
  }
`;
