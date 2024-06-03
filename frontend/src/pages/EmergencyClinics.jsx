import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import Navbar from "../components/Navbar";
import SearchIcon from '@mui/icons-material/Search';

const EmergencyClinics = () => {
    const [search, setSearch] = useState("");
    const [clinics, setClinics] = useState([]);
    const [filteredClinics, setFilteredClinics] = useState([]);

    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/emergency_clinic");
                const data = await response.json();
                setClinics(data.re);
                setFilteredClinics(data.re); // Initially set filteredClinics to all clinics
            } catch (error) {
                console.error("Error fetching clinics:", error);
            }
        };

        fetchClinics();
    }, []);

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);
        // Filter clinics based on search term
        const filtered = clinics.filter((clinic) => {
            return clinic.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                clinic.district.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredClinics(filtered);
    };

    return (
        <Box sx={{ fontFamily: `"Italiana", san-serif`, overflow:"hidden", height:"100vh"}}>
            <Navbar />
            <Box sx={{
                width: "80vw",
                backgroundColor: "rgba(0,0,0,0.3)",
                padding: "3%",
                margin: "auto",
                borderRadius:"10px 10px 0px 0px"

            }}>
                <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", margin:"2%"}}>Emergency Clinics</Typography>
                <TextField
                    variant="outlined"
                    fullWidth
                    size="md"
                    fontFamily="Italiana"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
                    sx={{
                        display: "flex",
                        alignItems: "center", // Align vertically
                        width: "90%",
                        margin: "auto",
                        fontFamily:"Italiana",
                        marginBottom: "3%",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "30px",
                        textAlign:"center",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                textAlign:"center",
                                borderRadius: "30px",
                            },
                            "&:hover fieldset": {
                                
                                borderRadius: "30px",
                            },
                            "&.Mui-focused fieldset": {
                                
                                borderRadius: "30px",
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Box sx={{height:"80vh",
                overflow:"auto"}}> 
                {filteredClinics.map((clinic, index) => (
                    <Box key={index} sx={{ margin: "2%", borderBottom:"1px solid white", paddingBottom:"5px", lineHeight:"5px"}}>
                        <Typography fontFamily={"Italiana"} variant="h5" sx={{fontWeight:"bold"}}>Name:  {clinic.name}</Typography>
                        <Typography fontFamily={"Italiana"} variant="h6">Location:  {clinic.location}, {clinic.district}, {clinic.city}</Typography>
                        <Typography fontFamily={"Italiana"} variant="h6">Phone Number:  {clinic.ph_no}</Typography>
                        <Typography fontFamily={"Italiana"} variant="h6">Opening Time:  {clinic.opening_time} - Closing Time:   {clinic.closing_time}</Typography>
                    </Box>
                ))}
                </Box>
            </Box>
        </Box>
    );
}

export default EmergencyClinics;
