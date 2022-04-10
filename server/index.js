const express = require('express')
const { sequelize, student } = require('./models')

const app = express()
app.use(express.json())

// routes
app.use('/insert', require('./routes/studentInsert'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))

app.get('/find', async (req, res) => {
    try {
        const studs = await student.findAll()

        return res.json(studs)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: "Something went wrong"})
    }
})
// app.get('/find/:cnp', async (req, res) => {
//     const cnp = req.params.cnp
//     try {
//         const studs = await student.findOne({
//             where: {tempCnp: cnp}
//         })
//
//         return res.json(studs)
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({error: "Something went wrong"})
//     }
// })

app.listen({port: 3001}, async () => {
    console.log('Server running on port 3001')
    await sequelize.sync({ alter: true });
    console.log('Database synced')
    }
)

