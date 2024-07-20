import { useState,useEffect } from "react"

import { db,auth } from "../services/firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, getDocs,updateDoc, collection} from 'firebase/firestore';

import { Box, Button, Grid, TextField } from "@mui/material"


import UploadButton from "../components/UploadButton";

const EditHome = () => {

    const [profileArr, setProfileArr] = useState(null); // this is how we are going to fetch

    const [name,setName] = useState("")
    const [prompt,setPrompt] = useState("")
    const [bio,setBio] = useState("")
    const [id,setId] = useState(null)

    const [imageUrl,setImageUrl] = useState("https://via.placeholder.com/150"); // This is just the default
    // Fetch the info
    useEffect(() => {
        const fetchBlogs = async () => {
          try {
            const blogCollection = collection(db, 'profile');
            const blogSnapshot = await getDocs(blogCollection);
            const blogList = blogSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            setProfileArr(blogList);
          } catch (error) {
            console.error('Error fetching profile', error);
          }
        };
    
        fetchBlogs();
      }, []);

     

      useEffect(()=>{
        try {
        
        if (profileArr !=null) {
            if (profileArr.length >0) {
                // Set all of our values
                setName(profileArr[0].name);
                setBio(profileArr[0].bio);
                setId(profileArr[0].id);
                setPrompt(profileArr[0].prompt);
                setImageUrl(profileArr[0].imageUrl)
            }
        }
    } catch {
        console.log("sadness")
    }
      },[profileArr]);

    // update info
    const handleEdit = async () => {
        if (id ==null) {
            return;
        }

        try {
            const docRef = doc(db, 'profile', id);
            await updateDoc(docRef, {
             name:name,
             bio:bio,
             imageUrl:imageUrl,
             prompt:prompt
          
                // Add other fields as needed
            });
            console.log("Project post updated successfully!");
            alert('Profile edited submitted successfully!');
            // Optionally redirect or show success message
        } catch (error) {
            alert("Error updating profile:", error);
            console.log("Error updating profile:", error);
            // Handle error state or show error message
       }
    };

    const handleFileUpload = async (files) => {
        try {
    
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

        } 
      };

      // so one of these 4 top functions is giving a problem

    return <>
    <Grid direction={"row"}  container marginTop={4}  justifyContent={"center"} spacing={3} >


<Grid item>
    <Grid item container direction={"column"} alignItems={"center"}  spacing={1}>
       <Grid item >    <Box
  component="img"
  sx={{
    height: 400,
    width: 400,
    minWidth: 25,
    minHeight: 25,
    borderRadius: 100,

  }}
  alt="The house from the offer."
  src={imageUrl}
/>  </Grid>


       <Grid item> <UploadButton  onFileUpload={handleFileUpload} words={"Update picture"}/></Grid>
    </Grid>
    </Grid>


<Grid item>
    <Grid item container  direction={"column"}  spacing={2} >
        <Grid item> <TextField style={{width:"100vh"}}  placeholder="Name"  value={name} onChange={(e)=> setName(e.target.value)}/></Grid>
        <Grid item> <TextField style={{width:"100vh"}} placeholder="Prompt"  value={prompt} onChange={(e)=> setPrompt(e.target.value)}/></Grid>
        <Grid item> <TextField style={{width:"100vh"}} multiline minRows={3} placeholder="Bio" value={bio} onChange={(e)=> setBio(e.target.value)}/></Grid>
        <Grid item style={{margin:"auto"}}><Button variant="outlined"  style={{  backgroundColor: "#ffcb77", color: "black", paddingLeft:25, paddingRight:25}} onClick={handleEdit}>Save</Button></Grid>
    </Grid>

    </Grid>
            
    </Grid>
    
        </>
    
}
export default EditHome