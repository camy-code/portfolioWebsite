import { Grid, Typography } from "@mui/material"
import JustLine from "../components/JustLine"
import ProjectCard from "../components/ProjectCard"

const blogPosts = [ {
    image: 'https://via.placeholder.com/150',
    title: 'Post 1',
    description: 'This is the description for post 1.',
    content: 'This is the detailed content of post 1. Lorem ipsum dolor sit amet...'
},
{
    image: 'https://via.placeholder.com/150',
    title: 'Post 2',
    description: 'This is the description for post 1.',
    content: 'This is the detailed content of post 1. Lorem ipsum dolor sit amet...'
},
{
    image: 'https://via.placeholder.com/150',
    title: 'Post 3',
    description: 'This is the description for post 1.',
    content: 'This is the detailed content of post 1. Lorem ipsum dolor sit amet...'
}


]

const Project= () => {
    return ( <>
  <Grid container marginBottom={2} direction={"column"} >
          <Grid item container direction="column" justifyContent="flex-start" alignItems="center" backgroundColor="red" paddingTop={15} paddingBottom={5}>
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
            {blogPosts.map((post, index) => (
            <Grid item key={index} xs={12}  md={8} width={'90vh'}>
                <ProjectCard
                    image={post.image}
                    title={post.title}
                    description={post.description}
                    content={post.content}/>
            </Grid>
          ))}
        </Grid>
    
        <Grid item marginTop={3}> </Grid>
  
  
  </Grid> 
  <JustLine/>
  </>)
}

export default Project