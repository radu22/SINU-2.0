const express = require('express')
const {sequelize, student} = require('./models')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())

//app.use(credentials);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
// middleweare for cookies
app.use(cookieParser());

// routes
app.use('/register', require('./routes/register'))
app.use('/verifyCnp', require('./routes/verifyCnp'))
app.use('/auth', require('./routes/auth'))
app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/abc'))
app.use('/getFacultati', require('./routes/getFacultati'))
app.use('/insert', require('./routes/studentInsert'))
app.use('/getPersonalDetails', require('./routes/getPersonalDetals'))
app.use('/getUserDetails', require('./routes/getUserDetails'))


app.use('/delete', require('./routes/deleteTable'))
app.use('/insertProf', require('./routes/profesorInsert'))
app.use('/insertFacultate', require('./routes/facultateInsert'))
app.use('/insertSpecializare', require('./routes/specializareInsert'))
app.use('/insertMaterie', require('./routes/materieInsert'))
app.use('/insertExamen', require('./routes/examenInsert'))
app.use('/insertRezultatExamen', require('./routes/rezultatExamenInsert'))

app.use(verifyJWT);


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
        await sequelize.sync({alter: true});
        console.log('Database synced')
    }
)

