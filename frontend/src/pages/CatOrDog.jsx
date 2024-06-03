import { Box, Card, Button, CardContent, CardMedia, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import WellnessPDog  from "../assets/images/WellnessPDog.jpg";
import WellnessPCat  from "../assets/images/WellnessPCat.jpg";

const CatOrDog = () => {
        return (
            <Box sx={{
              height: "100vh",
              width: "100vw",
              fontFamily:"Italiana",
              }}> 
              <Navbar/>
            <Box sx={{
              marginTop: "10%",
              display: "flex",
              fontFamily:"Italiana",
              justifyContent: "space-around", // Adjusted to space out the buttons/cards
              marginX: "10%"
            }}>
              
              <Button href="wellness_tips/dog" sx={{ textDecoration: 'none' }}>
                <Card sx={{
                  height: "max-content", // Increased height
                  width: "25vw", // Increased width
                  borderRadius: "15px",
                  display: "flex",
                  paddingY: "5%",
                  fontFamily:"Italiana",
                  flexDirection: "column",
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                }}>
                  <CardMedia
                    sx={{
                      height: "30vh",
                      width: "80%",
                      fontFamily:"Italiana",
                      borderRadius: "30px",
                      margin:"auto",
                      marginY: "3%",
                    }}
                    image={WellnessPDog}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1 ,
                  }}>
                    <Typography variant="h3"sx={{
                      color: 'whitesmoke',
                      fontWeight: "bold",
                      fontFamily:"Italiana",
                      textAlign: "center",
                      height: "min-content"
                    }}>Dog 
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
        
              <Button href="wellness_tips/cat" sx={{ textDecoration: 'none', height:"max-content" }}>
                <Card sx={{
                  height: "max-content", // Increased height
                  width: "25vw", // Increased width
                  borderRadius: "15px",
                  fontFamily:"Italiana",
                  display: "flex",
                  paddingY: "5%",
                  flexDirection: "column",
                  backgroundColor: "rgba(0, 0, 0, 0.35)"
                }}>
                  <CardMedia
                    sx={{
                      height: "30vh",
                      width: "80%",
                      borderRadius: "30px",
                      margin:"auto",
                      marginY: "3%",
                      fontFamily:"Italiana",
                    }}
                    image={WellnessPCat}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1 ,
                    alignContent: "center",
                    fontFamily:"Italiana",
                    height: "max-content"
                    }}>
                    <Typography variant="h3" sx={{
                      color: 'whitesmoke',
                      fontWeight: "bold",
                      fontFamily:"Italiana",
                      textAlign: "center",
                      height: "min-content"
                    }}>
                      Cat 
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
              </Box>
            </Box>
    );
}

export default CatOrDog;
