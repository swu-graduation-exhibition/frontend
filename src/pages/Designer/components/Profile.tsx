import { styled } from 'styled-components';
import { DESKTOP_WIDTH, HOME_MOBILE_WIDTH, HOME_TABLET_WIDTH } from '~/constants/common';
import { HomeDefault, HomeMobile } from '~/utils/mediaQuery';

interface ProfileProps {
  profile: string;
  koreanName: string;
  englishName: string;
  desc: string;
  tel?: string;
  email?: string;
  instagram?: string;
  behance?: string;
}
const Profile = ({
  profile,
  koreanName,
  englishName,
  desc,
  tel,
  email,
  behance,
  instagram,
}: ProfileProps) => {
  return (
    <ProfileWrapper>
      <HomeMobile>
        <NameHeader>
          <IconStarAll src={`${import.meta.env.VITE_SWU_IMAGE}/ic_star_all.svg`} />

          <NameTitle>
            <h3>{koreanName}</h3>
            <span>{englishName}</span>
          </NameTitle>
        </NameHeader>
      </HomeMobile>
      <ProfileImg src={profile} />
      <HomeMobile>
        <>
          <DesignerText>{desc}</DesignerText>
          <DesignerSNSList>
            {email && !email.includes('-') && (
              <DesignerSNS>
                <Tag>E-mail</Tag>
                <span>{email}</span>
              </DesignerSNS>
            )}
            {instagram && !instagram.includes('-') && (
              <DesignerSNS>
                <Tag>Instargram</Tag>
                <span>{'@' + instagram}</span>
              </DesignerSNS>
            )}
            {behance && !behance.includes('-') && (
              <DesignerSNS>
                <Tag>Behance</Tag>
                <span>{behance}</span>
              </DesignerSNS>
            )}
          </DesignerSNSList>
        </>
      </HomeMobile>
      <HomeDefault>
        <TextInfoWrapper>
          <NameHeader>
            <IconStarAll />
            <NameTitle>
              <h3>{koreanName}</h3>
              <span>{englishName}</span>
            </NameTitle>
          </NameHeader>
          <DesignerText>{desc}</DesignerText>
          <DesignerSNSList>
            {email && !email.includes('-') && (
              <DesignerSNS>
                <Tag>E-mail</Tag>
                <span>{email}</span>
              </DesignerSNS>
            )}
            {instagram && !instagram.includes('-') && (
              <DesignerSNS>
                <Tag>Instargram</Tag>
                <span>{'@' + instagram}</span>
              </DesignerSNS>
            )}
            {behance && !behance.includes('-') && (
              <DesignerSNS>
                <Tag>Behance</Tag>
                <span>{behance}</span>
              </DesignerSNS>
            )}
          </DesignerSNSList>
        </TextInfoWrapper>
      </HomeDefault>
    </ProfileWrapper>
  );
};

export default Profile;

const IconStarAll = styled.img`
  position: absolute;
  top: 0;
  left: -15px;
  width: 1.9rem;
  margin-right: 0.4rem;

  @media screen and (width<=${HOME_TABLET_WIDTH}) {
    left: -8px;
    width: 1rem;
    margin-right: 0.2rem;
  }

  @media screen and (width<=${HOME_MOBILE_WIDTH}) {
    left: -8px;
    margin-right: 0;
  }
`;

const Tag = styled.div`
  width: 14rem;

  @media screen and (width<=${HOME_TABLET_WIDTH}) {
    width: 10rem;
  }

  @media screen and (width<=${HOME_MOBILE_WIDTH}) {
    width: 7.2rem;
  }

  ${({ theme }) => theme.fonts.Caption_02};
  @media screen and (width <= ${DESKTOP_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_03};
  }

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_04};
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Caption_01};
  }
`;

const ProfileWrapper = styled.div`
  gap: 10%;
  display: flex;

  @media screen and (width<=${HOME_TABLET_WIDTH}) {
    gap: 4rem;
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0% 1.5rem;
  }
`;

const ProfileImg = styled.img`
  width: 412px;
  height: 61.8rem;
  object-fit: cover;
  border: 0.5px solid var(--Black, #000);

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    width: 215px;
    height: 322.5px;
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    width: 17.2rem;
    height: 25.725rem;
    margin-top: 2.6rem;
  }
`;

const TextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NameHeader = styled.header`
  display: flex;
  position: relative;
  height: fit-content;

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    margin-left: 1.2rem;
  }
`;

const NameTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    ${({ theme }) => theme.fonts.Subtitle_01};
    @media screen and (width <= ${DESKTOP_WIDTH}) {
      ${({ theme }) => theme.fonts.Subtitle_02};
    }

    @media screen and (width <= ${HOME_TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_02};
    }

    @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_01};
    }
  }

  span {
    ${({ theme }) => theme.fonts.Body_02};
    @media screen and (width <= ${DESKTOP_WIDTH}) {
      ${({ theme }) => theme.fonts.Body_04};
    }

    @media screen and (width <= ${HOME_TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Body_03};
    }

    @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Caption_01};
    }
  }
`;

const DesignerText = styled.div`
  ${({ theme }) => theme.fonts.Caption_02};

  @media screen and (width <= ${DESKTOP_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_03};
  }

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_04};
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Caption_01};
    margin-top: 2.9rem;
  }
`;

const DesignerSNSList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 8px;

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    margin-top: 1.9rem;
    gap: 0;
  }
`;

const DesignerSNS = styled.li`
  display: flex;

  /* grid-template-columns: repeat(2, 192px); */

  word-wrap: break-word;

  /* width: 100%; */

  /* @media screen and (width <= ${DESKTOP_WIDTH}) {
    grid-template-columns: repeat(2, 120px);
  }

  @media screen and (width <= ${HOME_TABLET_WIDTH}) {
    grid-template-columns: repeat(2, 90px);
  }

  @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
    grid-template-columns: repeat(2, 70px);
  } */

  span {
    ${({ theme }) => theme.fonts.Caption_02};
    @media screen and (width <= ${DESKTOP_WIDTH}) {
      ${({ theme }) => theme.fonts.Caption_03};
    }

    @media screen and (width <= ${HOME_TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Body_04};
    }

    @media screen and (width <= ${HOME_MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Caption_01};
    }
  }
`;
