import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Project from './pages/ProjectPage/Project';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
