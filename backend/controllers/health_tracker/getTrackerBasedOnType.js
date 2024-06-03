import { query, request } from "express";
import database from "../../database/database.js";

export const getTrackerBasedOnType = async (req, res) => {
	const type = req.params.type;
	// const userId = validateToken(token);
	database.query('SELECT * FROM health_tracker WHERE type = ?', [type], (err, re) => {
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
