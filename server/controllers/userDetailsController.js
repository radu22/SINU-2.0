const {user} = require("../models");
const {Op} = require("sequelize");
const getUserDetails = async (req, res) => {
    const {username} = req.body;
    try {
        const result = await user.findAll({
            where: {
                username: {
                    [Op.eq]: username
                },
            }
        });
        console.log(result)
        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: "Something went wrong"})
    }

}

module.exports = {getUserDetails}