import { Box, Typography, Select, MenuItem, TextField, Button, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import axios from 'axios';

const PetProfile = () => {
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPetProfile = async () => {
            try {
                const token = Cookies.get('token');
                const response = await axios.get('http://localhost:3000/api/pets/', {
                   withCredentials:true,
                });
                console.log(response)
                const res = response.data.data[0];
                console.log(res);
                setProfileData(res || {}); // Ensure res is not null or undefined
                setLoading(false); // Data fetched, loading complete
            } catch (error) {
                console.error('Error fetching pet profile:', error);
            }
        };

        fetchPetProfile();
    }, []);

    const handleUpdateProfile = async () => {
        try {
            const response = await axios.patch(
                'http://localhost:3000/api/pets/updatePetDetails',
                profileData, // Send profileData directly
                { withCredentials: true }
            );
            console.log('Profile updated successfully:', response.data);
            // Optionally, handle success message or navigate to another page
        } catch (error) {
            console.error('Error updating pet profile:', error);
            // Optionally, display error message to the user
        }
    };

    return (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>
            <Navbar />
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "35% 65%",
                position: "relative",
                overflow: 'hidden',
                height: "82vh",
                paddingY: "3%",
                marginTop: '-3%',
                width: "100vw",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to bottom, #d4af95, #7d624c)"
            }}>
                <Box sx={{
                    position: "relative",
                    left: "250px",
                    bottom: "100px",
                    height: "60%",
                    width: "40%",
                    textAlign: "center",
                }}>
                    <Box sx={{
                        backgroundColor: "rgba(255,255,255,0.35)",
                        height: "40%",
                        padding: "8%",
                        borderRadius: "15px",
                    }}>
                        <PersonOutlineIcon sx={{
                            fontSize: "12rem",
                            marginBottom: 2,
                        }} />
                    </Box>
                    <Typography variant="h3" sx={{
                        marginBottom: 2,
                        marginTop: 2
                    }}>
                        Categories
                    </Typography>
                    <Box sx={{
                        textAlign: "left",
                        marginTop: 2
                    }}>
                        <Typography variant="h4" sx={{ marginBottom: 1 }}>
                            Account
                        </Typography>
                        <Typography variant="h5" sx={{ marginLeft: 2 }}>
                            &#9656; Name
                        </Typography>
                        <Typography variant="h5" sx={{ marginLeft: 2 }}>
                            &#9656; Password
                        </Typography>
                        <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
                            Description
                        </Typography>
                        <Typography variant="h5" sx={{ marginLeft: 2 }}>
                            &#9656; Age
                        </Typography>
                        <Typography variant="h5" sx={{ marginLeft: 2 }}>
                            &#9656; Species
                        </Typography>
                        <Typography variant="h5" sx={{ marginLeft: 2 }}>
                            &#9656; Breed
                        </Typography>
                        <Typography variant="h5" sx={{ marginLeft: 2 }}>
                            &#9656; Color
                        </Typography>
                        <Typography variant="h5" sx={{ marginLeft: 2 }}>
                            &#9656; Gender
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    backgroundColor: "rgba(0,0,0,0.35)",
                    height: "90%",
                    width: "60%",
                    borderRadius: "15px",
                    padding: "3%",
                    position: "relative",
                    marginX: "5%",
                    marginLeft: "10%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
                        Account
                    </Typography>
                    <TextField
                        label="Name"
                        variant="standard"
                        fullWidth
                        value={profileData.username || ""}
                        onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                        InputLabelProps={{
                            sx: {
                                color: 'whitesmoke', 
                                fontSize: "20px",
                                '&.Mui-focused': {
                                    color: 'whitesmoke', 
                                },
                            },
                        }}
                        sx={{ marginBottom: 2, 
                            borderRadius: "4px",
                            borderBottom:"3px solid white",
                            "& .MuiInputBase-input": {
                                color: 'whitesmoke',
                                fontSize: "25px",
                            },
                        }}
                    />
                    <TextField
                        label="Password"
                        variant="standard"
                        fullWidth
                        value={profileData.password || ""}
                        onChange={(e) => setProfileData({...profileData, password: e.target.value})}
                        InputLabelProps={{
                            sx: {
                                color: 'whitesmoke', 
                                fontSize: "20px",
                                '&.Mui-focused': {
                                    color: 'whitesmoke', 
                                },
                            },
                        }}
                        sx={{ marginBottom: 2, 
                            borderRadius: "4px",
                            borderBottom:"3px solid white",
                            "& .MuiInputBase-input": {
                                color: 'whitesmoke',
                                fontSize: "25px",
                            },
                        }}
                    />
                    <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
                        Description
                    </Typography>
                    <TextField
                        label="Age"
                        variant="standard"
                        fullWidth
                        value={profileData.age || ""}
                        onChange={(e) => setProfileData({...profileData, age: e.target.value})}
                        InputLabelProps={{
                            sx: {
                                color: 'whitesmoke', 
                                fontSize: "20px",
                                '&.Mui-focused': {
                                    color: 'whitesmoke', 
                                },
                            },
                        }}
                        sx={{ marginBottom: 2, 
                            borderRadius: "4px",
                            borderBottom:"3px solid white",
                            "& .MuiInputBase-input": {
                                color: 'whitesmoke',
                                fontSize: "25px",
                            },
                        }}
                    />
                    <Select
                        label="Species"
                        variant="standard"
                        fullWidth
                        value={profileData.species || ""}
                        onChange={(e) => setProfileData({...profileData, species: e.target.value})}
                        InputLabelProps={{
                            sx: {
                                color: 'whitesmoke', 
                                fontSize: "20px",
                                '&.Mui-focused': {
                                    color: 'whitesmoke', 
                                },
                            },
                        }}
                        sx={{ marginBottom: 2, 
                            borderRadius: "4px",
                            borderBottom:"3px solid white",
                            "& .MuiInputBase-input": {
                                color: 'whitesmoke',
                                fontSize: "25px",
                            },
                        }}
                    >
                        <MenuItem value="Cat">Cat</MenuItem>
                        <MenuItem value="Dog">Dog</MenuItem>
                    </Select>
                    <TextField
                        label="Breed"
                        variant="standard"
                        fullWidth
                        value={profileData.breed || ""}
                        onChange={(e) => setProfileData({...profileData, breed: e.target.value})}
                        InputLabelProps={{
                            sx: {
                                color: 'whitesmoke', 
                                fontSize: "20px",
                                '&.Mui-focused': {
                                    color: 'whitesmoke', 
                                },
                            },
                        }}
                        sx={{ marginBottom: 2, 
                            borderRadius: "4px",
                            borderBottom:"3px solid white",
                            "& .MuiInputBase-input": {
                                color: 'whitesmoke',
                                fontSize: "25px",
                            },
                        }}
                    />
                    <TextField
                        label="Color"
                        variant="standard"
                        fullWidth
                        value={profileData.color || ""}
                        onChange={(e) => setProfileData({...profileData, color: e.target.value})}
                        InputLabelProps={{
                            sx: {
                                color: 'whitesmoke', 
                                fontSize: "20px",
                                '&.Mui-focused': {
                                    color: 'whitesmoke', 
                                },
                            },
                        }}
                        sx={{ marginBottom: 2, 
                            borderRadius: "4px",
                            borderBottom:"3px solid white",
                            "& .MuiInputBase-input": {
                                color: 'whitesmoke',
                                fontSize: "25px",
                            },
                        }}
                    />
                    <RadioGroup
                        row
                        name="gender"
                        value={profileData.gender || ""}
                        onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
                        InputLabelProps={{
                            sx: {
                                color: 'whitesmoke', 
                                fontSize: "20px",
                                '&.Mui-focused': {
                                    color: 'whitesmoke', 
                                },
                            },
                        }}
                        sx={{ marginBottom: 2, 
                            borderRadius: "4px",
                            "& .MuiInputBase-input": {
                                color: 'whitesmoke',
                                fontSize: "25px",
                            },
                        }}
                    >
                        <FormControlLabel value="M" control={<Radio />} label="Male" />
                        <FormControlLabel value="F" control={<Radio />} label="Female" />
                    </RadioGroup>
                    <Button
                        variant="contained"
                        onClick={handleUpdateProfile}
                        sx={{
                            alignSelf: 'flex-end',
                            backgroundColor: "rgba(255,255,255,0.3)",
                            width: "max-content",
                            marginTop: '2%',
                            paddingX: "2%",
                            paddingY: "1%",
                        }}
                    >
                        Update Profile
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default PetProfile;
