import bcrypt from 'bcrypt';
import database from '../../database/database.js';  //import when ready

export const register = async (req, res, next) => {
	try {
		const username = req.body.username;
		const password = req.body.password;
		const existingUser = await database
			.promise()
			.query('SELECT * FROM `pet_profile` WHERE username = ?', [username]);
		if (existingUser[0].length > 0) {
			return res
				.status(400)
				.json({ success: false, payload: 'Username already exists' });
		}

		const data = [
			[username, password],
		];
		await database
			.promise()
			.query(
				'INSERT INTO `pet_profile` (`username`, `password`) VALUES  ?',
				[data]
			);

		return res
			.status(200)
			.json({ success: true, payload: 'register successful' });
	} catch (error) {
		return res.status(400).json({ success: false, payload: error.message });
	}
};
