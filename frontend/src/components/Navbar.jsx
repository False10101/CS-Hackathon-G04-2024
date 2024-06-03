import { Box, Button, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import Cookies from 'js-cookie';


const allRoutes = ["Home Page", "Pet Profile", "Wellness Tips", "Community Support", "Emergency Clinic"];
const routeToPath = {
  "Home Page": "/main",
  "Pet Profile": "/pet_profile",
  "Wellness Tips": "/wellness_tips",
  "Community Support": "/community_support",
  "Emergency Clinic": "/emergency_clinics"
};

const Navbar = () => {
  const location = useLocation();
  const [route, setRoute] = useState(allRoutes);
  const [category, setCategory] = useState("Community Post");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Update the path state with the current location path
    const path = location.pathname;

    // Define a mapping of paths to route names for filtering
    const pathToRoute = {
      "/": "Home Page",
      "/pet_profile": "Pet Profile",
      "/health_tracker": "Health Tracker",
      "/wellness_tips": "Wellness Tips",
      "/community_support": "Community Support",
      "/emergency_clinics": "Emergency Clinic"
    };

    // Get the route name that corresponds to the current path
    const currentRoute = pathToRoute[path] || "Home Page";

    // Filter out the current route from the allRoutes array
    const filteredRoutes = allRoutes.filter(route => route !== currentRoute);

    // Update the route state with the filtered routes
    setRoute(filteredRoutes);

    // Log the updated routes
  }, [location.pathname, location]); // Add location to the dependencies array

  const handleLogout = () => {
    // Remove the cookie
    Cookies.remove('token');

    // Redirect to the login page or any other page after logout
    window.location.href = '/';
  };

  return (
      <Box sx={{
        display: 'flex',
        fontFamily:"Italiana",
        alignItems: "center",
        height: "max-content",
        paddingX: "2%",
        paddingY: "1%",
        border: "2px",
        borderColor: "black",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        marginBottom: "3%",
      }}>
        <Typography varient="h1" sx={{
          fontWeight: "bold",
          fontSize: "35px",
          alignItems: "center",
          fontFamily:"Italiana",
        }}> P <PetsOutlinedIcon fontSize= "md" sx={{marginX:"-8px"}}/> W PATROL </Typography>
        <Box sx={{display: "flex",
                  flexGrow: "1",
                  justifyContent: "space-between",
                  fontFamily:"Italiana",
                  marginX:"3%",
        }}> 
          {route.map((routeName, index) => (
            <Button variant= "text" key={index} href={routeToPath[routeName]} sx ={{
              fontFamily:"Italiana",
              color: "white",
              display:"flex",
              paddingY:"5px",
              flexGrow:"1",
              fontSize:"16px",
              borderRadius:"0px",
              borderColor: "whitesmoke",
              borderRight: `${index<route.length-1? "2px solid whitesmoke" : "0"}`,
            }}>{routeName}</Button>
          ))}
        </Box>
        <Button onClick={handleLogout} variant="outlined" sx={{
          fontFamily:"Italiana",
          marginX: "1%",
          color: "whitesmoke",
          borderColor: "whitesmoke",
          paddingY:"5px",
          fontSize: "15px",
          border: "3px solid",
          marginRight: "5%",
          "&:hover":{
            backgroundColor : "rgba(255,255,255,0.3)",
            borderColor: "whitesmoke"
          }
        }}> 
          Log Out 
        </Button>
      </Box>
   );
};

export default Navbar;