import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Layout from './pages/Layout';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        
        </Route> 
        {/* This is the end of Layout */}
      
    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
