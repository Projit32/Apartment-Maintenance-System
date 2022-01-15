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
        user : req.user,
        path: "home"
    })
})

router.get("/stats", MiddleWare.auth, async(req, res)=>{
    res.render('stats', {
        user : req.user,
        path:"stats"
    })
})

router.get("/mailer", MiddleWare.auth, async(req, res)=>{
    res.render('mailer', {
        user : req.user,
        path:"mailer"
    })
})

router.get("/monthly", MiddleWare.auth, async(req, res)=>{
    res.render('monthly', {
        user : req.user,
        path: "monthly"
    })
})

router.get("/tech", MiddleWare.auth, async(req, res)=>{
    res.render('tech', {
        user : req.user,
        path: "tech"
    })
})

router.get("/password", MiddleWare.auth, async(req, res)=>{
    res.render('password', {
        user : req.user,
        path: "password"
    })
})
module.exports= router