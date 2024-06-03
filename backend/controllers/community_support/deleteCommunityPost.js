import { query } from "express";
import database from "../../database/database.js";
import { validateToken } from "../auth/jwt.js";

export const deletePost = async (req, res) => {
    const postId = req.params.postId;
	const userId =req.params.userId;

    console.log(userId, postId);
	database.query('DELETE FROM community_support WHERE id = ? AND uid= ?', [postId, userId], (err, re) => {
		if (err) {
            console.log(err);
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

