import { Grid, Typography, Box } from "@mui/material";
import LoginCard from "../components/LoginCard";

function Admin() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#E3C0D3"
      style={{ height: "80vh" }}
    >

       

        <Grid item align="center">
            <Typography><LoginCard/></Typography>
        </Grid>

    </Grid>
  );
}
export default Admin;
