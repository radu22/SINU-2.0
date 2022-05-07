const {student, profesor} = require("../models");
const {Op} = require("sequelize");
const getPersonalDetails = async (req, res) => {
    const {cnp} = req.body;
    try {
        let result = await student.findOne({
            where: {
                cnp: {
                    [Op.eq]: cnp
                },
            }
        })

        if(!result){
            result = await profesor.findOne({
                where: {
                    cnp: {
                        [Op.eq]: cnp
                    },
                }
            })
        }
        console.log(result)
        return res.status(200).json(result)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: "Something went wrong"})
    }

}

module.exports = {getPersonalDetails}