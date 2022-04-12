const {examen} = require("../models");

const insertNewExamen = async (req, res) => {
    const body = req.body
    try {
        const exam = await examen.create(
            {
                materieId: body.materieId,
                data: body.data,
                forma_examinare: body.forma_examinare,
            })

        return res.json(exam)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
module.exports = { insertNewExamen };