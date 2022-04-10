const bcrypt = require('bcrypt')
const {student, user, profesor} = require("../models");
const {Op} = require("sequelize");

const handleNewUser = async (req, res) => {
    const {cnp, username, pwd, email} = req.body;
    if (!cnp || !username || !pwd || !email) return res.status(400).json({'message': 'CNP, username and password are required.'});


    // query all cnp from Student and Profesor
    // check if req cnp is valid
    // if not return 'Student unrecognized' status 400
    let role = 'STUDENT';
    let result = await student.findAll({
        where: {
            cnp: {
                [Op.eq]: cnp
            }
        }
    });
    if(result.length === 0){
    role = 'PROFESOR';
     result = await profesor.findAll({
        where: {
            cnp: {
                [Op.eq]: cnp
            }
        }
    });}
    if(result.length === 0) return res.status(400).json({'message': {role} + ' unrecognized'});

    // check for duplicate CNP in users
    const duplicate = await user.findAll({
        where: {
            cnp: {
                [Op.eq]: cnp
            }
        }
    });
    if(duplicate.length !== 0) return res.status(409).json({'message': 'Account already exists!'}); // conflict

    try{
        // encrypt pwd
        const hashedPwd = await bcrypt.hash(pwd, 10);
        // store the new user
        const newUser = {"cnp": cnp, "username": username, "password": hashedPwd, "email": email, "role": role,};
        //insert user in users
        user.create({
            cnp: newUser.cnp,
            username: newUser.username,
            password: newUser.password,
            email: newUser.email,
            role: newUser.role
        });

        res.status(201).json({'success': 'New users' + newUser.username + ' created' });
    }catch (err){
        res.status(500).json({'message': err.message });
    }

}

module.exports = {handleNewUser};