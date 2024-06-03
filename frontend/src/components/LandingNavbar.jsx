import { Box, Button, Typography} from "@mui/material";
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

const LandingNavbar = () => {

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
          fontFamily:"Italiana",
          alignItems: "center",
        }}> P <PetsOutlinedIcon fontSize= "md" sx={{marginX:"-8px"}}/> W PATROL </Typography>
        <Box sx={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "space-between",
                marginX:"3%",
                fontFamily:"Italiana",
                }}> 
            <Button variant= "text" sx ={{
              fontFamily:"Italiana",
              color: "white",
              display:"flex",
              paddingY:"5px",
              flexGrow:"1",
              fontSize:"16px",
              borderRadius:"0px",
              borderColor: "whitesmoke"
            }}></Button>
        </Box>
        <Button href="/signin" variant="outlined" sx={{
          marginX: "1%",
          color: "whitesmoke",
          borderColor: "whitesmoke",
          fontFamily:"Italiana",
          paddingY:"5px",
          fontSize: "15px",
          border: "2px solid",
          "&:hover":{
            backgroundColor : "rgba(255,255,255,0.3)",
            borderColor: "whitesmoke"
          }
        }}>
          Sign in
        </Button>
        <Button href="/signup"variant="outlined" sx={{
          fontFamily:"Italiana",
          marginX: "1%",
          color: "whitesmoke",
          borderColor: "whitesmoke",
          paddingY:"5px",
          fontSize: "15px",
          border: "2px solid",
          "&:hover":{
            backgroundColor : "rgba(255,255,255,0.3)",
            borderColor: "whitesmoke"
          }
        }}> 
          Sign up
        </Button>
      </Box>
   );
};

export default LandingNavbar;