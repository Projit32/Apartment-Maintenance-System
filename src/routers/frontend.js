const express = require('express')
const Exceptions = require('../utils/exceptions')
const ErrorHandler = require('../utils/error-handler')
const MiddleWare = require('../middleware/auth')
const router = new express.Router()

router.get("/", async(req, res)=>{
    let landing='/home';
    if(req.query.landing){
      landing=`/${req.query.landing}`;
    }
    res.render('login', {landing})
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
router.get("/mom", MiddleWare.auth, async(req, res)=>{
    res.render('mom', {
        user : req.user,
        path: "mom"
    })
})
router.get("/reserve", MiddleWare.auth, async(req, res)=>{
    res.render('reserve', {
        user : req.user,
        path: "reserve"
    })
})
module.exports= router