import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import Router from './Router';

const App = () => {
  return (
    <RecoilRoot>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </RecoilRoot>
  );
};

export default App;
