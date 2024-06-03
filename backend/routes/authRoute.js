import express from "express";
import { login } from "../controllers/auth/login.js";
import { register } from "../controllers/auth/register.js";
import { checkauth } from "../controllers/auth/jwt.js";
import { getId } from "../controllers/pet_profile/getId.js";

const authRouter = express.Router();

authRouter.get("/getId", checkauth, getId);
authRouter.post("/login", login);
authRouter.post("/register", register);

export default authRouter;