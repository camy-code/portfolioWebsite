import { Grid, TextField, Button, Box, Typography } from "@mui/material";
import UploadButton from "../components/UploadButton";
import { useState } from "react";

const Writeblog = () => {

    const handleCreate = () => {
      console.log(title);
      console.log(desc);
      console.log(post);
    }

    // This is where we are going to put all of our use states
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [post, setPost] = useState("");
    const [error, setError] = useState(null);

    // TODO: make things work for images, add error later too


    const handleFileUpload = (files) => {
        console.log('Uploaded files:', files);
        // Handle file upload logic here
      };


    return <><Grid  container direction={"column"} justifyContent={"flex-start"} alignItems={"center"} spacing={2} marginTop={4}>
        <Grid item ><Typography variant="h4" align="left" sx={{marginLeft:"5vh", marginRight:"95vh"}}>Blog</Typography></Grid>
        
        <Grid item > <TextField placeholder="Title" fullWidth="true"  sx={{width:"100vh"}} onChange={(e)=> setTitle(e.target.value)}/></Grid>

        <Grid item> <TextField placeholder="Description"  multiline minRows={3} sx={{width:"100vh"}} onChange={(e)=>setDesc(e.target.value)} /></Grid>


        <Grid item>  
      <TextField
        fullWidth
        multiline
        minRows={10} // Increase the initial number of rows
        variant="outlined"
        placeholder="Content"
        sx={{
          borderRadius: '4px',
          width:"100vh",
           // Set a specific height
        }}
      onChange={(e)=> setPost(e.target.value)}
      />
    </Grid>

        <Grid item><UploadButton onFileUpload={handleFileUpload}/></Grid>

        <Grid item><Button onClick={handleCreate} variant="outlined" style={{  backgroundColor: "#ffcb77", color: "black" }}>Upload</Button></Grid>
        

        </Grid></>

}

export default Writeblog;