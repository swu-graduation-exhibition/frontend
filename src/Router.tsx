import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Landing = lazy(() => import('./pages/Landing/Landing'));
const Project = lazy(() => import('./pages/ProjectPage/Project'));
const Home = lazy(() => import('./pages/Home/Home'));
const GuestBook = lazy(() => import('./pages/GuestBook/GuestBook'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail/ProjectDetail'));
const DesignerContainer = lazy(() => import('./pages/Designer/components/DesignerContainer'));
const DesignerDetail = lazy(() => import('./pages/Designer/DesignerDetail'));
const Designer = lazy(() => import('./pages/Designer/Designer'));

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
        <Route path="/project/detail/:projectId" element={<ProjectDetail />} />
        <Route path="/guestbook" element={<GuestBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
