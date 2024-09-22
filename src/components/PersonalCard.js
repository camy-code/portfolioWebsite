
// The following code is the card with an imae and the "about me"
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Button, Fade } from "@mui/material"
import { useState } from 'react';

import { useEffect } from 'react';
import { db, auth} from "../services/firebase";
import { doc, getDocs,updateDoc, collection} from 'firebase/firestore';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const CreateButton = ({title, Mycolor,myLink}) => {


    return (
    
 <Button component={Link} to={myLink} sx={{width:110, height:110, background:Mycolor,'&:hover': { // Customizes the hover state
    backgroundColor: "#FFFAFF"}, borderRadius:75, color:"#000000",border:"2px solid black"
    }}>
  {title}</Button>  
    )

}

const PersonalCard= () => {

  const [name, setName] = useState("")
  const [prompt, setPrompt] = useState("")
  const [desc, setDesc] = useState("")
  const [imgUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true); 
  const [personal_array, setPersonal] = useState(null) // this is ensuring that things are null


  

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        const blogCollection = collection(db, 'profile');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPersonal(blogList[0]);
      } catch (error) {
        console.error('Error fetching profile', error);
      } finally {

        sleep(3000);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

 useEffect( ()=> {
  if (personal_array != null) { // this indicates we were successful
    setName(personal_array.name)
    setPrompt(personal_array.prompt)
    setDesc(personal_array.bio)
    setImageUrl(personal_array.imageUrl)

    
    
  }
 },[personal_array]) // this will only activate if personal array changes 

if (loading) {
  
  return <h1></h1>
  
}

return <>
<Fade in={!loading} timeout={1500} >
<Grid container
direction={"row"}
justifyContent={"center"}
alignItems={"center"}
spacing={6}

>
    <Grid item> 
    <Box
  component="img"
  sx={{
    height: "50vh",
    width: "50vh",
    minWidth: 25,
    minHeight: 25,
    borderRadius: 100,
    border:3,
    
    marginTop:3
  }}
  alt="My profile image"
  src={imgUrl}
/> 
    </Grid>

    <Grid item container   
    direction="column"
  justifyContent="center"
  alignItems="flex-start"
  width={"60vh"}
  


  >
    
    <Grid item>
        <Typography variant="h3">{name}</Typography>
    </Grid>
    <Grid item>
        <Typography variant="h6">{prompt}</Typography>
    </Grid>
    <Grid item>
        <Typography variant="body1">{desc}</Typography>
    </Grid>
    

    <Grid container item
direction={"row"}
spacing={2}
alignItems={"center"}
marginTop={3}

>

<Grid item > <CreateButton Mycolor="red" title="Projects" myLink="project"/> </Grid> 
<Grid item > <CreateButton Mycolor="blue" title="Personal" myLink="about"/> </Grid>
<Grid item > <CreateButton Mycolor="orange" title="Blog" myLink="blog"/> </Grid> 
</Grid>

    </Grid>



</Grid>

</Fade>

</>
}

export default PersonalCard;

// There is some difficulty here with permissions in firebase that will need to be looked into

// Lazy loading! TODO