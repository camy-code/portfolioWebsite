import { Grid, TextField, Button, Box, Typography } from "@mui/material";
import UploadButton from "../components/UploadButton";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { v4 as uuidv4 } from 'uuid'; // So this is for making sure link is unique?


import { db,auth,storage} from "../services/firebase";


const Writeblog = () => {



    

    // This is where we are going to put all of our use states
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [post, setPost] = useState("");
    

    const [error, setError] = useState(""); 
    // we are just need checking for errors
    // Maybe do this later
    

    const [uploading, setUploading] = useState(false);



    const handleCreate = async() => {
      if (imageUrl == "") {
        alert("Need to have image")
        return;
      }

      const user = auth.currentUser;
      if (!user) {
        alert('You must be logged in to submit a blog post');
        return;
      }
  
      try {
          // Now this is all the image adding stuff



        await addDoc(collection(db, 'blogPosts'), {
          title:title,
          desc:desc,
          post:post,
          imageUrl:imageUrl,
          author: user.email,
          createdAt: new Date(),
        });
        setTitle('');
        setDesc('');
        setPost('');
        
        alert('Blog post submitted successfully!');
        
        
      } catch (error) {
        console.error('Error adding document: ', error);
        setError("Error")
      } finally {
        setUploading(false)
      }
    };

    // TODO: make things work for images, add error later too


    const handleFileUpload = async (files) => {
      try {
        setError("")
        const storage = getStorage();
        const file = files[0];
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Handle progress
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error) => {
            // Handle errors
            console.error('Upload error:', error);
            setError("Upload error")
          },
          async () => {
            // Handle successful uploads and get the download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File available at', downloadURL);
            setImageUrl(downloadURL);
            // Here you can do anything with the URL, like saving it to Firestore
          }
        );
      } catch (error) {
        console.error('Error uploading file:', error);
        setError("Error in the upload")
      }
    };


    return <><Grid  container direction={"column"} justifyContent={"flex-start"} alignItems={"center"} spacing={2} marginTop={4}>
        <Grid item ><Typography variant="h4" align="left" sx={{marginLeft:"5vh", marginRight:"95vh"}}>Blog</Typography></Grid>
        
        <Grid item > <TextField placeholder="Title" value={title} fullWidth="true"  sx={{width:"100vh",  borderRadius:"4px"}} onChange={(e)=> setTitle(e.target.value)}/></Grid>

        <Grid item> <TextField placeholder="Description" value={desc}  multiline minRows={3} sx={{width:"100vh", borderRadius:"4px"}} onChange={(e)=>setDesc(e.target.value)} /></Grid>


        <Grid item>  
      <TextField
        fullWidth
        multiline
        minRows={10} // Increase the initial number of rows
        variant="outlined"
        placeholder="Content"
        value={post}
        sx={{
          borderRadius: '4px',
          width:"100vh",
           // Set a specific height
        }}
      onChange={(e)=> setPost(e.target.value)}
      />
    </Grid>

        <Grid item><UploadButton onFileUpload={handleFileUpload} words= {uploading ? 'Uploading...' : 'Upload Image'}/></Grid>

        <Grid item><Button onClick={handleCreate} variant="outlined" style={{  backgroundColor: "#ffcb77", color: "black" }}>Upload</Button></Grid>
        

        </Grid>
        {error ? <h1 style={{margin:"auto", color:"red", display:"inline-block"}}>ERROR: <div style={{color:"black", display:"inline-block"}}>{error}</div></h1>:null}
        </>

      

}

export default Writeblog;