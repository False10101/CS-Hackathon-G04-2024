import { query } from "express";
import database from "../../database/database.js";
import { validateToken } from "../auth/jwt.js";

export const updatePetDetails = async (req, res) => {
    const username = req.body.username;
    const age = req.body.age;
    const species = req.body.species;
    const breed = req.body.breed;
    const photo_url = req.body.photo_url;
    const color = req.body.color;
    const gender = req.body.gender;
    const password = req.body.password;

	const token = req.cookies.token;
	const userId = validateToken(token);

	database.query("UPDATE pet_profile SET username = ?,  age = ?, species = ?, breed = ?, photo_url = ?, color = ?, gender = ?, password =?  WHERE id = ?", [username,  age, species, breed, photo_url, color, gender, password, userId], (err, re) => {
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


