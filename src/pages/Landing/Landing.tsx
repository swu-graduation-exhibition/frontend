import styled from 'styled-components';
import { PageLayout } from '~/common/components';

function Landing() {
  return (
    <PageLayout>
      <h1>메인입니다</h1>
    </PageLayout>
  );
}

export default Landing;

const StAppWrapper = styled.div`
  ${({ theme }) => theme.fonts.Headline_01};
`;
