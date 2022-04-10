const {profesor} = require("../models");

const insertNewProfesor = async (req, res) => {
    const body = req.body
    try {
        const prof = await profesor.create(
            {
                nume: body.nume,
                prenume: body.prenume,
                cnp: body.cnp,
                rol: body.rol,
            })

        return res.json(prof)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
module.exports = { insertNewProfesor };