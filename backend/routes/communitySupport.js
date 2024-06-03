import express from "express";
import { getCommunitySupport } from "../controllers/community_support/getCommunitySupport.js";
import { addCommunityPost } from "../controllers/community_support/addCommunityPost.js";
import { deletePost } from "../controllers/community_support/deleteCommunityPost.js";
import { editCommunityPost } from "../controllers/community_support/editCommunityPost.js";

const communityRouter = express.Router();

communityRouter.get("/:type", getCommunitySupport);
communityRouter.post("/addNewPost", addCommunityPost);
communityRouter.patch("/editPost/", editCommunityPost);
communityRouter.delete("/deletePost/:userId/:postId", deletePost);
communityRouter.delete("/deleteCommunity/:userId/:postId", )

export default communityRouter;