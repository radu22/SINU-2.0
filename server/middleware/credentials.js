const allowedOrigins = require('../config/allowedOrigins')
const credentials = (res, req, next) => {
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)){
        res.header({'Access-Control-Allow-Credentials': 'http://localhost:3000'});
    }
    next();
}
module.exports = credentials