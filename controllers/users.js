require('dotenv').config()
const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    create: function(req, res){        
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then((result) => {            
            res.status(201).json({ msg: "Register Success, please login :)", data: result })
        })
        .catch((err) => {            
            res.status(500).json({ msg: "create failed", err: err })
        })
    },
    login: function(req, res){ 
        User.findOne({
            email: req.body.email,
            isGoogle: false
        })
        .then((data) => {                                                
            if(!data){
                res.status(400).json({ msg: "user not found" })
            } else {      
                let isPass = bcrypt.compareSync(req.body.password, data.password)   
                if(isPass){             
                    let user = jwt.sign({
                        id: data._id,
                        email: data.email,
                        name: data.name },
                        process.env.JWT_KEY );                              
                    res.status(200).json({ token: user })
                } else {                    
                    res.status(400).json({ msg: "Wrong Password" })
                }
            }
        })
        .catch((err) => {
            res.status(500).json({ msg: err })
        })
    },
    loginGoogle: function(req, res){
        User.findOne({
            email: req.decoded.email,
            isGoogle: true
        })
        .then((data) => {                                                
            if(!data){
                res.status(400).json({ msg: "user not found" })
            } else {        
                let user = jwt.sign({
                    id: data._id,
                    email: data.email,
                    name: data.name,
                    picture: data.picture},
                    process.env.JWT_KEY
                );                              
                res.status(200).json({ token: user })
            }
        })
        .catch((err) => {
            res.status(500).json({ msg: err })
        })
    },
    getUser: function(req, res){
        res.status(200).json(req.decoded)
    }

        

}