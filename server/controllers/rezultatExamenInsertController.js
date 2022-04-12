const {rezultat_examen} = require("../models");

const insertNewRezultatExamen = async (req, res) => {
    const body = req.body
    try {
        const rez = await rezultat_examen.create(
            {
                    studentId: body.studentId,
                    examenId: body.examenId,
                    nota: body.nota,
            })
        return res.json(rez)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
module.exports = { insertNewRezultatExamen };