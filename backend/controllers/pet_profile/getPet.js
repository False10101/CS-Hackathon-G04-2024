import { query, request } from "express";
import database from "../../database/database.js";
import { validateToken } from "../auth/jwt.js";

export const getPet = async (req, res) => {
	// const userId = 1;
	console.log(req.cookies.token);
	const token = req.cookies.token;
	const userId = validateToken(token);
	console.log(userId)
	database.query('SELECT * FROM `pet_profile` WHERE id = ?', [userId], (err, re) => {
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
