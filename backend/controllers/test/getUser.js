import db from '../../db/connect.js';
import { validateToken } from "../auth/jwt.js";
export const getUser = async (req, res) => {
	const userId = validateToken(token);
	db.query('SELECT * FROM `users` WHERE id = ?', [userId], (err, re) => {
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
