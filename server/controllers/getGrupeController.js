const {student, facultate, specializare} = require("../models");
const {Op} = require("sequelize");

const getFacultati = async (req, res) => {
    try {
        const resultFacultati =await facultate.findAll()
        console.log(resultFacultati)
        return res.status(200).json(resultFacultati)
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: "Something went wrong"})
        }
}

const getFacultate = async (req, res) => {
    const{facult, spc}= req.body;

    try {
        const resultFacultate = await facultate.findAll( {
            where: {
                nume_facultate: {
                    [Op.eq]: facult
                },
            }
        });
        console.log(resultFacultate)

        const resultSpecializare = await specializare.findAll( {
            where: {
                faculateId: {
                    [Op.eq]: resultFacultate[0].dataValues.id
                },
                nume_specializare: {
                    [Op.eq]: spc
                }
            }
        });
        console.log(resultSpecializare)
        return res.status(200).json(resultSpecializare)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: "Something went wrong"})
    }
}
const getGrupe = async (req, res) => {
    const{spec, grupa}= req.body;
    try{
        const resultStudenti = await student.findAll( {
            where: {
                nume_specializre: {
                    [Op.eq]: spec
                },
                grupa: {
                    [Op.eq]: grupa
                },
            }
        });
        console.log(resultStudenti)
        return res.status(200).json(resultStudenti)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: "Something went wrong"})
    }
}

module.exports = {getFacultate,getGrupe,getFacultati}
