import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";
import background from '../assets/authbackground.png'

function SignInPage() {
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (userName !== "" && passWord !== "") {
      try {
        const response = await axiosInstance.post("api/auth/login", {
          username: userName,
          password: passWord,
        });
        if (response.status === 200) {
          Cookies.set("token", response.data.token, {
            expires: 7,
            secure: true,
          });
          navigate("/main");
        }
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 400) {
          setOpen(true);
        }
      }
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <Typography>The username or password is incorrect.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>

      <Box
        sx={{
          fontFamily:"Italiana",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          background: `url(${background}) no-repeat center center`,
          backgroundSize: "cover",
          position: "relative",
          overflow: "hidden",
          '::before': {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.0)",
            backdropFilter: "blur(10px)",
            zIndex: 1,
          }
        }}
      >
        <Box
          sx={{
            fontFamily:"Italiana",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "12px",
            padding: "40px 60px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
            maxWidth: "400px",
            width: "100%",
            scale: "1.2"
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
            Sign In
          </Typography>
          <Box sx={{ width: "100%", fontFamily:"Italiana", }}>
            <TextField
              label="Email Address"
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
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontFamily:"Italiana",
              padding: "12px",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              borderRadius: "8px",
              '&:hover': {
                backgroundColor: "#F0F0F0",
              },
              marginBottom: "20px",
            }}
            disabled={userName === "" || passWord === ""}
            onClick={handleSubmit}
          >
            SIGN IN
          </Button>
          <Typography
            sx={{
              fontFamily:"Italiana",
              color: "#FFFFFF",
              fontSize: "14px",
            }}
          >
            Don’t have an account?{" "}
            <Typography
              component="span"
              sx={{
                fontFamily:"Italiana",
                textDecoration: "underline",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SignInPage;
