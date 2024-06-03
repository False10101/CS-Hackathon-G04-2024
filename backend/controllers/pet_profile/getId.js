import { validateToken } from "../auth/jwt.js";

export const getId = async (req, res) => {
	const token = req.cookies.token;
	const uid = validateToken(token);
	
	res.json({uid: uid});
};
