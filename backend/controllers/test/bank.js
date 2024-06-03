import db from "../../db/connect.js";
export const getHistory = (req, res) => {
  db.query("SELECT * FROM `banks` ORDER BY `date` DESC", (err, re) => {
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
export const editBill = (req, res) => {
  console.log(req, res);
};
