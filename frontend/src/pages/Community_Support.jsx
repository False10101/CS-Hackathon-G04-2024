import * as React from 'react';
import { Box, Card, CardContent, Typography, List, ListItemText, ListItemButton, TextField, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const styles = {
    container: {
        height: '100vh',
        overflow: 'hidden',
        fontFamily:"Italiana",
        scrollbars: ''
    },
    mainContent: {
        display: 'flex',
        padding: '3%',
        fontFamily:"Italiana",
        backgroundColor: 'rgba(0,0,0,0.05)',
        height: '85%',
        marginTop: '-3%',
        paddingTop: "3%",
    },
    sidebar: {
        marginLeft: "-1.5%",
        width: '15%',
        fontFamily:"Italiana",
        borderRight: '1px solid #ccc',
        paddingRight: '20px',
    },
    content: {
        width: '90%',
        paddingLeft: '20px',
        fontFamily:"Italiana",
        overflow: 'auto'
    },
    card: {
        padding: '15px',
        marginBottom: '20px',
        fontFamily:"Italiana",
        backgroundColor: 'rgba(255,255,255,0.3)',
        height: "max-content"
    },
    username: {
        paddingLeft: '5px',
        display: "flex",
        textAlign: "bottom",
        fontFamily:"Italiana",
        textTransform: "uppercase",

    },
    title: {
        paddingLeft: '15px',
        paddingTop: '10px',
        fontFamily:"Italiana",
        flexGrow: "1",
        fontWeight: "bold"

    },
    body: {
        paddingLeft: '15px',
        paddingTop: '10px',
        fontFamily:"Italiana",

    },
    newPostForm: {
        paddingBottom: "2%",
        marginBottom: '20px',
        padding: '20px',
        fontFamily:"Italiana",
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(255,255, 255,0.1)',
    },
    formField: {
        marginBottom: '15px',
        fontFamily:"Italiana",
    },
};

const CommunitySupport = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);
    const [communityType, setCommunityType] = useState('community_post');
    const [newPost, setNewPost] = useState({ title: '', body: '' });
    const [userId, setUserId] = useState(null); // Add state to store user ID

    const handleCommunityType = (e) => {
        setCommunityType(e.currentTarget.id);
        console.log(communityType);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevNewPost) => ({
            ...prevNewPost,
            [name]: value,
        }));
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/community_support/${communityType}`);
            const data = await response.json();
            setPosts(data.re);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (postId) => {
        try {
            const userToken = Cookies.get('token');
            if (!userToken) {
                // Handle case when user token is not available
                console.error('User token not found.');
                return;
            }
            console.log(postId);
            const response = await axios.delete(
                `http://localhost:3000/api/community_support/deletePost/${userId}/${postId}`,

            );

            fetchData();
        } catch (error) {
            // Handle other errors, like network issues
            console.error('Error deleting post:', error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newPost.title || !newPost.body) {
            // If any field is empty, display an alert or handle it accordingly
            console.error('Please fill in all fields');
            return;
        }

        try {
            const userToken = Cookies.get('token');
            if (!userToken) {
                // Handle case when user token is not available
                console.error('User token not found.');
                return;
            }

            const response = await axios.post(
                'http://localhost:3000/api/community_support/addNewPost',
                { ...newPost, type: communityType },
                {
                    withCredentials: true,
                }
            );

            if (response.status === 200) {
                // No need to append to existing posts, just fetch new data
                fetchData();
                setNewPost({ title: '', body: '', type: communityType });
            } else {
                // Handle errors from the server
                console.error('Error creating post:', response.statusText);
            }
        } catch (error) {
            // Handle other errors, like network issues
            console.error('Error creating post:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, [communityType]); // Fetch data when community type changes

    useEffect(() => {
        // Function to retrieve user ID from backend
        const getUserId = async () => {
            try {
                const userToken = Cookies.get('token');
                const response = await axios.get('http://localhost:3000/api/auth/getId', {
                    withCredentials: true,
                });
                console.log("user id")
                console.log(response)
                setUserId(response.data.uid);
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        // Call getUserId function when component mounts
        getUserId();
    }, []);


    return (
        <Box sx={styles.container}>
            <Navbar />
            <Box sx={styles.mainContent}>
                <Box sx={styles.sidebar}>
                    <List component="nav">
                        <Typography variant='h4' sx={{fontFamily:"Italiana", marginY: "2%"  }}>Categories</Typography>
                        <ListItemButton id="community_post" sx={{fontFamily:"Italiana", marginLeft: "10%" }} onClick={handleCommunityType}>
                            <ListItemText sx={{fontFamily:"Italiana", scale: '1.2', paddingLeft: "1%" }} primary="Community Post" />
                        </ListItemButton>
                        <ListItemButton id="lost_and_found" sx={{fontFamily:"Italiana", marginLeft: "10%" }} onClick={handleCommunityType}>
                            <ListItemText sx={{ fontFamily:"Italiana",scale: '1.2', paddingLeft: "1%" }} primary="Lost & Found" />
                        </ListItemButton>
                    </List>
                </Box>
                <Box sx={styles.content}>
                    <Card sx={styles.newPostForm}>
                        <Typography variant="h4" sx={{fontFamily:"Italiana", marginY: "15px", fontWeight: "bold" }}>Create New Post</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Post Title"
                                name="title"
                                value={newPost.title}
                                onChange={handleInputChange}
                                sx={styles.formField}
                            />
                            <TextField
                                fullWidth
                                label="Post Body"
                                name="body"
                                value={newPost.body}
                                onChange={handleInputChange}
                                multiline
                                rows={4}
                                sx={styles.formField}
                            />
                            <Button type="submit" fullWidth variant="contained" sx={{
                                backgroundColor: "rgba(0,0,0,0.35)",
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.35)",
                                    borderColor: "rgba(0,0,0,0.35)",
                                }
                            }}>
                                Submit
                            </Button>

                        </form>
                    </Card>
                    <Typography variant='h3' sx={{fontFamily:"Italiana", paddingY: "1%" }}>- News Feed -</Typography>
                    {posts.map((post) => (
                        <Card key={post.id} sx={styles.card}>
                            <CardContent sx={{fontFamily:"Italiana", height: "max-content", margin: 0 }}>

                                <Typography variant="h4" component="div" sx={styles.username}>
                                    <AccountCircleIcon fontSize='large' sx={{fontFamily:"Italiana", margin: "-2px", paddingTop: "2px", paddingRight: '10px' }} />
                                    {post.username}
                                </Typography>
                                <Box sx={{fontFamily:"Italiana", display: "flex" }}>

                                    <Typography variant="h5" component="div" sx={styles.title}>
                                        {post.title}
                                    </Typography>

                                </Box>
                                <Typography variant="h6" sx={styles.body}>
                                    {post.body}
                                </Typography>
                                <Box sx={{fontFamily:"Italiana", display: "flex", margin: "auto", width: "max-content" }}>
                                    {post.uid === userId && (
                                        <Link style={{fontFamily:"Italiana", display: "flex", width: "20vw", margin: "auto", textDecoration: "none" }} to={`/community_support/edit/${post.username}/${post.id}`} >
                                            <Button sx={{ 
                                                fontFamily:"Italiana",
                                                flexGrow: "1",
                                                marginTop: "10%",
                                                backgroundColor : "rgba(0,0,0,0.35)",
                                                "&:hover":{
                                                    backgroundColor :"rgba(0,0,0,0.35)",
                                                    borderColor: "rgba(0,0,0,0.35)"
                                                  }
                                        }} variant='contained' >
                                                Edit
                                            </Button>
                                        </Link>
                                    )}
                                    {post.uid === userId && (
                                        <Button variant='contained' sx={{ 
                                            fontFamily:"Italiana",
                                            display: "flex", 
                                            flexGrow: "1",
                                            marginX: "20%", 
                                            marginTop: "3%",
                                            width: "20vw" ,
                                            backgroundColor : "rgba(0,0,0,0.35)",
                                            "&:hover":{
                                                backgroundColor :"rgba(0,0,0,0.35)",
                                                borderColor: "rgba(0,0,0,0.35)"
                                              }}} onClick={() => handleDelete(post.id)}>
                                            Delete
                                        </Button>
                                    )}
                                </Box>
                            </CardContent>

                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default CommunitySupport;