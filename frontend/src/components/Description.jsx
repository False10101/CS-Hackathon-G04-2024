import Catimage from "../assets/images/catimage.png";
import { Box, Typography } from "@mui/material";

const Description = () => {
    return (
        <Box sx={{
            fontFamily:"Italiana",
            display: "grid",
            gridTemplateColumns: "45% 55%",
            height: "90%",
            width: "90vw",
            position: "relative",
            justifyContent:"center",
            margin:"auto%",
        }}>
            <img src={Catimage} style={{
                height: "80%",
                width: "auto",
                fontFamily:"Italiana",
                position: "relative",
                display:"flex",
                marginLeft: "auto",
                marginTop:"5%"
            }} alt="Cat" />
            <Box sx={{
                marginTop: "20%",
                width: "100%",
                fontFamily:"Italiana",
                position: "relative"
            }}>
                <Typography variant="h2" sx={{
                    width: "100%",
                    fontFamily:"Italiana",
                    position: "relative"
                }}>
                    "Welcome to PawPatrol"
                </Typography>
                <Typography variant="h3" sx={{
                    width: "100%",
                    position: "relative",
                    fontFamily:"Italiana",
                    margin: "5%",
                    marginX: "12%"
                }}>
                    Your All-in-One Pet Care Companion
                </Typography>
                <Box sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.15)",
                    marginY: "5%",
                    padding: "5%",
                    width: "50%",
                    borderRadius: "15px",
                    fontFamily:"Italiana",
                    marginX: "12%",
                    position: "relative",
                    wordWrap: "break-word" 
                }}>
                    <Typography variant="h4" sx={{
                        fontWeight: "bold",
                        width: "100%",
                        fontFamily:"Italiana",
                        marginY: "3%"
                    }}>
                        Our goal:
                    </Typography>
                    <Typography variant="h5" sx={{
                        fontFamily:"Italiana",
                        width: "100%"
                    }}>
                        PawPatrol aims to simplify pet care by offering comprehensive health tracking, safety alerts, and community support, ensuring your pets are healthy, safe, and happy.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Description;