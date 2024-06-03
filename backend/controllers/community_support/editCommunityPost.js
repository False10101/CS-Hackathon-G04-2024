import { query } from "express";
import database from "../../database/database.js";
import { validateToken } from "../auth/jwt.js";

export const editCommunityPost = async (req, res) => {
    const body = req.body.body;
    const title = req.body.title;
    const postId= req.body.postId;

	database.query("UPDATE community_support SET  body = ?, title = ? WHERE id = ?", [ body, title, postId], (err, re) => {
		if (err) {
			res.json({
				success: false,
				data: null,
				error: err.message,
			});
		} else {
			return res.json({
				success: true,
				data: re,
				error: null,
			});
		}
	});
};


