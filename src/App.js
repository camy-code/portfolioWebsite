// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Project from './pages/Project';
import IndProj from './pages/IndProj';
import IndBlog from './pages/IndBlog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="admin" element={<Admin />} />

        <Route path="project" element={<Project />} />
        <Route path="resume" element={<Resume />} />
{/* ----------------- */}
{/* This is where the special project page is going to be located. We cook */}
        {/* <Route path="indproj" element={<IndProj/>} /> */}
        <Route path="project/:projectId/:title" element={<IndProj />} />
        <Route path="blog/:blogId/:title" element={<IndBlog />} />
{/* -------------- */}
        </Route> 
        {/* This is the end of Layout */}
      
    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
