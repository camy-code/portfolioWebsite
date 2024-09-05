import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";

import { collection, getDocs , deleteDoc, doc} from 'firebase/firestore';
import { db } from "../services/firebase";

import { useNavigate } from "react-router-dom";

const PersonalAdmin = () => {

  // we are going to fetch all of the things
  const [personalList, setPersonalList] = useState([]); // This is initially an empty list

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogCollection = collection(db, 'personal');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPersonalList(blogList);
      } catch (error) {
        console.error('Error fetching proj posts:', error);
      }
    };

    fetchBlogs();
  }, []);
  
  // This is where we are going to put the edits/deletes
  const deletePersonal = async (id) => {
    if (window.confirm('Are you sure you want to delete this project post?')) {
      try {
        await deleteDoc(doc(db, 'personal', id));
        setPersonalList(personalList.filter(blog => blog.id !== id));
      } catch (error) {
        console.error('Error deleting document: ', error);
        alert('Error deleting personal post');
      }
    }
  };

  // The following is for edit
  const navigate = useNavigate();
const editBlog = (id) => {
  const encodedpersonalId = encodeURIComponent(id);
 navigate(`/editpersonal/${encodedpersonalId}`)
  
}

  return (
    <>
      <Box
        width={"100vh"}
        padding={3}
        sx={{ backgroundColor: "grey", borderRadius: "4px" }}
      >
        <Grid container spacing={3} direction={"column"}>

          {personalList.map( (per) => (<Grid item>
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 150, height: 150 }}
                image="https://via.placeholder.com/150"
                alt="Card Image"
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5" component="div">
                  {per.title}
                </Typography>
              </CardContent>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton
                  aria-label="edit"
                  onClick={() => editBlog(per.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={ () => {deletePersonal(per.id)}}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>))}


        </Grid>
      </Box>
    </>
  );
};
// So this is where we are going to edit our interests

export default PersonalAdmin;
