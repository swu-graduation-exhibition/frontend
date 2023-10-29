import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import CommonFormSection from '~/common/components/CommonFormSection';
import TopButton from '~/common/components/TopButton';
import { HOME_MOBILE_WIDTH, HOME_TABLET_WIDTH } from '~/constants/common';
import { useDesignerDetail } from '~/lib/api/designer/get-designer-detail';
import { HomeDesktop, HomeTablet, Mobile } from '~/utils/mediaQuery';
import { GraduationWorkList, Profile } from './components';
import DesktopCommentContainer from './components/comment/DesktopCommentContainer';
import MobileCommentContainer from './components/comment/MobileCommentContainer';
import TabletCommentContainer from './components/comment/TabletCommentContainer';

const DesignerDetail = () => {
  const { id } = useParams();
  const { data } = useDesignerDetail(id || '1');
  const designerData = data?.data;

  if (!designerData) return <div>데이터 없음</div>;
  const { koreanName, englishName, profile, desc, tel, email, behance, instagram, projectList } =
    designerData;

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
      <GraduationWorkList projectList={projectList} />
      <GuestBookWrapper>
        <CommonFormSection page="designer" />

        <HomeDesktop>
          <DesktopCommentContainer />
        </HomeDesktop>
        <HomeTablet>
          <TabletCommentContainer />
        </HomeTablet>
        <Mobile>
          <>
            <MobileCommentContainer />
            <TopButton />
          </>
        </Mobile>
      </GuestBookWrapper>
    </DesignerDetailWrapper>
  );
};

export default DesignerDetail;

const DesignerDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 13.6rem;
  padding: 0% 8%;

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    margin-top: 6.5rem;
    padding-left: 6.5rem;
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    margin-top: 2.3rem;
    padding: 0%;
  }
`;

const GuestBookWrapper = styled.div`
  margin-top: 20rem;

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    margin-top: 5.4rem;
    margin-right: 1.6rem;
    margin-left: 1.6rem;
  }
`;
