import database from "../../database/database.js";

export const getCommunitySupport = async (req, res) => {
    try {

        const type = req.params.type; 

        const [posts] = await database.promise().query(`SELECT * from community_support WHERE type =?`, [type]);

        const result = [];

        for (const post of posts) {
            
            const [profile] = await database.promise().query(`SELECT username FROM pet_profile`);
            const username = profile.length ? profile[0].username : null;

            result.push({
                id: post.id,
                uid: post.uid,
                type: post.type,
                title: post.title,
                body:post.body,
                username:username,
                
            });
        }

        const response = {re: result};
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}
 
