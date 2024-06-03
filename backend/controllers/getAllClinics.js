import database from "../database/database.js";

export const getClinics = (req, res) => {
  database.query(
    "SELECT * FROM `emergency_clinic`",
    (err, re) => {
      if (err) {
        res.status(400).json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        return res.json({
          re
        });
      }
    }
  );
};
