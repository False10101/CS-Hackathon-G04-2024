import db from "../../db/connect.js";
import { validateToken } from "../auth/jwt.js";
export const getBalance = (req, res) => {
  const userId = validateToken(token);
  db.query(
    "SELECT `balance` FROM `users` WHERE id = ? ",
    [userId],
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
