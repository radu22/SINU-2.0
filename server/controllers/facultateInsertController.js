const {facultate} = require("../models");

const insertNewFacultate = async (req, res) => {
    const body = req.body
    try {
        const facult = await facultate.create(
            {
                nume_facultate: body.nume_facultate,
                nume_decan: body.nume_decan,
            })

        return res.json(facult)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
module.exports = { insertNewFacultate };