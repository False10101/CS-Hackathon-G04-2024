import database from "../database/database.js";

export const getWellnessTips = (req, res) => {
    const species = req.params.species;
    const route = req.params.route;
  database.query(
    "SELECT * FROM wellness_tips WHERE wellness_tips.species = ? AND wellness_tips.route = ?", [species, route],
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
