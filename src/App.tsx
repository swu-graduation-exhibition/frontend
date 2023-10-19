import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import Router from './Router';
import Loading from './pages/Loading';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </Suspense>
  );
};

export default App;
