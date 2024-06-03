import { Box, Card, CardContent, CardMedia, Typography, Button} from "@mui/material";
import { useLocation } from "react-router-dom";

import Persiancat from "../assets/images/catbreed/persiancat.jpg";
import Siamese from "../assets/images/catbreed/siamesecat.jpg";
import MaineCoon from "../assets/images/catbreed/mainecooncat.jpg";
import Ragdoll from "../assets/images/catbreed/ragdollcat.jpg";
import Bengal from "../assets/images/catbreed/bengalcat.jpg";
import Sphynx from "../assets/images/catbreed/sphynxcat.jpg";
import BritishShortHair from "../assets/images/catbreed/britishshorthaircat.jpg";
import ScottishFold from "../assets/images/catbreed/scottishfoldcat.jpg";
import Abyssinian from "../assets/images/catbreed/abyssiniancat.jpg";
import Siberian from "../assets/images/catbreed/siberiancat.jpg";

import Labradorretriver from "../assets/images/dogbreed/labradorretriver.jpg";
import Germanshepherd from "../assets/images/dogbreed/germanshepherd.jpg";
import Goldenretriever from "../assets/images/dogbreed/goldenretriver.jpg";
import Frenchbulldog from "../assets/images/dogbreed/frenchbulldog.jpg";
import Bulldog from "../assets/images/dogbreed/bulldog.jpg";
import Beagle from "../assets/images/dogbreed/beagle.jpg";
import Poodle from "../assets/images/dogbreed/poodle.jpg";
import Rottweiler from "../assets/images/dogbreed/rottweiler.jpg";
import Yorkshireterrier from "../assets/images/dogbreed/yorkshireterrier.jpg";

import Chihuahua from "../assets/images/dogbreed/chihuahua.jpg";

import Navbar from "../components/Navbar";


const catData = [
  { name: "Persian", imageURL: Persiancat, href: "cat/persian_longhair" },
  { name: "Siamese", imageURL: Siamese,href: "cat/siamese"},
  { name: "Maine Coon", imageURL: MaineCoon, href: "cat/maine_coon" },
  { name: "Ragdoll", imageURL: Ragdoll, href: "cat/ragdoll" },
  { name: "Bengal", imageURL: Bengal, href: "cat/bengal" },
  { name: "Sphynx", imageURL: Sphynx, href: "cat/sphynx" },
  { name: "British ShortHair", imageURL: BritishShortHair, href: "cat/british_short_hair" },
  { name: "Scottish Fold", imageURL: ScottishFold, href: "cat/scottish_fold"},
  { name: "Abyssinian", imageURL: Abyssinian, href: "cat/abyssinian" },
  { name: "Siberian", imageURL: Siberian, href: "cat/siberian" }
];

const dogData = [
  { name: "Labrador retriever", imageURL: Labradorretriver, href: "dog/labrador_retriver" },
  { name: "German Shepherd", imageURL: Germanshepherd, href: "dog/german_shepherd" },
  { name: "Golden Retriever", imageURL: Goldenretriever, href: "dog/golden_retriever" },
  { name: "French Bulldog", imageURL: Frenchbulldog, href: "dog/french_bulldog" },
  { name: "Bulldog", imageURL: Bulldog, href: "dog/bulldog" },
  { name: "Beagle", imageURL: Beagle, href: "dog/beagle" },
  { name: "Poodle", imageURL: Poodle, href: "dog/poodle" },
  { name: "Rottweiler", imageURL: Rottweiler, href: "dog/rottweiler" },
  { name: "Yorkshire Terrier", imageURL: Yorkshireterrier, href: "dog/yorkshireterrier" },
  { name: "Chihuahua", imageURL: Chihuahua, href:"dog/chihuahua" }
];

const BreedSelection = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const lastSegment = pathname.split("/").filter(segment => segment !== "").pop(); // Get the last segment of the path

  const catOrDog = lastSegment === "cat" ? "cat" : "dog"; // Assuming "cat" if not specified

  return (
    <Box sx={{fontFamily:"Italiana",height:"100vh", overflow:"hidden"}}>
      <Navbar />
      <Box sx={{
        height: "75vh",
        width: "90vw",
        display: "grid",
        margin: "auto",
        fontFamily:"Italiana",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 3
      }}> 
        {catOrDog === "cat" ? (
          catData.map(({ name, imageURL, href }, index) => (
            <Button href={href} sx={{
              height:"100%",
              fontFamily:"Italiana",
              width:"100%",
              "&:hover": {
                borderColor:"rgba(0, 0, 0, 0.25)",
                color:"rgba(0, 0, 0, 0.25)",
              }
              }}>
            <Card key={index} sx={{
              height: "32vh",
              width: "13vw",
              margin: "auto",
              fontFamily:"Italiana",
              borderRadius: "15px",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
            }}>
              <CardMedia
                component="img"
                image={imageURL}
                alt={name}
                sx={{
                  height: "70%",
                  width: "85%",
                  fontFamily:"Italiana",
                  borderRadius: "30px",
                  objectFit: "cover"
                }}
              />
              <CardContent sx={{
                display: "flex",
                alignItems: "center",
                fontFamily:"Italiana",
                justifyContent: "center",
                padding: "8px 0",
                width: "100%"
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  color: 'whitesmoke',
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily:"Italiana",
                  width: "100%"
                }}>
                  {name}
                </Typography>
              </CardContent>
            </Card>
            </Button>
          ))
        ) : (
          dogData.map(({ name, imageURL, href }, index) => (
            <Button href={href} sx={{
              height:"100%",
              width:"100%",
              fontFamily:"Italiana",
              "&:hover": {
                borderColor:"rgba(0, 0, 0, 0.25)",
                color:"rgba(0, 0, 0, 0.25)",
              }
              }}>
            <Card key={index} sx={{
              height: "32vh",
              width: "13vw",
              margin: "auto",
              borderRadius: "15px",
              fontFamily:"Italiana",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
            }}>
              <CardMedia
                component="img"
                image={imageURL}
                alt={name}
                sx={{
                  height: "70%",
                  width: "85%",
                  borderRadius: "30px",
                  fontFamily:"Italiana",
                  objectFit: "cover"
                }}
              />
              <CardContent sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily:"Italiana",
                padding: "8px 0",
                width: "100%"
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  color: 'whitesmoke',
                  fontWeight: "bold",
                  fontFamily:"Italiana",
                  textAlign: "center",
                  width: "100%"
                }}>
                  {name}
                </Typography>
              </CardContent>
            </Card>
            </Button>
          ))
        )}
        
      </Box>
    </Box>
  );
}

export default BreedSelection;