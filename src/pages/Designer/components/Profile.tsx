import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { IcStarAll } from '~/assets/icons';
import ImgDefaultDesigner from '~/assets/images/img1_default_desinger.png';
import { DESKTOP_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from '~/constants/common';
import { Default, Mobile } from '~/utils/mediaQuery';

interface ProfileProps {
  // profile: string;
  koreanName: string;
  // englishName: string;
  // desc: string;
  tel?: string;
  email?: string;
  instagram?: string;
  behance?: string;
}
const Profile = ({
  // profile,
  koreanName,
  // englishName,
  // desc,
  tel,
  email,
  behance,
  instagram,
}: ProfileProps) => {
  return (
    <ProfileWrapper>
      <Mobile>
        <NameHeader>
          <IcStarAll />
          <NameTitle>
            <h3>{koreanName}</h3>
            <span>{'You'}</span>
          </NameTitle>
        </NameHeader>
      </Mobile>
      <ProfileImg src={ImgDefaultDesigner} />
      <Mobile>
        <>
          <DesignerText>
            {
              '나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.'
            }
          </DesignerText>
          <DesignerSNSList>
            {email && (
              <DesignerSNS>
                <span>E-mail</span>
                <span>{email}</span>
              </DesignerSNS>
            )}
            {instagram && (
              <DesignerSNS>
                <span>Instargram</span>
                <span>@0000000000</span>
              </DesignerSNS>
            )}
            {behance && (
              <DesignerSNS>
                <span>Behance</span>
                <span>@0000000000</span>
              </DesignerSNS>
            )}
          </DesignerSNSList>
        </>
      </Mobile>
      <Default>
        <TextInfoWrapper>
          <NameHeader>
            <IcStarAll />
            <NameTitle>
              <h3>{koreanName}</h3>
              <span>{'You'}</span>
            </NameTitle>
          </NameHeader>
          <DesignerText>
            {
              '나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.나는 똥입니다.'
            }
          </DesignerText>
          <DesignerSNSList>
            {email && (
              <DesignerSNS>
                <span>E-mail</span>
                <span>{email}</span>
              </DesignerSNS>
            )}
            {instagram && (
              <DesignerSNS>
                <span>Instargram</span>
                <span>@0000000000</span>
              </DesignerSNS>
            )}
            {behance && (
              <DesignerSNS>
                <span>Behance</span>
                <span>@0000000000</span>
              </DesignerSNS>
            )}
          </DesignerSNSList>
        </TextInfoWrapper>
      </Default>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2%;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column;

    padding: 0% 1.5rem;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;

  max-width: 64rem;
  max-height: 64rem;
  object-fit: cover;

  @media screen and (width <= ${TABLET_WIDTH}) {
    max-width: 30rem;
    max-height: 30rem;
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    width: 17.2rem;

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
  height: fit-content;
  svg {
    width: 1.9rem;
    height: 1.9rem;

    @media screen and (width <= ${TABLET_WIDTH}) {
      width: 1rem;
    }
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
    @media screen and (width <= ${TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_02};
    }
    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Subtitle_01};
    }
  }

  span {
    ${({ theme }) => theme.fonts.Body_02};

    @media screen and (width <= ${DESKTOP_WIDTH}) {
      ${({ theme }) => theme.fonts.Body_04};
    }
    @media screen and (width <= ${TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Body_03};
    }
    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Caption_01};
    }
  }
`;

const DesignerText = styled.div`
  ${({ theme }) => theme.fonts.Caption_02};

  @media screen and (width <= ${DESKTOP_WIDTH}) {
    ${({ theme }) => theme.fonts.Caption_03};
  }
  @media screen and (width <= ${TABLET_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Body_04};
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    ${({ theme }) => theme.fonts.Mobile_Caption_01};
    margin-top: 1.2rem;
  }
`;

const DesignerSNSList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (width <= ${MOBILE_WIDTH}) {
    margin-top: 1.9rem;
  }
`;

const DesignerSNS = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 192px);

  @media screen and (width <= ${DESKTOP_WIDTH}) {
    grid-template-columns: repeat(2, 120px);
  }
  @media screen and (width <= ${TABLET_WIDTH}) {
    grid-template-columns: repeat(2, 90px);
  }
  @media screen and (width <= ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(2, 70px);
  }

  span {
    ${({ theme }) => theme.fonts.Caption_02};

    @media screen and (width <= ${DESKTOP_WIDTH}) {
      ${({ theme }) => theme.fonts.Caption_03};
    }
    @media screen and (width <= ${TABLET_WIDTH}) {
      ${({ theme }) => theme.fonts.Caption_04};
    }
    @media screen and (width <= ${MOBILE_WIDTH}) {
      ${({ theme }) => theme.fonts.Mobile_Caption_01};
    }
  }
`;
