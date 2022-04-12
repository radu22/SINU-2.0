const {user} = require("../models");
const {Op} = require("sequelize");

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundUser = await user.findAll({
        where: {
            refreshToken: {
                [Op.eq]: refreshToken
            },
        }
    });

    if(foundUser.length === 0) return res.sendStatus(403);
    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || foundUser[0].dataValues.username !== decoded.username) return res.sendStatus(403)
            const accessToken = jwt.sign(
                { "username": foundUser[0].dataValues.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30m' }
            );
            res.json({ accessToken })
        }
    )

}

module.exports = { handleRefreshToken }