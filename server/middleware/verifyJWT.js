const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authToken = req.get('x-access-token');
    if(!authToken) return res.sendStatus(401);
    jwt.verify(
        authToken,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) return res.sendStatus(403); // invalid token
            req.user = decoded.username;
            next();
        }
    )

}

module.exports = verifyJWT