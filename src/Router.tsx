import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Project from './pages/ProjectPage/Project';
import Home from './pages/Home/Home';
import Designer from './pages/Designer/Designer';
import DesignerDetail from './pages/Designer/DesignerDetail';
import { DesignerContainer } from './pages/Designer/components';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project/:category" element={<Project />} />
        <Route path="/designer" element={<Designer />}>
          <Route path="" element={<DesignerContainer />} />
          <Route path=":id" element={<DesignerDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
