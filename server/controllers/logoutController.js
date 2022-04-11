const {user} = require("../models");
const {Op} = require("sequelize");

const handleLogout = async (req, res) => {
    // On client, delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;

    const foundUser = await user.findAll({
        where: {
            refreshToken: {
                [Op.eq]: refreshToken
            },
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