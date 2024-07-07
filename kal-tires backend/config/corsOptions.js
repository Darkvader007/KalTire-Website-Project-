const allowedOrigin = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback)=> {
        if(allowedOrigin.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('not alowed by cors'))
        }
    },
    Credentials: true,
    optionsSuccessStatus: 200,
}

module.exports = corsOptions