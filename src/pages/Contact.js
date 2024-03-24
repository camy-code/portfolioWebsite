import { Grid, Typography } from "@mui/material";
import ContactCard from "../components/ContactCard";

const Words = () => {
    return <Typography variant="h6" align="center" padding={3}>To reach me, please fill out the form below </Typography>
}

function Contact() {
return (
<Grid
  container
  direction="column"
  
  backgroundColor="#E3C0D3"
  style={{height:'100vh'}}
  > 
  {/* This is how I can set the screen to full!  */}
    <Grid item backgroundColor="#ffcb77" >
<Words/>
</Grid>

{/* ALl you need to do is build the card */}

</Grid>
)
};
export default Contact