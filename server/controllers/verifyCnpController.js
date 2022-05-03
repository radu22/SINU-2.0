const {student, profesor, user} = require("../models");
const {Op} = require("sequelize");
const bcrypt = require("bcrypt");


const verifyCnp = async (req, res) => {
    const {cnp} = req.body;
    if (!cnp) return res.status(400).json({'message': 'CNP is required'});


    let role = 'STUDENT';
    let result = await student.findAll({
        where: {
            cnp: {
                [Op.eq]: cnp
            }
        }
    });
    if (result.length === 0) {
        role = 'PROFESOR';
        result = await profesor.findAll({
            where: {
                cnp: {
                    [Op.eq]: cnp
                }
            }
        });
    }
    if (result.length === 0) return res.status(400).json({'message': 'CNP unrecognized'});

    const duplicate = await user.findAll({
        where: {
            cnp: {
                [Op.eq]: cnp
            }
        }
    });
    if (duplicate.length !== 0) return res.status(409).json({'message': 'Account already exists!'}); // conflict

    return res.status(201).json({'message': 'CNP found. This CNP is assigned with the role' + {role}});
}
module.exports={verifyCnp};