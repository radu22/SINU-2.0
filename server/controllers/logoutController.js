const {user} = require("../models");
const {Op} = require("sequelize");

const handleLogout = async (req, res) => {
    const username = req.body.username;
    if (!username) return res.sendStatus(204); // No content
    const foundUser = await user.findAll({
        where: {
            username: {
                [Op.eq]: username
            }
        }
    });
    console.log(foundUser)
    if(foundUser.length === 0) {
        res.clearCookie('jwt',{ httpOnly: true, sameSite: 'None'});
        return res.sendStatus(204);
    }

    // Delete the refreshToken
    await foundUser[0].update({
        refreshToken: ''
    })
    console.log('Cookie deleted')
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None'})
    res.sendStatus(204);
}

module.exports = { handleLogout }