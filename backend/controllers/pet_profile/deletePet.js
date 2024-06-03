import database from "../../database/database.js";

export const deletePet = async (req, res) => {
    const userId = 4;
    const postId = req.params.postId;

    try {
        const deleteComments = new Promise((resolve, reject) => {
            database.query('DELETE FROM comments WHERE uid = ?', [userId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const deleteCommunitySupport = new Promise((resolve, reject) => {
            database.query('DELETE FROM community_support WHERE uid = ?', [userId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const deletePetProfile = new Promise((resolve, reject) => {
            database.query('DELETE FROM pet_profile WHERE id = ?', [userId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const results = await Promise.all([deleteComments, deleteCommunitySupport, deletePetProfile]);

        res.json({
            success: true,
            data: results,
            error: null,
        });
    } catch (err) {
        res.json({
            success: false,
            data: null,
            error: err.message,
        });
    }
};
