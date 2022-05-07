const {user} = require("../models");
const {Op} = require("sequelize");

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
    console.log(req.body)
    const {username, pwd} = req.body;
    if (!username || !pwd) return res.status(400).json({'message': 'Username and password are required.'});

    const result = await user.findAll({
        where: {
            username: {
                [Op.eq]: username
            },
        }
    });

    if(result.length === 0) return res.status(400).json({'message': 'User unrecognized'});



    // if(!result) return res.status(401); // Unauthorized

    // evaluate password
    const match = await bcrypt.compare(pwd, result[0].dataValues.password);
    if(match){
        // create JWTs
        const accessToken = jwt.sign(
            {"username": result[0].dataValues.username},
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30m'}
        );
        const refreshToken = jwt.sign(
            {"username": result[0].dataValues.username},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d'}
        );

        // save refreshToken in DB
        await result[0].update({
            refreshToken: refreshToken
        })
        res.cookie('jwt', refreshToken, {httpOnly: true, sameSite:'None', maxAge: 24 * 60 * 60 * 1000});
        res.json({ "accessToken": accessToken, "role": result[0].dataValues.role });
    } else{
        res.status(401).json({'message': 'Username or password are not correct'});
    }
}

module.exports = {handleLogin}