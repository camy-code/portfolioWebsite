import { AppBar,Box } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { red } from "@mui/material/colors";
const Layout = () => {
  return (
    
    <Box  sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor:"white" // I can add the primary background here?
  }}>
      <Header/>
   

        <Outlet />
      

      <Footer/>
    </Box>
  )
};

export default Layout;