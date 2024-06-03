import {
  Button,
  Box,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import background from '../assets/authbackground.png'


function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
  });


  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFirstName = (value) => {
      setForm({
          ...form,
          firstname: value,
      });
  };
  const handleLastName = (value) => {
      setForm({
          ...form,
          lastname: value,
      });
  };
  const handleEmail = (value) => {
      setForm({
          ...form,
          email: value,
      });
  };
  const handleUsername = (value) => {
      setForm({
          ...form,
          username: value,
      });
  };
  const handlePassword = (value) => {
      setForm({
          ...form,
          password: value,
      });
  };
  const handleSignUp = async () => {
      try {
          const response = await axiosInstance.post("api/auth/register", {
              username: form.username,
              password: form.password
          });

          if (response.status === 200) {
              setOpenSuccessDialog(true);
              setTimeout(() => {
                  navigate("/signin");
              }, 2000);
          }
      } catch (error) {
          console.error("Error signing up:", error);

          setOpenErrorDialog(true);
          setErrorMessage(
              "An error occurred during registration. Please try again."
          );
      }
  };

  const handleCloseSuccessDialog = () => {
      setOpenSuccessDialog(false);
  };

  const handleCloseErrorDialog = () => {
      setOpenErrorDialog(false);
  };

  return (
      <>
          <Box
              sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                  width: "100vw",
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  fontFamily:"Italiana",
              }}
          >
              <Box
                  sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderRadius: "12px",
                      padding: "40px 60px",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      scale:"1.15",
                      fontFamily:"Italiana",
                  }}
              >
                  <Typography
                      sx={{
                        fontFamily:"Italiana",
                          fontWeight: "700",
                          fontSize: { xs: "24px", md: "32px" },
                          color: "#FFFFFF",
                          marginBottom: "20px",
                      }}
                  >
                      Sign Up
                  </Typography>
                  <Box sx={{ width: "100%" }}>

                  <TextField
                          label="Username"
                          variant="outlined"
                          size="medium"
                          fullWidth
                          sx={{
                              marginBottom: "20px",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              borderRadius: "8px",
                              fontFamily:"Italiana",
                              '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                      borderColor: 'rgba(255, 255, 255, 0.5)',
                                  },
                                  '&:hover fieldset': {
                                      borderColor: 'rgba(255, 255, 255, 0.8)',
                                  },
                                  '&.Mui-focused fieldset': {
                                      borderColor: 'rgba(255, 255, 255, 1)',
                                  },
                              },
                              '& .MuiInputLabel-root': {
                                  color: 'rgba(255, 255, 255, 0.7)',
                              },
                              '& .MuiInputLabel-root.Mui-focused': {
                                  color: 'rgba(255, 255, 255, 1)',
                              },
                          }}
                          onChange={(e) => handleUsername(e.target.value)}
                      />
                      
                      
                      <TextField
                          label="Password"
                          type="password"
                          variant="outlined"
                          size="medium"
                          fullWidth
                          sx={{
                            fontFamily:"Italiana",
                              marginBottom: "20px",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              borderRadius: "8px",
                              '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                      borderColor: 'rgba(255, 255, 255, 0.5)',
                                  },
                                  '&:hover fieldset': {
                                      borderColor: 'rgba(255, 255, 255, 0.8)',
                                  },
                                  '&.Mui-focused fieldset': {
                                      borderColor: 'rgba(255, 255, 255, 1)',
                                  },
                              },
                              '& .MuiInputLabel-root': {
                                  color: 'rgba(255, 255, 255, 0.7)',
                              },
                              '& .MuiInputLabel-root.Mui-focused': {
                                  color: 'rgba(255, 255, 255, 1)',
                              },
                          }}
                          onChange={(e) => handlePassword(e.target.value)}
                      />
                  </Box>
                  <Button
                      variant="contained"
                      fullWidth
                      sx={{
                          padding: "12px",
                          backgroundColor: "#FFFFFF",
                          color: "#000000",
                          borderRadius: "8px",
                          fontFamily:"Italiana",
                          '&:hover': {
                              backgroundColor: "#F0F0F0",
                          },
                      }}
                      onClick={handleSignUp}
                  >
                      SIGN UP
                  </Button>
                  <Typography
                      sx={{
                          marginTop: "20px",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontFamily:"Italiana",
                      }}
                  >
                      Already have an account?{" "}
                      <Typography
                          component="span"
                          sx={{
                            fontFamily:"Italiana",
                              color: "#FFFFFF",
                              textDecoration: "underline",
                              cursor: "pointer",
                          }}
                          onClick={() => navigate("/signin")}
                      >
                          Sign In
                      </Typography>
                  </Typography>

                   {/* Success Dialog */}
                  <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
                    <DialogTitle>Registration Successful</DialogTitle>
                    <DialogContent>
                      <Typography>Your registration was successful!</Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseSuccessDialog}>OK</Button>
                    </DialogActions>
                  </Dialog>

                  {/* Error Dialog */}
                  <Dialog open={openErrorDialog} onClose={handleCloseErrorDialog}>
                    <DialogTitle>Error</DialogTitle>
                    <DialogContent>
                      <Typography>{errorMessage}</Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseErrorDialog}>OK</Button>
                    </DialogActions>
                  </Dialog>
              </Box>
          </Box>
      </>
  );
}

export default RegisterPage;
