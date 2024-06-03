import { query } from "express";
import database from "../../database/database.js";
import { validateToken } from "../auth/jwt.js";

export const addCommunityPost = async (req, res) => {
    // const uid = req.body.uid;
    const type = req.body.type;
    const body = req.body.body;
    const title = req.body.title;
    const token = req.cookies.token;
	const uid = validateToken(token);
	database.query('INSERT INTO community_support (uid, type, body, title) VALUES (?, ?, ?, ?) ', [uid, type, body, title], (err, re) => {
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
