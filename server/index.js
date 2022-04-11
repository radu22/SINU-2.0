const express = require('express')
const { sequelize, student } = require('./models')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json())


// middleweare for cookies
app.use(cookieParser());

// routes
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/logout'))

app.use(verifyJWT);
app.use('/insertProf', require('./routes/profesorInsert'))
app.use('/insert', require('./routes/studentInsert'))


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

