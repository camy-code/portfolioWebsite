import { Grid, TextField, Button, Box, Typography } from "@mui/material";
import UploadButton from "../components/UploadButton";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useParams } from "react-router-dom";

import { db,auth } from "../services/firebase";

import { doc, getDoc,updateDoc } from 'firebase/firestore';
import { useEffect } from "react";


const EditBlog = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [post, setPost] = useState("");
    const [imageUrl, setImageUrl] = useState(""); // This is for images


    const { blogId } = useParams();
    const id = decodeURIComponent(blogId);

    console.log(id)

    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [uploading, setUploading] = useState(false);
    

    useEffect(() => {
        const fetchBlogPost = async () => {
          try {
            const blogDocRef = doc(db, 'blogPosts', id);
            const blogDoc = await getDoc(blogDocRef);
            if (blogDoc.exists()) {
              setBlogPost(blogDoc.data()); // Set the usestates here and we should not have a problem!
              
            } else {
              setError('Blog post not found');
            }
          } catch (err) {
            setError('Error fetching blog post: ' + err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchBlogPost();

        



      }, []);

      useEffect(()=>{
        if (blogPost!=null) {
          setTitle(blogPost.title);
          setDesc(blogPost.desc);
          setPost(blogPost.post)
          setImageUrl(blogPost.imageUrl)
        }

      },[blogPost,id]);
      

          // This is where we are going to put all of our use states


  

      //  useEffect(()=>{
      //  setTitle(blogPost.title)
      //   setDesc(blogPost.desc)
      //   setPost(blogPost.post)
      //   setImageUrl(blogPost.imageUrl)
      // },[blogPost]);

      

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>{error}</div>;
      }



      const handleEdit = async () => {
        try {
            const docRef = doc(db, 'blogPosts', id);
            await updateDoc(docRef, {
                title: title,
                desc: desc,
                post: post,
                imageUrl: imageUrl
                // Add other fields as needed
            });
            console.log("Blog post updated successfully!");
            alert('Blog edited submitted successfully!');
            // Optionally redirect or show success message
        } catch (error) {
            alert("Error updating blog post:", error);
            console.log("Error updating blog post:", error);
            // Handle error state or show error message
       }
    };

   
    const handleFileUpload = async (files) => {
      try {
        setError("")
        setImageUrl("") // we are clearing house for now
        setUploading(true)
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
        setUploading(false)
      }
    };

  
        


    return <><Grid  container direction={"column"} justifyContent={"flex-start"} alignItems={"center"} spacing={2} marginTop={4}>
        <Grid item ><Typography variant="h4" align="left" sx={{marginLeft:"5vh", marginRight:"95vh"}}>Edit Blog</Typography></Grid>
        
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

        <Grid item><Button onClick={handleEdit} variant="outlined" style={{  backgroundColor: "#ffcb77", color: "black" }}>Save</Button></Grid>
        

        </Grid>
        {error ? <h1 style={{margin:"auto", color:"red", display:"inline-block"}}>ERROR: <div style={{color:"black", display:"inline-block"}}>{error}</div></h1>:null}
        </>

}

export default EditBlog;

// It looks like  you dont need use states, this is where you last left off
// Some error when clicking onto it