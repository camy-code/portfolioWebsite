import { Grid, Typography, Fade } from "@mui/material"
import JustLine from "../components/JustLine"
import ProjectCard from "../components/ProjectCard"
import { useState,useEffect } from "react"
import { doc, getDocs,updateDoc, collection} from 'firebase/firestore';
import { db, auth} from "../services/firebase";
// const projPosts = [ {
//     image: 'https://via.placeholder.com/150', // Placeholder is useful to not forget!
//     title: 'Post 1',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt dignissim viverra. Vivamus consectetur at nunc in fringilla. Morbi eget enim ac mi lacinia tristique. Proin et faucibus lorem. Pellentesque porta non urna nec dapibus. Donec a massa et magna mollis commodo. Cras mattis, quam a blandit pulvinar, leo ex tincidunt lectus, sit amet bibendum neque lectus eu felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In suscipit nisl mi, sit amet viverra odio fermentum ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus hendrerit vel felis eu feugiat. Fusce id diam vitae ante hendrerit sollicitudin.',
//     content: 'This is the detailed content of post 1. Lorem ipsum dolor sit amet...',
//     id:'1'
// } ]

function sleep(ms) { // This is the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Project= () => {

  // we need to setup the variables
  const[projPosts,setProjPosts] = useState([]) // we  are making this empty for now
  const [isLoading, setLoading] =useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogCollection = collection(db, 'projPost');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjPosts(blogList); // we are setting the post now
        sleep(1500);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return <h1></h1>
  }

    return ( <>
    <Fade in={!isLoading} timeout={1500}>
  <Grid container marginBottom={2} direction={"column"} >
          <Grid item container direction="column" justifyContent="flex-start" alignItems="center" backgroundColor="#F6F8FF" paddingTop={15} paddingBottom={5}>
        <Grid item>
          <Typography variant='h2'>Projects</Typography>
        </Grid>
        {/* <Grid item>
          <Typography variant='h5'>Things I have worked on</Typography>
        </Grid> */}
      </Grid>
  
        <Grid item marginBottom={3}> <JustLine/></Grid>


        <Grid item container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            {/* This is where we are going to put Project posts */}
            {projPosts.map((post, index) => (
            <Grid item key={index} xs={12}  md={8} width={'90vh'}>
                <ProjectCard
                    image={post.imageUrl}
                    projectId={post.id}
                    title={post.title}
                    desc={post.desc}
                    link = "/project/"
                    />
            </Grid>
          ))}
        </Grid>
    
        <Grid item marginTop={3}> </Grid>
  
  
  </Grid> 
  </Fade>
  
  </>)
}

export default Project

// This is the format we need for this and now we need to do react-router shit
// Make a sample firebase app to get the hang of things! 