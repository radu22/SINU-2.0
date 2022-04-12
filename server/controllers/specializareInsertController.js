const {specializare} = require("../models");

const insertNewSpecializare = async (req, res) => {
    const body = req.body
    try {
        const spec = await specializare.create(
            {
                nume_specializare: body.nume_specializare,
                numar_ani: body.numar_ani,
                facultateId: body.facultateId,
            })

        return res.json(spec)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
module.exports = { insertNewSpecializare };