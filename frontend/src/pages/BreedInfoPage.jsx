import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const BreedInfoPage = () => {


    const [breedInfo, setBreedInfo] = useState(null);
    const location = useLocation();
    const pathParts = location.pathname.split("/");
    const species = pathParts[2];
    const route = pathParts[3];

    useEffect(() => {
        const fetchBreedInfo = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/wellness_tips/${species}/${route}`);
                const data = await response.json();
                setBreedInfo(data.re[0]);
            } catch (error) {
                console.error("Error fetching breed info:", error);
            }
        };

        fetchBreedInfo();
    }, [species, route]);

    return (
        <Box>
            <Navbar />
            {breedInfo && (
                <Box>
                    <Card sx={{ fontFamily:"Italiana",height: "30vh", width: "20vw", margin: "auto", borderRadius: "15px", backgroundColor: "rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", padding: 2 }}>
                        <CardMedia image={breedInfo.breed_image} sx={{fontFamily:"Italiana", margin: "auto", height: "85%", width: "85%", borderRadius: "30px", objectFit: "cover" }} />
                        <CardContent sx={{ fontFamily:"Italiana", display: "flex", alignItems: "center", justifyContent: "center", width: "max-content" }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily:"Italiana",color: 'whitesmoke', fontWeight: "bold", textAlign: "center", width: "100%" }}>
                                {breedInfo.breed}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Box sx={{ fontFamily:"Italiana",marginLeft: "5%" }}>
                        <Box sx={{fontFamily:"Italiana",borderBottom: "2px solid white", width: "95%" }}>
                            <Typography variant="h3" sx={{fontFamily:"Italiana", marginY: "1%" }}>
                                Nutrition
                            </Typography>
                            <Typography variant="h6" sx={{fontFamily:"Italiana", width: "90%", marginLeft: "4%", marginY: "1%" }}>
                                {breedInfo.specific_food}
                            </Typography>
                            <Typography variant="h5" sx={{ fontFamily:"Italiana",marginLeft: "2%", marginY: "1%" }}>
                                Specific Food
                            </Typography>
                            <Typography variant="h6" sx={{ fontFamily:"Italiana",width: "90%", marginLeft: "4%", marginY: "1%" }}>
                                - {breedInfo.diet_food}
                            </Typography>
                            <Typography variant="h5" sx={{ fontFamily:"Italiana",marginLeft: "2%", marginY: "1%" }}>
                                Diet Food
                            </Typography>
                            <Typography variant="h6" sx={{ fontFamily:"Italiana",width: "90%", marginLeft: "4%", marginY: "1%" }}>
                                - {breedInfo.diet_food}
                            </Typography>
                        </Box>
                        <Box sx={{ fontFamily:"Italiana",borderBottom: "2px solid white", width: "95%" }}>
                            <Typography variant="h3" sx={{ fontFamily:"Italiana",marginY: "1%" }}>
                                Physical Activities
                            </Typography>

                            <Typography variant="h5" sx={{ fontFamily:"Italiana",marginLeft: "2%", marginY: "1%" }}>
                                Playfulness
                            </Typography>
                            <Typography variant="h6" sx={{ fontFamily:"Italiana",width: "90%", marginLeft: "4%", marginY: "1%" }}>
                                {breedInfo.playfulness}
                            </Typography>
                        </Box>
                        <Box sx={{ fontFamily:"Italiana",borderBottom: "2px solid white", width: "95%" }}>
                            <Typography variant="h3" sx={{ fontFamily:"Italiana",marginY: "1%" }}>
                                Hygiene
                            </Typography>
                            <Typography variant="h5" sx={{ fontFamily:"Italiana",marginLeft: "2%", marginY: "1%" }}>
                                Groom & Spa
                            </Typography>
                            <Typography variant="h6" sx={{ fontFamily:"Italiana",width: "90%", marginLeft: "4%", marginY: "1%" }}>
                                {breedInfo.hygiene}
                            </Typography>
                        </Box>
                        <Typography variant="h3" sx={{ fontFamily:"Italiana",marginY: "1%" }}>
                            Health
                        </Typography>
                        <Typography variant="h5" sx={{ fontFamily:"Italiana",marginLeft: "2%", marginY: "1%" }}>
                            Common Health Issues
                        </Typography>
                        <Typography variant="h6" sx={{fontFamily:"Italiana", width: "90%", marginLeft: "4%", marginY: "1%" }}>
                            - {breedInfo.health_issue}
                        </Typography>
                        <Typography variant="h6" sx={{fontFamily:"Italiana", width: "90%", marginLeft: "4%", marginTop: "1%", marginBottom: "3%" }}>
                            - Reference Link:
                            {breedInfo.reference_link.split(",").map((link, index) => (
                                <div key={index}>
                                    <a href={link.trim()} target="_blank" rel="noopener noreferrer">
                                        - {link.trim()}
                                    </a>
                                </div>
                            ))}
                        </Typography>

                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default BreedInfoPage;
