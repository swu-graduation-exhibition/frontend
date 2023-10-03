import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Designer from './pages/Designer/Designer';
import DesignerDetail from './pages/Designer/DesignerDetail';
import { DesignerContainer } from './pages/Designer/components';
import GuestBook from './pages/GuestBook/GuestBook';
import Home from './pages/Home/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Project from './pages/ProjectPage/Project';
import Landing from './pages/Landing/Landing';

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
        <Route path="/project/detail/:pojectId" element={<ProjectDetail />} />
        <Route path="/guestbook" element={<GuestBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
