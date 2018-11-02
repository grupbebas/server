const jwt = require('jsonwebtoken')
require('dotenv').config()
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID
const client = new OAuth2Client(CLIENT_ID)
const User = require('../models/users')

module.exports = {
    isLogin: (req, res, next) => {
        let token = req.headers.token
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                // next("Please Login first")
                res.status(400).json({err: err})
            } else {
                User.findOne({
                    email: decoded.email
                })
                .then((result) => {
                    if(result){
                        req.decoded = decoded
                        next()
                    } else {
                        res.status(400).json({msg: 'forbiden'})
                    }
                }).catch((err) => {
                    res.status(400).json({err: err})
                });
                
            }
        })
    },
    validGoogleToken(req, res, next){
        client.verifyIdToken({
            idToken: req.body.token,
            audience: CLIENT_ID
        }, function(err, result) {
            if(err){
                res.send(500).json(err)
            } else {
                const payload = result.getPayload();
                // console.log(payload);
                let user = {
                    email: payload.email,
                    name: payload.name,
                    picture: payload.picture
                }
                req.decoded = user
                next()
            }
        })
    }
    
}