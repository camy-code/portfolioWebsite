import { AppBar } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
    <Header/>
   

      <Outlet />
      

      <Footer/>
    </>
  )
};

export default Layout;