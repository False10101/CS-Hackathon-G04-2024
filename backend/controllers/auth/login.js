import bcrypt from 'bcrypt';
import { generateToken } from './jwt.js';
import database from '../../database/database.js';  //import when ready

export const login = (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;
	try {
		database.query(
			'SELECT id ,password FROM `pet_profile` WHERE username = ?',
			[username],
			async (err, user) => {
				if (err) {
					throw err;
				} else {
					if (user.length == 0) {
						return res.status(400).send('username not found');
					} else if (
						bcrypt.compare(password, user[0].password) == false
					) {
						return res.status(400).send('password not correct');
					} else {
						const id = user[0].id;
						const token = generateToken(id);
						res.cookie('token', token);
						return res.status(200).json({ token: token });
					}
				}
			}
		);
	} catch (error) {
		next();
		return res.status(400).json({
			payload: error,
		});
	}
};