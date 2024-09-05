import { Grid,Typography,TextField, Button } from "@mui/material"

import UploadButton from "../components/UploadButton";
import { useState } from "react";

// These are my firebase imports
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db,auth,storage} from "../services/firebase";



const WritePersonl = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // These are for ultility
    const [error,setError] = useState("");
    const [uploading, setUploading] = useState(false);
 
    // The following is for uploading an image
    const handleFileUpload = async (files) => {
        try {
          setError("")
          const storage = getStorage();
          const file = files[0];
          const storageRef = ref(storage, `images/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);
    
          setUploading(true);
  
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
              setUploading(false);
            },
            async () => {
              // Handle successful uploads and get the download URL
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log('File available at', downloadURL);
              setImageUrl(downloadURL);
              setUploading(false);
              // Here you can do anything with the URL, like saving it to Firestore
            }
          );
        } catch (error) {
          console.error('Error uploading file:', error);
          setError("Error in the upload")
        }
      };

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
  
  
  
          await addDoc(collection(db, 'personal'), { // The differnce in the s is tilting
            title:title,
            desc:desc,
            
            imageUrl:imageUrl,
            author: user.email,
            createdAt: new Date()
          });
          setTitle('');
          setDesc('');
          
          
          alert('Personal post submitted successfully!');
          
          
        } catch (error) {
          console.error('Error adding document: ', error);
          setError("Error")
        } finally {
          setUploading(false)
        }
      };


    return <><Grid  container direction={"column"} justifyContent={"flex-start"} alignItems={"center"} spacing={2} marginTop={4}>
    <Grid item ><Typography variant="h4" align="left" sx={{marginLeft:"5vh", marginRight:"95vh"}}>Personal</Typography></Grid>
    
    <Grid item > <TextField placeholder="Title" value={title} fullWidth="true"  sx={{width:"100vh",  borderRadius:"4px"}} onChange={(e)=> setTitle(e.target.value)}/></Grid>

    <Grid item> <TextField placeholder="Description" value={desc}  multiline minRows={3} sx={{width:"100vh", borderRadius:"4px"}} onChange={(e)=>setDesc(e.target.value)} /></Grid>




    <Grid item><UploadButton onFileUpload={handleFileUpload} words= {uploading ? 'Uploading...' : 'Upload Image'}/></Grid>

    <Grid item><Button onClick={handleCreate} variant="outlined" style={{  backgroundColor: "#ffcb77", color: "black" }}>Upload</Button></Grid>
    

    </Grid>
    {error ? <h1 style={{margin:"auto", color:"red", display:"inline-block"}}>ERROR: <div style={{color:"black", display:"inline-block"}}>{error}</div></h1>:null}
    </>

}

export default WritePersonl