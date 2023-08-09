import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Project from './pages/ProjectPage/Project';
import Home from './pages/Home/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project" element={<Project />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
