import express from 'express';
import authRouter from './authRoute.js';
import petRouter from './petRouter.js';
import { getClinics } from '../controllers/getAllClinics.js';
import { getWellnessTips } from '../controllers/getWellnessTips.js';
import { getTrackerBasedOnType } from '../controllers/health_tracker/getTrackerBasedOnType.js';
import communityRouter from './communitySupport.js';

const mainRouter = express.Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/pets", petRouter);
mainRouter.use("/community_support", communityRouter);
mainRouter.use("/emergency_clinic", getClinics);
mainRouter.use("/wellness_tips/:species/:route", getWellnessTips);
mainRouter.use("/heath_tracker/:type", getTrackerBasedOnType);

export default mainRouter;