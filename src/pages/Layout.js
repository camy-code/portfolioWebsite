import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: "white",
      }}
    >
      <Header />

      {/* Main content area, will grow to take available space */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Ensures this section expands to push footer down
          padding: 2,  // Add padding if needed for spacing
          overflow: "auto", // Prevent content from overflowing
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
