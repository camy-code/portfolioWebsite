import { AppBar,Box } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    
    <Box  sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
  }}>
      <Header/>
   

        <Outlet />
      

      <Footer/>
    </Box>
  )
};

export default Layout;