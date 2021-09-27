const express = require('express')
const Exceptions = require('../utils/exceptions')
const ErrorHandler = require('../utils/error-handler')
const router = new express.Router()

router.get("/", async(req, res)=>{
    res.render('home', {
        title : "hello world"
    })
})

module.exports= router