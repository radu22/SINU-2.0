//TODO: delete controller

const models = require("sequelize");
const {Op} = require("sequelize");

const handleDelete = async (req, res) => {
    const {table, id} = req.body;
    if (!table || !id) return res.status(400).json({'message': 'Table and id are required.'});
    const model = models.models
    // const model = require("../models/"+table);
    // console.log("../models/"+table);
    // if (table in models) {
    //     const model = models.get(table)

        const delTable = await model.destroy(
            {
                where: {
                    id: {
                        [Op.eq]: id
                    }
                }
            });
    // }
    // if(delTable.length === 0) return res.status(400).json({'message': 'Id unrecognized'});
    // if(!delTable) return res.sendStatus(401); // Unauthorized
}
module.exports = { handleDelete };