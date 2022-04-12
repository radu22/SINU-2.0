const {materie} = require("../models");

const insertNewMaterie = async (req, res) => {
    const body = req.body
    try {
        const mat = await materie.create(
            {
                specializareId: body.specializareId,
                profesorId: body.profesorId,
                nume: body.nume,
                an: body.an,
                numar_credite: body.numar_credite,
            })

        return res.json(mat)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
module.exports = { insertNewMaterie };