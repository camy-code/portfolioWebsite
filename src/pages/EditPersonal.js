import { Grid,Typography,TextField, Button } from "@mui/material"

import UploadButton from "../components/UploadButton";
import { useState } from "react";

// These are my firebase imports
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { db, auth} from "../services/firebase";
import { doc, updateDoc, getDoc } from 'firebase/firestore';

import { useParams} from "react-router-dom";
import { useEffect } from "react";


const EditPersonl = () => {
    const { personalId } = useParams();
    const id = decodeURIComponent(personalId);


    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const [personal, setPersonal] = useState(null);

    // These are for ultility
    const [error,setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);
 
    // The following is for updating info
    useEffect(() => {
        const fetchProjPost = async () => {
          try {
            const blogDocRef = doc(db, 'personal', id);
            const blogDoc = await getDoc(blogDocRef);
            if (blogDoc.exists()) {
              setPersonal(blogDoc.data()); // Set the usestates here and we should not have a problem!
              
            } else {
              setError('Personal post not found');
            }
          } catch (err) {
            setError('Error fetching blog post: ' + err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProjPost();

      }, [id]);

      useEffect(()=>{
        if (personal!=null) {
          setTitle(personal.title);
          setDesc(personal.desc);
          setImageUrl(personal.imageUrl)
        }
      },[personal,id]);

      const user = auth.currentUser;

    // The following is ensuring an edit is 
    const   handleEdit = async () => {
        try {
            const docRef = doc(db, 'personal', id);
            await updateDoc(docRef, {
                title: title,
                desc: desc,
                imageUrl: imageUrl,
                author: user.email,
                createdAt: new Date()
                // Add other fields as needed
            });
            console.log("Project post updated successfully!");
            alert('Project edited submitted successfully!');
            // Optionally redirect or show success message
        } catch (error) {
            alert("Error updating project post:", error);
            console.log("Error updating project post:", error);
            // Handle error state or show error message
       }
    }

    // The following is for uploading a file
    const handleFileUpload = async (files) => {
        try {
          setError("")
          setImageUrl("") // we are clearing house for now
          setUploading(true);
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
        } finally {
          setUploading(false);
        }
      };
    


    return <><Grid  container direction={"column"} justifyContent={"flex-start"} alignItems={"center"} spacing={2} marginTop={4}>
    <Grid item ><Typography variant="h4" align="left" sx={{marginLeft:"5vh", marginRight:"95vh"}}>Personal</Typography></Grid>
    
    <Grid item > <TextField placeholder="Title" value={title} fullWidth="true"  sx={{width:"100vh",  borderRadius:"4px"}} onChange={(e)=> setTitle(e.target.value)}/></Grid>

    <Grid item> <TextField placeholder="Description" value={desc}  multiline minRows={3} sx={{width:"100vh", borderRadius:"4px"}} onChange={(e)=>setDesc(e.target.value)} /></Grid>




    <Grid item><UploadButton onFileUpload={handleFileUpload} words= {uploading ? 'Uploading...' : 'Upload Image'}/></Grid>

    <Grid item><Button onClick={handleEdit} variant="outlined" style={{  backgroundColor: "#ffcb77", color: "black" }}>Save</Button></Grid>
    

    </Grid>
    {error ? <h1 style={{margin:"auto", color:"red", display:"inline-block"}}>ERROR: <div style={{color:"black", display:"inline-block"}}>{error}</div></h1>:null}
    </>

}

export default EditPersonl

// There is some error here with file uploading