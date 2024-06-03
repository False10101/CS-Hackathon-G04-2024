import Navbar from "../components/Navbar";
import {Box} from "@mui/material";
import Description from "../components/Description";

const MainPage=()=>{
  return(
    <Box sx={{
      height: "100vh",
      width: "100vw",
      overflow:"hidden"
    }}>
        <Navbar/>
        <Description/>
    </Box>
  );
}
export default MainPage;