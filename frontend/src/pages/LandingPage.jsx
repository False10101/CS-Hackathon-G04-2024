import {Box} from "@mui/material";
import Description from "../components/Description";
import LandingNavbar from "../components/LandingNavbar";

const LandingPage=()=>{
  return(
    <Box sx={{
      height: "100vh",
      width: "100vw",
      overflow:"hidden"
    }}>
        <LandingNavbar/>
        <Description/>
    </Box>
  );
}
export default LandingPage;