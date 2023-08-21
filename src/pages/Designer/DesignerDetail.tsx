import { styled } from 'styled-components';
import { GraduationWorkList, Profile } from './components';
import { MOBILE_WIDTH } from '~/constants/common';

const DesignerDetail = () => {
  return (
    <DesignerDetailWrapper>
      <Profile />
      <GraduationWorkList />
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
