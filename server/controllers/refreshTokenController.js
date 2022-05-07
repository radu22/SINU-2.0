const {user} = require("../models");
const {Op} = require("sequelize");

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {
    console.log("@@@@@@@@@@")
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None'});

    const foundUser = await user.findAll({
        where: {
            refreshToken: {
                [Op.eq]: refreshToken
            },
        }
    });

    // Detected refresh token reuse!
    if (foundUser.length === 0) {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if(err) return res.sendStatus(403); // Forbidden
                const hackedUser = await user.findOne({
                    where: {
                        username:decoded.user
                    }
                })
                await hackedUser.update({
                    refreshToken: ''
                })

            }
        )
        return res.sendStatus(403);
    }

    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if(err) {
                foundUser[0].update({
                    refreshToken: ''
                })
            }
            if (err || foundUser[0].dataValues.username !== decoded.username) return res.sendStatus(403)

            // Refresh token was still valid
            const accessToken = jwt.sign(
                {"username": foundUser[0].dataValues.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '30m'}
            );

            const newRefreshToken = jwt.sign(
                {"username": foundUser[0].dataValues.username},
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d'}
            );

            // save refreshToken in DB
            await foundUser[0].update({
                refreshToken: newRefreshToken
            })

            res.cookie('jwt', newRefreshToken, {httpOnly: true, sameSite:'None', maxAge: 24 * 60 * 60 * 1000});
            res.json({"accessToken": accessToken, "role": foundUser[0].dataValues.role})
        }
    )

}

module.exports = {handleRefreshToken}