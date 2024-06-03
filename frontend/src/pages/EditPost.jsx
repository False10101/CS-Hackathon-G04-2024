import { Box, Card, CardMedia, CardContent, Typography, Button, TextField} from "@mui/material";
import Navbar from "../components/Navbar"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const { postId } = useParams(); // Get the postId from route params
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title || !body) {
            // If any field is empty, display an alert or handle it accordingly
            console.error('Please fill in all fields');
            return;
        }
        
        try {
            const response = await fetch(`http://localhost:3000/api/community_support/editPost/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postId: postId,
                    title: title,
                    body: body,
                    
                }),
            });

            if (response.ok) {
                // Post updated successfully, navigate to community_support page
                navigate('/community_support');
            } else {
                console.error('Failed to update post');
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

  return (
    <Box>
      <Navbar />
      <Box p={3} sx={{
        fontFamily:"Italiana",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        margin:"auto",
        display:"inline-block",
        width: "85%",
        height: "max-content",
        marginX: "6%",
        marginY: "3%",
        padding:"2%"
      }}>
        <Typography variant="h4" gutterBottom sx={{
            display: 'flex',
            fontFamily:"Italiana",
            alignItems: 'center',}} >
          <AccountCircleIcon sx={{
            fontSize: "80px",
          }}/>
          UserName
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Title"
            variant="filled"
            margin="normal"
            onChange={handleTitleChange}
            InputProps={{
              sx: {fontFamily:"Italiana", fontSize: '40px'  }  // Custom font size for the input text
            }}
            InputLabelProps={{
              sx: {fontFamily:"Italiana", fontSize: '20px' }  // Custom font size for the input label
            }}
            sx={{ marginBottom: 2,
              fontFamily:"Italiana",
              backgroundColor: "rgba(255,255,255,0.3)"
            }}
          />
          <TextField
            fullWidth
            label="Body"
            variant="filled"
            multiline
            rows={6}
            margin="normal"
            onChange={handleBodyChange}
            InputProps={{
              sx: {fontFamily:"Italiana", fontSize: '30px' }  // Custom font size for the input text
            }}
            InputLabelProps={{
              sx: {fontFamily:"Italiana", fontSize: '20px' }  // Custom font size for the input label
            }}
            sx={{ 
              marginBottom: 2 ,
              fontFamily:"Italiana",
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          />
          <Button type="submit" onClick={handleSubmit} variant="contained" sx={{
            backgroundColor:"rgba(255,255,255,0.3)",
            width: "max-content",
            display: "flex",
            fontFamily:"Italiana",
            marginLeft: "auto",
            marginTop: "2%",
            paddingX:"2%",
            paddingY: "1%"
            }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default EditPost;