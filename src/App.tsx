import { Suspense } from 'react';
import Router from './Router';
import Loading from './pages/Loading';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  );
};

export default App;
