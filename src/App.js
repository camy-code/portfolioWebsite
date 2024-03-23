import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
        
        </Route> 
        {/* This is the end of Layout */}
      
    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
