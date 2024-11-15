// App.js
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Project from './pages/Project';
import IndProj from './pages/IndProj';
import IndBlog from './pages/IndBlog';
import Dashboard from './pages/Dashboard';
import LoginCard from './components/LoginCard';
import { AuthProvider, RequireAuth } from './services/AuthContext';
import { NoRequireAuth } from './services/AuthContext';
import Writeblog from './pages/WriteBlog';
import EditBlog from './pages/EditBlog';

import WriteProj from './pages/WriteProj';
import EditProj from './pages/EditProj';
import EditHome from './pages/EditHome';
import WritePersonl from './pages/WritePersonal';
import EditPersonl from './pages/EditPersonal';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="admin" element={<NoRequireAuth><Admin /></NoRequireAuth>} />
            <Route path="project" element={<Project />} />
            <Route path="resume" element={<Resume />} />
            <Route path="project/:projectId" element={<IndProj />} />
            <Route path="blog/:blogId" element={<IndBlog />} />

            <Route path="login" element={<Admin />} />
            <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />

        
            <Route path="writeblog" element={<RequireAuth><Writeblog/></RequireAuth>}/>

            <Route path="writeproj" element={<RequireAuth><WriteProj/></RequireAuth>}/>

            <Route path="editblog/:blogId" element={<RequireAuth><EditBlog/></RequireAuth>}/>
            <Route path="editproj/:projId" element={<RequireAuth><EditProj/></RequireAuth>}/>
            
            <Route path="editpersonal/:personalId" element={<RequireAuth><EditPersonl/></RequireAuth>}/>


            <Route path="edithomepage" element={<RequireAuth><EditHome/></RequireAuth>}/>

            <Route path="writepersonal" element={<RequireAuth><WritePersonl/></RequireAuth>}/>

          </Route>
          
          

         
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

// 1. log out right after?
