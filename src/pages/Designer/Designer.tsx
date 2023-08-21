import { PageLayout } from '~/common/components';
import { Outlet } from 'react-router-dom';

const Designer = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default Designer;
