const {student} = require("../models");

const insertNewStudent = async (req, res) => {
    const body = req.body
    try {
        const stud = await student.create(
            {
                nume: body.nume,
                prenume: body.prenume,
                cnp: body.cnp,
                email: body.email,
                telefon: body.telefon,
                data_nasterii: new Date(body.data_nasterii),
                an: body.an,
                grupa: body.grupa,
                limba: body.limba,
                nr_catalog: body.nr_catalog,
                specializareId: body.specializareId

            })

        return res.json(stud)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
module.exports = { insertNewStudent };