import db from '../../db/connect.js';
import { validateToken } from '../auth/jwt.js';
import timeStamp from '../../utill/timeStamp.js';
export const getDeposit = (req, res) => {
	const token = req.cookies.token;
	const userId = validateToken(token);
	// const userId = req.body.user_id;
	db.query(
		'SELECT * FROM `banks` WHERE (owner = ? && type = ?) ORDER BY date DESC',
		[userId, 'disposit'],
		(err, re) => {
			if (err) {
				res.status(400).json({
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
		}
	);
};
export const deposit = async (req, res, next) => {
	try {
		// const user_id = req.body.user_id;
		const token = req.cookies.token;
		const userId = validateToken(token);
		const receiver = null;
		const note = req.body?.note;
		const amount = req.body.amount;
		const bank = req.body.bank;
		// eslint-disable-next-line no-undef
		const user = await new Promise((resolve, reject) => {
			db.query(
				'SELECT balance, firstname FROM `users` WHERE id = ?',
				[userId],
				(err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result[0]);
					}
				}
			);
		});

		const data = [
			[
				userId,
				user.firstname,
				receiver,
				note,
				amount,
				bank,
				'deposit',
				timeStamp(),
			],
		];
		db.query(
			'INSERT INTO banks (`owner`, `sender`, `receiver`,`note`, `amount`, `bank`, `type`, `date`) VALUES ?',
			[data],
			(err, result) => {
				if (err) {
					console.log(err);
					throw err;
				} else {
					db.query('UPDATE users SET balance = ? WHERE id = ?', [
						user.balance + amount,
						userId,
						(err) => {
							if (err) {
								console.log(err);
								throw err;
							}
						},
					]);
					return res.json({
						success: true,
						data: 'deposit success',
					});
				}
			}
		);
	} catch (error) {
		res.status(400).json({ error });
		return next();
	}
};