const jwt = require('jsonwebtoken')
const User = require('../models/user-model')
const Exceptions = require('../utils/exceptions')
const ErrorHandler = require('../utils/error-handler')

const auth = async (req, res, next) => {
    try{
        console.log("Session :",req.session)
        console.log("Headers :",req.headers)

        let token="empty JWT"
        if(req.session.authToken)
        {
            console.log("From Sessions");
            token= req.session.authToken
        }
        else if(req.header('Authorization')){
            console.log("From Headers");
            token= req.header('Authorization').replace('Bearer ', '')
        }
        else{
            //throw Exceptions.AuthException("MISSING_AUTH", "Please provide Authentication or login at : http://roopvilla-project.herokuapp.com/")
            res.redirect(`/?landing=${req.path.substring(1)}`);
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded.owner, 'TOKENS': token })
        if (!user) {
            throw Exceptions.AuthException("UNAUTHORIZED", "User is not Authenticated, please login at : http://roopvilla-project.herokuapp.com/")
        }

        req.token = token
        req.user = user
        next()

    }
    catch (e)
    {
        if(e instanceof jwt.TokenExpiredError) {res.status(401).send({error: "Token Expired"})}
        ErrorHandler.handleError(e,res)
    }
}

module.exports= {auth}