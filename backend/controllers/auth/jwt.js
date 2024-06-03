import jwt from 'jsonwebtoken';

const JWTSecretKey = process.env.secretKey;
//move this value to .env and import it here instead
// also Change it to your student ID

export const generateToken = (id) => {
	const token = jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
			userId: id,
		},
		JWTSecretKey
	);
	return token;
};

export const validateToken = (token) => {
	const id = jwt.verify(token, JWTSecretKey);
	console.log(id)
	return id.userId;
};

export const checkauth = (req, res, next,err) => {
	try {
		const token = req.cookies.token;
		if (token) {
			if (!jwt.verify(token, JWTSecretKey)) {
				throw err;
			}
		} else {
			throw err;
		}
		next();
	} catch (err) {
		console.error(err);
		return res
			.status(401)
			.json({ success: false, message: 'Invalid token' });
	}
};