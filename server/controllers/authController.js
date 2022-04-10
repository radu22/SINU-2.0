const {user} = require("../models");
const {Op} = require("sequelize");

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const {username, pwd} = req.body;
    //TODO:
    // query all cnp from Student and Profesor
    // check if req cnp is valid
    // if not return 'Student unrecognized' status 400

    if (!username || !pwd) return res.status(400).json({'message': 'Username and password are required.'});

    const result = await user.findAll({
        where: {
            username: {
                [Op.eq]: username
            },
        }
    });

    if(result.length === 0) return res.status(400).json({'message': 'User unrecognized'});



    if(!result) return res.sendStatus(401); // Unauthorized
    // evaluate password
    const match = await bcrypt.compare(pwd, result[0].dataValues.password);
    if(match){
        // create JWTs
        res.json({'success': 'User '+ result[0].dataValues.username + ' is logged in!'});
    } else{
        res.sendStatus(401).json({'message': 'Wrong Password'});;
    }
}

module.exports = {handleLogin}