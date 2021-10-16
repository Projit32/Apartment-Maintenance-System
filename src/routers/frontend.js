const express = require('express')
const Exceptions = require('../utils/exceptions')
const ErrorHandler = require('../utils/error-handler')
const MiddleWare = require('../middleware/auth')
const router = new express.Router()

router.get("/", async(req, res)=>{
    res.render('login')
})

router.get("/home", MiddleWare.auth, async(req, res)=>{
    res.render('home', {
        user : req.user
    })
})

router.get("/stats", MiddleWare.auth, async(req, res)=>{
    res.render('stats', {
        user : req.user
    })
})

router.get("/mailer", MiddleWare.auth, async(req, res)=>{
    res.render('mailer', {
        user : req.user
    })
})

router.get("/monthly", MiddleWare.auth, async(req, res)=>{
    res.render('monthly', {
        user : req.user
    })
})
module.exports= router