import express from 'express';
import {getPet} from '../controllers/pet_profile/getPet.js';
import { updatePetDetails } from '../controllers/pet_profile/updatePet.js';
import { deletePet } from '../controllers/pet_profile/deletePet.js';

const petRouter = express.Router();

petRouter.get("/", getPet);
petRouter.patch("/updatePetDetails", updatePetDetails);
petRouter.delete("/deletePet", deletePet);

export default petRouter;